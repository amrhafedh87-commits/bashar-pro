$files = @("courses_data.js", "courses_level2.js", "courses_level3.js", "exam_data.js")
$c1 = [char]0x00D8
$c2 = [char]0x00D9
$win1252 = [System.Text.Encoding]::GetEncoding(1252)

foreach ($fname in $files) {
    $srcPath = "$PSScriptRoot\..\data\$fname"
    $text = [System.IO.File]::ReadAllText($srcPath, [System.Text.Encoding]::UTF8)
    $lines = $text -split "`n"
    $fixedLines = New-Object System.Collections.Generic.List[string]
    $replacedCount = 0
    
    for ($i = 0; $i -lt $lines.Length; $i++) {
        $line = $lines[$i]
        if ($line.IndexOf($c1) -ge 0 -or $line.IndexOf($c2) -ge 0) {
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
    # Check if any mojibake remains
    $remC1 = $outText.IndexOf($c1) -ge 0
    $remC2 = $outText.IndexOf($c2) -ge 0
    
    Write-Output "File ${fname}: fixed $replacedCount lines. Remaining mojibake: $(if ($remC1 -or $remC2) { 'YES' } else { 'NONE' })"
    
    # Save the repaired file with UTF-8 NO BOM
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($srcPath, $outText, $utf8NoBom)
    Write-Output "Successfully saved ${fname} in UTF-8 without BOM."
}
