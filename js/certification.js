// BCSA Certification & Comprehensive 35-Scenario Examination Engine
// Official Exam & Dynamic Printable Certificate Controller (Bilingual: Arabic & English)
// BasharSec Academy - Master Certification System

class CertificationHubController {
  constructor() {
    this.examEngine = typeof finalExamEngine !== 'undefined' ? finalExamEngine : null;
    this.currentView = 'overview'; // 'overview', 'exam', 'certificate'
    this.serialNumber = 'BCSA-2026-BH-' + (Math.floor(100000 + Math.random() * 900000));
    this.certLang = typeof i18n !== 'undefined' ? i18n.currentLang : 'ar';
  }

  init() {
    this.render();
  }

  render() {
    const container = document.getElementById('certificationHubBody');
    if (!container) return;

    if (this.currentView === 'overview') {
      this.renderOverview(container);
    } else if (this.currentView === 'exam') {
      this.renderExam(container);
    } else if (this.currentView === 'certificate') {
      this.renderCertificate(container);
    }
  }

  switchView(view) {
    this.currentView = view;
    this.render();
  }

  // --- OVERVIEW VIEW ---
  renderOverview(container) {
    const isEn = typeof i18n !== 'undefined' && i18n.currentLang === 'en';
    const totalLessons = typeof getAllLessons === 'function' ? getAllLessons().length : 62;
    const completedCount = (window.app && window.app.completedLessons) ? window.app.completedLessons.length : 0;
    const lessonPercent = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

    const examPassed = localStorage.getItem('basharsec_exam_passed') === 'true';
    const examScore = localStorage.getItem('basharsec_exam_score') || '0';
    const studentName = (window.app && window.app.student) ? window.app.student.name : (isEn ? 'Cybersecurity Student' : 'طالب الأكاديمية');
    const studentAvatar = (window.app && window.app.student) ? window.app.student.avatar : '🛡️';

    container.innerHTML = `
      <div class="cert-hub-container">
        <!-- Candidate Profile Header -->
        <div class="cert-candidate-card" style="background: var(--bg-card); border: 1px solid var(--border-card); border-radius: var(--radius-card); padding: 1.75rem; display: flex; align-items: center; gap: 1.5rem; margin-bottom: 2rem;">
          <div class="cert-candidate-avatar" style="font-size: 2.2rem; display: flex; align-items: center; justify-content: center; background: var(--brand-gradient); border-radius: 50%; width: 64px; height: 64px; flex-shrink: 0; box-shadow: var(--glow-cyan);">
            ${studentAvatar}
          </div>
          <div class="cert-candidate-info" style="flex: 1;">
            <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap: 0.5rem;">
              <h2 style="font-size: 1.5rem; font-weight: 900; color: var(--text-main); margin: 0;">${studentName}</h2>
              <button class="btn-secondary" style="padding: 4px 12px; font-size: 0.82rem;" onclick="app.closeModal('certificationModal'); openStudentAuthModal();">
                ✏️ ${isEn ? 'Edit Candidate Profile' : 'تعديل الاسم والبيانات'}
              </button>
            </div>
            <div class="cert-target-badge" style="display: inline-block; background: rgba(14, 165, 233, 0.12); color: var(--accent-cyan); font-weight: 800; font-size: 0.88rem; padding: 4px 12px; border-radius: var(--radius-full); margin: 0.5rem 0;">
              🎯 ${isEn ? 'Target Credential: Certified SOC Analyst - Tier 1 & Tier 2 (BCSA)' : 'الشهادة المستهدفة: محلل أمن سيبراني ومراكز عمليات أمنية معتمد (BCSA - Tier 1 & Tier 2)'}
            </div>
            <p style="color: var(--text-muted); font-size: 0.95rem; margin: 0; line-height: 1.6;">
              ${examPassed 
                ? (isEn 
                    ? '🎉 Congratulations! You have met the official accreditation requirements and passed the comprehensive exam. Your official graduation certificate is ready for download and printing in your name.' 
                    : '🎉 مبروك! لقد استوفيت متطلبات الاعتماد الرسمي بنجاح واجتزت الامتحان الشامل، وثيقة التخرج الرسمية جاهزة باسمك للطباعة والتحميل.')
                : (isEn 
                    ? 'The comprehensive final exam is immediately accessible. Pass all 35 scenarios with 70%+ to unlock your official graduation certificate.' 
                    : 'الامتحان النهائي الشامل متاح للتقديم الفوري؛ اجتز الـ 35 سؤالاً بنسبة 70% فأعلى لتفعيل وثيقة التخرج الرسمية فوراً باسمك.')
              }
            </p>
          </div>
        </div>

        <!-- Requirements Status Grid -->
        <div class="cert-reqs-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-bottom: 2.5rem;">
          <!-- Card 1: Curriculum Progress -->
          <div class="cert-req-card ${lessonPercent >= 70 ? 'completed' : 'in-progress'}" style="background: var(--bg-card); border: 1px solid var(--border-card); border-radius: var(--radius-card); padding: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
              <span style="font-size: 1.8rem;">📚</span>
              <span class="badge-pill" style="background: rgba(79, 70, 229, 0.15); color: var(--accent-cyan); font-weight: 800;">${lessonPercent}% ${isEn ? 'completed' : 'منجز'}</span>
            </div>
            <h4 style="font-size: 1.15rem; color: var(--text-main); margin-bottom: 0.5rem;">
              ${isEn ? '1. Curriculum Lessons' : '1. مسار الدروس التفصيلية'}
            </h4>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">
              ${isEn ? `Completed ${completedCount} of ${totalLessons} in-depth lessons across 3 tiers.` : `إنجاز ${completedCount} من أصل ${totalLessons} درساً تفصيلياً في المستويات الثلاثة.`}
            </p>
            <div class="cert-mini-bar" style="height: 6px; background: var(--bg-tertiary); border-radius: 99px; overflow: hidden;">
              <div class="cert-mini-fill" style="width: ${lessonPercent}%; height: 100%; background: var(--brand-gradient);"></div>
            </div>
          </div>

          <!-- Card 2: 35-Question Final Exam -->
          <div class="cert-req-card ${examPassed ? 'completed' : 'in-progress'}" style="background: var(--bg-card); border: 1px solid var(--border-card); border-radius: var(--radius-card); padding: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
              <span style="font-size: 1.8rem;">📝</span>
              <span class="badge-pill" style="background: ${examPassed ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)'}; color: ${examPassed ? 'var(--accent-green)' : 'var(--accent-amber)'}; font-weight: 800;">
                ${examPassed ? (isEn ? `Passed with ${examScore}%` : `ناجح بمعدل ${examScore}%`) : (isEn ? 'Ready to Start' : 'جاهز للتقديم')}
              </span>
            </div>
            <h4 style="font-size: 1.15rem; color: var(--text-main); margin-bottom: 0.5rem;">
              ${isEn ? '2. Comprehensive Final Exam (35 Scenarios)' : '2. الامتحان النهائي الشامل (35 سيناريو)'}
            </h4>
            <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">
              ${isEn ? '35 real-world scenarios covering logs, networking, Active Directory, and alert triage (70% passing threshold).' : '35 سؤالاً عملياً وسيناريو ميدانياً تغطي السجلات والشبكات والدليل النشط وفرز التنبيهات (درجة النجاح 70%).'}
            </p>
            <div style="font-size: 0.82rem; color: var(--accent-cyan); font-weight: 700;">
              ${isEn ? 'Duration: 45 Minutes | Instant Grading' : 'مدة الامتحان: 45 دقيقة | تصحيح فوري'}
            </div>
          </div>
        </div>

        <!-- Action Buttons (Accessible immediately!) -->
        <div style="display: flex; justify-content: center; gap: 1.25rem; flex-wrap: wrap;">
          <button class="btn-primary-glow btn-large" style="padding: 14px 32px; font-size: 1.1rem;" onclick="certHubApp.startExam()">
            🚀 ${isEn ? 'Start Final Exam Now (35 Questions)' : 'بدء الامتحان النهائي الشامل الآن (35 سؤالاً)'}
          </button>
          ${examPassed ? `
            <button class="btn-success-glow btn-large" style="padding: 14px 32px; font-size: 1.1rem;" onclick="certHubApp.switchView('certificate')">
              📜 ${isEn ? 'View & Print Official Certificate' : 'عرض وطباعة شهادة التخرج الرسمية'}
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }

