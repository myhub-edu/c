// Show a welcome message only once (on first visit)
document.addEventListener("DOMContentLoaded", () => {
  if (!sessionStorage.getItem("visited")) {
    alert("📚 Welcome to MIT Homework Portal!\nGet all your daily homework easily.");
    sessionStorage.setItem("visited", "true");
  }

  // Log subject clicks (can expand later)
  const subjectLinks = document.querySelectorAll(".subject-card");
  subjectLinks.forEach(link => {
    link.addEventListener("click", () => {
      console.log(`📁 Opening subject: ${link.textContent.trim()}`);
    });
  });

  // Smooth scroll if needed in future
  const scrollToSubjects = document.querySelector('.subjects');
  const scrollBtn = document.querySelector('.scroll-btn');
  if (scrollBtn && scrollToSubjects) {
    scrollBtn.addEventListener("click", () => {
      scrollToSubjects.scrollIntoView({ behavior: 'smooth' });
    });
  }
});
