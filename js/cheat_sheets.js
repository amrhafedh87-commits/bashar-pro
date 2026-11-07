// SOC Cheat Sheets & Quick Reference Viewer
// Curated for Eng. Bashar Hafedh - BasharSec Academy

class CheatSheetsController {
  constructor() {
    this.data = cheatSheetsData;
    this.activeTab = 'ports'; // 'ports', 'windows', 'sysmon', 'cli'
    this.searchQuery = '';
    this.cliSubTab = 'linux'; // 'linux', 'powershell', 'wireshark', 'splunk'
  }

  init() {
    this.renderTabs();
    this.renderContent();
  }

  switchTab(tabKey) {
    this.activeTab = tabKey;
    this.searchQuery = '';
    const searchInput = document.getElementById('cheatSearchInput');
    if (searchInput) searchInput.value = '';
    this.renderTabs();
    this.renderContent();
  }

  switchCliSubTab(subTabKey) {
    this.cliSubTab = subTabKey;
    this.renderContent();
  }

  setSearch(q) {
    this.searchQuery = q.trim().toLowerCase();
    this.renderContent();
  }

  renderTabs() {
    const isAr = i18n.currentLang === 'ar';
    const tabsContainer = document.getElementById('cheatNavTabs');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = `
      <button class="cheat-tab-btn ${this.activeTab === 'ports' ? 'active' : ''}" onclick="cheatSheetsApp.switchTab('ports')">
        🌐 ${isAr ? 'المنافذ والبروتوكولات (Ports & Protocols)' : 'Ports & Protocols'}
      </button>
      <button class="cheat-tab-btn ${this.activeTab === 'windows' ? 'active' : ''}" onclick="cheatSheetsApp.switchTab('windows')">
        🪟 ${isAr ? 'أحداث ويندوز (Windows Event IDs)' : 'Windows Event IDs'}
      </button>
      <button class="cheat-tab-btn ${this.activeTab === 'sysmon' ? 'active' : ''}" onclick="cheatSheetsApp.switchTab('sysmon')">
        👁️ ${isAr ? 'أحداث مراقبة النظام (Sysmon IDs)' : 'Sysmon IDs'}
      </button>
      <button class="cheat-tab-btn ${this.activeTab === 'cli' ? 'active' : ''}" onclick="cheatSheetsApp.switchTab('cli')">
        💻 ${isAr ? 'الأوامر والاستعلامات (CLI, SPL, Wireshark)' : 'Commands & Queries'}
      </button>
    `;
  }

  renderContent() {
    const container = document.getElementById('cheatContentArea');
    if (!container) return;

    switch (this.activeTab) {
      case 'ports':
        this.renderPorts(container);
        break;
      case 'windows':
        this.renderWindows(container);
        break;
      case 'sysmon':
        this.renderSysmon(container);
        break;
      case 'cli':
        this.renderCli(container);
        break;
    }
  }

  renderPorts(container) {
    const isAr = i18n.currentLang === 'ar';
    const q = this.searchQuery;

    const list = this.data.ports.filter(p => {
      if (!q) return true;
      return p.port.toString().includes(q) ||
             p.protocol.toLowerCase().includes(q) ||
             p.service.toLowerCase().includes(q) ||
             (p.socSignificance && p.socSignificance.toLowerCase().includes(q)) ||
             (p.attacks && p.attacks.toLowerCase().includes(q));
    });

    let rows = '';
    list.forEach(p => {
      rows += `
        <tr>
          <td><span class="cheat-port-badge">${p.port}</span></td>
          <td><strong>${p.protocol}</strong></td>
          <td><span class="cheat-proto-pill ${p.transport.toLowerCase()}">${p.transport}</span></td>
          <td>${p.service}</td>
          <td class="cheat-desc">${p.socSignificance}</td>
          <td class="cheat-attack"><code>${p.attacks}</code></td>
          <td class="cheat-detect">${p.detection}</td>
        </tr>
      `;
    });

    container.innerHTML = `
      <div class="cheat-table-container">
        <table class="cyber-table cheat-table">
          <thead>
            <tr>
              <th>${isAr ? 'المنفذ' : 'Port'}</th>
              <th>${isAr ? 'البروتوكول' : 'Protocol'}</th>
              <th>${isAr ? 'طبقة النقل' : 'Transport'}</th>
              <th>${isAr ? 'الخدمة' : 'Service'}</th>
              <th>${isAr ? 'الأهمية في علم الـ SOC' : 'SOC Significance'}</th>
              <th>${isAr ? 'الهجمات المرتبطة' : 'Associated Attacks'}</th>
              <th>${isAr ? 'كيفية الاكتشاف' : 'Detection Tips'}</th>
            </tr>
          </thead>
          <tbody>
            ${rows || `<tr><td colspan="7" class="text-center">${isAr ? 'لا توجد نتائج مطابقة' : 'No results found'}</td></tr>`}
          </tbody>
        </table>
      </div>
    `;
  }

