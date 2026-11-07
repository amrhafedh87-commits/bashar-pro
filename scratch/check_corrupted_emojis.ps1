$files = @("courses_data.js", "courses_level2.js", "courses_level3.js", "exam_data.js")
$d = [char]0x00F0
$win1252 = [System.Text.Encoding]::GetEncoding(1252)

foreach ($fname in $files) {
    $path = "$PSScriptRoot\..\data\$fname"
    $text = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    $lines = $text -split "`n"
    $count = 0
    for ($i = 0; $i -lt $lines.Length; $i++) {
        if ($lines[$i].IndexOf($d) -ge 0) {
            $count++
            if ($count -le 5) {
                Write-Output "Line $($i+1): $($lines[$i].Trim())"
                try {
                    $bytes = $win1252.GetBytes($lines[$i])
                    $fixed = [System.Text.Encoding]::UTF8.GetString($bytes)
                    Write-Output "   -> FIXED: $($fixed.Trim())"
                } catch {
                    Write-Output "   -> ERROR: $($_.Exception.Message)"
                }
            }
        }
    }
    Write-Output "File ${fname}: $count lines containing ð (corrupted emoji)"
}
