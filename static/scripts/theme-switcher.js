document.addEventListener("DOMContentLoaded", function () {
  const themeToggles = document.querySelectorAll("#theme-toggle-desktop, #theme-toggle-mobile");
  const body = document.body;
  
  
  function toggleTheme() {
    body.classList.toggle("night-theme");
    if (body.classList.contains("night-theme")) {
      
      themeToggles.forEach(btn => {
        const icon = btn.querySelector("i");
        icon.classList.replace("fa-sun", "fa-moon");
      });
      localStorage.setItem("theme", "dark");
    } else {
      
      themeToggles.forEach(btn => {
        const icon = btn.querySelector("i");
        icon.classList.replace("fa-moon", "fa-sun");
      });
      localStorage.setItem("theme", "light");
    }
    console.log("Theme toggled. night-theme =", body.classList.contains("night-theme"));
  }
  
  
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("night-theme");
    themeToggles.forEach(btn => {
      const icon = btn.querySelector("i");
      icon.classList.replace("fa-sun", "fa-moon");
    });
  }
  
  themeToggles.forEach(btn => {
    btn.addEventListener("click", toggleTheme);
  });
});