  renderWindows(container) {
    const isAr = i18n.currentLang === 'ar';
    const q = this.searchQuery;

    const list = this.data.windowsEventIds.filter(e => {
      if (!q) return true;
      return e.id.toLowerCase().includes(q) ||
             e.name.toLowerCase().includes(q) ||
             e.description.toLowerCase().includes(q) ||
             (e.detectionTips && e.detectionTips.toLowerCase().includes(q));
    });

    let rows = '';
    list.forEach(e => {
      const isCritical = e.importance && (e.importance.includes('Critical') || e.importance.includes('حرج'));
      rows += `
        <tr>
          <td><span class="cheat-event-badge ${isCritical ? 'critical' : 'normal'}">${e.id}</span></td>
          <td><span class="cheat-channel-tag">${e.channel}</span></td>
          <td><strong>${e.name}</strong></td>
          <td><span class="cheat-cat-pill">${e.category}</span></td>
          <td><span class="cheat-importance ${isCritical ? 'text-red' : 'text-cyan'}">${e.importance}</span></td>
          <td class="cheat-desc">${e.description}</td>
          <td class="cheat-detect">${e.detectionTips}</td>
        </tr>
      `;
    });

    container.innerHTML = `
      <div class="cheat-table-container">
        <table class="cyber-table cheat-table">
          <thead>
            <tr>
              <th>${isAr ? 'رقم الحدث' : 'Event ID'}</th>
              <th>${isAr ? 'القناة' : 'Channel'}</th>
              <th>${isAr ? 'اسم الحدث' : 'Event Name'}</th>
              <th>${isAr ? 'التصنيف' : 'Category'}</th>
              <th>${isAr ? 'مستوى الأهمية' : 'Importance'}</th>
              <th>${isAr ? 'الوصف والتفاصيل' : 'Description'}</th>
              <th>${isAr ? 'نصائح صيد التهديدات' : 'Detection Tips'}</th>
            </tr>
          </thead>
          <tbody>
            ${rows || `<tr><td colspan="7" class="text-center">${isAr ? 'لا توجد نتائج مطابقة' : 'No results found'}</td></tr>`}
          </tbody>
        </table>
      </div>
    `;
  }

  renderSysmon(container) {
    const isAr = i18n.currentLang === 'ar';
    const q = this.searchQuery;

    const list = this.data.sysmonEventIds.filter(e => {
      if (!q) return true;
      return e.id.toLowerCase().includes(q) ||
             e.name.toLowerCase().includes(q) ||
             e.description.toLowerCase().includes(q) ||
             (e.detectionTips && e.detectionTips.toLowerCase().includes(q));
    });

    let rows = '';
    list.forEach(e => {
      rows += `
        <tr>
          <td><span class="cheat-sysmon-badge">${e.id}</span></td>
          <td><strong>${e.name}</strong></td>
          <td><span class="cheat-importance text-red">${e.importance}</span></td>
          <td class="cheat-desc">${e.description}</td>
          <td class="cheat-detect">${e.detectionTips}</td>
        </tr>
      `;
    });

    container.innerHTML = `
      <div class="cheat-table-container">
        <table class="cyber-table cheat-table">
          <thead>
            <tr>
              <th>${isAr ? 'معرف Sysmon' : 'Sysmon ID'}</th>
              <th>${isAr ? 'اسم الحدث' : 'Event Name'}</th>
              <th>${isAr ? 'الأهمية' : 'Importance'}</th>
              <th>${isAr ? 'ماذا يسجل هذا الحدث؟' : 'What it Logs'}</th>
              <th>${isAr ? 'قواعد كشف الاختراقات' : 'Detection Logic'}</th>
            </tr>
          </thead>
          <tbody>
            ${rows || `<tr><td colspan="5" class="text-center">${isAr ? 'لا توجد نتائج مطابقة' : 'No results found'}</td></tr>`}
          </tbody>
        </table>
      </div>
    `;
  }

  renderCli(container) {
    const isAr = i18n.currentLang === 'ar';
    const q = this.searchQuery;
    const currentList = this.data.cliCheatSheets[this.cliSubTab] || [];

    const filtered = currentList.filter(item => {
      if (!q) return true;
      return item.cmd.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q);
    });

    let itemsHtml = '';
    filtered.forEach(item => {
      itemsHtml += `
        <div class="cheat-cmd-card">
          <div class="cmd-code-row">
            <code class="cmd-syntax">${item.cmd}</code>
            <button class="btn-copy-code" onclick="navigator.clipboard.writeText(\`${item.cmd.replace(/\\/g, '\\\\').replace(/`/g, '\\`')}\`); app.showToast('${isAr ? 'تم نسخ الأمر بنجاح' : 'Copied'}', 'success');">
              📋 ${isAr ? 'نسخ' : 'Copy'}
            </button>
          </div>
          <div class="cmd-desc">💡 ${item.desc}</div>
        </div>
      `;
    });

    container.innerHTML = `
      <div class="cli-subnav-bar">
        <button class="cli-subtab-btn ${this.cliSubTab === 'linux' ? 'active' : ''}" onclick="cheatSheetsApp.switchCliSubTab('linux')">
          🐧 Linux Bash
        </button>
        <button class="cli-subtab-btn ${this.cliSubTab === 'powershell' ? 'active' : ''}" onclick="cheatSheetsApp.switchCliSubTab('powershell')">
          ⚡ Windows PowerShell
        </button>
        <button class="cli-subtab-btn ${this.cliSubTab === 'wireshark' ? 'active' : ''}" onclick="cheatSheetsApp.switchCliSubTab('wireshark')">
          🦈 Wireshark Display Filters
        </button>
        <button class="cli-subtab-btn ${this.cliSubTab === 'splunk' ? 'active' : ''}" onclick="cheatSheetsApp.switchCliSubTab('splunk')">
          🔍 Splunk SPL Queries
        </button>
      </div>

      <div class="cheat-cmd-list">
        ${itemsHtml || `<div class="text-center p-4">${isAr ? 'لا توجد أوامر مطابقة للبحث' : 'No matching commands'}</div>`}
      </div>
    `;
  }
}

const cheatSheetsApp = new CheatSheetsController();

function openCheatSheetsModal() {
  cheatSheetsApp.init();
  app.openModal('cheatSheetsModal');
}
