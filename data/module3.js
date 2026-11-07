// Stage 3: Deep Log Analysis & Sysmon Mastery (علم تحليل السجلات ومصادر البيانات)
// Curated with exhaustive depth for Eng. Bashar Hafedh - BasharSec Academy

const module3Data = {
  id: "module3",
  stageNumber: 3,
  titleAr: "المرحلة 3: علم تحليل السجلات ومصادر البيانات (Deep Log Analysis & Sysmon)",
  titleEn: "Stage 3: Deep Log Analysis & Sysmon Mastery",
  summaryAr: "علم قراءة مسرح الجريمة الرقمي: تشريح السجلات الخام سطراً بسطر، إتقان قنوات وأرقام أحداث ويندوز الأمنية، وفك أسرار وحش المراقبة Sysmon.",
  summaryEn: "Reading digital crime scenes: Raw log anatomy, Windows Event IDs, Logon Types, and mastering Sysmon telemetry for advanced threat detection.",
  badgeAr: "مشرّح السجلات وSysmon",
  badgeEn: "Log Analysis & Sysmon Master",
  icon: "receipt_long",
  lessons: [
    {
      id: "lesson-3-1",
      moduleId: "module3",
      number: "3.1",
      titleAr: "تشريح الـ Log من الصفر: البنية، الصيغ القياسية (JSON, CEF, Syslog)، وتوحيد التوقيت NTP",
      titleEn: "Raw Log Anatomy: Structure, Formats (Syslog, JSON, CEF, XML) & NTP Time Normalization",
      duration: "55 min",
      theoryAr: `
<h3>حبر الجريمة الرقمية: ما هو السجل (Log) ولماذا هو الأكسجين لمحلل الـ SOC؟</h3>
<p class="lead">في عالم الأمن السيبراني، المقولة الشهيرة هي: <em>"إذا لم يُسجل الحدث في الـ Log، فكأنه لم يحدث أبداً!"</em> المهاجمون يعلمون ذلك، لذلك يحاولون دوماً تفادي توليد السجلات أو مسحها. كـ SOC Analyst، أنت لست مبرمجاً ولا مهندس شبكات عادي، أنت "محقق جنائي" تقرأ الحروف والأرقام في السجل لتعيد بناء ما حدث في مسرح الجريمة قبل ساعات أو أيام.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: الصندوق الأسود للطائرة وكاميرات المراقبة</div>
  <p>عندما تسقط طائرة، لا يخمن المحققون سبب السقوط، بل يبحثون في قاع المحيط عن "الصندوق الأسود" الذي يسجل كل حركة قام بها الطيار، وكل ارتفاع وسرعة وضغط في أجهزة الطائرة ثانية بثانية.</p>
  <p>السجل الأمني (Security Log) هو الصندوق الأسود للحاسوب أو السيرفر أو الراوتر. يوثق بالثانية من دخل، ومن فتح الملف، ومن اتصل بالإنترنت، وما هو الأمر الذي تم تنفيذه!</p>
</div>

<h4>1. الأركان الخمسة الإلزامية لأي سجل أمني في العالم (The 5 Ws of Logging):</h4>
<p>أي سجل ناقص لأحد هذه الأركان يعتبر عديم الفائدة جنائياً أمام المحاكم ومدراء الـ SOC:</p>
<ol>
  <li><strong>متى؟ (When / Timestamp):</strong> التوقيت الدقيق جداً لحدوث الحدث (بالملي ثانية).</li>
  <li><strong>أين؟ (Where / Host / Device):</strong> اسم الجهاز، عنوان الـ IP، أو السيرفر الذي وقع فيه الحدث.</li>
  <li><strong>من؟ (Who / Subject User):</strong> اسم المستخدم أو الحساب أو العملية البرمجية التي قامت بالفعل.</li>
  <li><strong>ماذا؟ (What / Action):</strong> الفعل الدقيق: تسجيل دخول، قراءة ملف، مسح سجل، اتصال شبكي.</li>
  <li><strong>ما هي النتيجة؟ (Outcome / Status):</strong> هل نجح الفعل (Success) أم فشل ورُفض (Failure / Denied)؟</li>
</ol>

<h4>2. الصيغ القياسية للسجلات (Standard Log Formats):</h4>
<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>الصيغة</th>
        <th>الاسم القياسي</th>
        <th>الشكل العام</th>
        <th>أين تُستخدم؟</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Syslog (RFC 5424)</strong></td>
        <td>System Logging Protocol</td>
        <td><code>&lt;34&gt;1 2026-11-06T08:14:22Z host01 sshd 1420 - - Failed password for root</code></td>
        <td>أنظمة لينكس، أجهزة السويتش والراوتر والجدران النارية (عبر منفذ UDP 514).</td>
      </tr>
      <tr>
        <td><strong>JSON</strong></td>
        <td>JavaScript Object Notation</td>
        <td><code>{"timestamp": "2026-11-06T08:14:22Z", "user": "admin", "status": "failed"}</code></td>
        <td>أحدث صيغة مفضلة لأنظمة الـ SIEM السحابية (Splunk, Elastic, Sentinel) لسهولة الفهرسة والبحث.</td>
      </tr>
      <tr>
        <td><strong>CEF</strong></td>
        <td>Common Event Format</td>
        <td><code>CEF:0|Vendor|Product|Version|SignatureID|Name|Severity|Extension...</code></td>
        <td>صيغة ابتكرتها شركة ArcSight لتوحيد سجلات أجهزة الحماية بمختلف أنواعها.</td>
      </tr>
      <tr>
        <td><strong>XML</strong></td>
        <td>Extensible Markup Language</td>
        <td><code>&lt;Event&gt;&lt;System&gt;&lt;EventID&gt;4624&lt;/EventID&gt;...&lt;/System&gt;&lt;/Event&gt;</code></td>
        <td>الصيغة الأصلية تحت الغطاء لسجلات أحداث ويندوز (Windows Event Viewer).</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>3. كارثة عدم توحيد التوقيت ولماذا نحتاج NTP / UTC؟</h4>
<p>تخيل أن جدار الحماية يقع في دولة بتوقيت +3، بينما السيرفر بتوقيت غرينتش (UTC 0)، وحاسوب الضحية بتوقيت أمريكا (-5). إذا حدث هجوم، ستظهر سجلات جدار الحماية أنها وقعت قبل أن يرسل الضحية الحزمة بـ 3 ساعات! هذا يجعل مطابقة الأحداث (Correlation) مستحيلة تماماً ويضلل المحلل.</p>
<p><strong>القاعدة الذهبية في الـ SOC:</strong> جميع أجهزة وسيرفرات وحساسات الشركة يجب أن تضبط على خادم توقيت مركزي <strong>NTP (Network Time Protocol)</strong> وتُحفظ السجلات بتوقيت غرينتش الموحد <strong>UTC (Coordinated Universal Time)</strong>.</p>
      `,
      theoryEn: `<h3>Log Anatomy: Standard Formats (Syslog, JSON, CEF, XML) & NTP Synchronization</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: التلاعب بالسجلات وتوحيد الأدلة</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف يحاول الهكر العبث بالسجلات؟</h4>
    <ul>
      <li><strong>مسح السجلات بعد الاختراق (Log Wiping):</strong> تشغيل أمر: <code>wevtutil cl Security</code> في ويندوز، أو مسح ملف <code>/var/log/auth.log</code> في لينكس لإخفاء هوية الدخول.</li>
      <li><strong>التلاعب بالتوقيت (Timestomping):</strong> تعديل تواريخ إنشاء الملفات الخبيثة لتبدو كأنها ملفات قديمة تم إنشاؤها مع تثبيت الويندوز قبل سنتين لتضليل المحلل الجنائي!</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 دفاعات وحيل محلل الـ SOC</h4>
    <ul>
      <li><strong>الإرسال الفوري لـ SIEM (Centralized Forwarding):</strong> تثبيت برامج وكلاء (Log Forwarders / Wazuh Agent / Splunk Forwarder) تقوم بنسخ السجل وإرساله فوراً إلى خادم الـ SIEM في نفس الجزء من الثانية. حتى لو قام المهاجم بمسح السجل محلياً، فالنسخة محفوظة بأمان في الـ SIEM!</li>
      <li><strong>مراقبة الحدث 1102 (The audit log was cleared):</strong> تنبيه أحمر فوري في الـ SIEM إذا حاول أي مستخدم مسح سجل الأمان.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Log Tampering vs Centralized SIEM Forwarding</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 3.1: فحص صيغ السجلات المختلفة ومقارنة JSON مع Syslog</h4>
    <p>استخدم سطر الأوامر لاستعراض وتحويل وفلترة السجلات بصيغ JSON و Syslog.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-3-1">
      <div class="term-line output">SOC Log Parsing Console v3.0</div>
      <div class="term-line output">Type 'cat-json-log' or 'inspect-syslog' to explore formats.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('cat-json-log', 'lab-term-3-1')">Inspect JSON Telemetry Log</button>
    <button class="btn-cmd" onclick="runSimCommand('inspect-syslog', 'lab-term-3-1')">Inspect Raw Syslog RFC 5424</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive raw log formatting and JSON parsing.</p>`,
      ticket: {
        ticketId: "SEC-TICK-301",
        severity: "CRITICAL",
        severityClass: "critical",
        sourceHost: "DC01.corp.local",
        timestamp: "2026-11-06 22:30:00 UTC",
        ruleTriggered: "WINDOWS_EVENT_1102_SECURITY_AUDIT_LOG_CLEARED",
        rawLog: `<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">
  <System>
    <Provider Name="Microsoft-Windows-Eventlog" Guid="{fc65dd35-470c-42f4-b473-f0a7f9ac4e74}" />
    <EventID>1102</EventID>
    <TimeCreated SystemTime="2026-11-06T22:29:58.1023901Z" />
    <Computer>DC01.corp.local</Computer>
  </System>
  <UserData>
    <LogFileCleared xmlns="http://manifests.microsoft.com/win/2004/08/windows/eventlog">
      <SubjectUserSid>S-1-5-21-3948572910-4829102-1002-500</SubjectUserSid>
      <SubjectUserName>Administrator</SubjectUserName>
      <SubjectDomainName>CORP</SubjectDomainName>
      <SubjectLogonId>0x3E7</SubjectLogonId>
    </LogFileCleared>
  </UserData>
</Event>`,
        questionAr: "تلقيت تنبيهاً أمنياً بالحدث Event ID 1102 على خادم الـ Domain Controller المركزي. ما معنى هذا الحدث وما هو التفسير الأمني له؟",
        questionEn: "Analyze the Event 1102 log on the Domain Controller. What does this indicate and what is the security implication?",
        optionsAr: [
          "تحديث روتيني لويندوز لتنظيف المساحة التخزينية للسيرفر.",
          "حادث أمني بالغ الخطورة (Defense Evasion): قام شخص أو مهاجم باستخدام حساب Administrator بمسح سجل الأمان بالكامل (Audit Log Cleared) لإخفاء آثار نشاط خبيث أو هجوم، ويجب عزل الخادم فوراً واسترجاع السجلات من الـ SIEM المركزي والتحقيق مع المسؤولين.",
          "تفريغ طبيعي للملفات المؤقتة في مجلد Temp.",
          "خطأ في خادم الوقت NTP."
        ],
        optionsEn: [
          "Routine Windows storage cleanup.",
          "Critical Defense Evasion Incident: Security audit log was intentionally cleared using Administrator account to hide attack tracks. Isolate DC and pull SIEM copies.",
          "Routine temp file purge.",
          "NTP clock drift."
        ],
        correctIndex: 1,
        explanationAr: "إجابة لا تقبل الجدل يا باشمهندس بشار! الحدث 1102 هو الراية الحمراء الأولى في علم الاستجابة للحوادث (Incident Response): قيام شخص بمسح سجل الأمان (LogFileCleared) عمداً يعني بنسبة 99% أن هناك اختراقاً أو خائناً داخلياً يحاول إخفاء جرائمه قبل المغادرة! لحسن الحظ، السجل وصل للـ SIEM قبل مسح السجل المحلي، ويجب فوراً فحص السجلات السابقة للحساب لمعرفة ما قام به قبل ضغطة المسح.",
        explanationEn: "Spot on! Event ID 1102 indicates intentional clearing of the Security log—the quintessential hallmark of adversary anti-forensics and defense evasion."
      }
    },

    {
      id: "lesson-3-2",
      moduleId: "module3",
      number: "3.2",
      titleAr: "سجلات أحداث ويندوز (Windows Event Logs) وأهم أرقام الأحداث وأنواع الدخول (Logon Types)",
      titleEn: "Windows Security Event Logs Mastery: Logon Types (2,3,10) & Critical Event IDs",
      duration: "70 min",
      theoryAr: `
<h3>قاموس المحلل الجنائي: قراءة سجلات ويندوز كأنك تقرأ كتاباً مفتوحاً!</h3>
<p class="lead">يولد نظام ويندوز آلاف الأحداث كل دقيقة. إذا لم تكن تعرف أي الأرقام تبحث عنها، فستغرق في بحر من البيانات التافهة! هنا سنتعلم تشريح أشهر وأخطر أرقام الأحداث الأمنية في ويندوز، والسر الأعظم الذي يميز المحلل المحترف: <strong>أنواع تسجيل الدخول (Logon Types)</strong>.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: بواب الفندق ودفتر الدخول</div>
  <p>عندما يدخل شخص للفندق، يكتب البواب في الدفتر: "دخل فلان في الساعة 8". لكن المحقق يسأل: <em>"كيف دخل؟"</em> هل دخل مشياً على الأقدام من الباب الرئيسي؟ (Interactive Logon Type 2). أم اتصل بالهاتف لطلب خدمة الغرف؟ (Network Logon Type 3). أم دخل عبر المفتاح الذكي من بعد؟ (RDP Remote Interactive Logon Type 10)؟</p>
  <p>هذا بالضبط ما يفعله حقل <code>LogonType</code> في سجل الحدث 4624: يخبرك بطريقة الدخول بدقة متناهية!</p>
</div>

<h4>1. الدليل الكامل لأنواع تسجيل الدخول في ويندوز (Logon Types):</h4>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>رقم نوع الدخول</th>
        <th>الاسم الهندسي</th>
        <th>كيف حدث تسجيل الدخول؟</th>
        <th>الأهمية الجنائية لمحلل الـ SOC</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Logon Type 2</strong></td>
        <td>Interactive (تفاعلي مباشر)</td>
        <td>المستخدم جالس فعلياً أمام شاشة الجهاز ولوحة المفاتيح وكتب كلمة المرور بيده.</td>
        <td>دخول محلي؛ إذا ظهر في سيرفر بعيد في وقت متأخر، فهذا يعني وجود شخص في غرفة السيرفرات!</td>
      </tr>
      <tr>
        <td><strong>Logon Type 3</strong></td>
        <td>Network (شبكي)</td>
        <td>المستخدم يتصل بمورد شبكي عبر الشبكة (مثل مجلد مشترك SMB، أو موقع داخلي IIS، أو استعلامات RPC).</td>
        <td><strong>مسرح هجمات الحركة الجانبية (Lateral Movement)!</strong> استخدام PsExec أو Pass-The-Hash أو هجمات مشاركة الملفات يسجل دوماً كـ LogonType = 3.</td>
      </tr>
      <tr>
        <td><strong>Logon Type 4</strong></td>
        <td>Batch</td>
        <td>تشغيل مهمة مجدولة مسبقاً (Scheduled Task) تعمل بحساب مستخدم محدد.</td>
        <td>مراقبة مهام البقاء Persistence التي تعمل بجدولة زمنية.</td>
      </tr>
      <tr>
        <td><strong>Logon Type 5</strong></td>
        <td>Service</td>
        <td>بدء تشغيل خدمة من خدمات ويندوز في الخلفية بحساب خدمة.</td>
        <td>تثبيت خدمات خبيثة جديدة.</td>
      </tr>
      <tr>
        <td><strong>Logon Type 7</strong></td>
        <td>Unlock</td>
        <td>المستخدم قام بفك قفل شاشة الحاسوب بعد مغادرته المكتب.</td>
        <td>تحديد أوقات تواجد الموظفين الفعلية في مكاتبهم.</td>
      </tr>
      <tr>
        <td><strong>Logon Type 8</strong></td>
        <td>NetworkCleartext</td>
        <td>تسجيل دخول شبكي أرسل كلمة المرور كنص واضح بدون تشفير (مثل Basic HTTP Authentication).</td>
        <td>خطر أمني فادح؛ إمكانية التقاط كلمة المرور بالتنصت (Sniffing).</td>
      </tr>
      <tr>
        <td><strong>Logon Type 9</strong></td>
        <td>NewCredentials</td>
        <td>استخدام أمر <code>runas /netonly</code> (المستخدم يتصل محلياً بحسابه، لكنه يرسل بيانات اعتماد أخرى للشبكة).</td>
        <td>التوقيع الحصري لأداة <strong>Mimikatz</strong> عند تنفيذ هجوم Overpass-The-Hash!</td>
      </tr>
      <tr>
        <td><strong>Logon Type 10</strong></td>
        <td>RemoteInteractive (سطح المكتب البعيد RDP)</td>
        <td>المستخدم سجل دخوله عبر بروتوكول سطح المكتب البعيد RDP أو Terminal Services.</td>
        <td><strong>الهدف المفضل للمهاجمين!</strong> يظهر عنوان الـ IP الخارجي الذي اتصل بالجهاز في حقل <code>Source Network Address</code>.</td>
      </tr>
    </tbody>
  </table>
</div>

<h4>2. الموسوعة الذهبية لأهم أرقام أحداث ويندوز (Windows Security Event IDs):</h4>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>رقم الحدث</th>
        <th>اسم الحدث</th>
        <th>التصنيف</th>
        <th>ماذا يعني لمحلل الـ SOC؟</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>4624</strong></td><td>An account was successfully logged on</td><td>المصادقة</td><td>دخول ناجح؛ تحقق من اسم المستخدم، رقم الـ LogonType، وعنوان IP المصدر.</td></tr>
      <tr><td><strong>4625</strong></td><td>An account failed to log on</td><td>المصادقة</td><td><strong>رقم 1 لصيد Brute Force!</strong> تحقق من أكواد الفشل الفرعية (SubStatus):<br>• <code>0xC000006A:</code> اسم المستخدم صحيح وكلمة المرور خاطئة.<br>• <code>0xC0000064:</code> اسم المستخدم غير موجود أصلاً.<br>• <code>0xC0000234:</code> الحساب مقفل (Account Locked Out).</td></tr>
      <tr><td><strong>4648</strong></td><td>A logon was attempted using explicit credentials</td><td>المصادقة</td><td>محاولة تشغيل برنامج بحساب آخر (runas)؛ استخدام مشبوه لتصعيد الصلاحيات.</td></tr>
      <tr><td><strong>4672</strong></td><td>Special privileges assigned to new logon</td><td>الصلاحيات</td><td>تسجيل دخول لحساب يملك صلاحيات فائقة (Superuser / Admin Privileges).</td></tr>
      <tr><td><strong>4688</strong></td><td>A new process has been created</td><td>العمليات</td><td>إنشاء عملية جديدة؛ يتطلب تفعيل <em>CommandLine Auditing</em> لرؤية سطر الأوامر كاملاً.</td></tr>
      <tr><td><strong>4697 / 7045</strong></td><td>A service was installed in the system</td><td>البقاء</td><td>تثبيت خدمة جديدة في النظام؛ فحص مسار الملف التنفيذي فوراً.</td></tr>
      <tr><td><strong>4720</strong></td><td>A user account was created</td><td>إدارة الحسابات</td><td>إنشاء حساب مستخدم جديد؛ هل تم بتذكرة تغيير معتمدة من الـ IT؟</td></tr>
      <tr><td><strong>4728 / 4732</strong></td><td>A member was added to a security group</td><td>إدارة المجموعات</td><td>إضافة عضو لمجموعة Domain Admins (4728) أو Administrators المحلية (4732).</td></tr>
      <tr><td><strong>1102</strong></td><td>The audit log was cleared</td><td>التهرب</td><td>مسح سجل الأمان عمداً؛ حالة طوارئ أمنية فورية!</td></tr>
    </tbody>
  </table>
</div>
      `,
      theoryEn: `<h3>Windows Security Event Log Deep Dive: Logon Types & Critical IDs</h3>`,
      attackDefenseAr: `
<h3>صيد هجمات كسر كلمات المرور (Brute Force vs Password Spraying):</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 كيف يفكر المهاجم؟</h4>
    <ul>
      <li><strong>التخمين التقليدي (Brute Force):</strong> تجربة 1,000 كلمة مرور ضد حساب واحد (مثل Administrator). هذا الهجوم غبي ويسهل كشفه لأنه يقفل الحساب فوراً ويولد 1,000 سجل 4625.</li>
      <li><strong>رش كلمات المرور الذكي (Password Spraying):</strong> تجربة كلمة مرور واحدة شائعة (مثل: <code>Winter2026!</code>) ضد 500 حساب مختلف في الشركة بفاصل زمني 15 دقيقة! النتيجة: لا يقفل أي حساب، ويتفادى رادارات التنبيه البسيطة.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 قاعدة الاستعلام الذهبية لمحلل الـ SOC في Splunk</h4>
    <ul>
      <li>كشف الـ Password Spraying عبر الربط بين الحسابات: <code>index=windows EventCode=4625 | stats dc(TargetUserName) as distinct_users count by IpAddress | where distinct_users > 10</code>. هذا الاستعلام يكشف فوراً أي IP يجرب كلمات مرور ضد أكثر من 10 مستخدمين مختلفين!</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Brute Force & Password Spraying Telemetry Correlation</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 3.2: استعلام سجلات ويندوز عبر Get-WinEvent في PowerShell</h4>
    <p>استخدم أوامر التحقيق لاستخراج أحداث الدخول الفاشلة 4625 وتدقيق أنواع الـ LogonTypes.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-3-2">
      <div class="term-line output">Windows Event Log Forensics Terminal</div>
      <div class="term-line output">Type 'Get-WinEvent-4625' or 'Get-WinEvent-4624' to inspect security telemetry.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('Get-WinEvent -FilterHashtable @{LogName=&quot;Security&quot;;ID=4625} -MaxEvents 5', 'lab-term-3-2')">Get-WinEvent 4625 (Failures)</button>
    <button class="btn-cmd" onclick="runSimCommand('Get-WinEvent -FilterHashtable @{LogName=&quot;Security&quot;;ID=4624} -MaxEvents 5', 'lab-term-3-2')">Get-WinEvent 4624 (Success)</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Windows Event querying via PowerShell Get-WinEvent.</p>`,
      ticket: {
        ticketId: "SEC-TICK-302",
        severity: "HIGH",
        severityClass: "high",
        sourceHost: "SQL-BACKEND-01.corp.local",
        timestamp: "2026-11-06 23:45:10 UTC",
        ruleTriggered: "SUSPICIOUS_RDP_REMOTE_INTERACTIVE_LOGON_TYPE_10",
        rawLog: `EventCode: 4624 (Successful Logon)
Computer: SQL-BACKEND-01.corp.local
TargetUserName: BackupOperator
TargetDomainName: CORP
LogonType: 10 (RemoteInteractive)
AuthenticationPackage: Negotiate
WorkstationName: DESKTOP-ATTACKER-KALI
SourceNetworkAddress: 194.26.29.112 (External Internet IP - Russia)
SourcePort: 54120
Privileges: SeBackupPrivilege, SeRestorePrivilege`,
        questionAr: "تفحص سجل تسجيل الدخول الناجح 4624 أعلاه. ما هو الخطر الأمني الداهم الذي يمثله هذا الحدث؟",
        questionEn: "Analyze the Event 4624 log. What is the immediate critical security danger?",
        optionsAr: [
          "المسؤول عن النسخ الاحتياطي يقوم بعمله اليومي الروتيني.",
          "اختراق ناجح لخادم قواعد البيانات الحساس عبر سطح المكتب البعيد RDP (LogonType = 10) من عنوان IP خارجي روسي 194.26.29.112 باستخدام حساب BackupOperator، والمهاجم الآن يتحكم بالسيرفر مباشرة وله صلاحية قراءة النسخ الاحتياطية!",
          "اتصال محلي عبر لوحة المفاتيح في غرفة السيرفرات.",
          "خطأ في إعدادات خادم الملفات."
        ],
        optionsEn: [
          "Normal backup operator routine.",
          "Critical Breach: External adversary logged in via RDP (LogonType 10) from Russian IP 194.26.29.112 into SQL backend using compromised BackupOperator account.",
          "Direct keyboard physical console login.",
          "File server misconfiguration."
        ],
        correctIndex: 1,
        explanationAr: "تحليل دقيق ومباشر يا باشمهندس بشار! ثلاثة عناصر تؤكد الكارثة: 1) LogonType = 10 يعني اتصال سطح مكتب بعيد (RDP). 2) SourceNetworkAddress هو IP خارجي عام (194.26.29.112) متصل مباشرة بسيرفر داخلي حساس بدون VPN. 3) اسم جهاز المتصل DESKTOP-ATTACKER-KALI يدل على نظام كالي لينكس للمهاجم. الإجراء الفوري: قطع جلسة الـ RDP فوراً، عزل خادم الـ SQL، وإعادة ضبط كلمة مرور حساب BackupOperator.",
        explanationEn: "Spot on! LogonType 10 originating from an external public IP directly targeting internal critical SQL infrastructure confirms successful unauthorized RDP compromise."
      }
    },

    {
      id: "lesson-3-3",
      moduleId: "module3",
      number: "3.3",
      titleAr: "وحش المراقبة Sysmon (System Monitor): التثبيت والضبط وتشريح أهم أحداثه",
      titleEn: "Sysmon Mastery: Installation, XML Config & Dissecting Events (1, 3, 7, 8, 10, 11, 22)",
      duration: "70 min",
      theoryAr: `
<h3>أقوى أداة مراقبة مجانية في تاريخ البشرية: كيف يحول Sysmon ويندوز إلى EDR متقدم؟</h3>
<p class="lead">سجلات ويندوز الافتراضية ضعيفة: لا تسجل سطر الأوامر كاملاً، لا تسجل بصمات الهاش للملفات، ولا تسجل اتصالات الشبكة التي تقوم بها كل عملية بالتفصيل! لحل هذه المعضلة، أطلق العبقري مارك روسينوفيتش أداة <strong>Sysmon (System Monitor)</strong> التابعة لحزمة Microsoft Sysinternals.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: كاميرا المراقبة ذات الدقة 4K وفحص بصمات الأصابع</div>
  <p>سجلات ويندوز العادية مثل كاميرا مراقبة قديمة مشوشة بالأبيض والأسود تسجل: "دخل شخص إلى البنك".</p>
  <p>أما Sysmon فهو مثل نظام كاميرات ذكاء اصطناعي فائق الدقة 4K: يسجل وجه الشخص، بصمات أصابعه (MD5/SHA256)، ما الذي قاله بالتفصيل (CommandLine)، من هو والده الذي أرسله (ParentProcess)، وما هي الحقيبة التي وضعها في الخزنة (FileCreate)!</p>
</div>

<h4>1. كيف يعمل Sysmon وكيف يُضبط؟</h4>
<p>يعمل Sysmon كـ <strong>برنامج تشغيل في وضع النواة (Device Driver)</strong>، مما يعني أنه يرصد الأحداث قبل أن تتمكن البرمجيات الخبيثة من خداعه. يُضبط Sysmon بواسطة ملف إعدادات XML يحدد ما نريد تسجيله (Include) وما نريد تجاهله لمنع الضوضاء (Exclude) - مثل تكوين <em>SwiftOnSecurity Sysmon Config</em> الشهير عالمياً.</p>

<h4>2. القاموس الكامل لأهم أحداث Sysmon لمحلل الـ SOC:</h4>

<div class="table-responsive">
  <table class="cyber-table">
    <thead>
      <tr>
        <th>رقم حدث Sysmon</th>
        <th>اسم الحدث</th>
        <th>ما الذي يسجله بالتفصيل؟</th>
        <th>التطبيق العملي في صيد التهديدات (Threat Hunting)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Sysmon 1</strong></td>
        <td>Process Creation (إنشاء عملية)</td>
        <td>أعظم حدث أمني! يسجل: مسار العملية، سطر الأوامر الكامل (CommandLine)، الهاشات (MD5/SHA256/IMPHASH)، مسار وسطر أوامر العملية الأب (ParentCommandLine).</td>
        <td>كشف تشغيل أوامر PowerShell المشفرة، أوامر certutil لتنزيل ملفات، واستدعاء cmd من ملفات Word.</td>
      </tr>
      <tr>
        <td><strong>Sysmon 3</strong></td>
        <td>Network Connection (اتصال شبكي)</td>
        <td>يربط بين العملية البرمجية والاتصال الشبكي (Process Image -> Dest IP & Port).</td>
        <td>كشف عمليات غريبة تتصل بالإنترنت: مثل notepad.exe أو calc.exe تتصل بسيرفر خارجي!</td>
      </tr>
      <tr>
        <td><strong>Sysmon 7</strong></td>
        <td>Image Loaded (تحميل مكتبة DLL)</td>
        <td>يسجل قيام أي عملية بتحميل مكتبة DLL في الذاكرة، مع توقيعها الرقمي والهاش.</td>
        <td>كشف هجمات <strong>DLL Sideloading & Hijacking</strong> عندما تحمل عملية شرعية مكتبة خبيثة.</td>
      </tr>
      <tr>
        <td><strong>Sysmon 8</strong></td>
        <td>CreateRemoteThread (حقن خيط برمجي)</td>
        <td>يسجل قيام عملية بإنشاء خيط تنفيذ داخل ذاكرة عملية أخرى تماماً!</td>
        <td>التوقيع الحصري لهجمات <strong>Process Injection</strong> للهروب من الـ Antivirus وحقن البايلود في explorer.exe.</td>
      </tr>
      <tr>
        <td><strong>Sysmon 10</strong></td>
        <td>ProcessAccess (الوصول لذاكرة عملية)</td>
        <td>يسجل طلب عملية مقبضاً (Handle) للوصول لذاكرة عملية أخرى، مع تحديد مستوى الصلاحيات (GrantedAccess).</td>
        <td><strong>القاعدة الذهبية لصيد أداة Mimikatz!</strong> رصد أي برنامج يطلب صلاحية <code>GrantedAccess = 0x1FFFFF</code> أو <code>0x1010</code> للوصول لعملية <code>lsass.exe</code>!</td>
      </tr>
      <tr>
        <td><strong>Sysmon 11</strong></td>
        <td>FileCreate (إنشاء ملف)</td>
        <td>يسجل إنشاء أي ملف على القرص مع تحديد اسم العملية المنشئة والمسار الكامل.</td>
        <td>كشف إنشاء ملفات الـ Ransomware المشفرة (مثل امتدادات .locked) أو إسقاط الـ Web Shells.</td>
      </tr>
      <tr>
        <td><strong>Sysmon 12 / 13</strong></td>
        <td>Registry Event (تعديل الريجستري)</td>
        <td>يسجل إنشاء أو تعديل قيم ومفاتيح سجل النظام.</td>
        <td>كشف مفاتيح البقاء في <code>CurrentVersion\\Run</code> ومحاولات تعطيل جدار الحماية أو Defender.</td>
      </tr>
      <tr>
        <td><strong>Sysmon 22</strong></td>
        <td>DNSEvent (استعلام DNS بواسطة عملية)</td>
        <td>يسجل استعلامات الـ DNS موثقاً اسم العملية التي طلبت الاستعلام ورابط الدومين.</td>
        <td>كشف اتصالات الـ C2 Beaconing وخوارزميات توليد النطاقات العشوائية (DGA).</td>
      </tr>
    </tbody>
  </table>
</div>
      `,
      theoryEn: `<h3>Sysmon Architecture, XML Configuration & Event ID Analysis (1, 3, 7, 8, 10, 11, 22)</h3>`,
      attackDefenseAr: `
<h3>كيف تصطاد أشهر أدوات الاختراق عبر Sysmon؟</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 أدوات الهكر الشهيرة</h4>
    <ul>
      <li><strong>أداة Mimikatz لسرقة كلمات المرور:</strong> تقوم بفتح عملية lsass.exe لقراءة الذاكرة واستخراج الهاشات وكلمات المرور كنص واضح.</li>
      <li><strong>أداة Cobalt Strike C2:</strong> تقوم بحقن البايلود داخل عملية شرعية والاتصال بسيرفر التحكم كل بضع ثوانٍ (Beaconing).</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 قواعد كشف Sysmon المقابلة</h4>
    <ul>
      <li><strong>صيد Mimikatz فوراً:</strong> <code>EventCode=10 TargetImage="*lsass.exe" GrantedAccess="0x1FFFFF"</code> -> إطلاق إنذار أحمر وعزل الجهاز في 5 ثوانٍ!</li>
      <li><strong>صيد Cobalt Strike:</strong> مراقبة Sysmon Event 8 (CreateRemoteThread) متبوعاً بـ Sysmon Event 3 (اتصال خارجي دوري).</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Hunting Mimikatz & Cobalt Strike via Sysmon Telemetry</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 3.3: استعراض سجلات Sysmon والبحث عن GrantedAccess 0x1FFFFF</h4>
    <p>استخدم سطر الأوامر لفحص سجلات قناة Microsoft-Windows-Sysmon/Operational.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-3-3">
      <div class="term-line output">Sysmon Telemetry Engine Console</div>
      <div class="term-line output">Type 'sysmon-event-1' or 'sysmon-event-10' to inspect deep endpoint activity.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('sysmon-event-1', 'lab-term-3-3')">Inspect Sysmon Event 1 (Process Creation)</button>
    <button class="btn-cmd" onclick="runSimCommand('sysmon-event-10', 'lab-term-3-3')">Inspect Sysmon Event 10 (LSASS Access)</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Sysmon telemetry inspection and LSASS hunting.</p>`,
      ticket: {
        ticketId: "SEC-TICK-303",
        severity: "CRITICAL",
        severityClass: "critical",
        sourceHost: "FIN-SRV-04.corp.local",
        timestamp: "2026-11-06 08:14:22 UTC",
        ruleTriggered: "SYSMON_10_SUSPICIOUS_LSASS_ACCESS_GRANTED_FULL",
        rawLog: `<Event xmlns="http://schemas.microsoft.com/win/2004/08/events/event">
  <System>
    <Provider Name="Microsoft-Windows-Sysmon" />
    <EventID>10</EventID>
    <TimeCreated SystemTime="2026-11-06T08:14:22.1092810Z" />
    <Computer>FIN-SRV-04.corp.local</Computer>
  </System>
  <EventData>
    <Data Name="SourceImage">C:\\Users\\Public\\Downloads\\procdump64.exe</Data>
    <Data Name="TargetImage">C:\\Windows\\system32\\lsass.exe</Data>
    <Data Name="GrantedAccess">0x1FFFFF</Data>
    <Data Name="CallTrace">C:\\Windows\\SYSTEM32\\ntdll.dll+9fb24|C:\\Windows\\System32\\KERNELBASE.dll+2c34e</Data>
  </EventData>
</Event>`,
        questionAr: "تلقيت تنبيهاً أمنياً بالحدث Sysmon 10 يوثق قيام procdump64.exe بطلب GrantedAccess = 0x1FFFFF على lsass.exe. ما هو هدف المهاجم الدقيق وما الإجراء الفوري؟",
        questionEn: "Analyze the Sysmon Event 10 log above. What is the adversary objective and what is your immediate action?",
        optionsAr: [
          "برنامج تفريغ الأخطاء يقوم بمساعدة مهندسي الدعم الفني في حل مشكلة تهنيج النظام.",
          "محاولة مؤكدة وحرجة لسرقة كلمات المرور وتفريغ ذاكرة الـ LSASS (OS Credential Dumping: LSASS Memory) للحصول على هاشات حسابات المستخدمين والمدراء! الإجراء: عزل الخادم فوراً لمنع انتشار المهاجم في الشبكة.",
          "تحديث روتيني لبرنامج الوورد.",
          "تنبيه كاذب يمكن إغلاقه بأمان."
        ],
        optionsEn: [
          "Technical support troubleshooting OS crash.",
          "Confirmed Credential Dumping (T1003.001) targeting LSASS memory to extract password hashes. Isolate server immediately.",
          "Routine Word update.",
          "Benign false positive."
        ],
        correctIndex: 1,
        explanationAr: "إجابة محترف حقيقي يا باشمهندس بشار! أداة procdump هي أداة شرعية من مايكروسوفت ولكن المهاجمين يستخدمونها كـ LOLBin لتفريغ ذاكرة lsass.exe دون أن يعترضها مكافح الفيروسات! طلب صلاحية كاملة (GrantedAccess: 0x1FFFFF) من مسار مشبوه (Users\\Public) هو الدليل القاطع على محاولة سرقة الهاشات وكلمات المرور (Credential Dumping). الإجراء الحاسم: عزل السيرفر فوراً عن الشبكة (Host Containment) لحماية باقي أجهزة الشركة.",
        explanationEn: "Spot-on! ProcDump targeting lsass.exe with full GrantedAccess (0x1FFFFF) executed out of Users\\Public is conclusive proof of Credential Dumping (MITRE ATT&CK T1003.001)."
      }
    },

    {
      id: "lesson-3-4",
      moduleId: "module3",
      number: "3.4",
      titleAr: "تحليل سجلات Linux وسيرفرات الويب (Nginx, Apache, IIS) وسجلات قواعد البيانات",
      titleEn: "Web Servers (Apache, Nginx, IIS) & Database Log Forensics",
      duration: "65 min",
      theoryAr: `
<h3>حراس التجارة والبيانات: قراءة سجلات خوادم الويب وقواعد البيانات كالخبراء!</h3>
<p class="lead">خوادم الويب هي الواجهة الأمامية التي تستقبل ملايين الزوار يومياً، وخوادم قواعد البيانات هي الخزنة الخلفية التي تحوي أرقام البطاقات وبيانات العملاء. عندما يهاجم الهكر موقع شركتك، فإن بصماته تُطبع حرفياً في سجلات الـ Access والـ Error Logs.</p>

<div class="analogy-card">
  <div class="analogy-header">💡 تشبيه من الواقع: دفتر استقبال المتجر وسجل المستودع</div>
  <p><strong>سجل الويب (Web Access Log):</strong> مثل كاميرا بوابة المتجر: تسجل وجه كل شخص دخل، متى دخل، ماذا طلب بالاسم، وهل تم إعطاؤه طلبه أم طرده الحارس.</p>
  <p><strong>سجل الأخطاء (Error Log):</strong> مثل تقرير الحوادث: يسجل أي محاولة غير طبيعية، مثل شخص حاول خلع قفل الباب الخلفي أو كتابة أحرف غير مفهومة!</p>
</div>

<h4>1. تشريح سجل الوصول في Nginx / Apache (Combined Log Format):</h4>
<pre class="ascii-flow">
185.220.101.5 - - [06/Nov/2026:10:14:22 +0000] "GET /products.php?id=1 HTTP/1.1" 200 4819 "-" "Mozilla/5.0..."
     │            │                                  │                     │    │   │         └── User-Agent
     │            │                                  │                     │    │   └──────────── Referer
     │            │                                  │                     │    └──────────────── Bytes Sent (حجم الرد)
     │            │                                  │                     └───────────────────── HTTP Status Code
     │            │                                  └─────────────────────────────────────────── HTTP Request Line
     │            └────────────────────────────────────────────────────────────────────────────── Timestamp
     └─────────────────────────────────────────────────────────────────────────────────────────── Client Source IP
</pre>

<h4>2. علامات الهجمات الشهيرة داخل سجلات الويب (Web Attack Signatures):</h4>
<ul>
  <li><strong>SQL Injection (SQLi):</strong> وجود كلمات مثل <code>UNION%20SELECT</code>, <code>OR%201=1</code>, <code>SLEEP(5)</code>, <code>information_schema</code>.</li>
  <li><strong>Cross-Site Scripting (XSS):</strong> وجود وسوم HTML وجافاسكربت مثل <code>%3Cscript%3E</code>, <code>alert(1)</code>, <code>onerror=</code>.</li>
  <li><strong>Path Traversal:</strong> وجود تكرار لنقاط الخروج من المجلدات مثل <code>../..//..//etc/passwd</code> أو الترميز المزدوج <code>%252e%252e%252f</code>.</li>
  <li><strong>Web Shell Access:</strong> طلبات لملفات بأسماء غريبة أو عشوائية مرفوعة في مجلد الصور مثل <code>/uploads/shell.php?cmd=whoami</code>.</li>
</ul>

<h4>3. سجلات خادم الويب مايكروسوفت (IIS W3C Log Format):</h4>
<p>يتميز بتنسيق tabular يفصل الحقول بمسافات، وأهم حقوله لمحلل الـ SOC: <code>cs-method</code> (نوع الطلب), <code>cs-uri-stem</code> (المسار المطلوب), <code>cs-uri-query</code> (الاستعلام المحمل بالبايلود), و <code>sc-status</code> (كود الاستجابة).</p>
      `,
      theoryEn: `<h3>Web Server & Database Log Analysis: Nginx, Apache & IIS Telemetry</h3>`,
      attackDefenseAr: `
<h3>منظور المهاجم والمدافع: كشف ثغرات الويب والتلاعب بالسجلات</h3>
<div class="battle-grid">
  <div class="attacker-side">
    <h4>🔴 حيل الهكر في التخفي</h4>
    <ul>
      <li><strong>استخدام الترميز المزدوج (Double URL Encoding):</strong> كتابة <code>%2527</code> بدلاً من علامة الاقتباس الفردية <code>'</code> لتفادي قواعد الـ WAF البسيطة.</li>
      <li><strong>إرسال البايلود عبر ترويسة User-Agent أو Referer:</strong> حقن بايلودات مثل ثغرة Log4j داخل الترويسات التي لا تفحصها السجلات العادية.</li>
    </ul>
  </div>
  <div class="defender-side">
    <h4>🟢 أدوات محلل الـ SOC في التحليل السريع</h4>
    <ul>
      <li><strong>استخراج الـ Top Attackers بالأوامر السريعة:</strong> <code>awk '{print $1}' access.log | sort | uniq -c | sort -nr | head -10</code> لمعرفة من يهاجم السيرفر بكثافة.</li>
      <li><strong>كشف استجابة السيرفر للثغرات:</strong> فلترة السجلات التي تحتوي على <code>UNION SELECT</code> وتأكد من أن كود الاستجابة هو <code>403 Forbidden</code> وليس <code>200 OK</code>.</li>
    </ul>
  </div>
</div>
      `,
      attackDefenseEn: `<h3>Attacker vs Defender: Web Evasion Techniques vs Forensic Log Triage</h3>`,
      labAr: `
<div class="lab-workspace">
  <div class="lab-instructions">
    <h4>🧪 المعمل التطبيقي 3.4: استخراج وتحليل الهجمات من سجلات Nginx عبر سطر الأوامر</h4>
    <p>استخدم أوامر grep و awk لتحليل سجلات الويب واكتشاف محاولات حقن SQL Injection.</p>
  </div>
  <div class="terminal-box">
    <div class="terminal-bar"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span> basharsec@soc-workstation:~$</div>
    <div class="terminal-body" id="lab-term-3-4">
      <div class="term-line output">Web Log Analytics Terminal</div>
      <div class="term-line output">Type 'grep-sqli' or 'parse-access-log' to hunt web attacks.</div>
    </div>
  </div>
  <div class="quick-commands">
    <button class="btn-cmd" onclick="runSimCommand('grep &quot;UNION SELECT&quot; /var/log/nginx/access.log', 'lab-term-3-4')">Grep SQL Injection Attacks</button>
    <button class="btn-cmd" onclick="runSimCommand('awk \'{print $1}\' /var/log/nginx/access.log | sort | uniq -c', 'lab-term-3-4')">Count Requests by IP</button>
  </div>
</div>
      `,
      labEn: `<p>Interactive Web log parsing and SQLi hunting simulation.</p>`,
      ticket: {
        ticketId: "SEC-TICK-304",
        severity: "HIGH",
        severityClass: "high",
        sourceHost: "WEB-FRONTEND-01",
        timestamp: "2026-11-06 10:11:59 UTC",
        ruleTriggered: "WAF_BLOCK_MULTI_PATTERN_SQLI_INJECTION",
        rawLog: `TIMESTAMP: 2026-11-06 10:11:59.201
CLIENT_IP: 45.154.255.89 (Netherlands - Hosting Solutions Bot)
SERVER: portal.corp.com
REQUEST: "GET /products.php?id=1%20UNION%20SELECT%20null,username,password%20FROM%20users-- HTTP/1.1"
STATUS: 403 Forbidden
BYTES_SENT: 162 bytes
USER_AGENT: "sqlmap/1.6.4#stable (https://sqlmap.org)"
WAF_RULE_MATCH: Rule #942100 (OWASP ModSecurity Core Rule Set - SQL Injection Attack)`,
        questionAr: "تفحص سجل هجوم الويب أعلاه بدقة. ما هو التقييم الدقيق لهذا التنبيه وما نوعه (TP أم FP أم BTP)؟",
        questionEn: "Analyze the web attack log above. What is the accurate triage classification (TP, FP, or BTP)?",
        optionsAr: [
          "إنذار خاطئ مشروع (False Positive) لأن الزائر يبحث عن منتجات الموقع.",
          "هجوم حقيقي تم صده بنجاح (Blocked True Positive / Benign True Positive): الهجوم حقيقي بنسبة 100% باستخدام أداة sqlmap لسحب كلمات المرور، ولكن جدار الحماية WAF قام بصده وأرجع كود 403 وحجم 162 بايت فقط، ولم تخترق قاعدة البيانات.",
          "هجوم ناجح تمكن من سرقة كلمات المرور.",
          "خطأ في خادم Nginx."
        ],
        optionsEn: [
          "Benign search query (False Positive).",
          "Blocked True Positive: Genuine SQLi attempt via sqlmap successfully blocked by WAF returning 403 Forbidden with 162 bytes payload.",
          "Successful data breach.",
          "Nginx server crash."
        ],
        correctIndex: 1,
        explanationAr: "فرز احترافي في منتهى الذكاء يا باشمهندس بشار! هذا هو التمييز الدقيق لمحلل SOC Tier 1/2 المحترف: الهجوم حقيقي (True Positive) لأن البايلود يحتوي على UNION SELECT وأداة sqlmap الشهيرة، ولكنه هجوم تم صده (Blocked / Benign TP) لأن السيرفر رد بـ 403 Forbidden وأرسل صفحة خطأ صغيرة 162 بايت فقط، مما يؤكد أن قاعدة البيانات لم تُمس وأن الـ WAF قام بواجبه على أكمل وجه.",
        explanationEn: "Spot on triage! A legitimate malicious attack via sqlmap successfully repelled by the WAF with a 403 Forbidden status is classified as a Blocked/Benign True Positive."
      }
    }
  ]
};
