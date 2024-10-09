// #############################################################################
// RANDOM NUMBER GENERATOR (FRÅN | DATATYPER OCH VARIABLER) (ÄNDRAT CHATGPT)
// #############################################################################

let randomNr = Math.random() * 100;
randomNr = Math.round(randomNr);

console.log("Hello there, dear cheater. . . ")
console.log("This is the random number: " + randomNr);
console.log("Press F12 & then F5. Try again!")

// #############################################################################

const guessBox = document.querySelector("#guess-box");
const guessForm = document.querySelector('#guess-form');
const guessDiv = document.querySelector('#guess-field');
const guessInput = document.querySelector('#guess-input');
const answerBox = document.querySelector("#hint-box");
const answerDiv = document.querySelector("#hint-field");
const hint = document.querySelector("#hint");
const hintLow = document.querySelector("#low");
const hintHigh = document.querySelector("#high");
const hintCorrect = document.querySelector("#correct");

// #############################################################################
// COMMENT THE GUESS (FRÅN | DOM - SKAPA ELEMENT MED JAVASCRIPT)
// #############################################################################


guessForm.addEventListener('submit', e => {
    e.preventDefault();
    
    if(guessInput.value === "") return
    
    const newGuess = createMessageElement(guessInput.value);
    guessDiv.insertAdjacentElement("afterbegin", newGuess);
    
    guessInput.value = ""
})


function createMessageElement(value) {
    
    const message = document.createElement('div');
    message.classList.add("message");
    
    const messageText = document.createElement("p");
    
    if(value >= 0 && value < 101) {
        
        if (value == randomNr) {
            messageText.textContent = `YOUR NUMBER IS: ${value}.`;
            
            guessBox.classList.add("right");
            answerBox.classList.add("hidden");
            hintCorrect.classList.remove("hidden");
        } else if (value > randomNr) {
            messageText.textContent = `YOUR NUMBER IS: ${value}.`;
            
            guessBox.classList.add("wrong");
            answerBox.classList.remove("hidden");
            hintHigh.classList.remove("hidden");
            
        } else {
            messageText.textContent = `YOUR NUMBER IS: ${value}.`;
            
            guessBox.classList.add("wrong");
            answerBox.classList.remove("hidden");
            hintLow.classList.remove("hidden");
        }
        
        console.log(value);
        
    } else {
        
        messageText.textContent = `Your number has to be within the range of 0-100.`;
    }
    
    message.appendChild(messageText);

    return message;
}

const userInput = guessInput.value; 

// Remove the border color at
guessInput.addEventListener("click", e => {
    
    guessBox.classList.remove("right");
    guessBox.classList.remove("wrong");
    hintCorrect.classList.add("hidden");
    hintHigh.classList.add("hidden");
    hintLow.classList.add("hidden");
})