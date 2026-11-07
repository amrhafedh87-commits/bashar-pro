// Stage 1: IT & Networking from Absolute Zero (التأسيس الصفري الشامل في الحاسوب والشبكات)
// Curated with exhaustive encyclopedic depth for Eng. Bashar Hafedh - BasharSec Academy

const module1Data = {
  id: "module1",
  stageNumber: 1,
  titleAr: "المرحلة 1: التأسيس الصفري الشامل في الحاسوب والشبكات",
  titleEn: "Stage 1: IT & Networking from Absolute Zero",
  summaryAr: "الانطلاق من الصفر المطلق: كيف تفكر الحواسيب، كيف تنتقل حزم البيانات عبر أسلاك وأمواج الكوكب، ولماذا يعتبر فهم الشبكات هو حجر الأساس لأي محلل SOC محترف.",
  summaryEn: "From absolute ground zero: How machines communicate, how packets traverse the world, and why packet-level networking is the lifeblood of a SOC Analyst.",
  badgeAr: "مؤسس الشبكات والعتاد",
  badgeEn: "Network & Hardware Architect",
  icon: "network_check",
  lessons: [
    {
      id: "lesson-1-1",
      moduleId: "module1",
      number: "1.1",
      titleAr: "كيف يعمل الحاسوب والإنترنت من الصفر؟ (العتاد، النظام الثنائي، ونبضات الشبكة)",
      titleEn: "How Computers & The Internet Work from Zero: Hardware, Binary & Packet Flow",
      duration: "55 min",
      theoryAr: `
<h3>أهلاً بك يا باشمهندس بشار في الانطلاقة الكبرى: من الذرة إلى الشبكة العنكبوتية!</h3>
<p class="lead">لا تفترض في نفسك أي معرفة سابقة! حتى لو لم تكن تعرف كيف يفتح الكمبيوتر أو كيف تخرج الصورة على الشاشة، سنبدأ معك من الصفر الفيزيائي المطلق حتى تفهم كيف تجري الكهرباء وكيف تتحول إلى بيانات يتتبعها محلل الـ SOC.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: مفاتيح الإضاءة ولغة المورس (Morse Code)</div>
  <p>تخيل أنك تقف في غرفة مظلمة وبيدك مفتاح مصباح كهربائي. إذا كان المصباح مطفأً فهذه حالة (0). وإذا ضغطت المفتاح وأضاء المصباح فهذه حالة (1). إذا اتفقت مع جارك في البناية المقابلة أن ومضة واحدة تعني "نعم" وومضتين تعني "لا"، فقد صنعت أول وسيلة اتصال رقمية في التاريخ!</p>
  <p>الحاسوب في جوهره ليس كائناً ذكياً خارقاً، بل هو عبارة عن مليارات المفاتيح الكهربائية الميكروسكوبية فائقة الصغر المصنوعة من السيليكون والتي تسمى <strong>الترانزستورات (Transistors)</strong>. كل مفتاح إما أن يمرر شحنة كهربائية (1 / ON) أو لا يمررها (0 / OFF). ومن هذا المبدأ البسيط وُلد كل ما نراه اليوم من خوادم وإنترنت وأنظمة ذكاء اصطناعي!</p>
</div>

<h4>1. تشريح عتاد الحاسوب (Under The Hood: PC Hardware Anatomy):</h4>
<p>لكي تفهم كيف يستغل المهاجمون الذاكرة والعمليات (Processes)، يجب أن تعرف كيف يتعاون رباعي العتاد داخل الصندوق المعدني:</p>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>المكون العتادي</th>
        <th>الوظيفة الفيزيائية</th>
        <th>التشبيه المكتبي</th>
        <th>أهميته لمحلل الـ SOC</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>المعالج (CPU)</strong></td>
        <td>عقل الحاسوب الذي ينفذ مليارات التعليمات الحسابية والمنطقية في الثانية الواحدة.</td>
        <td>المدير التنفيذي الذي يقرأ الأوامر وينفذها فوراً على مكتبه.</td>
        <td>ارتفاع استهلاك المعالج المفاجئ إلى 100% بدون سبب قد يشير إلى برمجيات تعدين العملات الرقمية (Cryptomining Malware).</td>
      </tr>
      <tr>
        <td><strong>الذاكرة العشوائية (RAM)</strong></td>
        <td>ذاكرة مؤقتة فائقة السرعة تحتفظ بالبرامج والبيانات النشطة قيد التشغيل فقط. تفقد كل بياناتها بمجرد فصل الكهرباء.</td>
        <td>سطح المكتب المفتوح أمامك: تضع عليه الأوراق التي تعمل عليها الآن فقط.</td>
        <td>مسرح الجريمة الأول (Volatile Memory)! هنا يختبئ الهكر في هجمات Fileless Malware وحقن العمليات (Process Injection) وأداة Mimikatz لسرقة كلمات المرور من ذاكرة LSASS.</td>
      </tr>
      <tr>
        <td><strong>القرص الصلب (HDD / SSD)</strong></td>
        <td>وحدة التخزين الدائمة التي تحتفظ بنظام التشغيل والملفات حتى بعد إطفاء الجهاز.</td>
        <td>خزانة الملفات المغلقة في زاوية الغرفة؛ تأخذ وقتاً لفتحها ولكنها تحفظ الأوراق لأشهر وسنين.</td>
        <td>مكان حفظ سجلات الأحداث (Event Logs) والملفات التنفيذية الخبيثة (Malware Payloads) وأدوات البقاء (Persistence mechanisms).</td>
      </tr>
      <tr>
        <td><strong>بطاقة الشبكة (NIC - Network Interface Card)</strong></td>
        <td>البوابة التي تحول البيانات من أرقام ثنائية داخل الذاكرة إلى نبضات كهربائية عبر الأسلاك النحاسية أو إشارات ضوئية أو أمواج لاسلكية (Wi-Fi).</td>
        <td>صندوق البريد وباب الخروج الوحيد من المكتب إلى العالم الخارجي.</td>
        <td>منفذ المراقبة (Network Tap / SPAN)! الحزم التي تمر عبر كارت الشبكة هي التي نلتقطها ببرنامج Wireshark لتحليل الهجمات.</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>2. النظام الثنائي (Binary): كيف يتحول الحرف إلى نبضة؟</h4>
<p>أصغر وحدة بيانات في عالم الحاسوب تسمى <strong>بت (Bit)</strong>، وهي خانة واحدة إما 0 أو 1. عندما نجمع 8 خانات معاً، نحصل على <strong>بايت (Byte)</strong>. البايت الواحد يمكن أن يمثل 256 احتمالاً مختلفاً (من <code>00000000</code> إلى <code>11111111</code>)، وهو ما يكفي لتمثيل أي حرف من حروف لوحة المفاتيح في جدول المعايير الدولية <strong>ASCII Table</strong>:</p>

<pre class="ascii-flow">
حرف 'A' في لوحة المفاتيح 
      ↓ (ترميز ASCII: الرقم 65)
  01000001 (في الذاكرة RAM)
      ↓ (عبر كابل الشبكة كشحنات كهربائية: لا نبضة - نبضة - لا نبضة...)
+5V:  _ | _ _ _ _ _ | 
 0V: | _ | | | | | _ |
</pre>

<h4>3. كيف يسافر الإنترنت حول كوكب الأرض؟</h4>
<p>عندما تضغط على زر إنتر في متصفحك لطلب موقع في أمريكا وأنت جالس في منزلك، تمر رسالتك في أقل من 80 جزءاً من الثانية بالمسار التالي:</p>
<ol>
  <li><strong>كابل النحاس أو الواي فاي:</strong> ينقل الإشارة من حاسوبك إلى راوتر المنزل.</li>
  <li><strong>شبكة الألياف الضوئية للمزود (ISP):</strong> ينقل الراوتر البيانات عبر ومضات ضوئية داخل كابلات زجاجية تحت شوارع مدينتك.</li>
  <li><strong>الكابلات البحرية العابرة للقارات (Submarine Cables):</strong> تعبر الحزم آلاف الكيلومترات في قاع المحيطات عبر خيوط ألياف ضوئية محمية بالفولاذ والضغط.</li>
  <li><strong>مراكز البيانات الضخمة (Data Centers):</strong> تستلم خوادم الموقع حزمك، تعالجها، وترد عليك بنفس المسار في طرفة عين!</li>
</ol>
      `,
      theoryEn: `<h3>Welcome Eng. Bashar: From Silicon Physics to Global Cyber Telemetry!</h3>
<p class="lead">We assume zero prior background. We begin with fundamental computing hardware, binary encoding, and global signal transmission principles essential for SOC analysts.</p>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: العتاد والذاكرة تحت الهجوم</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف يفكر المهاجم؟ (Adversary Mindset)</h4>
    <ul>
      <li><strong>الهجمات المقيمة في الذاكرة فقط (Fileless Malware):</strong> يعلم المهاجم أن برامج مكافحة الفيروسات التقليدية تفحص الملفات المكتوبة على القرص الصلب (Hard Disk). لذلك يقوم بتشغيل كوده الخبيث مباشرة في الذاكرة العشوائية (RAM) عبر PowerShell أو حقن العمليات (Process Injection) حتى لا يترك أي أثر على القرص!</li>
      <li><strong>استنزاف الموارد (Resource Exhaustion / DoS):</strong> إغراق المعالج والذاكرة بسيل لا ينتهي من الطلبات غير المكتملة لشل خوادم الشركة ومنع المستخدمين الشرعيين من الوصول.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 كيف يدافع محلل الـ SOC؟ (SOC Defender Playbook)</h4>
    <ul>
      <li><strong>التحليل الجنائي للذاكرة (Live Memory Forensics):</strong> استخدام أدوات مثل Volatility لسحب نسخة كاملة من الرام (Memory Dump) واستخراج أكواد الهكر المشفرة وجلسات الاتصال النشطة وكلمات المرور المخزنة في الكاش.</li>
      <li><strong>مراقبة المقاييس الحيوية (Endpoint Telemetry):</strong> إعداد تنبيهات في الـ SIEM عند حدوث شذوذ عتادي، مثل إقلاع عملية مجهولة تستهلك 99% من المعالج في وقت متأخر من الليل.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Hardware & Memory Exploitation</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 1.1: فحص العتاد والذاكرة لاكتشاف الأنشطة الخبيثة</h4>
    <p>بصفتك محلل SOC، عندما يُشتبه في إصابة جهاز في شركتك، أول خطوة تقوم بها هي فحص استهلاك العتاد والعمليات المقيمة في الذاكرة.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-1-1">
      <div class="term-line output">BasharSec Hardware Telemetry Simulator v3.0</div>
      <div class="term-line output">Type 'wmic cpu' to inspect processor status, or 'get-process' to view memory footprint.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('wmic cpu get loadpercentage', 'lab-term-1-1')">wmic cpu get loadpercentage</button>
    <button class="btn-cmd" onclick="runSimCommand('tasklist /v /fi &quot;memusage gt 50000&quot;', 'lab-term-1-1')">tasklist high memory</button>
    <button class="btn-cmd" onclick="runSimCommand('systeminfo', 'lab-term-1-1')">systeminfo</button>
  </div>
</div>
      `,
      labEn: `<p>Hands-on hardware & memory inspection simulator.</p>`,
      ticket: {
        ticketId: "SEC-TICK-101",
        severity: "MEDIUM",
        severityClass: "medium",
        sourceHost: "FINANCE-PC-08.corp.local",
        timestamp: "2026-11-06 02:14:09 UTC",
        ruleTriggered: "EDR_HIGH_CPU_MEMORY_ANOMALY_OFF_HOURS",
        rawLog: `Event: ResourceAnomalyDetected
Host: FINANCE-PC-08.corp.local (10.140.20.18)
User: CORP\\m.tariq (Account Inactive - Employee on leave)
CPU_Load: 98.4% across 8 cores
ProcessName: svchost_update.exe (Path: C:\\Users\\Public\\svchost_update.exe)
ParentProcess: powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden -Enc WwBTAHkAcwB0...
MemoryCommitted: 1,420 MB RAM
DestinationConnection: 194.26.29.11:3333 (Stratum Mining Protocol / Monero Pool)`,
        questionAr: "بصفتك محلل الـ SOC المناوب، تفحص السجل الخام أعلاه. ما هو التقييم الدقيق لما يحدث على جهاز قسم المالية في الساعة 2 صباحاً؟",
        questionEn: "Analyze the raw log above. What is the accurate triage assessment for this finance endpoint at 2 AM?",
        optionsAr: [
          "تحديث روتيني مشروع لنظام ويندوز لأن اسم العملية يحتوي على svchost.",
          "برمجية خبيثة لتعدين العملات الرقمية (Cryptomining Malware) تتنكر باسم svchost في مجلد Public وتستغل كامل المعالج وتتصل بحوض تعدين Monero.",
          "الموظف طارق يعمل عن بعد لإجراء حسابات الميزانية السنوية.",
          "خطأ في كارت الشبكة أدى لارتفاع حرارة المعالج."
        ],
        optionsEn: [
          "Legitimate Windows OS patch update.",
          "Cryptomining malware masquerading as svchost in Public directory connecting to Monero mining pool.",
          "Employee running heavy Excel spreadsheets.",
          "Network card hardware failure."
        ],
        correctIndex: 1,
        explanationAr: "تحليل احترافي يا باشمهندس بشار! ثلاث أدلة حاسمة تكشف الهجوم: 1) مسار العملية C:\\Users\\Public وهو مسار مشبوه جداً لا تعمل منه عمليات ويندوز الرسمية. 2) العملية الأب هي PowerShell مشفر ومخفي (-WindowStyle Hidden). 3) الاتصال بالمنفذ 3333 ببروتوكول Stratum Mining وهو بروتوكول تعدين عملة مونيرو المشفرة، مما يفسر استهلاك 98.4% من المعالج.",
        explanationEn: "Spot on! Three conclusive indicators: 1) Path C:\\Users\\Public is classic staging path. 2) Parent process is hidden Base64 PowerShell. 3) Outbound connection to port 3333 running Stratum mining protocol."
      }
    },

    {
      id: "lesson-1-2",
      moduleId: "module1",
      number: "1.2",
      titleAr: "تشريح نموذج OSI والطبقات السبع ونموذج TCP/IP بالتفصيل الممل",
      titleEn: "Dissecting the OSI 7-Layer & TCP/IP Models: The Complete Packet Journey",
      duration: "60 min",
      theoryAr: `
<h3>دستور الشبكات العالمي: رحلة الحزمة من شاشتك إلى السيرفر!</h3>
<p class="lead">كل إنذار سيبراني تراه في الـ SOC يقع في إحدى طبقات نموذج OSI. إذا لم تكن تفهم الفرق بين حزمة في الطبقة الثالثة وإطار في الطبقة الثانية، فلن تستطيع تحديد مصدر الهجوم أبداً!</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: الشركة متعددة الأقسام والطرود البريدية</div>
  <p>تخيل شركة شحن دولية: عندما يريد عميل إرسال هدية إلى الصين:
  1. قسم خدمة العملاء يستلم الهدية ويكتب الرسالة المرفقة (طبقة التطبيقات L7).
  2. قسم التغليف يترجم الرسالة للغة الصينية ويغلف الهدية بالفقاعات الهوائية لحمايتها (طبقة العرض L6).
  3. قسم إدارة الشحنات يفتح ملف متابعة ورقم بوليصة شحن لتتبع التسليم (طبقة الجلسة L5).
  4. قسم الفرز يقطع الصناديق الكبيرة إلى طرود بوزن قياسي لا يزيد عن 1500 جرام ويرقمها 1/3 و 2/3 و 3/3 (طبقة النقل L4).
  5. قسم التوجيه يكتب عنوان الشارع والدولة للراسل والمستلم على كل طرد (طبقة الشبكة L3).
  6. قسم النقل الداخلي ينقل الطرود داخل مستودعات الشاحنات باستخدام باركود الحاويات (طبقة ربط البيانات L2).
  7. الشاحنات والطائرات تنقل الحاويات فيزيائياً عبر الطرق والجو (الطبقة الفيزيائية L1).</p>
</div>

<h4>الطبقات السبع بالتفصيل الهندسي وماذا يحدث في كل طبقة:</h4>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>الطبقة</th>
        <th>الاسم الهندسي</th>
        <th>اسم وحدة البيانات (PDU)</th>
        <th>الترويسة المضافة (Header)</th>
        <th>الوظيفة والبروتوكولات</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Layer 7</strong></td>
        <td>Application (التطبيقات)</td>
        <td>Data</td>
        <td>Application Data / Payload</td>
        <td>الواجهة المباشرة مع البرامج والمتصفح: HTTP, HTTPS, DNS, SMTP, FTP, SSH.</td>
      </tr>
      <tr>
        <td><strong>Layer 6</strong></td>
        <td>Presentation (العرض)</td>
        <td>Data</td>
        <td>Encryption / Encoding Header</td>
        <td>تشفير وفك تشفير البيانات (SSL/TLS)، وضغط البيانات وتنسيق الصور والنصوص.</td>
      </tr>
      <tr>
        <td><strong>Layer 5</strong></td>
        <td>Session (الجلسة)</td>
        <td>Data</td>
        <td>Session ID</td>
        <td>بدء وإدارة وإنهاء جلسات المحادثة والتحقق من استمرار الاتصال بين الطرفين (NetBIOS, RPC).</td>
      </tr>
      <tr>
        <td><strong>Layer 4</strong></td>
        <td>Transport (النقل)</td>
        <td>Segment (قطع)</td>
        <td>TCP / UDP Header</td>
        <td>إضافة أرقام المنافذ (Source Port & Destination Port) وضمان سلامة النقل والتحكم بالتدفق.</td>
      </tr>
      <tr>
        <td><strong>Layer 3</strong></td>
        <td>Network (الشبكة)</td>
        <td>Packet (حزمة)</td>
        <td>IP Header</td>
        <td>إضافة العناوين المنطقية (Source IP & Destination IP) والتوجيه الجغرافي عبر أجهزة الراوتر.</td>
      </tr>
      <tr>
        <td><strong>Layer 2</strong></td>
        <td>Data Link (ربط البيانات)</td>
        <td>Frame (إطار)</td>
        <td>Ethernet Header + Trailer (FCS)</td>
        <td>إضافة العناوين الفيزيائية (Source MAC & Destination MAC) واكتشاف أخطاء النقل (CRC/FCS).</td>
      </tr>
      <tr>
        <td><strong>Layer 1</strong></td>
        <td>Physical (الفيزيائية)</td>
        <td>Bits (0 و 1)</td>
        <td>لا يوجد (Preamble)</td>
        <td>تحويل كل شيء لنبضات كهربائية، ومضات ضوئية، أو موجات كهرومغناطيسية عبر الأسلاك والهواء.</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>مفهوم التغليف وفك التغليف (Encapsulation vs Decapsulation):</h4>
<p>عندما ترسل رسالة "Hello"، تبدأ من الطبقة 7 كبيانات نقية. كل طبقة تنزل إليها الرسالة تضيف إليها "غلافاً" جديداً يحتوي على معلومات التحكم الخاصة بها (Header). هذه العملية تسمى <strong>Encapsulation</strong>. وعندما تصل الرسالة للطرف الآخر، يقوم بنزع الأغلفة طبقة تلو الأخرى حتى يستخرج الرسالة الأصلية <strong>Decapsulation</strong>!</p>

<pre class="ascii-flow">
[ Application Data: "Hello" ]
       ↓ L4 Encapsulation
[ TCP Port 443 | "Hello" ]  --> Segment
       ↓ L3 Encapsulation
[ IP: 192.168.1.10 -> 142.250.190.46 | TCP | "Hello" ]  --> Packet
       ↓ L2 Encapsulation
[ MAC: AA:BB:CC -> DD:EE:FF | IP | TCP | "Hello" | FCS Checksum ]  --> Frame
       ↓ L1 Transmission
01001000 01100101 01101100 01101100 01101111  --> Bits
</pre>
      `,
      theoryEn: `<h3>Universal Networking Doctrine: OSI 7-Layer & TCP/IP Architecture</h3>`,
      attackDefenseAr: `
<h3>خريطة الهجمات السيبرانية بحسب طبقات OSI: أين يضرب الهكر؟</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 ترسانة المهاجم بحسب الطبقة</h4>
    <ul>
      <li><strong>هجمات L7 (Application):</strong> حقن قواعد البيانات SQL Injection، هجمات Cross-Site Scripting (XSS)، وهجمات الـ DDoS على خوادم الويب بطلبات HTTP Flood.</li>
      <li><strong>هجمات L4 (Transport):</strong> فحص المنافذ المخفي SYN Scanning، هجمات استنزاف اتصالات TCP SYN Flood.</li>
      <li><strong>هجمات L3 (Network):</strong> تزييف عناوين IP Spoofing، هجمات ICMP Smurf Flood، واعتراض مسارات BGP.</li>
      <li><strong>هجمات L2 (Data Link):</strong> تسميم جدول العناوين ARP Poisoning للتجسس على الأجهزة الداخلية (Man-in-the-Middle)، وهجمات MAC Flooding لإغراق السويتش.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 أدوات ورادارات المدافع في كل طبقة</h4>
    <ul>
      <li><strong>دفاعات L7:</strong> جدار حماية تطبيقات الويب (WAF) وفحص سجلات خوادم Nginx / IIS.</li>
      <li><strong>دفاعات L4 & L3:</strong> الجدران النارية التقليدية (Stateful Firewalls) وقواعد Access Control Lists (ACLs) وأنظمة NetFlow.</li>
      <li><strong>دفاعات L2:</strong> تفعيل ميزات الأمان على السويتش مثل Dynamic ARP Inspection (DAI) و Port Security و DHCP Snooping.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Mapping Attacks across OSI Layers</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 1.2: تتبع تغليف الحزمة وتتبع المسار (Traceroute & Frame Inspection)</h4>
    <p>سنستخدم سطر الأوامر لتتبع رحلة الحزمة عبر الطبقات ورصد القفزات (Hops) التي تعبرها حزمتك للوصول للهدف.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-1-2">
      <div class="term-line output">BasharSec OSI Telemetry Console</div>
      <div class="term-line output">Type 'traceroute 8.8.8.8' or 'arp -a' to explore L2/L3 mappings.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('traceroute 8.8.8.8', 'lab-term-1-2')">traceroute 8.8.8.8</button>
    <button class="btn-cmd" onclick="runSimCommand('arp -a', 'lab-term-1-2')">arp -a (Inspect L2 Frames)</button>
    <button class="btn-cmd" onclick="runSimCommand('netstat -r', 'lab-term-1-2')">netstat -r (Routing Table)</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Traceroute and Frame analysis simulation.</p>`,
      ticket: {
        ticketId: "SEC-TICK-102",
        severity: "CRITICAL",
        severityClass: "critical",
        sourceHost: "CORE-SW-01 (VLAN 10)",
        timestamp: "2026-11-06 04:32:15 UTC",
        ruleTriggered: "SWITCH_PORT_SECURITY_MAC_FLAPPING_DETECTED",
        rawLog: `TIMESTAMP: 2026-11-06 04:32:15.221
SWITCH: CORE-SW-01 (Cisco Catalyst 9300)
LOG_ID: %SW_MATM-4-MACFLAP_NOTIF: Host 00:0c:29:8b:4a:11 in vlan 10 is flapping between port Gi1/0/4 and port Gi1/0/18
VLAN: 10 (Corporate Finance)
ARP_TELEMETRY:
Sender MAC: 00:0c:29:8b:4a:11 claimed IP: 10.140.10.1 (Default Gateway Router)
Legitimate Gateway MAC: 00:50:56:fd:aa:01
Packets: Gratuitous ARP Broadcasts (Rate: 350 pkts/sec)`,
        questionAr: "تفحص سجل السويتش وحزم الـ ARP أعلاه. في أي طبقة من طبقات OSI يقع هذا الهجوم وما نوعه الدقيق؟",
        questionEn: "Analyze the switch log above. In which OSI layer does this attack operate and what is its exact nature?",
        optionsAr: [
          "هجوم SQL Injection في الطبقة السابعة (Application Layer).",
          "هجوم ARP Poisoning / Spoofing في الطبقة الثانية (Data Link Layer) حيث ينتحل جهاز مهاجم شخصية الراوتر لقطع أو اعتراض الاتصالات (Man-in-the-Middle).",
          "عطل طبيعي في كابل السويتش الفيزيائي في الطبقة الأولى.",
          "تحديث مجدول لقاعدة بيانات خادم الدليل النشط."
        ],
        optionsEn: [
          "SQL Injection at Layer 7.",
          "ARP Poisoning / Spoofing at Layer 2 (Data Link) conducting Man-in-the-Middle.",
          "Physical cable fault at Layer 1.",
          "Routine DNS update."
        ],
        correctIndex: 1,
        explanationAr: "إجابة عبقرية يا باشمهندس بشار! هذا هجوم كلاسيكي في الطبقة الثانية (Layer 2 - Data Link). لاحظ أن عنوان MAC خبيث (00:0c:29:8b:4a:11 - خاص بجهاز VMware مهاجم) يرسل حزم Gratuitous ARP بكثافة ليدعي كذباً أنه يحمل IP الراوتر الافتراضي (10.140.10.1). السويتش أطلق تنبيه MAC Flapping لأن العنوان يتنقل بين منفذين بسرعة، والهدف هو توجيه كامل حركة مرور الموظفين عبر جهاز المهاجم للتجسس عليها!",
        explanationEn: "Spot-on triage! Classical Layer 2 Data Link attack. A rogue MAC is spamming Gratuitous ARPs claiming the IP of the default gateway to hijack LAN traffic."
      }
    },

    {
      id: "lesson-1-3",
      moduleId: "module1",
      number: "1.3",
      titleAr: "عناوين IPv4 والـ MAC Address والـ Subnetting من الصفر المطلق",
      titleEn: "IPv4 Addressing, MAC Addresses, and Subnetting from Scratch",
      duration: "55 min",
      theoryAr: `
<h3>كيف تُقسم الشبكات ولماذا لا نضع الجميع في سلة واحدة؟</h3>
<p class="lead">إذا وضعت 500 موظف في نفس الشبكة بدون تقسيم، فإن فايروساً واحداً في جهاز موظف الاستقبال سيبيد خوادم البنك المركزية في 3 ثوانٍ! هنا تكمن قوة الـ Subnetting وعناوين الـ IP.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: المدينة والضواحي والأبواب المغلقة</div>
  <p>تخيل مدينة ضخمة بدون شوارع وبدون أسوار؛ كل البيوت مفتوحة على ساحة واحدة عملاقة. إذا صرخ شخص في أقصى اليمين، سيسمعه الجميع وينزعجون (Broadcast Storm). وإذا دخل لص، سيسرق كل البيوت بلا أي حاجز أمني!</p>
  <p>المهندسون يقسمون المدينة إلى ضواحي منفصلة: ضاحية سكنية، ضاحية مالية، وضاحية حكومية. بين كل ضاحية وأخرى توجد بوابة أمنية بنقاط تفتيش (Firewall / Router). هذا التوزيع الهندسي في عالم الحواسيب هو ما نسميه <strong>تقسيم الشبكات (Subnetting)</strong>.</p>
</div>

<h4>1. تشريح عنوان IPv4:</h4>
<p>يتكون عنوان IPv4 من 32 بت، مقسمة إلى 4 خانات تفصل بينها نقاط تسمى <strong>Octets</strong> (ثمانيات)، لأن كل خانة تحتوي على 8 بت من 0 إلى 255 (مثل: <code>192.168.10.45</code>).</p>
<p>كل عنوان IP ينقسم إلى جزئين:</p>
<ul>
  <li><strong>معرف الشبكة (Network ID):</strong> اسم الحي أو الشارع الذي تشترك فيه جميع أجهزة هذا القسم.</li>
  <li><strong>معرف الجهاز (Host ID):</strong> رقم الشقة الخاص بجهاز معين داخل ذلك الشارع.</li>
</ul>

<h4>2. الفرق الحاسم بين العناوين الخاصة والعامة (Private vs Public IP):</h4>
<p>بسبب نفاد عناوين IPv4 حول العالم، تم تخصيص نطاقات خاصة محددة في المعيار الدولي <strong>RFC 1918</strong> للاستخدام داخل الشركات والمنازل مجاناً، ولا يمكن توجيهها عبر الإنترنت العام نهائياً:</p>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>الفئة (Class)</th>
        <th>نطاق العناوين الخاصة (RFC 1918 Private Range)</th>
        <th>الاستخدام المعتاد في الشركات</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Class A</strong></td>
        <td><code>10.0.0.0</code> إلى <code>10.255.255.255</code> (قناع /8)</td>
        <td>الشركات العملاقة والبنوك والمؤسسات متعددة الفروع (توفر ملايين العناوين).</td>
      </tr>
      <tr>
        <td><strong>Class B</strong></td>
        <td><code>172.16.0.0</code> إلى <code>172.31.255.255</code> (قناع /12)</td>
        <td>الجامعات والشركات متوسطة الحجم والمستشفيات.</td>
      </tr>
      <tr>
        <td><strong>Class C</strong></td>
        <td><code>192.168.0.0</code> إلى <code>192.168.255.255</code> (قناع /16)</td>
        <td>راوترات المنازل والمكاتب الصغيرة (SOHO Networks).</td>
      </tr>
      <tr>
        <td><strong>Loopback</strong></td>
        <td><code>127.0.0.1</code> (Localhost)</td>
        <td>عنوان الجهاز نفسه داخلياً لاختبار البرامج وخدمات النظام المحلية.</td>
      </tr>
      <tr>
        <td><strong>APIPA</strong></td>
        <td><code>169.254.0.0</code> إلى <code>169.254.255.255</code></td>
        <td>عنوان طوارئ يضعه ويندوز تلقائياً عندما يفشل في الوصول لخادم DHCP!</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>3. ما هو قناع الشبكة (Subnet Mask و CIDR Notation)؟</h4>
<p>قناع الشبكة يخبر الراوتر والكمبيوتر أين ينتهي اسم الشارع وأين يبدأ رقم الشقة. عندما ترى <code>/24</code> (وهي المقابلة لـ <code>255.255.255.0</code>)، فهذا يعني أن أول 24 بت مخصصة للشبكة وآخر 8 بت مخصصة للأجهزة (تتسع لـ 254 جهازاً فعالاً).</p>
      `,
      theoryEn: `<h3>IPv4 Architecture, Private vs Public Ranges, Subnetting & CIDR</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: العزل الشبكي والحركة الجانبية</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف يستغل الهكر ضعف تقسيم الشبكات؟</h4>
    <ul>
      <li><strong>الحركة الجانبية الحرة (Lateral Movement):</strong> إذا كانت شبكة الشركة "مسطحة" (Flat Network بدون Subnets)، فإن المهاجم بمجرد اختراق جهاز عامل نظافة أو كمبيوتر كافتيريا يستطيع الاتصال المباشر بخادم الـ Domain Controller أو خوادم قواعد البيانات بدون أي اعتراض!</li>
      <li><strong>تجاوز العزل (VLAN Hopping):</strong> استغلال أخطاء تكوين منافذ الـ Trunk على السويتش للقفز من شبكة الزوار (Guest Wi-Fi) إلى شبكة الإدارة الحساسة.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 كيف يدافع محلل الـ SOC عبر التقسيم الدقيق؟</h4>
    <ul>
      <li><strong>التقسيم المجهري (Micro-segmentation):</strong> عزل خوادم الدفع والمالية في شبكة فرعية لا تقبل أي اتصال شبكي إلا من أجهزة مدراء محددين وعبر منافذ مشفرة.</li>
      <li><strong>رصد الاتصالات العابرة للشبكات (Inter-VLAN Anomaly Detection):</strong> إطلاق إنذار فوري إذا حاول جهاز في شبكة الـ HR فتح اتصال SMB (بورت 445) مع جهاز في شبكة التطوير.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Lateral Movement vs Network Segmentation</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 1.3: فحص بطاقات الشبكة وحساب الـ Subnets</h4>
    <p>تدرب على استخراج عناوين IP وقناع الشبكة والـ Gateway باستخدام أوامر التحقيق.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-1-3">
      <div class="term-line output">Subnet & IP Inspector Shell</div>
      <div class="term-line output">Type 'ipconfig /all' or 'route print' to review network configurations.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('ipconfig /all', 'lab-term-1-3')">ipconfig /all</button>
    <button class="btn-cmd" onclick="runSimCommand('route print', 'lab-term-1-3')">route print</button>
    <button class="btn-cmd" onclick="runSimCommand('ping 127.0.0.1', 'lab-term-1-3')">ping localhost</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive IP Configuration and Routing verification.</p>`,
      ticket: {
        ticketId: "SEC-TICK-103",
        severity: "HIGH",
        severityClass: "high",
        sourceHost: "GUEST-WIFI-AP02",
        timestamp: "2026-11-06 11:20:44 UTC",
        ruleTriggered: "FIREWALL_POLICY_VIOLATION_GUEST_TO_DMZ_PROBE",
        rawLog: `SRC_ZONE: Guest-Wireless (Subnet: 172.30.50.0/24)
SRC_IP: 172.30.50.119 (Asset: Unknown-Android-Device)
DST_ZONE: Corporate-Core-DB (Subnet: 10.140.100.0/24)
DST_IP: 10.140.100.25 (Oracle Financial DB Server)
DST_PORT: 1521 (Oracle SQL*Net)
ACTION: REJECT (Firewall Rule #440 - Block Guest Inter-VLAN)
EVENT_COUNT: 48 connection attempts in 12 seconds`,
        questionAr: "بصفتك محلل SOC، ما هو تحليلك لطلب الاتصال هذا بين النطاقين 172.30.50.0/24 و 10.140.100.0/24؟",
        questionEn: "As a SOC Analyst, how do you triage this connection attempt between these subnets?",
        optionsAr: [
          "تطبيق عادي يقوم بتحديث بيانات الهاتف من خادم أوراكل العام.",
          "محاولة اختراق أو استكشاف داخلي من جهاز متصل بشبكة واي فاي الضيوف يحاول الوصول المباشر لخادم قاعدة البيانات المالية للشركة، ويجب التحقيق في هوية المتصل وعزل الجهاز.",
          "خطأ في خادم DHCP أدى لمنح الهاتف عنواناً خاطئاً.",
          "اتصال سليم لأن كلا العنوانين يقعان في فئات العناوين العامة على الإنترنت."
        ],
        optionsEn: [
          "Normal phone app update.",
          "Internal reconnaissance from guest Wi-Fi targeting sensitive financial DB server.",
          "DHCP misconfiguration.",
          "Legitimate public Internet traffic."
        ],
        correctIndex: 1,
        explanationAr: "تحليل سليم يا باشمهندس بشار! شبكة واي فاي الضيوف (Guest Wi-Fi) يجب أن تذهب مباشرة للإنترنت فقط. قيام جهاز مجهول على شبكة الضيوف بطلب الاتصال بالمنفذ 1521 (قاعدة بيانات أوراكل المالية في الـ Core DB) هو محاولة استكشاف أو اختراق صريحة للحركة الجانبية، ولحسن الحظ قام الجدار الناري برفض الاتصال بناءً على قاعدة منع الـ Inter-VLAN.",
        explanationEn: "Correct verdict! Guest wireless clients must only egress to the Internet. Direct probes toward internal Oracle DB port 1521 indicate malicious internal recon."
      }
    },

    {
      id: "lesson-1-4",
      moduleId: "module1",
      number: "1.4",
      titleAr: "المنافذ (Ports) وبروتوكولات النقل TCP vs UDP والمصافحة الثلاثية",
      titleEn: "Ports, Transport Protocols TCP vs UDP, Three-Way Handshake & Flags",
      duration: "65 min",
      theoryAr: `
<h3>أبواب السيرفر وأعلام الاتصال: كيف يقرأ محلل الـ SOC تفاصيل المصافحة؟</h3>
<p class="lead">الـ IP يوصلك للمبنى، لكن المنفذ (Port) يدخلك إلى الغرفة المطلوبة! وفوق ذلك، تحدد رايات TCP Flags نية المتصل: هل يريد إنشاء علاقة شرعية، أم يختبر ما إذا كان الباب مفتوحاً ثم يفر هارباً؟</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: المكالمة الهاتفية مقابل الرسالة في زجاجة</div>
  <p><strong>بروتوكول TCP (Transmission Control Protocol):</strong> مثل المكالمة الهاتفية. أنت تتصل وتقول "ألو؟" (SYN)، فيرد عليك الطرف الآخر "أهلاً، أسمعك جيداً" (SYN-ACK)، فتقول له "ممتاز، لنبدأ الحديث" (ACK). الاتصال موثوق ومؤكد بنسبة 100%، وإذا سقطت أي كلمة في الطريق يعاد إرسالها تلقائياً.</p>
  <p><strong>بروتوكول UDP (User Datagram Protocol):</strong> مثل رمي رسالة في زجاجة في البحر أو إرسال بث تلفزيوني مباشر! يرسل البيانات بأقصى سرعة ممكنة بدون التأكد هل استلمتها أم لا. مناسب للبث المباشر وألعاب الفيديو ومكالمات الفيديو حيث السرعة أهم من الدقة.</p>
</div>

<h4>1. تشريح المصافحة الثلاثية لـ TCP (TCP 3-Way Handshake):</h4>
<p>أي اتصال TCP في العالم (سواء فتح موقع، إرسال إيميل، أو اتصال SSH) يبدأ بهذه الخطوات الثلاث الحتمية:</p>

<pre class="ascii-flow">
العميل (Client)                                السيرفر (Server)
    |                                                |
    | -------- 1. [SYN] Seq=1000 -----------------> |  (مرحباً، أريد بدء جلسة معك)
    |                                                |
    | <------- 2. [SYN, ACK] Seq=5000, Ack=1001 --- |  (أهلاً بك، قبلت دعوتك، وهذا تسلسلي)
    |                                                |
    | -------- 3. [ACK] Ack=5001 -----------------> |  (تم التأكيد، لنبدأ تبادل البيانات!)
    |                                                |
    | <======== [DATA TRANSFER VIA HTTPS/SSH] =====> |
</pre>

<h4>2. الأعلام الستة الحاكمة لبروتوكول TCP (TCP Flags):</h4>
<p>في ترويسة حزمة الـ TCP، توجد 6 رايات (Flags) يقرأها محلل الـ SOC ليكتشف الهجمات وفحص المنافذ:</p>
<ul>
  <li><strong>SYN (Synchronize):</strong> طلب فتح اتصال جديد وبدء المصافحة.</li>
  <li><strong>ACK (Acknowledgment):</strong> تأكيد استلام حزمة سابقة بنجاح.</li>
  <li><strong>FIN (Finish):</strong> إغلاق الجلسة باحترام وتراضٍ بين الطرفين بعد انتهاء نقل البيانات.</li>
  <li><strong>RST (Reset):</strong> قطع الاتصال الفوري بالقوة! (يظهر عندما يكون المنفذ مغلقاً أو عند حدوث خطأ أو عند رغبة الهكر في التهرب).</li>
  <li><strong>PSH (Push):</strong> إجبار النظام على تمرير البيانات للتطبيق فوراً دون الانتظار لملء الذاكرة المؤقتة.</li>
  <li><strong>URG (Urgent):</strong> تشير إلى أن البيانات الحالية ذات أولوية قصوى وتتطلب معالجة فورية.</li>
</ul>

<h4>3. أشهر المنافذ الحيوية التي يجب أن يحفظها محلل الـ SOC عن ظهر قلب:</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>رقم المنفذ</th>
        <th>البروتوكول</th>
        <th>نوع النقل</th>
        <th>الوظيفة والأهمية الأمنية</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>21</strong></td><td>FTP</td><td>TCP</td><td>نقل الملفات غير المشفر (Cleartext passwords).</td></tr>
      <tr><td><strong>22</strong></td><td>SSH / SFTP</td><td>TCP</td><td>إدارة السيرفرات الآمنة والوصول الطرفي المشفر.</td></tr>
      <tr><td><strong>23</strong></td><td>Telnet</td><td>TCP</td><td>بروتوكول إدارة قديم وغير مشفر نهائياً (ممنوع في الشركات).</td></tr>
      <tr><td><strong>25</strong></td><td>SMTP</td><td>TCP</td><td>نقل رسائل البريد الإلكتروني بين الخوادم.</td></tr>
      <tr><td><strong>53</strong></td><td>DNS</td><td>UDP / TCP</td><td>استعلامات أسماء النطاقات (UDP للاستعلامات، TCP لنقل الزون).</td></tr>
      <tr><td><strong>80</strong></td><td>HTTP</td><td>TCP</td><td>تصفح الويب العادي غير المشفر.</td></tr>
      <tr><td><strong>88</strong></td><td>Kerberos</td><td>TCP / UDP</td><td>قلب توثيق الـ Active Directory في الشركات (هدف Kerberoasting).</td></tr>
      <tr><td><strong>135</strong></td><td>RPC Endpoint</td><td>TCP</td><td>إدارة ويندوز البعيدة وتشغيل الأوامر (هدف استغلال دائم).</td></tr>
      <tr><td><strong>389</strong></td><td>LDAP</td><td>TCP / UDP</td><td>الاستعلام عن مستخدمي وأجهزة الدليل النشط.</td></tr>
      <tr><td><strong>443</strong></td><td>HTTPS</td><td>TCP</td><td>تصفح الويب المشفر بـ SSL/TLS.</td></tr>
      <tr><td><strong>445</strong></td><td>SMB</td><td>TCP</td><td>مشاركة الملفات في ويندوز (هدف هجمات EternalBlue و WannaCry).</td></tr>
      <tr><td><strong>3389</strong></td><td>RDP</td><td>TCP</td><td>سطح المكتب البعيد لويندوز (هدف شائع جداً لهجمات Brute Force).</td></tr>
    </tbody>
  </table>
</div>
      `,
      theoryEn: `<h3>TCP vs UDP, Three-Way Handshake, TCP Control Flags & Critical Ports</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: صيد فحص المنافذ والتلاعب بالأعلام</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 حيل الهكر في فحص المنافذ</h4>
    <ul>
      <li><strong>فحص النصف مصافحة (TCP SYN Stealth Scan - Nmap -sS):</strong> يرسل المهاجم SYN، فإذا رد السيرفر بـ SYN-ACK (مما يعني أن المنفذ مفتوح)، يرسل المهاجم RST فوراً لقطع الاتصال دون إكمال المصافحة الثلاثية! الهدف: عدم تسجيل جلسة كاملة في سجلات التطبيقات القديمة.</li>
      <li><strong>الفحص الشبح (XMAS Scan - Nmap -sX):</strong> إرسال حزم تحمل أعلام (FIN, URG, PSH) مشتعلة معاً كشجرة عيد الميلاد! إذا لم يرد الجهاز فالبورت مفتوح؛ أسلوب مبتكر لتجاوز الجدران النارية غير الذكية.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 كيف يكتشف محلل الـ SOC هذه الأنماط؟</h4>
    <ul>
      <li><strong>رصد نسبة SYN إلى ACK:</strong> في الترافيك الطبيعي، عدد حزم SYN يقارب عدد حزم ACK. إذا رأيت في Wireshark أو الـ SIEM آلاف حزم SYN بدون أي ACK مكمل، فهذا دليل قاطع على فحص منافذ جاري بواسطة Nmap أو أداة مسح آلية.</li>
      <li><strong>قواعد رصد الـ Port Scan في الـ Firewall:</strong> تنبيه فوري عند قيام IP واحد بإرسال حزم لأكثر من 20 منفذاً مختلفاً في أقل من دقيقة.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Port Scanning Techniques vs SOC Telemetry Rules</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 1.4: فحص المنافذ النشطة وتحليل اتصالات TCP</h4>
    <p>استخدم أوامر Netstat و Nmap لمحاكاة فحص المنافذ والتحقق من حالة الاتصالات (ESTABLISHED, LISTENING, TIME_WAIT).</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-1-4">
      <div class="term-line output">BasharSec Port & Flag Telemetry Console</div>
      <div class="term-line output">Type 'netstat -ano' or 'nmap-scan 10.140.10.5' to inspect ports.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('netstat -ano', 'lab-term-1-4')">netstat -ano</button>
    <button class="btn-cmd" onclick="runSimCommand('nmap-scan 10.140.10.5', 'lab-term-1-4')">nmap -sS 10.140.10.5</button>
    <button class="btn-cmd" onclick="runSimCommand('ss -tulnp', 'lab-term-1-4')">ss -tulnp</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive TCP Port & Connection state analysis.</p>`,
      ticket: {
        ticketId: "SEC-TICK-104",
        severity: "HIGH",
        severityClass: "high",
        sourceHost: "EDGE-FW-01",
        timestamp: "2026-11-06 14:05:33 UTC",
        ruleTriggered: "IDS_ALERT_TCP_HALF_OPEN_SYN_SCAN",
        rawLog: `ALERT: ET SCAN Potential Nmap SYN Scan
SRC_IP: 198.51.100.77 (External Host - Netherlands)
DST_IP: 203.0.113.10 (Corporate Edge Public IP)
PROTO: TCP
TCP_FLAGS: SYN (0x02) [Ack=0, Fin=0, Rst=0]
TARGET_PORTS_PROBED: 21, 22, 23, 25, 53, 80, 110, 135, 139, 443, 445, 1433, 3306, 3389, 8080 (1,000 top ports)
DURATION: 2.8 seconds
SUBSEQUENT_PACKET_FROM_SRC: RST (Reset sent immediately upon receiving SYN-ACK)`,
        questionAr: "تظهر تفاصيل سجل الـ IDS فحصاً من IP هولندي لـ 1,000 منفذ خلال أقل من 3 ثوانٍ مع إرسال حزم RST بعد كل SYN-ACK. ما هو التوصيف المهني الدقيق لهذا الحدث؟",
        questionEn: "IDS telemetry shows probing of 1,000 ports in under 3s with immediate RSTs upon SYN-ACKs. What is the accurate assessment?",
        optionsAr: [
          "فحص منافذ خفي من نوع TCP SYN Stealth Scan بهدف اكتشاف الخدمات المفتوحة في جدار الحماية دون إكمال جلسات TCP.",
          "تنزيل ملفات ضخمة عبر بروتوكول تورنت من هولندا.",
          "طلب تصفح عادي لموقع الويب الخاص بالشركة.",
          "عطل مؤقت في سيرفر البريد الإلكتروني."
        ],
        optionsEn: [
          "TCP SYN Stealth Scan mapping perimeter attack surface.",
          "Torrent traffic from Netherlands.",
          "Standard web browsing request.",
          "Mail server temporary outage."
        ],
        correctIndex: 0,
        explanationAr: "إجابة نموذجية يا باشمهندس بشار! هذا هو التوقيع الرقمي الخالص لـ Nmap Stealth SYN Scan (-sS): حزم SYN فقط موجهة لأشهر 1000 منفذ بسرعة عالية، مع إرسال RST فوراً عند رد السيرفر بـ SYN-ACK لتجنب تسجيل جلسة كاملة في التطبيق. الإجراء: حظر الـ IP في الجدار الناري والتأكد من إغلاق المنافذ الحساسة (مثل 445 و 3389) من جهة الإنترنت.",
        explanationEn: "Conclusive assessment! Hallmarks of an automated Nmap TCP SYN Half-Open scan probing top ports in seconds."
      }
    },

    {
      id: "lesson-1-5",
      moduleId: "module1",
      number: "1.5",
      titleAr: "البروتوكولات الأساسية وكيف تُخترق: DNS و DHCP و ARP",
      titleEn: "Core Infrastructure Protocols & Exploitation: DNS, DHCP, and ARP",
      duration: "65 min",
      theoryAr: `
<h3>العمود الفقري لأي شبكة: كيف تُدار العناوين وكيف يستغلها القراصنة؟</h3>
<p class="lead">بدون DNS لا يمكنك فتح أي موقع، وبدون DHCP لا يمكنك أخذ عنوان، وبدون ARP لا تفهم كروت الشبكة بعضها! ولأن هذه البروتوكولات اختُرعت في عصر البراءة ولم تكن تحتوي على أي تشفير أو مصادقة، فهي الملعب المفضل للمهاجمين.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: دفتر الهاتف، وموظف الاستقبال، والمنادي</div>
  <p><strong>1. الـ DNS:</strong> دفتر الهاتف. أنت تسأل: ما هو رقم هاتف 'السفارة'؟ فيجيبك: <code>142.250.190.46</code>.</p>
  <p><strong>2. الـ DHCP:</strong> موظف الاستقبال في الفندق. كلما دخل نزيل جديد، يعطيه مفتاح غرفة (IP Address) وإرشادات الفندق (Subnet Mask و Gateway و DNS).</p>
  <p><strong>3. الـ ARP:</strong> المنادي في قاعة المؤتمرات. يصرخ بصوت عالٍ: "يا حامل الرقم القومي الفلاني، أين تجلس؟" لكي يتمكن من تسليمه المظروف باليد.</p>
</div>

<h4>1. بروتوكول DNS (Domain Name System):</h4>
<p>يعمل على المنفذ <strong>Port 53</strong>. عندما تكتب <code>google.com</code>، يمر استعلامك بسلسلة هرمية تبدأ من Root DNS Servers، ثم TLD Servers (.com)، ثم خادم النطاق المعتمد (Authoritative DNS Server) ليعيد لك عنوان الـ IP.</p>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>نوع سجل الـ DNS (Record Type)</th>
        <th>الوظيفة والبيانات التي يحملها</th>
        <th>الاستغلال الأمني الشائع</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>A Record</strong></td>
        <td>يربط اسم النطاق بعنوان IPv4 (مثل <code>app.corp.com -> 10.140.5.20</code>).</td>
        <td>DNS Poisoning لتوجيه الضحايا لسيرفر تصيد مزيف.</td>
      </tr>
      <tr>
        <td><strong>AAAA Record</strong></td>
        <td>يربط اسم النطاق بعنوان IPv6.</td>
        <td>استغلال هجمات IPv6 DNS Takeover في ويندوز.</td>
      </tr>
      <tr>
        <td><strong>MX Record</strong></td>
        <td>يحدد خوادم استلام البريد الإلكتروني (Mail Exchange).</td>
        <td>استهداف مسار الرسائل وهجمات اعتراض الإيميلات.</td>
      </tr>
      <tr>
        <td><strong>TXT Record</strong></td>
        <td>يحمل نصوصاً عادية وقواعد أمان البريد (SPF, DKIM, DMARC).</td>
        <td><strong>DNS Tunneling & Data Exfiltration:</strong> يستغله المهاجمون لتسريب البيانات المسروقة أو إرسال أوامر الـ C2 مشفرة بداخل نصوص الـ TXT!</td>
      </tr>
      <tr>
        <td><strong>PTR Record</strong></td>
        <td>البحث العكسي: تحويل عنوان الـ IP إلى اسم نطاق.</td>
        <td>فحص هوية الأجهزة في سجلات التحقيق الأمني.</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>2. بروتوكول DHCP ومراحل المصافحة الرباعية (DORA):</h4>
<p>يعمل على منفذي <strong>UDP 67 (السيرفر)</strong> و <strong>UDP 68 (العميل)</strong> عبر 4 رسائل متسلسلة:</p>
<ol>
  <li><strong>Discover:</strong> العميل يصرخ بالبث العام: "هل يوجد خادم DHCP هنا ليعطيني عنواناً؟"</li>
  <li><strong>Offer:</strong> خادم الـ DHCP يرد: "لدي عنوان متاح لك هو <code>192.168.1.50</code>".</li>
  <li><strong>Request:</strong> العميل يؤكد: "أقبل هذا العنوان، يرجى حجزه لي".</li>
  <li><strong>Acknowledge (ACK):</strong> الخادم يثبت العنوان مع مدة الإيجار (Lease Time) والـ Gateway.</li>
</ol>
      `,
      theoryEn: `<h3>Core Protocols Infrastructure & Threat Vectors: DNS, DHCP & ARP</h3>`,
      attackDefenseAr: `
<h3>هجمات البروتوكولات الأساسية وكيف يصطادها محلل الـ SOC:</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 هجمات المهاجمين</h4>
    <ul>
      <li><strong>تسريب البيانات عبر الـ DNS (DNS Exfiltration & Tunneling):</strong> بما أن جدران الحماية تسمح بمرور حركة الـ DNS (بورت 53) دون قيود، يقوم فايروس الفدية بتشفير الملفات المسروقة وتقطيعها ثم إرسالها كاستعلامات فرعية لدومين المهاجم مثل <code>aW52b2ljZS5wZGY=.evil-c2.com</code>!</li>
      <li><strong>خادم DHCP المزيف (Rogue DHCP Server):</strong> تشغيل جهاز مهاجم داخل الشبكة يقوم بالرد على أجهزة الموظفين قبل خادم الشركة الرسمي، ويعطيهم عنوان الـ Gateway مشيراً لجهاز المهاجم لاعتراض كامل حركة المرور!</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 دفاعات ومؤشرات محلل الـ SOC</h4>
    <ul>
      <li><strong>كشف الـ DNS Tunneling في السجلات:</strong> مراقبة طلبات DNS غير الطبيعية: أسماء نطاقات طويلة جداً (أكثر من 50 حرفاً)، استخدام أحرف Base64/Hex، وكثافة استعلامات TXT من جهاز واحد تتجاوز 100 طلب في الدقيقة.</li>
      <li><strong>تفعيل DHCP Snooping:</strong> تكوين السويتشات لتجاهل أي رسائل DHCP Offer صادرة من منافذ غير معتمدة رسمياً.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Protocol Poisoning & Covert Tunneling Detection</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 1.5: استعلام سجلات DNS وفحص كاش الـ ARP</h4>
    <p>استخدم أداة nslookup للتحقق من سجلات النطاقات واستكشاف تزييف الـ DNS.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-1-5">
      <div class="term-line output">DNS & Protocol Telemetry Console</div>
      <div class="term-line output">Type 'nslookup -type=TXT evil-domain.xyz' or 'nslookup google.com'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('nslookup google.com', 'lab-term-1-5')">nslookup google.com</button>
    <button class="btn-cmd" onclick="runSimCommand('nslookup -type=TXT evil-domain.xyz', 'lab-term-1-5')">nslookup -type=TXT (Tunneling Check)</button>
    <button class="btn-cmd" onclick="runSimCommand('arp -d *', 'lab-term-1-5')">Flush ARP Cache</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive DNS querying and ARP inspection lab.</p>`,
      ticket: {
        ticketId: "SEC-TICK-105",
        severity: "CRITICAL",
        severityClass: "critical",
        sourceHost: "DNS-SRV-INTERNAL-01",
        timestamp: "2026-11-06 16:48:19 UTC",
        ruleTriggered: "SIEM_DNS_DATA_EXFILTRATION_BURST_DETECTED",
        rawLog: `TIMESTAMP: 2026-11-06 16:48:19.450
DEVICE: Microsoft-Windows-DNS-Server (EventID: 260)
QUERY_CLIENT: 10.140.20.78 (HR-LAPTOP-14)
QUERY_DOMAIN: 
  dGhpcyBpcyBzZWNyZXQgY3JlZGl0IGNhcmQgZGF0YQ==.data-sync-patch.net
  dGhpcyBpcyBwYWdlIDIgb2YgZmlsZQ==.data-sync-patch.net
  ZXhmaWx0cmF0aW9uIGRvbmU=.data-sync-patch.net
RECORD_TYPE: TXT (Type 16)
QUERY_RATE: 412 queries/minute
DOMAIN_REPUTATION: Newly Registered Domain (Created 4 hours ago, Registrar: NameCheap, Geo: Panama)`,
        questionAr: "بصفتك محلل SOC، تفحص استعلامات الـ DNS أعلاه الصادرة من لابتوب قسم الموارد البشرية. ما نوع الهجوم وما الإجراء الفوري الواجب اتخاذه؟",
        questionEn: "Analyze the DNS queries from the HR laptop. What attack is taking place and what is the immediate action?",
        optionsAr: [
          "تصفح عادي لمواقع الأخبار العالمية عبر المتصفح.",
          "هجوم تسريب بيانات سري عبر أنفاق الـ DNS (DNS Data Exfiltration & Tunneling) لنقل بيانات مسروقة مشفرة بـ Base64 لدومين خبيث، ويجب عزل اللابتوب فوراً وحظر النطاق.",
          "تحديث روتيني لبرنامج مكافحة الفيروسات Defender.",
          "استعلام عادي عن خادم البريد الإلكتروني."
        ],
        optionsEn: [
          "Standard browsing traffic.",
          "DNS Data Exfiltration via Base64 subdomains to newly registered malicious C2. Isolate host immediately.",
          "Routine antivirus signature update.",
          "Standard MX lookup."
        ],
        correctIndex: 1,
        explanationAr: "تقييم أمني دقيق ومبهر يا باشمهندس بشار! لاحظ اسم النطاق الفرعي: 'dGhpcyBpcyBzZWNyZXQgY3JlZGl0IGNhcmQgZGF0YQ=='، عند فك تشفيره بـ Base64 يظهر النص الفاضح: 'this is secret credit card data'! كما أن معدل 412 استعلاماً في الدقيقة لسجلات TXT لدومين مسجل منذ 4 ساعات فقط في بنما هو التوقيع القاطع لهجوم تسريب البيانات عبر الـ DNS (DNS Exfiltration). الإجراء: عزل الجهاز فوراً وحظر النطاق على الـ DNS Firewall.",
        explanationEn: "Outstanding triage! Base64 decoded subdomain reads 'this is secret credit card data'. High-frequency TXT lookups to newly registered domain confirm DNS Data Exfiltration."
      }
    },

    {
      id: "lesson-1-6",
      moduleId: "module1",
      number: "1.6",
      titleAr: "تشريح بروتوكول الويب HTTP و HTTPS وأكواد الاستجابة والترويسات",
      titleEn: "Web Anatomy: HTTP vs HTTPS, Request Methods, Status Codes & Headers",
      duration: "60 min",
      theoryAr: `
<h3>لغة الويب تحت المجهر: كيف تتحدث المتصفحات مع خوادم الشركات؟</h3>
<p class="lead">أكثر من 85% من الهجمات الحديثة تبدأ إما برابط خبيث أو بثغرة في تطبيق ويب. قراءة سجلات خوادم الويب (Web Server Logs) وفهم ترويسات HTTP هي لغة التخاطب اليومية لمحلل الـ SOC.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: البطاقة البريدية المفتوحة مقابل الخزنة الدبلوماسية المشفرة</div>
  <p><strong>HTTP (المنفذ 80):</strong> مثل إرسال رسالة مكتوبة على بطاقة بريدية كرتونية مكشوفة. أي ساعي بريد، أو شخص يجلس بجانبك في المقهى، يمكنه قراءة اسم المستخدم وكلمة المرور ورقم بطاقتك الائتمانية كنص واضح (Cleartext Sniffing)!</p>
  <p><strong>HTTPS (المنفذ 443):</strong> مثل وضع الرسالة داخل خزنة فولاذية مشفرة برقم سري لا يملكه إلا أنت والسيرفر (SSL/TLS Encryption). حتى لو التقط الهكر الحزم في منتصف الطريق، فلن يرى سوى رموز عشوائية مشفرة غير قابلة للقراءة.</p>
</div>

<h4>1. أفعال وطلبات الـ HTTP (HTTP Request Methods):</h4>
<ul>
  <li><strong>GET:</strong> طلب جلب صفحة أو صورة من السيرفر (البيانات تظهر في رابط الـ URL مثل <code>/search?q=hack</code>).</li>
  <li><strong>POST:</strong> إرسال بيانات حساسة للسيرفر لمعالجتها (مثل تسجيل الدخول أو ملء نموذج، والبيانات تكون مخفية في جسم الطلب Body).</li>
  <li><strong>PUT:</strong> رفع أو استبدال ملف كامل على السيرفر (هدف خطير جداً لرفع الـ Web Shells إذا لم تكن الصلاحيات مضبوطة!).</li>
  <li><strong>DELETE:</strong> طلب حذف ملف أو سجل من الخادم.</li>
</ul>

<h4>2. أكواد استجابة السيرفر (HTTP Status Codes) - خريطة الأرقام:</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>النطاق</th>
        <th>المعنى العام</th>
        <th>أهم الأكواد لمحلل الـ SOC</th>
        <th>دلالتها الأمنية في التحقيق</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>2xx</strong></td>
        <td>النجاح (Success)</td>
        <td><code>200 OK</code></td>
        <td>تم تنفيذ الطلب بنجاح. إذا كان الطلب يحمل حمولة هجومية ورد السيرفر بـ 200، فقد تكون الثغرة قد نجحت!</td>
      </tr>
      <tr>
        <td><strong>3xx</strong></td>
        <td>إعادة التوجيه (Redirection)</td>
        <td><code>301 Moved</code>, <code>302 Found</code></td>
        <td>توجيه المتصفح لرابط آخر (انتبه لهجمات Open Redirect والتصيد).</td>
      </tr>
      <tr>
        <td><strong>4xx</strong></td>
        <td>خطأ من جهة العميل (Client Error)</td>
        <td><code>401 Unauthorized</code><br><code>403 Forbidden</code><br><code>404 Not Found</code></td>
        <td><strong>401:</strong> محاولة دخول بكلمة مرور خاطئة.<br><strong>403:</strong> الـ WAF حظر الهجوم بنجاح!<br><strong>404:</strong> محاولة الهكر البحث عن ملفات خبيثة أو لوحات تحكم غير موجودة (Directory Brute Force).</td>
      </tr>
      <tr>
        <td><strong>5xx</strong></td>
        <td>خطأ من جهة السيرفر (Server Error)</td>
        <td><code>500 Internal Error</code></td>
        <td>قد يشير إلى انهيار قاعدة البيانات بسبب هجوم SQL Injection غير معالج في كود البرمجة!</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>3. تشريح ترويسات HTTP الأمنية الحساسة (Headers):</h4>
<p>ترويسات الطلب والاستجابة تكشف هوية المهاجم وهدفه:</p>
<ul>
  <li><strong>User-Agent:</strong> يحدد نوع المتصفح والنظام (مثال مشبوه: <code>User-Agent: sqlmap/1.6</code> أو <code>nikto</code>، مؤشر صريح على أداة فحص آلية).</li>
  <li><strong>Referer:</strong> الرابط الذي جاء منه المستخدم (يساعد في كشف هجمات التصيد و CSRF).</li>
  <li><strong>Set-Cookie:</strong> يحمل رقم جلسة المستخدم (Session ID)؛ إذا سُرقت الكعكة يستطيع الهكر انتحال شخصية المدير دون كلمة مرور!</li>
</ul>
      `,
      theoryEn: `<h3>HTTP/HTTPS Protocol Anatomy, Methods, Status Codes & Header Inspection</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: قراءة الهجمات داخل سجلات الويب</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف تظهر هجمات الويب في الطلبات؟</h4>
    <ul>
      <li><strong>محاولات حقن SQLi:</strong> طلبات تحتوي على <code>UNION SELECT</code> أو <code>' OR 1=1--</code> في رابط الـ URL.</li>
      <li><strong>محاولات Path Traversal:</strong> طلبات تحاول الخروج من مجلد الويب للوصول لملفات النظام الحساسة مثل <code>GET /../../../../etc/passwd</code>.</li>
      <li><strong>استخدام أدوات المسح التلقائي:</strong> إرسال 5,000 طلب في الدقيقة بحثاً عن ملفات إدارة مثل <code>/admin.php</code> أو <code>/wp-login.php</code>.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 كيف يصطادها محلل الـ SOC في السجلات؟</h4>
    <ul>
      <li><strong>تحليل سجلات الـ Web Access Log (Nginx/Apache):</strong> مراقبة حجم البيانات المرتجعة؛ إذا رد السيرفر بكود 200 وحجم كبير (Bytes Sent) لطلب يحمل بايلود SQLi، فهذا إنذار أحمر باختراق قاعدة البيانات!</li>
      <li><strong>حظر الـ User-Agents الخبيثة:</strong> وضع قواعد في جدار الحماية WAF لحظر أي طلب قادم من أدوات مثل sqlmap, gobuster, nmap, dirbuster.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Web Exploitation Signatures in HTTP Telemetry</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 1.6: فحص سجلات الويب Nginx ومحاكاة طلبات curl</h4>
    <p>حلل سجلات الوصول لاكتشاف محاولات استكشاف المسارات وثغرات الويب.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-1-6">
      <div class="term-line output">Web Server Access Log Telemetry</div>
      <div class="term-line output">Type 'cat /var/log/nginx/access.log' or 'curl -I https://portal.corp.com'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('cat /var/log/nginx/access.log', 'lab-term-1-6')">Inspect Nginx Access Log</button>
    <button class="btn-cmd" onclick="runSimCommand('curl -I https://portal.corp.com', 'lab-term-1-6')">curl -I Header Check</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Web log analysis and curl HTTP header inspection.</p>`,
      ticket: {
        ticketId: "SEC-TICK-106",
        severity: "HIGH",
        severityClass: "high",
        sourceHost: "PORTAL-NGINX-PROD",
        timestamp: "2026-11-06 18:22:01 UTC",
        ruleTriggered: "WAF_PATH_TRAVERSAL_AND_LFI_ATTEMPT",
        rawLog: `TIMESTAMP: 2026-11-06 18:22:01.104
REMOTE_ADDR: 185.220.101.5 (Tor Exit Node)
REQUEST: "GET /view.php?file=../../../../../../etc/shadow HTTP/1.1"
STATUS: 200
BYTES_SENT: 4,819 bytes
USER_AGENT: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
REFERER: "-"
SERVER_NAME: portal.corp.com`,
        questionAr: "تفحص سجل السيرفر أعلاه بدقة شديدة: لاحظ الطلب، كود الاستجابة (Status: 200)، وحجم البيانات المرسلة (4,819 bytes). ما هو التقييم الخطير لهذا الحادث؟",
        questionEn: "Analyze the Nginx log above: Note the request for /etc/shadow, status code 200, and 4.8 KB returned. What is the critical assessment?",
        optionsAr: [
          "طلب تصفح عادي تم رفضه بأمان لأن المتصفح هو موزيلا فايرفوكس.",
          "هجوم خطير جداً وناجح لتخطي المسارات (Local File Inclusion - LFI) حيث تمكن المهاجم عبر عقدة Tor من قراءة ملف كلمات المرور المشفرة /etc/shadow وسحبه كاملاً لأن السيرفر رد بكود 200 وأرسل 4.8 كيلوبايت!",
          "المستخدم يحاول تغيير صورته الشخصية في الموقع.",
          "خطأ مؤقت في شهادة الـ SSL."
        ],
        optionsEn: [
          "Safe rejected request.",
          "Confirmed successful Local File Inclusion (LFI) vulnerability: Server returned 200 OK with 4.8KB data leaking /etc/shadow password hashes.",
          "User changing profile picture.",
          "SSL certificate temporary glitch."
        ],
        correctIndex: 1,
        explanationAr: "تحليل عبقري وثاقب يا باشمهندس بشار! هذا أسوأ سيناريو لمحلل الـ SOC: الهجوم يحاول قراءة /etc/shadow (ملف تخزين هاشات كلمات مرور مستخدمي لينكس)، والأخطر أن السيرفر لم يرفضه بل رد بـ 200 OK وأرسل 4,819 بايت، مما يعني أن الثغرة نجحت وأن المهاجم حصل على هاشات كلمات المرور! يجب فوراً إغلاق المسار وعزل السيرفر وتغيير كافة كلمات المرور في النظام.",
        explanationEn: "Critical catch! The combination of Path Traversal payload targeting /etc/shadow with a 200 OK status and 4.8KB payload confirms unauthorized file disclosure."
      }
    },

    {
      id: "lesson-1-7",
      moduleId: "module1",
      number: "1.7",
      titleAr: "البنية التحتية وأجهزة الشبكة الأمنية ومواقع حساسات المراقبة (Firewalls, Proxies & SPAN/TAP)",
      titleEn: "Network Security Architecture: NGFW, Proxies, DMZ, and Sensor Placement (TAP/SPAN)",
      duration: "65 min",
      theoryAr: `
<h3>هندسة خطوط الدفاع: كيف تُصمم شبكة الشركات وأين نضع أعين الـ SOC؟</h3>
<p class="lead">أقوى برامج الـ SIEM في العالم تصبح عمياء تماماً إذا لم تكن حساسات المراقبة (Sensors) موضوعة في المكان الجغرافي والشبكي الصحيح. في هذا الدرس، سنتعلم كيف تُبنى قلعة الشبكة الدفاعية خطوة بخطوة.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: القلعة المحصنة والمنطقة منزوعة السلاح (DMZ)</div>
  <p>في العصور الوسطى، كان للملوك قلعة داخلية يسكن فيها الملك وخزائن الذهب (Corporate LAN & Internal Data). وخارج أسوار القلعة توجد ساحة تجارية مفتوحة للتجار والزوار لبيع البضائع (المنطقة منزوعة السلاح DMZ: خوادم الويب والإيميل). إذا هاجم العدو الساحة التجارية، فإن أبواب القلعة الداخلية تظل مغلقة بإحكام ولا يستطيع الوصول للذهب!</p>
</div>

<h4>1. تطور الجدران النارية (Firewall Generations):</h4>
<ul>
  <li><strong>الجدار الناري البسيط (Packet Filtering / Stateless Firewall):</strong> يفحص فقط أرقام المنافذ والـ IP لكل حزمة منفردة دون تذكر سياق المحادثة. (أصبح متجاوزاً وضعيفاً اليوم).</li>
  <li><strong>الجدار الناري الذكي (Stateful Inspection Firewall):</strong> يحتفظ بجدول اتصالات نشط (State Table). إذا أرسل جهاز داخلي طلباً للخارج، يتذكر الجدار هذا الطلب ويسمح للرد بالدخول تلقائياً، بينما يمنع أي اتصال قادم من الإنترنت لم يطلبه أحد من الداخل.</li>
  <li><strong>جدار الجيل التالي (Next-Generation Firewall - NGFW):</strong> (مثل Palo Alto و Fortinet و Check Point) لا يكتفي بفحص المنافذ بل يقوم بفحص حمولة الطبقة السابعة (Deep Packet Inspection)، ويكتشف البرمجيات الخبيثة، ويفحص الترافيك المشفر بـ SSL Decryption، ويتعرف على نوع التطبيق الحقيقي حتى لو غير من المنفذ!</li>
</ul>

<h4>2. المنطقة منزوعة السلاح (DMZ - Demilitarized Zone):</h4>
<p>هي شبكة فرعية معزولة توضع فيها الخوادم التي تحتاج للتواصل المباشر مع الإنترنت (مثل خادم موقع الشركة، خادم الإيميل، وخادم الـ VPN). القاعدة الذهبية في تصميم الـ DMZ: <em>يمكن لأجهزة الـ LAN الاتصال بالـ DMZ، ولكن يُمنع منعاً باتاً على أي خادم في الـ DMZ بدء اتصال جديد باتجاه شبكة الـ LAN الداخلية!</em></p>

<h4>3. أين نضع حساسات المراقبة لأخذ نسخة من الترافيك للـ SOC؟</h4>
<p>لكي يحلل محلل الـ SOC الحزم في Wireshark أو نظام كشف التطفل Snort/Suricata، نستخدم إحدى طريقتين:</p>

<pre class="ascii-flow">
1. طريقة منفذ المرآة (SPAN / Port Mirroring):
   [ جهاز الضحية ] ──(Port 1)──> [ Switch ] ──(Port 24 - SPAN)──> [ كارت مراقبة SOC Wireshark ]
   (يقوم السويتش بنسخ كل حزم Port 1 ويرسل نسخة مطابقة إلى Port 24 برمجياً)

2. طريقة الحساس المادي المستقل (Network TAP - Test Access Point):
   [ كابل الشبكة الرئيسي ] ───[ جهاز TAP المادي ]───> [ الراوتر ]
                                     ↓ (نسخة ضوئية/نحاسية فيزيائية 100%)
                              [ مجس نظام IDS / SIEM ]
</pre>
      `,
      theoryEn: `<h3>Enterprise Network Defense Architecture: NGFW, DMZ, Proxies & TAP/SPAN Sensor Placement</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: الهروب من المراقبة والتحكم بالشبكة</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف يحاول المهاجم تفادي الحساسات؟</h4>
    <ul>
      <li><strong>التخفي داخل منافذ مسموحة (Port Masquerading):</strong> تشغيل برمجيات التحكم C2 عبر المنفذ 443 أو المنفذ 80 لتظهر لجدران الحماية القديمة كتصفح ويب عادي.</li>
      <li><strong>تشفير حركة المرور (C2 SSL Encryption):</strong> تشفير الاتصالات الصادرة بشهادة SSL مخصصة للهروب من أنظمة الـ IDS التي لا تفك التشفير.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 خطة المدافع لمراقبة كاملة بدون نقاط عمياء</h4>
    <ul>
      <li><strong>نشر حساسات IDS متعددة (Strategic Sensor Positioning):</strong> وضع حساس خارج الجدار الناري لرصد الهجمات الصادمة، وحساس داخل الشبكة بعد الجدار الناري لرصد ما استطاع اختراق المحيط، وحساس في الـ DMZ.</li>
      <li><strong>تفعيل SSL Decryption على الـ NGFW:</strong> فك تشفير الحزم الصادرة والواردة داخل الجدار الناري لفحص الحمولات الخبيثة قبل إعادة تشفيرها وإرسالها للمستخدم.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Evasion of Perimeter Controls vs Sensor Strategic Architecture</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 1.7: فحص مناطق الجدار الناري وسياسات الـ DMZ</h4>
    <p>استكشف قواعد وتكوين الجدار الناري ومحاكاة التحقق من تدفق الحزم عبر الـ Zones.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-1-7">
      <div class="term-line output">Enterprise Perimeter Defense Console</div>
      <div class="term-line output">Type 'iptables -L -n -v' or 'show zones' to view active security zones.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('iptables -L -n -v', 'lab-term-1-7')">iptables Rules (L3/L4 Inspection)</button>
    <button class="btn-cmd" onclick="runSimCommand('show security policies', 'lab-term-1-7')">Show NGFW Security Policies</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Firewall security zones and SPAN tap verification.</p>`,
      ticket: {
        ticketId: "SEC-TICK-107",
        severity: "CRITICAL",
        severityClass: "critical",
        sourceHost: "NGFW-CLUSTER-PALOALTO",
        timestamp: "2026-11-06 20:55:12 UTC",
        ruleTriggered: "SECURITY_POLICY_VIOLATION_DMZ_TO_LAN_DATABASE_QUERY",
        rawLog: `TIMESTAMP: 2026-11-06 20:55:12.802
RULE: DMZ-To-Internal-Deny-Default
SRC_ZONE: DMZ (Web-Server-Subnet)
SRC_IP: 192.168.100.15 (Public E-Commerce Web Server)
DST_ZONE: Trust-LAN (Corporate Internal Subnet)
DST_IP: 10.140.10.85 (Domain Controller DC01)
DST_PORT: 445 (SMB) & 389 (LDAP)
ACTION: DROP (Implicit Deny)
PROCESS_INFO: Web server was compromised via Apache Struts exploit and immediately attempted remote execution against internal Domain Controller.`,
        questionAr: "بصفتك محلل الـ SOC، تفحص تفاصيل انتهاك السياسة الأمنية أعلاه الصادر من خادم الـ DMZ باتجاه الدومين كنترولر الداخلي. ما هي خطتك الفورية لإدارة هذا الحادث الخطير؟",
        questionEn: "Analyze the DMZ-to-LAN violation above from the e-commerce web server toward the Domain Controller. What is your immediate incident response plan?",
        optionsAr: [
          "تعديل قاعدة الجدار الناري للسماح بهذا الاتصال لكي يعمل الموقع بشكل صحيح.",
          "عزل خادم الويب في الـ DMZ فوراً (Host Isolation)، لأن خادم الويب سقط في يد المهاجم ويحاول الآن الحركة الجانبية لاختراق الدومين كنترولر عبر SMB/LDAP، وإبلاغ فريق الـ Incident Response للتحقيق في ثغرة Apache.",
          "إعادة تشغيل الدومين كنترولر فقط.",
          "تجاهل التنبيه لأن الجدار الناري قام بإسقاط الحزمة (ACTION: DROP)."
        ],
        optionsEn: [
          "Allow the connection in firewall.",
          "Confirm severe compromise: Web server in DMZ was breached and is actively pivoting toward DC01. Isolate web server immediately and initiate IR Playbook.",
          "Reboot Domain Controller.",
          "Ignore alert because packet was dropped."
        ],
        correctIndex: 1,
        explanationAr: "قرار قيادي احترافي لا غبار عليه يا باشمهندس بشار! مجرد أن الجدار الناري أسقط الحزمة (DROP) لا يعني انتهاء المشكلة؛ بل يعني أن خادم الويب العام في الـ DMZ قد تم اختراقه بالكامل (Patient Zero)، والمهاجم جالس داخله ويحاول الآن كسر الدومين كنترولر الداخلي للسيطرة على كامل الشركة. الخطوة الفورية: عزل خادم الويب المشبوه فوراً، وفحص سجلات Apache لمعرفة ملف الـ Web Shell الذي رفعه المهاجم.",
        explanationEn: "Superb SOC triage! A dropped packet does not equal a resolved incident. The DMZ web server is demonstrably compromised and attempting lateral movement toward the internal domain controller."
      }
    }
  ]
};
