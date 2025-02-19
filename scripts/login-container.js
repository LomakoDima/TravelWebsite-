document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");
    const loginFormContainer = document.getElementById(
      "login-form-container"
    );
    const closeButton = document.getElementById("close-btn");
    const overlay = document.getElementById("overlay");
    const body = document.body;

    loginButton.addEventListener("click", function (event) {
      event.preventDefault();
      overlay.style.display = "block";
      loginFormContainer.style.display = "block";
      body.classList.add("no-scroll");
    });

    closeButton.addEventListener("click", function () {
      overlay.style.display = "none";
      loginFormContainer.style.display = "none";
      body.classList.remove("no-scroll");
    });
  });