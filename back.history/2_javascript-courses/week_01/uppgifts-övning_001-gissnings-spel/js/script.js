// #############################################################################
// RANDOM NUMBER GENERATOR (FRÅN | DATATYPER OCH VARIABLER)
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

const Low = document.querySelector("#low");
const High = document.querySelector("#high");
const Correct = document.querySelector("#correct");

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

let i = 1;

function createMessageElement(value) {

    guessBox.classList.remove("right");
    guessBox.classList.remove("wrong");
    
    const message = document.createElement('li');
    message.classList.add("message");
    
    const messageText = document.createElement("p");
    

    if(value >= 0 && value < 101) {
        guessBox.classList.remove()
        
        if (value == randomNr) {

            guessBox.classList.add("right");
            answerBox.classList.remove("hidden");
            
            Correct.classList.remove("hidden");

            messageText.textContent = `GUESS: ${i} | YOUR NUMBER IS: ${value}.`;
            guessInput.value = "PRESS F5 TO PLAY AGAIN!"
            
            i++;

        } else if (value > randomNr) {
            
            guessBox.classList.add("wrong");
            answerBox.classList.remove("hidden");
           
            High.classList.remove("hidden");
            
            messageText.textContent = `GUESS: ${i} | YOUR NUMBER IS: ${value}. >> D`;
            
            i++;

        } else {
            
            guessBox.classList.add("wrong");
            answerBox.classList.remove("hidden");

            Low.classList.remove("hidden");
            
            messageText.textContent = `GUESS: ${i} | YOUR NUMBER IS: ${value}. >> U`;
            
            i++;
        
        }
        
        console.log("Your guess: ", value);
        
    } else {
        
        messageText.textContent = `YOUR GUESS HAS TO BE A NUMBER, AND WITHIN THE RANGE OF 0-100. GOOD LUCK!`;
    }
    
    message.appendChild(messageText);

    return message;
}

const userInput = guessInput.value; 

// RESET
guessInput.addEventListener("click", e => {
    
    guessBox.classList.remove("right");
    guessBox.classList.remove("wrong");

    answerBox.classList.add("hidden");

    Correct.classList.add("hidden");
    High.classList.add("hidden");
    Low.classList.add("hidden");
})