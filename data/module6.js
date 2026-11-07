// Stage 6: SIEM Engineering & Threat Intelligence (قلب الـ SOC وإتقان SIEM واستخبارات التهديدات)
// Curated with exhaustive depth for Eng. Bashar Hafedh - BasharSec Academy

const module6Data = {
  id: "module6",
  stageNumber: 6,
  titleAr: "المرحلة 6: قلب الـ SOC - إتقان أنظمة SIEM واستخبارات التهديدات (SIEM & OSINT)",
  titleEn: "Stage 6: Heart of the SOC: SIEM Engineering, Splunk SPL & OSINT Threat Intel",
  summaryAr: "عقل مركز العمليات الأمنية: كيف تجمع أنظمة SIEM ملايين السجلات وتحللها وتربطها في قواعد Correlation، إتقان استعلامات Splunk SPL و Wazuh، والتحقيق بأدوات استخبارات التهديدات المفتوحة.",
  summaryEn: "The nerve center of SOC operations: SIEM data ingestion, parsing, correlation engines, Splunk SPL queries, detection engineering, and OSINT Threat Intelligence hunting.",
  badgeAr: "مهندس SIEM واستخبارات التهديدات",
  badgeEn: "SIEM & Threat Intel Architect",
  icon: "hub",
  lessons: [
    {
      id: "lesson-6-1",
      moduleId: "module6",
      number: "6.1",
      titleAr: "تشريح نظام الـ SIEM من الداخل: تجميع البيانات (Forwarders)، التفكيك والتوحيد (Parsing & Normalization)، ومحرك الربط",
      titleEn: "Inside the SIEM Architecture: Ingestion, Forwarders, Parsing, Normalization & Correlation",
      duration: "65 min",
      theoryAr: `
<h3>برج المراقبة المركزي: كيف يرى نظام الـ SIEM كل ما يجري في آلاف الأجهزة في شاشة واحدة؟</h3>
<p class="lead">إذا كانت شركتك تمتلك 5,000 جهاز كمبيوتر، 200 سيرفر، 50 راوتر وسويتش، و 10 جدران نارية، فمن المستحيل بشرياً أن يفتح المحلل كل جهاز بمفرده لفحص السجلات! هنا يأتي دور نظام <strong>SIEM (Security Information & Event Management)</strong> الذي يجمع مليارات السجلات يومياً في مستودع بيانات موحد فائق السرعة.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: غرفة مراقبة الشرطة المركزية ومترجم اللغات</div>
  <p>تخيل محطة شرطة تستقبل بلاغات من مخبرين يتحدثون لغات مختلفة: الأول يتحدث صيني (جدار حماية Palo Alto)، الثاني يتحدث فرنسي (خادم لينكس Syslog)، والثالث يتحدث ألماني (سجلات ويندوز XML). إذا لم يكن هناك مترجم يوحد البلاغات بلغة شرطية واحدة موحدة، فستحدث كارثة!</p>
  <p>نظام الـ SIEM هو ذلك المترجم والمنسق المركزي: يستقبل السجلات من كل مكان، يفككها (Parsing)، يوحد أسماء الحقول بلغة قياسية واحدة (Normalization)، ثم يقوم بذكاء بربط الأحداث المتفرقة ليكتشف الهجمات المعقدة (Correlation Engine)!</p>
</div>

<h4>1. المراحل الأربع لرحلة البيانات داخل نظام الـ SIEM:</h4>

<pre class="ascii-flow">
[ أجهزة الموظفين / السيرفرات / الجدران النارية ]
                       │
                       ▼ 1. تجميع البيانات ونقلها (Data Collection & Forwarding)
         [ Agents / Forwarders / Syslog UDP 514 / APIs ]
                       │
                       ▼ 2. التفكيك والاستخراج (Parsing)
      (تقطيع النص الخام واستخراج: IP, User, Status, Action)
                       │
                       ▼ 3. التوحيد والتطبيع (Normalization)
(توحيد المسميات: src_ip, dst_ip, user, action عبر معايير مثل CIM / ECS)
                       │
                       ▼ 4. محرك الربط والتحليل (Correlation & Detection Engine)
      (إذا حدث A ثم حدث B خلال 5 دقائق -> أطلق تنبيه أمني Alert!)
                       │
                       ▼
          [ شاشة محلل الـ SOC اليومية ]
</pre>

<h4>2. الفرق بين السجل الخام والمحلل (Raw Log vs Parsed Normalized Log):</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>الحقل القياسي الموحد</th>
        <th>في سجل جدار حماية Cisco</th>
        <th>في سجل ويندوز 4624</th>
        <th>في سجل خادم Nginx</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>src_ip (عنوان المصدر)</strong></td>
        <td><code>src=198.51.100.20</code></td>
        <td><code>IpAddress=198.51.100.20</code></td>
        <td><code>$remote_addr</code> (في بداية السطر)</td>
      </tr>
      <tr>
        <td><strong>user (اسم المستخدم)</strong></td>
        <td><code>user=admin</code></td>
        <td><code>TargetUserName=admin</code></td>
        <td><code>$remote_user</code></td>
      </tr>
      <tr>
        <td><strong>action (الإجراء المتخذ)</strong></td>
        <td><code>Built inbound TCP connection</code></td>
        <td><code>Success Logon (Audit Success)</code></td>
        <td><code>HTTP Status 200</code></td>
      </tr>
    </tbody>
  </table>
</div>
<p><strong>فائدة التطبيع (Normalization):</strong> عندما يكتب محلل الـ SOC استعلاماً واحداً: <code>src_ip="185.220.101.5"</code>، فإن الـ SIEM يبحث في نفس اللحظة في الجدار الناري، وسجلات ويندوز، وسجلات الويب، وسجلات الحوسبة السحابية دفعة واحدة دون الحاجة لتغيير اسم الحقل لكل جهاز!</p>

<h4>3. كيف يعمل محرك الربط (Correlation Engine)؟</h4>
<p>السجل الواحد بمفرده قد يبدو بريئاً جداً، ولكن عندما يربط الـ SIEM عدة سجلات معاً، تظهر الجريمة الكاملة! مثال على قاعدة ربط (Correlation Rule):</p>
<ol>
  <li>الحدث الأول: 20 محاولة دخول فاشلة في دقيقة واحدة (Event 4625).</li>
  <li>الحدث الثاني: محاولة دخول ناجحة واحدة لنفس الحساب (Event 4624).</li>
  <li>الحدث الثالث: إطلاق عملية PowerShell مشفرة من نفس الجهاز بعد 30 ثانية.</li>
  <li><strong>قرار محرك الربط:</strong> إطلاق تنبيه حرج فوراً: <em>"Brute Force Success followed by Immediate Command Execution!"</em></li>
</ol>
      `,
      theoryEn: `<h3>SIEM Architecture: Data Ingestion, Universal Forwarders, Parsing, Normalization & Correlation Engines</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: التهرب من رادارات الـ SIEM وتعديل القواعد</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف يحاول المهاجم تفادي الـ SIEM؟</h4>
    <ul>
      <li><strong>الهجمات البطيئة والمنخفضة (Low and Slow Attacks):</strong> إذا كانت قاعدة الـ SIEM مبرمجة للتحذير عند 10 محاولات فاشلة في 5 دقائق، يقوم المهاجم ببرمجة أداته لتجربة محاولة واحدة كل 6 دقائق! النتيجة: لا تطلق القاعدة أي تنبيه.</li>
      <li><strong>إغراق الـ SIEM (Log Flooding):</strong> توليد ملايين السجلات التافهة لرفع تكلفة التخزين وتأخير محركات الفهرسة والبحث.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 رد مهندس الاكتشاف في الـ SOC</h4>
    <ul>
      <li><strong>توسيع النوافذ الزمنية (Sliding Time Windows):</strong> ضبط قواعد الربط للبحث عبر نوافذ زمنية تمتد لساعات أو أيام لمراقبة الهجمات البطيئة.</li>
      <li><strong>تحليل السلوك المتقدم (UEBA - User & Entity Behavior Analytics):</strong> استخدام نماذج التعلم الآلي لتحديد الخط القاعدي (Baseline) الطبيعي لكل مستخدم ورصد أي شذوذ حتى لو لم تكن له قاعدة ثابتة.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Low & Slow Evasion vs Sliding Windows & UEBA Telemetry</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 6.1: محاكاة محرك تفكيك وتطبيع السجلات (Parsing & Normalization)</h4>
    <p>استخدم سطر الأوامر لتفكيك سجلات مختلفة واستخراج الحقول الموحدة src_ip و user.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-6-1">
      <div class="term-line output">SIEM Normalization Pipeline Engine</div>
      <div class="term-line output">Type 'parse-raw-log' or 'run-correlation-test'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('parse-raw-log', 'lab-term-6-1')">Parse & Normalize Raw Multi-Vendor Log</button>
    <button class="btn-cmd" onclick="runSimCommand('run-correlation-test', 'lab-term-6-1')">Execute Multi-Event Correlation Rule</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive SIEM parsing pipeline and multi-event correlation testing.</p>`,
      ticket: {
        ticketId: "SEC-TICK-601",
        severity: "CRITICAL",
        severityClass: "critical",
        sourceHost: "CORRELATION-ENGINE-SPLUNK",
        timestamp: "2026-11-06 20:30:15 UTC",
        ruleTriggered: "CORRELATION_RULE_BRUTE_FORCE_SUCCESS_THEN_LSASS_ACCESS",
        rawLog: `CORRELATION_ALERT: Multi-Stage Attack Sequence Detected
AlertId: CORR-ALERT-2026-8802
Window: 120 seconds
MATCHED_EVENTS:
  Event 1 (20:29:10): 45x Windows 4625 (Logon Failures) for user 'sql_admin' from 10.140.20.99
  Event 2 (20:29:45): 1x Windows 4624 (Logon Success - LogonType 3) for 'sql_admin' from 10.140.20.99
  Event 3 (20:30:12): 1x Sysmon 10 (Target: lsass.exe, GrantedAccess: 0x1FFFFF, Source: mimikatz.exe) on target host SQL-SRV-01`,
        questionAr: "تلقيت تنبيهاً ذكياً من محرك الربط يجمع بين 3 أحداث في دقيقتين: فشل دخول متكرر، ثم دخول ناجح، ثم تشغيل Mimikatz لسرقة LSASS. ما هو التقييم الشامل لهذا التنبيه؟",
        questionEn: "Analyze the correlated alert above combining brute force, successful logon, and Mimikatz. What is your overall incident assessment?",
        optionsAr: [
          "تنبيه كاذب لأن الأحداث منفصلة في برامج مختلفة.",
          "حادث أمني مؤكد وبالغ الخطورة (True Positive - Full Account Takeover & Credential Theft): المهاجم نجح في كسر كلمة مرور sql_admin، وسجل الدخول للهدف، وقام فوراً بتشغيل Mimikatz لسرقة باقي هاشات السيرفر! الإجراء: عزل الخادمين فوراً وتعطيل الحساب وبدء احتواء الطوارئ.",
          "مدير قواعد البيانات يقوم بمهام صيانة معتمدة.",
          "خطأ في إعدادات نظام الـ SIEM."
        ],
        optionsEn: [
          "False positive from unrelated applications.",
          "Critical Incident (True Positive): Brute force breached sql_admin, logged in via SMB, and dumped credentials with Mimikatz. Isolate both hosts and disable account immediately.",
          "DBA maintenance task.",
          "SIEM correlation engine bug."
        ],
        correctIndex: 1,
        explanationAr: "إجراء مثالي ومحترف يا باشمهندس بشار! هذا هو بالضبط السبب الذي يجعل محرك الربط في الـ SIEM أعظم اختراع أمني: كل حدث بمفرده قد يمر، ولكن تتابعهم (كسر كلمة مرور + دخول ناجح + تشغيل أداة سرقة الهاشات خلال 120 ثانية) يثبت بما لا يدع مجالاً للشك أن الخادم قد سقط بالكامل في يد المهاجم! الإجراء الفوري: عزل السيرفرين (10.140.20.99 و SQL-SRV-01) وتعطيل الحساب وتغيير كلمات مرور الدومين.",
        explanationEn: "Spot-on! Multi-stage correlation linking brute force -> successful network authentication -> Sysmon 10 credential dumping within 120 seconds proves successful intrusion requiring immediate containment."
      }
    },

    {
      id: "lesson-6-2",
      moduleId: "module6",
      number: "6.2",
      titleAr: "إتقان Splunk و Wazuh و Elastic Stack من الصفر: كتابة استعلامات SPL و KQL للبحث عن الهجمات",
      titleEn: "Mastering Splunk SPL, Wazuh & Elastic KQL: Query Syntax & Threat Hunting",
      duration: "70 min",
      theoryAr: `
<h3>لغة البحث عن الإبرة في كومة القش: كيف تكتب استعلامات الـ SIEM ببراعة؟</h3>
<p class="lead">امتلاك مليارات السجلات في السيرفر دون القدرة على استخراج ما تريد مثل امتلاك مكتبة عالمية مغلقة في الظلام! لغة <strong>Splunk SPL (Search Processing Language)</strong> ولغة <strong>KQL (Kibana / Kusto Query Language)</strong> هي اللغة السحرية التي تحول ملايين السجلات إلى رسم بياني أو جدول تحذيري يحدد مكان المهاجم في 3 ثوانٍ.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: البحث في دليل الشرطة الدولي</div>
  <p>بدلاً من قراءة كتاب به مليون صفحة سطراً بسطر، أنت تعطي المحرك أمراً دقيقاً: <em>"أعطني جميع الأشخاص الذين دخلوا المبنى بعد منتصف الليل، واستبعد الموظفين المعروفين، ورتبهم من الأكثر تكراراً إلى الأقل، واعرض لي فقط أسماءهم وعناوينهم!"</em></p>
  <p>هذا بالضبط ما تفعله لغة Splunk SPL عبر مفهوم <strong>الأنابيب (Pipes <code>|</code>)</strong>: تأخذ نتيجة البحث وتمررها لأمر التصفية، ثم لأمر التجميع، ثم لأمر الرسم البياني!</p>
</div>

<h4>1. القواعد الأساسية للغة Splunk SPL ومفهوم الـ Pipe (<code>|</code>):</h4>
<p>أي استعلام في Splunk يبدأ بالبحث عن الفهرس ونوع المصدر، ثم نمرر النتائج عبر علامة <code>|</code> لأوامر المعالجة:</p>
<pre class="ascii-flow">
index=windows sourcetype=WinEventLog:Security EventCode=4625
  │
  ├── | stats count by TargetUserName, IpAddress  (احسب عدد المحاولات لكل مستخدم وكل IP)
  │
  ├── | where count > 10                          (اعرض فقط من تجاوز 10 محاولات فاشلة)
  │
  └── | sort -count                               (رتب النتائج تنازلياً من الأكثر خطورة)
</pre>

<h4>2. أهم 10 استعلامات Splunk SPL لا يستغني عنها أي محلل SOC:</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>الهدف الأمني للبحث</th>
        <th>استعلام Splunk SPL الجاهز</th>
        <th>الشرح والتحليل</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>كشف هجمات Brute Force</strong></td>
        <td><code>index=windows EventCode=4625 | stats count by TargetUserName, IpAddress | where count > 15 | sort -count</code></td>
        <td>استخراج أكثر الحسابات وعناوين الـ IP التي فشلت في تسجيل الدخول أكثر من 15 مرة.</td>
      </tr>
      <tr>
        <td><strong>صيد تشغيل PowerShell المشفر</strong></td>
        <td><code>index=sysmon EventCode=1 (CommandLine="*-enc*" OR CommandLine="*-EncodedCommand*") | table _time, host, User, CommandLine, ParentImage</code></td>
        <td>عرض كل جهاز شغل PowerShell بأمر مشفر مع ذكر اسم المستخدم والبرنامج الأب.</td>
      </tr>
      <tr>
        <td><strong>كشف سرقة كلمات المرور (Mimikatz)</strong></td>
        <td><code>index=sysmon EventCode=10 TargetImage="*lsass.exe" GrantedAccess="0x1FFFFF" | table _time, host, SourceImage, GrantedAccess</code></td>
        <td>رصد أي عملية في الشركة طلبت وصولاً كاملاً لذاكرة lsass.exe لسرقة الهاشات.</td>
      </tr>
      <tr>
        <td><strong>كشف الحركة الجانبية عبر PsExec</strong></td>
        <td><code>index=windows EventCode=7045 ServiceName="*PSEXEC*" OR ImagePath="*\\\\ADMIN$*"</code></td>
        <td>رصد قيام مهاجم بالتنقل بين الأجهزة عن بعد باستخدام أدوات الإدارة عن بعد.</td>
      </tr>
      <tr>
        <td><strong>رصد مسح السجلات الأمنية</strong></td>
        <td><code>index=windows (EventCode=1102 OR EventCode=104) | table _time, ComputerName, SubjectUserName</code></td>
        <td>إنذار فوري بمحاولات التهرب ومسح السجلات في ويندوز.</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>3. المقارنة مع نظام Wazuh مفتوح المصدر (Open Source SIEM):</h4>
<p>نظام <strong>Wazuh</strong> هو البديل المجاني الأقوى لـ Splunk في الشركات الصغيرة والمتوسطة. يعتمد على وكلاء (Wazuh Agents) يثبتون على الأجهزة ويقومون بـ: <em>Log Collection, File Integrity Monitoring (FIM), Vulnerability Detection, و Rootkit Detection</em>، وتُكتب قواعده بلغة XML وتُعرض في واجهة Kibana / OpenSearch.</p>
      `,
      theoryEn: `<h3>Mastering Splunk SPL, Wazuh Open Source SIEM & Elastic KQL Querying for Threat Hunting</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: الصيد الاستباقي للتهديدات (Threat Hunting)</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف يختبئ المهاجم المحترف؟</h4>
    <ul>
      <li>استخدام حسابات شرعية مسروقة وتنفيذ أوامر تبدو عادية جداً (Living Off The Land).</li>
      <li>توزيع الأنشطة على أيام وأسابيع متباعدة لتجنب التنبيهات الفورية.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 منهجية صيد التهديدات الاستباقية (Proactive Threat Hunting)</h4>
    <ul>
      <li>محلل الـ SOC لا ينتظر إطلاق التنبيهات! بل يفترض مسبقاً أن هناك اختراقاً (Assume Breach)، ويقوم بكتابة استعلامات SPL متقدمة للبحث عن الشذوذ: <em>"اعرض لي العمليات التي لم تعمل في شركتنا إلا مرة واحدة فقط في آخر 30 يوماً (Rare Values Hunting)!"</em></li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Living Off the Land vs Splunk Rare Values Hunting</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 6.2: كتابة استعلامات Splunk SPL في المحاكي</h4>
    <p>تدرب على صياغة استعلامات SPL لحساب التكرارات وفلترة التهديدات.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-6-2">
      <div class="term-line output">Splunk SPL Query Shell Simulator v3.0</div>
      <div class="term-line output">Type 'splunk-search &lt;query&gt;' to execute SPL operations.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('splunk-search index=windows EventCode=4625 | stats count by TargetUserName', 'lab-term-6-2')">Run Brute Force SPL Query</button>
    <button class="btn-cmd" onclick="runSimCommand('splunk-search index=sysmon EventCode=1 CommandLine=*powershell*', 'lab-term-6-2')">Hunt PowerShell LOLBins SPL</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Splunk SPL search queries and frequency analysis.</p>`,
      ticket: {
        ticketId: "SEC-TICK-602",
        severity: "HIGH",
        severityClass: "high",
        sourceHost: "SPLUNK-INDEXER-CLUSTER",
        timestamp: "2026-11-06 21:55:00 UTC",
        ruleTriggered: "SPLUNK_SCHEDULED_SEARCH_ANOMALOUS_OUTBOUND_DATA_SPIKE",
        rawLog: `SEARCH_NAME: Daily Outbound Data Exfiltration Heuristics
SPL_QUERY: index=firewall action=allowed dest_zone=untrust | stats sum(bytes_out) as total_bytes by src_ip, dest_ip | eval MB=round(total_bytes/1024/1024,2) | where MB > 5000 | sort -MB
QUERY_RESULTS:
  src_ip: 10.140.40.18 (WORKSTATION-RESEARCH-03)
  dest_ip: 185.220.101.5 (MegaUpload / Anonymous Cloud Storage)
  total_bytes: 18,485,291,004 bytes (17.6 Gigabytes)
  TimeWindow: 02:00 AM - 04:30 AM (Non-business hours)`,
        questionAr: "أمامك نتيجة استعلام SPL مجدول رصد قيام محطة أبحاث داخلية بإرسال 17.6 جيجابايت خارج الشركة في الساعة 2 صباحاً باتجاه سيرفر سحابي مجهول. ما هو التحليل والتصرف العاجل؟",
        questionEn: "Analyze the Splunk search result showing 17.6 GB exfiltrated off-hours to an anonymous server. What is your diagnosis and immediate action?",
        optionsAr: [
          "تحديث تلقائي لألعاب الفيديو على جهاز الموظف.",
          "حادث تسريب بيانات أمني حرج ومؤكد (Confirmed Data Exfiltration via Cloud Storage): تم تهريب 17.6 جيجابايت من الملكية الفكرية وأبحاث الشركة خارج المحيط في وقت متأخر من الليل! الإجراء: عزل الجهاز فوراً، حظر عنوان الـ IP الخارجي، واستدعاء فريق الاستجابة للحوادث للتحقيق في الملفات المسربة.",
          "نسخ احتياطي روتيني لخوادم الشركة.",
          "خطأ في حسابات البايتات في لغة الـ SPL."
        ],
        optionsEn: [
          "Routine gaming update.",
          "Confirmed Data Exfiltration: 17.6 GB intellectual property stolen off-hours to external anonymous IP. Isolate workstation, block IP, and initiate incident response.",
          "Routine enterprise backup.",
          "Splunk query syntax error."
        ],
        correctIndex: 1,
        explanationAr: "إجراء احترافي وحاسم يا باشمهندس بشار! هذا الاستعلام يمثل قوة لغة Splunk SPL في صيد تسريب البيانات (Data Exfiltration): تحويل البايتات إلى ميجابايت ورصد نقل 17.6 جيجابايت كاملة في ساعات الفجر الأولى (Non-business hours) من جهاز محطة أبحاث إلى سيرفر مجهول هو الدليل القاطع على خيانة داخلية أو برمجية تجسس تسرق أسرار الشركة. الإجراء: عزل الجهاز فوراً وحظر الـ IP وفحص سجلات الملفات المقروءة على هذا الجهاز في ذلك التوقيت.",
        explanationEn: "Spot on! Off-hours exfiltration of 17.6 GB to an untrusted external server matches textbook intellectual property theft, mandating instant host isolation and investigation."
      }
    },

    {
      id: "lesson-6-3",
      moduleId: "module6",
      number: "6.3",
      titleAr: "هندسة الاكتشاف (Detection Engineering Basics): بناء قواعد التنبيه الذكية وتقليل الإنذارات الكاذبة",
      titleEn: "Detection Engineering Basics: Building Correlation Rules & Tuning False Positives",
      duration: "65 min",
      theoryAr: `
<h3>صانعو الرادارات: كيف تصمم قواعد كشف ذكية لا تنام ولا تزعج المحللين بالإنذارات الوهمية؟</h3>
<p class="lead">أكبر كابوس يواجه محلل الـ SOC هو ما يسمى <strong>إرهاق التنبيهات (Alert Fatigue)</strong>! إذا كان نظام الـ SIEM يطلق 10,000 تنبيه يومياً 99% منها كاذب وغير ضار، فسيصاب المحللون بالملل والإرهاق وسيتجاهلون التنبيهات حتى يمر الاختراق الحقيقي دون أن يلاحظه أحد! هنا تكمن أهمية <strong>هندسة الاكتشاف (Detection Engineering)</strong>.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: جهاز إنذار الحريق الحساس للغبار</div>
  <p>إذا قمت بتركيب جهاز إنذار حريق يطلق صفارة مدوية كلما مرت ذرة غبار أو دخان سجائر خفيف، فبعد 3 أيام سيقوم سكان البناية بفصل بطارية الجهاز وإسكاته! وعندما يشب حريق حقيقي، ستحترق البناية بالكامل لأن جهاز الإنذار كان مطفأً!</p>
  <p>مهندس الاكتشاف الذكي يضبط الحساسات لتتجاهل الطهي الطبيعي والغبار، وتطلق الإنذار فوراً فقط عندما ترتفع درجة الحرارة وتتكاثف ألسنة اللهب!</p>
</div>

<h4>1. المكونات الأربعة لقاعدة الاكتشاف الناجحة (The Anatomy of a Detection Rule):</h4>
<ol>
  <li><strong>المنطق السلوكي (Detection Logic):</strong> الاستعلام البرمجي الذي يبحث عن نمط الهجوم (مثال: استخدام cmd لاستدعاء powershell مشفر).</li>
  <li><strong>شروط التصفية والاستبعاد (Tuning & Exclusions):</strong> استبعاد البرامج والأجهزة الشرعية المعتمدة في الشركة (مثل استبعاد سيرفر النسخ الاحتياطي الرسمي).</li>
  <li><strong>مستوى الخطورة المعياري (Severity):</strong> تحديد هل التنبيه حرج (Critical) يتطلب إيقاظ المحلل، أم منخفض (Low) يوضع في تقرير أسبوعي.</li>
  <li><strong>ربط إطار MITRE ATT&CK:</strong> تزويد التنبيه برقم التكتيك والتقنية (مثال: T1059.001) لسرعة اتخاذ القرار.</li>
</ol>

<h4>2. الفرق بين المصطلحات الأربعة في تقييم التنبيهات (The Confusion Matrix):</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>المصطلح</th>
        <th>الرمز</th>
        <th>المعنى الحقيقي في الـ SOC</th>
        <th>المثال الواقعي</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>True Positive</strong></td>
        <td>TP</td>
        <td><strong>هجوم حقيقي والتنبيه أطلق بنجاح!</strong> (الحالة المثالية للكشف).</td>
        <td>المهاجم شغل Mimikatz وأطلق الـ EDR تنبيهاً دقيقاً.</td>
      </tr>
      <tr>
        <td><strong>False Positive</strong></td>
        <td>FP</td>
        <td><strong>نشاط مشروع ولكن التنبيه أطلق بالخطأ!</strong> (إنذار كاذب مزعج).</td>
        <td>مهندس الشبكة يستخدم أداة فحص معتمدة فأطلقت قاعدة IDS تنبيهاً كأنه هجوم.</td>
      </tr>
      <tr>
        <td><strong>True Negative</strong></td>
        <td>TN</td>
        <td>نشاط مشروع ولم يطلق التنبيه أي شيء (الوضع الطبيعي السليم).</td>
        <td>موظف يتصفح موقع إخباري دون أي إزعاج.</td>
      </tr>
      <tr>
        <td><strong>False Negative</strong></td>
        <td>FN</td>
        <td><strong>الكارثة الكبرى!</strong> حدث هجوم حقيقي ولكن الـ SIEM لم يكتشفه ونام في العسل!</td>
        <td>المهاجم تجاوز الحماية بالكامل ولم تطلق أي قاعدة إنذاراً.</td>
      </tr>
    </tbody>
  </table>
</div>
      `,
      theoryEn: `<h3>Detection Engineering: Correlation Rule Design, Alert Fatigue & False Positive Tuning</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: هندسة قواعد Sigma المعيارية</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف يختبر المهاجمون قواعد الـ SOC؟</h4>
    <ul>
      <li>استخدام أطر محاكاة الهجمات مثل <em>Atomic Red Team</em> لتشغيل هجمات تجريبية لمعرفة أي القواعد مشتعلة وأيها نائمة داخل دفاعات الشركة.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 استخدام معيار Sigma العالمي</h4>
    <ul>
      <li>مهندسو الـ SOC يكتبون قواعد الكشف بصيغة <strong>Sigma Rules</strong> (معيار مفتوح وموحد بلغة YAML). الميزة العظيمة: تكتب قاعدة Sigma مرة واحدة فقط، ثم تحولها بضغطة زر إلى استعلام Splunk SPL، أو Wazuh XML، أو Elastic KQL، أو QRadar AQL دون إعادة الكتابة من الصفر!</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Adversary Emulation vs Universal Sigma Rule Engineering</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 6.3: قراءة وتحويل قواعد Sigma إلى استعلامات SIEM</h4>
    <p>تدرب على استعراض قاعدة Sigma ومعاينة الاستعلام المكافئ لها في Splunk و Elastic.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-6-3">
      <div class="term-line output">Detection Engineering & Sigma Pipeline Console</div>
      <div class="term-line output">Type 'cat-sigma-rule' or 'sigma-to-splunk'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('cat-sigma-rule', 'lab-term-6-3')">View Sigma Rule (YAML Specification)</button>
    <button class="btn-cmd" onclick="runSimCommand('sigma-to-splunk', 'lab-term-6-3')">Translate Sigma to Splunk SPL</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Sigma rule conversion and detection logic analysis.</p>`,
      ticket: {
        ticketId: "SEC-TICK-603",
        severity: "LOW",
        severityClass: "low",
        sourceHost: "SOC-SIEM-ALERT-QUEUE",
        timestamp: "2026-11-06 22:45:00 UTC",
        ruleTriggered: "PORT_SCAN_DETECTED_FROM_INTERNAL_HOST",
        rawLog: `ALERT_NAME: Network Port Sweep Detected
SRC_IP: 10.140.1.50 (Zabbix-Network-Monitoring-Server)
DST_SUBNET: 10.140.0.0/16 (Corporate Network Subnets)
DST_PORTS_PROBED: 161 (SNMP), 10050 (Zabbix Agent), 443 (HTTPS)
PACKETS_SENT: 4,800 packets across 60 seconds
ACTION: Alert Fired (Severity: Medium)
ASSET_MANAGEMENT_CMDB: Asset 10.140.1.50 is registered as Official Enterprise Monitoring Server`,
        questionAr: "تلقيت تنبيهاً أمنياً يفيد بوجود فحص منافذ واسع النطاق صادر من خادم المراقبة الرسمي للشركة Zabbix. ما هو الحكم الدقيق (Triage Verdict) وكيف تعالج هذه القاعدة هندسياً؟",
        questionEn: "Analyze the port sweep alert from the corporate Zabbix monitoring server. What is your triage verdict and engineering recommendation?",
        optionsAr: [
          "هجوم حقيقي مؤكد (True Positive) ويجب عزل سيرفر المراقبة فوراً وإيقافه عن العمل.",
          "إنذار خاطئ مشروع (False Positive): السيرفر 10.140.1.50 هو جهاز مراقبة الشبكة الرسمي للشركة ويقوم بفحصه الدوري المعتاد عبر بروتوكولات المراقبة. التوصية الهندسية: عمل Tuning للقاعدة واستثناء هذا الـ IP (Whitelisting) لمنع إرهاق المحللين مستقبلاً.",
          "المهاجم نجح في اختراق كابل الشبكة.",
          "خطأ في نظام التشغيل لينكس."
        ],
        optionsEn: [
          "Critical True Positive: Isolate Zabbix immediately.",
          "False Positive: Registered official network monitoring server conducting scheduled polling. Engineering recommendation: Whitelist IP 10.140.1.50 in the correlation rule to eliminate noise.",
          "Cable breach.",
          "Linux OS kernel fault."
        ],
        correctIndex: 1,
        explanationAr: "إجراء هندسي ناضج ومثالي يا باشمهندس بشار! هذا هو جوهر عمل محلل الـ SOC وهندسة الاكتشاف: السيرفر مسجل رسمياً في CMDB كجهاز مراقبة رسمي، والمنافذ المفحوصة هي 161 (SNMP) و 10050 (Zabbix). الحكم هو False Positive بنسبة 100%. ولكن المحلل المحترف لا يكتفي بإغلاق التذكرة، بل يقوم بـ Tuning لقاعدة الكشف وإضافة استثناء (NOT src_ip=10.140.1.50) لكي لا يطلق النظام نفس التنبيه المزعج كل ساعة!",
        explanationEn: "Spot on! An alert triggered by the official monitoring server conducting scheduled polling is a definitive False Positive. Proper detection engineering requires tuning the correlation rule by whitelisting the asset."
      }
    },

    {
      id: "lesson-6-4",
      moduleId: "module6",
      number: "6.4",
      titleAr: "استخبارات التهديدات المفتوحة (OSINT & Threat Intelligence): هرم الألم و VirusTotal و OPSEC",
      titleEn: "OSINT Threat Intelligence: Pyramid of Pain, IOCs vs IOAs & Operational Security (OPSEC)",
      duration: "70 min",
      theoryAr: `
<h3>علم المخابرات الرقمية: كيف تجمع المعلومات عن العدو دون أن يعلم أنك تراقبه؟</h3>
<p class="lead">عندما تجد عنوان IP أو هاش ملف مشبوه في السجلات، لا تجلس وتخمن! بل تستعين بقواعد بيانات <strong>استخبارات التهديدات (Threat Intelligence)</strong> العالمية التي ترصد تحركات قراصنة العالم ومجموعات الـ APT أولاً بأول. ولكن احذر: خطأ واحد في الـ OPSEC قد يجعل المهاجم يعلم أنك اكتشفته فيهرب أو يدمر الأدلة!</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: مخابرات مكافحة الإرهاب وهرم الألم</div>
  <p>إذا ألقت الشرطة القبض على لص ومعه رقم هاتف مزيف، فالمجرم يستطيع تغيير رقم هاتفه في دقيقة واحدة دون أي عناء! ولكن إذا اكتشفت الشرطة "طريقة تفكيره، وشبكته السرية، ومصانع أسلحته"، فسيكون من المستحيل عليه تغييرها وسيشعر بألم حقيقي!</p>
  <p>هذا المبدأ الهندسي صاغه الخبير ديفيد بيانكو في أشهر هرم في تاريخ الأمن السيبراني: <strong>هرم الألم (Pyramid of Pain)</strong>!</p>
</div>

<h4>1. هرم الألم (The Pyramid of Pain) - كيف تؤلم المهاجم؟</h4>

<pre class="ascii-flow">
                       ▲
                      / \   [ 1. TTPs (التكتيكات والأساليب والتقنيات) ] -> أقصى ألم للمهاجم (Tough!)
                     /---\
                    /     \   [ 2. Tools (أدوات الاختراق والبرمجيات) ] -> ألم شديد (Challenging)
                   /-------\
                  /         \   [ 3. Network / Host Artifacts ] -> ألم متوسط (Annoying)
                 /-----------\
                /             \   [ 4. Domain Names (أسماء النطاقات) ] -> ألم بسيط (Simple)
               /---------------\
              /                 \   [ 5. IP Addresses (عناوين الـ IP) ] -> سهل تغييره بدقيقة (Easy)
             /-------------------\
            /                     \   [ 6. Hash Values (بصمات الهاش) ] -> تافه ومجاني تغييره (Trivial!)
           └───────────────────────┘
</pre>

<h4>شرح طبقات هرم الألم لمحلل الـ SOC:</h4>
<ul>
  <li><strong>1. قيم الهاش (Hash Values - Trivial):</strong> أسهل شيء للمهاجم؛ مجرد تغيير بايت واحد أو حرف في الملف الخبيث يولد هاشاً مختلفاً كلياً! لذلك حظر الهاشات مفيد لكنه لا يوقف المهاجم المحترف.</li>
  <li><strong>2. عناوين الـ IP (Easy):</strong> يستطيع المهاجم استئجار خادم جديد بـ 5 دولارات أو استخدام شبكات Tor أو VPN لتغيير عنوانه فوراً.</li>
  <li><strong>3. أسماء النطاقات (Domain Names - Simple):</strong> شراء نطاقات جديدة رخيص، ولكن المدافعين يستطيعون حظر النطاقات حديثة التسجيل (Newly Registered Domains).</li>
  <li><strong>4. الأدوات والأساليب (Tools & TTPs - Tough & Painful!):</strong> عندما تكتشف كيف يفكر المهاجم وتقفل الثغرة في شجرة العمليات والـ Active Directory، فإنك تجبره على إعادة تدريب فريقه وتطوير أدوات جديدة بتكلفة مئات الآلاف من الدولارات!</li>
</ul>

<h4>2. الفرق بين مؤشرات الاختراق ومؤشرات الهجوم (IOCs vs IOAs):</h4>
<ul>
  <li><strong>مؤشرات الاختراق (Indicators of Compromise - IOCs):</strong> الأدلة التي تجدها <em>بعد</em> وقوع الجريمة (مثل: هاش فايروس معروف، عنوان IP مشبوه، اسم ملف خبيث). تجيب عن سؤال: <em>"ماذا حدث؟"</em></li>
  <li><strong>مؤشرات الهجوم (Indicators of Attack - IOAs):</strong> الأنماط السلوكية التي ترصد الهجوم <em>أثناء وقوعه في الوقت الحقيقي</em> بغض النظر عن الأداة المستخدمة (مثل: عملية وورد تستدعي powershell لتنزيل ملف وتنفيذ تشفير). تجيب عن سؤال: <em>"ما الذي يحاول المهاجم فعله الآن؟"</em></li>
</ul>

<h4>3. قواعد الأمان العملياتي (OPSEC) لمحلل الـ SOC:</h4>
<p>أكبر خطأ كارثي يرتكبه المحلل المبتدئ هو <strong>رفع ملف سري خاص بالشركة (مثل وثيقة مالية أو مستند به أسماء عملاء) مباشرة إلى VirusTotal!</strong></p>
<p><strong>لماذا؟</strong> لأن VirusTotal يشارك جميع الملفات المرفوعة مع آلاف الباحثين والشركات حول العالم، مما يعني أنك سربت بيانات شركتك بيدك! وفوق ذلك، المهاجم قد يكون يراقب VirusTotal، فإذا رأى أنك رفعت الهاش، سيعلم أنك كشفته وسيقوم بتغيير خطة الهجوم فوراً.</p>
<p><strong>القاعدة الذهبية:</strong> ابحث عن الهاش (Search by Hash) ولا ترفع الملف الأصلي إلا إذا كنت متأكداً أنه لا يحتوي على أي بيانات شخصية أو سرية خاصة بالشركة!</p>
      `,
      theoryEn: `<h3>OSINT Threat Intelligence: Pyramid of Pain, IOCs vs IOAs, Threat Feeds & OPSEC Guidelines</h3>`,
      attackDefenseAr: `
<h3>أهم أدوات التحقيق في استخبارات التهديدات (OSINT Toolkit):</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 محركات البحث عن التهديدات</h4>
    <ul>
      <li><strong>VirusTotal:</strong> لفحص الهاشات والروابط عبر أكثر من 70 محرك حماية عالمي.</li>
      <li><strong>AbuseIPDB:</strong> للتحقق من سمعة عناوين الـ IP وهل أبلغت عنها شركات أخرى بهجمات اختراق أو مسح.</li>
      <li><strong>URLScan.io:</strong> لفحص الروابط المشبوهة وتصوير شاشة الموقع دون فتحه من جهازك الخاص!</li>
      <li><strong>Any.Run & Hybrid Analysis:</strong> بيئات محاكاة آمنة تفاعلية (Interactive Sandboxes) لتشغيل الملفات الخبيثة ومشاهدة سلوكها مباشرة.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 منصات إدارة استخبارات التهديدات (TIPs)</h4>
    <ul>
      <li>استخدام منصات مثل <strong>MISP (Malware Information Sharing Platform)</strong> و <strong>OpenCTI</strong> لتغذية نظام الـ SIEM بآلاف الـ IOCs الحديثة تلقائياً لحظرها استباقياً على الجدران النارية والبروكسي.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Threat Intelligence Feeds (MISP/OpenCTI) vs OPSEC Hunting</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 6.4: التحقيق في مؤشرات الاختراق عبر محاكي Threat Intel</h4>
    <p>استخدم أداة فحص الـ IOCs المدمجة في المنصة للتحقق من سمعة عنوان IP ودومين مشبوه.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-6-4">
      <div class="term-line output">Threat Intelligence Lookup Engine</div>
      <div class="term-line output">Type 'ti-lookup 185.220.101.5' or 'ti-lookup malicious-domain.xyz'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('ti-lookup 185.220.101.5', 'lab-term-6-4')">Query Threat Intel for 185.220.101.5</button>
    <button class="btn-cmd" onclick="runSimCommand('ti-lookup evil-c2-update.cc', 'lab-term-6-4')">Inspect Domain Reputation</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Threat Intelligence and IOC reputation lookup lab.</p>`,
      ticket: {
        ticketId: "SEC-TICK-604",
        severity: "HIGH",
        severityClass: "high",
        sourceHost: "SOC-TI-INTEGRATION-FEED",
        timestamp: "2026-11-06 23:40:19 UTC",
        ruleTriggered: "THREAT_INTEL_IOC_MATCH_ABUSEIPDB_CONFIDENCE_100",
        rawLog: `IOC_FEED_HIT: Outbound Connection to High-Confidence Malicious IP
SourceHost: HR-PC-02.corp.local (10.140.30.12)
DestinationIp: 194.26.29.112 (Target Port 443)
THREAT_INTEL_ENRICHMENT:
  AbuseIPDB_Score: 100% (Flagged by 412 distinct SOC reporters in last 24h)
  Categories: SSH Brute Force, Scanning, Cobalt Strike Team Server
  ISP: Flyservers S.A. (Known Bulletproof Hosting Provider)
  Country: Russian Federation / Seychelles
  VirusTotal_Match: 58/72 engines classify as Malicious C2 Infrastructure`,
        questionAr: "تلقيت تنبيهاً يوثق اتصال جهاز من قسم الـ HR بعنوان IP خارجي يحمل معدل خطورة 100% في AbuseIPDB ومصنف كـ Bulletproof Hosting. ما هو التقييم والإجراء العاجل؟",
        questionEn: "Analyze the Threat Intel hit matching 100% confidence malicious IP on AbuseIPDB. What is the triage assessment and action?",
        optionsAr: [
          "تصفح عادي لموقع إخباري عالمي في روسيا.",
          "تنبيه مؤكد وحرج جداً (True Positive - Malicious C2 Connection): الجهاز 10.140.30.12 يتصل ببنية تحتية خبيثة مؤكدة لسيرفر تحكم واختراق (Bulletproof C2)، ويجب عزل جهاز الـ HR فوراً وفحص العمليات المنفذة وحظر الـ IP 194.26.29.112 على الجدار الناري.",
          "خطأ في قاعدة بيانات AbuseIPDB.",
          "تحديث مجدول لنظام التشغيل."
        ],
        optionsEn: [
          "Normal Russian news browsing.",
          "Confirmed True Positive: Outbound C2 communication to high-confidence bulletproof hosting IP. Isolate host immediately, block IP, and investigate.",
          "AbuseIPDB database false positive.",
          "Routine OS patch."
        ],
        correctIndex: 1,
        explanationAr: "تقييم أمني استثنائي يا باشمهندس بشار! تطابق 100% في AbuseIPDB مع أكثر من 400 بلاغ أمني وتصنيف السيرفر كـ Bulletproof Hosting (استضافة محصنة ترفض التعاون مع أجهزة الشرطة وتؤجر للهكر) وتصنيف 58 محرك في VirusTotal يؤكد بما لا يدع مجالاً للشك أن الجهاز الداخلي مخترق ويتواصل مع سيرفر C2 خارجي. الإجراء: عزل الجهاز فوراً وحظر الـ IP وبدء فحص الـ EDR لشجرة العمليات.",
        explanationEn: "Spot-on! A 100% AbuseIPDB confidence score with 58/72 VT detections on a bulletproof hosting provider conclusively proves live C2 interaction, requiring immediate host isolation."
      }
    }
  ]
};
