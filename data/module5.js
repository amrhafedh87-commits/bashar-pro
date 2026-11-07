// Stage 5: Network Forensics, IDS/IPS & EDR (التحليل الجنائي للشبكات وأمن النقاط الطرفية)
// Curated with exhaustive depth for Eng. Bashar Hafedh - BasharSec Academy

const module5Data = {
  id: "module5",
  stageNumber: 5,
  titleAr: "المرحلة 5: التحليل الجنائي للشبكات وأمن النقاط الطرفية (Network Forensics & EDR)",
  titleEn: "Stage 5: Network Forensics, IDS/IPS & EDR Mastery",
  summaryAr: "تشريح حزم الشبكة الحية ببرنامج Wireshark، كتابة وقراءة قواعد Snort و Suricata، وهندسة أنظمة الـ EDR وعزل الأجهزة المخترقة.",
  summaryEn: "Deep packet analysis with Wireshark, Snort/Suricata rule engineering, Zeek network security monitoring, and EDR Process Tree forensics & host containment.",
  badgeAr: "محلل جنائي للشبكات والـ EDR",
  badgeEn: "Network Forensics & EDR Specialist",
  icon: "radar",
  lessons: [
    {
      id: "lesson-5-1",
      moduleId: "module5",
      number: "5.1",
      titleAr: "إتقان Wireshark من الصفر: الواجهة، فلاتر العرض، تتبع المحادثات، واستخراج الملفات من PCAP",
      titleEn: "Wireshark from Scratch: Interface, Display Filters, TCP Streams & File Carving",
      duration: "70 min",
      theoryAr: `
<h3>الميكروسكوب الرقمي لحزم البيانات: كيف ترى ما تفعله الأجهزة سراً عبر الأسلاك؟</h3>
<p class="lead">إذا كانت سجلات الأحداث تخبرك أن "فلاناً اتصل بالإنترنت"، فإن برنامج <strong>Wireshark</strong> يريك حرفياً كل كلمة وكل صورة وكل بايت نقله ذلك الشخص عبر الشبكة! قراءة ملفات حزم الشبكة <code>.pcap</code> واستخراج الأدلة الجنائية منها هي إحدى أهم المهارات التي تميز محلل الـ SOC المتقدم.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: تسجيل كاميرات الفيديو بالألوان والصوت الكامل</div>
  <p>سجلات الـ Firewall مثل حارس يسجل في ورقة: "سيارة زرقاء مرت في الساعة 4".</p>
  <p>أما Wireshark فهو مثل تسجيل كاميرا فيديو 4K بجودة سينمائية فائقة: يريك من كان يجلس داخل السيارة، ماذا كانوا يرتدون، ماذا تحدثوا مع بعضهم، وحتى الورقة التي رموها من النافذة تستطيع التقاطها وقراءتها بالكامل!</p>
</div>

<h4>1. واجهة برنامج Wireshark وأقسامها الثلاثة الرئيسية:</h4>
<ul>
  <li><strong>1. لوحة قائمة الحزم (Packet List Pane - اللوحة العلوية):</strong> تعرض كل حزمة في سطر مستقل: رقم الحزمة، التوقيت، عنوان المصدر والهدف، البروتوكول، الحجم، ومعلومات ملخصة عن الأعلام.</li>
  <li><strong>2. لوحة تفاصيل الحزمة (Packet Details Pane - اللوحة الوسطى):</strong> تشريح شجرة OSI للحزمة المحددة: يمكنك فتح طبقة الـ Ethernet لرؤية الـ MAC، أو طبقة الـ IP لرؤية الـ TTL، أو طبقة الـ TCP لرؤية الـ Flags!</li>
  <li><strong>3. لوحة البايتات الخام (Packet Bytes Pane - اللوحة السفلية):</strong> الحزمة بصيغتها السداسية عشرية (Hex Dump) وعلى يمينها النص المقروء بـ ASCII.</li>
</ul>

<h4>2. أعظم فلاتر العرض (Wireshark Display Filters) التي لا يستغني عنها محلل الـ SOC:</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>فلتر Wireshark</th>
        <th>ما الذي يعرضه على الشاشة؟</th>
        <th>الاستخدام الأمني في الـ SOC</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>ip.addr == 10.140.20.15</code></td>
        <td>فلترة جميع الحزم الصادرة أو الواردة للعنوان المحدد فقط.</td>
        <td>عزل ومتابعة ترافيك جهاز الموظف المشتبه بإصابته.</td>
      </tr>
      <tr>
        <td><code>http.request.method == "POST"</code></td>
        <td>عرض طلبات الـ HTTP POST فقط.</td>
        <td>صيد سرقة كلمات المرور، استعلامات الـ Web Shells، ونماذج تسجيل الدخول.</td>
      </tr>
      <tr>
        <td><code>tcp.flags.syn == 1 and tcp.flags.ack == 0</code></td>
        <td>عرض حزم طلب الاتصال الأولي فقط.</td>
        <td>كشف هجمات فحص المنافذ SYN Scans وهجمات الـ SYN Flood.</td>
      </tr>
      <tr>
        <td><code>dns.flags.response == 0 and dns.qry.type == 16</code></td>
        <td>عرض استعلامات الـ DNS من نوع TXT الصادرة.</td>
        <td>صيد هجمات تسريب البيانات بأنفاق الـ DNS (DNS Tunneling).</td>
      </tr>
      <tr>
        <td><code>frame contains "password" or frame contains "SELECT"</code></td>
        <td>البحث النصي الخام داخل جميع الحزم عن كلمات مفتاحية معينة.</td>
        <td>البحث عن تسريب كلمات المرور غير المشفرة أو استعلامات SQLi.</td>
      </tr>
      <tr>
        <td><code>smb2.filename contains ".exe"</code></td>
        <td>رصد نقل أي ملف تنفيذي عبر بروتوكول مشاركة الملفات SMB.</td>
        <td>كشف محاولات نشر الفيروسات عبر الشبكة الداخلية (Lateral Movement).</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>3. تتبع المحادثات الكاملة (Follow TCP / HTTP Stream):</h4>
<p>في الشبكات الحقيقية، البيانات تُقطع إلى مئات الحزم المنفصلة. إذا نقرت بالزر الأيمن على أي حزمة واخترت <strong>Follow -> TCP Stream</strong>، يقوم Wireshark تلقائياً بإعادة تجميع كامل أجزاء المحادثة في نافذة واحدة ملونة: النصوص باللون الأحمر هي ما أرسله الضحية، والنصوص باللون الأزرق هي ما رد به السيرفر!</p>

<h4>4. استخراج الملفات المسروقة والمحملة من الـ PCAP (File Carving):</h4>
<p>إذا قام الضحية بتحميل فايروس أو تسريب ملف سري عبر الشبكة، يستطيع محلل الـ SOC استعادة الملف الأصلي كما هو من ملف الـ PCAP عبر القائمة: <strong>File -> Export Objects -> HTTP / SMB</strong>، وحفظ الملف على جهازه لفحصه في المختبر الآمن (Sandbox)!</p>
      `,
      theoryEn: `<h3>Wireshark Mastery: Display Filters, Follow TCP Stream & PCAP File Carving</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: صيد أدوات الهكر في الـ PCAP</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف يحاول الهكر تفادي Wireshark؟</h4>
    <ul>
      <li>استخدام التشفير الكامل HTTPS/TLS لإخفاء المحتوى، فلا يرى المحلل سوى حزم مشفرة.</li>
      <li>تغيير أرقام المنافذ الافتراضية (تشغيل SSH على المنفذ 443 أو HTTP على المنفذ 8080).</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 كيف يفكك محلل الـ SOC حيل المهاجم؟</h4>
    <ul>
      <li><strong>ميزة Decode As:</strong> حتى لو غير الهكر رقم المنفذ، يستطيع المحلل إجبار Wireshark على فك تشفير الحزم كـ HTTP بالنقر بالزر الأيمن واختيار <em>Decode As -> HTTP</em>!</li>
      <li><strong>تحليل شهادات الـ SSL غير المشفرة (Client Hello / Server Hello):</strong> قبل بدء التشفير، يرسل المتصفح اسم الموقع كنص واضح في حقل <code>Server Name Indication (SNI)</code>، مما يكشف الدومين الخبيث للمحلل حتى لو كان الاتصال مشفراً!</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Encrypted Traffic Evasion vs SNI Inspection & Decode As</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 5.1: تحليل ملف PCAP وتتبع محادثات TCP Stream</h4>
    <p>استخدم محاكي فلاتر Wireshark لتصفية حزم الـ POST واستخراج الملفات المنقولة.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-5-1">
      <div class="term-line output">Wireshark Packet Analysis Engine v3.0</div>
      <div class="term-line output">Type 'wireshark-filter http.request.method==POST' or 'follow-tcp-stream 0'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('wireshark-filter http.request.method==POST', 'lab-term-5-1')">Filter HTTP POST Requests</button>
    <button class="btn-cmd" onclick="runSimCommand('follow-tcp-stream 0', 'lab-term-5-1')">Follow TCP Stream 0 (Credentials)</button>
    <button class="btn-cmd" onclick="runSimCommand('tshark -r capture.pcap -Y &quot;dns&quot;', 'lab-term-5-1')">CLI Packet Inspection (tshark)</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Wireshark display filter and TCP Stream simulation.</p>`,
      ticket: {
        ticketId: "SEC-TICK-501",
        severity: "HIGH",
        severityClass: "high",
        sourceHost: "SOC-NETWORK-TAP-01",
        timestamp: "2026-11-06 21:05:40 UTC",
        ruleTriggered: "WIRESHARK_PCAP_SUSPICIOUS_CLEARTEXT_CREDENTIAL_TRANSMISSION",
        rawLog: `PCAP_PACKET_SUMMARY:
Packet #402: 10.140.30.12 -> 194.26.29.112 [TCP Stream 12, Port 80]
HTTP POST /login_action.php HTTP/1.1
Host: secure-portal-login.xyz
User-Agent: Mozilla/5.0
Content-Type: application/x-www-form-urlencoded
Content-Length: 48

PAYLOAD_ASCII (Extracted Stream):
username=b.hafedh%40corp.local&password=SuperSecret2026%21&submit=Login`,
        questionAr: "تفحص المحادثة المستخرجة من ملف الـ PCAP أعلاه. ما هو الخطر الأمني المؤكد وما الإجراء الفوري الواجب اتخاذه؟",
        questionEn: "Analyze the extracted PCAP stream above. What is the confirmed security incident and immediate remediation?",
        optionsAr: [
          "اتصال مشفر آمن ببروتوكول HTTPS لحفظ البيانات.",
          "تسريب وسرقة بيانات اعتماد حساب المهندس بشار (Cleartext Credential Theft via Phishing Portal): تم إرسال البريد الإلكتروني وكلمة المرور كنص واضح عبر HTTP غير مشفر باتجاه موقع تصيد احتيالي خارجي 194.26.29.112! الإجراء: تغيير كلمة مرور الحساب فوراً، تفعيل المصادقة الثنائية MFA، وحظر الدومين على البروكسي والجدار الناري.",
          "عطل فني في كارت الشبكة للضحية.",
          "تحديث مجدول لقاعدة بيانات الموقع."
        ],
        optionsEn: [
          "Secure HTTPS encrypted transmission.",
          "Cleartext Credential Theft via Phishing: Password sent unencrypted over port 80 to external domain secure-portal-login.xyz. Reset password immediately, enforce MFA, and block domain.",
          "Network adapter glitch.",
          "Legitimate site maintenance."
        ],
        correctIndex: 1,
        explanationAr: "تحقيق في منتهى الدقة يا باشمهندس بشار! عبر ميزة Follow TCP Stream في Wireshark استخرجنا جسم الطلب (Body) وظهرت كلمة المرور كنص واضح فاضح: 'SuperSecret2026!' مرسلة لموقع تصيد خارجي على المنفذ 80. الموظف وقع ضحية صفحة تصيد مزيفة وسرب بيانات حسابه. الإجراء العاجل: إعادة تعيين كلمة مرور الحساب فوراً في الدليل النشط لقطع الطريق على المهاجم، وإنهاء أي جلسات نشطة للمستخدم.",
        explanationEn: "Spot on! Follow TCP stream exposes cleartext credentials sent over unencrypted HTTP (port 80) to external phishing domain. Immediate credential revocation required."
      }
    },

    {
      id: "lesson-5-2",
      moduleId: "module5",
      number: "5.2",
      titleAr: "اكتشاف الهجمات داخل الترافيك: فحص المنافذ Nmap، هجمات ARP Spoofing، و C2 داخل Wireshark",
      titleEn: "Hunting Network Attacks in Wireshark: Nmap Scans, ARP Spoofing & C2 Traffic",
      duration: "65 min",
      theoryAr: `
<h3>قراءة توقيعات الهجمات في تدفق الحزم: كيف تميز فحص Nmap عن تصفح الموظف؟</h3>
<p class="lead">لكل أداة هجومية في العالم "بصمة شبكية" (Network Fingerprint) تميزها في ترافيك الحزم. في هذا الدرس، سنتعلم كيف تبدو هجمات Nmap وهجمات التسميم وهجمات برمجيات الفدية داخل برنامج Wireshark.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: خطوات الأقدام في الرمال</div>
  <p>الإنسان الطبيعي يمشي بخطوات متباعدة هادئة ويدخل من الباب. أما اللص فيركض على أطراف أصابعه، ويجرب كل مقبض نافذة وباب في البناية بسرعة هائلة، ثم يختبئ في الزوايا!</p>
  <p>في الشبكة، المستخدم الطبيعي يفتح موقعاً فيرسل 10 حزم بفاصل زمني طبيعي. أما أداة مثل Nmap فترسل آلاف الحزم في ثانية واحدة بأعلام غير طبيعية (مثل SYN-only لمئات المنافذ دون انتظار الإجابة)!</p>
</div>

<h4>1. التوقيعات الجنائية لفحص Nmap في Wireshark:</h4>
<ul>
  <li><strong>TCP SYN Scan (-sS):</strong> تدفق حزم <code>Flags: [SYN]</code> متتالية موجهة لعشرات المنافذ المختلفة من نفس الـ IP، وكلما رد السيرفر بـ <code>[SYN, ACK]</code> يرد المهاجم فوراً بـ <code>[RST]</code>! الفلتر: <code>tcp.flags.syn==1 and tcp.flags.ack==0</code>.</li>
  <li><strong>TCP FIN Scan (-sF):</strong> حزم تحمل فقط <code>[FIN]</code> بدون مصافحة سابقة (لتجاوز جدران الحماية القديمة).</li>
  <li><strong>TCP Null Scan (-sN):</strong> حزم لا تحمل أي علم نهائياً (جميع الأعلام 0)! الفلتر: <code>tcp.flags == 0</code>.</li>
  <li><strong>XMAS Scan (-sX):</strong> حزم تحمل أعلام <code>FIN, PSH, URG</code> مشتعلة معاً. الفلتر: <code>tcp.flags == 0x029</code>.</li>
</ul>

<h4>2. توقيع هجوم تسميم الـ ARP (ARP Spoofing) في Wireshark:</h4>
<p>في الوضع الطبيعي، ترسل أجهزة الشبكة حزمة ARP Request: <em>"من يملك 10.140.10.1؟"</em> فيرد الراوتر بحزمة ARP Reply واحدة.</p>
<p>في هجوم ARP Poisoning: يمتلئ Wireshark بسيل من حزم <strong>Gratuitous ARP</strong> متتالية بدون أن يطلبها أحد، وكلها تدعي أن نفس عنوان الـ IP يحمله عنوان MAC جديد غير معروف! يظهر في Wireshark باللون الأسود أو الأحمر كتحذير خبير <em>(Duplicate IP address detected)</em>.</p>
      `,
      theoryEn: `<h3>Hunting Network Attack Signatures: Nmap Probes, ARP Spoofing & Anomalous Protocols in Wireshark</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: كشف محاولات التهرب في الحزم</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 حيل الهكر في فحص الشبكة</h4>
    <ul>
      <li>استخدام معامل التباطؤ في Nmap (مثل <code>-T1 Sneaky</code> أو <code>-T0 Paranoid</code>) حيث يرسل حزمة واحدة كل 15 دقيقة لتفادي أنظمة كشف التطفل الآلية.</li>
      <li>تجزئة الحزم (Packet Fragmentation -f) لتقطيع ترويسة الـ TCP على حزمتين لمنع الـ IDS من مطابقة التوقيع.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 رد محلل الـ SOC</h4>
    <ul>
      <li><strong>التحليل السلوكي عبر Zeek (Bro):</strong> مراقبة عدد الاتصالات الفريدة التي يفتحها الجهاز عبر ساعات طويلة لتحديد الفحص البطيء (Slow Scan).</li>
      <li><strong>إعادة تجميع الحزم (IP Defragmentation):</strong> إجبار الجدار الناري على إعادة تجميع الحزم المجزأة قبل فحصها لمنع التهرب بالتجزئة.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Slow Scanning & Packet Fragmentation vs Reassembly Engines</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 5.2: كشف فحص Nmap Null و XMAS Scans بالفلاتر</h4>
    <p>طبق الفلاتر الرياضية في Wireshark لرصد الحزم الشاذة التي تتلاعب بـ TCP Flags.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-5-2">
      <div class="term-line output">Network Attack Telemetry Engine</div>
      <div class="term-line output">Type 'hunt-null-scan' or 'hunt-arp-spoof'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('hunt-null-scan', 'lab-term-5-2')">Hunt TCP Null Scans (tcp.flags == 0)</button>
    <button class="btn-cmd" onclick="runSimCommand('hunt-arp-spoof', 'lab-term-5-2')">Detect ARP Poisoning Storms</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Wireshark attack signature and flag analysis.</p>`,
      ticket: {
        ticketId: "SEC-TICK-502",
        severity: "HIGH",
        severityClass: "high",
        sourceHost: "CORE-SWITCH-VLAN20",
        timestamp: "2026-11-06 22:18:04 UTC",
        ruleTriggered: "NETWORK_ANOMALY_TCP_FLAGS_INVALID_COMBINATION",
        rawLog: `TIMESTAMP: 2026-11-06 22:18:04.119
SRC_IP: 10.140.20.99 (Asset: IT-Staging-Workstation)
DST_IP: 10.140.20.5 (Domain Controller DC01)
PACKET_CAPTURE_DETAIL:
  TCP Flags: 0x029 (FIN=1, PSH=1, URG=1)
  Sequence Number: 0, Acknowledgment: 0
  Probed Ports: 21, 22, 23, 25, 80, 88, 135, 139, 443, 445 (Sequential probe in 0.4s)
  Pattern Name: RFC 793 Illegal Flag Combination (XMAS Scan)`,
        questionAr: "تلقيت تنبيهاً لظهور حزم تحمل أعلام FIN و PSH و URG مشتعلة معاً متجهة من محطة عمل باتجاه الدومين كنترولر. ما هو نوع هذا الفحص وما الهدف منه؟",
        questionEn: "Analyze the invalid TCP flag combination (FIN, PSH, URG). What scan type is this and what is its goal?",
        optionsAr: [
          "اتصال مشروع بموقع الدومين كنترولر الداخلي عبر متصفح كروم.",
          "فحص منافذ متقدم من نوع XMAS Scan (Nmap -sX) لاكتشاف المنافذ المفتوحة والتسلل عبر الجدران النارية البسيطة التي لا تدقق في تضارب الأعلام، ويجب التحقيق في الجهاز 10.140.20.99.",
          "تحديث لنظام ويندوز في الدومين كنترولر.",
          "خطأ في كابل الشبكة."
        ],
        optionsEn: [
          "Legitimate Chrome browser connection.",
          "Nmap XMAS Scan probing for open ports by abusing RFC 793 TCP flag handling to bypass stateless filtering. Investigate host 10.140.20.99.",
          "DC Windows update.",
          "Physical cable fault."
        ],
        correctIndex: 1,
        explanationAr: "إجابة علمية متقدمة يا باشمهندس بشار! حزم XMAS Scan تجمع بين FIN و PSH و URG وهي تركيبة يستحيل حدوثها في ترافيك الإنترنت الطبيعي! الهدف من هذا الفحص هو استغلال ثغرة في تطبيق بروتوكول TCP بحسب مواصفات RFC 793: الأنظمة غير المتوافقة ترد بـ RST إذا كان الباب مغلقاً ولا ترد إذا كان الباب مفتوحاً. الإجراء: عزل الجهاز المصدر 10.140.20.99 والتحقق هل تم تشغيل أداة Nmap عليه.",
        explanationEn: "Spot on! An invalid TCP flag combination with FIN, PSH, and URG set simultaneously is the unambiguous signature of an Nmap XMAS scan (-sX)."
      }
    },

    {
      id: "lesson-5-3",
      moduleId: "module5",
      number: "5.3",
      titleAr: "أنظمة كشف ومنع التطفل (Snort & Suricata) وكيف تكتب قواعد IDS من الصفر كلمة بكلمة",
      titleEn: "IDS/IPS Deep Dive: Snort & Suricata Rule Syntax, Writing Rules & Zeek Analysis",
      duration: "70 min",
      theoryAr: `
<h3>أعين الحراسة الآلية: كيف تفحص أنظمة IDS/IPS الحزم وتقطع الهجمات في جزء من الثانية؟</h3>
<p class="lead">الجدار الناري العادي يفحص فقط "الترويسة" (من أين وإلى أين الحزمة). أما أنظمة <strong>IDS (Intrusion Detection System)</strong> و <strong>IPS (Intrusion Prevention System)</strong> مثل <strong>Snort</strong> و <strong>Suricata</strong>، فإنها تفتح بطن الحزمة وتفحص الحمولة (Deep Packet Inspection) حرفاً بحرف لمقارنتها مع آلاف التوقيعات الهجومية!</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: جهاز فحص الحقائب بالأشعة السينية في المطار</div>
  <p>الجدار الناري هو موظف الجوازات الذي يختم الجواز بناءً على الاسم وتأشيرة الدخول فقط.</p>
  <p>أما نظام الـ IDS فهو جهاز الأشعة السينية (X-Ray) والكلاب البوليسية المدربة في المطار: يفحص ما بداخل الحقيبة؛ إذا رأى سكيناً أو مواد متفجرة، يصرخ فوراً (IDS Alert)! وإذا كان بنظام الـ IPS (المنع)، فإنه يقوم بمصادرة الحقيبة فوراً واعتقال صاحبها (Packet Drop)!</p>
</div>

<h4>1. التشريح الهندسي الكامل لقاعدة Snort / Suricata كلمة بكلمة:</h4>
<p>تنقسم قاعدة الـ IDS إلى قسمين رئيسيين: <strong>رأس القاعدة (Rule Header)</strong> و <strong>خيارات وفحوصات القاعدة (Rule Options)</strong>:</p>

<pre class="ascii-flow">
alert tcp $EXTERNAL_NET any -> $HOME_NET 80 (msg:"ATTACK-RESPONSES SQL Injection UNION Attempt"; content:"UNION SELECT"; nocase; sid:1000001; rev:1;)
  │    │         │       │  │     │      │   └─────────────────────────────────────────────── خيارات وفحوصات القاعدة (Rule Options) ─────────────────────────┘
  │    │         │       │  │     │      └── منفذ الهدف (Destination Port: 80)
  │    │         │       │  │     └───────── شبكة الهدف (Destination IP: شبكة الشركة الداخلية)
  │    │         │       │  └─────────────── اتجاه الحركة (-> من المصدر للهدف فقط)
  │    │         │       └────────────────── منفذ المصدر (أي منفذ عشوائي للمهاجم)
  │    │         └────────────────────────── عنوان المصدر ($EXTERNAL_NET الإنترنت الخارجي)
  │    └──────────────────────────────────── بروتوكول النقل (TCP)
  └───────────────────────────────────────── الإجراء المتخذ (Action: alert إرسال تنبيه، أو drop إسقاط الحزمة)
</pre>

<h4>2. معجم خيارات وقواطع القواعد (Rule Options Anatomy):</h4>
<ul>
  <li><code>msg:"...";</code> النص والوصف الذي سيظهر لمحلل الـ SOC في شاشة التنبيهات.</li>
  <li><code>content:"UNION SELECT";</code> النص الدقيق المطلوب البحث عنه داخل حمولة الحزمة.</li>
  <li><code>nocase;</code> تجاهل حالة الأحرف (مطابقة حروف كبيرة وصغيرة: union select أو UNION SELECT).</li>
  <li><code>depth: 50;</code> فحص أول 50 بايت فقط من الحمولة لتسريع الأداء وتفادي استهلاك المعالج.</li>
  <li><code>offset: 10;</code> بدء الفحص بعد تجاوز أول 10 بايتات.</li>
  <li><code>sid: 1000001;</code> (Snort ID) الرقم التعريفي الفريد للقاعدة (الأرقام فوق مليون مخصصة للقواعد المخصصة التي يكتبها المحلل).</li>
  <li><code>rev: 1;</code> رقم إصدار القاعدة للتحديثات.</li>
  <li><code>classtype: web-application-attack;</code> تصنيف التهديد وفق معايير الأمان العالمية.</li>
</ul>

<h4>3. المقارنة الجوهرية بين Snort و Suricata و Zeek:</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>النظام</th>
        <th>طريقة العمل الرئيسية</th>
        <th>الميزة الفريدة في بيئات الـ SOC الحديثة</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Snort (v3)</strong></td>
        <td>Signature-Based (مطابقة التواقيع)</td>
        <td>الأقدم والأكثر انتشاراً وتوثيقاً في العالم، مدعوم من شركة Cisco Talos.</td>
      </tr>
      <tr>
        <td><strong>Suricata</strong></td>
        <td>Signature-Based + Protocol Parsing</td>
        <td><strong>متعدد الأنوية (Multi-threaded)!</strong> يتحمل سرعات شبكات هائلة (10Gbps+) ويدعم فك تشفير الملفات تلقائياً من الترافيك.</td>
      </tr>
      <tr>
        <td><strong>Zeek (Bro)</strong></td>
        <td>Behavioral & Transactional Logging</td>
        <td><strong>لا يعتمد على التواقيع فقط!</strong> بل يولد سجلات هيكلية منظمة لكل بروتوكول (مثل <code>conn.log</code>, <code>dns.log</code>, <code>http.log</code>, <code>ssl.log</code>) لتسهيل استعلامات الـ SIEM.</td>
      </tr>
    </tbody>
  </table>
</div>
      `,
      theoryEn: `<h3>IDS/IPS Engineering: Snort & Suricata Rule Syntax, Writing Signatures & Zeek Telemetry</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: هندسة القواعد وتجنب التنبيهات الكاذبة (Tuning False Positives)</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف يتهرب الهكر من قواعد الـ IDS؟</h4>
    <ul>
      <li>استخدام التشفير أو ترميز البايلود بنسخ متبادلة لتفادي مطابقة النصوص الثابتة (مثل استخدام <code>%20</code> أو علامات التعليق داخل SQLi).</li>
      <li>إغراق الـ IDS بآلاف الحزم المزيفة لإشغال المعالج (Resource Exhaustion) وتجاوز الحزم الحقيقية بدون فحص.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 أسلوب مهندس الـ SOC المحترف</h4>
    <ul>
      <li><strong>كتابة قواعد ذكية بالاعتماد على Regular Expressions (PCRE):</strong> استخدام محددات <code>pcre:"/regex/"</code> لمطابقة أنماط متغيرة ومتحورة للهجمات.</li>
      <li><strong>ضبط التنبيهات الكاذبة (Tuning):</strong> تعديل القواعد التي تطلق آلاف التنبيهات لأسباب مشروعة وإضافة استثناءات (Whitelisting) لخوادم الشركة المعتمدة.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Signature Evasion vs PCRE Heuristics & False Positive Tuning</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 5.3: قراءة واختبار قواعد Suricata ضد حزم الهجمات</h4>
    <p>تدرب على فحص ملفات القواعد ومطابقة تنبيهات Suricata مع السجلات الخام.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-5-3">
      <div class="term-line output">Suricata / Snort Engine Simulator</div>
      <div class="term-line output">Type 'cat-suricata-rules' or 'test-snort-rule'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('cat /etc/suricata/rules/local.rules', 'lab-term-5-3')">Inspect Suricata Local Rules</button>
    <button class="btn-cmd" onclick="runSimCommand('suricata -r test.pcap -l /var/log/suricata', 'lab-term-5-3')">Execute Suricata PCAP Replay</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Snort/Suricata rule testing and syntax verification.</p>`,
      ticket: {
        ticketId: "SEC-TICK-503",
        severity: "HIGH",
        severityClass: "high",
        sourceHost: "SURICATA-SENSOR-EDGE",
        timestamp: "2026-11-06 23:12:00 UTC",
        ruleTriggered: "SURICATA_RULE_HIT_ET_MALWARE_COBALT_STRIKE_METADATA_HEADER",
        rawLog: `TIMESTAMP: 2026-11-06 23:12:00.320
SENSOR: SURICATA-SENSOR-EDGE (eth1)
ALERT: [1:2024810:3] ET MALWARE Cobalt Strike Malleable C2 HTTP Cookie Artifact
SRC_IP: 10.140.20.45 (Accounting PC)
DST_IP: 185.220.101.5 (External Server - Netherlands)
PROTO: TCP (Port 80)
RULE_DETAIL:
  alert http $HOME_NET any -> $EXTERNAL_NET any (msg:"ET MALWARE Cobalt Strike Cookie"; flow:established,to_server; http.cookie; content:"CF-RAY="; depth:7; content:"gmt="; distance:0; sid:2024810; rev:3;)
PAYLOAD_SNIPPET:
  Cookie: CF-RAY=a9fbc12048d; gmt=ZXBoaW1lcmFsX2NvbW1hbmRfcmVxdWVzdA==`,
        questionAr: "أمامك تنبيه من نظام Suricata طابق قاعدة رصد برمجية Cobalt Strike في ترويسة الكوكيز. ما سبب إطلاق التنبيه وما خطورة هذا الحادث؟",
        questionEn: "Analyze the Suricata rule hit for Cobalt Strike in the Cookie header. What triggered the alert and what is the severity?",
        optionsAr: [
          "تصفح عادي لموقع يستخدم شبكة حماية Cloudflare (بسبب وجود كوكيز CF-RAY).",
          "تنبيه مؤكد وحرج جداً (True Positive): المهاجم استخدم ملف تكوين C2 خبيث (Malleable C2 Profile) يتنكر في شكل ترويسات Cloudflare، ولكن قاعدة Suricata فحصت الترويسة ورصدت كود Base64 لأوامر التحكم مخفية داخل الكوكيز! الإجراء: عزل جهاز المحاسبة فوراً وحظر الـ IP.",
          "خطأ في قاعدة Suricata لأنها قديمة.",
          "المحاسب يشتري بضائع عبر الإنترنت."
        ],
        optionsEn: [
          "Normal Cloudflare protected browsing.",
          "Confirmed Critical Incident (True Positive): Cobalt Strike Malleable C2 profile masquerading as Cloudflare headers, passing Base64 C2 beacons in Cookies. Isolate host immediately.",
          "Outdated Suricata rule false alarm.",
          "Accounting staff online shopping."
        ],
        correctIndex: 1,
        explanationAr: "تحليل استثنائي نخبوي يا باشمهندس بشار! هذا هو السر الذي تميز به مهندسو شركة Emerging Threats في كتابة هذه القاعدة: المهاجمون يقلدون ترويسات Cloudflare (CF-RAY) لخداع جدران الحماية، لكنهم يضعون بداخلها محددات الأوامر المشفرة بـ Base64 (gmt=...) للتواصل مع الـ C2! قاعدة Suricata التقطت هذا النمط الحرفي بدقة، مما يؤكد أن جهاز المحاسبة مصاب ببايلود Cobalt Strike نشط ويجب عزله فوراً.",
        explanationEn: "Spot-on! Sophisticated adversary evasion technique: Weaponizing fake Cloudflare cookie headers to tunnel Base64 C2 communications, accurately caught by Suricata content matching."
      }
    },

    {
      id: "lesson-5-4",
      moduleId: "module5",
      number: "5.4",
      titleAr: "تطور حماية الأجهزة: Antivirus التقليدي vs EDR و XDR وقراءة شجرة العمليات وعزل المضيف",
      titleEn: "Endpoint Evolution: Legacy Antivirus vs EDR/XDR, Process Trees & Host Containment",
      duration: "70 min",
      theoryAr: `
<h3>ثورة أمن النقاط الطرفية: لماذا مات الـ Antivirus التقليدي ووُلد وحش الـ EDR؟</h3>
<p class="lead">في الماضي، كان يكفي تثبيت برنامج مكافحة فيروسات مجاني ليحميك. أما اليوم، فأخطر الهجمات في العالم لا تستخدم فيروسات أصلاً (Malware-less Attacks)! تستخدم برامج ويندوز الرسمية المشروعة للتخريب. هنا جاءت أنظمة <strong>EDR (Endpoint Detection & Response)</strong> لتغير قواعد اللعبة إلى الأبد.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: حارس البوابة بقائمة المطلوبين مقابل جهاز كشف الكذب والمحقق الذكي</div>
  <p><strong>الـ Antivirus التقليدي (Signature-based):</strong> مثل حارس أمن معه ألبوم صور للمجرمين القدامى (قاعدة بيانات التواقيع والهاشات المعروفة). إذا دخل مجرم معروف يمسكه. ولكن إذا دخل مجرم جديد يغير شكله ويلبس بدلة رسمية، فيرحب به ويدخله بابتسامة!</p>
  <p><strong>نظام الـ EDR (Endpoint Detection & Response):</strong> مثل محقق جنائي يراقب السلوك (Behavioral Telemetry)! لا يهمه شكلك أو اسمك؛ إذا رآك تخرج مطرقة وتبدأ بتكسير الجدران وتتصل بأرقام مريبة، فإنه يقبض عليك فوراً حتى لو كان سجلك الجنائي نظيفاً تماماً!</p>
</div>

<h4>1. المقارنة الجوهرية بين الأجيال الثلاثة: Antivirus vs EDR vs XDR:</h4>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>المعيار</th>
        <th>الـ Antivirus التقليدي (AV)</th>
        <th>نظام الـ EDR المتقدم</th>
        <th>نظام الـ XDR الشامل</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>طريقة الكشف</strong></td>
        <td>بصمات الهاش والتواقيع الثابتة للملفات المعروفة مسبقاً (Known Signatures).</td>
        <td>التحليل السلوكي المستمر (Behavioral Heuristics & Anomaly Detection).</td>
        <td>الربط المتبادل بين الأجهزة، الشبكة، السحابة، والإيميل (Multi-vector Correlation).</td>
      </tr>
      <tr>
        <td><strong>كشف الهجمات غير المعتمدة على ملفات (Fileless)</strong></td>
        <td>أعمى تماماً (0% كشف للهجمات المقيمة في الذاكرة فقط).</td>
        <td><strong>ممتاز جداً!</strong> يراقب حقن الذاكرة (Process Injection) وسلوك PowerShell المشفر.</td>
        <td>ممتاز جداً ويتتبع مسار الهجوم بالكامل من أول وصول بالإيميل حتى الذاكرة.</td>
      </tr>
      <tr>
        <td><strong>قدرات الاستجابة الفورية (Response Actions)</strong></td>
        <td>حذف الملف أو وضعه في الحجر الصحي (Quarantine) فقط.</td>
        <td><strong>ترسانة استجابة متكاملة:</strong> عزل الجهاز عن الشبكة بنقرة زر (Host Isolation)، قتل العمليات، وسحب الذاكرة، وفتح تيرمينال مباشر (Live Response Shell)!</td>
        <td>عزل الجهاز، حظر الـ IP في الجدار الناري، وحذف الإيميل المشبوه من جميع صناديق بريد الموظفين في نفس الثانية!</td>
      </tr>
      <tr>
        <td><strong>أشهر الحلول الرائدة عالمياً</strong></td>
        <td>Symantec, McAfee, Avast القديمة.</td>
        <td><strong>CrowdStrike Falcon</strong>, <strong>Microsoft Defender for Endpoint (MDE)</strong>, <strong>SentinelOne</strong>, <strong>Carbon Black</strong>.</td>
        <td>Palo Alto Cortex XDR, Trend Micro Vision One.</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>2. قراءة شجرة العمليات في منصات الـ EDR (Process Visualizer Tree):</h4>
<p>في واجهة منصات الـ EDR مثل CrowdStrike أو Defender، عندما يضغط المحلل على تنبيه، يفتح له رسم بياني تفاعلي لشجرة العمليات (Visual Graph) يوضح:</p>
<pre class="ascii-flow">
[ outlook.exe ]  (الموظف فتح رسالة الإيميل)
       │
       └── [ chrome.exe ]  (ضغط على رابط التنزيل في الإيميل)
              │
              └── [ invoice_payload.exe ]  (تم تشغيل الملف المحمل)
                     │
                     ├── [ cmd.exe /c whoami ]  (استكشاف صلاحيات الجهاز)
                     └── [ powershell.exe -enc ... ]  (محاولة الاتصال بالـ C2)
</pre>

<h4>3. زر الطوارئ الذهبي: عزل المضيف (Host Containment / Isolation):</h4>
<p>أعظم ميزة في أنظمة الـ EDR! عندما تكتشف برمجية فدية أو هجوماً نشطاً، تضغط فوراً على زر <strong>Network Containment</strong>. يقوم وكيل الـ EDR بقطع جميع كروت الشبكة والواي فاي والاتصالات عن الجهاز بنسبة 100%، ويترك <em>فقط</em> قناة اتصال واحدة مشفرة بين الجهاز وسيرفر الـ EDR لتمكين محلل الـ SOC من التحقيق وتنظيف الجهاز دون أن يتمكن المهاجم من التسلل لباقي الشركة!</p>
      `,
      theoryEn: `<h3>Endpoint Evolution: Antivirus vs EDR vs XDR, Process Visualization & Host Isolation Playbooks</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: صراع وكلاء الـ EDR ومحاولات التعطيل (EDR Silencing)</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف يهاجم الهكر أنظمة الـ EDR؟</h4>
    <ul>
      <li><strong>تقنية BYOVD (Bring Your Own Vulnerable Driver):</strong> تحميل درايفر شرعي قديم موقع رسمياً لمايكروسوفت به ثغرة معروفة، واستغلاله للدخول لكيرنل ويندوز وقتل برنامج تشغيل الـ EDR في صمت!</li>
      <li><strong>التعتيم على الـ API (Direct System Calls):</strong> عدم استخدام دوال ويندوز القياسية التي يراقبها الـ EDR واستدعاء النواة مباشرة للهروب من خطافات المراقبة (Unhooking).</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 رد مهندسي الـ EDR والـ SOC</h4>
    <ul>
      <li><strong>ميزة الحماية من العبث (Tamper Protection):</strong> منع أي مستخدم أو برنامج (حتى لو كان Administrator) من إيقاف خدمة الـ EDR أو حذف ملفاتها إلا برقم سري خاص من السحابة.</li>
      <li><strong>تنبيهات انقطاع النبضات (Heartbeat Loss Alerts):</strong> إذا توقف وكيل الـ EDR عن إرسال تقريره لأكثر من 5 دقائق، يُطلق الـ SIEM إنذاراً أحمر باحتمال قيام مهاجم بقتل الحماية!</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: EDR Silencing & BYOVD vs Tamper Protection & Heartbeat Telemetry</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 5.4: محاكاة منصة EDR وعزل جهاز مصاب بضغطة زر</h4>
    <p>تدرب على استعراض تفاصيل التنبيه في شجرة عمليات الـ EDR وتفعيل ميزة Host Isolation.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-5-4">
      <div class="term-line output">BasharSec Cloud EDR Console Simulator (CrowdStrike / Defender Mock)</div>
      <div class="term-line output">Type 'edr-alerts' or 'isolate-host FIN-WS-02'.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('edr-inspect-tree FIN-WS-02', 'lab-term-5-4')">View EDR Process Execution Tree</button>
    <button class="btn-cmd" onclick="runSimCommand('edr-isolate FIN-WS-02', 'lab-term-5-4')">Execute Network Host Isolation</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive EDR console simulation, process tree view & network isolation.</p>`,
      ticket: {
        ticketId: "SEC-TICK-504",
        severity: "CRITICAL",
        severityClass: "critical",
        sourceHost: "CROWDSTRIKE-FALCON-CLOUD",
        timestamp: "2026-11-06 23:58:12 UTC",
        ruleTriggered: "EDR_CRITICAL_RANSOMWARE_BEHAVIOR_CANARY_FILE_MODIFIED",
        rawLog: `AGENT_ID: cs-agent-99410284
HOST: ACC-PC-15.corp.local (10.140.20.15)
USER: CORP\\sally.accounting
SEVERITY: 100 / 100 (Critical)
BEHAVIORAL_DETECTION:
  Process 'excel.exe' spawned 'powershell.exe'
  Process 'powershell.exe' downloaded and executed 'C:\\Users\\sally\\AppData\\Local\\Temp\\encrypter.exe'
  Process 'encrypter.exe' modified 45 files in C:\\Users\\sally\\Documents with extension .locked
  Process 'encrypter.exe' executed: vssadmin.exe delete shadows /all /quiet (Attempt to destroy volume shadow copies)
RECOMMENDED_ACTION: Immediate Host Isolation`,
        questionAr: "تلقيت تنبيهاً حرجاً بدرجة 100/100 من منصة الـ EDR يوثق تشفير ملفات وحذف النسخ الاحتياطية vssadmin delete shadows. ما هو الإجراء الفوري الحتمي لمحلل الـ SOC؟",
        questionEn: "Analyze the Critical 100/100 EDR alert documenting mass file encryption and shadow copy deletion. What is the immediate required action?",
        optionsAr: [
          "إرسال إيميل للمستخدمة لسؤالها إذا كانت تقوم بتنظيف جهازها.",
          "الضغط الفوري على زر عزل الجهاز (Network Host Isolation) في منصة الـ EDR لقطع الاتصال عن الجهاز في ثوانٍ ومنع برمجية الفدية من تشفير الخوادم المشتركة للشركة، ثم قتل شجرة العمليات والبدء في بروتوكول الاستجابة للحوادث.",
          "إعادة تشغيل الجهاز فقط.",
          "تجاهل التنبيه لأن مكافح الفيروسات سيتولى الأمر تلقائياً."
        ],
        optionsEn: [
          "Email user inquiring about activity.",
          "Execute instant Host Isolation via EDR to prevent ransomware spread to network shares, terminate malicious process tree, and initiate Incident Response Playbook.",
          "Reboot host.",
          "Ignore alert."
        ],
        correctIndex: 1,
        explanationAr: "قرار حاسم ينقذ الشركة بالكامل من الإفلاس يا باشمهندس بشار! هذا هو السيناريو الذي يُختبر فيه محللو الـ SOC: عندما ترى أمراً بحذف النسخ الاحتياطية (vssadmin delete shadows /all /quiet) وبدء تغيير امتدادات الملفات لـ .locked، فأنت أمام برمجية فدية نشطة تدمر الجهاز الآن. أي ثانية تأخير تعني وصول الفدية للمجلدات المشتركة. الضغط الفوري على Host Isolation يقطع الجهاز عن الشبكة في ثانية واحدة ويشل حركة المهاجم فوراً.",
        explanationEn: "Conclusive correct triage! Real-time ransomware deployment with shadow copy deletion mandates instantaneous EDR Network Isolation to halt lateral movement and enterprise-wide encryption."
      }
    }
  ]
};
