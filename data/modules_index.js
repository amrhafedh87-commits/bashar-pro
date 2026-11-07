// Unified Courses & Curriculum Registry for BasharSec Academy
// Unites all 12 Courses across Level 1, Level 2, and Level 3

// Consolidate all courses
const allCourses = [
  ...coursesData,
  ...level2Courses,
  ...level3Courses
];

// Backward-compatible alias for existing scripts
const allModules = allCourses.map(c => ({
  ...c,
  stageNumber: c.courseNumber,
  lessons: c.lessons
}));

// Helper functions for curriculum access
function getCourseById(courseId) {
  return allCourses.find(c => c.id === courseId);
}

function getModuleById(id) {
  return allCourses.find(c => c.id === id);
}

function getLessonById(lessonId) {
  for (const course of allCourses) {
    const found = course.lessons.find(l => l.id === lessonId);
    if (found) return { lesson: found, course: course, module: course };
  }
  return null;
}

function getAllLessons() {
  const list = [];
  allCourses.forEach(c => {
    c.lessons.forEach(l => {
      list.push({
        ...l,
        courseId: c.id,
        courseTitleAr: c.titleAr,
        courseTitleEn: c.titleEn,
        moduleTitleAr: c.titleAr,
        moduleTitleEn: c.titleEn,
        level: c.level,
        levelBadgeColor: c.levelBadgeColor
      });
    });
  });
  return list;
}

function getNextLesson(currentLessonId) {
  const lessons = getAllLessons();
  const idx = lessons.findIndex(l => l.id === currentLessonId);
  if (idx !== -1 && idx < lessons.length - 1) {
    return lessons[idx + 1];
  }
  return null;
}

function getPrevLesson(currentLessonId) {
  const lessons = getAllLessons();
  const idx = lessons.findIndex(l => l.id === currentLessonId);
  if (idx > 0) {
    return lessons[idx - 1];
  }
  return null;
}
