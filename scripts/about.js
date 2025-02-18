const aboutSection = document.querySelector('.about');

function handleScroll() {
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.8; 

  if (sectionTop < triggerPoint) {
    aboutSection.classList.add('visible');
    window.removeEventListener('scroll', handleScroll); 
  }
}