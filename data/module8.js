// Stage 8: Home Lab, Capstones & Career (المختبر المنزلي، مشاريع التخرج، والاستعداد لسوق العمل)
// Curated with exhaustive depth for Eng. Bashar Hafedh - BasharSec Academy

const module8Data = {
  id: "module8",
  stageNumber: 8,
  titleAr: "المرحلة 8: المختبر المنزلي، مشاريع التخرج، والاستعداد لسوق العمل (Career & Capstones)",
  titleEn: "Stage 8: Home SOC Lab, Capstone Investigations & Career Mastery",
  summaryAr: "تتويج الرحلة واقتحام سوق العمل: دليل بناء مختبر الـ SOC المنزلي خطوة بخطوة، مشروع التخرج العملي الشامل للتحقيق في هجوم كامل، وبنك أهم 50 سؤالاً تقنياً وسيناريو عملي في مقابلات العمل مع الإجابات النموذجية.",
  summaryEn: "The ultimate culmination: Complete home SOC lab blueprint, end-to-end attack investigation capstone, and the definitive 50 technical interview questions & model answers guide.",
  badgeAr: "محلل SOC محترف معتمد",
  badgeEn: "Master SOC Analyst (Tier 1 & Tier 2)",
  icon: "workspace_premium",
  lessons: [
    {
      id: "lesson-8-1",
      moduleId: "module8",
      number: "8.1",
      titleAr: "دليل بناء مختبر SOC منزلي كامل خطوة بخطوة (Wazuh SIEM + Sysmon + Kali Linux)",
      titleEn: "Building a Full Home SOC Lab Step-by-Step: Wazuh SIEM, Sysmon Telemetry & Kali Linux",
      duration: "75 min",
      theoryAr: `
<h3>معسكر التدريب الخاص بك: كيف تبني مركز عمليات أمنية حقيقي على حاسوبك الشخصي مجاناً؟</h3>
<p class="lead">الشهادات النظرية وحدها لا تصنع محللاً ناجحاً! عندما تجلس في مقابلة عمل ويسألك مدير الـ SOC: <em>"هل قمت بمراقبة هجوم حقيقي بنفسك؟"</em>، وترد عليه: <em>"نعم، بنيت مختبر SOC منزلياً كاملاً وشغلت هجمات Brute Force و Mimikatz من Kali وراقبت السجلات على Wazuh و Sysmon!"</em>، فستكون في قمة قائمة المرشحين فوراً!</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: حلبة الملاكمة ومحاكي الطيران التشبيهي</div>
  <p>الطيار لا يقود طائرة ركاب بوينغ 777 لأول مرة في الهواء مباشرة! بل يقضي مئات الساعات في "محاكي الطيران التشبيهي (Flight Simulator)" حيث يتدرب على مواجهة العواصف، تعطل المحركات، وفقدان الضغط في بيئة آمنة لا تخاطر بأرواح أحد.</p>
  <p>المختبر المنزلي (Home Lab) هو محاكي الطيران الخاص بك: تطلق فيه الفيروسات والهجمات بيدك بأمان، وتشاهد كيف تلتقطها الحساسات وترسمها شاشات الـ SIEM دون أن تؤذي أحداً!</p>
</div>

<h4>1. المخطط المعماري لمختبر الـ SOC المنزلي (Virtual Architecture):</h4>
<p>كل ما تحتاجه هو جهاز كمبيوتر شخصي (يفضل 16GB RAM أو أكثر) وبرنامج محاكاة بيئات افتراضية مجاني مثل <strong>VirtualBox</strong> أو <strong>VMware Workstation Player</strong>:</p>

<pre class="ascii-flow">
                       [ شبكة معزولة افتراضية: Host-Only / NAT Network ]
                                              │
         ┌────────────────────────────────────┼────────────────────────────────────┐
         │                                    │                                    │
         ▼                                    ▼                                    ▼
[ المهاجم: Kali Linux ]             [ المدافع: Wazuh SIEM All-In-One ]     [ الهدف: Windows 10/11 Endpoint ]
• IP: 192.168.100.10                • IP: 192.168.100.20                   • IP: 192.168.100.30
• أدوات: Nmap, Hydra,                • نظام: Ubuntu Server                  • مثبت عليه: Sysmon v15
  Metasploit, Responder             • يدير: Wazuh Manager,                 • مثبت عليه: Wazuh Agent
                                      Indexer, Dashboard                     (يرسل كل الأحداث للسيرفر)
</pre>

<h4>2. خطوات بناء المختبر خطوة بخطوة من الصفر:</h4>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>الخطوة</th>
        <th>المهمة التنفيذية</th>
        <th>الأوامر والروابط المجانية المباشرة</th>
        <th>الهدف التعليمي للمحلل</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>1. تثبيت السيرفر</strong></td>
        <td>تثبيت خادم Wazuh All-in-One على نظام Ubuntu Server.</td>
        <td><code>curl -sO https://packages.wazuh.com/4.8/wazuh-install.sh && sudo bash wazuh-install.sh -a</code></td>
        <td>تشغيل محرك الـ SIEM وقاعدة بيانات الفهرسة والواجهة الرسومية (Wazuh Dashboard).</td>
      </tr>
      <tr>
        <td><strong>2. تجهيز الويندوز</strong></td>
        <td>تثبيت نظام ويندوز افتراضي مع أداة Sysmon بملف تكوين SwiftOnSecurity.</td>
        <td><code>Sysmon64.exe -accepteula -i sysmonconfig.xml</code></td>
        <td>تفعيل الرصد السلوكي العميق (Process Creation, Network Connections, LSASS Access).</td>
      </tr>
      <tr>
        <td><strong>3. ربط الوكيل (Agent)</strong></td>
        <td>تثبيت وكيل Wazuh Agent على جهاز ويندوز وربطه بـ IP السيرفر 192.168.100.20.</td>
        <td>نسخ أمر التثبيت التلقائي بنقرة واحدة من واجهة Wazuh: <em>Add Agent</em>.</td>
        <td>بدء تدفق السجلات الحية من ويندوز إلى شاشة الـ SIEM في جزء من الثانية.</td>
      </tr>
      <tr>
        <td><strong>4. محاكاة الهجوم</strong></td>
        <td>تشغيل فحص منافذ واختبار كسر كلمات المرور من Kali Linux ضد الويندوز.</td>
        <td><code>nmap -sS -A 192.168.100.30</code><br><code>hydra -l admin -P pass.txt 192.168.100.30 smb</code></td>
        <td>مشاهدة التنبيهات الأمنية تشتعل في شاشة Wazuh في نفس اللحظة وتتبع مسار الحادث!</td>
      </tr>
    </tbody>
  </table>
</div>
      `,
      theoryEn: `<h3>Home SOC Lab Blueprint: Step-by-Step Wazuh SIEM, Sysmon Telemetry & Kali Linux Setup</h3>`,
      attackDefenseAr: `
<h3>سيناريوهات الهجوم والدفاع داخل المختبر المنزلي:</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 تجارب الهجوم التي تنفذها بيدك</h4>
    <ul>
      <li>تشغيل أداة <strong>Atomic Red Team</strong> لتوليد أحداث MITRE ATT&CK تلقائية بضغطة زر.</li>
      <li>تشغيل أداة Mimikatz وسرقة الهاشات وملاحظة صدور تنبيه Sysmon 10 فوراً.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 كتابة قواعد كشف جديدة بيدك</h4>
    <ul>
      <li>فتح ملف <code>/var/ossec/etc/rules/local_rules.xml</code> في سيرفر Wazuh وكتابة قاعدة جديدة مخصصة لرصد أي عملية تعمل من مجلد <code>C:\\Users\\Public</code> وإطلاق تنبيه بريدي!</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Adversary Emulation via Atomic Red Team vs Wazuh Custom Rule Engineering</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 8.1: التحقق من اتصال وكيل Wazuh Agent وتدفق السجلات</h4>
    <p>استخدم سطر الأوامر لفحص حالة وكلاء Wazuh والتأكد من استلام السجلات الحية.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-8-1">
      <div class="term-line output">Wazuh Cluster Management Shell</div>
      <div class="term-line output">Type '/var/ossec/bin/agent_control -l' to inspect agents.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('/var/ossec/bin/agent_control -l', 'lab-term-8-1')">List Connected Wazuh Agents</button>
    <button class="btn-cmd" onclick="runSimCommand('tail -f /var/ossec/logs/alerts/alerts.log', 'lab-term-8-1')">Tail Live Alert Feed</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Wazuh agent verification and alert feed inspection.</p>`,
      ticket: {
        ticketId: "SEC-TICK-801",
        severity: "MEDIUM",
        severityClass: "medium",
        sourceHost: "WAZUH-LAB-MANAGER",
        timestamp: "2026-11-06 23:10:00 UTC",
        ruleTriggered: "WAZUH_LAB_AGENT_DISCONNECTED_HEARTBEAT_TIMEOUT",
        rawLog: `WAZUH_MANAGER_LOG:
Event: Agent Status Change
AgentID: 002
AgentName: Win10-Victim-Host
AgentIP: 192.168.100.30
Status: Disconnected (Heartbeat silence exceeded 600 seconds)
LastKeepAlive: 2026-11-06 23:00:00 UTC`,
        questionAr: "أثناء عملك في المختبر المنزلي، لاحظت انقطاع اتصال الوكيل AgentID 002 عن سيرفر Wazuh. ما هي خطوتك الهندسية للتحقق من المشكلة؟",
        questionEn: "Wazuh Agent 002 has disconnected. What is your troubleshooting step?",
        optionsAr: [
          "حذف سيرفر Wazuh وإعادة تثبيته من الصفر.",
          "التحقق من حالة خدمة Wazuh Agent على جهاز الويندوز (Get-Service WazuhSvc)، والتأكد من فتح منفذ UDP/TCP 1514 بين الجهاز وسيرفر Wazuh في الجدار الناري.",
          "تغيير عنوان الـ IP لسيرفر كالي لينكس.",
          "تجاهل الحدث لأن الأجهزة الافتراضية تنام تلقائياً."
        ],
        optionsEn: [
          "Wipe and reinstall Wazuh manager.",
          "Troubleshoot Windows agent: Verify WazuhSvc service status (Get-Service) and confirm firewall allows port 1514 TCP/UDP connectivity between agent and manager.",
          "Change Kali IP address.",
          "Ignore event."
        ],
        correctIndex: 1,
        explanationAr: "إجراء هندسي منهجي سليم يا باشمهندس بشار! مشكلة انقطاع اتصال الوكيل في المختبر أو بيئات العمل الحقيقية تنحصر في أمرين: 1) خدمة الوكيل توقفت على جهاز العميل وتحتاج لإعادة تشغيل (Restart-Service WazuhSvc)، أو 2) جدار الحماية قام بحظر المنفذ 1514 (وهو المنفذ القياسي لنقل بيانات وكلاء Wazuh إلى السيرفر المركزي).",
        explanationEn: "Spot on! Agent disconnections are routinely resolved by verifying client service status (WazuhSvc) and verifying firewall rule traversal for port 1514."
      }
    },

    {
      id: "lesson-8-2",
      moduleId: "module8",
      number: "8.2",
      titleAr: "مشروع التخرج العملي الشامل: تتبع وتحقيق اختراق كامل من إيميل التصيد وحتى الـ DC",
      titleEn: "Comprehensive Capstone Project: End-to-End Enterprise Attack Investigation",
      duration: "80 min",
      theoryAr: `
<h3>مشروع التخرج الملحمي: المحاكاة الواقعية لاختراق مؤسسة مالية بالكامل!</h3>
<p class="lead">هذا المشروع يدمج كل ما تعلمته في المراحل السبع السابقة في سيناريو عملي واحد متصل! ستعيش تجربة التحقيق في هجوم معقد قامت به مجموعة قرصنة متقدمة (APT Group) استهدفت شركة استثمارية، بدءاً من أول رسالة إيميل وصلت للموظف، مروراً بالـ PowerShell المشفر وسرقة LSASS، وصولاً إلى محاولة تفريغ الدومين كنترولر!</p>

<div class="analogy-card">
  <div class="analogy-header">💡 سيناريو القضية: عملية "العاصفة الصامتة (Operation Silent Storm)"</div>
  <p>في تمام الساعة 08:30 صباحاً، انطلقت أول شرارة بتسليم إيميل خبيث لموظفة المحاسبة سارة. وفي غضون ساعتين، كان المهاجم قد تنقل عبر 4 أجهزة في الشبكة ووصل إلى خادم الـ Domain Controller المركزي. مهمتك كمحلل الـ SOC المسؤول هي إعادة رسم خريطة الهجوم بالكامل بالثواني، وتحديد كل أداة وتقنية MITRE استخدمها العدو!</p>
</div>

<h4>مخطط التسلسل الزمني للاختراق الكامل (The Full Attack Sequence Map):</h4>

<pre class="ascii-flow">
[ 08:30 UTC - المرحلة 1: Initial Access (T1566.001) ]
  • إيميل تصيد احتيالي من IP روسي يحمل مستند: Resume_Invoice.docm
  • الضحية سارة تفتح الملف وتضغط على "Enable Content" لتفعيل الماكرو.
           │
           ▼
[ 08:32 UTC - المرحلة 2: Execution (T1059.001) & Defense Evasion ]
  • برنامج WINWORD.EXE يستدعي PowerShell بأمر مشفر بـ Base64 (-w hidden -enc).
  • يقوم بتنزيل البايلود C2 من رابط خارجي وحفظه في C:\\Users\\Public\\update.exe.
           │
           ▼
[ 08:45 UTC - المرحلة 3: Persistence (T1547.001) ]
  • إضافة مفتاح تشغيل تلقائي في الريجستري HKCU\\...\\Run باسم OneDriveSyncUpdate.
           │
           ▼
[ 09:14 UTC - المرحلة 4: Credential Access (T1003.001) ]
  • تشغيل أداة procdump64.exe لطلب GrantedAccess 0x1FFFFF وتفريغ ذاكرة lsass.exe!
  • استخراج هاش حساب مهندس الشبكات b.hafedh_admin من الذاكرة.
           │
           ▼
[ 09:40 UTC - المرحلة 5: Lateral Movement (T1021.002) ]
  • استخدام هجوم Pass-the-Hash عبر أداة PsExec للاتصال بالدومين كنترولر DC01 عبر SMB (445).
           │
           ▼
[ 10:10 UTC - المرحلة 6: Collection & Exfiltration Probe (T1048.003) ]
  • محاولة تشغيل أمر DCSync وسحب قاعدة NTDS.dit وتسريب البيانات عبر استعلامات DNS TXT!
</pre>

<h4>الأدلة الجنائية ومؤشرات الاختراق (Master IOC Artifacts):</h4>
<ul>
  <li><strong>عناوين الـ IP الخبيثة:</strong> <code>185.220.101.5</code> (Tor Exit Relay / C2 Server) و <code>194.26.29.112</code> (Staging Server).</li>
  <li><strong>أسماء النطاقات:</strong> <code>update-security-patch.xyz</code> و <code>corporate-benefits-portal.xyz</code>.</li>
  <li><strong>بصمات الهاش SHA-256:</strong> <code>8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92</code>.</li>
  <li><strong>الأجهزة المتأثرة:</strong> <code>ACC-PC-12</code> (نقطة الدخول Patient Zero) و <code>FIN-SRV-04</code> و <code>DC01.corp.local</code>.</li>
</ul>
      `,
      theoryEn: `<h3>Comprehensive SOC Capstone: Multi-Stage Enterprise Attack Reconstruction (Phishing to DC Compromise)</h3>`,
      attackDefenseAr: `
<h3>التقرير الجنائي النهائي لمشروع التخرج:</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 محصلة هجوم العدو</h4>
    <ul>
      <li>استغلال خطأ بشري للموظف لتجاوز الدفاعات المحيطية.</li>
      <li>الحركة الجانبية باستخدام بيانات اعتماد مسروقة مشروعة (Living Off The Land) دون توليد برمجيات فيروسية تقليدية.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 خطة الاستجابة الشاملة المعتمدة للمهندس بشار</h4>
    <ul>
      <li><strong>عزل شبكي فوري:</strong> عزل ACC-PC-12 و DC01 مؤقتاً.</li>
      <li><strong>إلغاء وتغيير كلمات المرور:</strong> إعادة تعيين حساب b.hafedh_admin وتغيير كلمة مرور حساب krbtgt مرتين متتاليتين لإلغاء أي تذاكر ذهبية مزورة.</li>
      <li><strong>حظر المحيط:</strong> إضافة كافة الـ IOCs في القائمة السوداء للجدار الناري والبروكسي و DNS Firewall.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Full Kill Chain Disruption & Comprehensive Recovery Operations</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 8.2: تنفيذ تتبع الاختراق عبر محاكي استعلامات الـ SIEM</h4>
    <p>استخدم استعلامات Splunk للبحث عن سلسلة الأحداث من 08:30 حتى 10:10 واستخراج تقرير الحادث.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-8-2">
      <div class="term-line output">Enterprise Capstone Forensic Investigation Shell</div>
      <div class="term-line output">Type 'reconstruct-kill-chain' to view chronological cross-correlation.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('reconstruct-kill-chain', 'lab-term-8-2')">Reconstruct Full Attack Timeline</button>
    <button class="btn-cmd" onclick="runSimCommand('verify-dc-integrity', 'lab-term-8-2')">Audit Domain Controller NTDS Integrity</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Capstone full attack reconstruction and timeline analysis.</p>`,
      ticket: {
        ticketId: "SEC-TICK-802",
        severity: "CRITICAL",
        severityClass: "critical",
        sourceHost: "ENTERPRISE-SOC-COMMAND-CENTER",
        timestamp: "2026-11-06 23:59:00 UTC",
        ruleTriggered: "CAPSTONE_FINAL_EVALUATION_ENTERPRISE_BREACH_CONTAINED",
        rawLog: `INCIDENT_CAPSTONE_VERIFICATION:
All 6 Kill Chain stages correlated successfully by Lead Analyst Eng. Bashar Hafedh:
  1. Initial Access: Phishing docm (T1566.001)
  2. Execution: Base64 Encoded PowerShell (T1059.001)
  3. Persistence: Registry Run Key (T1547.001)
  4. Credential Access: ProcDump LSASS 0x1FFFFF (T1003.001)
  5. Lateral Movement: Pass-the-Hash SMB (T1021.002)
  6. Action on Objectives: DCSync Attempt (T1003.006)
Remediation Verdict: All compromised hosts contained, dual krbtgt reset triggered, IOCs pushed to firewall blocklists.`,
        questionAr: "بصفتك كبير مهندسي الـ SOC المشرف على مشروع التخرج، ما هو الحكم الختامي على إدارة هذا الحادث الملحمي؟",
        questionEn: "As Lead SOC Architect overseeing this capstone investigation, what is the final operational verdict?",
        optionsAr: [
          "الحادث فشل لأن الشركة تعرضت لرسالة تصيد.",
          "نجاح باهر بنسبة 100% في اكتشاف وتفكيك كامل سلسلة الهجوم (Full Kill Chain Disrupted): تم تتبع الاختراق من أول إيميل، واحتواء الأجهزة المصابة، وحماية الدومين كنترولر قبل نجاح سرقة الـ NTDS.dit، وتطهير الشبكة بالكامل وتأمين المؤسسة وفق أعلى المعايير الدولية!",
          "إعادة تهيئة جميع خوادم الشركة دون تحقيق.",
          "تجاهل التقرير لعدم وجود خسائر مالية."
        ],
        optionsEn: [
          "Incident failed because phishing email reached user.",
          "Outstanding 100% Success: Full Kill Chain successfully disrupted, Patient Zero isolated, Domain Controller protected before NTDS exfiltration, and dual KRBTGT reset executed according to international best practices.",
          "Reimage all servers without root-cause analysis.",
          "Ignore report."
        ],
        correctIndex: 1,
        explanationAr: "مبارك من القلب يا باشمهندس بشار! لقد أتممت مشروع التخرج العملي الشامل بنجاح باهر وبأعلى درجات الكفاءة الاحترافية! تتبع سلسلة قتل كاملة مكونة من 6 مراحل معقدة وتطبيق إجراءات الاحتواء والعزل وإعادة ضبط الـ krbtgt هو العمل الحقيقي لكبار محللي مراكز العمليات الأمنية (Senior SOC Tier 2 Analysts) في أكبر البنوك والشركات العالمية. أنت الآن جاهز رسمياً لدخول سوق العمل والامتحان النهائي!",
        explanationEn: "Heartfelt congratulations! Flawless end-to-end incident reconstruction and remediation. Successfully protecting the Domain Controller and executing full Kill Chain disruption confirms Tier 1 & Tier 2 operational readiness."
      }
    },

    {
      id: "lesson-8-3",
      moduleId: "module8",
      number: "8.3",
      titleAr: "دليل اجتياز مقابلات العمل لمحلل SOC Tier 1 & 2: بنك أهم 50 سؤالاً تقنياً وسيناريو عملي",
      titleEn: "The Ultimate SOC Analyst Interview Guide: 50 Core Technical Questions & Practical Scenarios",
      duration: "90 min",
      theoryAr: `
<h3>جواز سفرك الوظيفي: كيف تبهر لجان المقابلات وتجيب على أصعب الأسئلة التقنية بثقة مطلقة؟</h3>
<p class="lead">المقابلات الوظيفية لمحلل الـ SOC لا تعتمد على الحفظ والتلقين! مدير الـ SOC يريد أن يرى: <em>"كيف تفكر عندما تقع الكارثة؟"</em> في هذا الدليل الموسوعي الشامل، جمعنا لك أهم 50 سؤالاً تقنياً حقيقياً وسيناريو عملياً تُطرح في مقابلات كبرى الشركات والبنوك العالمية مع الإجابات النموذجية المفصلة.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 السر الذهبي في مقابلات الـ SOC: منهجية STAR-C</div>
  <p>عندما يسألك المقابل: <em>"كيف تتصرف إذا رأيت تنبيهاً لبرمجية فدية؟"</em>، لا تبدأ بالكلام العشوائي! استخدم منهجية الـ SOC الاحترافية:
  1. <strong>الموقف (Situation):</strong> استلام التنبيه وتحديد السيرفر المتأثر.
  2. <strong>المهمة (Task):</strong> منع انتشار التشفير وحماية باقي الشبكة.
  3. <strong>التصرف الميداني (Action):</strong> عزل الجهاز (Isolation)، فحص المريض صفر، وحماية النسخ الاحتياطية.
  4. <strong>النتيجة (Result):</strong> احتواء الهجوم في أقل من 15 دقيقة دون أي خسائر في البيانات.
  5. <strong>الدروس المستفادة (Correction):</strong> سد الثغرة وعمل Tuning لقواعد الاكتشاف.</p>
</div>

<h4>بنك الأسئلة التقنية المصنفة مع الإجابات النموذجية لمحلل الـ SOC:</h4>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>الرقم</th>
        <th>السؤال التقني في المقابلة</th>
        <th>الإجابة النموذجية المباشرة التي يبحث عنها المقابل</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>1</strong></td>
        <td>ما الفرق بين TCP و UDP وأين نستخدم كل منهما؟</td>
        <td>TCP موثوق يضمن وصول الحزم ويعتمد المصافحة الثلاثية (SYN, SYN-ACK, ACK) ويستخدم في HTTP/SSH. بينما UDP غير موثوق لا يضمن الوصول وسريع جداً بدون مصافحة ويستخدم في DNS والبث المباشر وألعاب الفيديو.</td>
      </tr>
      <tr>
        <td><strong>2</strong></td>
        <td>ما هي رايات الـ TCP Flags وماذا يعني RST؟</td>
        <td>الأعلام الستة هي SYN, ACK, FIN, RST, PSH, URG. علم RST (Reset) يعني قطع وإنهاء الاتصال بالقوة فوراً، ويظهر عندما يكون المنفذ مغلقاً أو عند قيام هكر بفحص SYN Scan لقطع الاتصال بعد استلام SYN-ACK دون إكمال الجلسة.</td>
      </tr>
      <tr>
        <td><strong>3</strong></td>
        <td>ماذا يعني نوع الدخول LogonType = 3 ونوع LogonType = 10 في الحدث 4624؟</td>
        <td>LogonType 3 يعني تسجيل دخول شبكي عبر موارد الشبكة (مثل مجلد مشترك SMB أو استعلامات RPC أو هجمات PsExec). بينما LogonType 10 يعني تسجيل دخول عبر سطح المكتب البعيد RDP (Remote Interactive) ويوثق الـ IP الخارجي للمتصل.</td>
      </tr>
      <tr>
        <td><strong>4</strong></td>
        <td>ما هو كود الفشل 0xC000006A في الحدث 4625؟</td>
        <td>يعني أن اسم المستخدم صحيح تماماً ولكن كلمة المرور المدخلة خاطئة (Bad Password). بينما 0xC0000064 يعني أن اسم المستخدم غير موجود أصلاً، و 0xC0000234 يعني الحساب مقفل.</td>
      </tr>
      <tr>
        <td><strong>5</strong></td>
        <td>ما هو هجوم Kerberoasting وكيف نكتشفه؟</td>
        <td>هجوم يقوم فيه مستخدم عادي بطلب تذاكر خدمة TGS لحسابات SPN بتشفير RC4 ضعيف (0x17) لسحب التذكرة وكسر كلمة المرور خارجياً بـ Hashcat. نكتشفه عبر الحدث Event ID 4769 مع Ticket Encryption Type = 0x17 لحسابات ذات صلاحيات عالية.</td>
      </tr>
      <tr>
        <td><strong>6</strong></td>
        <td>ما هو الحدث Sysmon 10 ولماذا يبحث عن GrantedAccess 0x1FFFFF؟</td>
        <td>يسجل وصول عملية لذاكرة عملية أخرى. القيمة 0x1FFFFF تعني طلب صلاحيات كاملة (Full Access) لقراءة وكتابة الذاكرة، وهي التوقيع الحصري لأداة Mimikatz و Procdump عند محاولة تفريغ ذاكرة lsass.exe لسرقة الهاشات.</td>
      </tr>
      <tr>
        <td><strong>7</strong></td>
        <td>ما هو هرم الألم (Pyramid of Pain) وما أصعب طبقة فيه؟</td>
        <td>مخطط يوضح مدى الصعوبة التي يسببها المدافع للمهاجم عند حظر مؤشرات معينة. أصعب طبقة في القمة هي التكتيكات والأساليب TTPs (Tough)، بينما أسهل طبقة في القاعدة هي الهاشات Hash Values (Trivial).</td>
      </tr>
      <tr>
        <td><strong>8</strong></td>
        <td>ما الفرق بين True Positive و False Positive و Benign True Positive؟</td>
        <td>TP: هجوم حقيقي ونشط يتطلب استجابة فورية. FP: إنذار كاذب لنشاط مشروع يتطلب Tuning للقاعدة. BTP: هجوم حقيقي ولكنه صُد ومُنع بنجاح من الـ WAF/Firewall دون ضرر ولا يتطلب عزل الأجهزة.</td>
      </tr>
      <tr>
        <td><strong>9</strong></td>
        <td>ما الفرق بين بروتوكولات SPF و DKIM و DMARC؟</td>
        <td>SPF يحدد الـ IPs المصرح لها بالإرسال عبر سجل DNS. DKIM يوفر توقيعاً رقمياً مشفراً يضمن عدم تعديل الرسالة. DMARC يحدد السياسة الإلزامية في حال فشل أي منهما (None, Quarantine, Reject).</td>
      </tr>
      <tr>
        <td><strong>10</strong></td>
        <td>ما هي الخطوة الفورية رقم واحد عند رصد برمجية فدية تشفر الملفات؟</td>
        <td><strong>عزل الجهاز المصاب فوراً عن الشبكة (Network Host Isolation)</strong> لمنع انتقال التشفير إلى المجلدات المشتركة وخوادم النسخ الاحتياطي، ثم البدء بالتحقيق واستئصال التهديد.</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>نصائح ذهبية لإنهاء المقابلة بانتصار ساحق:</h4>
<ol>
  <li><strong>لا تقل أبداً "لا أعرف وأسكت"!</strong> إذا سُئلت عن أداة لم تسمع بها، قل: <em>"لم أتعامل مع هذه الأداة بالتحديد في مشروعي، ولكن بناءً على وظيفتها كذا، فمنهجيتي في التعامل معها ستكون عبر فحص السجلات ومطابقة مؤشرات الـ IOCs..."</em></li>
  <li><strong>أظهر لغة الـ SOC الاحترافية:</strong> استخدم مصطلحات: <em>Triage, Isolation, False Positive Tuning, MITRE ATT&CK, PICERL, Patient Zero, SLA</em>.</li>
  <li><strong>تحدث بفخر عن إنجازاتك في أكاديمية بشار (BasharSec Academy) وعن مختبرك المنزلي!</strong> هذا يثبت شغفك وعملك العملي الجاد.</li>
</ol>
      `,
      theoryEn: `<h3>The Definitive SOC Tier 1 & 2 Interview Preparation Blueprint: 50 Core Questions & Scenarios</h3>`,
      attackDefenseAr: `
<h3>أهم سيناريو تطرحه لجان المقابلات: "تنبيه في الساعة 3 فجراً"</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 سؤال المقابل</h4>
    <ul>
      <li>"أنت المحلل الوحيد المناوب ليلاً في مركز الـ SOC، ورأيت 500 محاولة دخول فاشلة على سيرفر قواعد البيانات أعقبها دخول ناجح واحد في الساعة 03:00 فجراً. ماذا تفعل خطوة بخطوة؟"</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 الإجابة النموذجية التي تضمن لك القبول فوراً</h4>
    <ul>
      <li>1. أتحقق فوراً من عنوان الـ IP المصدر في سجل 4624 ونوع الدخول LogonType.</li>
      <li>2. إذا كان الـ IP خارجياً أو من شبكة غير معتادة، أعتبر الحادث حالة طوارئ P1 لاختراق حساب.</li>
      <li>3. أعزل السيرفر فوراً عن الشبكة عبر الـ EDR لمنع سرقة قاعدة البيانات.</li>
      <li>4. أقوم بتعطيل الحساب المخترق مؤقتاً في الـ Active Directory وإنهاء الجلسة النشطة.</li>
      <li>5. أصعد الحادث فوراً لـ Tier 2 Lead ومدير الـ SOC وفقاً لمصفوفة التصعيد ووثيقة الـ SLA.</li>
      <li>6. أبدأ بتجميع السجلات وتوثيق التسلسل الزمني في تذكرة الحادث.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: The Iconic 3 AM Database Intrusion Scenario</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 8.3: محاكاة أسئلة المقابلات التقنية السريعة</h4>
    <p>اختبر معلوماتك في سيناريوهات المقابلات التفاعلية واحصل على تقييم فوري لإجاباتك.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-8-3">
      <div class="term-line output">SOC Career & Technical Interview Readiness Engine</div>
      <div class="term-line output">Type 'interview-q1' or 'interview-random' to test your readiness.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('interview-q1', 'lab-term-8-3')">Test Interview Question #1</button>
    <button class="btn-cmd" onclick="runSimCommand('interview-random', 'lab-term-8-3')">Random Technical Scenario</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive SOC interview question simulator and scenario test.</p>`,
      ticket: {
        ticketId: "SEC-TICK-803",
        severity: "CRITICAL",
        severityClass: "critical",
        sourceHost: "SOC-INTERVIEW-BOARD",
        timestamp: "2026-11-06 23:59:59 UTC",
        ruleTriggered: "FINAL_CAREER_MILESTONE_SOC_ANALYST_MASTERY_ACHIEVED",
        rawLog: `CANDIDATE_EVALUATION_REPORT:
Candidate: Eng. Bashar Hafedh (المهندس بشار حافظ)
Track: Certified SOC Analyst Tier 1 & Tier 2 Mastery (BCSA)
CurriculumProgress: 8 Comprehensive Stages Completed
CoreCompetencies_Verified:
  [✓] Deep Packet Forensics & Wireshark Navigation
  [✓] Windows Internals & Sysmon Telemetry Engineering
  [✓] Active Directory Defense, Kerberos & DCSync Hunting
  [✓] Web Application Attack Dissection (OWASP Top 10)
  [✓] SIEM Correlation, Splunk SPL & Detection Engineering
  [✓] Threat Intelligence, OSINT & Pyramid of Pain Operations
  [✓] PICERL Incident Response & Executive Incident Reporting
FinalRecommendation: Ready for Immediate Senior SOC Deployment & Official Certification Issuance!`,
        questionAr: "أمامك تقرير التقييم النهائي الشامل لرحلتك التعليمية في أكاديمية بشار للأمن السيبراني. ما هي الخطوة التالية للحصول على وثيقة التخرج الرسمية المعتمدة؟",
        questionEn: "Review the comprehensive evaluation report for Eng. Bashar Hafedh. What is the next step to obtain your official accredited graduation certificate?",
        optionsAr: [
          "إغلاق المتصفح ومسح الملفات.",
          "التوجه إلى قسم 'شهادة التخرج والامتحان' (BCSA Hub)، إجراء الامتحان النهائي الشامل المكون من 30 سؤال سيناريو واقعي، واجتيازه بنسبة 80% فما فوق لاعتماد الشهادة الفخمة وطباعتها وتحميلها كملف PDF رسمي يحمل اسم Eng. Bashar Hafedh!",
          "إعادة دراسة المرحلة الأولى فقط.",
          "الانتظار لمدة 30 يوماً للموافقة اليدوية."
        ],
        optionsEn: [
          "Close browser and delete files.",
          "Head to the 'Certification & Exam Hub', take the 30-scenario BCSA Final Exam, pass with 80%+ to unlock and print the luxury official accredited certificate issued to Eng. Bashar Hafedh!",
          "Restart Stage 1.",
          "Wait 30 days for manual review."
        ],
        correctIndex: 1,
        explanationAr: "تهانينا الحارة والمستحقة يا باشمهندس بشار حافظ! لقد أتممت بنجاح أضخم موسوعة تدريبية عملية في تاريخ مراكز العمليات الأمنية (SOC). الخطوة التالية هي التوجه لقسم شهادة التخرج وخوض الامتحان النهائي الشامل (30 سيناريو واقعي) لتتويج مسيرتك بالشهادة الاحترافية المعتمدة Certified SOC Analyst - Tier 1 & Tier 2 Mastery (BCSA). فخورون بما حققته ونتمنى لك مستقبلاً باهراً في قيادة أمن المعلومات!",
        explanationEn: "Huge congratulations Eng. Bashar Hafedh! You have mastered the complete encyclopedic curriculum. Proceed to the Certification Hub, complete the 30-scenario final exam, and claim your accredited BCSA diploma!"
      }
    }
  ]
};
