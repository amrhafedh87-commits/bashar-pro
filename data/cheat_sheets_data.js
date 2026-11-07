// SOC Cheat Sheets & Quick Reference Data for BasharSec Academy
// Curated exclusively for Eng. Bashar Hafedh

const cheatSheetsData = {
  ports: [
    {
      port: 20,
      protocol: "FTP-Data",
      transport: "TCP",
      service: "File Transfer Protocol (Data)",
      socSignificance: "نقل ملفات بدون تشفير. في بيئات الـ SOC، يُعتبر استخدام FTP لنقل بيانات حساسة مؤشر خطر، ويُفضل استخدام SFTP/FTPS.",
      attacks: "Cleartext sniffing, Data exfiltration",
      detection: "مراقبة حجم البيانات الصادرة غير المعتادة من خوادم داخلية باتجاه الإنترنت."
    },
    {
      port: 21,
      protocol: "FTP-Control",
      transport: "TCP",
      service: "File Transfer Protocol (Control)",
      socSignificance: "إرسال أوامر تسجيل الدخول والتحكم بـ FTP. يرسل كلمات المرور كنص واضح (Cleartext).",
      attacks: "Brute Force, Anonymous Login, Credential Sniffing",
      detection: "تنبيه عند تسجيل الدخول بحساب anonymous أو تكرار فشل تسجيل الدخول أكثر من 5 مرات."
    },
    {
      port: 22,
      protocol: "SSH",
      transport: "TCP",
      service: "Secure Shell / SFTP",
      socSignificance: "بروتوكول الإدارة الآمنة لأنظمة Linux والخوادم. استهدافه بالهجمات التخمينية شائع جداً.",
      attacks: "SSH Brute Force, Key Theft, Lateral Movement via SSH Pivoting",
      detection: "مراقبة سجل /var/log/auth.log للبحث عن Failed password أو اتصالات SSH من عناوين IP خارجية غير مصرح بها."
    },
    {
      port: 23,
      protocol: "Telnet",
      transport: "TCP",
      service: "Telnet Terminal",
      socSignificance: "بروتوكول قديم وغير مشفر نهائياً. وجوده في أي بيئة شركات حديثة يعتبر ثغرة أمنية وامتثال خطيرة.",
      attacks: "Man-in-the-Middle (MITM), Eavesdropping, Credential Theft",
      detection: "أي حركة مرور على المنفذ 23 يجب أن تُطلق تنبيهاً فورياً (High Severity Alert)."
    },
    {
      port: 25,
      protocol: "SMTP",
      transport: "TCP",
      service: "Simple Mail Transfer Protocol",
      socSignificance: "نقل رسائل البريد الإلكتروني بين الخوادم (MTA to MTA).",
      attacks: "Open Relay Abuse, Spamming, Phishing Injection, Mail Spoofing",
      detection: "تتبع اتصالات SMTP غير المصرح بها الصادرة من أجهزة مستخدمين عاديين (مؤشر Botnet)."
    },
    {
      port: 53,
      protocol: "DNS",
      transport: "UDP / TCP",
      service: "Domain Name System",
      socSignificance: "دفتر عناوين الإنترنت. UDP للاستعلامات العادية، و TCP لنقل النطاقات (Zone Transfers) أو الاستجابات الكبيرة (>512 bytes).",
      attacks: "DNS Tunneling, DNS Exfiltration, DNS Cache Poisoning, Fast-Flux, DGA",
      detection: "Sysmon Event ID 22: مراقبة طلبات TXT غير الطبيعية، والاستعلامات لأسماء نطاقات عشوائية طويلة جداً (Base64/Hex)."
    },
    {
      port: 67,
      protocol: "DHCP-Server",
      transport: "UDP",
      service: "DHCP Server Port",
      socSignificance: "توزيع عناوين IP ومعلومات الشبكة تلقائياً للأجهزة.",
      attacks: "Rogue DHCP Server, DHCP Starvation Attack",
      detection: "رصد خوادم DHCP غير مسجلة في الدليل النشط ترسل حزم DHCPOFFER (DHCP Snooping)."
    },
    {
      port: 68,
      protocol: "DHCP-Client",
      transport: "UDP",
      service: "DHCP Client Port",
      socSignificance: "استقبال العناوين من السيرفر. يعمل بالتوازي مع بورت 67.",
      attacks: "DHCP Spoofing",
      detection: "مراقبة طلبات DHCP المتكررة بسرعة هائلة بهدف استنزاف العناوين (Starvation)."
    },
    {
      port: 80,
      protocol: "HTTP",
      transport: "TCP",
      service: "Hypertext Transfer Protocol",
      socSignificance: "بروتوكول تصفح الويب غير المشفر. السجلات تكشف مسارات URL والطلبات بالكامل.",
      attacks: "SQL Injection, XSS, Directory Traversal, Web Shell Access, C2 Beacons",
      detection: "فحص سجلات الويب (Nginx/Apache/IIS) للبحث عن رموز مشبوهة مثل UNION SELECT أو ../ أو <script>."
    },
    {
      port: 88,
      protocol: "Kerberos",
      transport: "TCP / UDP",
      service: "Active Directory Kerberos Authentication",
      socSignificance: "قلب نظام التوثيق في Active Directory. يتعامل مع تذاكر AS-REQ, AS-REP, TGS-REQ, TGS-REP.",
      attacks: "Kerberoasting, AS-REP Roasting, Golden Ticket, Silver Ticket, Overpass-the-Hash",
      detection: "Windows Event ID 4768 (TGT Request), 4769 (TGS Request مع تشفير RC4-HMAC 0x17 المشبوه)."
    },
    {
      port: 110,
      protocol: "POP3",
      transport: "TCP",
      service: "Post Office Protocol v3",
      socSignificance: "استقبال البريد بدون تشفير. يسحب الرسائل لجهاز العميل.",
      attacks: "Credential Theft, Insecure Email Harvesting",
      detection: "حظر POP3 واستبداله بـ POP3S عبر بورت 995 مع تشفير TLS."
    },
    {
      port: 123,
      protocol: "NTP",
      transport: "UDP",
      service: "Network Time Protocol",
      socSignificance: "مزامنة التوقيت عبر الشبكة. توحيد التوقيت شرط أساسي في الـ SOC لربط السجلات وتحليل الحوادث الجنائية.",
      attacks: "NTP Amplification DDoS, Time Tampering (لإبطال تذاكر Kerberos والشهادات)",
      detection: "رصد انحراف توقيت الأجهزة بأكثر من 5 دقائق (يسبب فشل Kerberos) أو سيل حزم NTP Monlist."
    },
    {
      port: 135,
      protocol: "MSRPC",
      transport: "TCP",
      service: "Microsoft RPC Endpoint Mapper",
      socSignificance: "توجيه اتصالات RPC بين أنظمة ويندوز. بوابة رئيسية لإدارة ويندوز عن بعد.",
      attacks: "RPC Reconnaissance, WMI Attacks, DCOM Exploitation, Lateral Movement",
      detection: "اتصالات مشبوهة بين أجهزة الموظفين على بورت 135 (مؤشر حركة جانبية Lateral Movement)."
    },
    {
      port: 137,
      protocol: "NetBIOS-NS",
      transport: "UDP",
      service: "NetBIOS Name Service",
      socSignificance: "حل أسماء أجهزة ويندوز القديمة في الشبكة المحلية.",
      attacks: "Responder LLMNR/NBT-NS Poisoning, NTLMv2 Hash Capture",
      detection: "رصد أدوات التسميم مثل Responder التي تجيب على طلبات البث للبورت 137 لسرقة الهاشات."
    },
    {
      port: 139,
      protocol: "NetBIOS-SSN",
      transport: "TCP",
      service: "NetBIOS Session Service",
      socSignificance: "مشاركة الملفات والطابعات عبر بروتوكول NetBIOS القديم مع SMB.",
      attacks: "Null Session Enumeration, SMB Exploitation",
      detection: "محاولات تعداد المستخدمين والمشاركات عبر IPC$ بدون توثيق."
    },
    {
      port: 143,
      protocol: "IMAP",
      transport: "TCP",
      service: "Internet Message Access Protocol",
      socSignificance: "مزامنة البريد الإلكتروني بين السيرفر والأجهزة المختلفة بدون تشفير.",
      attacks: "Cleartext Authentication Sniffing, Brute Force",
      detection: "استبداله بـ IMAPS بورت 993 ورصد أي طلبات دخول متتالية غير مشفرة."
    },
    {
      port: 389,
      protocol: "LDAP",
      transport: "TCP / UDP",
      service: "Lightweight Directory Access Protocol",
      socSignificance: "الاستعلام عن كائنات ومستخدمي وصلاحيات Active Directory. عصب إدارة الهوية.",
      attacks: "LDAP Reconnaissance, BloodHound Domain Enumeration, LDAP Injection",
      detection: "مراقبة استعلامات LDAP الضخمة المفاجئة الصادرة من جهاز مستخدم عادي (مؤشر BloodHound/SharpHound)."
    },
    {
      port: 443,
      protocol: "HTTPS",
      transport: "TCP",
      service: "HTTP Secure (TLS/SSL)",
      socSignificance: "تصفح الويب المشفر. نظراً لتشفيره، يختبئ فيه الهكر عبر اتصالات C2 الخبيثة وتسريب البيانات.",
      attacks: "C2 Beaconing (Cobalt Strike, Sliver), Encrypted Data Exfiltration, Malicious SSL Certs",
      detection: "تحليل ترويسات JA3/JA3S Fingerprints، فحص شهادات SSL المشبوهة، وتحليل دورية الاتصال (Periodic Beaconing)."
    },
    {
      port: 445,
      protocol: "SMB",
      transport: "TCP",
      service: "Server Message Block",
      socSignificance: "أخطر منفذ في بيئات ويندوز! مشاركة الملفات، الطابعات، وتمرير أوامر التنفيذ عن بعد (Named Pipes).",
      attacks: "EternalBlue (MS17-010), PsExec Lateral Movement, Pass-the-Hash, WannaCry/NotPetya Worms",
      detection: "مراقبة فتح مشاركات ADMIN$ أو C$ أو IPC$ بواسطة أدوات مثل PsExec (Event ID 5140, 5145, 7045)."
    },
    {
      port: 636,
      protocol: "LDAPS",
      transport: "TCP",
      service: "LDAP over SSL/TLS",
      socSignificance: "النسخة المشفرة والآمنة من LDAP لحماية استعلامات وتغييرات Active Directory.",
      attacks: "Abuse of Misconfigured Certs, Golden Certificate (AD CS Attacks)",
      detection: "مراقبة إصدار شهادات غير مصرح بها من خوادم AD CS لاستخدامها في التوثيق عبر LDAPS."
    },
    {
      port: 1433,
      protocol: "MSSQL",
      transport: "TCP",
      service: "Microsoft SQL Server",
      socSignificance: "قواعد بيانات الشركات. منفذ حساس يحتوي على بيانات التطبيقات والموظفين.",
      attacks: "SQL Brute Force (sa user), xp_cmdshell Code Execution, Database Exfiltration",
      detection: "استخدام xp_cmdshell لتشغيل أوامر نظام Windows، أو محاولات الدخول بحساب 'sa' من عناوين خارجية."
    },
    {
      port: 3389,
      protocol: "RDP",
      transport: "TCP / UDP",
      service: "Remote Desktop Protocol",
      socSignificance: "واجهة سطح المكتب البعيد لإدارة أجهزة وسيرفرات ويندوز.",
      attacks: "RDP Brute Force, BlueKeep (CVE-2019-0708), RDP Hijacking, Lateral Movement",
      detection: "Windows Event ID 4624 LogonType=10 (RemoteInteractive)، تكرار Event ID 4625، واتصالات RDP غير متوقعة."
    },
    {
      port: 5985,
      protocol: "WinRM-HTTP",
      transport: "TCP",
      service: "Windows Remote Management (HTTP)",
      socSignificance: "تنفيذ أوامر PowerShell عن بعد (PowerShell Remoting / Enter-PSSession). أداة أساسية في إدارة وحركة الهكر.",
      attacks: "Evil-WinRM, Pass-the-Hash over WinRM, Remote Script Execution",
      detection: "Event ID 4688 مع وسم wsmprovhost.exe كعملية منفذة للأوامر عن بعد."
    },
    {
      port: 5986,
      protocol: "WinRM-HTTPS",
      transport: "TCP",
      service: "Windows Remote Management (HTTPS)",
      socSignificance: "النسخة المشفرة بشهادة SSL من WinRM لنقل أوامر PowerShell الإدارية بأمان.",
      attacks: "Lateral Movement using legitimate administrative credentials",
      detection: "مراقبة اتصالات WinRM الصادرة بين أجهزة workstations العادية (Peer-to-Peer)."
    }
  ],

  windowsEventIds: [
    {
      id: "4624",
      channel: "Security",
      name: "Successful Logon (نجاح تسجيل الدخول)",
      category: "Authentication",
      importance: "حرج جداً (Critical)",
      description: "يُسجل عند نجاح أي مستخدم أو خدمة أو حساب كمبيوتر في تسجيل الدخول. الحقل الأهم هو Logon Type الذي يحدد طريقة الدخول.",
      detectionTips: "Logon Type 2 = دخول فيزيائي مباشر (Interactive)، Type 3 = دخول شبكي عبر SMB/Shares، Type 10 = دخول عبر RDP عن بعد، Type 4 = مهام مجدولة، Type 5 = خدمات ويندوز."
    },
    {
      id: "4625",
      channel: "Security",
      name: "Failed Logon (فشل تسجيل الدخول)",
      category: "Authentication",
      importance: "حرج جداً (Critical)",
      description: "يُسجل عند فشل محاولة الدخول. يكشف اسم الحساب، الجهاز المصدر، وسبب الفشل (Sub-Status Code).",
      detectionTips: "0xC000006A = كلمة مرور خاطئة، 0xC0000064 = المستخدم غير موجود، 0xC0000234 = تم قفل الحساب. تكراره مؤشر Brute Force أو Password Spraying."
    },
    {
      id: "4648",
      channel: "Security",
      name: "Explicit Credentials (دخول باستخدام بيانات اعتماد صريحة)",
      category: "Authentication",
      importance: "عالي (High)",
      description: "يُسجل عند استخدام أمر runas أو أدوات الاختراق للتوثيق بحساب آخر من داخل الجلسة الحالية.",
      detectionTips: "مؤشر قوي على تصعيد الصلاحيات (Privilege Escalation) أو تشغيل أوامر بصفة مدير."
    },
    {
      id: "4672",
      channel: "Security",
      name: "Special Privileges Assigned (منح امتيازات خاصة - Administrator)",
      category: "Privilege Use",
      importance: "حرج (Critical)",
      description: "يُسجل فوراً عند تسجيل دخول حساب يتمتع بصلاحيات مدير النظام الفائقة مثل SeDebugPrivilege أو SeBackupPrivilege.",
      detectionTips: "يتزامن دائماً مع Event 4624 لحسابات المدراء. مراقبة ظهوره في أوقات غير رسمية ضرورة قصوى."
    },
    {
      id: "4688",
      channel: "Security",
      name: "A New Process Has Been Created (إنشاء عملية جديدة)",
      category: "Process Tracking",
      importance: "حرج جداً (Critical)",
      description: "يُسجل عند بدء أي برنامج أو عملية في ويندوز. عند تفعيل Command Line Auditing، يُظهر السطر الكامل للأمر المنفذ.",
      detectionTips: "مراقبة العمليات المشبوهة: powershell.exe مع وسائط -enc أو -w hidden، تشغيل cmd.exe بواسطة Word/Excel (winword.exe)، أو تشغيل certutil/bitsadmin."
    },
    {
      id: "4697",
      channel: "Security",
      name: "A Service Was Installed in the System (تثبيت خدمة جديدة)",
      category: "Persistence / Lateral Movement",
      importance: "حرج جداً (Critical)",
      description: "يُسجل في سجل الأمان عند قيام مستخدم أو أداة بتثبيت خدمة جديدة في ويندوز.",
      detectionTips: "الأسلوب المفضل لأداة PsExec وبرمجيات الفدية لضمان البقاء (Persistence) وتشغيل الأكواد بصلاحيات SYSTEM."
    },
    {
      id: "4698",
      channel: "Security",
      name: "A Scheduled Task Was Created (إنشاء مهمة مجدولة جديدة)",
      category: "Persistence",
      importance: "عالي (High)",
      description: "يُسجل عند قيام مستخدم أو برنامج بجدولة تشغيل أمر في وقت معين أو عند بدء التشغيل.",
      detectionTips: "يفحص المحلل حقل TaskContent لمعرفة اسم السكربت أو البرنامج المجدول ومساره."
    },
    {
      id: "4720",
      channel: "Security",
      name: "A User Account Was Created (إنشاء حساب مستخدم جديد)",
      category: "Account Management",
      importance: "حرج (Critical)",
      description: "يُسجل فور إنشاء أي حساب مستخدم جديد محلياً أو داخل الدليل النشط Active Directory.",
      detectionTips: "البحث عن الحساب الذي قام بإنشاء المستخدم الجديد (TargetUserName و SubjectUserName). أي إنشاء حساب خارج نظام التذاكر المعتمد يعتبر حادثاً أمنياً."
    },
    {
      id: "4728",
      channel: "Security",
      name: "A Member Was Added to a Security-Enabled Global Group (إضافة عضو لمجموعة أمان)",
      category: "Account Management",
      importance: "حرج جداً (Critical)",
      description: "يُسجل عند إضافة مستخدم لمجموعة عالمية مثل Domain Admins أو Enterprise Admins.",
      detectionTips: "إضافة أي مستخدم لمجموعة Domain Admins تتطلب تنبيهاً فورياً (Priority 1 P1 Alert)."
    },
    {
      id: "4732",
      channel: "Security",
      name: "A Member Was Added to a Security-Enabled Local Group (إضافة عضو لمجموعة محلية)",
      category: "Account Management",
      importance: "حرج جداً (Critical)",
      description: "يُسجل عند إضافة مستخدم لمجموعة المدراء المحليين Administrators على جهاز أو خادم معين.",
      detectionTips: "علامة صريحة لتصعيد الصلاحيات محلياً (Local Privilege Escalation) بواسطة المهاجمين."
    },
    {
      id: "7045",
      channel: "System",
      name: "A New Service Was Installed (تثبيت خدمة في سجل النظام)",
      category: "Persistence",
      importance: "حرج (Critical)",
      description: "الحدث الموازي لـ 4697 ولكن في سجل System. يحتوي على اسم الخدمة، مسار الملف الثنائي (ImagePath)، ونوع الخدمة.",
      detectionTips: "رصد خدمات غريبة في المسار C:\\Windows\\Temp أو C:\\Users\\Public\\ أو خدمات بأسماء عشوائية."
    },
    {
      id: "1102",
      channel: "Security",
      name: "The Audit Log Was Cleared (مسح سجل التدقيق الأمني)",
      category: "Defense Evasion",
      importance: "أعلى درجة خطورة (Emergency)",
      description: "يُسجل عند قيام شخص ما بمسح سجل الأمان Security Log عمداً لإخفاء آثار الهجوم والجريمة.",
      detectionTips: "Red Flag رقم واحد في علم الـ SOC! يُظهر اسم المستخدم والجهاز الذي نفذ عملية المسح عبر wevtutil cl Security."
    }
  ],

  sysmonEventIds: [
    {
      id: "Sysmon 1",
      name: "Process Creation (إنشاء عملية)",
      importance: "حرج جداً (Critical)",
      description: "أقوى سجل لرصد العمليات في العالم! يُسجل سطر الأوامر الكامل (CommandLine)، الهاشات (MD5/SHA256)، مسار العملية الأب، وسطر أوامر الأب (ParentCommandLine).",
      detectionTips: "اكتشاف هجمات Lolbins (Living Off The Land)، تشغيل certutil لتنزيل ملفات، أو تشغيل mshta و regsvr32 لتنفيذ أكواد خبيثة."
    },
    {
      id: "Sysmon 3",
      name: "Network Connection (اتصال شبكي بواسطة عملية)",
      importance: "حرج (Critical)",
      description: "يربط بين العملية المنفذة والاتصال الشبكي (Process Image -> Destination IP/Port).",
      detectionTips: "رصد عمليات لا ينبغي لها الاتصال بالإنترنت مطلقاً تتصل بسيرفرات خارجية مثل: cmd.exe, powershell.exe, calc.exe, notepad.exe, rundll32.exe."
    },
    {
      id: "Sysmon 7",
      name: "Image Loaded (تحميل مكتبة DLL)",
      importance: "عالي (High)",
      description: "يُسجل قيام أي عملية بتحميل مكتبة ربط ديناميكي (DLL)، مع حساب بصمة الهاش لكل مكتبة وحالة التوقيع الرقمي.",
      detectionTips: "اكتشاف هجمات DLL Sideloading و DLL Hijacking عندما تحمل عملية شرعية مكتبة غير موقعة من مجلد مؤقت."
    },
    {
      id: "Sysmon 8",
      name: "CreateRemoteThread (حقن خيط برمجي في عملية أخرى)",
      importance: "حرج جداً (Critical)",
      description: "يُسجل عند قيام عملية بإنشاء خيط تنفيذ داخل ذاكرة عملية أخرى تماماً (Process Injection).",
      detectionTips: "الأسلوب المفضل لأدوات الاختراق والـ C2 للهروب من الـ Antivirus عن طريق حقن البايلود داخل explorer.exe أو svchost.exe."
    },
    {
      id: "Sysmon 10",
      name: "ProcessAccess (الوصول لذاكرة عملية)",
      importance: "حرج جداً (Critical)",
      description: "يُسجل قيام عملية بطلب مقبض (Handle) للوصول لذاكرة عملية أخرى، مع تحديد مستوى الصلاحيات المطلوبة (GrantedAccess).",
      detectionTips: "القاعدة الذهبية لصيد Mimikatz: رصد أي عملية تطلب GrantedAccess برقم 0x1FFFFF أو 0x1010 للوصول لعملية lsass.exe لاستخراج كلمات المرور."
    },
    {
      id: "Sysmon 11",
      name: "FileCreate (إنشاء ملف في القرص)",
      importance: "عالي (High)",
      description: "يُسجل إنشاء أو استبدال أي ملف، موثقاً العملية المنشئة، المسار الكامل، وتوقيت الإنشاء بدقة.",
      detectionTips: "اكتشاف إسقاط Web Shells داخل مجلدات wwwroot، أو إنشاء ملفات تشفير برمجيات الفدية (مثل .locked و .enc)."
    },
    {
      id: "Sysmon 12 & 13",
      name: "Registry Event (إنشاء أو تعديل مفاتيح الريجستري)",
      importance: "عالي (High)",
      description: "يراقب التعديل على مفاتيح النظام الحساسة، وقيم البيانات الجديدة المسجلة فيها.",
      detectionTips: "مراقبة مفاتيح البقاء الشهيرة مثل HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run ومفاتيح إلغاء الحماية مثل تحطيم Defender."
    },
    {
      id: "Sysmon 22",
      name: "DNS Query (استعلام DNS بواسطة عملية)",
      importance: "حرج (Critical)",
      description: "يسجل الاستعلامات لنطاقات الإنترنت مع ذكر اسم العملية التي طلبت الاستعلام وكود الاستجابة والنتيجة.",
      detectionTips: "اكتشاف اتصالات C2 Beaconing، خوارزميات توليد النطاقات DGA، واستعلامات DNS Tunneling لنقل البيانات المسروقة."
    }
  ],

  cliCheatSheets: {
    linux: [
      { cmd: 'grep -ri "failed" /var/log/auth.log', desc: 'البحث عن محاولات تسجيل الدخول الفاشلة في لينكس (SSH / Sudo).' },
      { cmd: 'awk \'{print $1}\' /var/log/nginx/access.log | sort | uniq -c | sort -nr | head -10', desc: 'استخراج أكثر 10 عناوين IP زارت السيرفر وتكرار كل عنوان (لاكتشاف هجمات DoS أو Scanners).' },
      { cmd: 'find / -perm -4000 -type f 2>/dev/null', desc: 'العثور على جميع الملفات ذات صلاحية SUID (لتحديد إمكانية تصعيد الصلاحيات لـ Root).' },
      { cmd: 'netstat -tunap | grep ESTABLISHED', desc: 'عرض جميع الاتصالات الشبكية النشطة حالياً مع رقم المعرف (PID) واسم البرنامج.' },
      { cmd: 'ss -tulpn', desc: 'عرض جميع المنافذ المفتوحة والمستمعة (Listening) في النظام واسم الخدمة.' },
      { cmd: 'ps auxf', desc: 'عرض شجرة العمليات في لينكس لمعرفة العمليات الأب والابن والعلاقة بينها.' },
      { cmd: 'last -F -n 20', desc: 'عرض آخر 20 عملية تسجيل دخول للنظام مع التواريخ الكاملة والأجهزة المصدر.' },
      { cmd: 'journalctl -u ssh -S today --no-pager', desc: 'فحص سجلات خدمة SSH لليوم الحالي فقط بتنسيق منظم.' },
      { cmd: 'lsof -i :80', desc: 'معرفة أي عملية تستخدم منفذ الويب 80 حالياً.' },
      { cmd: 'crontab -l; cat /etc/crontab /etc/cron.*', desc: 'فحص جميع المهام المجدولة في النظام للكشف عن برمجيات خبيثة تعمل تلقائياً.' }
    ],
    powershell: [
      { cmd: 'Get-WinEvent -FilterHashtable @{LogName=\'Security\';ID=4625} -MaxEvents 50', desc: 'استخراج آخر 50 محاولة دخول فاشلة من سجل الأمان.' },
      { cmd: '[System.Text.Encoding]::Unicode.GetString([System.Convert]::FromBase64String("BASE64_HERE"))', desc: 'فك تشفير أوامر PowerShell المشفرة بـ Base64 والتي يستخدمها الهكر.' },
      { cmd: 'Get-Process | Where-Object { $_.Path -notmatch "C:\\\\Windows" } | Select Id, ProcessName, Path', desc: 'عرض جميع العمليات التي تعمل من مسارات خارج مجلد Windows الرسمي (مؤشر برمجيات خبيثة).' },
      { cmd: 'Get-CimInstance Win32_StartupCommand | Select Name, Command, Location, User', desc: 'فحص جميع البرامج التي تعمل تلقائياً عند إقلاع ويندوز (Persistence Check).' },
      { cmd: 'Get-Service | Where-Object { $_.Status -eq "Running" -and $_.DisplayName -notmatch "Microsoft" }', desc: 'عرض الخدمات الشغالة التي لا تتبع مايكروسوفت لتدقيقها.' },
      { cmd: 'Get-NetTCPConnection -State Established | Select LocalAddress, LocalPort, RemoteAddress, RemotePort, OwningProcess', desc: 'عرض الاتصالات الشبكية النشطة مع الـ PID للعملية المتصلة.' }
    ],
    wireshark: [
      { cmd: 'ip.addr == 192.168.1.50', desc: 'فلترة جميع الحزم الصادرة أو الواردة للعنوان المحدد.' },
      { cmd: 'http.request.method == "POST"', desc: 'عرض طلبات POST فقط (تحليل نقل البيانات، كلمات المرور، أو رفع الملفات).' },
      { cmd: 'tcp.flags.syn == 1 and tcp.flags.ack == 0', desc: 'فلترة حزم بدء الاتصال الأولية (مفيد جداً لكشف فحص المنافذ SYN Port Scanning).' },
      { cmd: 'dns.flags.response == 0 and dns.qry.type == 16', desc: 'فلترة استعلامات DNS من نوع TXT (غالباً ما تُستخدم في DNS Tunneling).' },
      { cmd: 'frame contains "SELECT" or frame contains "UNION"', desc: 'البحث عن نصوص حقن SQL داخل حزم الترافيك.' },
      { cmd: 'smb2.filename contains ".exe"', desc: 'رصد تداول أو نقل ملفات تنفيذية عبر بروتوكول مشاركة الملفات SMB.' }
    ],
    splunk: [
      { cmd: 'index=windows EventCode=4625 | stats count by TargetUserName, Source_Network_Address | where count > 10', desc: 'كشف محاولات كسر كلمات المرور (Brute Force) إذا تجاوزت 10 محاولات فاشلة.' },
      { cmd: 'index=sysmon EventCode=1 (CommandLine="*powershell*" AND (CommandLine="*-enc*" OR CommandLine="*-EncodedCommand*"))', desc: 'كشف تشغيل PowerShell بأوامر مشفرة ومخفية.' },
      { cmd: 'index=sysmon EventCode=10 TargetImage="*\\\\lsass.exe*" NOT SourceImage="*\\\\csrss.exe*"', desc: 'كشف محاولات سرقة كلمات المرور وحقن عملية LSASS (Mimikatz Detection).' },
      { cmd: 'index=windows EventCode=7045 ServiceName="*PSEXEC*" OR ImagePath="*\\\\ADMIN$*"', desc: 'كشف الحركة الجانبية عبر شبكة العمل باستخدام PsExec.' },
      { cmd: 'index=web status>=400 | stats count by src_ip, uri_path | sort -count', desc: 'رصد عناوين الـ IP التي تولد أخطاء متكررة (مؤشر مسح واستكشاف ثغرات الويب).' }
    ]
  }
};