  // --- EXAM VIEW ---
  startExam() {
    this.examEngine.reset();
    this.currentView = 'exam';
    this.render();

    this.examEngine.startTimer(
      (formattedTime) => {
        const timerEl = document.getElementById('examCountdownTimer');
        if (timerEl) timerEl.innerText = formattedTime;
      },
      () => {
        const isEn = typeof i18n !== 'undefined' && i18n.currentLang === 'en';
        alert(isEn ? "Time is up! Submitting exam for grading..." : "انتهى وقت الامتحان! سيتم الآن تسليم وتصحيح الإجابات تلقائياً.");
        this.submitExam();
      }
    );
  }

  renderExam(container) {
    const isEn = typeof i18n !== 'undefined' && i18n.currentLang === 'en';
    const qIndex = this.examEngine.currentQuestionIdx;
    const currentQ = this.examEngine.questions[qIndex];
    const totalQ = this.examEngine.questions.length;
    const selectedAnswer = this.examEngine.userAnswers[currentQ.id];

    const domainText = isEn ? (currentQ.domainEn || currentQ.domain) : currentQ.domain;
    const scenarioText = isEn ? (currentQ.scenarioEn || currentQ.scenario) : currentQ.scenario;
    const questionText = isEn ? (currentQ.questionEn || currentQ.question) : currentQ.question;
    const optionsList = isEn && currentQ.optionsEn && currentQ.optionsEn.length ? currentQ.optionsEn : currentQ.options;

    // Build question options list
    let optsHtml = '';
    optionsList.forEach((optText, optIdx) => {
      const isSelected = selectedAnswer === optIdx;
      optsHtml += `
        <label class="exam-option-label ${isSelected ? 'selected' : ''}" style="display: flex; align-items: center; gap: 0.85rem; background: ${isSelected ? 'rgba(6, 182, 212, 0.12)' : 'var(--bg-card)'}; border: 1px solid ${isSelected ? 'var(--accent-cyan)' : 'var(--border-card)'}; padding: 1rem 1.25rem; border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">
          <input type="radio" name="exam-q-${currentQ.id}" value="${optIdx}" ${isSelected ? 'checked' : ''} onchange="certHubApp.selectAnswer(${currentQ.id}, ${optIdx})" style="width: 18px; height: 18px; accent-color: var(--accent-cyan);">
          <span style="font-size: 1rem; color: var(--text-main); line-height: 1.6;">${optText}</span>
        </label>
      `;
    });

    // Build Question Palette (1 to 35 navigation pills)
    let paletteHtml = '';
    this.examEngine.questions.forEach((q, idx) => {
      const isAnswered = this.examEngine.userAnswers[q.id] !== undefined;
      const isCurrent = idx === qIndex;
      paletteHtml += `
        <button class="exam-palette-pill" 
                style="width: 32px; height: 32px; border-radius: 8px; border: 1px solid ${isCurrent ? 'var(--accent-cyan)' : (isAnswered ? 'var(--accent-green)' : 'var(--border-card)')}; background: ${isCurrent ? 'var(--brand-gradient)' : (isAnswered ? 'rgba(16, 185, 129, 0.2)' : 'var(--bg-tertiary)')}; color: ${isCurrent ? '#ffffff' : (isAnswered ? 'var(--accent-green)' : 'var(--text-muted)')}; font-weight: 800; font-size: 0.82rem; cursor: pointer; transition: all 0.2s;"
                onclick="certHubApp.goToQuestion(${idx})" title="${isEn ? `Go to question ${idx + 1}` : `الانتقال للسؤال ${idx + 1}`}">
          ${idx + 1}
        </button>
      `;
    });

    container.innerHTML = `
      <div class="exam-active-shell" style="max-width: 900px; margin: 0 auto;">
        <!-- Top Bar: Timer & Progress -->
        <div class="exam-top-bar" style="display: flex; justify-content: space-between; align-items: center; background: var(--bg-card); border: 1px solid var(--border-card); border-radius: var(--radius-card); padding: 1rem 1.5rem; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="font-size: 1.1rem; font-weight: 900; color: var(--text-main);">
              ${isEn ? 'Question' : 'السؤال'} <span style="color: var(--accent-cyan); font-size: 1.3rem;">${qIndex + 1}</span> ${isEn ? 'of' : 'من'} ${totalQ}
            </span>
            <span class="badge-pill" style="background: rgba(79, 70, 229, 0.15); color: var(--accent-cyan); font-size: 0.82rem; padding: 4px 10px; border-radius: 99px;">
              📂 ${domainText}
            </span>
          </div>

          <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 1.15rem; font-weight: 800; color: var(--accent-amber);">
            <span>⏱ ${isEn ? 'Time Left:' : 'الوقت المتبقي:'}</span>
            <span id="examCountdownTimer" style="font-family: var(--font-mono); letter-spacing: 0.05em;">${this.examEngine.formatTime()}</span>
          </div>
        </div>

        <!-- Question Palette Pills -->
        <div class="exam-palette-row" style="display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; margin-bottom: 1.5rem;">
          ${paletteHtml}
        </div>

        <!-- Question Body Card -->
        <div class="exam-question-card" style="background: var(--bg-card); border: 1px solid var(--border-card); border-radius: var(--radius-card); padding: 2rem; box-shadow: var(--shadow-card); margin-bottom: 1.75rem;">
          <div style="font-size: 0.85rem; color: var(--accent-cyan); font-weight: 800; margin-bottom: 0.5rem;">
            🎯 ${isEn ? 'Topic: ' : 'موضوع السؤال: '}${currentQ.topic}
          </div>

          <!-- Scenario Box -->
          <div class="exam-scenario-box" style="background: var(--bg-tertiary); border-inline-start: 4px solid var(--accent-cyan); border-radius: var(--radius-sm); padding: 1.25rem; font-size: 1.05rem; line-height: 1.8; color: var(--text-main); margin-bottom: 1.5rem;">
            <strong>📋 ${isEn ? 'Field Scenario:' : 'السيناريو الميداني:'}</strong> ${scenarioText}
          </div>

          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main); margin-bottom: 1.5rem; line-height: 1.5;">
            ${questionText}
          </h3>

          <!-- Options -->
          <div class="exam-options-list" style="display: flex; flex-direction: column; gap: 0.85rem;">
            ${optsHtml}
          </div>
        </div>

        <!-- Bottom Controls Bar -->
        <div class="exam-nav-actions" style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;">
          <button class="btn-secondary" onclick="certHubApp.prevQuestion()" ${qIndex === 0 ? 'disabled' : ''}>
            ${isEn ? '← Previous Question' : '← السؤال السابق'}
          </button>

          <button class="btn-primary-glow" style="background: var(--brand-purple-gradient);" onclick="certHubApp.submitExam()">
            🏁 ${isEn ? 'Submit & Grade Exam' : 'إنهاء الامتحان وتصحيح الإجابات'}
          </button>

          <button class="btn-primary-glow" onclick="certHubApp.nextQuestion()" ${qIndex === totalQ - 1 ? 'disabled' : ''}>
            ${isEn ? 'Next Question →' : 'السؤال التالي →'}
          </button>
        </div>
      </div>
    `;
  }

