// Variabler = någonting som vi lagrar information i

/* firstName = "Slisk";        // global variabel */
/* var firstName = "Slisk";    // global variabel */

/* ### WRONG WAY */
/*  // Errors will show because this version isn't capable of using the LOCAL variable
{   // Scope (symbolise a function, and is closed.)
    let firstName = "Slisk";    // local variable
}
console.log(firstName); */

/* ### RIGHT WAY */
/* {   // Local variables
    let firstName = "Slisk";
    console.log(firstName);
} */

/* ### RIGHT WAY */
// This works, because the variable is global, and the console output while being in a bracket, still has access to variables outside of it's 'function' boundaries.
/* let firstName = "Slisk";
{
    console.log(firstName);
} */

/* ### COMBINED 1 */
/* let firstName = "Slisk";
{
    const lastName = "Lindqvist";
    console.log(firstName);
}
console.log(lastName); */

/* ### COMBINED 2 */
/* let firstName = "Slisk";
const lastName = "Lindqvist";
{
    console.log(firstName);
}
console.log(lastName); */

/* ########################################################################### VARIABLE LIMITS */
let firstName = "Slisk";
const lastName = "Lindqvist";
const age = 38;

console.log(firstName);
console.log(lastName);
console.log(age);

/* firstName = 'Hans'; */
/* lastName = "Andersson"; // Since lastName is a constant, it's not a variable that can be changed! */

/* console.log(firstName);
console.log(lastName); */

/* Javascript isn't very angry at you for using strange variable values, 
so it will let you display the name as an integer if you want. 
It isn't as strict as other languages where you have to make different variables, 
for different purposes. */

/* firstName = 42;     // integer
firstName = '42';   // string

console.log(firstName);
console.log(lastName);

firstName = 'Slisk'; */


/* ### VARIABLE DATATYPES */
/* 
    String
    Number - Integer / Float / Decimal
    Boolean
    Null
    Undefined
    Object
    Array

*/

/* let datatype;   // Undefined */
/* let datatype = "en text";   // String */
/* let datatype = 42;  // Number */
/* let datatype = null;    // Null */
/* let datatype = true;    // Boolean */
/* let datatype = {
    firstName: 'Slisk',
    //lastName: 'Lindqvist'
};  // Object */
/* let datatype = [1, 2, 3, 4];    // Array */

/* console.log(typeof datatype); */

/* ### TEXT MANIPULATION */
/* // In order to quote something in text, do it with what you didn't open the string with ' / " backslash can also be used in order to add a symbol or if it's of the same type. 
let text = 'hejsan "asdf" xx';
console.log(text);
text = "hejsan 'asdf' xx";
console.log(text);
text = "hejsan \"asdf\" xx";
console.log(text);

text = 'Hej jag heter ' + firstName + ' och är 38 år gammal.';
console.log(text);

text = "Hej jag heter Slisk och är " + age + " år gammal.";
console.log(text);

text = `Hej jag heter Slisk och är 38 år gammal.`;
console.log(text);

text = `Hej jag heter ${firstName} och är ${age} år gammal.`;
console.log(text); */

console.log('__________Breakline!__________');
console.log('Math');

let num1 = 5;
let num2 = 7;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);

console.log('Random Number');
let randomNr = Math.random();
console.log(randomNr);

randomNr = Math.random() * 100 ;
console.log(randomNr);

randomNr = Math.round(randomNr);
console.log(randomNr);

console.log("NUMBER 1");
console.log("num1 is " + num1);
num1 = num1 + 1;
console.log("num1 is " + num1);
num1 += 4;
console.log("num1 is " + num1);
num1++;
console.log("num1 is " + num1);
num1--;
console.log("num1 is " + num1);

console.log("NUMBER 2");
console.log("num2 is " + num2);
num2 += 2;
console.log("num2 is " + num2);

console.log("NUMBERS TO STRING")
num1 = 5;
console.log("num1 is " + num1);
num2 = 7;
console.log("num2 is " + num2);

console.log("num1 & num2 combined are ");
console.log(num1 + num2);

num1 = 5;
num2 = '7';
console.log("num2 is now a string and they are now ");
console.log(num1 + num2);
console.log("+ is added before num2, and they are now ");
console.log(num1 + +num2);

console.log('__________Breakline!__________');
console.log("BOOLEAN num1 is");
console.log(num1);
console.log("BOOLEAN num2 is");
console.log(num2);
console.log("BOOLEAN num1 is equal to num2?");
console.log(num1 == num2);
console.log("BOOLEAN num1 is num2 =");
console.log(num1 = num2);
console.log("BOOLEAN num1 is");
console.log(num1);
console.log("BOOLEAN num2 is");
console.log(num2);
console.log("BOOLEAN num1 is equal to num2?");
console.log(num1 == num2);

