// Main Application Controller for BasharSec Academy
// Modern EdTech Architecture - 12 Courses, Single-Flow Reader, Student Auth & Tools Encyclopedia

class BasharSecApp {
  constructor() {
    this.currentView = 'home'; // 'home', 'lesson', 'tools', 'roadmap'
    this.currentCourseId = 'course-1';
    this.currentLessonId = localStorage.getItem('basharsec_last_lesson_id') || 'lesson-1-1';
    this.completedLessons = this.loadCompletedLessons();
    this.theme = localStorage.getItem('basharsec_theme') || 'light';
    this.student = this.loadStudentProfile();
    this.currentLevelFilter = 'all';
    this.currentToolCategory = 'all';
  }

  init() {
    this.applyTheme(this.theme);
    this.updateStudentUI();
    this.renderHomeCourses();
    this.renderSidebarCurriculum();
    this.renderToolsEncyclopedia();
    this.renderRoadmap();
    this.updateProgressUI();
    this.bindEvents();

    // Route based on URL hash if provided
    const hash = window.location.hash.replace('#', '');
    if (hash === 'tools') {
      this.switchView('tools');
    } else if (hash === 'roadmap') {
      this.switchView('roadmap');
    } else if (hash.startsWith('lesson-')) {
      this.loadLesson(hash);
    } else {
      this.switchView('home');
    }

    // Listen for language changes
    window.addEventListener('languageChanged', () => {
      this.updateStudentUI();
      this.renderHomeCourses();
      this.renderSidebarCurriculum();
      this.renderToolsEncyclopedia();
      this.renderRoadmap();
      if (this.currentView === 'lesson') {
        this.renderCurrentLesson();
      }
      this.updateProgressUI();
      if (typeof certHubApp !== 'undefined') {
        certHubApp.render();
      }
      if (typeof warRoomApp !== 'undefined') {
        warRoomApp.renderQueue();
        warRoomApp.renderActiveInvestigation();
      }
    });
  }

  // --- THEME MANAGEMENT ---
  applyTheme(theme) {
    this.theme = theme;
    localStorage.setItem('basharsec_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      themeBtn.title = theme === 'dark' ? 'تبديل للوضع النهاري / Switch to Light' : 'تبديل للوضع المظلم / Switch to Dark';
    }
  }

  toggleTheme() {
    const next = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(next);
  }

  // --- STUDENT AUTH & PROFILE ---
  loadStudentProfile() {
    try {
      const raw = localStorage.getItem('basharsec_student_profile');
      if (raw) return JSON.parse(raw);
    } catch (e) {
      console.warn('Error loading student profile', e);
    }
    return {
      name: 'طالب الأمن السيبراني',
      email: 'student@basharsec.local',
      avatar: '🛡️',
      role: 'متدرب في الأكاديمية'
    };
  }

  saveStudentProfile(name, email, avatar) {
    this.student = {
      name: name.trim() || 'طالب الأمن السيبراني',
      email: email.trim() || 'student@basharsec.local',
      avatar: avatar || '🛡️',
      role: 'متدرب في الأكاديمية'
    };
    localStorage.setItem('basharsec_student_profile', JSON.stringify(this.student));
    this.updateStudentUI();
    const isEn = typeof i18n !== 'undefined' && i18n.currentLang === 'en';
    this.showToast(isEn ? 'Student profile updated successfully ✓' : 'تم حفظ وتحديث بيانات حساب الطالب بنجاح ✓', 'success');
    this.closeModal('studentAuthModal');
  }

