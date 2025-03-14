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
const registerFormContainer = document.getElementById(
  "register-form-container"
);
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

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("booking-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let formData = new FormData(this);
      fetch("/book", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
          if (data.status === "success") {
            document.getElementById("booking-form").reset();
          }
        })
        .catch((error) => console.error("Ошибка:", error));
    });
});

document.addEventListener("DOMContentLoaded", function () {
  
  const elements = document.querySelectorAll(".review-card, .blog-post");
  function reveal() {
    elements.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight - 50) {
        el.classList.add("visible");
      }
    });
  }
  window.addEventListener("scroll", reveal);
  reveal();

 
  const stars = document.querySelectorAll(".star");
  stars.forEach((star) => {
    star.addEventListener("click", function () {
      stars.forEach((s) => s.classList.remove("active"));
      this.classList.add("active");
      let prev = this.previousElementSibling;
      while (prev) {
        prev.classList.add("active");
        prev = prev.previousElementSibling;
      }
    });
  });
});

const input = document.querySelector("#register-email");
emailIcon = document.querySelector(".email-icon");
input.addEventListener("keyup", () => {
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (input.value === "") {
    emailIcon.classList.replace("uil-check-circle", "uil-envelope");
    return (emailIcon.style.color = "#b4b4b4");
  }
  if (input.value.match(pattern)) {
    emailIcon.classList.replace("uil-envelope", "uil-check-circle");
    return (emailIcon.style.color = "#4bb543");
  }
  emailIcon.classList.replace("uil-check-circle", "uil-envelope");
  emailIcon.style.color = "#de0611";
});


const passInp = document.getElementById('passInd'),
      indicator = document.querySelector('.indicator')
      iconText = document.querySelector('.icon-text'),
      pas = document.querySelector('.pas');

let alphabet = /[a-zA-Z]/,
    numbers = /[0-9]/,
    schars = /[!, @, #, $, %, ^, &, *, ?, _, (,),-,+,=,~]/;

passInp.addEventListener('keyup', () => {
  indicator.classList.add('active')

  let val = passInp.value;

  if  (val.match(alphabet) || val.match(numbers) || val.match(schars)) {
    pas.textContent = 'Password is weak';
    iconText.style.color = '#FF6333';
  }

  if (val.match(alphabet) && val.match(numbers) && val.length >= 6) {
    pas.textContent = 'Password is medium';
    iconText.style.color = '#CC8500'
  }

  if (val.match(alphabet) && val.match(numbers) && val.match(schars) && val.length >= 6) {
    pas.textContent = 'Password is strong';
    iconText.style.color = '#22c32A';
  }

  if (val == '') {
    indicator.classList.remove('active')
  }
})
    