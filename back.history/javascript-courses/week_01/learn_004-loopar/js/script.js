const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const users = [
    {name: "Slisk", age: 38, status: true },
    {name: "Katti", age: 33, status: false },
    {name: "Cate", age: 35, status: false },
    {name: "Ace", age: 33, status: false },
    {name: "Evelina", age: 13, status: true }
]

console.log('numbers array; ');
console.log(numbers);
console.log('numbers array length; ');
console.log(numbers.length);

/* FOR LOOP 1 */
// for loop, with a set loop amount.
console.log('FOR LOOP WITH i <= 10; ');
for(let i = 0; i <= 10; i++) {
    console.log('i: ' + i + ', number: ' + numbers[i])
}

// for loop that uses the array length - This starts at zero and loops for the entire length of the array
console.log('FOR LOOP | The wrong way: i <= numbers.length; ');
for(let i = 0; i <= numbers.length; i++) {
    console.log('i: ' + i + ', number: ' + numbers[i])
}

// The not so smart way - This starts at zero and loops for the entire length of the array - 1
console.log('FOR LOOP | The wrong way:  i <= numbers.length - 1; ');
for(let i = 0; i <= numbers.length - 1; i++) {
    console.log('i: ' + i + ', number: ' + numbers[i])
}

// The smart way - This starts at zero and loops up till the entire length of the array
console.log('FOR LOOP | The right way: i < numbers.length; ');
for(let i = 0; i < numbers.length; i++) {
    console.log('i: ' + i + ', number: ' + numbers[i])
}

/* FOR LOOP 2 */
/* HIGH ORDER ARRAY METHOD 1 */
// numbers array
for(let number of numbers) {
    console.log(number)
}

/* Slisk addon */
/* let i = 1;
for(let pipboygrancanariabirdhouseoftheforestsbiggestnumber1 of numbers) {
    console.log(`Number ${i}: ` + pipboygrancanariabirdhouseoftheforestsbiggestnumber1)
    i++;
} */

// users array
for(let user of users) {
    console.log(user)
}

/* HIGH ORDER ARRAY METHOD 2 */
/* FOREACHH LOOP */ // useroftheday = user from the video
users.forEach(function(useroftheday, i) {
    console.log(`index: ${i}`)
    console.log(useroftheday.age)
    console.log(`index position: ${i} is ${useroftheday.name} that is ${useroftheday.age} years old.`)
})

/* HIGH ORDER ARRAY METHOD 3 */ // muffins* = filteredNumbers from the video
const muffinsAll = numbers.filter(function(number) { 
    return true
})
console.log(muffinsAll)

const muffinsLimited = numbers.filter(function(number) { 
    return number < 6
})
console.log(muffinsLimited)

const underageMuffinsOne = users.filter(function(muffins) {
    return muffins.age < 18
})
console.log(underageMuffinsOne)

const underageMuffinsTwo = users.filter(function(muffins) {
    if(muffins.age < 18) {
        return muffins
    }
})
console.log(underageMuffinsTwo)

const underageMuffinsStutus = users.filter(function(muffins) {
    return muffins.status == true
})
console.log(underageMuffinsStutus)

/* HIGH ORDER ARRAY METHOD 4 */ // This is kind of like the FOREACH LOOP, except that the foreach loop doesn't return a value, like this one does.
const newUsers = users.map(function(user, i) {
    /* return {} */                     // Returns no value, just the array length
    /* return { ...user }  */           // Returns the users array information. (... is spread)
    /* return user  */                  // Locked to only use one variable
    return { ...user, isHandsome: true, age: user.age +1 }  // Can add new variables to the array this way. 
    /* return <div>{user.name}</div> */
})

console.log(newUsers)