document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".payment-icons i");

    function checkIcons() {
      icons.forEach((icon, index) => {
        const iconTop = icon.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (iconTop < windowHeight - 50) {
          setTimeout(() => {
            icon.classList.add("visible");
          }, index * 200);
        }
      });
    }

    window.addEventListener("scroll", checkIcons);
    checkIcons();
  });