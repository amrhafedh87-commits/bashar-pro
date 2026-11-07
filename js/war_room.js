// Live SOC War Room & SIEM Queue Controller
// Curated for Eng. Bashar Hafedh - BasharSec Academy

class WarRoomController {
  constructor() {
    this.engine = warRoomEngine;
    this.selectedAlertId = this.engine.alerts[0].id;
    this.currentFilter = 'ALL'; // 'ALL', 'CRITICAL', 'HIGH', 'MEDIUM', 'LOW'
  }

  init() {
    this.renderQueue();
    this.renderActiveInvestigation();
  }

  setFilter(filter) {
    this.currentFilter = filter;
    this.renderQueue();
  }

  selectAlert(alertId) {
    this.selectedAlertId = alertId;
    this.engine.selectAlert(alertId);
    this.renderQueue();
    this.renderActiveInvestigation();
  }

  renderQueue() {
    const container = document.getElementById('warRoomQueueList');
    if (!container) return;

    const filtered = this.engine.alerts.filter(a => {
      if (this.currentFilter === 'ALL') return true;
      return a.severity.toUpperCase() === this.currentFilter;
    });

    const isAr = i18n.currentLang === 'ar';

    let html = '';
    filtered.forEach(a => {
      const isSelected = a.id === this.selectedAlertId;
      const isResolved = a.status === 'Resolved';
      const sevClass = a.severity.toLowerCase();

      html += `
        <div class="war-alert-card ${sevClass} ${isSelected ? 'active' : ''} ${isResolved ? 'resolved' : ''}" 
             onclick="warRoomApp.selectAlert('${a.id}')">
          <div class="war-alert-top">
            <span class="war-alert-pill ${sevClass}">${a.severity}</span>
            <span class="war-alert-id">${a.id}</span>
            <span class="war-alert-status ${isResolved ? 'status-closed' : 'status-open'}">
              ${isResolved ? (isAr ? 'تم التحقيق ✓' : 'Resolved') : (isAr ? 'تنبيه نشط ⚠️' : 'Active')}
            </span>
          </div>
          <div class="war-alert-name">${a.ruleName}</div>
          <div class="war-alert-meta">
            <span>💻 ${a.host}</span>
            <span>👤 ${a.user}</span>
            <span>⏱ ${a.timestamp}</span>
          </div>
        </div>
      `;
    });

    if (filtered.length === 0) {
      html = `<div class="war-empty-queue">${isAr ? 'لا توجد تنبيهات مطابقة لهذا الفلتر' : 'No alerts matching this filter'}</div>`;
    }

    container.innerHTML = html;

    // Update Counter Badges
    const resolvedEl = document.getElementById('warRoomResolvedCount');
    if (resolvedEl) {
      const resolvedNum = this.engine.alerts.filter(a => a.status === 'Resolved').length;
      resolvedEl.innerText = `${resolvedNum} / ${this.engine.alerts.length}`;
    }
  }

