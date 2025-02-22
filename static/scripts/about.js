const aboutSection = document.querySelector('.about');

function handleScroll() {
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.8; 

  if (sectionTop < triggerPoint) {
    aboutSection.classList.add('visible');
    window.removeEventListener('scroll', handleScroll); 
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".about-container, .trust-cards .card, .team .team-member");

  function revealOnScroll() {
      elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
              el.classList.add("show");
          }
      });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

window.addEventListener('DOMContentLoaded', (event) => {
  const header = document.querySelector('header');
  header.classList.add('header-visible');
});

window.addEventListener('DOMContentLoaded', (event) => {
  const header = document.querySelector('header');
  const logo = document.querySelector('.logo');
  const navButtons = document.querySelector('.nav-buttons');

  header.classList.add('header-visible');

  setTimeout(() => { // Задержка перед анимацией логотипа
    logo.classList.add('logo-visible');
  }, 300); // Задержка 300 миллисекунд

  setTimeout(() => { // Задержка перед анимацией кнопок
    navButtons.classList.add('nav-buttons-visible');
  }, 600); // Задержка 600 миллисекунд
});

window.addEventListener("load", function() {
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

const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileSidebar = document.getElementById('mobile-sidebar');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  mobileMenuToggle.addEventListener('click', () => {
    mobileSidebar.classList.add('open');
  });

  mobileMenuClose.addEventListener('click', () => {
    mobileSidebar.classList.remove('open');
  });

  
  document.querySelectorAll('#mobile-sidebar a').forEach(link => {
    link.addEventListener('click', () => {
      mobileSidebar.classList.remove('open');
    });
  });