document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const cardWidth = document.querySelector(".tour-card").offsetWidth;
    let currentPosition = 0;
    const indicatorItems = document.querySelectorAll(".indicator-item");
    const totalCards = document.querySelectorAll(".tour-card").length;
    const cardsToShow = 3;

    slider.style.width = `${cardWidth * totalCards}px`;

    function updateIndicator() {
      const currentIndex = (currentPosition / cardWidth) % totalCards;
      indicatorItems.forEach((item, index) => {
        if (index === currentIndex) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }

    nextButton.addEventListener("click", () => {
      currentPosition += cardWidth;

      if (currentPosition >= cardWidth * totalCards) {
        currentPosition = 0;
      }
      slider.style.transform = `translateX(-${currentPosition}px)`;
      updateIndicator();
    });

    prevButton.addEventListener("click", () => {
      currentPosition -= cardWidth;
      if (currentPosition < 0) {
        currentPosition = cardWidth * (totalCards - 1);
      }
      slider.style.transform = `translateX(-${currentPosition}px)`;
      updateIndicator();
    });

    indicatorItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        currentPosition = index * cardWidth;
        slider.style.transform = `translateX(-${currentPosition}px)`;
        updateIndicator();
      });
    });

    updateIndicator();
  });