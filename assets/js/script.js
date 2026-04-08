const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".work-card, .service, .step, .stats-grid div").forEach((el) => {
  el.classList.add("reveal-ready");
  observer.observe(el);
});
