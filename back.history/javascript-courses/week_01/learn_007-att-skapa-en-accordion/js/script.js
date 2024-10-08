const questions = document.querySelectorAll(".question");

// open på answer
/* questions.forEach((question) => {
    question.addEventListener("click", e => {
        
        document.querySelectorAll('.answer').forEach((answer) => {
            answer.classList.remove('open')
        })

        const parent = question.parentElement;
        const answer = parent.querySelector(".answer");
        answer.classList.toggle("open");
    })
}) */

// open på faq-card
questions.forEach((question) => {
    question.addEventListener("click", e => {
        const parent = question.parentElement;
        
        // Close an opened answer
        if(parent.classList.contains('open')) {
            parent.classList.remove('open');

            return; // avsluta funktionen!
        }
        
        // Close all opened faq cards
        document.querySelectorAll('.faq-card').forEach((answer) => {
            answer.classList.remove('open')
        })
        
        // Open a closed answer
        parent.classList.add("open");
    })
})