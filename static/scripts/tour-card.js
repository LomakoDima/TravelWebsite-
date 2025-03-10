document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".tour-card");

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

    cards.forEach((card) => observer.observe(card));
  });


  document.querySelectorAll(".details-button").forEach(button => {
    button.addEventListener("click", function () {
        const fullDesc = this.nextElementSibling;
        fullDesc.classList.toggle("show");
        this.textContent = fullDesc.classList.contains("show") ? "Скрыть" : "Подробнее";
    });
});
