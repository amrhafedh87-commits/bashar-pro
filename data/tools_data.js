// SOC Tools & Commands Encyclopedia Data - BasharSec Academy
// Covers all 11 essential SOC tools with deep commands reference (Bilingual: Arabic & English)

const socToolsData = [
  {
    id: "tool-wireshark",
    name: "Wireshark",
    icon: "🦈",
    category: "Network Forensics",
    categoryAr: "تحليل حركة الشبكة والحزم",
    summaryAr: "أقوى أداة مفتوحة المصدر لالتقاط حزم البيانات (Packets) وفحص محتويات الترافيك وتحليل ملفات الـ PCAP وفك تشفير الاتصالات.",
    summaryEn: "The world's foremost open-source packet analyzer for deep traffic inspection, PCAP analysis, protocol debugging, and stream reconstruction.",
    howWeUseItAr: "تُستخدم في الـ SOC للتحقيق في التنبيهات الشبكية المشبوهة، فحص تسريب البيانات، التحقق من هجمات التصيد والـ Malware C2، وإعادة تجميع المحادثات عبر Follow TCP Stream.",
    howWeUseItEn: "Used in SOC operations to investigate suspicious network alerts, examine data exfiltration, dissect phishing and malware C2 sessions, and reconstruct conversations using Follow TCP Stream.",
    commands: [
      { cmd: 'ip.addr == 192.168.1.50', desc: 'فلترة جميع الحزم الصادرة من أو المتجهة إلى عنوان IP محدد.', descEn: 'Filter all packets originating from or destined to a specific IP address.' },
      { cmd: 'http.request.method == "POST"', desc: 'عرض طلبات POST فقط للبحث عن رفع الملفات وكلمات المرور المرسلة.', descEn: 'Display HTTP POST requests to uncover file uploads and transmitted credentials.' },
      { cmd: 'tcp.flags.syn == 1 and tcp.flags.ack == 0', desc: 'فلترة حزم بدء الاتصال لاكتشاف فحوصات المنافذ (SYN Port Scans).', descEn: 'Filter connection initiation packets to detect SYN port scans.' },
      { cmd: 'dns.flags.response == 0 and dns.qry.type == 16', desc: 'فلترة استعلامات DNS من نوع TXT المستخدمة في تهريب البيانات (DNS Tunneling).', descEn: 'Filter DNS TXT queries frequently leveraged in DNS tunneling and exfiltration.' },
      { cmd: 'frame contains "SELECT" or frame contains "UNION"', desc: 'البحث عن نصوص حقن قواعد البيانات (SQLi) داخل حزم الترافيك.', descEn: 'Search for SQL injection patterns directly within captured packet payloads.' },
      { cmd: 'smb2.filename contains ".exe"', desc: 'رصد تداول ونقل ملفات تنفيذية عبر بروتوكول مشاركة الملفات SMB.', descEn: 'Monitor executable binaries transferred across the network via SMB protocol.' },
      { cmd: 'ssl.handshake.type == 1', desc: 'فلترة طلبات بدء المصافحة المشفرة Client Hello واستخراج أسماء النطاقات عبر SNI.', descEn: 'Filter TLS Client Hello handshakes to extract target domain names via SNI.' },
      { cmd: 'tcp.analysis.retransmission', desc: 'كشف مشاكل الشبكة وحزم إعادة الإرسال التي قد تدل على هجمات حجب الخدمة.', descEn: 'Detect network retransmissions and bottlenecks indicative of potential DoS attacks.' }
    ]
  },
  {
    id: "tool-splunk",
    name: "Splunk Enterprise SIEM",
    icon: "⚡",
    category: "SIEM & Analytics",
    categoryAr: "إدارة السجلات والتحليل الأمني المتقدم",
    summaryAr: "المنصة الرائدة عالمياً لجمع وفهرسة مليارات السجلات الأمنية والبحث فيها بلغة SPL وبناء لوحات المراقبة الحية وقواعد الربط.",
    summaryEn: "The enterprise-leading log aggregation and SIEM platform for indexing billions of security events, performing SPL queries, and generating real-time correlation alerts.",
    howWeUseItAr: "تُعتبر الشاشة الرئيسية لمحلل الـ SOC؛ يُكتب فيها استعلامات التحقيق في الهجمات، كشف محاولات كسر كلمات المرور، وربط أحداث ويندوز مع جدران الحماية.",
    howWeUseItEn: "Acts as the SOC analyst's primary cockpit: writing threat investigation queries, uncovering brute-force attempts, and correlating Windows endpoint events with perimeter firewalls.",
    commands: [
      { cmd: 'index=windows EventCode=4625 | stats count by TargetUserName, Source_Network_Address | where count > 10 | sort -count', desc: 'كشف هجمات التخمين Brute Force إذا تجاوزت 10 محاولات فاشلة.', descEn: 'Detect brute-force attempts by flagging over 10 consecutive failed logins.' },
      { cmd: 'index=sysmon EventCode=1 (CommandLine="*powershell*" AND (CommandLine="*-enc*" OR CommandLine="*-EncodedCommand*"))', desc: 'كشف تشغيل PowerShell بأوامر مشفرة بترميز Base64.', descEn: 'Detect obfuscated PowerShell execution utilizing Base64 encoded commands.' },
      { cmd: 'index=sysmon EventCode=10 TargetImage="*\\\\lsass.exe*" NOT SourceImage="*\\\\csrss.exe*"', desc: 'كشف محاولات سرقة كلمات المرور وتفريغ ذاكرة LSASS عبر أداة Mimikatz.', descEn: 'Detect credential theft and LSASS memory dumping attempts via tools like Mimikatz.' },
      { cmd: 'index=windows EventCode=7045 ServiceName="*PSEXEC*" OR ImagePath="*\\\\ADMIN$*"', desc: 'كشف الحركة الجانبية في الشبكة باستخدام أداة PsExec.', descEn: 'Detect lateral movement within the network using PsExec or remote administrative shares.' },
      { cmd: 'index=web status>=400 | stats count by src_ip, uri_path | sort -count', desc: 'رصد عناوين IP التي تولد أخطاء ويب متكررة لاكتشاف أدوات فحص المسارات.', descEn: 'Identify source IPs generating frequent HTTP errors to catch web scanners.' },
      { cmd: 'index=* "eval(" OR "base64_decode(" OR "shell_exec("', desc: 'البحث عن نصوص أصداف الويب الخبيثة (Web Shells) داخل السجلات.', descEn: 'Hunt for malicious web shell patterns across application and web access logs.' }
    ]
  },
  {
    id: "tool-wazuh",
    name: "Wazuh SIEM / XDR",
    icon: "🛡️",
    category: "SIEM & XDR",
    categoryAr: "منظومة المراقبة والاستجابة المفتوحة المصدر",
    summaryAr: "نظام أمني متكامل يجمع بين SIEM و XDR ومراقبة سلامة الملفات (FIM) وكشف الثغرات وتقييم الامتثال الأمني.",
    summaryEn: "Comprehensive open-source SIEM and XDR solution combining host-based log analysis, file integrity monitoring (FIM), vulnerability assessment, and active response.",
    howWeUseItAr: "تثبيت عميل Wazuh Agent على الخوادم ومحطات العمل لمراقبة السجلات الحية، وتطبيق قواعد الكشف، وحظر العناوين المشبوهة تلقائياً عبر Active Response.",
    howWeUseItEn: "Deploying Wazuh Agents across endpoints and servers to collect live telemetry, apply detection rules, and automatically block malicious IPs via Active Response.",
    commands: [
      { cmd: '/var/ossec/bin/agent_control -l', desc: 'عرض قائمة بجميع الأجهزة والخوادم المتصلة وحالة عميل Wazuh في كل منها.', descEn: 'List all enrolled endpoints and verify their active Wazuh agent status.' },
      { cmd: '/var/ossec/bin/wazuh-control status', desc: 'التحقق من حالة تشغيل جميع خدمات وخوادم Wazuh المركزية.', descEn: 'Check the operational status of all central Wazuh server daemons.' },
      { cmd: 'tail -f /var/ossec/logs/alerts/alerts.json | jq .', desc: 'مراقبة تدفق التنبيهات الأمنية الحية بتنسيق JSON المنسق.', descEn: 'Stream and monitor real-time security alerts formatted with JSON syntax.' },
      { cmd: '/var/ossec/bin/wazuh-logtest', desc: 'تشغيل أداة اختبار القواعد؛ الصق سجلاً خاماً لمعرفة أي قاعدة Wazuh ستلتقطه.', descEn: 'Launch the rule testing tool; paste raw logs to test which Wazuh rule triggers.' },
      { cmd: '/var/ossec/bin/syscheck_control -l', desc: 'استعراض تقارير فحص سلامة الملفات (File Integrity Monitoring).', descEn: 'Inspect file integrity monitoring (FIM) scan results and change reports.' }
    ]
  },
  {
    id: "tool-sysmon",
    name: "Microsoft Sysmon",
    icon: "🔬",
    category: "Endpoint Telemetry",
    categoryAr: "مراقبة عمق نواة نظام ويندوز",
    summaryAr: "أداة من حزمة Sysinternals تُثبت كخدمة نظام ومستشعر في طبقة النواة (Kernel Driver) لمراقبة أدق العمليات والاتصالات والملفات في ويندوز.",
    summaryEn: "Kernel-level system service and device driver from Sysinternals that provides granular monitoring of processes, network connections, and file modifications in Windows.",
    howWeUseItAr: "توليد السجلات الذهبية غير القابلة للتمويه وإرسالها للـ SIEM؛ لكشف تقنيات LOLBins، وتعديلات الريجستري، وحقن الذاكرة.",
    howWeUseItEn: "Generates tamper-resistant golden telemetry forwarded to SIEM to detect LOLBins execution, registry tampering, and process memory injection.",
    commands: [
      { cmd: 'sysmon.exe -accepteula -i sysmonconfig.xml', desc: 'تثبيت خدمة ومستشعر Sysmon باستخدام ملف تكوين محدد (مثل ملف SwiftOnSecurity).', descEn: 'Install Sysmon driver and service using a tailored configuration profile (e.g. SwiftOnSecurity).' },
      { cmd: 'sysmon.exe -c updated_config.xml', desc: 'تحديث قواعد وإعدادات مستشعر Sysmon دون الحاجة لإعادة تشغيل الجهاز.', descEn: 'Hot-reload and update Sysmon configuration without rebooting the system.' },
      { cmd: 'sysmon.exe -u', desc: 'إلغاء تثبيت مستشعر Sysmon وحذف خدمة النظام.', descEn: 'Uninstall Sysmon driver and cleanly remove its system services.' },
      { cmd: 'Get-WinEvent -LogName "Microsoft-Windows-Sysmon/Operational" -MaxEvents 50', desc: 'استخراج أحدث 50 حدثاً أمنياً من سجلات Sysmon عبر PowerShell.', descEn: 'Query the most recent 50 security events from Sysmon operational log via PowerShell.' },
      { cmd: 'Get-WinEvent -FilterHashtable @{LogName="Microsoft-Windows-Sysmon/Operational";ID=1} -MaxEvents 10', desc: 'عرض أحدث 10 عمليات تم إنشاؤها في النظام مع أسطر الأوامر والهاشات.', descEn: 'Inspect the last 10 process creation events (Event ID 1) with command lines and hashes.' }
    ]
  },
  {
    id: "tool-nmap",
    name: "Nmap Network Scanner",
    icon: "🧭",
    category: "Network Reconnaissance",
    categoryAr: "استكشاف الشبكات وفحص المنافذ",
    summaryAr: "الأداة الأولى عالمياً لاستكشاف الشبكات، فحص المنافذ المفتوحة، التعرف على أنظمة التشغيل، وتدقيق إصدارات الخدمات والثغرات.",
    summaryEn: "The definitive network exploration and vulnerability scanner for port discovery, service enumeration, OS fingerprinting, and scriptable vulnerability scanning via NSE.",
    howWeUseItAr: "في الـ SOC نستخدمها للتحقق من أمان الشبكة الداخلية، ومسح الأجهزة الجديدة، وفهم كيفية ظهور الخوادم أمام المهاجمين الخارجيين.",
    howWeUseItEn: "SOC teams utilize Nmap for perimeter auditing, newly provisioned host discovery, and understanding the external attack surface exposed to adversaries.",
    commands: [
      { cmd: 'nmap -sS -p- -T4 10.0.0.5', desc: 'فحص خفي وسريع (SYN Stealth Scan) لجميع المنافذ الـ 65535 لجهاز معين.', descEn: 'Perform a fast, stealthy SYN scan across all 65,535 TCP ports on a target host.' },
      { cmd: 'nmap -sV -sC -O 192.168.1.1', desc: 'استكشاف إصدارات الخدمات (Version Detection) وتطبيق السكربتات الافتراضية وتحديد نظام التشغيل.', descEn: 'Detect service versions, execute standard NSE scripts, and fingerprint the host OS.' },
      { cmd: 'nmap -sn 192.168.1.0/24', desc: 'مسح سريع (Ping Sweep) لاكتشاف جميع الأجهزة النشطة على قيد الحياة في الشبكة دون فحص المنافذ.', descEn: 'Execute a fast ping sweep to discover active live hosts across a subnet.' },
      { cmd: 'nmap -p 80,443 --script http-vuln* 10.0.4.20', desc: 'فحص خادم الويب للبحث عن الثغرات الشائعة باستخدام محرك السكربتات NSE.', descEn: 'Scan web servers for known vulnerabilities using Nmap Scripting Engine.' },
      { cmd: 'nmap -p 445 --script smb-vuln-ms17-010 10.0.0.0/24', desc: 'فحص الشبكة بحثاً عن ثغرة EternalBlue (ثغرة دودة WannaCry الشهيرة).', descEn: 'Audit network for EternalBlue vulnerability (MS17-010 WannaCry exploit).' }
    ]
  },
  {
    id: "tool-snort",
    name: "Snort IDS / IPS",
    icon: "🐗",
    category: "Network Defense",
    categoryAr: "كشف ومنع التطفل الشبكي",
    summaryAr: "نظام كشف ومنع التسلل الشبكي مفتوح المصدر الأكثر انتشاراً في العالم؛ يعتمد على مطابقة التواقيع لفحص حزم البيانات في الوقت الفعلي.",
    summaryEn: "The world's most deployed open-source network intrusion detection and prevention system, executing signature matching and protocol analysis in real time.",
    howWeUseItAr: "رصد ومنع استغلال الثغرات المعروفة، كشف فحوصات المنافذ، وتنبيه الـ SIEM فور محاولة استغلال بايلودات الاختراق عبر الشبكة.",
    howWeUseItEn: "Intercepts known exploit patterns, alerts on network scanning activity, and pushes high-fidelity intrusion indicators directly to SIEM pipelines.",
    commands: [
      { cmd: 'snort -v -i eth0', desc: 'تشغيل Snort في وضع Sniffer لعرض رؤوس حزم الترافيك الحية على الشاشة.', descEn: 'Run Snort in sniffer mode to output live packet headers directly to the terminal.' },
      { cmd: 'snort -vd -i eth0', desc: 'عرض رؤوس الحزم بالإضافة إلى محتوى البيانات (Payload) الداخلي للنصوص.', descEn: 'Display live packet headers alongside decoded application payload data.' },
      { cmd: 'snort -c /etc/snort/snort.conf -i eth0 -A console', desc: 'تشغيل المحرك في وضع IDS وتطبيق القواعد وإظهار التنبيهات مباشرة في الكونسول.', descEn: 'Run in full IDS mode using ruleset and stream alerts directly to console.' },
      { cmd: 'snort -T -c /etc/snort/snort.conf', desc: 'اختبار صحة تكوين ملف القواعد (Configuration Test) للتأكد من خلوه من الأخطاء النحوية.', descEn: 'Validate configuration syntax and test ruleset integrity before production launch.' },
      { cmd: 'snort -r traffic.pcap -c /etc/snort/snort.conf', desc: 'تطبيق القواعد على ملف PCAP مسجل مسبقاً للتحقيق الجنائي بأثر رجعي.', descEn: 'Run signature rules against historical PCAP captures for retrospective analysis.' }
    ]
  },
  {
    id: "tool-zeek",
    name: "Zeek (formerly Bro)",
    icon: "👁️",
    category: "Network Analysis",
    categoryAr: "تحليل وتصنيف بروتوكولات الشبكة",
    summaryAr: "محرك قوي جداً يراقب حركة الشبكة ويحولها إلى سجلات عليا مفهرسة ومنظمة تفصّل كل اتصال (conn.log, dns.log, http.log, ssl.log).",
    summaryEn: "A high-performance network security monitor that transforms raw network packets into structured, behavioral transaction logs (conn.log, dns.log, http.log, ssl.log).",
    howWeUseItAr: "يوفر للـ SOC استعلامات سريعة جداً دون الحاجة لفتح ملفات PCAP الضخمة؛ فيمكن استعلام جميع استعلامات DNS لآلاف المستخدمين في ثوانٍ.",
    howWeUseItEn: "Delivers rapid contextual querying without parsing gigabytes of raw PCAPs, enabling SOC analysts to investigate millions of DNS and HTTP requests in seconds.",
    commands: [
      { cmd: 'zeek -r capture.pcap', desc: 'تحليل ملف PCAP وتوليد جميع سجلات Zeek المنظمة في المجلد الحالي.', descEn: 'Analyze a PCAP file and output organized Zeek transaction logs to the working directory.' },
      { cmd: 'cat conn.log | zeek-cut id.orig_h id.resp_h id.resp_p proto service orig_bytes resp_bytes', desc: 'استخراج أعمدة الاتصال الشبكي الأساسية من سجل الاتصالات.', descEn: 'Extract fundamental connection fields from the Zeek connection log.' },
      { cmd: 'cat dns.log | zeek-cut query answers | sort | uniq -c | sort -nr | head -10', desc: 'استخراج أكثر 10 نطاقات DNS تم الاستعلام عنها في الشبكة.', descEn: 'Identify the top 10 most queried DNS domains across the monitored network.' },
      { cmd: 'cat http.log | zeek-cut id.orig_h host uri user_agent status_code', desc: 'استخراج حركة الويب ببيانات الـ IP والموقع والـ User-Agent وكود الحالة.', descEn: 'Extract HTTP transactions detailing client IP, requested host, URI, and User-Agent.' },
      { cmd: 'cat notice.log', desc: 'عرض التنبيهات الأمنية والأنشطة المشبوهة التي التقطها محرك Zeek تلقائياً.', descEn: 'Review anomalous behaviors and built-in alerts flagged automatically by Zeek scripts.' }
    ]
  },
  {
    id: "tool-tcpdump",
    name: "Tcpdump CLI",
    icon: "📟",
    category: "Packet Capture",
    categoryAr: "التقاط الحزم من سطر الأوامر",
    summaryAr: "الأداة القياسية الخفيفة في أنظمة لينكس لالتقاط حزم الشبكة وتطبيق فلاتر BPF بدون الحاجة لأي واجهة رسومية.",
    summaryEn: "The standard, lightweight command-line packet capture tool for Unix/Linux systems, leveraging BPF filters without needing a graphical desktop.",
    howWeUseItAr: "التقاط الحزم الجنائية مباشرة من السيرفرات البعيدة أو أجهزة الجدران النارية وحفظها كملفات pcap لتحليلها في الـ SOC.",
    howWeUseItEn: "Capturing live forensic network evidence directly from remote headless servers and firewalls, exporting PCAP files for deep SOC review.",
    commands: [
      { cmd: 'tcpdump -i eth0 -n', desc: 'التقاط الحزم على واجهة eth0 وعرض العناوين الرقمية دون ترجمتها لنطاقات للسرعة.', descEn: 'Capture packets on eth0 displaying numerical addresses without DNS resolution for speed.' },
      { cmd: 'tcpdump -i any -w evidence.pcap -c 1000', desc: 'التقاط أول 1000 حزمة من جميع الواجهات وحفظها كملف PCAP جنائي.', descEn: 'Capture the first 1,000 packets across all interfaces and write to a PCAP file.' },
      { cmd: 'tcpdump -r evidence.pcap port 53', desc: 'قراءة ملف الحزم وفلترة حركة مرور خوادم الـ DNS فقط.', descEn: 'Read captured PCAP file filtering strictly for DNS port 53 traffic.' },
      { cmd: 'tcpdump -i eth0 "tcp[tcpflags] & (tcp-syn) != 0 and tcp[tcpflags] & (tcp-ack) == 0"', desc: 'التقاط حزم SYN الصافية لكشف محاولات فحص المنافذ.', descEn: 'Capture pure SYN packets to uncover port scanning activity.' },
      { cmd: 'tcpdump -A -i eth0 port 80', desc: 'طباعة محتوى الحزم بتنسيق ASCII لقراءة نصوص صفحات الويب غير المشفرة.', descEn: 'Print packet payloads in ASCII format to inspect unencrypted HTTP traffic.' },
      { cmd: 'tcpdump -nn -s 0 -C 100 -W 5 -w trace.pcap', desc: 'التقاط مستمر مع تقسيم الملفات إلى 100MB وتدوير 5 ملفات فقط لمنع امتلاء القرص.', descEn: 'Continuous capture rotating five 100MB ring buffers to prevent disk exhaustion.' }
    ]
  },
  {
    id: "tool-powershell",
    name: "PowerShell Incident Response",
    icon: "💻",
    category: "Endpoint Forensics",
    categoryAr: "التحقيق الجنائي وأتمتة الدفاع في ويندوز",
    summaryAr: "بيئة الأتمتة المتقدمة في أنظمة ويندوز؛ لا يستغني عنها محلل الـ SOC في التحقيق في العمليات، وفك التشفير، واستخراج السجلات الحية.",
    summaryEn: "Windows native automation and scripting framework indispensable for SOC responders to inspect volatile system state, decode scripts, and query logs.",
    howWeUseItAr: "جمع الأدلة الحية من الأجهزة عن بُعد، فحص برامج الإقلاع التلقائي، فك تشفير الأوامر المشبوهة، والتحقق من حسابات الدليل النشط.",
    howWeUseItEn: "Collecting remote forensic evidence, auditing startup persistence mechanisms, deobfuscating malicious scripts, and auditing Active Directory accounts.",
    commands: [
      { cmd: 'Get-WinEvent -FilterHashtable @{LogName=\'Security\';ID=4625} -MaxEvents 50', desc: 'استخراج آخر 50 محاولة دخول فاشلة من سجل الأمان.', descEn: 'Retrieve the 50 most recent failed logon attempts from the Windows Security log.' },
      { cmd: '[System.Text.Encoding]::Unicode.GetString([System.Convert]::FromBase64String("BASE64_CODE"))', desc: 'فك تشفير أوامر PowerShell المشفرة بترميز Base64 لمعرفة الكود الحقيقي.', descEn: 'Decode Base64-obfuscated PowerShell payloads to reveal raw commands.' },
      { cmd: 'Get-Process | Where-Object { $_.Path -notmatch "C:\\\\Windows" } | Select Id, ProcessName, Path', desc: 'عرض العمليات التي تعمل من مسارات غير نظامية (مؤشر برمجيات خبيثة).', descEn: 'Identify active processes running outside standard Windows directories (malware indicator).' },
      { cmd: 'Get-CimInstance Win32_StartupCommand | Select Name, Command, Location, User', desc: 'فحص جميع البرامج التي تعمل تلقائياً عند إقلاع ويندوز (Persistence Check).', descEn: 'Audit all auto-start programs and registry run keys for persistence mechanisms.' },
      { cmd: 'Get-NetTCPConnection -State Established | Select LocalAddress, LocalPort, RemoteAddress, RemotePort, OwningProcess', desc: 'عرض جميع الاتصالات الشبكية النشطة حالياً ورقم العملية PID المرتبطة بها.', descEn: 'List active network connections mapped directly to their parent process PID.' },
      { cmd: 'Get-Service | Where-Object { $_.Status -eq "Running" -and $_.DisplayName -notmatch "Microsoft" }', desc: 'عرض الخدمات النشطة غير التابعة لمايكروسوفت لتدقيقها جنائياً.', descEn: 'Audit non-Microsoft running services for suspicious third-party persistence.' }
    ]
  },
  {
    id: "tool-linux-cli",
    name: "Linux CLI Forensics",
    icon: "🐧",
    category: "System Investigation",
    categoryAr: "أوامر التحقيق الجنائي في أنظمة لينكس",
    summaryAr: "الترسانة الأساسية لمحلل الـ SOC للتعامل مع خوادم لينكس والـ SIEM وسجلات الخوادم عبر أوامر grep, awk, sed, ss, lsof.",
    summaryEn: "The essential command-line utility toolkit for SOC analysts to investigate Linux servers, SIEM hosts, and system logs using grep, awk, sed, ss, and lsof.",
    howWeUseItAr: "فحص سجلات auth.log، استخراج إحصائيات زوار خوادم الويب، كشف الاتصالات الخلفية، وفحص المهام المجدولة (Cron Jobs).",
    howWeUseItEn: "Auditing auth.log for brute-force logins, analyzing web access traffic, discovering rogue listening ports, and inspecting unauthorized Cron persistence jobs.",
    commands: [
      { cmd: 'grep -ri "failed" /var/log/auth.log', desc: 'البحث عن جميع محاولات تسجيل الدخول الفاشلة عبر SSH أو sudo.', descEn: 'Search for all failed SSH and sudo authentication attempts.' },
      { cmd: 'awk \'{print $1}\' /var/log/nginx/access.log | sort | uniq -c | sort -nr | head -10', desc: 'استخراج أكثر 10 عناوين IP زارت السيرفر مع تكرار كل منها لاكتشاف هجمات DoS أو Scanners.', descEn: 'List the top 10 visitor IP addresses with hit counts to spot DoS or scanners.' },
      { cmd: 'netstat -tunap | grep ESTABLISHED', desc: 'عرض جميع الاتصالات النشطة حالياً مع رقم العملية واسم البرنامج.', descEn: 'Display all established network connections with associated PIDs and process names.' },
      { cmd: 'ps auxf', desc: 'عرض شجرة العمليات في لينكس لمعرفة العمليات الأب والأبناء والـ Shells المشبوهة.', descEn: 'Display the hierarchical process tree to detect anomalous child shells.' },
      { cmd: 'find / -perm -4000 -type f 2>/dev/null', desc: 'العثور على جميع الملفات ذات صلاحية SUID لاكتشاف محاولات تصعيد الصلاحيات لـ Root.', descEn: 'Find all SUID binaries to discover privilege escalation vulnerabilities.' },
      { cmd: 'crontab -l; cat /etc/crontab /etc/cron.*', desc: 'فحص جميع المهام المجدولة في النظام للكشف عن سكربتات البقاء التلقائي.', descEn: 'Inspect scheduled cron jobs across system directories for attacker persistence.' },
      { cmd: 'lsof -i :80 -i :443', desc: 'معرفة أي عملية تستخدم منافذ الويب حالياً والتأكد من هويتها.', descEn: 'Verify which exact processes and binaries are listening on web ports.' },
      { cmd: 'last -F -n 20', desc: 'عرض آخر 20 عملية تسجيل دخول للنظام مع التواريخ والأجهزة المصدر.', descEn: 'Display full login timestamps and source IPs for the last 20 system sessions.' }
    ]
  },
  {
    id: "tool-volatility",
    name: "Volatility Memory Forensics",
    icon: "🧠",
    category: "Memory Forensics",
    categoryAr: "التحقيق الجنائي المتقدم في الذاكرة العشوائية RAM",
    summaryAr: "الإطار البرمجي الرائد عالمياً للتحقيق الجنائي الرقمي في عينات تفريغ الذاكرة الحية (RAM Dumps) لأنظمة Windows و Linux و Mac.",
    summaryEn: "The world-renowned open-source framework for digital forensics and incident response on volatile RAM dumps across Windows, Linux, and macOS.",
    howWeUseItAr: "كشف البرمجيات الخبيثة المخبأة في الذاكرة (Fileless Malware)، واستخراج الـ Rootkits، وكشف هجمات حقن العمليات وسرقة كلمات المرور.",
    howWeUseItEn: "Detecting fileless malware, extracting hidden rootkits, identifying hollowed process injection, and recovering unencrypted passwords from memory.",
    commands: [
      { cmd: 'python3 vol.py -f memdump.raw windows.info', desc: 'التعرف على نظام التشغيل ومعلومات النواة والوقت الدقيق لالتقاط الذاكرة.', descEn: 'Identify operating system architecture, kernel version, and dump capture timestamp.' },
      { cmd: 'python3 vol.py -f memdump.raw windows.pstree', desc: 'عرض شجرة العمليات التي كانت نشطة لحظة التقاط الذاكرة مع المعرفات PIDs.', descEn: 'Render process execution hierarchy at the moment of memory acquisition.' },
      { cmd: 'python3 vol.py -f memdump.raw windows.malfind', desc: 'البحث عن مناطق الذاكرة المحقونة بأكواد خبيثة (Process Injection).', descEn: 'Hunt for injected code and hidden memory pages tagged with executable permissions.' },
      { cmd: 'python3 vol.py -f memdump.raw windows.netscan', desc: 'استخراج جميع الاتصالات الشبكية والمنافذ المفتوحة التي كانت قائمة لحظة أخذ العينة.', descEn: 'Extract active and terminated network sockets and open listening ports.' },
      { cmd: 'python3 vol.py -f memdump.raw windows.cmdline', desc: 'استخراج أسطر الأوامر الكاملة التي شُغلت بها العمليات من الذاكرة.', descEn: 'Recover complete historical command-line arguments passed to running processes.' },
      { cmd: 'python3 vol.py -f memdump.raw windows.dumpfiles --pid 1234', desc: 'استخراج الملفات التنفيذية والمكتبات لعملية معينة من الذاكرة لفحصها.', descEn: 'Carve and dump executable binaries and loaded DLLs belonging to a target PID.' }
    ]
  }
];
