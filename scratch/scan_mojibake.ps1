$files = Get-ChildItem -Path "$PSScriptRoot\.." -Recurse -Include *.js, *.html, *.css | Where-Object { 
    $_.FullName -notmatch '\\.git' -and $_.FullName -notmatch 'node_modules' -and $_.FullName -notmatch 'scratch'
}

$mojibakeRegex = [regex]'(\xC3[\x80-\xBF]|\xD8[\x80-\xBF]|\xD9[\x80-\xBF]|Ø|Ù|Ã)'
$totalIssues = 0

foreach ($f in $files) {
    $bytes = [System.IO.File]::ReadAllBytes($f.FullName)
    $text = [System.Text.Encoding]::UTF8.GetString($bytes)
    
    $matches = $mojibakeRegex.Matches($text)
    # Check specifically for patterns like 'Ø§', 'Ù…', 'Ø¹', 'Ø¨', 'Ã—'
    $specificMatches = [regex]::Matches($text, '[ØÙÃÂâé][\x80-\xFF\w]')
    
    if ($matches.Count -gt 0 -or $specificMatches.Count -gt 0) {
        Write-Output "FILE: $($f.FullName)"
        Write-Output "   Regex count: $($matches.Count), Specific count: $($specificMatches.Count)"
        # Show first 3 samples
        $i = 0
        foreach ($m in $matches) {
            if ($i -ge 5) { break }
            $start = [Math]::Max(0, $m.Index - 20)
            $len = [Math]::Min($text.Length - $start, 50)
            $snippet = $text.Substring($start, $len).Replace("`n", " ").Replace("`r", " ")
            Write-Output "   Sample: $snippet"
            $i++
        }
        $totalIssues++
    }
}

Write-Output "Total files with potential mojibake: $totalIssues"
