document.addEventListener("DOMContentLoaded", function () {
    const searchPanel = document.querySelector(".search-panel");
    const searchButton = document.querySelector(".search-button");
    const searchItems = document.querySelectorAll(".search-item");

    searchButton.addEventListener("click", function () {
        const searchValues = [];
        
        searchItems.forEach(item => {
            const value = item.querySelector(".search-value").textContent.toLowerCase();
            searchValues.push(value);
        });

        console.log("Поиск по параметрам:", searchValues);
    });
});