  updateStudentUI() {
    const isEn = typeof i18n !== 'undefined' && i18n.currentLang === 'en';
    const isDefaultName = this.student.name === 'طالب الأمن السيبراني' || this.student.name === 'Cybersecurity Student';
    const displayName = isDefaultName
      ? (isEn ? 'Cybersecurity Student' : 'طالب الأمن السيبراني')
      : this.student.name;

    // Top Nav Student Chip
    const nameEl = document.getElementById('studentChipName');
    if (nameEl) nameEl.innerText = displayName;

    const avatarEl = document.getElementById('studentChipAvatar');
    if (avatarEl) avatarEl.innerText = this.student.avatar;

    // Home Banner Greeting
    const bannerGreeting = document.getElementById('studentBannerName');
    if (bannerGreeting) bannerGreeting.innerText = displayName;

    const bannerAvatar = document.getElementById('studentBannerAvatar');
    if (bannerAvatar) bannerAvatar.innerText = this.student.avatar;

    // Update Last Lesson Title on Resume Banner
    const lastLesson = getLessonById(this.currentLessonId);
    const resumeBtnText = document.getElementById('resumeLastLessonName');
    if (resumeBtnText && lastLesson) {
      const lessonTitle = isEn ? (lastLesson.lesson.titleEn || lastLesson.lesson.titleAr) : lastLesson.lesson.titleAr;
      resumeBtnText.innerText = `${lastLesson.lesson.number} ${lessonTitle}`;
    }
  }

