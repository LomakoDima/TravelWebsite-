const faqItems = document.querySelectorAll(".faq-item"); 

      faqItems.forEach((item) => {
        
        const question = item.querySelector(".faq-question"); 
        const answer = item.querySelector(".faq-answer"); 

        question.addEventListener("click", () => {
          
          answer.classList.toggle("active"); 
          question.querySelector("i").classList.toggle("fa-minus"); 
          question.classList.toggle("active"); 
        });
      });