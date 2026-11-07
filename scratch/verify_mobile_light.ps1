$pinfo = New-Object System.Diagnostics.ProcessStartInfo
$pinfo.FileName = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$pinfo.Arguments = "--headless=new --disable-gpu --virtual-time-budget=35000 --dump-dom http://localhost:8080/test_mobile_white.html"
$pinfo.RedirectStandardOutput = $true
$pinfo.RedirectStandardError = $true
$pinfo.UseShellExecute = $false
$p = New-Object System.Diagnostics.Process
$p.StartInfo = $pinfo
$p.Start() | Out-Null
$stdout = $p.StandardOutput.ReadToEnd()
$stderr = $p.StandardError.ReadToEnd()
$p.WaitForExit()

if ($stdout -match '<pre id="log"[^>]*>([\s\S]*?)</pre>') {
    Write-Output "--- VERIFICATION TEST LOG ---"
    Write-Output $matches[1]
} else {
    Write-Output "Could not find test log. Raw snippet:"
    Write-Output $stdout.Substring(0, [Math]::Min(1200, $stdout.Length))
}