  // --- VIEW SWITCHING ---
  switchView(viewName, params = {}) {
    this.currentView = viewName;

    // Hide all views
    document.querySelectorAll('.app-view').forEach(el => {
      el.classList.remove('active-view');
      el.style.display = 'none';
    });

    // Update Nav buttons active state
    document.querySelectorAll('.nav-link-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-view') === viewName) {
        btn.classList.add('active');
      }
    });

    // Show target view
    const targetEl = document.getElementById(`${viewName}View`);
    if (targetEl) {
      targetEl.classList.add('active-view');
      targetEl.style.display = 'block';
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Handle view-specific initializations
    if (viewName === 'lesson') {
      if (params.lessonId) {
        this.loadLesson(params.lessonId);
      } else {
        this.loadLesson(this.currentLessonId);
      }
    } else if (viewName === 'home') {
      this.updateStudentUI();
      this.renderHomeCourses();
    }
  }

  // --- PROGRESS TRACKING ---
  loadCompletedLessons() {
    try {
      const raw = localStorage.getItem('basharsec_completed_lessons');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  saveCompletedLessons() {
    localStorage.setItem('basharsec_completed_lessons', JSON.stringify(this.completedLessons));
    this.updateProgressUI();
    this.renderSidebarCurriculum();
    this.renderHomeCourses();
  }

  markLessonComplete(lessonId) {
    if (!this.completedLessons.includes(lessonId)) {
      this.completedLessons.push(lessonId);
      this.saveCompletedLessons();
      const isEn = typeof i18n !== 'undefined' && i18n.currentLang === 'en';
      this.showToast(isEn ? 'Congratulations! Lesson completed and progress saved ✓' : 'تهانينا! تم إكمال الدرس وحفظ تقدمك بنجاح ✓', 'success');

      const badge = document.getElementById('lessonCompletedStatus');
      if (badge) badge.style.display = 'inline-flex';

      const completeBtn = document.getElementById('btnMarkCompleteSeq');
      if (completeBtn) {
        completeBtn.classList.add('completed');
        completeBtn.innerHTML = isEn ? '✓ Completed' : '✓ تم إكمال هذا الدرس';
      }
    }
  }

  updateProgressUI() {
    const all = getAllLessons();
    const total = all.length;
    const completed = this.completedLessons.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    // Header Widget
    const bar = document.getElementById('overallProgressBar');
    if (bar) bar.style.width = percentage + '%';

    const percentText = document.getElementById('progressPercentage');
    if (percentText) percentText.innerText = percentage + '%';

    // Banner Bar
    const bannerBar = document.getElementById('bannerProgressBar');
    if (bannerBar) bannerBar.style.width = percentage + '%';

    const bannerPercent = document.getElementById('bannerProgressPercent');
    if (bannerPercent) bannerPercent.innerText = percentage + '%';

    // Readiness Badge
    const isEn = typeof i18n !== 'undefined' && i18n.currentLang === 'en';
    const tierBadge = document.getElementById('tierReadinessBadge');
    if (tierBadge) {
      if (percentage < 35) {
        tierBadge.innerText = isEn ? 'Cadet in Training' : 'مبتدئ (Cadet)';
        tierBadge.className = 'tier-badge cadet';
      } else if (percentage < 80) {
        tierBadge.innerText = isEn ? 'Certified SOC Tier 1' : 'محلل Tier 1 جاهز';
        tierBadge.className = 'tier-badge tier1';
      } else {
        tierBadge.innerText = isEn ? 'Senior SOC Tier 2' : 'خبير Tier 2 معتمد';
        tierBadge.className = 'tier-badge tier2';
      }
    }
  }

  // --- HOME VIEW: 12 COURSES CATALOG ---
  setLevelFilter(level) {
    this.currentLevelFilter = level;
    document.querySelectorAll('.level-filter-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-level') === level) {
        btn.classList.add('active');
      }
    });
    this.renderHomeCourses();
  }

  renderHomeCourses() {
    const container = document.getElementById('coursesCatalogGrid');
    if (!container) return;

    const isEn = typeof i18n !== 'undefined' && i18n.currentLang === 'en';

    const filtered = this.currentLevelFilter === 'all'
      ? allCourses
      : allCourses.filter(c => c.level === this.currentLevelFilter);

    let html = '';
    filtered.forEach(c => {
      const completedInCourse = c.lessons.filter(l => this.completedLessons.includes(l.id)).length;
      const coursePercent = Math.round((completedInCourse / c.lessons.length) * 100);

      const title = isEn ? (c.titleEn || c.titleAr) : c.titleAr;
      const summary = isEn ? (c.summaryEn || c.summaryAr) : c.summaryAr;
      const levelLabel = isEn 
        ? (c.level === 'beginner' ? '🟢 Beginner' : (c.level === 'intermediate' ? '🔵 Intermediate' : '🟣 Advanced'))
        : (c.level === 'beginner' ? '🟢 مبتدئ' : (c.level === 'intermediate' ? '🔵 متوسط' : '🟣 متقدم'));
      const courseNumLabel = isEn ? `Course ${c.courseNumber}` : `كورس ${c.courseNumber}`;
      const lessonsCountLabel = isEn ? `📚 ${c.lessons.length} lessons` : `📚 ${c.lessons.length} دروس`;
      const badge = isEn ? (c.badgeEn || c.badgeAr) : c.badgeAr;
      const progressLabel = isEn ? 'Progress' : 'نسبة الإنجاز';
      const btnText = completedInCourse > 0 
        ? (isEn ? '▶️ Continue Course' : '▶️ متابعة الكورس')
        : (isEn ? '🚀 Start Course' : '🚀 ابدأ دراسة الكورس');

      html += `
        <div class="course-card-item">
          <div class="course-card-top">
            <div class="course-badge-row">
              <span class="course-level-pill ${c.level}">
                ${levelLabel}
              </span>
              <span style="font-size: 0.82rem; color: var(--text-dim); font-weight: 700;">${courseNumLabel}</span>
            </div>
            <div class="course-icon-badge">${c.icon}</div>
            <h3 class="course-card-title">${title}</h3>
            <p class="course-card-desc">${summary}</p>
          </div>

          <div class="course-card-bottom">
            <div class="course-meta-tags">
              <span>${lessonsCountLabel}</span>
              <span>⏱ ${c.duration}</span>
              <span>🎓 ${badge}</span>
            </div>

            <div class="course-progress-block">
              <div class="course-progress-labels">
                <span>${progressLabel}</span>
                <span>${coursePercent}% (${completedInCourse}/${c.lessons.length})</span>
              </div>
              <div class="course-progress-track">
                <div class="course-progress-fill" style="width: ${coursePercent}%;"></div>
              </div>
            </div>

            <button class="course-card-btn" onclick="app.startCourse('${c.id}')">
              ${btnText}
            </button>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  startCourse(courseId) {
    const course = getCourseById(courseId);
    if (!course || !course.lessons.length) return;

    // Find first uncompleted lesson in course, or first lesson
    const nextUncompleted = course.lessons.find(l => !this.completedLessons.includes(l.id));
    const targetLessonId = nextUncompleted ? nextUncompleted.id : course.lessons[0].id;
    this.switchView('lesson', { lessonId: targetLessonId });
  }

  resumeLearning() {
    this.switchView('lesson', { lessonId: this.currentLessonId });
  }

  // --- SIDEBAR CURRICULUM ACCORDION (12 COURSES) ---
  renderSidebarCurriculum() {
    const container = document.getElementById('modulesSidebarList');
    if (!container) return;

    const isEn = typeof i18n !== 'undefined' && i18n.currentLang === 'en';

    let html = '';
    allCourses.forEach(c => {
      const isExpanded = c.id === this.currentCourseId;
      const completedCount = c.lessons.filter(l => this.completedLessons.includes(l.id)).length;
      const cPercent = Math.round((completedCount / c.lessons.length) * 100);

      const courseTitle = isEn ? (c.titleEn || c.titleAr) : c.titleAr;
      const completedLabel = isEn ? 'completed' : 'مكتمل';

      html += `
        <div class="module-group ${isExpanded ? 'active' : ''}" data-mod-id="${c.id}">
          <button class="module-group-header" onclick="app.toggleCourseAccordion('${c.id}')">
            <div class="mod-icon-title">
              <span class="mod-num">${c.icon}</span>
              <div class="mod-text">
                <span class="mod-title">${c.courseNumber}. ${courseTitle}</span>
                <span class="mod-badge-mini" style="color: ${c.levelBadgeColor};">${cPercent}% ${completedLabel}</span>
              </div>
            </div>
            <span class="mod-chevron">${isExpanded ? '▾' : '▸'}</span>
          </button>
          <div class="module-lessons-list" style="display: ${isExpanded ? 'block' : 'none'};">
      `;

      c.lessons.forEach(l => {
        const isCurrent = l.id === this.currentLessonId;
        const isDone = this.completedLessons.includes(l.id);
        const lessonTitle = isEn ? (l.titleEn || l.titleAr) : l.titleAr;

        html += `
          <button class="lesson-nav-btn ${isCurrent ? 'active' : ''} ${isDone ? 'done' : ''}" onclick="app.loadLesson('${l.id}')">
            <span class="lesson-state-icon">${isDone ? '✓' : '○'}</span>
            <span class="lesson-title-text">${l.number} ${lessonTitle}</span>
            <span class="lesson-duration">${l.duration}</span>
          </button>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  toggleCourseAccordion(courseId) {
    this.currentCourseId = this.currentCourseId === courseId ? null : courseId;
    this.renderSidebarCurriculum();
  }

  // --- SINGLE-FLOW LESSON READER ---
  loadLesson(lessonId) {
    const lookup = getLessonById(lessonId);
    if (!lookup) return;

    this.currentLessonId = lessonId;
    this.currentCourseId = lookup.course.id;
    localStorage.setItem('basharsec_last_lesson_id', lessonId);

    // Switch view to lesson if not already there
    if (this.currentView !== 'lesson') {
      this.switchView('lesson', { lessonId: lessonId });
      return;
    }

    this.renderSidebarCurriculum();
    this.renderCurrentLesson();
    this.updateStudentUI();

    // Scroll lesson to top
    const mainContent = document.getElementById('mainContentArea');
    if (mainContent) mainContent.scrollTop = 0;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Auto-close mobile drawer
    const sidebar = document.getElementById('sidebar');
    if (sidebar && sidebar.classList.contains('mobile-open')) {
      sidebar.classList.remove('mobile-open');
    }
  }

  renderCurrentLesson() {
    const lookup = getLessonById(this.currentLessonId);
    if (!lookup) return;
    const isEn = typeof i18n !== 'undefined' && i18n.currentLang === 'en';
    const { lesson, course } = lookup;
    const isDone = this.completedLessons.includes(lesson.id);

    const courseTitle = isEn ? (course.titleEn || course.titleAr) : course.titleAr;
    const lessonTitle = isEn ? (lesson.titleEn || lesson.titleAr) : lesson.titleAr;
    const homeLabel = isEn ? 'Home' : 'الرئيسية';
    const lessonLabel = isEn ? `Lesson ${lesson.number}` : `الدرس ${lesson.number}`;

    // Breadcrumbs
    const breadcrumbEl = document.getElementById('activeStageBreadcrumb');
    if (breadcrumbEl) {
      breadcrumbEl.innerHTML = `
        <span onclick="app.switchView('home')" style="cursor: pointer; color: var(--accent-cyan);">${homeLabel}</span> &gt;
        <span onclick="app.startCourse('${course.id}')" style="cursor: pointer; color: var(--accent-cyan);">${courseTitle}</span> &gt;
        <span>${lessonLabel}</span>
      `;
    }

    // Title & Meta
    const titleEl = document.getElementById('activeLessonTitle');
    if (titleEl) titleEl.innerText = `${lesson.number} ${lessonTitle}`;

    const durationEl = document.getElementById('activeLessonDuration');
    if (durationEl) durationEl.innerText = `⏱ ${lesson.duration}`;

    const statusBadge = document.getElementById('lessonCompletedStatus');
    if (statusBadge) {
      statusBadge.style.display = isDone ? 'inline-flex' : 'none';
      statusBadge.innerText = isEn ? 'Lesson Completed Successfully ✓' : 'تم إكمال هذا الدرس بنجاح ✓';
    }

    // Single Flow Content Container
    const singleFlowContainer = document.getElementById('singleFlowLessonContainer');
    if (!singleFlowContainer) return;

    // Construct Quiz HTML
    let quizHtml = '';
    if (lesson.quiz) {
      const q = lesson.quiz;
      let optsHtml = '';
      const optionsList = isEn && q.optionsEn && q.optionsEn.length ? q.optionsEn : q.optionsAr;
      const questionText = isEn && q.questionEn ? q.questionEn : q.questionAr;
      const quizHeader = isEn ? '🎯 Knowledge Check Quiz' : '🎯 اختبار فهم الدرس (Lesson Quiz)';
      const verifyBtnText = isEn ? 'Verify Answer' : 'تأكيد الإجابة والتحقق';

      optionsList.forEach((opt, idx) => {
        optsHtml += `
          <label class="quiz-option-item" id="quiz-opt-${idx}">
            <input type="radio" name="lesson-quiz-answer" value="${idx}">
            <span>${opt}</span>
          </label>
        `;
      });

      quizHtml = `
        <div class="lesson-quiz-box">
          <div class="quiz-header-badge">${quizHeader}</div>
          <h4 class="quiz-question-title">${questionText}</h4>
          <div class="quiz-options-group">
            ${optsHtml}
          </div>
          <div class="quiz-actions-bar">
            <button class="btn-primary-glow" onclick="app.verifyQuizAnswer('${lesson.id}', ${q.correctIndex})">
              ${verifyBtnText}
            </button>
          </div>
          <div id="quizFeedbackBox" class="ticket-feedback-box" style="display:none; margin-top: 1.25rem;"></div>
        </div>
      `;
    }

    // Combine Theory + Lab Simulator + Quiz in ONE SINGLE FLOW
    singleFlowContainer.innerHTML = `
      <!-- 1. Theory & Deep Foundations -->
      <article class="theory-article-flow">
        ${(isEn && lesson.theoryEn) ? lesson.theoryEn : lesson.theoryAr}
      </article>

      <!-- 2. Immediate Hands-On Lab Simulator -->
      ${lesson.labAr ? lesson.labAr : ''}

      <!-- 3. Immediate Lesson Quiz -->
      ${quizHtml}
    `;

    // Update Sequential Navigation Buttons (⬅️ السابق | أتممت | التالي ➡️)
    this.updateSequentialNav();
  }

  verifyQuizAnswer(lessonId, correctIdx) {
    const selected = document.querySelector('input[name="lesson-quiz-answer"]:checked');
    const box = document.getElementById('quizFeedbackBox');
    const isEn = typeof i18n !== 'undefined' && i18n.currentLang === 'en';

    if (!selected) {
      alert(isEn ? 'Please select an option from above first!' : 'يرجى اختيار إجابة من الخيارات أعلاه أولاً!');
      return;
    }

    const choice = parseInt(selected.value);
    const lookup = getLessonById(lessonId);
    if (!lookup || !box) return;
    const q = lookup.lesson.quiz;
    const explanation = isEn && q.explanationEn ? q.explanationEn : q.explanationAr;

    box.style.display = 'block';

    if (choice === correctIdx) {
      box.className = 'ticket-feedback-box correct';
      box.innerHTML = `
        <div class="feedback-title">${isEn ? '🎉 Correct! Outstanding, accurate analysis.' : '🎉 إجابة صحيحة وممتازة!'}</div>
        <p>${explanation}</p>
      `;
      this.markLessonComplete(lessonId);
    } else {
      box.className = 'ticket-feedback-box incorrect';
      box.innerHTML = `
        <div class="feedback-title">${isEn ? '⚠️ Inaccurate answer!' : '⚠️ إجابة غير دقيقة!'}</div>
        <p>${explanation}</p>
      `;
    }

    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  updateSequentialNav() {
    const isEn = typeof i18n !== 'undefined' && i18n.currentLang === 'en';
    const prev = getPrevLesson(this.currentLessonId);
    const next = getNextLesson(this.currentLessonId);
    const isDone = this.completedLessons.includes(this.currentLessonId);

    const prevBtn = document.getElementById('btnQuickPrev');
    const nextBtn = document.getElementById('btnQuickNext');
    const completeBtn = document.getElementById('btnMarkCompleteSeq');

    if (prevBtn) {
      prevBtn.disabled = !prev;
      prevBtn.innerHTML = isEn ? '← Previous Lesson' : '← الدرس السابق';
      prevBtn.onclick = () => prev && this.loadLesson(prev.id);
    }
    if (nextBtn) {
      nextBtn.disabled = !next;
      nextBtn.innerHTML = isEn ? 'Next Lesson →' : 'الدرس التالي →';
      nextBtn.onclick = () => next && this.loadLesson(next.id);
    }
    if (completeBtn) {
      if (isDone) {
        completeBtn.className = 'btn-seq-nav complete completed';
        completeBtn.innerHTML = isEn ? '✓ Completed' : '✓ تم إكمال هذا الدرس بنجاح';
      } else {
        completeBtn.className = 'btn-seq-nav complete';
        completeBtn.innerHTML = isEn ? '✅ Mark Complete' : '✅ أتممت هذا الدرس';
      }
      completeBtn.onclick = () => this.markLessonComplete(this.currentLessonId);
    }
  }

  // --- VIEW 3: SOC TOOLS ENCYCLOPEDIA ---
  setToolCategoryFilter(cat) {
    this.currentToolCategory = cat;
    document.querySelectorAll('.tool-cat-btn').forEach(b => {
      b.classList.remove('active');
      if (b.getAttribute('data-cat') === cat) b.classList.add('active');
    });
    this.renderToolsEncyclopedia();
  }

  renderToolsEncyclopedia(searchQuery = '') {
    const container = document.getElementById('toolsEncyclopediaList');
    if (!container) return;

    const isEn = typeof i18n !== 'undefined' && i18n.currentLang === 'en';
    const q = searchQuery.trim().toLowerCase();

    const filtered = socToolsData.filter(t => {
      const matchCat = this.currentToolCategory === 'all' || t.category === this.currentToolCategory;
      const matchSearch = !q ||
        t.name.toLowerCase().includes(q) ||
        t.summaryAr.toLowerCase().includes(q) ||
        (t.summaryEn && t.summaryEn.toLowerCase().includes(q)) ||
        t.commands.some(c => c.cmd.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q) || (c.descEn && c.descEn.toLowerCase().includes(q)));
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
          ${isEn ? `No tools or commands matching: "${searchQuery}"` : `لم يتم العثور على أدوات أو أوامر تطابق: "${searchQuery}"`}
        </div>
      `;
      return;
    }

    let html = '';
    filtered.forEach(t => {
      let cmdRows = '';
      t.commands.forEach(c => {
        const safeCmd = c.cmd.replace(/'/g, "\\'");
        const cmdDesc = (isEn && c.descEn) ? c.descEn : c.desc;
        cmdRows += `
          <tr>
            <td style="width: 45%;">
              <span class="cmd-code-pill">${this.escapeHtml(c.cmd)}</span>
            </td>
            <td>${cmdDesc}</td>
            <td style="text-align: center; width: 100px;">
              <button class="btn-copy-fast" onclick="app.copyToClipboard('${safeCmd}')">📋 ${isEn ? 'Copy' : 'نسخ'}</button>
            </td>
          </tr>
        `;
      });

      const summaryText = (isEn && t.summaryEn) ? t.summaryEn : t.summaryAr;
      const howWeUseText = (isEn && t.howWeUseItEn) ? t.howWeUseItEn : t.howWeUseItAr;
      const categoryTag = isEn ? t.category : `${t.categoryAr} (${t.category})`;

      html += `
        <div class="tool-detail-card" id="${t.id}">
          <div class="tool-header-block">
            <div class="tool-big-icon">${t.icon}</div>
            <div class="tool-name-titles">
              <h3>${t.name}</h3>
              <span class="tool-cat-tag">📂 ${categoryTag}</span>
            </div>
          </div>
          <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-main); margin-bottom: 1rem;">
            ${summaryText}
          </p>
          <div class="tool-how-we-use-it">
            <strong>🎯 ${isEn ? 'How We Use It in the SOC:' : 'كيف نستخدمها في الـ SOC:'}</strong> ${howWeUseText}
          </div>
          <div class="table-responsive">
            <table class="tool-commands-table">
              <thead>
                <tr>
                  <th>${isEn ? 'Command / Operational Filter' : 'الأمر / الفلتر الميداني'}</th>
                  <th>${isEn ? 'Description & Security Purpose' : 'شرح الاستخدام والغرض الأمني'}</th>
                  <th>${isEn ? 'Quick Copy' : 'نسخ سريع'}</th>
                </tr>
              </thead>
              <tbody>
                ${cmdRows}
              </tbody>
            </table>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  // --- VIEW 4: INTERACTIVE ROADMAP ---
  renderRoadmap() {
    const timelineContainer = document.getElementById('roadmapTimelineList');
    const certsContainer = document.getElementById('roadmapCertsGrid');
    const isEn = typeof i18n !== 'undefined' && i18n.currentLang === 'en';

    if (timelineContainer && socRoadmapData.stages) {
      let tHtml = '';
      socRoadmapData.stages.forEach(s => {
        let topicsHtml = '';
        const topicsList = (isEn && s.topicsEn && s.topicsEn.length) ? s.topicsEn : s.topicsAr;
        topicsList.forEach(top => {
          topicsHtml += `<li>${top}</li>`;
        });

        const stageTitle = isEn ? (s.titleEn || s.titleAr) : s.titleAr;
        const stageBadge = isEn ? `Stage ${s.step}` : s.badge;
        const stageDuration = isEn && s.durationEn ? s.durationEn : s.duration;
        const stageCert = (isEn && s.recommendedCertEn) ? s.recommendedCertEn : s.recommendedCertAr;
        const stageMilestone = (isEn && s.milestoneEn) ? s.milestoneEn : s.milestoneAr;

        tHtml += `
          <div class="roadmap-step-card">
            <div class="roadmap-step-node">${s.step}</div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap;">
              <span class="course-level-pill" style="color: ${s.badgeColor}; border: 1px solid ${s.badgeColor}; background: transparent;">
                ${stageBadge}
              </span>
              <span style="font-size: 0.85rem; color: var(--text-dim); font-weight: 700;">⏱ ${stageDuration}</span>
            </div>
            <h3>${stageTitle}</h3>
            <ul class="roadmap-topics-list">
              ${topicsHtml}
            </ul>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
              <div class="roadmap-cert-callout">
                <span>🎓 ${isEn ? 'Recommended Certification:' : 'الشهادة المقترحة:'}</span>
                <strong style="color: var(--accent-cyan);">${stageCert}</strong>
              </div>
              <div class="roadmap-cert-callout" style="background: rgba(16, 185, 129, 0.08);">
                <span>🎯 ${isEn ? 'Stage Milestone:' : 'هدف المحطة:'}</span>
                <span style="color: var(--accent-green);">${stageMilestone}</span>
              </div>
            </div>
          </div>
        `;
      });
      timelineContainer.innerHTML = tHtml;
    }

    if (certsContainer && socRoadmapData.certifications) {
      let cHtml = '';
      socRoadmapData.certifications.forEach(c => {
        const issuerLabel = isEn ? 'Issuer:' : 'المصدر:';
        const levelText = isEn && c.levelEn ? c.levelEn : c.level;
        const importanceText = isEn && c.importanceEn ? c.importanceEn : c.importanceAr;
        const scopeLabel = isEn ? 'Exam Scope:' : 'نطاق الاختبار:';
        const focusText = isEn && c.focusEn ? c.focusEn : c.focus;
        const styleText = isEn && c.styleEn ? c.styleEn : c.style;
        cHtml += `
          <div class="cert-card-item">
            <div class="cert-code-badge">${c.code}</div>
            <h4 class="cert-full-title">${c.name}</h4>
            <div class="cert-meta-row">
              <span>${issuerLabel} ${c.issuer}</span>
              <span style="color: ${c.levelBadgeColor};">${levelText}</span>
              <span>${c.cost}</span>
            </div>
            <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 0.75rem;">
              ${importanceText}
            </p>
            <div style="font-size: 0.85rem; color: var(--text-dim);">
              <strong>${scopeLabel}</strong> ${focusText} (${styleText})
            </div>
          </div>
        `;
      });
      certsContainer.innerHTML = cHtml;
    }
  }

  // --- UTILS & HELPERS ---
  copyToClipboard(text) {
    const isEn = typeof i18n !== 'undefined' && i18n.currentLang === 'en';
    const msg = isEn ? 'Command copied to clipboard 📋' : 'تم نسخ الأمر إلى الحافظة بنجاح 📋';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast(msg, 'info');
      }).catch(() => {
        this.fallbackCopy(text);
      });
    } else {
      this.fallbackCopy(text);
    }
  }

  fallbackCopy(text) {
    const isEn = typeof i18n !== 'undefined' && i18n.currentLang === 'en';
    const msg = isEn ? 'Command copied to clipboard 📋' : 'تم نسخ الأمر إلى الحافظة بنجاح 📋';
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.showToast(msg, 'info');
  }

  escapeHtml(string) {
    return String(string)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('open');
      modal.style.display = 'flex';
    }
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('open');
      modal.style.display = 'none';
    }
  }

  showToast(message, type = 'info') {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-item toast-${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const main = document.getElementById('mainContentArea');
    if (main) main.scrollTop = 0;
  }

  bindEvents() {
    // Mobile Hamburger
    const menuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    if (menuBtn && sidebar) {
      menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('mobile-open');
      });
    }

    const overlay = document.getElementById('sidebarOverlay');
    if (overlay && sidebar) {
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
      });
    }

    // Escape closes modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.open').forEach(m => {
          m.classList.remove('open');
          m.style.display = 'none';
        });
      }
    });
  }
}

// Global App Instance
const app = new BasharSecApp();
if (typeof window !== 'undefined') window.app = app;

// Boot application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  if (typeof i18n !== 'undefined') i18n.init();
  app.init();
});
