// SOC Alert Triage Simulator for BasharSec Academy
const triageCases = [
  {
    id: "TR-01",
    titleAr: "تنبيه: محاولات تسجيل دخول غير عادية عبر PowerShell",
    titleEn: "Alert: Unusual PowerShell Remote Authentication",
    severity: "HIGH",
    srcIp: "10.10.40.15",
    destIp: "10.10.10.5 (Domain Controller)",
    user: "SVC_SQL_AGENT",
    time: "2026-11-06 01:15 UTC",
    rawLog: `EventCode=4624 LogonType=3
User=SVC_SQL_AGENT WorkstationName=WKSTN-FIN-09
ProcessName=C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe
Target=DC01.contoso.local (Port 445 SMB)
Context: Service account used from an unauthorized user workstation outside database cluster.`,
    isTruePositive: true,
    explanationAr: "هجوم حقيقي (True Positive): حساب خدمة SQL يجب أن يعمل فقط داخل خوادم قواعد البيانات، ولا ينبغي استخدامه أبداً من جهاز موظف عادي لتسجيل الدخول إلى الدومين كنترولر عبر PowerShell!",
    explanationEn: "True Positive: Database service accounts should never be used from end-user workstations to access the Domain Controller via PowerShell!"
  },
  {
    id: "TR-02",
    titleAr: "تنبيه: فحص منافذ داخلي من خادم المراقبة Zabbix",
    titleEn: "Alert: Internal Port Scan from Zabbix Server",
    severity: "LOW",
    srcIp: "10.10.1.200 (NMS-Zabbix)",
    destIp: "10.10.20.0/24 Subnet",
    user: "zabbix-agent",
    time: "2026-11-06 02:00 UTC",
    rawLog: `Alert: ICMP Ping & TCP Port 10050 Sweep
Source: 10.10.1.200 (Registered Asset: IT Network Monitoring System)
Frequency: Periodic sweep every 60 minutes for host uptime verification.`,
    isTruePositive: false,
    explanationAr: "إنذار خاطئ مشروع (False Positive / Benign): هذا هو سيرفر مراقبة الشبكة الرسمي للشركة (Zabbix NMS)، وهو يقوم بمسح الأجهزة للتأكد من أنها تعمل ولا يوجد أي خطر أمني.",
    explanationEn: "False Positive / Benign: This is the official IT Zabbix network monitoring appliance polling hosts for uptime status."
  },
  {
    id: "TR-03",
    titleAr: "تنبيه: محاولة تشغيل Mimikatz لاستخراج كلمات المرور",
    titleEn: "Alert: Mimikatz Execution & LSASS Access",
    severity: "CRITICAL",
    srcIp: "10.10.50.22",
    destIp: "Localhost",
    user: "ammar.security",
    time: "2026-11-06 03:40 UTC",
    rawLog: `EventCode=10 (Sysmon ProcessAccess)
SourceImage=C:\\Users\\Public\\mimikatz.exe
TargetImage=C:\\Windows\\System32\\lsass.exe
GrantedAccess=0x1FFFFF (Full Control)
CallTrace=C:\\Windows\\SYSTEM32\\ntdll.dll+...`,
    isTruePositive: true,
    explanationAr: "هجوم حقيقي وحرج (True Positive): محاولة صريحة للوصول إلى ذاكرة عملية lsass.exe عبر أداة Mimikatz لسرقة كلمات مرور المدراء وهاشات الـ NTLM. يتطلب عزل الجهاز فوراً!",
    explanationEn: "Critical True Positive: Explicit LSASS memory access by Mimikatz to dump cached credentials and NTLM hashes. Demands immediate host isolation!"
  }
];

class TriageEngine {
  constructor() {
    this.currentIndex = 0;
    this.score = 0;
    this.total = triageCases.length;
  }

  getCurrentCase() {
    return triageCases[this.currentIndex];
  }

  evaluateDecision(userSaidTruePositive) {
    const item = this.getCurrentCase();
    const isCorrect = userSaidTruePositive === item.isTruePositive;
    if (isCorrect) this.score++;

    return {
      isCorrect,
      explanationAr: item.explanationAr,
      explanationEn: item.explanationEn,
      score: this.score,
      total: this.total,
      hasNext: this.currentIndex < this.total - 1
    };
  }

  nextCase() {
    if (this.currentIndex < this.total - 1) {
      this.currentIndex++;
      return this.getCurrentCase();
    }
    return null;
  }

  reset() {
    this.currentIndex = 0;
    this.score = 0;
  }
}

const triageEngine = new TriageEngine();
