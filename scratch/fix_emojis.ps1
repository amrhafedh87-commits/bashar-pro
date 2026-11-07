$files = @("courses_data.js", "courses_level2.js")
$d = [char]0x00F0
$win1252 = [System.Text.Encoding]::GetEncoding(1252)

foreach ($fname in $files) {
    $srcPath = "$PSScriptRoot\..\data\$fname"
    $text = [System.IO.File]::ReadAllText($srcPath, [System.Text.Encoding]::UTF8)
    $lines = $text -split "`n"
    $fixedLines = New-Object System.Collections.Generic.List[string]
    $replacedCount = 0
    
    for ($i = 0; $i -lt $lines.Length; $i++) {
        $line = $lines[$i]
        if ($line.IndexOf($d) -ge 0) {
            try {
                $bytes = $win1252.GetBytes($line)
                $fixed = [System.Text.Encoding]::UTF8.GetString($bytes)
                $fixedLines.Add($fixed)
                $replacedCount++
            } catch {
                Write-Output "ERROR on $fname line $($i+1): $($_.Exception.Message)"
                $fixedLines.Add($line)
            }
        } else {
            $fixedLines.Add($line)
        }
    }
    
    $outText = [string]::Join("`n", $fixedLines)
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($srcPath, $outText, $utf8NoBom)
    Write-Output "Successfully repaired $replacedCount emoji lines in ${fname}."
}
