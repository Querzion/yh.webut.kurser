// Hoisted calls of the function 'before' it's created. 
// (The Greet function is actually hoisted to the top, 
// and is read in before the calls, because it's a 'function')
greet()

// Function with a console output becomes a GLOBAL function
function greet() {
    console.log('Hello there!')
}
// Variable declared as a function, becomes a LOCAL function
const greet2 = function() {
    console.log('Hello there from number 2!')
}

// Function is restarted everytime it's called
greet()
greet()

// Variable clothed as a function is used with every call
// A variable function can ONLY be called after it's creation!
greet2()
greet2()

// set a variable and a value
let myName = "Monstro"

// create a variable declared as a function
const test = function() {   // functions return void by default

    return 'stop'

    console.log('test')     // when called output test
    myName = "Slisk";       // then change the value of myName
}

console.log(myName)         // output myName
test()                      // call variable local function test
console.log(myName)         // output myName to see the change

const t = test()            // create variable t and declare it as the function test
console.log(t)              // output variable t in order to see the function output as void

myName = "Mr.Green"         // change the value of myName
console.log(myName)         // output myName to see the change

test()                      // call variable local function test
greet()                     // call global function greet
console.log(myName)         // output myName to see the change



// Create a variable function that can handle an external input
const greet3 = function(name) {
    console.log(`Hej ${name}! Hur är läget?`)
}

greet3('Slisk')
greet3('Ace')
greet3('Robert')
greet3('Ronaldo')

// Create a function that combines two external inputs into one
const getFullName = function(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    return fullName;
}

// create a variable that is declared as the variable function, and give it two inputs
const user1 = getFullName('Mats', 'Lindqvist')
const user2 = getFullName('Mats', 'Birkeland')
const user3 = getFullName('Slisk', 'Lindqvist')
const user4 = getFullName('Slisk', 'Birkeland')
const user5 = getFullName(1, false)

console.log(user1)
console.log(user3)
console.log(user2)
console.log(user4)
console.log(user5)

// create a variable that is declared as a function that changes the 'faulty' outputs to 'unknown'.
// if the first and last name inputs aren't strings, the function returns 'john doe'
// but if there is one input correct and the other not right, then it's also 'john doe'
const getFullNameErrorCorrect = function(firstName, lastName) {
    if (typeof firstName !== "string" || typeof lastName !== "string") {
        return 'John Doe'
    } 
    
    const fullName = `${firstName} ${lastName}`;
    return fullName;
}

const user6 = getFullNameErrorCorrect(1, false)
const user7 = getFullNameErrorCorrect('Slisk')
const user8 = getFullNameErrorCorrect('Slisk', '')

console.log(user6)
console.log(user7)
console.log(user8)

// create a variable that is declared as a function that changes the 'faulty' outputs to 'unknown'.
// this corrects the one variable right and the other wrong
const getFullNameErrorCorrect2 = function(firstName = 'John', lastName = 'Doe') {
    if (typeof firstName !== "string" || typeof lastName !== "string") {
        return 'John Doe'
    } 

    const fullName = `${firstName} ${lastName}`;
    return fullName;
}

const user9 = getFullNameErrorCorrect2('Slisk')
const user10 = getFullNameErrorCorrect2()
// These however are not recognized in a way that so that this function works properly
const user11 = getFullNameErrorCorrect2('', 'Merkele')
const user12 = getFullNameErrorCorrect2(2, 'Merkele')

console.log(user9)
console.log(user10)
console.log(user11)
console.log(user12)

// calculation function
const calculate = function(num1 = 0, num2 = 0) {
    
    let sum = num1 + num2
    return sum
}
const calculate2 = function(num1 = 0, num2 = 0) {
    
    let sum = +num1 + +num2
    return sum
}

const result = calculate(5, 7)
const result2 = calculate(5, '7')
const result3 = calculate2(5, '7')

console.log(result)
console.log(result2)
console.log(result3)


const calculate3 = function(num1 = 0, num2 = 0) {
    if(isNaN(+num1) ||isNaN(+num2)) {
        console.error('The calculation function requires a number.')
        return 0
    }

    let sum = +num1 + +num2
    return sum
}

const result4 = calculate3(5, 'Hej')

console.log(result4)


// Shorter variable function
const calc = (num1 = 0, num2 = 0) => {
    if(isNaN(+num1) ||isNaN(+num2)) {
        console.error('The calculation function requires a number.')
        return 0
    }
    
    let sum = +num1 + +num2
    return sum
} 

const result5 = calc(5, 'Hej')

console.log(result5)


// Even shorter
const easyCalc = (num1, num2) => {
    return +num1 + +num2
}

const res1 = easyCalc(5, 4)
console.log(res1)


//  HOW Short can you go? This Short.
const eCalc = (num1, num2) => +num1 + +num2;
console.log(eCalc(9, 1+1))


// IT CAN BE MADE SHORTER! 
const greet11 = fn => `Hej ${fn}`
console.log(greet11('Slisk'))


myName = "Slisk";
let up = myName.toUpperCase()
console.log(up)
 

const user = {
    firstName: "Slisk",     // local variable 1
    lastName: "Lindqvist",  // local variable 2
    arrow: () => {  // Method 1
        console.log(this)
    },
    regular: function() {   // Method 2
        console.log(this)
    },
    fullName() {    // create a function/method that uses the local variables.
        console.log(this.firstName + ' ' + this.lastName)
    }

}

console.log(this)

user.arrow()
user.regular()
user.fullName()

const myFunction = (num1, num2, callbackFunction) => {
    let sum = num1 + num2

    callbackFunction(sum)
}

myFunction(4, 8, (sum) => {
    console.log(sum)
})
myFunction(4, 8, (sum) => {
    let newSum = sum * 2;
    console.log(newSum)
})