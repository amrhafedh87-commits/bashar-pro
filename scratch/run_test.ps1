$pinfo = New-Object System.Diagnostics.ProcessStartInfo
$pinfo.FileName = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$pinfo.Arguments = "--headless=new --disable-gpu --virtual-time-budget=5000 --dump-dom http://localhost:8080/test_i18n.html"
$pinfo.RedirectStandardOutput = $true
$pinfo.RedirectStandardError = $true
$pinfo.UseShellExecute = $false
$p = New-Object System.Diagnostics.Process
$p.StartInfo = $pinfo
$p.Start() | Out-Null
$stdout = $p.StandardOutput.ReadToEnd()
$stderr = $p.StandardError.ReadToEnd()
$p.WaitForExit()

Write-Output "STDOUT Length: $($stdout.Length)"
if ($stdout -match '<div id="testOutput"[^>]*>([\s\S]*?)</div>') {
    Write-Output "--- TEST RESULTS ---"
    Write-Output $matches[1]
} else {
    Write-Output "Raw stdout snippet:"
    Write-Output $stdout.Substring(0, [Math]::Min(1000, $stdout.Length))
    if ($stderr) {
        Write-Output "STDERR:"
        Write-Output $stderr
    }
}
