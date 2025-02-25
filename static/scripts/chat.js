document.addEventListener("DOMContentLoaded", function () {
    const chatbotIcon = document.getElementById("chatbot-icon");
    const chatbotWidget = document.getElementById("chatbot-widget");
    const chatbotClose = document.getElementById("chatbot-close");

    chatbotIcon.addEventListener("click", () => {
      chatbotWidget.style.display = "flex";
      setTimeout(() => chatbotWidget.classList.add("show"), 10);
    });

    chatbotClose.addEventListener("click", () => {
      chatbotWidget.classList.remove("show");
      setTimeout(() => chatbotWidget.style.display = "none", 300);
    });
  });