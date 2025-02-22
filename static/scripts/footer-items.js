document.addEventListener("DOMContentLoaded", function () {
    const columns = document.querySelectorAll(
      ".footer-column h3, .footer-column ul li, .social-icons li"
    );

    function showOnScroll() {
      columns.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 50) {
          setTimeout(() => {
            element.classList.add("visible");
          }, index * 100);
        }
      });
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll();
  });