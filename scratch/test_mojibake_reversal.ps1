$text = [System.IO.File]::ReadAllText("$PSScriptRoot\..\data\courses_data.js", [System.Text.Encoding]::UTF8)
$lines = $text -split "`n"
$sample = ""
foreach ($l in $lines) {
    if ($l -match 'levelNameAr') {
        $sample = $l.Trim()
        break
    }
}

Write-Output "Original line in file:"
Write-Output $sample

# Extract the quoted string inside levelNameAr: "..."
if ($sample -match '"([^"]+)"') {
    $val = $matches[1]
    Write-Output "Extracted value: $val"
    try {
        $win1252 = [System.Text.Encoding]::GetEncoding(1252)
        $bytes = $win1252.GetBytes($val)
        $restored = [System.Text.Encoding]::UTF8.GetString($bytes)
        Write-Output "Restored UTF8 from Windows-1252: $restored"
    } catch {
        Write-Output "Error in Windows-1252: $($_.Exception.Message)"
    }
    
    try {
        $iso = [System.Text.Encoding]::GetEncoding("ISO-8859-1")
        $bytes2 = $iso.GetBytes($val)
        $restored2 = [System.Text.Encoding]::UTF8.GetString($bytes2)
        Write-Output "Restored UTF8 from ISO-8859-1: $restored2"
    } catch {
        Write-Output "Error in ISO-8859-1: $($_.Exception.Message)"
    }
}