  selectAnswer(questionId, optionIndex) {
    this.examEngine.recordAnswer(questionId, optionIndex);
    this.render();
  }

  goToQuestion(index) {
    if (index >= 0 && index < this.examEngine.questions.length) {
      this.examEngine.currentQuestionIdx = index;
      this.render();
    }
  }

  nextQuestion() {
    if (this.examEngine.currentQuestionIdx < this.examEngine.questions.length - 1) {
      this.examEngine.currentQuestionIdx++;
      this.render();
    }
  }

  prevQuestion() {
    if (this.examEngine.currentQuestionIdx > 0) {
      this.examEngine.currentQuestionIdx--;
      this.render();
    }
  }

  submitExam() {
    const isEn = typeof i18n !== 'undefined' && i18n.currentLang === 'en';
    const answeredCount = Object.keys(this.examEngine.userAnswers).length;
    const totalCount = this.examEngine.questions.length;

    if (answeredCount < totalCount) {
      const confirmPrompt = isEn 
        ? `You answered ${answeredCount} of ${totalCount} questions. Are you sure you want to finish and grade your exam now?`
        : `لقد أجبت عن ${answeredCount} سؤالاً فقط من أصل ${totalCount} سؤال. هل تريد تأكيد إنهاء الامتحان وتصحيح إجاباتك الآن؟`;
      const confirmSubmit = confirm(confirmPrompt);
      if (!confirmSubmit) return;
    }

    this.examEngine.stopTimer();
    const result = this.examEngine.calculateResult();

    // Save to localStorage
    if (result.passed) {
      localStorage.setItem('basharsec_exam_passed', 'true');
      localStorage.setItem('basharsec_exam_score', result.percentage.toString());
    }

    // Render Detailed Exam Score & Question-by-Question Review
    const container = document.getElementById('certificationHubBody');
    if (!container) return;

    let detailsHtml = '';
    result.details.forEach((d, idx) => {
      const domainLabel = isEn ? (d.domainEn || d.domain) : d.domain;
      const questionLabel = isEn ? (d.questionEn || d.question) : d.question;
      const explanationLabel = isEn ? (d.explanationEn || d.explanation) : d.explanation;

      detailsHtml += `
        <div class="exam-result-item ${d.isCorrect ? 'item-correct' : 'item-incorrect'}" style="background: var(--bg-card); border: 1px solid var(--border-card); border-inline-start: 5px solid ${d.isCorrect ? 'var(--accent-green)' : 'var(--accent-red)'}; border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap;">
            <span style="font-weight: 800; font-size: 1rem; color: var(--text-main);">
              ${d.isCorrect ? '✅' : '❌'} ${isEn ? 'Question' : 'السؤال'} ${idx + 1}: ${d.topic} (${domainLabel})
            </span>
            <span class="badge-pill" style="background: ${d.isCorrect ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)'}; color: ${d.isCorrect ? 'var(--accent-green)' : 'var(--accent-red)'}; font-weight: 800;">
              ${d.isCorrect ? (isEn ? 'Correct Answer' : 'إجابة صحيحة') : (isEn ? 'Incorrect Answer' : 'إجابة غير صحيحة')}
            </span>
          </div>
          <div style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 0.75rem;">
            <strong>${isEn ? 'Question:' : 'نص السؤال:'}</strong> ${questionLabel}
          </div>
          <div class="res-item-explanation" style="background: var(--bg-tertiary); padding: 0.85rem; border-radius: var(--radius-sm); font-size: 0.9rem; line-height: 1.7; color: var(--text-main);">
            <strong>💡 ${isEn ? 'Security Rationale:' : 'التعليل الأمني:'}</strong> ${explanationLabel}
          </div>
        </div>
      `;
    });

    const headline = result.passed
      ? (isEn ? 'Congratulations! You passed the comprehensive exam with honors' : 'تهانينا الحارة! لقد اجتزت الامتحان النهائي بنجاح وتفوق')
      : (isEn ? 'Unfortunately, you did not achieve the required passing score (70%)' : 'للأسف لم تحقق نسبة النجاح المطلوبة (70%)');

    const summaryText = result.passed
      ? (isEn 
          ? 'Your certification has been officially recorded. You are awarded the title: Certified SOC Analyst - Tier 1 & Tier 2 (BCSA). Your official certificate is now ready for printing and PDF export.'
          : 'تم اعتماد نتيجتك رسمياً في الأكاديمية ومُنحت بجدارة لقب: محلل أمن سيبراني ومراكز عمليات أمنية معتمد (Certified SOC Analyst - Tier 1 & Tier 2). وثيقة الشهادة الرسمية جاهزة الآن للطباعة والتحميل.')
      : (isEn 
          ? 'You can review all 35 scenario explanations below to reinforce your knowledge and retake the exam at any time.'
          : 'يمكنك مراجعة جميع السيناريوهات والشروحات التفصيلية أدناه لتعزيز معرفتك وإعادة خوض الامتحان في أي وقت.');

    container.innerHTML = `
      <div class="exam-score-view" style="max-width: 900px; margin: 0 auto;">
        <!-- Big Score Banner -->
        <div class="exam-score-card ${result.passed ? 'passed' : 'failed'}" style="text-align: center; background: var(--bg-card); border: 2px solid ${result.passed ? 'var(--accent-green)' : 'var(--accent-red)'}; border-radius: var(--radius-card); padding: 3rem 2rem; margin-bottom: 2.5rem; box-shadow: var(--shadow-card);">
          <div style="font-size: 4rem; margin-bottom: 0.75rem;">${result.passed ? '🏆' : '⚠️'}</div>
          <h2 style="font-size: 2rem; font-weight: 900; color: var(--text-main); margin-bottom: 0.5rem;">
            ${headline}
          </h2>
          <div style="display: flex; justify-content: center; align-items: baseline; gap: 0.5rem; margin: 1.5rem 0;">
            <span style="font-size: 4rem; font-weight: 900; color: ${result.passed ? 'var(--accent-green)' : 'var(--accent-red)'};">${result.percentage}%</span>
            <span style="font-size: 1.2rem; color: var(--text-muted); font-weight: 700;">(${result.correctCount} / ${result.total} ${isEn ? 'correct' : 'سؤال صحيح'})</span>
          </div>
          <p style="font-size: 1.05rem; color: var(--text-muted); max-width: 650px; margin: 0 auto 2rem; line-height: 1.7;">
            ${summaryText}
          </p>

          <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            ${result.passed 
              ? `<button class="btn-success-glow btn-large" style="padding: 14px 32px; font-size: 1.1rem;" onclick="certHubApp.switchView('certificate')">📜 ${isEn ? 'View & Print Official Certificate PDF' : 'عرض وطباعة وثيقة الشهادة الرسمية PDF'}</button>`
              : `<button class="btn-primary-glow btn-large" style="padding: 14px 32px; font-size: 1.1rem;" onclick="certHubApp.startExam()">🔄 ${isEn ? 'Retake Comprehensive Exam' : 'إعادة تقديم الامتحان الشامل'}</button>`
            }
            <button class="btn-secondary" style="padding: 14px 24px; font-size: 1rem;" onclick="certHubApp.switchView('overview')">
              ${isEn ? 'Return to Requirements' : 'العودة للوحة المتطلبات'}
            </button>
          </div>
        </div>

        <!-- Question Breakdown Review -->
        <div class="exam-detailed-review">
          <h3 style="font-size: 1.5rem; font-weight: 900; color: var(--text-main); margin-bottom: 1.5rem;">
            ${isEn ? '📋 Comprehensive Review of all 35 Scenarios & Security Rationales:' : '📋 المراجعة الشاملة لجميع السيناريوهات الـ 35 والتعليلات الأمنية:'}
          </h3>
          <div class="exam-review-list">
            ${detailsHtml}
          </div>
        </div>
      </div>
    `;

    if (result.passed && typeof app !== 'undefined') {
      app.showToast(isEn ? '🎉 Congratulations on passing the comprehensive SOC exam!' : '🎉 مبارك اجتياز الامتحان الشامل بنجاح واعتماك رسمياً!', 'success');
    }
  }

