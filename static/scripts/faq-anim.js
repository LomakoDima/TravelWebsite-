document.querySelector(".info").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
  });