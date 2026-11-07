$pinfo = New-Object System.Diagnostics.ProcessStartInfo
$pinfo.FileName = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$pinfo.Arguments = "--headless=new --disable-gpu --virtual-time-budget=6000 --dump-dom http://localhost:8080/test_live.html"
$pinfo.RedirectStandardOutput = $true
$pinfo.RedirectStandardError = $true
$pinfo.UseShellExecute = $false
$p = New-Object System.Diagnostics.Process
$p.StartInfo = $pinfo
$p.Start() | Out-Null
$stdout = $p.StandardOutput.ReadToEnd()
$stderr = $p.StandardError.ReadToEnd()
$p.WaitForExit()

if ($stdout -match '<div id="testLogs"[^>]*>([\s\S]*?)</div>') {
    Write-Output "--- LIVE TEST RESULTS ---"
    Write-Output $matches[1]
} else {
    Write-Output "STDOUT (first 500 chars):"
    Write-Output $stdout.Substring(0, [Math]::Min(500, $stdout.Length))
    if ($stderr) {
        Write-Output "STDERR: $stderr"
    }
}
