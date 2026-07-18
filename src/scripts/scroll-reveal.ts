const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.1 }
);

const elements = document.querySelectorAll('[data-reveal]');
for (const el of elements) {
  observer.observe(el);
}
