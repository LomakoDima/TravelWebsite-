document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".review-form");
    const stars = document.querySelectorAll(".star-rating .star");
    const reviewsContainer = document.querySelector(".reviews-container");
    let selectedRating = 0;

    function generateStars(rating) {
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starsHTML += '<i class="fa-solid fa-star" style="margin-right: 3px;"></i>';
            } else {
                starsHTML += '<i class="fa-regular fa-star" style="margin-right: 3px;"></i>';
            }
        }
        return `<span class="stars">${starsHTML}</span>`;
    }

    function loadReviews() {
        fetch("/get_reviews")
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    reviewsContainer.innerHTML = "";
                    data.reviews.forEach(review => {
                        const reviewElement = document.createElement("div");
                        reviewElement.classList.add("review-card");
                        reviewElement.innerHTML = `
                            <div class="review-header">
                                <img src="/static/images/user1.jpg" class="review-avatar">
                                <div>
                                    <h3 class="review-name">${review.name}</h3>
                                    <p class="review-location">${review.city}</p>
                                </div>
                            </div>
                            <p class="review-text">${review.review}</p>
                            <div class="review-rating">${generateStars(review.rating)}</div>
                        `;
                        reviewsContainer.appendChild(reviewElement);
                    });
                }
            })
            .catch(error => console.error("Ошибка при загрузке отзывов:", error));
    }

    stars.forEach(star => {
        star.addEventListener("click", function () {
            selectedRating = this.getAttribute("data-value");
            stars.forEach(s => s.classList.remove("active"));
            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.add("active");
            }
        });
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const city = document.querySelector("#city").value.trim();
        const review = document.querySelector("#review-text").value.trim();

        if (!name || !city || !review || selectedRating === 0) {
            alert("Пожалуйста, заполните все поля и выберите рейтинг!");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("city", city);
        formData.append("review", review);
        formData.append("rating", selectedRating);

        fetch("/submit_review", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.status === "success") {
                form.reset();
                stars.forEach(s => s.classList.remove("active"));
                selectedRating = 0;
                loadReviews();
            }
        })
        .catch(error => console.error("Ошибка:", error));
    });

    loadReviews();
});