$files = @("courses_data.js", "courses_level2.js", "courses_level3.js", "exam_data.js")
$c1 = [char]0x00D8
$c2 = [char]0x00D9
$win1252 = [System.Text.Encoding]::GetEncoding(1252)

foreach ($fname in $files) {
    $path = "$PSScriptRoot\..\data\$fname"
    $text = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    $lines = $text -split "`n"
    $emojiLossCount = 0
    
    for ($i = 0; $i -lt $lines.Length; $i++) {
        $line = $lines[$i]
        if ($line.IndexOf($c1) -ge 0 -or $line.IndexOf($c2) -ge 0) {
            # Check if line contains characters with code point > 255
            $hasHighChars = $false
            foreach ($ch in $line.ToCharArray()) {
                if ([int]$ch -gt 255 -and [int]$ch -ne 0x2018 -and [int]$ch -ne 0x2019 -and [int]$ch -ne 0x201C -and [int]$ch -ne 0x201D -and [int]$ch -ne 0x2026 -and [int]$ch -ne 0x2013 -and [int]$ch -ne 0x2014) {
                    $hasHighChars = $true
                    break
                }
            }
            if ($hasHighChars) {
                $emojiLossCount++
                if ($emojiLossCount -le 3) {
                    Write-Output "High char on $fname line $($i+1): $line"
                }
            }
        }
    }
    Write-Output "File ${fname}: $emojiLossCount lines with code point > 255"
}