console.log('__________Breakline!__________');
num1 = 5;
num2 = '5';
console.log("BOOLEAN num1 is a integer");
console.log(num1);
console.log("BOOLEAN num2 is a string");
console.log(num2);
console.log("BOOLEAN num1 is equal to num2? == ");
console.log(num1 == num2);
console.log("BOOLEAN is True & False, it tests the values against each other.");
console.log("Test the datatype variabel this way! === ");
console.log(num1 === num2);


console.log('__________Breakline!__________');
const isLoggedIn = false;   // isLogged in is false

console.log("BOOLEAN true");
console.log(isLoggedIn == true);    // checks if isLoggedIn is true
console.log("BOOLEAN not true");
console.log(!isLoggedIn == true);   // ! reverts the statement to the opposite isLoggedIn not true

console.log("BOOLEAN true");
if (isLoggedIn == true) {
    console.log("Welcome back!");
} 

console.log("BOOLEAN not true");
if (!isLoggedIn == true) {
    console.log("Welcome back!");
} 


/* This part checks if the variable is null or not. */
console.log('__________Breakline!__________');
const string = ''

console.log("BOOLEAN truthy empty string1");
if(string) {
    console.log("det finns ett 'thruthy' värde");
}

console.log("BOOLEAN truthy string2 = a character");

const string2 = 'a'

if(string2) {
    console.log("det finns ett 'thruthy' värde");
}

console.log('__________Breakline!__________');
console.log("BOOLEAN truthy number1 = a number");
const number = 20;
if(number) {
    console.log("det finns ett 'thruthy' värde");
}

console.log("BOOLEAN truthy number2 = 0");
const number2 = 0;
if(number2) {
    console.log("det finns ett 'thruthy' värde");
}

console.log('__________Breakline!__________');

console.log("THE NULL VARIABLE");
// Lets try a badly named variable. ;P 
let nteuhoan = null;

console.log(`Variable nteuhoan is ${nteuhoan}`);
console.log(nteuhoan);

if(nteuhoan) {  // if nteuhoan has a variable
    console.log(`Welcome ${nteuhoan}`);
}

if(nteuhoan != null) {  // if nteuhoan has a variable and that it is not null
    console.log(`Welcome ${nteuhoan}`);
}

nteuhoan = "Slisk Lindqvist";
console.log(`Variable nteuhoan is ${nteuhoan}`);

if(nteuhoan) {
    console.log(`Welcome ${nteuhoan}`);
}

console.log('__________Breakline!__________');

const user = {
    firstName: "Slisk",
    lastName: "Lindqvist",
    age: 38,
    isValidated: false,
    address: {
        street: "Västgötagatan",
        nr: 10,
        door: "J",
        postalCode: 68140,
        city: "Kristinehamn"
    },  // Really important not to miss that last comma character here.
    phoneNumber: '0046700797082',
    phoneNumbers: ["07-007 97 082", "0552-10770"] // Array
}


console.log('__________Breakline!__________');
console.log("This gives out all information at once, and becomes chaotic.");
console.log(user);


console.log('__________Breakline!__________');
console.log("This is specified information.");
console.log(user.firstName);
console.log(`First Name: ${user.firstName}`);
console.log(user.lastName);
console.log(`Last Name: ${user.lastName}`);
console.log(user.age);
console.log(`Age: ${user.age}`);
console.log(user.isValidated);
console.log(user.address.street);
console.log(user.address.nr);
console.log(user.address.door);
console.log(user.address.postalCode);
console.log(user.address.city);
console.log(user.phoneNumber);
console.log(user.phoneNumbers[0]);
console.log(user.phoneNumbers[1]);

console.log('__________Breakline!__________');
// We can change the information that is inside of user like this. 

user.firstName = "Nån annan.";
console.log(user.firstName);
console.log(`First Name: ${user.firstName}`);

console.log("Add the email afterwards.");
user.email = "slisk.lindqvist@querzion.com";
console.log(`E-Mail: ${user.email}`);

console.log('__________Breakline!__________');
console.log('ARRAY');

const fibonacci = [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacci);

user.firstName = "Slisk";

/* const users = [
    user,
    user,
    user
]
console.log(users); */

users = [
    { name: "Texaco", age: 10, isActive: true },
    { name: "Marlboro", age: 99, isActive: true },
    { name: "Isterband", age: 50, isActive: false }
]

console.log(users);
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);