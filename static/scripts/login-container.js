document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("login-button");
  const loginFormContainer = document.getElementById("login-form-container");
  const registerFormContainer = document.getElementById(
    "register-form-container"
  );
  const openRegisterLink = document.getElementById("open-register");
  const backToLoginLink = document.getElementById("back-to-login");
  const overlay = document.getElementById("overlay");
  const body = document.body;

  if (loginButton) {
    loginButton.addEventListener("click", function (event) {
      event.preventDefault();
      openLogin();
    });
  }

  
  function openLogin() {
    loginFormContainer.style.display = "block";
    registerFormContainer.style.display = "none";
    overlay.style.display = "block";
    body.classList.add("no-scroll");
  }

  
  function openRegister() {
    registerFormContainer.style.display = "block";
    loginFormContainer.style.display = "none"; 
    overlay.style.display = "block";
    body.classList.add("no-scroll");
  }

  
  function closeModals() {
    loginFormContainer.style.display = "none";
    registerFormContainer.style.display = "none";
    overlay.style.display = "none";
    body.classList.remove("no-scroll");
  }

  
  if (openRegisterLink) {
    openRegisterLink.addEventListener("click", function (event) {
      event.preventDefault();
      openRegister();
    });
  }

  if (backToLoginLink) {
    backToLoginLink.addEventListener("click", function (event) {
      event.preventDefault();
      openLogin();
    });
  }

  
  overlay.addEventListener("click", closeModals);

  
});