  // --- DYNAMIC PRINTABLE CERTIFICATE VIEW ---
  setCertificateLanguage(lang) {
    this._certLangExplicit = true;
    this.certLang = lang;
    this.render();
  }

  renderCertificate(container) {
    if (!this._certLangExplicit && typeof i18n !== 'undefined') {
      this.certLang = i18n.currentLang;
    }
    const isEn = this.certLang === 'en';
    const studentName = (window.app && window.app.student) ? window.app.student.name : (isEn ? 'Cybersecurity Candidate' : 'طالب الأكاديمية المعتمد');
    const scoreVal = localStorage.getItem('basharsec_exam_score') || '94';
    
    const today = isEn 
      ? new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      : new Date().toLocaleDateString('ar-SA', { year: 'numeric', month: 'long', day: 'numeric' });

    container.innerHTML = `
      <div class="cert-view-wrapper">
        <!-- Controls Bar (Hidden during printing) -->
        <div class="cert-view-controls hide-print" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.75rem; flex-wrap: wrap; gap: 1rem;">
          <button class="btn-secondary" onclick="certHubApp.switchView('overview')">
            ← ${isEn ? 'Return to Requirements' : 'العودة للوحة المتطلبات'}
          </button>
          
          <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
            <!-- Certificate Language Selector -->
            <button class="btn-secondary" style="padding: 6px 14px; font-size: 0.88rem;" onclick="certHubApp.setCertificateLanguage('${isEn ? 'ar' : 'en'}')">
              🌐 ${isEn ? 'العرض بالعربية (Arabic)' : 'Display in English'}
            </button>

            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <label style="font-size: 0.88rem; color: var(--text-muted); font-weight: 700;">
                ${isEn ? 'Recipient Name:' : 'تعديل الاسم المطبوع:'}
              </label>
              <input type="text" id="certDynamicNameInput" value="${studentName}" class="search-field" style="width: 200px; padding: 6px 10px; font-size: 0.88rem;" oninput="document.getElementById('certRecipientDisplay').innerText = this.value">
            </div>

            <button class="btn-primary-glow btn-large" onclick="window.print()">
              🖨️ ${isEn ? 'Print / Save Certificate as PDF' : 'طباعة / حفظ الشهادة كـ PDF'}
            </button>
          </div>
        </div>

        <!-- Master Luxury Printable Certificate Frame -->
        <div class="certificate-paper printable-certificate-area" id="printableCert" dir="${isEn ? 'ltr' : 'rtl'}">
          <div class="cert-outer-frame" style="border: 4px solid #06b6d4; border-radius: 16px; padding: 12px; background: radial-gradient(circle at center, #0f172a 0%, #060913 100%); box-shadow: 0 0 50px rgba(6, 182, 212, 0.35), inset 0 0 50px rgba(6, 182, 212, 0.2);">
            <div class="cert-inner-frame" style="border: 2px solid rgba(16, 185, 129, 0.5); border-radius: 12px; padding: 3rem 2.5rem; text-align: center; position: relative;">
              
              <!-- Certificate Crest & Academy Header -->
              <div class="cert-header" style="margin-bottom: 2rem;">
                <div class="cert-badge-crest" style="font-size: 3rem; margin-bottom: 0.5rem; filter: drop-shadow(0 0 15px rgba(6, 182, 212, 0.6));">
                  🛡️
                </div>
                <div class="cert-brand-titles">
                  <h2 style="font-size: 2.2rem; letter-spacing: 0.15em; color: #06b6d4; font-weight: 900; margin: 0 0 0.35rem; text-shadow: 0 0 20px rgba(6, 182, 212, 0.6);">
                    BASHARSEC CYBER DEFENSE ACADEMY
                  </h2>
                  <div class="cert-subtitle" style="font-size: 1rem; color: #94a3b8; font-weight: 700; letter-spacing: 0.05em;">
                    ${isEn ? 'Accredited Center for Security Operations & Threat Intelligence' : 'الأكاديمية المعتمدة لعمليات مراكز الأمن السيبراني واستخبارات التهديدات'}
                  </div>
                </div>
              </div>

              <!-- Official Proclamation Text -->
              <div class="cert-body" style="margin: 2rem 0;">
                <div class="cert-proclamation" style="font-size: 1.15rem; color: #cbd5e1; font-weight: 600; margin-bottom: 1.25rem;">
                  ${isEn 
                    ? 'This is to officially certify that Cybersecurity Candidate:' 
                    : 'تشهد أكاديمية BasharSec للأمن السيبراني بأن الطالب / المهندس:'}
                </div>

                <div class="cert-recipient-block" style="margin: 1.5rem 0 2rem;">
                  <h1 class="cert-recipient-name" id="certRecipientDisplay" style="font-size: 3.2rem; font-weight: 900; color: #ffffff; letter-spacing: 0.04em; text-shadow: 0 0 25px rgba(6, 182, 212, 0.7); margin: 0;">
                    ${studentName}
                  </h1>
                </div>

                <div class="cert-award-statement" style="font-size: 1.2rem; color: #cbd5e1; max-width: 850px; margin: 0 auto 1.5rem; line-height: 1.8;">
                  ${isEn 
                    ? `Has successfully mastered the operational curriculum and passed the <strong>35-scenario Final Examination</strong> with a grade of <strong><span style="color: #10b981;">${scoreVal}%</span></strong>, officially earning the professional title:`
                    : `قد أتم بنجاح متطلبات المسار التدريبي الشامل واجتاز الامتحان النهائي المكون من <strong>35 سؤالاً عملياً ونظرياً</strong> بدرجة <strong><span style="color: #10b981;">${scoreVal}%</span></strong>، وقد مُنح لقب:`
                  }
                </div>

                <div class="cert-granted-title" style="font-size: 1.65rem; font-weight: 900; color: #ffd700; text-transform: uppercase; letter-spacing: 0.08em; padding: 0.6rem 2rem; border-top: 2px solid rgba(255, 215, 0, 0.4); border-bottom: 2px solid rgba(255, 215, 0, 0.4); display: inline-block; margin-bottom: 1.75rem; text-shadow: 0 0 15px rgba(255, 215, 0, 0.4);">
                  CERTIFIED SOC ANALYST - TIER 1 & TIER 2 (BCSA)<br>
                  <span style="font-size: 1.25rem; color: #06b6d4;">محلل أمن سيبراني ومراكز عمليات أمنية معتمد</span>
                </div>

                <!-- Core Mastered Competencies -->
                <div class="cert-badge-row" style="display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap; margin-bottom: 2rem;">
                  <span class="cert-pill" style="background: rgba(6, 182, 212, 0.12); border: 1px solid rgba(6, 182, 212, 0.4); color: #06b6d4; padding: 6px 14px; border-radius: 99px; font-size: 0.82rem; font-weight: 700;">✓ Network Forensics & Wireshark</span>
                  <span class="cert-pill" style="background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.4); color: #10b981; padding: 6px 14px; border-radius: 99px; font-size: 0.82rem; font-weight: 700;">✓ Active Directory & Kerberos Defense</span>
                  <span class="cert-pill" style="background: rgba(139, 92, 246, 0.12); border: 1px solid rgba(139, 92, 246, 0.4); color: #8b5cf6; padding: 6px 14px; border-radius: 99px; font-size: 0.82rem; font-weight: 700;">✓ SIEM & Sysmon Engineering</span>
                  <span class="cert-pill" style="background: rgba(245, 158, 11, 0.12); border: 1px solid rgba(245, 158, 11, 0.4); color: #f59e0b; padding: 6px 14px; border-radius: 99px; font-size: 0.82rem; font-weight: 700;">✓ Incident Response & Playbooks</span>
                  <span class="cert-pill" style="background: rgba(6, 182, 212, 0.12); border: 1px solid rgba(6, 182, 212, 0.4); color: #06b6d4; padding: 6px 14px; border-radius: 99px; font-size: 0.82rem; font-weight: 700;">✓ Threat Intel & MITRE ATT&CK</span>
                </div>
              </div>

              <!-- Certificate Footer: Signatures & Seal -->
              <div class="cert-footer" style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid rgba(255, 255, 255, 0.1); flex-wrap: wrap; gap: 1.5rem;">
                <!-- Founder & Principal Architect Signature -->
                <div class="cert-sig-block" style="text-align: ${isEn ? 'left' : 'right'};">
                  <div style="font-family: 'Cairo', cursive; font-size: 1.4rem; font-weight: 900; color: #06b6d4; margin-bottom: 0.25rem;">
                    م. بشار حافظ
                  </div>
                  <div class="sig-line" style="font-size: 0.95rem; font-weight: 800; color: #ffffff;">
                    ${isEn ? 'Founded & Supervised by: Eng. Bashar Hafedh' : 'تأسيس وإشراف: م. بشار حافظ'}
                  </div>
                  <div class="sig-title" style="font-size: 0.82rem; color: #94a3b8;">
                    Founder & Principal SOC Operations Architect
                  </div>
                </div>

                <!-- Official Gold/Cyber Stamp -->
                <div class="cert-stamp-block">
                  <div class="cert-official-seal" style="width: 105px; height: 105px; border-radius: 50%; border: 2px dashed #10b981; display: flex; align-items: center; justify-content: center; color: #10b981; box-shadow: 0 0 20px rgba(16, 185, 129, 0.35); transform: rotate(-8deg); margin: 0 auto;">
                    <div class="seal-inner" style="display: flex; flex-direction: column; font-size: 0.68rem; font-weight: 900; line-height: 1.25; text-align: center;">
                      <span>BASHARSEC</span>
                      <strong style="color: #ffd700; font-size: 0.8rem;">ACCREDITED</strong>
                      <span>SOC TIER 1 & 2</span>
                      <small style="color: #06b6d4;">VERIFIED 2026</small>
                    </div>
                  </div>
                </div>

                <!-- Verification Serial & Issuance Date -->
                <div class="cert-meta-block" style="text-align: ${isEn ? 'right' : 'left'};">
                  <div class="cert-serial-id" style="font-size: 0.85rem; color: #cbd5e1; margin-bottom: 0.25rem;">
                    <strong>Verification ID:</strong> <code style="color: #06b6d4; font-family: var(--font-mono);">${this.serialNumber}</code>
                  </div>
                  <div class="cert-date-val" style="font-size: 0.85rem; color: #cbd5e1; margin-bottom: 0.25rem;">
                    <strong>${isEn ? 'Accreditation Date:' : 'تاريخ الاعتماد:'}</strong> ${today}
                  </div>
                  <div style="font-size: 0.78rem; color: #10b981; font-weight: 700;">
                    ✓ ${isEn ? 'Official certificate verified in the Academy Digital Registry' : 'وثيقة معتمدة ومسجلة في السجل الرقمي للأكاديمية'}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    `;
  }
}

// Global Hub Instance
const certHubApp = new CertificationHubController();
window.certHubApp = certHubApp;

// Global invocation hook
function showGraduationCertificate() {
  if (typeof app !== 'undefined') {
    app.openModal('certificationModal');
    certHubApp.render();
  }
}
