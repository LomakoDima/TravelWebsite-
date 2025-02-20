document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("contact-modal");
  modal.classList.remove("show"); 
  modal.style.display = "none";   
  const openBtn = document.getElementById("open-modal");
  const closeBtn = document.querySelector(".close");
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");
  const toast = document.getElementById("toast");

  openBtn.addEventListener("click", function () {
    modal.classList.add("show");
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", function () {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 300);
    }
  });

  
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    fetch("send_mail.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        toast.classList.add("show");

        setTimeout(() => {
            modal.classList.remove("show");
            modal.style.display = "none";
        }, 1200);

        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    })
    .catch(error => console.error("Ошибка:", error));

    form.reset();
  });
});
