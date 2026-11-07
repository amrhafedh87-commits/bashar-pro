$dir = Split-Path $PSScriptRoot -Parent
$files = Get-ChildItem -Path $dir -Recurse -Include *.js, *.html, *.json | Where-Object {
    $_.FullName -notmatch '\\.git' -and $_.FullName -notmatch 'node_modules' -and $_.FullName -notmatch 'scratch'
}

$c1 = [char]0x00D8 # Ø
$c2 = [char]0x00D9 # Ù
$c3 = [char]0x00C3 # Ã
$c4 = [char]0x00C2 # Â

$found = 0
foreach ($f in $files) {
    $text = [System.IO.File]::ReadAllText($f.FullName, [System.Text.Encoding]::UTF8)
    $hasC1 = $text.IndexOf($c1) -ge 0
    $hasC2 = $text.IndexOf($c2) -ge 0
    $hasC3 = $text.IndexOf($c3) -ge 0
    $hasC4 = $text.IndexOf($c4) -ge 0

    if ($hasC1 -or $hasC2 -or $hasC3 -or $hasC4) {
        Write-Output "FOUND in $($f.Name):"
        if ($hasC1) { Write-Output "  Contains [char]0x00D8 (Ø)" }
        if ($hasC2) { Write-Output "  Contains [char]0x00D9 (Ù)" }
        if ($hasC3) { Write-Output "  Contains [char]0x00C3 (Ã)" }
        if ($hasC4) { Write-Output "  Contains [char]0x00C2 (Â)" }
        
        # Print a few samples around the match
        for ($i = 0; $i -lt $text.Length; $i++) {
            $ch = $text[$i]
            if ($ch -eq $c1 -or $ch -eq $c2 -or $ch -eq $c3 -or $ch -eq $c4) {
                $start = [Math]::Max(0, $i - 30)
                $len = [Math]::Min($text.Length - $start, 70)
                $snippet = $text.Substring($start, $len).Replace("`r", " ").Replace("`n", " ")
                Write-Output "    Sample: $snippet"
                break
            }
        }
        $found++
    }
}

Write-Output "Total files with mojibake characters: $found"
