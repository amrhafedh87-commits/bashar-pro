$text = [System.IO.File]::ReadAllText("$PSScriptRoot\..\data\exam_data.js", [System.Text.Encoding]::UTF8)
$lines = $text -split "`n"
$c1 = [char]0x00D8
$c2 = [char]0x00D9

$win1252 = [System.Text.Encoding]::GetEncoding(1252)

$mojibakeLines = 0
for ($i = 0; $i -lt $lines.Length; $i++) {
    $line = $lines[$i]
    if ($line.IndexOf($c1) -ge 0 -or $line.IndexOf($c2) -ge 0) {
        $mojibakeLines++
        if ($mojibakeLines -le 5) {
            Write-Output "Line $($i+1): $line"
            try {
                $bytes = $win1252.GetBytes($line)
                $fixed = [System.Text.Encoding]::UTF8.GetString($bytes)
                Write-Output "   -> FIXED: $fixed"
            } catch {
                Write-Output "   -> ERROR: $($_.Exception.Message)"
            }
        }
    }
}
Write-Output "Total mojibake lines in exam_data.js: $mojibakeLines"
