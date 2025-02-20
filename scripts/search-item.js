document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.search-item');
  
    items.forEach((item) => {
      const dropdownId = item.getAttribute('data-dropdown');
      const dropdownMenu = document.getElementById(dropdownId);
      const arrowIcon = item.querySelector('.icon-arrow');
  
      item.addEventListener('click', (e) => {
        e.stopPropagation(); 
        
        document.querySelectorAll('.dropdown-menu.open').forEach((openMenu) => {
          if (openMenu !== dropdownMenu) {
            openMenu.classList.remove('open', 'fade-in');
            openMenu.parentElement.querySelector('.icon-arrow').classList.remove('rotate');
          }
        });
  
        if (dropdownMenu.classList.contains('open')) {
          dropdownMenu.classList.remove('fade-in');
          setTimeout(() => dropdownMenu.classList.remove('open'), 200);
          arrowIcon.classList.remove('rotate');
        } else {
          dropdownMenu.classList.add('open');
          setTimeout(() => dropdownMenu.classList.add('fade-in'), 10);
          arrowIcon.classList.add('rotate');
        }
      });
    });
  
    document.addEventListener('click', () => {
      document.querySelectorAll('.dropdown-menu.open').forEach((menu) => {
        menu.classList.remove('fade-in');
        setTimeout(() => menu.classList.remove('open'), 200);
        menu.parentElement.querySelector('.icon-arrow').classList.remove('rotate');
      });
    });
  });