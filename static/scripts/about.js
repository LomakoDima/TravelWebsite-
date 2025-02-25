const aboutSection = document.querySelector(".about");

function handleScroll() {
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.8;

  if (sectionTop < triggerPoint) {
    aboutSection.classList.add("visible");
    window.removeEventListener("scroll", handleScroll);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    ".about-container, .trust-cards .card, .team .team-member"
  );

  function revealOnScroll() {
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

window.addEventListener("DOMContentLoaded", (event) => {
  const header = document.querySelector("header");
  header.classList.add("header-visible");
});

window.addEventListener("DOMContentLoaded", (event) => {
  const header = document.querySelector("header");
  const logo = document.querySelector(".logo");
  const navButtons = document.querySelector(".nav-buttons");

  header.classList.add("header-visible");

  setTimeout(() => {
    logo.classList.add("logo-visible");
  }, 300);

  setTimeout(() => {
    navButtons.classList.add("nav-buttons-visible");
  }, 600);
});

window.addEventListener("load", function () {
  const header = document.getElementById("header");
  if (header) {
    header.classList.add("fade-in");
  }

  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
      item.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
    }, index * 200);
  });
});

const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileSidebar = document.getElementById("mobile-sidebar");
const mobileMenuClose = document.getElementById("mobile-menu-close");

mobileMenuToggle.addEventListener("click", () => {
  mobileSidebar.classList.add("open");
});

mobileMenuClose.addEventListener("click", () => {
  mobileSidebar.classList.remove("open");
});

document.querySelectorAll("#mobile-sidebar a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileSidebar.classList.remove("open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-item");

  function updateActiveSection() {
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveSection);
});

const chatbotIcon = document.getElementById("chatbot-icon");
const chatbotWidget = document.getElementById("chatbot-widget");
const chatbotClose = document.getElementById("chatbot-close");


chatbotIcon.addEventListener("click", () => {
  chatbotWidget.style.display = "flex";
});


chatbotClose.addEventListener("click", () => {
  chatbotWidget.style.display = "none";
});


const loginFormContainer = document.getElementById("login-form-container");
const registerFormContainer = document.getElementById("register-form-container");
const overlay = document.getElementById("overlay");

const openRegisterLink = document.getElementById("open-register");
const backToLoginLink = document.getElementById("back-to-login");

const closeLoginBtn = document.getElementById("close-login");
const closeRegisterBtn = document.getElementById("close-register");

const body = document.body;


function openModal(modal) {
  modal.style.display = "block";
  overlay.style.display = "block";
}

function closeModals() {
  loginFormContainer.style.display = "none";
  registerFormContainer.style.display = "none";
  overlay.style.display = "none";
  body.classList.remove("no-scroll");
  
}


function openLogin() {
  openModal(loginFormContainer);
}


function openRegister() {
  openModal(registerFormContainer);
}


openRegisterLink.addEventListener("click", (e) => {
  e.preventDefault();
  openRegister();
});

backToLoginLink.addEventListener("click", (e) => {
  e.preventDefault();
  openLogin();
});

closeLoginBtn.addEventListener("click", closeModals);
closeRegisterBtn.addEventListener("click", closeModals);


overlay.addEventListener("click", closeModals);


// document.getElementById("login-button").addEventListener("click", openLogin);

