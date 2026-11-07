// Stage 7: SOC Operations, Triage & Playbooks (العمليات اليومية، فرز التنبيهات، وخطط التحقيق)
// Curated with exhaustive depth for Eng. Bashar Hafedh - BasharSec Academy

const module7Data = {
  id: "module7",
  stageNumber: 7,
  titleAr: "المرحلة 7: العمليات اليومية، فرز التنبيهات، وخطط التحقيق (SOC Operations & Playbooks)",
  titleEn: "Stage 7: SOC Operations, Alert Triage & Incident Playbooks",
  summaryAr: "ميدان المعركة الحقيقي: هيكلة مركز الـ SOC ومستويات المحللين Tier 1/2/3، المنهجية الذهبية لفرز التنبيهات في 7 خطوات، خطط التحقيق في التصيد والفدية وهجمات الدليل النشط، وكتابة تقارير الحوادث الاحترافية.",
  summaryEn: "Frontline operations: SOC hierarchy Tier 1/2/3, 7-step triage methodology, Phishing/Malware/Active Directory playbooks, PICERL incident response, and executive incident reporting.",
  badgeAr: "قائد عمليات الـ SOC وحوادث الاختراق",
  badgeEn: "Lead Incident Responder & SOC Lead",
  icon: "crisis_alert",
  lessons: [
    {
      id: "lesson-7-1",
      moduleId: "module7",
      number: "7.1",
      titleAr: "هيكلة مركز الـ SOC: المستويات (Tier 1/2/3)، التصعيد، ومقاييس الأداء MTTD و MTTR و SLA",
      titleEn: "SOC Organizational Structure: Tiers (1, 2, 3), Escalation Matrix & Metrics (MTTD, MTTR, SLA)",
      duration: "65 min",
      theoryAr: `
<h3>داخل غرفة العمليات: كيف تدار نوبات الحراسة ومن يتخذ القرارات المصيرية؟</h3>
<p class="lead">مركز العمليات الأمنية (SOC) ليس مجرد شاشات خضراء مبهرة في غرفة مظلمة كما تعرضها أفلام هوليوود! بل هو مصنع منظم يعمل وفق معايير عسكرية صارمة لفرز ملايين الأحداث على مدار 24 ساعة طوال أيام الأسبوع (24/7/365). في هذا الدرس، سنتعلم كيف يعمل الفريق، متى تقوم بتصعيد التنبيه، وكيف تُقاس كفاءتك المهنية.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: قسم الطوارئ في المستشفى التخصصي</div>
  <p><strong>طبيب الفرز الأولي (Triage Nurse - SOC Tier 1):</strong> يستقبل المريض عند الباب، يقيس الضغط والحرارة (يفحص السجل والـ IP)، ويقرر: هل هي إنفلونزا عادية تحتاج مسكناً (False Positive / Benign)؟ أم أزمة قلبية حادة تستدعي نقله فوراً لغرفة العمليات الجراحية (Escalation to Tier 2)?!</p>
  <p><strong>طبيب الجراحة المتخصص (Surgeon - SOC Tier 2):</strong> يستلم الحالة الحرجة ويبدأ بفتح الصدر (تحليل الذاكرة، فحص كود الفايروس، وعزل الأجهزة المصابة وتتبع نقطة الدخول).</p>
  <p><strong>رئيس الأطباء واستشاري الأوبئة (Medical Consultant - SOC Tier 3 / Hunter):</strong> لا ينتظر المرضى في الطوارئ! بل يبحث في المجتمع عن أمراض جديدة متحورة لم تسجل من قبل (Threat Hunting) ويضع بروتوكولات الوقاية.</p>
</div>

<h4>1. التسلسل الهرمي لأدوار ومسؤوليات محللي الـ SOC:</h4>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>المستوى الوظيفي</th>
        <th>المسمى المهني</th>
        <th>المهام اليومية المحددة</th>
        <th>متى يقوم بالتصعيد (Escalation)؟</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Tier 1</strong></td>
        <td>Associate / Triage Analyst (محلل فرز أولي)</td>
        <td>مراقبة طابور التنبيهات في الـ SIEM، فحص السجلات الخام ومؤشرات الـ IOCs في أدوات Threat Intel، إغلاق التنبيهات الكاذبة (False Positives)، والتحقق من صحة التنبيهات الحقيقية (Initial Triage).</td>
        <td><strong>يقوم بالتصعيد إلى Tier 2 فوراً عندما:</strong> يتأكد أن التنبيه True Positive (هجوم حقيقي)، أو إذا كان التنبيه على خادم حرج (Domain Controller / Core DB)، أو إذا لم يتمكن من حسم القرار خلال 15 دقيقة!</td>
      </tr>
      <tr>
        <td><strong>Tier 2</strong></td>
        <td>Incident Responder (محقق ومستجيب للحوادث)</td>
        <td>استلام التذاكر المصعدة من Tier 1، إجراء التحليل الجنائي العميق (Deep Forensics) على الأجهزة المصابة، فحص شجرة العمليات في الـ EDR، عزل الأجهزة، تتبع الحركة الجانبية، وكتابة تقرير الحادث الأمني الرسمي.</td>
        <td>يصعد إلى مدير الـ SOC وإدارة المخاطر في حال تأكيد اختراق بيانات كبرى أو انتشار برمجية فدية واسعة.</td>
      </tr>
      <tr>
        <td><strong>Tier 3</strong></td>
        <td>Threat Hunter / Senior Analyst (صائد التهديدات)</td>
        <td>الصيد الاستباقي للتهديدات الخفية (Proactive Threat Hunting)، تحليل الهندسة العكسية للبرمجيات الخبيثة المتقدمة (Reverse Engineering)، وتطوير قواعد كشف جديدة لمنع هجمات الـ Zero-Day.</td>
        <td>يعمل مستشاراً تقنياً لكبار المهندسين والمدراء.</td>
      </tr>
      <tr>
        <td><strong>SOC Lead / Manager</strong></td>
        <td>مدير مركز العمليات الأمنية</td>
        <td>إدارة الفريق، تنظيم جداول النوبات، متابعة مقاييس الأداء (KPIs)، التواصل مع إدارة الشركة والعملاء، وإدارة الأزمات الكبرى.</td>
        <td>المسؤول النهائي أمام الرئيس التنفيذي ومجلس الإدارة.</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>2. مقاييس الأداء الحيوية في الـ SOC (Key Performance Indicators):</h4>
<ul>
  <li><strong>MTTD (Mean Time to Detect):</strong> متوسط الوقت المستغرق لاكتشاف الهجوم من لحظة دخول المهاجم وحتى إطلاق أول تنبيه في الـ SIEM (الهدف: أقل من 15 دقيقة).</li>
  <li><strong>MTTR (Mean Time to Respond / Remediate):</strong> متوسط الوقت المستغرق لاحتواء الهجوم وعزل الأجهزة وتنظيف التهديد بالكامل (الهدف: أقل من 60 دقيقة).</li>
  <li><strong>SLA (Service Level Agreement):</strong> اتفاقية مستوى الخدمة الملزمة قانونياً؛ تحدد الحد الأقصى للوقت المسموح للمحلل للرد على التنبيهات حسب خطورتها (مثال: Critical SLA = 15 دقيقة، High SLA = 30 دقيقة).</li>
</ul>
      `,
      theoryEn: `<h3>SOC Architecture: Tier 1/2/3 Hierarchy, Escalation Matrix, and Performance Metrics (MTTD, MTTR, SLA)</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: سباق الزمن وسيناريوهات التصعيد</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 وقت الاختراق (Breakout Time) للمهاجم</h4>
    <ul>
      <li>أخطر مقياس عالمي للمهاجمين هو <strong>Breakout Time</strong>: وهو الوقت المستغرق من لحظة كسر أول جهاز (Initial Access) وحتى التسلل والقفز لجهاز آخر في الشبكة (Lateral Movement). في مجموعات التهديد المتقدمة مثل قراصنة روسيا والصين، يبلغ متوسط هذا الوقت أقل من <strong>60 دقيقة</strong>! إذا تأخر محلل الـ SOC في الفرز، سيسيطر الهكر على كامل الشركة!</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 قاعدة 1-10-60 الذهبية لشركة CrowdStrike</h4>
    <ul>
      <li><strong>1 دقيقة:</strong> لاكتشاف التنبيه ورؤيته في الشاشة.</li>
      <li><strong>10 دقائق:</strong> للتحقيق المبدئي وتأكيد هل هو True Positive وتصعيده.</li>
      <li><strong>60 دقيقة:</strong> لعزل الأجهزة واحتواء التهديد بالكامل وطرده من الشبكة!</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Adversary Breakout Time vs SOC 1-10-60 Containment Rule</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 7.1: محاكاة تصعيد تذكرة أمنية من Tier 1 إلى Tier 2</h4>
    <p>استخدم نظام التذاكر لمحاكاة فرز تنبيه، كتابة ملخص التحقيق المبدئي، وتصعيده لفريق Tier 2.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-7-1">
      <div class="term-line output">SOC Ticketing & SLA Engine v3.0</div>
      <div class="term-line output">Type 'view-sla-queue' or 'escalate-ticket &lt;id&gt;'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('view-sla-queue', 'lab-term-7-1')">Inspect Active SLA Alert Queue</button>
    <button class="btn-cmd" onclick="runSimCommand('escalate-ticket INC-901', 'lab-term-7-1')">Escalate Incident to Tier 2 Lead</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive SOC escalation workflow and SLA queue monitoring.</p>`,
      ticket: {
        ticketId: "SEC-TICK-701",
        severity: "CRITICAL",
        severityClass: "critical",
        sourceHost: "SOC-TICKETING-PORTAL",
        timestamp: "2026-11-06 20:02:15 UTC",
        ruleTriggered: "SLA_BREACH_WARNING_CRITICAL_DC_ALERT_PENDING_TRIAGE",
        rawLog: `INCIDENT: INC-2026-8819
TIME_IN_QUEUE: 13 minutes (Critical SLA Threshold: 15 minutes)
TARGET_HOST: DC01.corp.local (Core Domain Controller)
ALERT_TRIGGER: Sysmon 10 - ProcessAccess to lsass.exe by Rundll32.exe (GrantedAccess: 0x1FFFFF)
ANALYST_ASSIGNED: Tier 1 Junior Analyst
STATUS: Unacknowledged`,
        questionAr: "بصفتك محلل SOC أول، لاحظت تذكرة حرجة على الدومين كنترولر أوشكت على كسر الـ SLA (13 دقيقة دون حسم). ما هو الإجراء الاحترافي الفوري الواجب اتخاذه؟",
        questionEn: "Analyze the pending critical incident on DC01 nearing SLA breach. What is your immediate operational action?",
        optionsAr: [
          "الانتظار حتى انتهاء الـ 15 دقيقة ثم النظر في التذكرة.",
          "سحب التذكرة فوراً، تصعيدها لحالة Emergency P1 وتفعيل بروتوكول التصعيد لـ Tier 2 والـ Incident Response، وعزل محطة العمل المهاجمة، لإنقاذ الدومين كنترولر قبل كسر الـ SLA وانتشار سرقة الهاشات.",
          "إلغاء التذكرة وإعادة جدولتها في نوبة الغد.",
          "تعديل وقت الـ SLA في النظام لتفادي العقوبات."
        ],
        optionsEn: [
          "Wait until SLA expires.",
          "Immediate intervention: Seize ticket, escalate to Emergency P1 / Tier 2 IR Lead, execute rapid containment to prevent DC LSASS exfiltration, and meet SLA.",
          "Reschedule ticket to tomorrow.",
          "Alter SLA timer configuration."
        ],
        correctIndex: 1,
        explanationAr: "تصرف قيادي حازم لا يحتمل التردد يا باشمهندس بشار! التنبيه يقع على الدومين كنترولر (DC01) ويمثل محاولة صريحة لسرقة الهاشات (GrantedAccess: 0x1FFFFF)، ولم يتبق سوى دقيقتين قبل كسر اتفاقية الـ SLA (15 دقيقة). التدخل الفوري لسحب التذكرة وتصعيدها لفريق الـ IR وعزل الجهاز المهاجم هو التصرف السليم الذي يحمي أمن المؤسسة وسمعة فريق الـ SOC.",
        explanationEn: "Spot-on! A Critical LSASS access on the Primary Domain Controller nearing SLA breach mandates immediate seizure, emergency P1 escalation to Tier 2 IR, and containment."
      }
    },

    {
      id: "lesson-7-2",
      moduleId: "module7",
      number: "7.2",
      titleAr: "المنهجية الذهبية لفرز التنبيهات (Alert Triage) في 7 خطوات: TP vs FP vs BTP",
      titleEn: "The Golden 7-Step Alert Triage Methodology: True Positive vs False Positive vs BTP",
      duration: "70 min",
      theoryAr: `
<h3>دستور فرز الحوادث: كيف تفحص أي تنبيه يصل لشاشتك في 7 خطوات منهجية صارمة؟</h3>
<p class="lead">المحلل الهاوي يتخبط في الشاشة: يفتح المتصفح تارة، ويسأل زميله تارة، ولا يعرف من أين يبدأ! أما المحلل المحترف فيملك <strong>منهجية فرز ذهبية من 7 خطوات (7-Step Triage Framework)</strong> ينفذها كالجراح البارع ليصل إلى القرار الصحيح في دقائق معدودة.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: بروتوكول التحقيق الجنائي في مسرح الجريمة</div>
  <p>المحقق الجنائي لا يدخل مسرح الجريمة ويبدأ بالعبث في الأغراض عشوائياً! بل يتبع خطوات محددة:
  1. التحقق من هوية البلاغ، 2. تأمين المكان، 3. جمع الأدلة والبصمات، 4. فحص سجل المكالمات، 5. استجواب الشهود، 6. مطابقة البيانات مع سجل السوابق، 7. إصدار التقرير القضائي وقرار الاعتقال!</p>
</div>

<h4>الخطوات السبع المنهجية لفرز أي تنبيه أمني في العالم (The 7-Step Triage Framework):</h4>

<pre class="ascii-flow">
1. فهم قاعدة التنبيه (Alert Understanding): ما الذي فجر هذا الإنذار ولماذا؟
       ↓
2. استخراج وفحص السجل الخام (Raw Log Analysis): تدقيق حقول Who, What, Where, When.
       ↓
3. إثراء المؤشرات (Enrichment via Threat Intel): فحص الـ IP والهاش والدومين في VirusTotal/AbuseIPDB.
       ↓
4. التحقق من أصول الشركة (Asset & User Context): هل الحساب مدير؟ هل الجهاز خادم أم لابتوب استقبال؟
       ↓
5. فحص التوقيت والسلوك السابق (Historical Baseline): هل قام المستخدم بهذا الفعل سابقاً؟ هل الوقت طبيعي؟
       ↓
6. فحص سجلات الأجهزة المجاورة (Lateral Telemetry): هل تأثرت أجهزة أخرى في نفس الـ Subnet؟
       ↓
7. إصدار الحكم النهائي (Verdict):
   ├── True Positive (TP): هجوم حقيقي نشط -> بدء الاحتواء فوراً!
   ├── False Positive (FP): إنذار خاطئ ونشاط مشروع -> إغلاق التذكرة وعمل Tuning للقاعدة.
   └── Benign True Positive (BTP): هجوم حقيقي ولكنه صُد بنجاح من الـ WAF/Firewall دون ضرر.
</pre>

<h4>شرح القرارات الثلاثة للفرز (The Triage Verdict Triad):</h4>
<ul>
  <li><strong>1. True Positive (TP - هجوم حقيقي):</strong> التهديد حقيقي وخطير، وقد نجح في التسلل أو قيد التنفيذ (مثال: مستخدم شغل ملف فدية بدأ بتشفير الملفات، أو اتصال C2 نشط). <em>الإجراء: عزل الجهاز، تصعيد الحادث، وتطبيق خطة الاستجابة Playbook.</em></li>
  <li><strong>2. False Positive (FP - إنذار خاطئ):</strong> التنبيه أطلق بالخطأ بسبب نشاط إداري أو برمجي مشروع (مثال: المطور alex يختبر سكربت محلي، أو خادم المراقبة يفحص المنافذ). <em>الإجراء: إغلاق التذكرة وتوثيق السبب واقتراح تعديل للقاعدة.</em></li>
  <li><strong>3. Benign True Positive (BTP / Blocked TP):</strong> الهجوم حقيقي ومصدره هكر خارجي، ولكنه <strong>مُنع وصُد بنجاح</strong> بواسطة دفاعات المحيط (مثال: هكر أرسل طلب SQLi وقام الـ WAF بإرجاع كود <code>403 Forbidden</code> وحظر الطلب). <em>الإجراء: توثيق الهجوم وإغلاق التذكرة كـ Blocked دون الحاجة لعزل الخادم!</em></li>
</ul>
      `,
      theoryEn: `<h3>The 7-Step Alert Triage Methodology: True Positive, False Positive & Benign True Positive</h3>`,
      attackDefenseAr: `
<h3>الأسئلة السبعة التي يطرحها المحلل على نفسه قبل إصدار الحكم:</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 محاولات المهاجم لخداع الفرز</h4>
    <ul>
      <li>استخدام أسماء ملفات بريئة مثل <code>update.exe</code> في مجلدات المستخدمين.</li>
      <li>تنفيذ الهجمات خلال ساعات العمل الرسمية لتختلط مع آلاف اتصالات الموظفين الشرعية.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 قائمة التدقيق الحاسمة (Triage Checklist)</h4>
    <ul>
      <li>هل اسم العملية ومسارها متطابقان مع معايير مايكروسوفت؟</li>
      <li>هل هناك عملية أب مشبوهة (Word تستدعي PowerShell)؟</li>
      <li>ما هي سمعة الـ IP الخارجي في AbuseIPDB؟</li>
      <li>هل تم إرسال أوامر مشفرة بـ Base64؟</li>
      <li>هل الحساب المستهدف موظف عادي أم مدير نطاق؟</li>
      <li>ماذا كانت استجابة السيرفر (هل نجح الهجوم 200 OK أم رُفض 403 Forbidden)؟</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Adversary Masquerading vs SOC Triage Checklist</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 7.2: محاكاة فرز حوادث حية وتحديد TP / FP / BTP</h4>
    <p>استخدم مركز الفرز التفاعلي لفحص سيناريوهات واقعية وإصدار قرار الفرز الدقيق.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-7-2">
      <div class="term-line output">SOC Triage Evaluation Engine</div>
      <div class="term-line output">Type 'triage-next-case' to review pending alerts.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('triage-next-case', 'lab-term-7-2')">Load Next Triage Case</button>
    <button class="btn-cmd" onclick="runSimCommand('evaluate-verdict TP', 'lab-term-7-2')">Submit True Positive (TP)</button>
    <button class="btn-cmd" onclick="runSimCommand('evaluate-verdict FP', 'lab-term-7-2')">Submit False Positive (FP)</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive alert triage simulation and verdict submission.</p>`,
      ticket: {
        ticketId: "SEC-TICK-702",
        severity: "MEDIUM",
        severityClass: "medium",
        sourceHost: "PORTAL-NGINX-WAF",
        timestamp: "2026-11-06 22:50:11 UTC",
        ruleTriggered: "WAF_OWASP_CRS_XSS_ATTACK_DETECTED",
        rawLog: `TIMESTAMP: 2026-11-06 22:50:11.901
SRC_IP: 198.51.100.44 (External Web Visitor - Germany)
REQUEST: "GET /search?q=%3Cscript%3Ealert(document.cookie)%3C/script%3E HTTP/1.1"
HOST: store.corp.com
RESPONSE_STATUS: 403 Forbidden
BYTES_SENT: 162 bytes
ACTION: WAF Dropped Connection and returned 403`,
        questionAr: "أمامك تنبيه بمحاولة هجوم XSS عبر رابط البحث، ورد السيرفر بكود 403 Forbidden وأسقط الـ WAF الحزمة. ما هو تصنيف الفرز الدقيق لهذا الحادث؟",
        questionEn: "Analyze the XSS alert on store.corp.com returning 403 Forbidden and dropped by WAF. What is the precise triage verdict?",
        optionsAr: [
          "هجوم حقيقي ناجح True Positive أدى لسرقة كوكيز جميع المستخدمين ويجب إيقاف المتجر فوراً.",
          "هجوم حقيقي ولكن تم صده بنجاح من جدار الحماية (Benign True Positive / Blocked True Positive): الهجوم حقيقي ومصدره بايلود XSS خبيث، ولكن الـ WAF قام بواجبه وحظر الطلب ولم يتم تنفيذ أي كود داخل الموقع، وتُغلق التذكرة دون إجراءات طوارئ.",
          "إنذار خاطئ مشروع False Positive لأن المستخدم يبحث عن منتجات برمجة.",
          "خطأ في متصفح المستخدم."
        ],
        optionsEn: [
          "Successful True Positive breach.",
          "Blocked / Benign True Positive (BTP): Genuine XSS payload successfully intercepted and blocked by WAF (403 Forbidden). No exploitation occurred, ticket closed.",
          "False Positive benign query.",
          "User browser error."
        ],
        correctIndex: 1,
        explanationAr: "إتقان ودقة متناهية في التقييم يا باشمهندس بشار! هذا هو الفارق بين المحلل الخبير والمبتدئ: الهجوم ليس False Positive لأن النص يحتوي على كود XSS خبيث صريح (alert(document.cookie))، ولكنه في نفس الوقت ليس True Positive نشط لأن الـ WAF قام بصده وأرجع 403 Forbidden وحجم رد 162 بايت فقط (صفحة خطأ). التصنيف المعياري الصحيح هو Blocked True Positive / Benign True Positive ويُسجل في الإحصائيات كدفاع ناجح.",
        explanationEn: "Spot on! An authentic exploit payload that is successfully blocked by perimeter security controls returning an error code (403 Forbidden) is classified as a Blocked/Benign True Positive."
      }
    },

    {
      id: "lesson-7-3",
      moduleId: "module7",
      number: "7.3",
      titleAr: "Playbook 1: التحقيق الكامل في هجمات التصيد (Phishing) وفحص ترويسات الإيميل والمرفقات",
      titleEn: "Playbook 1: Comprehensive Phishing Investigation, Email Header Analysis & Triage",
      duration: "70 min",
      theoryAr: `
<h3>خطة التحقيق في التصيد الاحتيالي: كيف تشرح ترويسات الإيميل وتكشف الخداع في ثوانٍ؟</h3>
<p class="lead">أكثر من 90% من حوادث الاختراق الكبرى واختراقات الفدية في التاريخ بدأت بـ <strong>رسالة بريد إلكتروني احتيالية (Phishing Email)</strong>! في هذا الدليل الميداني (Playbook)، سنتعلم كيف يفحص محلل الـ SOC ترويسات الإيميل (Email Headers) كلمة بكلمة، وكيف يتحقق من صحة بروتوكولات الأمان SPF و DKIM و DMARC.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: المظروف البريدي المزيف والأختام الرسمية</div>
  <p>أي شخص يستطيع أخذ ورقة عادية ويكتب في ترويستها العلوية: <em>"من: رئيس مجلس إدارة البنك الأهلي"</em>. إذا نظرت للورقة فقط ستصدق!</p>
  <p>ولكن المفتش الجنائي لا ينظر لورقة الرسالة؛ بل ينظر إلى <strong>أختام مكاتب البريد على ظهر المظروف (Email Headers)</strong>: من أي مكتب بريد أُرسلت؟ وما هي بصمة الشمع الأحمر للراسل؟</p>
</div>

<h4>1. الثالوث المقدس لأمان البريد الإلكتروني (SPF, DKIM, DMARC):</h4>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>بروتوكول الأمان</th>
        <th>الاسم الهندسي</th>
        <th>كيف يعمل وماذا يفحص؟</th>
        <th>ماذا يعني لمحلل الـ SOC؟</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>SPF</strong></td>
        <td>Sender Policy Framework</td>
        <td>قائمة في سجل الـ DNS يحدد فيها صاحب الدومين عناوين الـ IP المصرح لها فقط بإرسال إيميلات باسمه.</td>
        <td>إذا جاءك إيميل يدعي أنه من <code>paypal.com</code> ولكن الـ IP المرسل ليس مسجلاً في سجل SPF لباي بال، فالنتيجة: <code>SPF = FAIL</code> (انتحال شخصية مؤكد!).</td>
      </tr>
      <tr>
        <td><strong>DKIM</strong></td>
        <td>DomainKeys Identified Mail</td>
        <td>توقيع رقمي مشفر بمفتاح خاص (Private Key) يوضع في ترويسة الرسالة للتحقق من أن نص الرسالة ومرفقاتها لم يتم التعديل عليها في الطريق.</td>
        <td>إذا عدل الهكر حرفاً واحداً في الرسالة، يفشل التوقيع: <code>DKIM = FAIL</code>.</td>
      </tr>
      <tr>
        <td><strong>DMARC</strong></td>
        <td>Domain-based Message Authentication</td>
        <td>السياسة الإلزامية التي يطلبها صاحب النطاق من خوادم العالم في حال فشل SPF أو DKIM: هل تقبل الرسالة (None)، أم تضعها في السبام (Quarantine)، أم ترفضها تماماً وتحذفها (Reject)؟</td>
        <td>الحصن المنيع ضد تزوير الإيميلات.</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>2. تشريح ترويسة البريد الإلكتروني (Email Header Breakdown):</h4>
<pre class="ascii-flow">
Received: from mail.evil-attacker-vps.com (194.26.29.112)  <-- مسار السيرفر الحقيقي الذي أرسل الرسالة فيزيائياً
From: "IT Support Helpdesk" <support@microsoft-security-update.xyz>  <-- العنوان الظاهر للضحية
Reply-To: badhacker@protonmail.com  <-- أين يذهب رد الضحية إذا ضغط Reply!
Return-Path: <bounce@evil-attacker-vps.com>
Authentication-Results: spf=fail (sender IP 194.26.29.112 not authorized);
                        dkim=fail;
                        dmarc=fail;
Subject: URGENT: Your corporate password expires in 2 hours - Click here to keep your account active!
</pre>

<h4>3. خطوات الـ Playbook العملية للتحقيق في إيميل مشبوه:</h4>
<ol>
  <li><strong>فحص الترويسة:</strong> استخراج عنوان الـ IP المصدر والتحقق من حالة SPF/DKIM/DMARC.</li>
  <li><strong>فحص الروابط (URLs):</strong> نسخ الرابط المشبوه (بدون الضغط عليه!) وفحصه في أدوات آمنة مثل <em>URLScan.io</em> و <em>VirusTotal</em>.</li>
  <li><strong>فحص المرفقات (Attachments):</strong> سحب بصمة الـ SHA-256 للمرفق وفحصه، أو تشغيله في بيئة معزولة (Any.Run Sandbox).</li>
  <li><strong>البحث الشامل في الـ SIEM:</strong> معرفة هل استلم موظفون آخرون في الشركة نفس الإيميل؟ وهل قام أي شخص بالضغط على الرابط؟</li>
  <li><strong>إجراءات المعالجة (Remediation):</strong> سحب وحذف الإيميل من جميع صناديق البريد (Purge from Office 365 / Exchange)، حظر الدومين والـ IP على البروكسي والجدار الناري، وتغيير كلمات مرور من فتحوا الرابط.</li>
</ol>
      `,
      theoryEn: `<h3>Playbook 1: End-to-End Phishing Triage, Email Headers Analysis & Enterprise Remediation</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: صيد حيل التصيد المتقدمة</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 أساليب المهاجمين الحديثة في التصيد</h4>
    <ul>
      <li><strong>التنكر الشكلي للدومينات (Typosquatting & Punycode):</strong> تسجيل دومين يشبه دومين الشركة شكلياً مثل استبدال الحرف l برقم 1: <code>micros0ft.com</code> أو <code>c0rp.local</code>.</li>
      <li><strong>استخدام روابط مشروعة للتحويل (Open Redirect):</strong> وضع رابط لشركة معروفة ولكن ينتهي بتحويل الضحية لسيرفر التصيد.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 خطة المدافع في المعالجة الجماعية</h4>
    <ul>
      <li>استخدام أوامر PowerShell لخدمة Exchange / M365 مثل: <code>Search-Mailbox -SearchQuery 'Subject:"URGENT"' -DeleteContent</code> لحذف الإيميل الخبيث من آلاف الحسابات في دقيقة واحدة!</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Typosquatting Evasion vs Automated Mailbox Purging</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 7.3: فحص ترويسات الإيميل المشبوه واستخراج الـ IP المصدر</h4>
    <p>استخدم محاكي فحص الترويسات لتحليل سجلات SPF و DKIM وكشف التزوير.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-7-3">
      <div class="term-line output">Phishing Forensic Header Analyzer</div>
      <div class="term-line output">Type 'analyze-email-headers' or 'check-spf-record'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('analyze-email-headers', 'lab-term-7-3')">Parse Raw RFC 822 Email Headers</button>
    <button class="btn-cmd" onclick="runSimCommand('check-spf-record microsoft.com', 'lab-term-7-3')">Check SPF DNS Record Validation</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Email header inspection and SPF/DKIM validation lab.</p>`,
      ticket: {
        ticketId: "SEC-TICK-703",
        severity: "HIGH",
        severityClass: "high",
        sourceHost: "EXCHANGE-SECURITY-GATEWAY",
        timestamp: "2026-11-06 17:15:00 UTC",
        ruleTriggered: "INBOUND_EMAIL_SPOOFING_SPF_DKIM_FAILED",
        rawLog: `EMAIL_TELEMETRY:
MessageId: <20261106171500.8410@mail-spoof-relay.cc>
From: "IT Support Center" <support@corp.local>
Reply-To: credentials-collector@protonmail.com
Received_From_IP: 185.220.101.5 (Tor Exit Relay)
SPF_Result: Fail (IP 185.220.101.5 is NOT in SPF record for corp.local)
DKIM_Result: None / Invalid Signature
DMARC_Result: Fail
Subject: ACTION REQUIRED: Complete your mandatory 2026 benefits enrollment now
Body_URL: http://corporate-benefits-portal.xyz/login.html
Recipients: 42 employees across Finance and HR departments`,
        questionAr: "تلقيت تنبيهاً بوصول إيميل لـ 42 موظفاً يدعي أنه من support@corp.local ولكن SPF=Fail و DKIM=Fail والـ IP المصدر هو عقدة Tor. ما هي خطة الاستجابة الفورية؟",
        questionEn: "Analyze the spoofed email sent to 42 employees with failed SPF/DKIM originating from Tor. What is your immediate response plan?",
        optionsAr: [
          "السماح بالإيميل لأن موضوع الرسالة يخص مزايا الموظفين السنوية.",
          "حادث تصيد احتيالي خطير ومنسق (True Positive - Spear Phishing Campaign): الإيميل مزور بالكامل (SPF/DKIM/DMARC Failed) من عقدة Tor خبيثة. الخطة الفورية: 1. حذف الرسالة فوراً من صناديق جميع الـ 42 موظفاً، 2. حظر الدومين والـ IP على البروكسي، 3. البحث في السجلات لمعرفة هل قام أي موظف بفتح الرابط لتغيير كلمة مروره فوراً.",
          "تعديل إعدادات الدومين لقبول الإيميل.",
          "عطل فني في خادم Exchange."
        ],
        optionsEn: [
          "Allow email delivery.",
          "Critical Phishing Incident (True Positive): Phishing campaign with spoofed headers from Tor. Immediate actions: 1. Purge email from all 42 mailboxes, 2. Block domain/IP on proxy, 3. Triage proxy logs to see who clicked and reset passwords.",
          "Reconfigure domain to accept spoofed mail.",
          "Exchange server bug."
        ],
        correctIndex: 1,
        explanationAr: "تطبيق متكامل واحترافي لـ Phishing Playbook يا باشمهندس بشار! فشل SPF و DKIM و DMARC ومصدر IP يتبع عقدة Tor هو الإثبات القاطع على تزوير اسم الشركة support@corp.local. وجود 42 مستلماً يعني أنك تواجه هجوماً منسقاً. الخطوات الثلاث: 1) إزالة الإيميل من كل الصناديق فوراً، 2) فحص سجلات البروكسي والـ SIEM لمعرفة من ضغط على الرابط، 3) إعادة تعيين كلمة مرور أي موظف زار الرابط وتفعيل MFA لحسابه.",
        explanationEn: "Spot on! Failed SPF/DKIM/DMARC originating from Tor targeting 42 employees mandates immediate multi-mailbox purging, proxy perimeter blocking, and user click investigation."
      }
    },

    {
      id: "lesson-7-4",
      moduleId: "module7",
      number: "7.4",
      titleAr: "Playbook 2: التحقيق في البرمجيات الخبيثة والـ Ransomware وعزل نقطة الدخول (Patient Zero)",
      titleEn: "Playbook 2: Malware & Ransomware Investigation, Patient Zero Identification & Containment",
      duration: "70 min",
      theoryAr: `
<h3>خطة الطوارئ القصوى: كيف تتصرف عندما تصرخ صفارات الإنذار بتشفير الخوادم؟</h3>
<p class="lead">برمجيات الفدية (Ransomware) هي أكبر تهديد مالي يهدد الشركات بالإفلاس والزوال. عندما ينطلق تنبيه تشفير الملفات، تكون عقارب الساعة في سباق قاتل: كل دقيقة تمر تعني تشفير آلاف الملفات الإضافية وسقوط خوادم جديدة. في هذا الـ Playbook، سنتعلم بروتوكول التصرف السريع خطوة بخطوة.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: احتواء حريق هائل في ناطحة سحاب</div>
  <p>عندما يشب حريق في الطابق العاشر من برج سكني، أول خطوة يقوم بها رجال الإطفاء ليست إحصاء الخسائر أو البحث عن عود الثقاب! بل <strong>إغلاق أبواب الطوارئ العازلة للنيران فوراً (Fire Doors)</strong> لمنع السنة اللهب من الوصول للطوابق الأخرى، ثم إخماد البؤرة الأصلية للحريق (Patient Zero)!</p>
</div>

<h4>مراحل الـ Ransomware Response Playbook خطوة بخطوة:</h4>

<pre class="ascii-flow">
[ المرحلة 1: الكشف والتحقق الفوري (Detection & Verification) ]
  ├── التحقق من تنبيه الـ EDR وسجلات تعديل الملفات وحذف الـ Shadow Copies.
  │
[ المرحلة 2: الاحتواء الحاسم الفوري (Containment - في أقل من 5 دقائق!) ]
  ├── عزل الجهاز المصاب عبر الـ EDR (Host Isolation).
  ├── فصل كابل الشبكة الفيزيائي وتعطيل الواي فاي إذا لم يستجب الـ EDR.
  ├── فصل خوادم النسخ الاحتياطي عن الشبكة فوراً (Air-Gapped Backup Protection).
  │
[ المرحلة 3: تحديد نقطة الدخول الأولى (Patient Zero Hunting) ]
  ├── كيف دخل الفايروس؟ إيميل تصيد؟ منفذ RDP مفتوح على الإنترنت؟ فلاشة USB؟
  │
[ المرحلة 4: استئصال التهديد والتنظيف (Eradication) ]
  ├── قتل العمليات الخبيثة، حذف مفاتيح البقاء، ومسح الملفات التنفيذية.
  │
[ المرحلة 5: التعافي والاسترجاع (Recovery) ]
  ├── استعادة الملفات النظيفة من النسخ الاحتياطية المعتمدة والتأكد من سد الثغرة.
</pre>

<h4>من هو المريض صفر (Patient Zero) ولماذا البحث عنه مصيري؟</h4>
<p><strong>Patient Zero</strong> هو أول جهاز في الشركة أصيب بالعدوى ودخل منه المهاجم. إذا قمت بتنظيف 5 خوادم مشفرة ولكنك نسيت البحث عن الجهاز الأول الذي دخل منه الفايروس، فإن المهاجم سيعيد تشفير الشركة بالكامل في اليوم التالي! التحقيق في سجلات أول حدث اتصال خارجي وسجلات الـ Proxy هو المفتاح للوصول إليه.</p>
      `,
      theoryEn: `<h3>Playbook 2: Ransomware Containment, Patient Zero Identification & Enterprise Recovery</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: سباق عزل الشبكة وحماية النسخ الاحتياطية</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 خطة عصابات برمجيات الفدية (Ransomware Operators)</h4>
    <ul>
      <li>المهاجم لا يشفر فوراً! بل يظل في الشبكة لأسابيع (Dwell Time) يبحث عن خوادم النسخ الاحتياطي لتدميرها وتشفيرها أولاً حتى يجبر الشركة على دفع الفدية!</li>
      <li>تنفيذ الابتزاز المزدوج (Double Extortion): سرقة البيانات الحساسة قبل تشفيرها وتهديد الشركة بنشرها في الإنترنت إذا لم تدفع.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 الدفاع الحصين لمحلل الـ SOC</h4>
    <ul>
      <li><strong>عزل النسخ الاحتياطية (Immutable / Air-gapped Backups):</strong> التأكد من أن النسخ الاحتياطية مخزنة بنظام يمنع التعديل والحذف حتى من قبل مدراء النظام!</li>
      <li><strong>مراقبة ملفات الطُعم (Canary Files):</strong> وضع ملفات وورد وهمية في المجلدات المشتركة؛ بمجرد قيام أي برنامج بتعديلها، يطلق الـ EDR تنبيهاً فورياً ويعزل الجهاز تلقائياً في أقل من ثانية!</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Double Extortion Ransomware vs Immutable Backups & Canary Traps</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 7.4: تتبع المريض صفر (Patient Zero) في شجرة حوادث الـ EDR</h4>
    <p>حلل تسلسل الأحداث لاستخراج أول جهاز استقبل البايلود الخبيث.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-7-4">
      <div class="term-line output">Ransomware Incident Triage Shell</div>
      <div class="term-line output">Type 'find-patient-zero' or 'isolate-subnet 10.140.20.0/24'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('find-patient-zero', 'lab-term-7-4')">Identify Patient Zero Host</button>
    <button class="btn-cmd" onclick="runSimCommand('verify-shadow-copies', 'lab-term-7-4')">Audit Volume Shadow Copies</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Ransomware incident response and Patient Zero hunting lab.</p>`,
      ticket: {
        ticketId: "SEC-TICK-704",
        severity: "CRITICAL",
        severityClass: "critical",
        sourceHost: "FINANCE-SHARE-SRV",
        timestamp: "2026-11-06 21:30:45 UTC",
        ruleTriggered: "RANSOMWARE_MASS_FILE_RENAME_AND_RANSOM_NOTE_DETECTED",
        rawLog: `ALERT: Active Ransomware Outbreak
TargetServer: FINANCE-SHARE-SRV (10.140.10.20)
Trigger: 1,420 files renamed with '.lockbit3' in Shared_Finance$ folder in 40 seconds
CanaryFile_Hit: C:\\Shares\\Accounting\\readme_to_decrypt.txt created
NETWORK_TELEMETRY:
  Inbound SMB (Port 445) traffic flooding server from: 10.140.30.12 (HR-LAPTOP-14)
  Process on HR-LAPTOP-14: winword.exe -> powershell.exe -> C:\\Users\\Public\\locker.exe`,
        questionAr: "تلقيت تنبيهاً بتشفير ملفات خادم المالية، وكشفت تحليلات الشبكة أن حركة التشفير قادمة عبر SMB من لابتوب الـ HR (10.140.30.12). من هو المريض صفر وما هو الإجراء العاجل؟",
        questionEn: "Finance share is being encrypted by SMB traffic from HR-LAPTOP-14 (10.140.30.12). Who is Patient Zero and what is the immediate action?",
        optionsAr: [
          "المريض صفر هو خادم المالية، ويجب إطفاء خادم المالية فقط.",
          "المريض صفر الحقيقي هو لابتوب الـ HR (10.140.30.12) الذي أصيب بماكرو وورد وشغل برمجية الفدية locker.exe وينشر التشفير عبر الشبكة! الإجراء الفوري: عزل لابتوب الـ HR وخادم المالية فوراً، قطع منافذ SMB مؤقتاً، وتأمين خوادم النسخ الاحتياطي.",
          "تحديث مجدول لقاعدة بيانات المحاسبة.",
          "خطأ في صلاحيات مشاركة الملفات."
        ],
        optionsEn: [
          "Patient zero is the finance server; reboot it.",
          "Confirmed Patient Zero is HR-LAPTOP-14 (10.140.30.12) infected via Word macro executing locker.exe and encrypting network shares via SMB. Immediately isolate both hosts, restrict SMB, and safeguard backups.",
          "Accounting database scheduled update.",
          "File share permission bug."
        ],
        correctIndex: 1,
        explanationAr: "تشخيص ميداني عبقري ومفصلي يا باشمهندس بشار! هذا الخطأ يقع فيه الكثير من المبتدئين: خادم المالية هو الضحية المتأثرة، ولكن <strong>المريض صفر الحقيقي (Patient Zero)</strong> هو لابتوب الموارد البشرية HR-LAPTOP-14 (10.140.30.12) الذي دخلت منه الفدية وبدأ بمهاجمة المجلد المشترك عبر بورت 445! إذا قمت بعزل خادم المالية فقط وتركت لابتوب الـ HR، فسيواصل تشفير باقي خوادم الشركة. الإجراء: عزل لابتوب الـ HR وخادم المالية معاً فوراً وحماية النسخ الاحتياطية.",
        explanationEn: "Spot-on! The finance server is the impacted target, but the actual Patient Zero is HR-LAPTOP-14 executing the malicious binary and writing encrypted files across SMB. Both hosts must be isolated immediately."
      }
    },

    {
      id: "lesson-7-5",
      moduleId: "module7",
      number: "7.5",
      titleAr: "Playbook 3: التحقيق في اختراق الحسابات وهجمات الـ Active Directory (Kerberoasting و DCSync)",
      titleEn: "Playbook 3: Active Directory Compromise Investigation (Kerberoasting, Pass-the-Hash & DCSync)",
      duration: "70 min",
      theoryAr: `
<h3>خطة الدفاع عن عرش الدومين: كيف تحمي وتطرد الهكر من الدليل النشط؟</h3>
<p class="lead">عندما ينجح المهاجم في الدخول لشبكة الشركة، يكون هدفه الوحيد هو: <strong>الوصول للـ Domain Controller</strong>! إذا وصل هناك، يستطيع تشغيل أمر واحد (DCSync) ليسحب هاشات كلمات مرور كل موظف ورئيس مجلس إدارة في ثانية واحدة! في هذا الـ Playbook، سنتعلم كيف نكتشف ونحقق ونطهر هجمات الـ Active Directory.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: سرقة مفتاح الخزينة الرئيسية ومطبعة النقود</div>
  <p>هجوم <strong>DCSync</strong> مثل لص يدخل البنك مرتدياً زي رئيس مجلس الإدارة الرسمي، ويقول لموظفي الخزينة: <em>"أنا الدومين كنترولر الفرعي، أرسلوا لي نسخة كاملة من كل مفاتيح الخزائن للتحديث!"</em>، فيقوم السيرفر بإعطائه كل شيء باحترام لأنه يملك الصلاحية المطلوبة!</p>
</div>

<h4>تشريح أخطر 4 هجمات على الـ Active Directory في خطة التحقيق:</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>الهجوم</th>
        <th>رقم الحدث الكاشف</th>
        <th>الحقل الحاسم في السجل</th>
        <th>إجراءات التحقيق والاستجابة الفورية</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Kerberoasting</strong></td>
        <td>Event ID 4769</td>
        <td><code>TicketEncryptionType = 0x17 (RC4)</code> و <code>ServiceName = SPN</code></td>
        <td>تحديد الجهاز الطالب، التحقق من عدد التذاكر المطلوبة، وإعادة ضبط كلمة مرور حساب الخدمة بكلمة مرور معقدة (+25 حرفاً).</td>
      </tr>
      <tr>
        <td><strong>Pass-the-Hash</strong></td>
        <td>Event ID 4624</td>
        <td><code>LogonType = 3</code> و <code>AuthenticationPackageName = NTLM</code></td>
        <td>رصد استخدام NTLM بدلاً من Kerberos، عزل الجهاز المصدر، وفحص ذاكرة LSASS عبر الـ EDR.</td>
      </tr>
      <tr>
        <td><strong>DCSync (Mimikatz lsadump::dcsync)</strong></td>
        <td>Event ID 4662 (مع تفعيل Directory Service Access)</td>
        <td>طلب صلاحيات مزامنة الدومين: <code>DS-Replication-Get-Changes-All</code></td>
        <td><strong>حالة طوارئ قصوى P1!</strong> عزل الجهاز الطالب فوراً، لأن المهاجم يحاول سحب كامل ملف <code>NTDS.dit</code> وهاشات جميع موظفي الشركة!</td>
      </tr>
      <tr>
        <td><strong>Golden Ticket Abuse</strong></td>
        <td>Event ID 4624 / 4672</td>
        <td>تذاكر Kerberos بمدد صلاحية خيالية (أكثر من 10 ساعات الافتراضية).</td>
        <td><strong>إعادة تعيين كلمة مرور حساب krbtgt مرتين متتاليتين!</strong> (لإلغاء جميع التذاكر الذهبية المزورة في الدومين بالكامل).</td>
      </tr>
    </tbody>
  </table>
</div>
      `,
      theoryEn: `<h3>Playbook 3: Active Directory Defense, Kerberoasting Triage, Pass-the-Hash & DCSync Remediation</h3>`,
      attackDefenseAr: `
<h3>السر الخطير: لماذا نعيد ضبط كلمة مرور krbtgt مرتين؟</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف يستغل الهكر التذكرة الذهبية؟</h4>
    <ul>
      <li>إذا حصل المهاجم على هاش حساب <code>krbtgt</code>، يستطيع تزوير تذاكر دخول تعيش لسنوات وتمنحه صلاحية Domain Admin وتتجاوز أي تغيير لكلمات مرور المستخدمين!</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 قاعدة الـ SOC الذهبية لتطهير الدومين</h4>
    <ul>
      <li>ويندوز يحتفظ بكلمة مرور <code>krbtgt</code> الحالية والسابقة لتفادي انقطاع الخدمات. لذلك، إذا غيرت كلمة المرور مرة واحدة، تظل التذكرة الذهبية صالحة! يجب على مهندسي الأمان <strong>تغيير كلمة مرور حساب krbtgt مرتين متتاليتين بفاصل زمني كافٍ للتكرار (Replication)</strong> لإبطال مفعول كل التذاكر المزورة فوراً!</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Golden Ticket Persistence vs Dual KRBTGT Password Reset</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 7.5: فحص هجمات DCSync في سجلات الـ Active Directory</h4>
    <p>استخدم محاكي سجلات الأمان للبحث عن طلبات مزامنة الـ Replication المشبوهة.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-7-5">
      <div class="term-line output">Active Directory Threat Hunting Engine</div>
      <div class="term-line output">Type 'hunt-dcsync' or 'audit-krbtgt'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('hunt-dcsync', 'lab-term-7-5')">Detect DCSync Directory Replication Attacks</button>
    <button class="btn-cmd" onclick="runSimCommand('audit-krbtgt', 'lab-term-7-5')">Audit KRBTGT Password History</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Active Directory DCSync hunting and KRBTGT auditing.</p>`,
      ticket: {
        ticketId: "SEC-TICK-705",
        severity: "CRITICAL",
        severityClass: "critical",
        sourceHost: "DC01.corp.local",
        timestamp: "2026-11-06 22:10:45 UTC",
        ruleTriggered: "AD_CRITICAL_POTENTIAL_DCSYNC_REPLICATION_FROM_WORKSTATION",
        rawLog: `Event: Windows Security Log (EventCode: 4662)
Computer: DC01.corp.local
SubjectUserName: svc_scanner
SubjectDomainName: CORP
ObjectServer: DS
ObjectType: {bf967aba-0de6-11d0-a285-00aa003049e2}
AccessMask: 0x100 (Control Access)
Properties: 
  {1131f6aa-9c07-11d1-f79f-00c04fc2dcd2} (DS-Replication-Get-Changes)
  {1131f6ad-9c07-11d1-f79f-00c04fc2dcd2} (DS-Replication-Get-Changes-All)
SourceWorkstation: WKSTN-DEV-04 (10.140.50.18 - Not a Domain Controller!)`,
        questionAr: "تلقيت تنبيهاً أمنياً بالحدث 4662 يوثق قيام محطة عمل عادية للمطورين بطلب صلاحية DS-Replication-Get-Changes-All من الدومين كنترولر. ما هو هذا الهجوم الخطير وما الإجراء الفوري؟",
        questionEn: "Analyze the Event 4662 log requesting DS-Replication-Get-Changes-All from a non-DC workstation. What attack is this?",
        optionsAr: [
          "تحديث مجدول لقاعدة بيانات الدليل النشط بين خوادم الـ DC المعتمدة.",
          "هجوم DCSync كارثي ومؤكد (Mimikatz DCSync Attack): المهاجم على جهاز المطورين ينتحل صفة Domain Controller ويسحب قاعدة بيانات NTDS.dit بما فيها هاشات كلمات مرور جميع مستخدمي الشركة! الإجراء: عزل محطة العمل 10.140.50.18 فوراً، تعطيل حساب svc_scanner، وإعادة تعيين كلمة مرور krbtgt مرتين.",
          "المطور يقوم باختبار كود برمجي عادي.",
          "خطأ في إعدادات بروتوكول DNS."
        ],
        optionsEn: [
          "Legitimate DC replication sync.",
          "Catastrophic DCSync Attack: Adversary on developer workstation dumping complete domain NTDS.dit hashes impersonating a DC. Isolate host immediately, disable account, and execute dual KRBTGT reset.",
          "Developer benign testing.",
          "DNS protocol error."
        ],
        correctIndex: 1,
        explanationAr: "إجراء احترافي استثنائي يا باشمهندس بشار! هذا هو أخطر هجوم يمكن أن يواجهه محلل الـ SOC: طلب صلاحية <code>DS-Replication-Get-Changes-All</code> مخصص حصرياً لخوادم الـ Domain Controllers الرسمية فقط لتكرار البيانات بينها. قيام محطة عمل عادية في شبكة المطورين بطلب هذا الحق هو التوقيع الصريح لأداة Mimikatz عند تنفيذ أمر <code>lsadump::dcsync</code> لسحب هاشات كل مستخدمي المؤسسة. الإجراء: إعلان حالة طوارئ أمنية P1، عزل الجهاز فوراً، وتعطيل الحساب وتطهير الدومين.",
        explanationEn: "Spot on! Requesting DS-Replication-Get-Changes-All from a non-DC endpoint is conclusive proof of an active DCSync credential exfiltration attack requiring immediate emergency isolation."
      }
    },

    {
      id: "lesson-7-6",
      moduleId: "module7",
      number: "7.6",
      titleAr: "دورة حياة الاستجابة للحوادث (NIST & PICERL) وكيف تكتب تقرير حادث أمني احترافي يبهِر الإدارة",
      titleEn: "Incident Response Life Cycle (NIST & PICERL) & Writing Professional Executive Incident Reports",
      duration: "70 min",
      theoryAr: `
<h3>خاتمة العمليات الأمنية: كيف توثق انتصارك في تقرير رسمي يقرأه المدير التنفيذي؟</h3>
<p class="lead">مهما كنت بارعاً في فحص الحزم وتتبع الهكر، إذا انتهى الحادث ولم تقدم <strong>تقرير حادث أمني احترافي (Professional Incident Report)</strong>، فلن يعرف أحد ما أنجزته! كتابة التقارير وصياغة خطط الاستجابة وفق معايير <strong>NIST SP 800-61</strong> وإطار <strong>PICERL</strong> هي المهارة التي تحولك من مجرد فني إلى قائد أمني معتمد.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: تقرير الطب الشرعي والتحقيق القضائي</div>
  <p>المحقق الذي يقبض على القاتل لا يكتفي بالقول: "أمسكت به وانتهى الأمر"! بل يكتب تقريراً مفصلاً يحتوي على: الأدلة الجنائية، توقيت ارتكاب الجريمة، الأداة المستخدمة، والدافع، وتوصيات للقضاة والشرطة لمنع تكرار الجريمة في المستقبل.</p>
</div>

<h4>1. دورة حياة الاستجابة للحوادث وفق إطار PICERL العالمي:</h4>
<ol>
  <li><strong>1. الإعداد والتجهيز (Preparation):</strong> بناء السياسات، تدريب الفريق، ضبط أدوات الـ SIEM/EDR، وأخذ النسخ الاحتياطية قبل وقوع أي حادث.</li>
  <li><strong>2. التحديد والكشف (Identification):</strong> رصد التنبيه في الشاشة، تأكيد أنه True Positive، وتقدير حجم الخطر ونطاق الأجهزة المصابة.</li>
  <li><strong>3. الاحتواء (Containment):</strong>
    <ul>
      <li><em>احتواء قصير المدى (Short-term):</em> عزل الأجهزة المصابة فوراً عن الشبكة (Host Isolation) لمنع انتشار الهجوم.</li>
      <li><em>احتواء طويل المدى (Long-term):</em> إغلاق المنافذ الضعيفة وتعديل قواعد الجدار الناري.</li>
    </ul>
  </li>
  <li><strong>4. الاستئصال والتطهير (Eradication):</strong> حذف البرمجيات الخبيثة، تنظيف مفاتيح الريجستري، وسد الثغرات الأصلية التي دخل منها الهكر.</li>
  <li><strong>5. التعافي والعودة للعمل (Recovery):</strong> استعادة الأجهزة من النسخ الاحتياطية النظيفة، مراقبة الترافيك للتأكد من عدم عودة المهاجم، وإعادة الخدمة للإنتاج تدريجياً.</li>
  <li><strong>6. الدروس المستفادة (Lessons Learned):</strong> اجتماع مراجعة شامل لمعرفة: ما الذي نجح؟ وما الذي فشل؟ وكيف نطور القواعد لتفادي تكرار الحادث؟</li>
</ol>

<h4>2. الهيكل القياسي لتقرير الحادث الأمني الاحترافي (Executive Incident Report):</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>القسم في التقرير</th>
        <th>المحتوى المطلوب</th>
        <th>الجمهور المستهدف</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>الملخص التنفيذي (Executive Summary)</strong></td>
        <td>فقرة واحدة غير تقنية بلغة الأعمال: ما الذي حدث؟ متى؟ ما هو الأثر المالي أو التشغيلي؟ وكيف تمت حماية الشركة؟</td>
        <td>الرئيس التنفيذي (CEO)، مجلس الإدارة، والعملاء.</td>
      </tr>
      <tr>
        <td><strong>التسلسل الزمني للحادث (Timeline of Events)</strong></td>
        <td>جدول زمني بالثانية (UTC) يوثق كل مرحلة من لحظة إيميل التصيد وحتى عزل الجهاز.</td>
        <td>مدير الـ SOC ومدير أمن المعلومات (CISO).</td>
      </tr>
      <tr>
        <td><strong>التفاصيل التقنية ومؤشرات الاختراق (Technical IOCs)</strong></td>
        <td>عناوين الـ IP، النطاقات، الهاشات (SHA256)، مسارات الملفات، وتقنيات MITRE ATT&CK.</td>
        <td>فرق التحقيق الجنائي وهندسة الاكتشاف.</td>
      </tr>
      <tr>
        <td><strong>الأثر والتقييم (Impact Assessment)</strong></td>
        <td>هل سُربت بيانات عملاء؟ هل تعطلت خدمات حيوية؟ ما هي الأجهزة المتأثرة؟</td>
        <td>إدارة المخاطر والامتثال والشؤون القانونية.</td>
      </tr>
      <tr>
        <td><strong>التوصيات وخطوات المعالجة (Remediation & Action Items)</strong></td>
        <td>خطوات واضحة ذات مسؤوليات ومواعيد محددة لمنع تكرار الثغرة (تفعيل MFA، تحديث الخوادم، تدريب الموظفين).</td>
        <td>فرق الـ IT وإدارة البنية التحتية.</td>
      </tr>
    </tbody>
  </table>
</div>
      `,
      theoryEn: `<h3>Incident Response Lifecycle: NIST SP 800-61, PICERL Framework & Professional Executive Reporting</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: أهمية الدروس المستفادة (Lessons Learned)</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 رهان المهاجم على كسل المؤسسات</h4>
    <ul>
      <li>أكثر من 60% من الشركات التي تتعرض لاختراق تتعرض لنفس الاختراق مجدداً خلال 12 شهراً لأنهم نظفوا الفايروس الظاهر ولم يسدوا الثغرة الجذرية (Root Cause)!</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 عقلية التحسين المستمر في الـ SOC</h4>
    <ul>
      <li>اجتماع الدروس المستفادة ليس لتوجيه اللوم، بل هو منجم الذهب لتطوير قواعد كشف جديدة، وتحديث خطط الـ Playbooks، وتدريب الموظفين على أحدث أساليب التصيد.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Persistent Exploitation vs Lessons Learned Root Cause Hardening</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 7.6: صياغة تقرير حادث أمني احترافي لمجلس الإدارة</h4>
    <p>تدرب على تنظيم بيانات الحادث في قالب تقرير تنفيذي رسمي جاهز للتقديم.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-7-6">
      <div class="term-line output">Executive Incident Report Generator Console</div>
      <div class="term-line output">Type 'generate-incident-report' or 'review-picerl-steps'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('generate-incident-report', 'lab-term-7-6')">Generate Standard Executive Report Template</button>
    <button class="btn-cmd" onclick="runSimCommand('review-picerl-steps', 'lab-term-7-6')">Review PICERL Execution Checklist</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Incident Response report generation and PICERL checklist review.</p>`,
      ticket: {
        ticketId: "SEC-TICK-706",
        severity: "CRITICAL",
        severityClass: "critical",
        sourceHost: "EXECUTIVE-SOC-BOARD",
        timestamp: "2026-11-06 23:55:00 UTC",
        ruleTriggered: "INCIDENT_CLOSURE_POST_INCIDENT_REVIEW_REQUIRED",
        rawLog: `INCIDENT_SUMMARY:
IncidentID: INC-2026-9901
Classification: True Positive (Confirmed Data Theft Attempt)
Vector: Spear-Phishing Email with Malicious Macro -> Mimikatz LSASS Dump -> Exfiltration Probe
CurrentStatus: All malware eradicated, affected hosts isolated and reimaged.
PendingRequirement: SOC Lead Eng. Bashar Hafedh must produce final Official Incident Report according to PICERL standard.`,
        questionAr: "بصفتك قائد عمليات الـ SOC (SOC Lead)، أنهيت مرحلة التطهير والاستئصال بنجاح. ما هي المرحلة النهائية الإلزامية في إطار PICERL قبل إغلاق ملف الحادث رسمياً؟",
        questionEn: "As SOC Lead, you have successfully completed eradication and recovery. What is the mandatory final phase of PICERL before closing the case?",
        optionsAr: [
          "إغلاق التذكرة فوراً والذهاب للنوم دون كتابة أي شيء.",
          "مرحلة الدروس المستفادة والتقرير النهائي (Lessons Learned & Executive Reporting): عقد اجتماع مراجعة شامل لمعرفة الثغرة الجذرية، كتابة تقرير الحادث الأمني الرسمي المتضمن للتسلسل الزمني والـ IOCs، وتطبيق توصيات هندسية لمنع تكرار الهجوم.",
          "مسح سجلات الـ SIEM لتوفير مساحة تخزين.",
          "إعادة تثبيت نظام ويندوز على كل أجهزة الشركة."
        ],
        optionsEn: [
          "Close ticket immediately without documentation.",
          "Lessons Learned & Executive Incident Reporting: Conduct post-incident review, document root cause, publish formal timeline with IOCs, and implement hardening recommendations to prevent recurrence.",
          "Wipe SIEM logs.",
          "Reimage all company computers."
        ],
        correctIndex: 1,
        explanationAr: "إجابة قائد أمني حقيقي يا باشمهندس بشار! المرحلة السادسة في إطار PICERL هي 'Lessons Learned' وكتابة التقرير الرسمي. بدون هذه الخطوة، ستتكرر نفس الثغرة مجدداً في المستقبل. توثيق التسلسل الزمني للأحداث، ومشاركة الـ IOCs مع المجتمع الأمني، وكتابة ملخص تنفيذي للمدراء هي البصمة الاحترافية التي تؤكد تميزك كخبير معتمد في عمليات الـ SOC وحوادث الاختراق.",
        explanationEn: "Spot on! The final phase of PICERL is Lessons Learned, requiring formal post-incident review, executive reporting, and strategic mitigation updates to prevent identical compromises."
      }
    }
  ]
};
