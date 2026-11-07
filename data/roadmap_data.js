// Interactive SOC Career Roadmap & Certifications Guide - BasharSec Academy

const socRoadmapData = {
  stages: [
    {
      step: 1,
      id: "stage-foundations",
      badge: "المحطة الأولى",
      badgeColor: "#10B981",
      titleAr: "التأسيس في الحاسوب والشبكات (Computer & Networking Zero-Base)",
      titleEn: "Computer & Networking Foundations",
      duration: "من 3 إلى 5 أسابيع",
      durationEn: "3 to 5 weeks",
      topicsAr: [
        "كيف تفكر الحواسيب والعتاد الداخلي (CPU, RAM, Storage)",
        "نموذج الطبقات السبع OSI ونموذج TCP/IP من منظور الدفاع",
        "عناوين IPv4 و MAC والتقسيم الفرعي Subnetting وعناوين RFC 1918 الخاصة",
        "المنافذ والبروتوكولات التأسيسية: TCP 3-Way Handshake, UDP, DNS, DHCP, HTTP/S, ARP",
        "المصافحة المشفرة TLS/SSL ومفاتيح التشفير والشهادات الرقمية"
      ],
      topicsEn: [
        "Computing architecture: How CPUs, RAM, and storage process machine instructions",
        "OSI 7-Layer and TCP/IP models analyzed from a cyber defense perspective",
        "IPv4, MAC addressing, Subnetting math, and RFC 1918 private address ranges",
        "Core protocols: TCP 3-Way Handshake, UDP, DNS, DHCP, HTTP/S, and ARP",
        "TLS/SSL handshake cryptography, public keys, and PKI digital certificates"
      ],
      recommendedCertAr: "CompTIA Network+ (أو الاكتفاء بمنهاج الأكاديمية التأسيسي)",
      recommendedCertEn: "CompTIA Network+ (or complete Academy foundations track)",
      milestoneAr: "القدرة الكاملة على تفسير أي حزمة بيانات تمر في سلك الشبكة ومعرفة مصدرها ووجهتها.",
      milestoneEn: "Full capability to inspect and explain any raw network packet passing over the wire."
    },
    {
      step: 2,
      id: "stage-os-ad",
      badge: "المحطة الثانية",
      badgeColor: "#10B981",
      titleAr: "هندسة أنظمة التشغيل والدليل النشط (Windows, Linux & Active Directory)",
      titleEn: "Operating Systems Internals & Active Directory",
      duration: "من 4 إلى 6 أسابيع",
      durationEn: "4 to 6 weeks",
      topicsAr: [
        "معمارية نواة ويندوز: العمليات الأساسية (smss, csrss, lsass, explorer) وشجرة العمليات",
        "سجل النظام Windows Registry ومفاتيح البقاء التلقائي (Run Keys)",
        "أنظمة الدليل النشط Active Directory: Domain Controllers, GPO, OUs, Trust Relationships",
        "بروتوكولات المصادقة: Kerberos Tickets (TGT/TGS) مقابل NTLM و Pass-the-Hash",
        "أساسيات Linux لمحلل الـ SOC: بنية الملفات، الصلاحيات، و 30 أمراً جنائياً للتحقيق"
      ],
      topicsEn: [
        "Windows kernel architecture: Core system processes (smss, csrss, lsass, explorer) and process trees",
        "Windows Registry forensics and persistence mechanisms (Run/RunOnce keys)",
        "Active Directory: Domain Controllers, Group Policy (GPO), OUs, and Trust boundaries",
        "Authentication protocols: Kerberos Tickets (TGT/TGS) vs NTLM and Pass-the-Hash defenses",
        "Linux CLI essentials for SOC: File hierarchy, permissions, and 30 forensic investigative commands"
      ],
      recommendedCertAr: "Linux Professional (LPIC-1) أو محتوى الدليل النشط في الأكاديمية",
      recommendedCertEn: "Linux Professional (LPIC-1) or Academy AD defense module",
      milestoneAr: "فهم كيفية عمل أنظمة الشركات وبيئات العمل المؤسسية التي يدافع عنها الـ SOC.",
      milestoneEn: "Mastery of enterprise IT infrastructure and directory environments defended by the SOC."
    },
    {
      step: 3,
      id: "stage-logs-traffic",
      badge: "المحطة الثالثة",
      badgeColor: "#0EA5E9",
      titleAr: "تحليل السجلات والترافيك الجنائي (Deep Log Analysis & Wireshark)",
      titleEn: "Log Telemetry & Network Forensics",
      duration: "من 4 إلى 5 أسابيع",
      durationEn: "4 to 5 weeks",
      topicsAr: [
        "علم السجلات: تنسيقات Syslog, CEF, JSON وتوحيد الحقول ومزامنة الوقت NTP",
        "أهم أرقام أحداث أمان ويندوز: 4624 (Logon Types), 4625, 4720, 7045, 1102",
        "مستشعر Sysmon: مراقبة النواة وتكوين القواعد الذهبية لكشف LOLBins وحقن الذاكرة",
        "تحليل الحزم بأداة Wireshark و Tcpdump: فلاتر العرض وإعادة بناء الاتصالات (Follow TCP Stream)",
        "أنظمة كشف التطفل IDS/IPS: فهم وتطبيق قواعد Snort و Suricata ونظام Zeek"
      ],
      topicsEn: [
        "Log telemetry: Syslog, CEF, JSON schemas, field normalization, and NTP time sync",
        "Critical Windows Security Event IDs: 4624 (Logon Types), 4625, 4720, 7045, and 1102",
        "Sysmon sensor telemetry: Process creation, LOLBins detection, and memory access (Event 10)",
        "Packet forensics via Wireshark and Tcpdump: Display filters and Follow TCP Stream reconstruction",
        "Intrusion Detection Systems: Rule syntax and signature design in Snort, Suricata, and Zeek"
      ],
      recommendedCertAr: "Blue Team Level 1 (BTL1) - الجزء العملي للشبكات والسجلات",
      recommendedCertEn: "Blue Team Level 1 (BTL1) - Practical Network & Log modules",
      milestoneAr: "امتلاك القدرة على تشريح أي ملف PCAP أو سجل ويندوز وتحديد سلوك المهاجم فوراً.",
      milestoneEn: "Instant capability to dissect any PCAP or Windows security log and profile adversary tradecraft."
    },
    {
      step: 4,
      id: "stage-tier1-triage",
      badge: "المحطة الرابعة",
      badgeColor: "#0EA5E9",
      titleAr: "عمليات الـ SOC وفرز التنبيهات (SOC Operations & Alert Triage)",
      titleEn: "SOC Operations, Triage & Threat Intelligence",
      duration: "من 3 إلى 4 أسابيع",
      durationEn: "3 to 4 weeks",
      topicsAr: [
        "هيكلية الـ SOC: مهام Tier 1 و Tier 2 وإدارة التذاكر وتطبيق SLA",
        "منهجية الفرز الأمني في 7 خطوات والتمييز الحاسم بين True Positive و False Positive",
        "حلول الـ EDR الحديثة مقابل Antivirus وعزل الأجهزة شبكياً (Host Isolation)",
        "استخبارات التهديدات المفتوحة OSINT: فحص الـ IOCs عبر VirusTotal و AbuseIPDB و URLScan",
        "أطر العمل الهجومية: مصفوفة MITRE ATT&CK، وسلسلة القتل Cyber Kill Chain، ونموذج الألماسة"
      ],
      topicsEn: [
        "SOC operational tiers: Tier 1 vs Tier 2 responsibilities, shift rotations, ticketing, and SLAs",
        "The 7-step triage methodology: Decisively classifying True Positives vs False Positives",
        "Modern EDR architectures vs legacy Antivirus, telemetry collection, and Host Isolation",
        "Open-source threat intelligence (OSINT): IOC pivoting via VirusTotal, AbuseIPDB, and URLScan",
        "Adversary frameworks: MITRE ATT&CK matrix, Lockheed Martin Cyber Kill Chain, and Diamond Model"
      ],
      recommendedCertAr: "CompTIA Security+ و Cisco CyberOps Associate",
      recommendedCertEn: "CompTIA Security+ and Cisco Certified CyberOps Associate",
      milestoneAr: "الجاهزية التامة للعمل كمحلل فرز أمني SOC Tier 1 قادر على إدارة طابور التنبيهات.",
      milestoneEn: "Complete readiness to operate as a professional SOC Tier 1 analyst managing live queues."
    },
    {
      step: 5,
      id: "stage-siem-playbooks",
      badge: "المحطة الخامسة",
      badgeColor: "#8B5CF6",
      titleAr: "هندسة الـ SIEM وكتيبات التحقيق (SIEM Engineering & Playbooks)",
      titleEn: "SIEM Engineering, SPL/KQL & Standard Playbooks",
      duration: "من 4 إلى 6 أسابيع",
      durationEn: "4 to 6 weeks",
      topicsAr: [
        "إتقان لغة استعلامات Splunk (SPL): الفلترة، التجميع stats، والإحصائيات المتقدمة",
        "نظام Wazuh المفتوح ومكدس Elastic: البحث بلغة KQL وبناء لوحات المراقبة",
        "هندسة قواعد الربط الزمني (Correlation Rules) لمكافحة إرهاق التنبيهات (Alert Fatigue)",
        "تطبيق كتيب التحقيق في التصيد (Phishing Playbook) وفحص الترويسات وتحييد الروابط",
        "تطبيق كتيب التحقيق في الفدية (Ransomware Playbook) وتحديد المريض صفر (Patient Zero)"
      ],
      topicsEn: [
        "Mastery of Splunk Search Processing Language (SPL): Piping, stats aggregation, and time charts",
        "Wazuh SIEM/XDR and Elastic Stack: KQL queries, field mapping, and live dashboard engineering",
        "Correlation rule architecture: Thresholds, temporal sequence matching, and alert fatigue reduction",
        "Phishing Response Playbook: Header forensics, payload extraction, and automated mail clawback",
        "Ransomware Response Playbook: Patient-zero discovery, lateral SMB containment, and recovery"
      ],
      recommendedCertAr: "Splunk Core Certified Power User أو SC-200 (Microsoft Security Operations)",
      recommendedCertEn: "Splunk Core Certified Power User or SC-200 (Microsoft Security Operations)",
      milestoneAr: "الارتقاء إلى مستوى SOC Tier 2 والقدرة على كتابة قواعد الكشف والتحقيق المعمق.",
      milestoneEn: "Advancement to SOC Tier 2 level with proven ability to engineer detections and lead investigations."
    },
    {
      step: 6,
      id: "stage-dfir-career",
      badge: "المحطة السادسة",
      badgeColor: "#8B5CF6",
      titleAr: "الاستجابة للحوادث والمختبر وسوق العمل (DFIR, Home Lab & Career Launch)",
      titleEn: "Digital Forensics, Incident Response & Career Readiness",
      duration: "من 3 إلى 5 أسابيع",
      durationEn: "3 to 5 weeks",
      topicsAr: [
        "منهجية الاستجابة للحوادث PICERL و NIST SP 800-61 وإدارة الأزمات",
        "التحقيق الجنائي في الذاكرة العشوائية RAM عبر أداة Volatility واستخراج الأدلة الخفية",
        "أدلة القرص الصلب في ويندوز: Prefetch, Shimcache, Amcache لإثبات تشغيل البرامج",
        "صياغة التقارير التنفيذية والتقنية الرسمية لمجالس الإدارة وفرق الهندسة",
        "بناء المختبر المنزلي المتكامل (Wazuh + Sysmon + Kali) وإنجاز مشروع التخرج الشامل"
      ],
      topicsEn: [
        "Incident response frameworks: PICERL and NIST SP 800-61 Rev 2 triage lifecycles",
        "Memory forensics with Volatility: Process memory dumps, DLL injection, and kernel hooks",
        "Windows disk artifacts: Prefetch, Shimcache, and Amcache proving program execution history",
        "Technical and executive incident reporting for C-suite leadership and engineering teams",
        "Complete enterprise home lab setup (Wazuh + Sysmon + Kali) and capstone graduation project"
      ],
      recommendedCertAr: "Blue Team Level 1 (BTL1) المعتمدة أو CompTIA CySA+",
      recommendedCertEn: "Certified Blue Team Level 1 (BTL1) or CompTIA CySA+",
      milestoneAr: "التخرج كمهندس ومحلل أمن سيبراني متكامل، مع سيرة ذاتية ومعرض أعمال حقيقي جاهز للتوظيف.",
      milestoneEn: "Graduation as an enterprise-ready SOC analyst with an audited portfolio and verified resume."
    }
  ],

  certifications: [
    {
      code: "Security+",
      name: "CompTIA Security+ (SY0-701)",
      issuer: "CompTIA",
      level: "مبتدئ / أساسي",
      levelEn: "Beginner / Foundational",
      levelBadgeColor: "#10B981",
      cost: "~ $392",
      style: "اختيار من متعدد + أسئلة عملية PBQ",
      styleEn: "Multiple choice + Performance-Based Questions (PBQs)",
      importanceAr: "الشهادة الأكثر طلباً كشرط أساسي لدخول مجال الأمن السيبراني في معظم المؤسسات والهيئات الحكومية والخاصة حول العالم.",
      importanceEn: "The most universally demanded baseline credential for entering the cybersecurity field across global enterprises.",
      focus: "المفاهيم التأسيسية، التهديدات، التشفير، والهيكلية الأمنية.",
      focusEn: "Foundational cyber concepts, threats, vulnerabilities, cryptography, and enterprise architecture."
    },
    {
      code: "BTL1",
      name: "Blue Team Level 1 (BTL1)",
      issuer: "Security Blue Team (SBT)",
      level: "متوسط / عملي 100%",
      levelEn: "Intermediate / 100% Practical",
      levelBadgeColor: "#0EA5E9",
      cost: "~ £499",
      style: "امتحان عملي حقيقي لمدة 24 ساعة للتحقيق في حادثة",
      styleEn: "24-hour hands-on practical incident investigation exam",
      importanceAr: "الشهادة العملية الأفضل في العالم لمحللي الـ SOC؛ تختبر مهاراتك الواقعية على Splunk, Wireshark, Volatility, و Autopsy.",
      importanceEn: "The premier hands-on certification for SOC analysts, testing live skills on Splunk, Wireshark, Volatility, and Autopsy.",
      focus: "التحقيق الجنائي، الاستجابة للحوادث، وتحليل السجلات والترافيك.",
      focusEn: "Digital forensics, incident response, network packet analysis, and SIEM event correlation."
    },
    {
      code: "CySA+",
      name: "CompTIA Cybersecurity Analyst (CySA+)",
      issuer: "CompTIA",
      level: "متوسط إلى متقدم",
      levelEn: "Intermediate to Advanced",
      levelBadgeColor: "#0EA5E9",
      cost: "~ $392",
      style: "اختيار من متعدد + سيناريوهات تحليلية PBQ",
      styleEn: "Multiple choice + scenario-based PBQs",
      importanceAr: "تركز بعمق على تحليل السجلات، استخبارات التهديدات، فرز التنبيهات، والامتثال الأمني وفق أطر العمل العالمية.",
      importanceEn: "Deep focus on behavioral analytics, threat intelligence, vulnerability management, and log forensics.",
      focus: "تحليل السجلات، إدارة الثغرات، وهندسة الكشف.",
      focusEn: "Security analytics, threat intelligence, detection engineering, and incident response."
    },
    {
      code: "CyberOps",
      name: "Cisco Certified CyberOps Associate",
      issuer: "Cisco Systems",
      level: "مبتدئ إلى متوسط",
      levelEn: "Beginner to Intermediate",
      levelBadgeColor: "#10B981",
      cost: "~ $300",
      style: "أسئلة نظرية وسيناريوهات شبكية تفاعلية",
      styleEn: "Theoretical questions + interactive network scenarios",
      importanceAr: "ممتازة جداً لفهم أمن الشبكات والـ Firewalls والتحقيق الجنائي الشبكي من منظور سيسكو المعتمد في مراكز العمليات.",
      importanceEn: "Outstanding for understanding enterprise network defense, firewalls, and security monitoring from Cisco's framework.",
      focus: "مراقبة الشبكات، تحليل السجلات، وتطبيقات الـ SOC الميدانية.",
      focusEn: "Network monitoring, log correlation, security telemetry, and SOC playbooks."
    },
    {
      code: "SC-200",
      name: "Microsoft Security Operations Analyst (SC-200)",
      issuer: "Microsoft",
      level: "متوسط / سحابي",
      levelEn: "Intermediate / Cloud SOC",
      levelBadgeColor: "#8B5CF6",
      cost: "~ $165",
      style: "أسئلة وسيناريوهات على منصات مايكروسوفت",
      styleEn: "Case studies & scenarios across Microsoft security stack",
      importanceAr: "مطلوبة بقوة في الشركات التي تعتمد على مكدس مايكروسوفت السحابي: Microsoft Sentinel (SIEM) و Defender for Endpoint (EDR).",
      importanceEn: "Heavily requested by organizations utilizing the Microsoft Cloud security suite: Microsoft Sentinel and Defender.",
      focus: "كتابة استعلامات KQL المتقدمة، وإدارة تنبيهات Sentinel و Defender.",
      focusEn: "Advanced KQL threat hunting, Sentinel analytics rules, and Defender for Endpoint investigation."
    }
  ]
};