  renderActiveInvestigation() {
    const pane = document.getElementById('warRoomInvestigationPane');
    if (!pane) return;

    const a = this.engine.getAlert(this.selectedAlertId);
    if (!a) return;

    const isAr = i18n.currentLang === 'ar';
    const isResolved = a.status === 'Resolved';

    pane.innerHTML = `
      <div class="investigation-screen">
        <!-- Top Bar -->
        <div class="investigation-header ${a.severity.toLowerCase()}">
          <div class="inv-header-left">
            <span class="war-alert-pill ${a.severity.toLowerCase()}">${a.severity}</span>
            <h3 class="inv-title">${a.ruleName}</h3>
            <span class="inv-mitre-tag">MITRE: <strong>${a.mitreId}</strong> (${a.mitreTechnique})</span>
          </div>
          <div class="inv-header-right">
            <span><strong>${isAr ? 'المضيف:' : 'Host:'}</strong> ${a.host}</span>
            <span><strong>${isAr ? 'المستخدم:' : 'User:'}</strong> ${a.user}</span>
            <span><strong>${isAr ? 'المصدر:' : 'Src IP:'}</strong> ${a.srcIp}</span>
          </div>
        </div>

        <!-- Investigation Context Alert -->
        <div class="inv-context-box">
          <div class="context-label">📌 ${isAr ? 'سياق التنبيه ووصف الحدث (Context)' : 'Alert Context'}</div>
          <p>${a.context}</p>
        </div>

        <!-- Raw Log Box -->
        <div class="inv-rawlog-box">
          <div class="inv-rawlog-header">
            <span>📜 ${isAr ? 'السجل الخام الكامل (Full Raw Telemetry Log)' : 'Full Raw Log'}</span>
            <button class="btn-copy-log" onclick="navigator.clipboard.writeText(document.getElementById('warRawLogText').innerText); app.showToast('${isAr ? 'تم نسخ السجل للحافظة' : 'Copied'}', 'info');">📋 ${isAr ? 'نسخ السجل' : 'Copy Log'}</button>
          </div>
          <pre class="inv-rawlog-body" id="warRawLogText">${a.rawLog}</pre>
        </div>

        <!-- Threat Intelligence Fast Checker -->
        <div class="inv-ti-section">
          <h4>🌐 ${isAr ? 'أداة فحص استخبارات التهديدات المدمجة (Integrated Threat Intel)' : 'Threat Intelligence Lookup'}</h4>
          <div class="inv-ti-checker">
            <div class="ti-input-row">
              <input type="text" id="warTiInput" class="search-field" value="${a.ioc}">
              <button class="btn-primary-glow" onclick="warRoomApp.runTiLookup()">🔎 ${isAr ? 'فحص المؤشر (Lookup IOC)' : 'Lookup'}</button>
            </div>
            <div id="warTiResultBox" class="ti-result-card ${a.tiResult.reputation === 'MALICIOUS' ? 'threat-malicious' : 'threat-clean'}">
              <div class="ti-result-header">
                <span class="ti-reputation-badge">${a.tiResult.reputation}</span>
                <span class="ti-confidence">${isAr ? 'معدل الثقة:' : 'Confidence:'} ${a.tiResult.confidence}%</span>
              </div>
              <div class="ti-result-details">
                <p><strong>${isAr ? 'موقع الخادم الجغرافي:' : 'Geo/ISP:'}</strong> ${a.tiResult.country} (${a.tiResult.isp})</p>
                <p><strong>${isAr ? 'كشف محركات مكافحة التهديدات:' : 'Threat Engines:'}</strong> ${a.tiResult.vtDetections}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Analyst Verdict & Incident Form -->
        <div class="inv-form-section">
          <h4>🎯 ${isAr ? 'نموذج إغلاق التذكرة وقرار المحلل (Triage Verdict & Report)' : 'Triage Verdict & Report'}</h4>
          <div class="verdict-options-row">
            <label class="verdict-radio-label">
              <input type="radio" name="warVerdict" value="TP" ${a.analystVerdict === 'TP' ? 'checked' : ''}>
              <span class="verdict-custom-radio red"></span>
              <span class="verdict-text">🔴 ${isAr ? 'هجوم حقيقي مؤكد (True Positive - TP)' : 'True Positive (TP)'}</span>
            </label>
            <label class="verdict-radio-label">
              <input type="radio" name="warVerdict" value="FP" ${a.analystVerdict === 'FP' ? 'checked' : ''}>
              <span class="verdict-custom-radio green"></span>
              <span class="verdict-text">🟢 ${isAr ? 'إنذار خاطئ مشروع (False Positive - FP)' : 'False Positive (FP)'}</span>
            </label>
            <label class="verdict-radio-label">
              <input type="radio" name="warVerdict" value="BTP" ${a.analystVerdict === 'BTP' ? 'checked' : ''}>
              <span class="verdict-custom-radio yellow"></span>
              <span class="verdict-text">🟡 ${isAr ? 'هجوم حقيقي تم صده (Benign / Blocked TP)' : 'Blocked / Benign TP'}</span>
            </label>
          </div>

          <div class="inv-notes-field">
            <label>📝 ${isAr ? 'تقرير الحادث وملاحظات المهندس بشار (Incident Report Notes):' : 'Incident Report Notes:'}</label>
            <textarea id="warAnalystNotes" class="analyst-notes-input" placeholder="${isAr ? 'اكتب تحليل الحادث: ما الذي حدث؟ ما هو مسار الاختراق؟ وما هي خطوات المعالجة (Containment/Remediation)؟' : 'Enter incident report details...'}">${a.analystNotes || ''}</textarea>
          </div>

          <div class="inv-actions-row">
            <button class="btn-primary-glow" onclick="warRoomApp.submitTicket('${a.id}')">
              💾 ${isAr ? 'إغلاق التذكرة واعتماد التحقيق' : 'Submit Verdict & Close Ticket'}
            </button>
            <button class="btn-secondary" onclick="warRoomApp.escalateTicket('${a.id}')">
              🚨 ${isAr ? 'تصعيد الحادث إلى Tier 2 / Incident Response' : 'Escalate to Tier 2'}
            </button>
          </div>

          <div id="warFeedbackBox" class="ticket-feedback-box" style="${isResolved ? 'display:block;' : 'display:none;'}">
            ${isResolved ? `
              <div class="feedback-title">✓ ${isAr ? 'التذكرة مغلقة ومعتمدة' : 'Ticket Resolved'}</div>
              <p>${a.verdictExplanation}</p>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  }

