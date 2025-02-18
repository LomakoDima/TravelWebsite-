document.addEventListener("DOMContentLoaded", function () {
    const contactsSection = document.querySelector(".contacts-content");
    const contactItems = document.querySelectorAll(".contact-item");

    function showContacts() {
      const sectionPosition = contactsSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (sectionPosition < screenPosition) {
        contactsSection.classList.add("show");
        contactItems.forEach((item) => item.classList.add("show"));
      }
    }

    window.addEventListener("scroll", showContacts);
    showContacts();
  });