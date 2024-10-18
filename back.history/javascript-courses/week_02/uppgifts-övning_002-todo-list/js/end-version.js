// #############################################################################
// TODO LIST (FRÅN | DOM - SKAPA ELEMENT MED JAVASCRIPT & ARRAY) 
// #############################################################################

// DOM elements
const t2doBox = document.querySelector("#t2do-box");
const t2doForm = document.querySelector('#t2do-form');
const t2doUl = document.querySelector('#t2dos-field');
const t2doInput = document.querySelector('#t2do-input');

const t2doCheckbox = document.querySelector(".t2do-checkmark");
const t2doReminder = document.querySelector(".t2do-text");

/* const deleteT2do = document.querySelector("#delete2-btn"); */
const saveT2doList = document.querySelector("#save-t2do-list-btn");

// create an array storage
const t2doArray = [];

t2doForm.addEventListener('submit', e => {
    e.preventDefault();

    if (t2doInput.value === "") return; // if the input is empty, stop its output

    const newT2do = createT2doElement(t2doInput.value);

    // t2doUl.insertAdjacentElement("beforeend", newT2do);
    t2doUl.insertAdjacentElement("afterbegin", newT2do);
    t2doInput.value = "";

    // un
    saveT2doList.classList.remove("hidden");
});

// Export the createCommentElement function
function createT2doElement(value) {

    // add input to next spot in the array
    t2doArray.push(value)

    let t2doArrayId = t2doArray.indexOf(value)
    
    
    // Array Errol Test
    console.log(t2doArrayId);


    // Creating the elements, and setting the types, 
    // id's and classes for the left side. 
    const t2do = document.createElement('li');
    t2do.classList.add("t2do");
    
    const t2doLeft = document.createElement('div');
    t2doLeft.classList.add("t2do-left");

    const t2doCheck = document.createElement('input');
    t2doCheck.setAttribute("id", `t2do-checkmark${t2doArrayId}`);
    t2doCheck.setAttribute("type", "checkbox");
    t2doCheck.classList.add("t2do-checkmark", "hidden");

    const t2doLabel = document.createElement('label');
    t2doLabel.setAttribute("for", `t2do-checkmark${t2doArrayId}`);
    
    const t2doText = document.createElement("p");
    // Assuming t2doArray is already defined and contains items
    if (t2doArray.length > 0) {
        // Access the last item in the array
        t2doText.textContent = `${t2doArray[t2doArray.length - 1]}`;
    } else {
        // If array is empty, display a placeholder message
        t2doText.textContent = "No items in the list.";
    }

    // putting the left side together
    t2doLabel.appendChild(t2doText);
    t2doLeft.appendChild(t2doCheck);
    t2doLeft.appendChild(t2doLabel);

    // Creating the elements and setting the types,
    // id's and classes for the right side.
    const t2doRight = document.createElement('div');
    t2doRight.classList.add("t2do-right");

    const t2doDelete = document.createElement("button");
    t2doDelete.classList.add("t2do-btn")

    const t2doDeleteIcon = document.createElement("i");
    t2doDeleteIcon.classList.add("fa-solid", "fa-trash");

    // putting the right side together (I forgot about the trash icon, 
    // but ChatGPT helped).
    t2doDelete.appendChild(t2doDeleteIcon);
    t2doRight.appendChild(t2doDelete)

    // putting together the main post layout.
    t2do.appendChild(t2doLeft);
    t2do.appendChild(t2doRight);
    


    // TOGGLE TODO DONE
    t2do.addEventListener('click', e => {
        t2doText.classList.toggle("t2do-checked");
    })



    // DELETE TODO (ChatGPT)
    t2doDelete.addEventListener('click', e => {
        e.stopPropagation(); // Prevents the toggle event when clicking delete button
        
        // Remove the element from the DOM
        t2do.remove();
        
        // Remove the item from the array
        t2doArray.splice(t2doArrayId, 1);

        // Log the array to verify the deletion
        console.log("Updated To-do Array: ", t2doArray);
        
        // Optionally hide the save button if the list is empty
        if (t2doArray.length === 0) {
            saveT2doList.classList.add("hidden");
        }
    });



    return t2do;
}

function deleteTodoReminder() {

}

function saveT2doReminderList () {

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
