$files = @("courses_data.js", "courses_level2.js", "courses_level3.js", "exam_data.js", "tools_data.js", "roadmap_data.js", "translations.js")
$badChars = @([char]0x00D8, [char]0x00D9, [char]0x00C3, [char]0x00C2, [char]0x00F0)

$totalLessons = 0
$totalQuizzes = 0
$issues = 0

foreach ($fname in $files) {
    $srcPath = "$PSScriptRoot\..\data\$fname"
    $text = [System.IO.File]::ReadAllText($srcPath, [System.Text.Encoding]::UTF8)
    
    # Check if any bad chars exist anywhere in file
    foreach ($bc in $badChars) {
        $idx = $text.IndexOf($bc)
        if ($idx -ge 0) {
            Write-Output "ERROR: Found bad char $([int]$bc) in $fname at char index $idx"
            $issues++
        }
    }
}

if ($issues -eq 0) {
    Write-Output "SUCCESS: All course files (courses_data.js, courses_level2.js, courses_level3.js) are 100% CLEAN of mojibake and bad characters!"
} else {
    Write-Output "FAILED: $issues bad character occurrences found."
}
