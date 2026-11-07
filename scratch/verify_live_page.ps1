$pinfo = New-Object System.Diagnostics.ProcessStartInfo
$pinfo.FileName = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$pinfo.Arguments = "--headless=new --disable-gpu --virtual-time-budget=3000 --dump-dom http://localhost:8080/"
$pinfo.RedirectStandardOutput = $true
$pinfo.RedirectStandardError = $true
$pinfo.UseShellExecute = $false
$p = New-Object System.Diagnostics.Process
$p.StartInfo = $pinfo
$p.Start() | Out-Null
$stdout = $p.StandardOutput.ReadToEnd()
$stderr = $p.StandardError.ReadToEnd()
$p.WaitForExit()

Write-Output "Live Page Output Length: $($stdout.Length)"
if ($stdout.Length -gt 1000) {
    Write-Output "Live Page Loaded Successfully!"
    if ($stdout -match '<html lang="ar" dir="rtl"') {
        Write-Output "Verified: HTML lang is ar, dir is rtl"
    }
    if ($stdout -match 'data-i18n="academyTitle"') {
        Write-Output "Verified: data-i18n attributes are active on live page"
    }
} else {
    Write-Output "Error loading live page"
}
