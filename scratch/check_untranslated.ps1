$html = [System.IO.File]::ReadAllText("$PSScriptRoot\..\index.html", [System.Text.Encoding]::UTF8)
$regex = [regex]'<([^>]+)>([^<]*[\u0600-\u06FF]+[^<]*)</'
$matches = $regex.Matches($html)
$untranslated = 0
foreach ($m in $matches) {
    $tag = $m.Groups[1].Value
    $text = $m.Groups[2].Value.Trim()
    if ($tag -notmatch 'data-i18n' -and $tag -notmatch 'script' -and $tag -notmatch 'title') {
        Write-Output "Tag: <$tag> | Text: $text"
        $untranslated++
    }
}
Write-Output "Total untranslated static nodes: $untranslated"
