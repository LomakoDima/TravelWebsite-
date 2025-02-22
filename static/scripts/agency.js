document.addEventListener("DOMContentLoaded", () => {
    const titleElement = document.getElementById("card-title");
    const numberElement = document.getElementById("card-number");

    if (!titleElement || !numberElement) {
        console.error("Элементы карточки не найдены!");
        return;
    }

    const cardData = [
        { title: "Сегодня улетели отдыхать", number: "568", suffix: "туристов" },
        { title: "Сегодня забронировали", number: "513", suffix: "туристов" },
        { title: "2 235 162 туриста выбрали нас", number: "Читать отзывы", suffix: "" }
    ];

    let currentIndex = 0;

    function changeCardContent() {
        currentIndex = (currentIndex + 1) % cardData.length;

        titleElement.style.opacity = 0;
        numberElement.style.opacity = 0;

        setTimeout(() => {
            titleElement.textContent = cardData[currentIndex].title;
            numberElement.textContent = cardData[currentIndex].number;
            numberElement.nextSibling.textContent = " " + cardData[currentIndex].suffix;

            titleElement.style.opacity = 1;
            numberElement.style.opacity = 1;
        }, 500);
    }

    setInterval(changeCardContent, 7000);
});

document.addEventListener("DOMContentLoaded", () => {
    // Данные для карточек
    const countryPrices = [
        { country: "ОАЭ", price: "519 897" },
        { country: "Египет", price: "423 450" },
        { country: "Турция", price: "380 900" },
        { country: "Мальдивы", price: "715 600" },
        { country: "Таиланд", price: "640 200" }
    ];

    let countryIndex = 0;

    function changeCountryAndPrice() {
        const countryElement = document.getElementById("country");
        const priceElement = document.getElementById("amount");

        if (!countryElement || !priceElement) {
            console.error("Элементы карточки не найдены!");
            return;
        }

        
        countryElement.style.opacity = 0;
        priceElement.style.opacity = 0;

        setTimeout(() => {
            countryIndex = (countryIndex + 1) % countryPrices.length;
            countryElement.textContent = countryPrices[countryIndex].country;
            priceElement.textContent = countryPrices[countryIndex].price;

            countryElement.style.opacity = 1;
            priceElement.style.opacity = 1;
        }, 500);
    }

    setInterval(changeCountryAndPrice, 7000);
});
