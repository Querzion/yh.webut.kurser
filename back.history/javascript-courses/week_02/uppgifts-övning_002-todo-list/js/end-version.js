// #############################################################################
// TODO LIST (FRÅN | DOM - SKAPA ELEMENT MED JAVASCRIPT & ARRAY) 
// #############################################################################

// DOM elements
const t2doBox = document.querySelector("#t2do-box");
const t2doForm = document.querySelector('#t2do-form');
const t2doUl = document.querySelector('#t2dos-field');
const t2doInput = document.querySelector('#t2do-input');

/* const deleteT2do = document.querySelector("#delete2-btn"); */
const saveT2doList = document.querySelector("#save-t2do-list-btn");

const t2doArray = [];
let t2doArrayId = t2doArray.indexOf 

t2doForm.addEventListener('submit', e => {
    e.preventDefault();

    if (t2doInput.value === "") return; // if the input is empty, stop its output

    const newT2do = createT2doElement(t2doInput.value);

    t2doUl.insertAdjacentElement("afterbegin", newT2do);
    t2doInput.value = "";
});

// Export the createCommentElement function
function createT2doElement(value) {
    const t2do = document.createElement('li');
    t2do.classList.add("t2do");

    const t2doText = document.createElement("p");
    t2doText.textContent = ` ${value}`;

    t2do.appendChild(t2doText);
    return t2do;
}



// I'm a bit off my rockers right now and wonder if I should give names based on the index value.
// ChatGPT Question
// is this viable? 
// const t2doCheckMark = document.querySelector('#t2do-checkmark');

// const t2doArray = [];
// let t2doArrayId = t2doArray.indexOf 

// Answer 
// Select the checkmark element
// const t2doCheckMark = document.querySelector('#t2do-checkmark');

// // Initialize the array
// const t2doArray = [];

// // Example of adding something to the array
// t2doArray.push('exampleTask');

// // Find the index of an element in the array
// let t2doArrayId = t2doArray.indexOf('exampleTask');  // Returns the index of 'exampleTask'

// console.log(t2doArrayId);  // Logs the index (0 if 'exampleTask' is the first element)
