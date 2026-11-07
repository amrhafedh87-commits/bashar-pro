$files = @("courses_data.js", "courses_level2.js", "courses_level3.js")
$c1 = [char]0x00D8
$c2 = [char]0x00D9
$win1252 = [System.Text.Encoding]::GetEncoding(1252)

foreach ($fname in $files) {
    $path = "$PSScriptRoot\..\data\$fname"
    $text = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
    $lines = $text -split "`n"
    $count = 0
    $sampleErrors = 0
    
    for ($i = 0; $i -lt $lines.Length; $i++) {
        $line = $lines[$i]
        if ($line.IndexOf($c1) -ge 0 -or $line.IndexOf($c2) -ge 0) {
            $count++
            try {
                $bytes = $win1252.GetBytes($line)
                $fixed = [System.Text.Encoding]::UTF8.GetString($bytes)
            } catch {
                $sampleErrors++
                if ($sampleErrors -le 3) {
                    Write-Output "ERROR on $fname line $($i+1): $($_.Exception.Message)"
                }
            }
        }
    }
    Write-Output "File ${fname} - count: $count mojibake lines, errors: $sampleErrors"
}
