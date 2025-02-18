window.addEventListener('scroll', handleScroll); 
const bookingSection = document.querySelector('.booking'); 

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { 
      bookingSection.classList.add('visible'); 
      observer.unobserve(bookingSection); 
    }
  });
});

observer.observe(bookingSection); 