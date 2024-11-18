

/* const btn = document.getElementById('btn'); */

// Create references to DOM elements.
const btn = document.querySelector('#btn')
const stopDisco = document.querySelector('#btn2')
const square = document.querySelector('.square')
const ball = document.querySelector('.ball')
const para = document.querySelector('.para')
const pList = document.querySelectorAll('.para')
/* const pList2 = document.getElementsByClassName('.para') */

console.log(btn)
console.log(para)
console.log(pList)
/* console.log(pList2) */



pList.forEach((node) => {
    let ns = node.style;

    ns.backgroundColor = "black";
    ns.color = "white";
    ns.border = "5px solid #599874";
    ns.borderRadius = ".8rem";
    ns.width = "400px";
    ns.fontSize = "2rem";
    ns.padding = "1.5rem";
    ns.fontFamily = "sans-serif";
    
})

// Add/Remove class to square on mouseover & mouseleave
square.addEventListener('mouseover', () => {
    console.log('mouse over')
    square.classList.add('bg-green')
})
square.addEventListener('mouseleave', () => {
    square.classList.remove('bg-green')
})

console.log(square.getAttribute('class'))
console.log(square.getAttribute('class'))

// Add/Remove class to square at click
square.addEventListener("click", () => {

    square.classList.toggle('bg-red')
    
    console.log('Clicked the background')
    console.log(square.getAttribute('class'))
})
btn.addEventListener("click", () => {

    console.log(event)

    square.classList.remove('bg-red')
    square.classList.toggle('bg-green')
})

// Ball is created, and when it's clicked a message is outputed for the background and ball
// because I clicked through the ball
/* ball.addEventListener("click", () => {
    console.log('Clicked the ball')
}) */

// Ball is created, and when it's clicked a message is outputed for the ball
// it is now a separate layer that doesn't click both the ball and background layers
ball.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log('Clicked the ball')
})

// These #form queryselectors here are the same, this one is declared prior to use
// and is used when you have in mind to change it multiple times.
const form = document.querySelector("#form"); 
// and the second is declared when it is to be used and what it's focus is on
// instead of this code 
form.addEventListener('submit', () => {}) 
// is in use for one time use or one time specifications. While the prior is for
// multi use / changes. It's combined instead of separated.
document.querySelector('#form').addEventListener('submit', () => {})


// preventDefault, changes the default behavior of an object.
form.addEventListener("submit", (e) => {
    e.preventDefault()      // Usually a form reloads the page, this changes that.
    console.log('submitted')
})

// This is a more obvious example, and it's also changed with a rerouting.
document.querySelector('#link').addEventListener('click', (e) => {
    e.preventDefault();     // Usually a link when pressed opens the designated page, this changes that. 

    // Rerouting of the link!
    console.log("HAHAHA! Trodde du va!?")
    window.location.href = "https://aftonbladet.se"
})

// remove event listener after it's been used.
/* btn.addEventListener('click', e => {

    square.classList.toggle('bg-white')
}) */

// created a separate function variable
const addOrRemoveBg = (e) => {
    square.classList.toggle('bg-white')
}  

// linked the new function variable to the button click
/* btn.addEventListener('click', addOrRemoveBg) */

// removes the latest btn click functionality
stopDisco.addEventListener('click', e => {
    
    btn.removeEventListener("click", addOrRemoveBg)
})

// make it only viable to change the background once,
// which will have the same effect as stop the disco.
btn.addEventListener('click', addOrRemoveBg, { once: true })