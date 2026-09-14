const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
if (menuBtn) {
  menuBtn.addEventListener("click", () => navbar.classList.toggle("open"));
}
document.querySelectorAll(".navbar nav a").forEach(link => {
  link.addEventListener("click", () => navbar.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
