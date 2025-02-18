document.addEventListener("DOMContentLoaded", function () {
    const advantages = document.querySelectorAll(".advantage-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    advantages.forEach((advantage) => observer.observe(advantage));
  });