  runTiLookup() {
    const input = document.getElementById('warTiInput');
    const box = document.getElementById('warTiResultBox');
    if (!input || !box) return;

    const val = input.value.trim();
    if (!val) return;

    app.showToast(i18n.currentLang === 'ar' ? 'جاري الاستعلام في قواعد بيانات استخبارات التهديدات العالمية...' : 'Querying Threat Intelligence feeds...', 'info');

    // Simulate fast OSINT lookup
    setTimeout(() => {
      const a = this.engine.getAlert(this.selectedAlertId);
      if (a) {
        box.style.display = 'block';
        box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 400);
  }

  submitTicket(alertId) {
    const selected = document.querySelector('input[name="warVerdict"]:checked');
    const notes = document.getElementById('warAnalystNotes') ? document.getElementById('warAnalystNotes').value : '';
    const isAr = i18n.currentLang === 'ar';

    if (!selected) {
      alert(isAr ? 'يرجى تحديد قرار الفرز (True Positive أم False Positive) أولاً!' : 'Please select a verdict first!');
      return;
    }

    const verdict = selected.value;
    const res = this.engine.submitInvestigation(alertId, verdict, notes, false);
    const box = document.getElementById('warFeedbackBox');

    if (box && res) {
      box.style.display = 'block';
      if (res.isCorrect) {
        box.className = 'ticket-feedback-box correct';
        box.innerHTML = `
          <div class="feedback-title">🎯 ${isAr ? 'تحقيق احترافي دقيق جداً يا باشمهندس بشار!' : 'Outstanding investigation, Eng. Bashar!'}</div>
          <p>${res.explanation}</p>
          <div style="margin-top: 10px; font-weight: bold; color: var(--accent-green);">
            ${isAr ? 'تم اعتماد تقرير الحادث وحفظه في سجل العمليات ✓' : 'Incident report approved and recorded ✓'}
          </div>
        `;
        app.showToast(isAr ? 'تم إغلاق التذكرة بنجاح وحفظ تقدمك ✓' : 'Ticket resolved successfully ✓', 'success');
      } else {
        box.className = 'ticket-feedback-box incorrect';
        box.innerHTML = `
          <div class="feedback-title">⚠️ ${isAr ? 'قرار الفرز يحتاج مراجعة دقيقة!' : 'Verdict requires review!'}</div>
          <p>${res.explanation}</p>
        `;
      }
      box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    this.renderQueue();
  }

  escalateTicket(alertId) {
    const isAr = i18n.currentLang === 'ar';
    const notes = document.getElementById('warAnalystNotes') ? document.getElementById('warAnalystNotes').value : '';
    this.engine.submitInvestigation(alertId, 'TP', notes + ' [ESCALATED TO TIER 2 IR TEAM]', true);
    
    app.showToast(isAr ? 'تم تصعيد التنبيه فوراً إلى فريق الاستجابة للحوادث (Tier 2 / IR) 🚨' : 'Alert escalated to Tier 2 IR Team 🚨', 'warning');
    this.renderQueue();
    this.renderActiveInvestigation();
  }
}

const warRoomApp = new WarRoomController();

function openWarRoomModal() {
  warRoomApp.init();
  app.openModal('warRoomModal');
}
