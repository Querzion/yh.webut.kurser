const guessBox = document.querySelector("#guess-box");
const guessForm = document.querySelector('#guess-form');
const guessDiv = document.querySelector('#guess-field');
const answerBox = document.querySelector("#answer-box");
const answerDiv = document.querySelector("#answer-field");
const guessInput = document.querySelector('#guess-input');

// COMMENT THE GUESS (FRÅN | DOM - SKAPA ELEMENT MED JAVASCRIPT)
// #############################################################################

guessForm.addEventListener('submit', e => {
    e.preventDefault();

    if(guessInput.value === "") return   // if the input is empty, stop it's output

    const newGuess = createCommentElement(guessInput.value);
    
    guessDiv.insertAdjacentElement("afterbegin", newGuess);
    
    guessInput.value = ""
})

function createCommentElement(value) {
    
    const guesses = document.createElement('div');
    guesses.classList.add("guess");
    
    const guessText = document.createElement("p");
    guessText.textContent = value;
    
    guesses.appendChild(guessText);
    
    return guesses;
}
// #############################################################################

// RANDOM NUMBER GENERATOR (FRÅN | DATATYPER OCH VARIABLER)
// #############################################################################
let randomNr = Math.random() * 100;
randomNr = Math.round(randomNr);

const guessNumber = randomNr;
console.log(randomNr);
console.log(guessNumber);


guessForm.addEventListener('submit', e => {
    e.preventDefault();
    
    if(guessInput === "") {
        
        return
        
    } else {
        
        do {

        } while(guessInput != guessNumber);

    }
    
   /*  if(guessInput.value === guessNumber) {
        
        guessBox.classList.remove("wrong");
        guessBox.classList.add("right");
        
        answerBox.classList.remove("hidden");
    } else if(guessInput.value !== guessNumber) {
        
        guessBox.classList.remove("right");
        guessBox.classList.add("wrong");
        
        answerBox.classList.remove("hidden");
    } else if (guessInput.value === "") {
        console.log("ueue");
    } return */
    
    
})

// Remove the border color at
guessInput.addEventListener("click", e => {
    guessBox.classList.remove("right");
    guessBox.classList.remove("wrong");
    answerBox.classList.add("hidden");
})

// #############################################################################

// 
// #############################################################################