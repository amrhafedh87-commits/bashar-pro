// Stage 4: Threat Landscape, Attack Vectors & Frameworks (عقلية المهاجم وأطر العمل والتهديدات)
// Curated with exhaustive depth for Eng. Bashar Hafedh - BasharSec Academy

const module4Data = {
  id: "module4",
  stageNumber: 4,
  titleAr: "المرحلة 4: عقلية المهاجم وأطر العمل والتهديدات (Threat Landscape & Frameworks)",
  titleEn: "Stage 4: Threat Landscape, Attack Vectors & Frameworks",
  summaryAr: "عقلية الهاكر والدستور العالمي للمدافعين: تشريح هجمات الويب والبرمجيات الخبيثة، إتقان إطار MITRE ATT&CK، وسلسلة القتل السيبراني Cyber Kill Chain.",
  summaryEn: "Adversary mindset and global cyber defense frameworks: Web attacks, malware taxonomy, MITRE ATT&CK matrix mapping, and Cyber Kill Chain operations.",
  badgeAr: "خبير أطر التهديدات وMITRE",
  badgeEn: "Threat Frameworks & MITRE Specialist",
  icon: "security",
  lessons: [
    {
      id: "lesson-4-1",
      moduleId: "module4",
      number: "4.1",
      titleAr: "مثلث الحماية CIA والتشفير التطبيقي والفرق بين التشفير والترميز والهاش لمحلل الـ SOC",
      titleEn: "CIA Triad, Applied Cryptography, Hashing vs Encryption vs Encoding",
      duration: "60 min",
      theoryAr: `
<h3>حجر الزاوية في الأمن السيبراني: لماذا لا يمكن حماية ما لا تفهم كيف يعمل تشفيره؟</h3>
<p class="lead">أكبر خطأ يقع فيه المبتدئون هو الخلط بين الهاش والتشفير والترميز! إذا رأيت في السجل نصاً يبدأ بـ <code>aW52b2ljZQ==</code> وظننت أنه "مشفر بكلمة سر"، فقد أضعت التحقيق. في هذا الدرس سنفكك المفاهيم الأساسية التي يقوم عليها علم الأمن بالكامل.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 التشبيه الشامل: البصمة، والخزنة ذات المفتاحين، ولغة الإشارة</div>
  <p><strong>1. الهاش (Hashing):</strong> مثل بصمة الإصبع البشرية أو مفرمة اللحم! تضع في المفرمة بقرة كاملة أو صفحة أو كتاباً ضخماً، فتخرج لك قطعة لحم مفرومة صغيرة ذات حجم ثابت (256 بت). <em>الميزة: اتجاه واحد مستحيل العكس!</em> لا يمكنك أخذ اللحم المفروم وإعادة بناء البقرة منه، لكنك تستخدمه للتأكد من أن الملف لم يتغير فيه حرف واحد (Integrity).</p>
  <p><strong>2. التشفير (Encryption):</strong> مثل وضع المستند داخل صندوق فولاذي وقفله بمفتاح (Key). <em>الميزة: اتجاهان قابلان للعكس!</em> إذا امتلكت المفتاح السري، يمكنك فك القفل وقراءة المستند الأصلي فوراً (Confidentiality).</p>
  <p><strong>3. الترميز (Encoding):</strong> مثل لغة الإشارة أو شفرة مورس أو ترجمة الحروف لأرقام (مثل Base64 أو URL Encoding). <em>ليس له أي علاقة بالحماية أو الأمان!</em> هدفه فقط جعل النص صالحاً للنقل عبر الإنترنت والأسلاك، وأي شخص في العالم يستطيع فكه في ثانية واحدة بدون أي مفتاح!</p>
</div>

<h4>1. مثلث الحماية الأبدي (The CIA Triad):</h4>
<ul>
  <li><strong>السرية (Confidentiality):</strong> ضمان ألا يقرأ البيانات إلا المصرح لهم فقط (يتحقق عبر: التشفير AES/RSA، الصلاحيات RBAC، والمصادقة MFA).</li>
  <li><strong>السلامة والتكامل (Integrity):</strong> ضمان ألا يتم التلاعب بالبيانات أو تزويرها أثناء النقل أو التخزين (يتحقق عبر: دوال الهاش SHA-256 والتواقيع الرقمية).</li>
  <li><strong>التوافر (Availability):</strong> ضمان أن تكون الخدمات والخوادم متاحة للعملاء 24/7 دون انقطاع (يتحقق عبر: موازنات الأحمال Load Balancers والنسخ الاحتياطي وحماية DoS).</li>
</ul>

<h4>2. مقارنة شاملة بين الهاش والتشفير والترميز:</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>المفهوم</th>
        <th>الهدف الرئيسي</th>
        <th>هل يحتاج لمفتاح سري؟</th>
        <th>هل يمكن عكسه؟</th>
        <th>أشهر الخوارزميات</th>
        <th>استخدامه في الـ SOC</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Hashing (الهاش)</strong></td>
        <td>فحص السلامة (Integrity) وبصمة الملفات وحفظ كلمات المرور.</td>
        <td>لا (خوارزمية رياضية بحتة)</td>
        <td>مستحيل رياضياً (One-way)</td>
        <td>MD5 (مخترق ضعيف)، SHA-1 (ضعيف)، SHA-256 (القياسي المعتمد عالمياً).</td>
        <td>فحص بصمات الفيروسات في VirusTotal، والتحقق من سلامة الأدلة الجنائية.</td>
      </tr>
      <tr>
        <td><strong>Symmetric Encryption (التشفير المتماثل)</strong></td>
        <td>تشفير كميات ضخمة من البيانات بسرعة فائقة.</td>
        <td>نعم (نفس المفتاح السري للتشفير وفك التشفير).</td>
        <td>نعم (بالمفتاح السري المشترك)</td>
        <td>AES-128, AES-256, ChaCha20.</td>
        <td>تشفير الأقراص الصلبة (BitLocker) وأنفاق الـ VPN وبرمجيات الفدية Ransomware!</td>
      </tr>
      <tr>
        <td><strong>Asymmetric Encryption (التشفير غير المتماثل)</strong></td>
        <td>تبادل المفاتيح الآمن والتوقيع الرقمي.</td>
        <td>نعم (زوج مفاتيح: مفتاح عام Public ومفتاح خاص Private).</td>
        <td>نعم (تشفير بالعام وفك بالخاص)</td>
        <td>RSA, ECC, Diffie-Hellman.</td>
        <td>شهادات الـ SSL/TLS وتوثيق SSH والمصافحة الآمنة.</td>
      </tr>
      <tr>
        <td><strong>Encoding (الترميز)</strong></td>
        <td>نقل البيانات بين الأنظمة المختلفة بأمان دون أخطاء تنسيق.</td>
        <td>لا يوجد مفتاح نهائياً!</td>
        <td>نعم (بسهولة تامة لأي شخص)</td>
        <td>Base64, URL Encoding (Hex %20), ASCII, UTF-8.</td>
        <td>فك تشفير أوامر PowerShell الخبيثة وروابط الويب المشبوهة.</td>
      </tr>
    </tbody>
  </table>
</div>
      `,
      theoryEn: `<h3>CIA Triad, Applied Cryptography, Hashing vs Symmetric/Asymmetric vs Encoding</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: التشفير كسلاح ودرع</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف يستغل الهكر التشفير؟</h4>
    <ul>
      <li><strong>برمجيات الفدية (Ransomware):</strong> توليد مفتاح تشفير متماثل AES-256 محلياً لتشفير كافة ملفات الشركة في ثوانٍ، ثم تشفير هذا المفتاح بمفتاح المهاجم العام RSA-4096! النتيجة: لا يمكن فك الملفات رياضياً إلا بالدفع والحصول على المفتاح الخاص.</li>
      <li><strong>التخفي عبر قنوات SSL/TLS (Encrypted C2):</strong> تغليف حزم التحكم بالخادم الخبيث داخل جلسات HTTPS مشفرة حتى لا يرى جدار الحماية الأوامر المنفذة.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 أدوات محلل الـ SOC في التحليل</h4>
    <ul>
      <li><strong>استخراج وتدقيق الهاشات (Hash Extraction):</strong> سحب بصمة SHA-256 لأي ملف مشبوه والبحث عنها في Threat Intelligence لمعرفة هل هو خبيث ومطابق لعينات سابقة.</li>
      <li><strong>التفتيش العميق للترافيك المشفر (SSL Decryption):</strong> فك تشفير حركة الويب الصادرة من أجهزة الموظفين في الجدار الناري قبل خروجها للإنترنت لكشف اتصالات الـ C2.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Weaponized Cryptography vs Hash Forensics & SSL Decryption</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 4.1: حساب هاشات الملفات وفك ترميز النصوص</h4>
    <p>استخدم الأوامر الجنائية لحساب SHA-256 لملف مشبوه وفك ترميز URL Encoding.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-4-1">
      <div class="term-line output">Cryptographic & Encoding Inspection Engine</div>
      <div class="term-line output">Type 'sha256sum &lt;file&gt;' or 'url-decode &lt;string&gt;'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('sha256sum C:\\Users\\Public\\svchost.exe', 'lab-term-4-1')">Calculate SHA-256 Hash</button>
    <button class="btn-cmd" onclick="runSimCommand('url-decode %27%20OR%201%3D1--%20', 'lab-term-4-1')">Decode URL Encoded Attack</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Hashing & URL decoding lab simulation.</p>`,
      ticket: {
        ticketId: "SEC-TICK-401",
        severity: "HIGH",
        severityClass: "high",
        sourceHost: "ENG-PC-04",
        timestamp: "2026-11-06 14:10:05 UTC",
        ruleTriggered: "EDR_MALWARE_HASH_MATCH_KNOWN_RANSOMWARE_FAMILY",
        rawLog: `Event: Endpoint Detection & Response (EDR Alert)
Host: ENG-PC-04.corp.local (10.140.40.12)
Process: calc_update.exe
FileCreated: C:\\Users\\Public\\calc_update.exe
SHA256: 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
MD5: c4ca4238a0b923820dcc509a6f75849b
ThreatIntel_Match:
  VirusTotal: 64/72 engines flagged as "Win32.Trojan.LockBit.Ransomware"
  MalwareFamily: LockBit 3.0 Builder Variant
  Signer: Unsigned Binary`,
        questionAr: "تلقيت تنبيهاً بمطابقة بصمة الهاش SHA256 لملف تنفيذي باسم calc_update.exe في جهاز قسم الهندسة مع عينات LockBit Ransomware. ما هو التوصيف والإجراء الحاسم؟",
        questionEn: "Analyze the SHA256 match for LockBit Ransomware. What is the diagnosis and decisive action?",
        optionsAr: [
          "تطبيق حاسبة بريء يحتاج لتحديث من مايكروسوفت.",
          "هجوم برمجية فدية LockBit حقيقي وفوري (Critical Ransomware Infection): الملف هو بايلود مشفر غير موقع تم إسقاطه لتشفير ملفات الشركة، ويجب عزل جهاز المهندس فوراً عن الشبكة (Network Isolation) في أقل من 60 ثانية لمنع انتشار التشفير لباقي الخوادم!",
          "خطأ في قاعدة بيانات مكافح الفيروسات.",
          "تحديث لنظام ويندوز."
        ],
        optionsEn: [
          "Innocent calculator app update.",
          "Critical Active Ransomware Threat: LockBit variant staging on host. Immediate network isolation required within 60s to prevent lateral spread and encryption.",
          "False alarm database error.",
          "Windows OS update."
        ],
        correctIndex: 1,
        explanationAr: "إجراء طوارئ منقذ للمؤسسة يا باشمهندس بشار! تطابق 64 محرك فحص عالمي على أن الهاش يتبع LockBit Ransomware يعني أنك في سباق مع الموت: برمجيات الفدية بعد تشغيلها تبدأ بالبحث عن المجلدات المشتركة SMB وتشفيرها في دقائق معدودة. الإجراء الفوري الحاسم: الضغط على زر عزل الجهاز (Host Isolation) فوراً لقطع اتصال كارت الشبكة ثم البدء في قتل العملية وحذف الملف وفحص الأجهزة المجاورة.",
        explanationEn: "Critical correct triage! 64/72 detections on VirusTotal matching LockBit confirms live ransomware payload staging. Instant host containment is required to stop mass file encryption."
      }
    },

    {
      id: "lesson-4-2",
      moduleId: "module4",
      number: "4.2",
      titleAr: "تشريح هجمات تطبيقات الويب في السجلات: SQLi و XSS و Command Injection و Web Shells",
      titleEn: "Web Attacks in Telemetry: SQLi, XSS, Command Injection, Path Traversal & Web Shells",
      duration: "70 min",
      theoryAr: `
<h3>أخطر أسلحة المهاجم ضد مواقع الشركات: كيف تقرأ بصمات الـ OWASP Top 10 في السجلات؟</h3>
<p class="lead">عندما يضغط المخترق زر "إرسال" في أدوات الاختراق، يُترجم طلبه إلى نصوص مشفرة تسافر عبر بروتوكول HTTP. في هذا الدرس، سنتعلم كيف تبدو أشهر 5 هجمات ويب في العالم داخل سجلات السيرفر كلمة بكلمة.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: استمارة البنك والتلاعب بالتعليمات</div>
  <p>تخيل استمارة بنك مكتوب فيها: <em>"الاسم: [   ]"</em>. إذا كتب العميل اسمه الطبيعي "أحمد"، فسيمر الطلب بسلام. ولكن ماذا لو كتب في خانة الاسم: <em>"أحمد، وقم بتحويل 10,000 دولار من خزنة البنك لحسابي، وتجاهل باقي التعليمات"</em>؟! إذا كان موظف البنك غبياً وينفذ كل ما يُكتب دون تدقيق، فسيتم سرقة البنك! هذا بالضبط هو مبدأ <strong>حقن التعليمات (Injection Attacks)</strong> في الويب!</p>
</div>

<h4>1. حقن قواعد البيانات (SQL Injection - SQLi):</h4>
<p>يحدث عندما يدمج تطبيق الويب مدخلات المستخدم مباشرة داخل استعلام قاعدة البيانات SQL دون تنقية (Sanitization):</p>
<pre class="ascii-flow">
الاستعلام الأصلي المبرمج:
SELECT * FROM users WHERE username = 'USER_INPUT' AND password = 'PASSWORD_INPUT';

ما يكتبه المهاجم في خانة المستخدم:
admin' OR '1'='1' --

الاستعلام كما ينفذه السيرفر:
SELECT * FROM users WHERE username = 'admin' OR '1'='1' -- ' AND password = ...
(تم تجاوز فحص كلمة المرور بنجاح لأن 1=1 صحيحة دائماً، والشرطتان -- ألغتا باقي السطر كتعليق!)
</pre>
<p><strong>بصمتها في السجلات:</strong> البحث عن رموز: <code>' OR 1=1</code>, <code>UNION SELECT</code>, <code>SLEEP(5)</code>, <code>BENCHMARK</code>, <code>--</code>, <code>%27</code> (علامة الاقتباس بـ URL Encoding).</p>

<h4>2. حقن الأوامر في نظام التشغيل (Command Injection):</h4>
<p>أخطر هجوم على الإطلاق! يحدث عندما يأخذ كود الموقع مدخلاً من المستخدم (مثل عنوان IP لفحص الـ Ping) ويمرره مباشرة إلى شيل نظام التشغيل (Bash أو Cmd):</p>
<p>المدخل الطبيعي: <code>8.8.8.8</code><br>
مدخل المهاجم الخبيث: <code>8.8.8.8; cat /etc/passwd</code> أو <code>8.8.8.8 && whoami</code></p>
<p><strong>بصمتها في السجلات:</strong> وجود فواصل الأوامر: <code>;</code>, <code>|</code>, <code>&&</code>, <code>||</code>, <code>%3B</code> متبوعة بأوامر نظام مثل <code>cat</code>, <code>whoami</code>, <code>id</code>, <code>dir</code>, <code>curl</code>, <code>wget</code>.</p>

<h4>3. حقن السكربتات العابرة للمواقع (Cross-Site Scripting - XSS):</h4>
<p>حقن كود JavaScript خبيث داخل صفحة الويب لكي يتم تنفيذه في متصفح المستخدمين الآخرين لسرقة الكوكيز وجلسات تسجيل الدخول (Session Hijacking):</p>
<p><strong>بصمتها في السجلات:</strong> وجود وسوم جافاسكربت: <code>&lt;script&gt;</code>, <code>alert(1)</code>, <code>document.cookie</code>, <code>&lt;img src=x onerror=...&gt;</code> أو نظيرتها المشفرة بـ URL <code>%3Cscript%3E</code>.</p>

<h4>4. الـ Web Shells: الباب الخلفي النهائي للهكر:</h4>
<p>ملف برمجي صغير بلغة (PHP, ASPX, JSP) يرفعه المهاجم على السيرفر بعد استغلال ثغرة رفع ملفات (File Upload Vulnerability)، ويحتوي على سطر واحد يتيح له تنفيذ أي أمر عبر المتصفح:</p>
<p>كود شيل PHP الكلاسيكي: <code>&lt;?php system($_GET['cmd']); ?&gt;</code></p>
<p><strong>بصمتها في السجلات:</strong> ظهور طلبات لملفات بأسماء مريبة داخل مجلد الصور أو المرفقات مثل: <code>GET /uploads/avatars/shell.php?cmd=whoami</code> أو <code>cmd=powershell</code>!</p>
      `,
      theoryEn: `<h3>Web Attacks Forensic Telemetry: SQLi, XSS, Command Injection & Web Shell Signatures</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: اكتشاف الـ Web Shells وصيد الحقن</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف ينفذ المهاجم الاختراق؟</h4>
    <ul>
      <li>استخدام أداة <strong>sqlmap</strong> لأتمتة سحب كامل قاعدة البيانات وجداول المستخدمين والبطاقات.</li>
      <li>رفع شيل متقدم مثل <em>China Chopper</em> أو <em>b374k</em> مشفر بـ Base64 لتفادي كشف الـ Antivirus.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 خط دفاع محلل الـ SOC</h4>
    <ul>
      <li><strong>ربط سجلات الويب بسجلات النظام (Web-to-Sysmon Correlation):</strong> إذا رأيت طلباً في Nginx لـ <code>shell.php</code>، ومباشرة بعدها في Sysmon ظهرت العملية <code>w3wp.exe</code> أو <code>nginx</code> تستدعي <code>cmd.exe</code> أو <code>/bin/sh</code>، فهذا تأكيد قاطع على وجود Web Shell نشط!</li>
      <li><strong>فحص مسارات الرفع:</strong> منع تشغيل وتنفيذ السكربتات (.php, .exe, .sh) داخل مجلدات الرفع (Uploads Directories).</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Web Exploitation Tracking & Web Shell Correlation</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 4.2: صيد أوامر Command Injection و Web Shells في السجلات</h4>
    <p>حلل سجلات الويب وابحث عن فواصل الأوامر المشبوهة واستدعاءات الشيل.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-4-2">
      <div class="term-line output">Web Vulnerability Forensics Terminal</div>
      <div class="term-line output">Type 'grep-cmd-injection' or 'hunt-webshells' to begin triage.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('grep -E &quot;(\\||;|&&)&quot; /var/log/nginx/access.log', 'lab-term-4-2')">Hunt Command Injection in Logs</button>
    <button class="btn-cmd" onclick="runSimCommand('find /var/www/html/uploads/ -name &quot;*.php&quot;', 'lab-term-4-2')">Scan Uploads for PHP Web Shells</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Web vulnerability hunting and command injection analysis.</p>`,
      ticket: {
        ticketId: "SEC-TICK-402",
        severity: "CRITICAL",
        severityClass: "critical",
        sourceHost: "PORTAL-WEB-PROD",
        timestamp: "2026-11-06 16:33:45 UTC",
        ruleTriggered: "WEB_ATTACK_REMOTE_CODE_EXECUTION_VIA_WEB_SHELL",
        rawLog: `TIMESTAMP: 2026-11-06 16:33:45.812
CLIENT_IP: 194.26.29.112 (Malicious Bulletproof Host)
REQUEST: "POST /uploads/profile_images/avatar_test.php?cmd=cat%20/etc/passwd HTTP/1.1"
STATUS: 200 OK
BYTES_SENT: 2,980 bytes
USER_AGENT: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
SYSMON_CORRELATION (Server Backend):
ProcessId: 10452
Image: /bin/sh
ParentProcessId: 2190
ParentImage: /usr/sbin/nginx (Web Server)
CommandLine: /bin/sh -c cat /etc/passwd`,
        questionAr: "تفحص سجل طلب الويب متبوعاً بسجل Sysmon التابع له في السيرفر. ما هو التوصيف القاطع لما حدث وما هو الإجراء الفوري؟",
        questionEn: "Analyze the correlated Web log and Sysmon log above. What has occurred and what is your immediate plan?",
        optionsAr: [
          "المستخدم يحاول تعديل صورته الشخصية في الحساب.",
          "اختراق ناجح بنسبة 100% (Confirmed Remote Code Execution via Web Shell): المهاجم رفع ملف PHP خبيث داخل مجلد الصور، وقام بتنفيذ أمر cat /etc/passwd ورد السيرفر بـ 200 OK وسرب ملف المستخدمين، والعملية الأب لسيرفر Nginx استدعت /bin/sh لتنفيذ الأمر! الإجراء: عزل الخادم فوراً وحذف الملف الخبيث وسد ثغرة رفع الملفات.",
          "خطأ في إعدادات السيرفر.",
          "تنبيه كاذب من جدار الحماية."
        ],
        optionsEn: [
          "User updating profile photo.",
          "Confirmed RCE via Web Shell: Malicious PHP file uploaded in images folder executed cat /etc/passwd successfully (200 OK), spawning /bin/sh from Nginx parent. Isolate immediately.",
          "Server configuration error.",
          "WAF false positive."
        ],
        correctIndex: 1,
        explanationAr: "تحقيق جنائي عبقري واحترافي يا باشمهندس بشار! تطابق سجل الويب مع سجل Sysmon هو الدليل الدامغ الذي لا يمكن دحضه: 1) طلب الويب يستدعي avatar_test.php في مجلد صور بمحدد cmd=cat /etc/passwd. 2) السيرفر رد بـ 200 OK وأرسل 2.9 كيلوبايت (مما يعني أن محتوى ملف المستخدمين خرج للمهاجم!). 3) سجل Sysmon أثبت أن خادم nginx قام بالفعل باستدعاء شيل النظام /bin/sh! هذا خادم مخترق بالكامل ويجب عزله فوراً واسترجاع نسخة نظيفة.",
        explanationEn: "Spot on! Correlating the HTTP POST request to a PHP file in the uploads folder with Sysmon showing nginx spawning /bin/sh executing cat /etc/passwd confirms an active Web Shell breach."
      }
    },

    {
      id: "lesson-4-3",
      moduleId: "module4",
      number: "4.3",
      titleAr: "تشريح البرمجيات الخبيثة (Malware Taxonomy): الفيروسات، الديدان، أحصنة طروادة، والـ C2 Beaconing",
      titleEn: "Malware Taxonomy: Viruses, Worms, Trojans, Ransomware, Rootkits & C2 Beaconing",
      duration: "65 min",
      theoryAr: `
<h3>تصنيف الكائنات الخبيثة: ما هو الفارق الدقيق بين أنواع الفيروسات والبرمجيات الضارة؟</h3>
<p class="lead">عامة الناس يطلقون على أي عطل في الحاسوب كلمة "فيروس"! ولكن بالنسبة لمحلل الـ SOC، تسمية التهديد باسمه العلمي الدقيق هي الفارق بين اتخاذ قرار عزل شبكة بالكامل أو عزل جهاز واحد. في هذا الدرس، سنشرح السلالات الوراثية للبرمجيات الخبيثة (Malware Taxonomy).</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: الأمراض البيولوجية واللصوص</div>
  <p><strong>1. الفايروس البيولوجي (Virus):</strong> يحتاج إلى "خلية حية" لكي يتكاثر ويلتصق بها (ملف وورد أو برنامج تنفيذي)، ولا ينتشر إلا إذا قام الإنسان بفتح هذا الملف بنفسه!</p>
  <p><strong>2. وباء الطاعون أو الديدان (Worm):</strong> لا يحتاج لأي تدخل بشري ولا يحتاج لملف مضيف؛ ينتقل بمفرده عبر الهواء وشبكات الصرف الصحي (ثغرات الشبكة) من بيت لبيت تلقائياً ويصيب الملايين في ساعات!</p>
  <p><strong>3. حصان طروادة (Trojan Horse):</strong> هدية خشبية جميلة وبريئة من الخارج (لعبة مجانية، كراك فوتوشوب، أو تحديث مزيف)، ولكن في بطنها جنود مسلحون يفتحون أبواب المدينة ليلاً!</p>
</div>

<h4>1. شجرة تصنيف البرمجيات الخبيثة (Malware Taxonomy Matrix):</h4>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>النوع الخبيث</th>
        <th>آلية الانتشار والتكاثر</th>
        <th>طريقة التخفي والتنفيذ</th>
        <th>أشهر الأمثلة التاريخية</th>
        <th>أول إجراء لمحلل الـ SOC</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Virus (الفيروس)</strong></td>
        <td>يلتصق بملفات تنفيذية (.exe, .dll, Macros) وينتشر فقط عند قيام المستخدم بتشغيل الملف.</td>
        <td>تعديل الكود الأصلي للملف ليقوم بتشغيل البايلود الخبيث قبل البرنامج الشرعي.</td>
        <td>CIH (Chernobyl), Melissa.</td>
        <td>فحص وتنظيف الملفات المصابة ومسح مجلد التنزيلات.</td>
      </tr>
      <tr>
        <td><strong>Worm (الدودة الشبكية)</strong></td>
        <td><strong>ذاتي الانتشار 100%!</strong> يستغل ثغرات الشبكة (مثل ثغرة SMB MS17-010) للقفز من جهاز لآخر دون أي تفاعل بشري.</td>
        <td>يمسح الشبكة الداخلية عن منافذ مفتوحة ويحقن نفسه في الأجهزة الضعيفة.</td>
        <td>WannaCry, NotPetya, Stuxnet.</td>
        <td><strong>عزل الشبكة فوراً (Network Disconnect)!</strong> إغلاق المنافذ المصابة (مثل 445) لمنع إبادة باقي الشركة.</td>
      </tr>
      <tr>
        <td><strong>Trojan (حصان طروادة)</strong></td>
        <td>لا يتكاثر ذاتياً؛ ينتقل عبر خداع المستخدم بتنزيله كبرنامج مشروع أو ملف PDF مزور.</td>
        <td>يتنكر كأداة شرعية ويزرع باباً خلفياً (Backdoor) في النظام.</td>
        <td>Emotet, TrickBot, Zeus.</td>
        <td>فحص مفاتيح البقاء في الريجستري والعمليات المقيمة في الذاكرة.</td>
      </tr>
      <tr>
        <td><strong>Ransomware (برمجيات الفدية)</strong></td>
        <td>تصل غالباً عبر حصان طروادة أو دودة، وتقوم بتشفير ملفات القرص الصلب والمجلدات المشتركة.</td>
        <td>تستخدم خوارزميات تشفير عسكرية غير قابلة للكسر (AES-256 + RSA) وتحذف النسخ الاحتياطية (Shadow Copies).</td>
        <td>LockBit, BlackCat (ALPHV), Ryuk.</td>
        <td>عزل الجهاز فوراً، إيقاف خوادم النسخ الاحتياطي عن الشبكة، وفحص مفاتيح فك التشفير.</td>
      </tr>
      <tr>
        <td><strong>Rootkit</strong></td>
        <td>تعديل عميق في كيرنل نظام التشغيل (Kernel Mode).</td>
        <td><strong>الشبح المطلق!</strong> تخفي نفسها عن مدير المهام وعن برامج مكافحة الفيروسات بتزييف ردود النظام.</td>
        <td>ZeroAccess, TDSS.</td>
        <td>إعادة تهيئة الجهاز بالكامل (Full Wipe & Reimage)؛ برامج التنظيف العادية لا تستطيع حذف الـ Rootkit بأمان.</td>
      </tr>
      <tr>
        <td><strong>C2 (Command & Control)</strong></td>
        <td>قناة الاتصال السرية بين البايلود الخبيث وخادم الهكر للتحكم بالجهاز وإرسال الأوامر وسرقة الملفات.</td>
        <td>تستخدم اتصالات دورية (Beaconing) تشبه تصفح الويب لتفادي الكشف.</td>
        <td>Cobalt Strike, Sliver, Mythic.</td>
        <td>حظر الـ IP والدومين على الجدار الناري وتحليل تردد الـ Beacons.</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>2. ما هو الـ C2 Beaconing وكيف يصطاده محلل الـ SOC رياضياً؟</h4>
<p>برمجيات الـ C2 المزروعة في الأجهزة لا تظل متصلة بالسيرفر طوال الوقت لكي لا يكتشفها جدار الحماية، بل "تغمز" كل فترة زمنية ثابتة (مثال: اتصال كل 60 ثانية بالضبط مدته نصف ثانية يقول: "أنا هنا، هل لديك أوامر جديدة؟").</p>
<p>هذا الانتظام الزمني (Periodic Interval) هو بصمة صيد الـ C2 في الـ SOC! المهاجمون الأذكياء يضيفون نسبة تشويش عشوائية تسمى <strong>الاهتزاز (Jitter)</strong> (مثال: الاتصال كل 60 ثانية بنسبة اهتزاز 20%، فيتصل مرة بعد 52 ثانية ومرة بعد 68 ثانية) لتضليل المحلل، لكن التحليل الإحصائي في الـ SIEM يستطيع كشف هذا النمط بسهولة!</p>
      `,
      theoryEn: `<h3>Malware Taxonomy: Viruses, Worms, Trojans, Ransomware, Rootkits & C2 Beaconing Mathematics</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: صيد اتصالات الـ C2 الدورية (Beaconing Hunting)</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف يصمم الهكر قنوات الـ C2؟</h4>
    <ul>
      <li>استخدام أطر عمل اختبار الاختراق المتقدمة مثل <strong>Cobalt Strike Malleable C2 Profiles</strong> لتغيير ترويسات HTTP لتطابق ترافيك Amazon أو Google فلا يثير الشكوك.</li>
      <li>ضبط الـ Sleep Time والـ Jitter العالي لتفادي أنظمة الكشف الآلية.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 كيف يصطادها محلل الـ SOC في السجلات؟</h4>
    <ul>
      <li><strong>استعلام الـ Beaconing الإحصائي في Splunk:</strong> حساب الفارق الزمني (Delta Time) بين الاتصالات المتتالية من نفس الجهاز لنفس الـ IP الخارجي؛ إذا كان الانحراف المعياري (Standard Deviation) قريباً من الصفر، فهذا اتصال آلي دوري مريب (C2 Beacon)!</li>
      <li><strong>فحص حجم الحزم (Payload Size Consistency):</strong> اتصالات الـ Beaconing المتكررة التي لا تحمل أوامر جديدة تكون دائماً متطابقة في حجم البايتات (مثال: كل حزمة حجمها 412 بايت بالضبط كل 30 ثانية).</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: C2 Beaconing Architecture vs SOC Statistical Hunting</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 4.3: تحليل فواصل اتصالات C2 Beaconing في المحاكي</h4>
    <p>استخدم محاكي سجلات الشبكة لفحص التكرار الزمني والتحقق من وجود اتصال دوري لسيرفر C2.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-4-3">
      <div class="term-line output">C2 Telemetry & Beaconing Analytics Console</div>
      <div class="term-line output">Type 'analyze-beaconing' to detect periodic heartbeats.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('analyze-beaconing', 'lab-term-4-3')">Detect C2 Periodic Beaconing</button>
    <button class="btn-cmd" onclick="runSimCommand('netstat-c2-check', 'lab-term-4-3')">Check Established Remote Sockets</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive C2 Beaconing frequency analysis and socket hunting.</p>`,
      ticket: {
        ticketId: "SEC-TICK-403",
        severity: "CRITICAL",
        severityClass: "critical",
        sourceHost: "RND-WS-09.corp.local",
        timestamp: "2026-11-06 18:40:00 UTC",
        ruleTriggered: "ZEEK_NETWORK_HEURISTIC_SUSPICIOUS_C2_BEACONING_PATTERN",
        rawLog: `DEVICE: Zeek (Bro) Network Monitor (Conn.log)
SRC_IP: 10.140.35.22 (RND-WS-09 - Research Engineer)
DST_IP: 185.220.101.5 (External Server - Anonymous VPS)
DST_PORT: 443 (HTTPS)
CONNECTION_TELEMETRY:
  Interval: Exactly every 45.0 seconds (+/- 1.2s Jitter)
  BurstCount: 120 connections across 90 minutes
  BytesTransferred_Avg: 512 bytes request / 128 bytes response
  ApplicationProtocol: TLS 1.3 (Self-Signed Untrusted Certificate)
  JA3_Fingerprint: e7d705a3286e19ea42f587b344ee6865 (Matches Cobalt Strike Beacon Default)`,
        questionAr: "تلقيت تنبيهاً أمنياً من نظام Zeek يرصد اتصالات متكررة كل 45 ثانية بحجم حزم متطابق وبصمة JA3 تطابق أداة Cobalt Strike. ما هو الاستنتاج الأمني الحاسم؟",
        questionEn: "Analyze the Zeek connection log above showing 45s intervals and JA3 match for Cobalt Strike. What is the conclusive triage?",
        optionsAr: [
          "تحديث مجدول لبرنامج مضاد الفيروسات كل 45 ثانية.",
          "إصابة حقيقية ومؤكدة ببرمجية خبيثة للتحكم عن بعد (Confirmed Cobalt Strike C2 Beaconing): الجهاز مخترق ومربوط بسيرفر الهاكر الخارجي الذي يرسل نبضات دورية منتظمة كل 45 ثانية، ويجب عزل الجهاز فوراً وحظر الـ IP 185.220.101.5 والبدء في التحقيق الجنائي لتحديد نقطة الدخول (Patient Zero).",
          "تصفح عادي لموقع إخباري من المهندس.",
          "خطأ في خادم الوقت NTP."
        ],
        optionsEn: [
          "Antivirus cloud signature updates.",
          "Confirmed Cobalt Strike C2 Beaconing: Endpoint is compromised and beaconing to adversary infrastructure every 45s with JA3 signature match. Isolate host immediately.",
          "Normal user browsing.",
          "NTP server time sync."
        ],
        correctIndex: 1,
        explanationAr: "تشخيص لا تشوبه شائبة يا باشمهندس بشار! أربعة أدلة قطعية تؤكد الاختراق التام: 1) انتظام الاتصال كل 45 ثانية بدقة متناهية. 2) ثبات حجم البيانات 512 بايت و 128 بايت (نبضات فحص أوامر فارغة). 3) استخدام شهادة SSL ذاتية التوقيع (Self-Signed). 4) بصمة الـ JA3 المشهورة عالمياً لأداة Cobalt Strike C2. الإجراء الفوري: عزل محطة العمل فوراً لحرمان المهاجم من التحكم، وسحب نسخة من الرام لمعرفة الأوامر التي تم تنفيذها.",
        explanationEn: "Conclusive forensic triage! The combination of strict 45s periodic interval, consistent byte counts, self-signed TLS, and known Cobalt Strike JA3 fingerprint confirms live C2 communication."
      }
    },

    {
      id: "lesson-4-4",
      moduleId: "module4",
      number: "4.4",
      titleAr: "هجمات الشبكات وكلمات المرور: التخمين، رش الكلمات، وهجمات رجل في المنتصف MITM",
      titleEn: "Network & Credential Attacks: Brute Force, Spraying, Stuffing & Man-in-the-Middle",
      duration: "65 min",
      theoryAr: `
<h3>حرب الهويات الرقمية: كيف تُسرق بيانات الاعتماد وكيف تُعترض الحزم في الهواء؟</h3>
<p class="lead">الهكر في العصر الحديث لا يخترق الأنظمة، بل "يسجل دخوله"! سرقة واستغلال كلمات المرور وبيانات الاعتماد (Credentials) تمثل أكثر من 80% من قنوات الدخول الأولية للمهاجمين. في هذا الدرس، سنفصل الفروق الجوهرية بين أساليب سرقة الحسابات وهجمات اعتراض البيانات.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: المفتاح العشوائي، المفتاح الشائع، والمفتاح المسروق من الجار</div>
  <p><strong>1. التخمين العنيف (Brute Force):</strong> شخص يقف أمام باب واحد ومعه حلقة بها 10,000 مفتاح مختلف، ويجرب مفتاحاً تلو الآخر بسرعة حتى يكسر الباب أو يكسر القفل (يقفل الحساب Lockout).</p>
  <p><strong>2. رش كلمات المرور (Password Spraying):</strong> شخص يمر على 500 شقة في العمارة ويجرب مفتاحاً واحداً فقط معروفاً للجميع (مثل: <code>Password123!</code>) في كل شقة مرة واحدة! إذا فتحت أي شقة دخل، ولا يثير انتباه حراس البناية لأن أحداً لم يكرر المحاولات.</p>
  <p><strong>3. حشو بيانات الاعتماد (Credential Stuffing):</strong> شخص حصل على قائمة كلمات مرور مسربة من موقع ألعاب مخترق، فيقوم بتجربة نفس الإيميل وكلمة المرور في البنك وشركة العمل، مراهناً على كسل المستخدمين في إعادة استخدام نفس كلمة المرور في كل مكان!</p>
</div>

<h4>1. هجمات رجل في المنتصف (Man-in-the-Middle - MITM):</h4>
<p>هجوم يعترض فيه المهاجم حركة المرور بين جهازين (مثل حاسوب الموظف والراوتر الافتراضي) دون علم أي منهما:</p>

<pre class="ascii-flow">
حاسوب الموظف (10.140.10.50) ───[حزم مشفرة أو غير مشفرة]───> راوتر الشركة (10.140.10.1)
                                      ▲
                                      │ (تسميم الـ ARP للتنصت وسرقة البيانات)
                     [ جهاز المهاجم في المنتصف (10.140.10.88) ]
</pre>

<h4>2. هجوم تسميم الـ ARP (ARP Spoofing / Poisoning):</h4>
<p>يستغل المهاجم أن بروتوكول ARP لا يتحقق من هوية المرسل. يقوم المهاجم بإرسال حزم ARP كاذبة إلى الموظف يقول فيها: <em>"أنا الراوتر، وهذا الـ MAC الخاص بي"</em>، ويرسل إلى الراوتر يقول: <em>"أنا الموظف وهذا الـ MAC الخاص بي"</em>! النتيجة: كل حزم الموظف تمر أولاً عبر جهاز المهاجم ليتنصت عليها ثم يمررها للراوتر.</p>

<h4>3. هجوم تسميم كاش الـ DNS (DNS Cache Poisoning):</h4>
<p>حقن إجابة مزيفة في كاش سيرفر الـ DNS المحلي. عندما يطلب الموظف <code>bank.corp.com</code>، يعطيه خادم الـ DNS المسمم عنوان IP لخادم الهكر المزيف لسرقة بيانات الدخول!</p>
      `,
      theoryEn: `<h3>Network & Credential Attacks: Brute Force, Spraying, Stuffing, ARP Spoofing & MITM</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: صيد سرقة بيانات الاعتماد والـ MITM</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 أدوات الهكر الشهيرة</h4>
    <ul>
      <li>استخدام أداة <strong>Responder</strong> للتنصت على بروتوكولات LLMNR / NBT-NS واعتراض هاشات NTLMv2 تلقائياً من الشبكة الداخلية!</li>
      <li>أداة <strong>Ettercap</strong> و <strong>Bettercap</strong> لتنفيذ هجمات ARP Poisoning بضغطة زر واحدة.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 خط دفاع محلل الـ SOC</h4>
    <ul>
      <li><strong>تعطيل LLMNR و NetBIOS-NS:</strong> إغلاق هذه البروتوكولات القديمة عبر الـ GPO لحرمان أداة Responder من التقاط أي هاشات!</li>
      <li><strong>تفعيل Dynamic ARP Inspection (DAI):</strong> تكوين السويتشات لفحص حزم الـ ARP ومطابقتها مع جدول DHCP Snooping ومنع أي حزمة تدعي عنواناً كاذباً.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Credential Access (Responder) vs DAI & LLMNR Hardening</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 4.4: فحص هجمات Password Spraying في سجلات الأمان</h4>
    <p>استخدم أوامر الاستعلام للبحث عن تكرار الحدث 4625 على حسابات متعددة.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-4-4">
      <div class="term-line output">Credential Triage & Password Analytics Terminal</div>
      <div class="term-line output">Type 'hunt-spraying' or 'inspect-responder-traffic'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('hunt-spraying', 'lab-term-4-4')">Detect Password Spraying Attacks</button>
    <button class="btn-cmd" onclick="runSimCommand('inspect-responder-traffic', 'lab-term-4-4')">Inspect LLMNR Poisoning Logs</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Password Spraying and LLMNR poison hunting lab.</p>`,
      ticket: {
        ticketId: "SEC-TICK-404",
        severity: "HIGH",
        severityClass: "high",
        sourceHost: "DC01.corp.local",
        timestamp: "2026-11-06 19:44:30 UTC",
        ruleTriggered: "AD_SUSPICIOUS_PASSWORD_SPRAYING_ATTACK_DETECTED",
        rawLog: `Event: Windows Security Log (EventCode: 4625 - Logon Failure)
SourceWorkstation: WKSTN-DEV-33
SourceIp: 10.140.50.88 (Subnet: Developers-VLAN)
LogonType: 3 (Network Logon over SMB)
SubStatus: 0xC000006A (Bad Password)
TargetUsers_Attacked:
  admin, a.hassan, m.khalil, b.hafedh, s.ali, f.omar, z.kareem (52 distinct corporate accounts)
FrequencyPattern:
  Exactly 1 failure per user account over a 15-minute sliding window
  Observed Password Guess Attempt: "Winter2026!"`,
        questionAr: "تلقيت تنبيهاً أمنياً يرصد محاولة دخول واحدة فاشلة بكلمة مرور خاطئة (0xC000006A) لـ 52 حساباً مختلفاً في الشركة من نفس المحطة. ما هو نوع الهجوم الدقيق وما الغرض منه؟",
        questionEn: "Analyze the 52 failed logons across distinct accounts with 1 attempt each. What attack is this and what is the adversary objective?",
        optionsAr: [
          "تحديث جماعي لكلمات المرور في الشركة بواسطة نظام الموارد البشرية.",
          "هجوم رش كلمات المرور (Password Spraying Attack): المهاجم من محطة WKSTN-DEV-33 يجرب كلمة مرور شائعة واحدة ضد 52 حساباً بهدوء لتفادي قفل الحسابات (Account Lockout Threshold) بهدف صيد أي حساب يستخدم كلمة مرور ضعيفة! الإجراء: عزل الجهاز فوراً، فحص ما إذا كان هناك حساب نجح الدخول به، وتغيير كلمات المرور.",
          "عطل فني في خادم التوثيق Kerberos.",
          "هجوم حجب خدمة DoS على خادم الـ DC."
        ],
        optionsEn: [
          "Routine HR bulk password update.",
          "Password Spraying Attack: Adversary on WKSTN-DEV-33 testing single common password across 52 accounts to evade lockout threshold. Isolate workstation immediately.",
          "Kerberos server bug.",
          "Denial of Service attack."
        ],
        correctIndex: 1,
        explanationAr: "تحليل دقيق ومبهر يا باشمهندس بشار! هذا هو التعريف الأكاديمي والعملي لهجوم Password Spraying: المهاجم يتفادى الـ Lockout Threshold (الذي يقفل الحساب عند 5 محاولات فاشلة مثلاً) عن طريق تجربة كلمة مرور واحدة فقط لكل حساب بفواصل زمنية متباعدة. الهدف هو إيجاد الموظف الكسول الذي وضع كلمة مرور موسمية شائعة! الإجراء: عزل الجهاز 10.140.50.88 والتحقق هل أعقب هذه المحاولات أي حدث 4624 ناجح.",
        explanationEn: "Spot-on! A single failure across 52 distinct user accounts within a 15-minute window is the definitive behavioral signature of a Password Spraying attack designed to bypass lockout thresholds."
      }
    },

    {
      id: "lesson-4-5",
      moduleId: "module4",
      number: "4.5",
      titleAr: "الدستور العالمي لمحلل الـ SOC: إتقان إطار MITRE ATT&CK وسلسلة القتل و Diamond Model",
      titleEn: "The SOC Doctrine: MITRE ATT&CK Matrix, Cyber Kill Chain & The Diamond Model",
      duration: "70 min",
      theoryAr: `
<h3>دستور التحقيق السيبراني: كيف يتحدث محللو الـ SOC حول العالم لغة واحدة موحدة؟</h3>
<p class="lead">عندما يكتشف محلل SOC في بنك أمريكي هجوماً، كيف يشرحه لمحلل في بنك بالخليج أو أوروبا دون سوء فهم؟ الجواب هو: <strong>الأطر المرجعية الموحدة (Cybersecurity Frameworks)</strong>! وأعظمها على الإطلاق هو إطار <strong>MITRE ATT&CK</strong> التابع لمنظمة MITRE غير الربحية الممولة من الحكومة الأمريكية.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: جدول العناصر الكيميائية لمندليف</div>
  <p>في القرون الوسطى، كان الكيميائيون يصفون المواد بأسماء غامضة وخرافية. ثم جاء العالم مندليف ووضع "الجدول الدوري للعناصر الكيميائية": كل عنصر له رمز عالمي ورقم ذري وخصائص محددة يفهمها أي عالم في أي دولة.</p>
  <p>إطار MITRE ATT&CK هو الجدول الدوري لجرائم الهكر! كل حركة، وكل تقنية، وكل أسلوب اختراق له رقم كودي عالمي ثابت (مثل: <code>T1059.001</code> لتشغيل PowerShell)، بحيث يستطيع محلل الـ SOC ربط التنبيهات برقم التقنية والتكتيك في ثانية واحدة!</p>
</div>

<h4>1. التسلسل الهرمي لإطار MITRE ATT&CK (التكتيكات والتقنيات):</h4>
<ul>
  <li><strong>التكتيك (Tactic - لماذا؟):</strong> الهدف التكتيكي العام للمهاجم في هذه المرحلة (مثال: Initial Access للوصول الأولي، Credential Access لسرقة كلمات المرور، Lateral Movement للتنقل في الشبكة). يضم الإطار 14 تكتيكاً تمثل مراحل الهجوم من البداية حتى النهاية.</li>
  <li><strong>التقنية (Technique - كيف؟):</strong> الطريقة التقنية المحددة لتحقيق الهدف (مثال: T1059 Command and Scripting Interpreter).</li>
  <li><strong>التقنية الفرعية (Sub-technique - بالتفصيل الممل):</strong> التفصيل الدقيق للأداة أو اللغة المستخدمة (مثال: <code>T1059.001</code> تعني حصرياً PowerShell!).</li>
  <li><strong>الإجراء (Procedure):</strong> التنفيذ الفعلي في الواقع من قبل مجموعة تهديد محددة (APT).</li>
</ul>

<h4>التكتيكات الـ 14 لإطار MITRE ATT&CK للمؤسسات (Enterprise Matrix):</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>الترتيب</th>
        <th>اسم التكتيك (Tactic)</th>
        <th>هدف المهاجم في هذه المرحلة</th>
        <th>أمثلة للتقنيات وأكوادها</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1</td><td><strong>Reconnaissance</strong></td><td>جمع المعلومات والاستطلاع عن الضحية قبل بدء الهجوم.</td><td>T1595 (Active Scanning)</td></tr>
      <tr><td>2</td><td><strong>Resource Development</strong></td><td>شراء السيرفرات والدومينات وتجهيز البايلودات.</td><td>T1583 (Acquire Infrastructure)</td></tr>
      <tr><td>3</td><td><strong>Initial Access</strong></td><td>القدم الأولى داخل أسوار الشركة واختراق المحيط.</td><td>T1566 (Phishing), T1190 (Exploit Public App)</td></tr>
      <tr><td>4</td><td><strong>Execution</strong></td><td>تشغيل الكود الخبيث على جهاز الضحية.</td><td>T1059.001 (PowerShell), T1204 (User Execution)</td></tr>
      <tr><td>5</td><td><strong>Persistence</strong></td><td>تثبيت البقاء حتى لا يفقد الاتصال بعد إعادة التشغيل.</td><td>T1547.001 (Registry Run Keys), T1053 (Scheduled Task)</td></tr>
      <tr><td>6</td><td><strong>Privilege Escalation</strong></td><td>الترقية من مستخدم عادي إلى مدير Administrator / Root.</td><td>T1068 (Exploitation for Privilege Escalation)</td></tr>
      <tr><td>7</td><td><strong>Defense Evasion</strong></td><td>التهرب من برامج الحماية ومسح السجلات وإخفاء الآثار.</td><td>T1070 (Indicator Removal / Log Clearing)</td></tr>
      <tr><td>8</td><td><strong>Credential Access</strong></td><td>سرقة كلمات المرور والهاشات والتذاكر من النظام.</td><td>T1003.001 (LSASS Memory Dump / Mimikatz)</td></tr>
      <tr><td>9</td><td><strong>Discovery</strong></td><td>استكشاف الجهاز والشبكة لمعرفة أين هو وماذا يوجد حوله.</td><td>T1082 (System Info Discovery), T1018 (Remote System Discovery)</td></tr>
      <tr><td>10</td><td><strong>Lateral Movement</strong></td><td>التنقل والقفز من جهاز لآخر داخل الشبكة الداخلية.</td><td>T1021.002 (SMB/Windows Admin Shares), T1550.002 (Pass-the-Hash)</td></tr>
      <tr><td>11</td><td><strong>Collection</strong></td><td>جمع وتجميع الملفات الحساسة وأرقام البطاقات في مجلد واحد.</td><td>T1005 (Data from Local System), T1114 (Email Collection)</td></tr>
      <tr><td>12</td><td><strong>Command and Control</strong></td><td>فتح قناة اتصال مشفرة مع خادم الهكر لتلقي الأوامر.</td><td>T1071.001 (Web Protocols / HTTPS C2)</td></tr>
      <tr><td>13</td><td><strong>Exfiltration</strong></td><td>تهريب وسرقة البيانات خارج حدود الشركة للإنترنت.</td><td>T1048 (Exfiltration Over Alternative Protocol / DNS)</td></tr>
      <tr><td>14</td><td><strong>Impact</strong></td><td>الضربة القاضية: تشفير الملفات، تدمير السيرفرات، أو حجب الخدمة.</td><td>T1486 (Data Encrypted for Impact / Ransomware)</td></tr>
    </tbody>
  </table>
</div>

<h4>2. سلسلة القتل السيبراني (Lockheed Martin Cyber Kill Chain):</h4>
<p>نموذج عسكري صارم مكون من 7 مراحل تسلسلية: <strong>Reconnaissance -> Weaponization -> Delivery -> Exploitation -> Installation -> Command & Control (C2) -> Actions on Objectives</strong>. المبدأ الذهبي للمدافعين: <em>إذا نجح محلل الـ SOC في كسر السلسلة في أي حلقة من الحلقات السبع، فإنه يحبط الهجوم بالكامل وينقذ الشركة!</em></p>

<h4>3. النموذج الماسي (The Diamond Model of Intrusion Analysis):</h4>
<p>يربط بين 4 عناصر أساسية لأي هجوم: <strong>المهاجم (Adversary)</strong>، <strong>القدرة والأداة (Capability)</strong>، <strong>البنية التحتية (Infrastructure)</strong>، و <strong>الضحية المستهدفة (Victim)</strong>، ويساعد في استخبارات التهديدات ونسب الهجمات لمجموعات الـ APT المحددة.</p>
      `,
      theoryEn: `<h3>The Cyber SOC Doctrine: MITRE ATT&CK Matrix, Lockheed Martin Kill Chain & Diamond Model</h3>`,
      attackDefenseAr: `
<h3>كيف يربط محلل الـ SOC تنبيهات الشاشة بأكواد MITRE؟</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 خطوات المهاجم (APT Playbook)</h4>
    <ul>
      <li>المهاجم يرسل إيميل تصيد (T1566.001) به ملف إكسل محمل بماكرو (T1204.002).</li>
      <li>الماكرو يشغل PowerShell (T1059.001) لتنزيل بايلود من خادم خارجي (T1105).</li>
      <li>البايلود يثبت نفسه في الريجستري (T1547.001) ويفرغ ذاكرة LSASS (T1003.001).</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 تقرير محلل الـ SOC الاحترافي في الـ SIEM</h4>
    <ul>
      <li>محلل الـ SOC لا يكتب: "حدث فايروس في جهاز"، بل يكتب في التقرير الرسمي: <em>"تم رصد سلسلة هجومية بدأت بـ Initial Access (T1566.001) وأدت لتنفيذ Execution (T1059.001) ومحاولة سرقة بيانات اعتماد Credential Access (T1003.001)، وتم قطع السلسلة بنجاح قبل مرحلة Lateral Movement وعزل المضيف."</em> هذا هو الأسلوب الاحترافي الذي يميزك في المقابلات الوظيفية!</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Mapping Adversary Telemetry to MITRE ATT&CK Techniques</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 4.5: الاستعلام عن تقنيات MITRE ATT&CK وربط التنبيهات</h4>
    <p>استخدم أداة البحث عن تقنيات MITRE لمعرفة رقم أي هجوم وتكتيكه الدفاعي المقابل.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-4-5">
      <div class="term-line output">MITRE ATT&CK Navigation Terminal v3.0</div>
      <div class="term-line output">Type 'mitre-lookup T1059.001' or 'mitre-lookup T1003.001'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('mitre-lookup T1059.001', 'lab-term-4-5')">Lookup T1059.001 (PowerShell)</button>
    <button class="btn-cmd" onclick="runSimCommand('mitre-lookup T1003.001', 'lab-term-4-5')">Lookup T1003.001 (LSASS Dump)</button>
    <button class="btn-cmd" onclick="runSimCommand('mitre-lookup T1486', 'lab-term-4-5')">Lookup T1486 (Ransomware)</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive MITRE ATT&CK matrix lookup and mapping lab.</p>`,
      ticket: {
        ticketId: "SEC-TICK-405",
        severity: "HIGH",
        severityClass: "high",
        sourceHost: "SOC-SIEM-CORRELATION-ENGINE",
        timestamp: "2026-11-06 20:15:30 UTC",
        ruleTriggered: "MULTI_STAGE_KILL_CHAIN_INCIDENT_CORRELATION",
        rawLog: `INCIDENT_ID: INC-2026-9041
ALERT_SEQUENCE:
  Step 1: Inbound Email with Attachment 'RFQ_Contract_2026.iso' delivered to user j.doe (IOC: 185.220.101.5)
  Step 2: ISO mounted, executing LNK file pointing to cmd.exe /c powershell -ep bypass -w hidden (T1059.001)
  Step 3: Sysmon 10 triggered on host WKSTN-08: GrantedAccess 0x1FFFFF to lsass.exe by Rundll32 (T1003.001)
  Step 4: Outbound SMB connection from WKSTN-08 to DC01 on port 445 (T1021.002)`,
        questionAr: "أمامك سلسلة هجومية كاملة من 4 خطوات مترابطة في الـ SIEM. ما هي التكتيكات المتسلسلة بحسب MITRE ATT&CK التي تعبر عن هذا التهديد بدقة؟",
        questionEn: "Analyze the 4-step alert sequence above. What is the accurate sequence of MITRE ATT&CK tactics representing this incident?",
        optionsAr: [
          "Reconnaissance -> Resource Development -> Defense Evasion -> Impact.",
          "Initial Access (Phishing) -> Execution (Command Interpreter) -> Credential Access (OS Credential Dumping) -> Lateral Movement (SMB Shares).",
          "Collection -> Exfiltration -> Impact -> Discovery.",
          "عطل فني في خادم البريد وخادم الملفات."
        ],
        optionsEn: [
          "Reconnaissance -> Resource Development -> Defense Evasion -> Impact.",
          "Initial Access (Phishing) -> Execution (Command Interpreter) -> Credential Access (OS Credential Dumping) -> Lateral Movement (SMB Shares).",
          "Collection -> Exfiltration -> Impact -> Discovery.",
          "Mail server and file server technical glitch."
        ],
        correctIndex: 1,
        explanationAr: "إتقان مهني وعقلي فذ يا باشمهندس بشار! هذا هو الربط النموذجي بين السجلات وإطار MITRE ATT&CK: 1) الخطوة الأولى إيميل بمرفق ISO تمثل Initial Access (T1566). 2) الخطوة الثانية تشغيل PowerShell مخفي تمثل Execution (T1059.001). 3) الخطوة الثالثة قراءة ذاكرة lsass تمثل Credential Access (T1003.001). 4) الخطوة الرابعة اتصال SMB بالدومين كنترولر تمثل Lateral Movement (T1021.002). صياغتك للحادث بهذا الترتيب في تقرير الـ SOC تبرهن على جاهزيتك الميدانية ككبير محللين!",
        explanationEn: "Outstanding framework mapping! Step 1 is Initial Access (T1566), Step 2 is Execution (T1059.001), Step 3 is Credential Access (T1003.001), and Step 4 is Lateral Movement (T1021.002)."
      }
    }
  ]
};
