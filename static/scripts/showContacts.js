document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("contact-modal");
  const openBtn = document.getElementById("open-modal");
  const closeBtn = document.querySelector(".close");
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("toast");

 
  modal.classList.remove("show");
  modal.style.display = "none";

  
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

    fetch("http://127.0.0.1:5000/send_email", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log("Ответ сервера:", data);
      if (data.status === "success") {
        toast.classList.add("show");

        setTimeout(() => {
          modal.style.display = "none";
        }, 800);

        setTimeout(() => {
          toast.classList.remove("show");
        }, 1200);
      } else {
        alert("Ошибка при отправке: " + data.message);
      }
    })
    .catch(error => console.error("Ошибка:", error));

    form.reset();
  });
});
