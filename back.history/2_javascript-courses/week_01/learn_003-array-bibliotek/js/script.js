/* 
//  OUTPUT STORED VALUES IN A VARIABLE
const user = {
    firstName: "Slisk",
    lastName: "Lindqvist"
}

console.log(user);
console.log(user['firstName']);
console.log(user.firstName);
console.log(user['lastName']);
console.log(user.lastName);

//  OUTPUT STORAED VALUES IN AN ARRAY
const names = ["x", "y", "z"];

console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]); */


/* Since this array [] is a constant, it's data is static. 
A constant variable can hold multiple variables and their values,
if it's in a function bracket, this array's values are static. */
const names = ["Slisk", "Katti", "Cate"];
console.log(names);


/* WRONG WAY */ // Even if it's the same information, it's a change, which can't be done. #STATIC
/* names = ["Slisk", "Katti", "Cate"];
console.log(names); */


/* RIGHT WAY */ // This is how you change the array value correctly. #DYNAMIC
names[2] = 'Ace';   // Add Ace to Array position 3, this deletes Cate
console.log(names);


// This is how you Add to an Array
names[3] = 'Cate';  // Add Cate to Array position 4, this adds Cate again.
console.log(names);


// Add after the last entry without writing over any data.
names[names.length] = 'Lennart';    // Add Father
console.log(names);
names[names.length] = 'Tove';       // Add Mother
console.log(names);
names[names.length] = 'Laila';      // Add Sister
console.log(names);
names[names.length] = 'Helena';     // Add Sister
console.log(names);
names[names.length] = 'Kim';        // Add Corpse
console.log(names);
names[names.length] = 'Zimona';     // Add Former Step-mother
console.log(names);
names[names.length] = 'Marylin';    // Add Sister
console.log(names);
names[names.length] = 'Evelina';    // Add Sister
console.log(names);


// Add before the first entry without writing over any data.
names.unshift('Christian')          // Add Mothers Cousin
console.log(names);
names.unshift('Therese')            // Add his Ex.
console.log(names);


// Delete first entry in the array with shift
names.shift();                      // Remove Cousin Ex.
console.log(names);
names.shift();                      // Remove Cousin.
console.log(names);


// Extends the last entry and adds data without writing over any values.
names.push('Buddha');               // Add Uncle
console.log(names);
names.push('Tommy');                // Add Uncle
console.log(names);
names.push('Royne');                // Add Uncle
console.log(names);
names.push('Ignorance');            // Add Stranger
console.log(names);


// Delete Last entry in the array with pop
names.pop();                        // Remove Stranger
console.log(names);


// Find the index number of a person in the array
const indexOfPerson = names.indexOf('Kim');                     // Find Brother
console.log(indexOfPerson);


// Change the index of the person to something else in the array
names[indexOfPerson] = "Corpse";                                // Change to Brothers 'Fate'
console.log(names);


// Delete a searched entry anywhere in the array with the indexOfPerson
const removeFromindexOfPersonOne = names.splice(indexOfPerson, 1);  // Remove Corpse
console.log(names);

const removeFromindexOfPersonTwo = names.splice(names.indexOf('Ace'), 1);  // Remove Corpse
console.log(names);


// Delete an entry anywhere in the array
const removeFromSpecificArrayValue = names.splice(7, 1);        // Remove Former Step-mother
console.log(names);

const removeMultipleValuesArrayOne = names.splice(9, 3);       // Remove Uncles
console.log(names);

const removeMultipleValuesArrayTwo = names.splice(3, 2);        // Remove Parents
console.log(names);

const removeMultipleValuesArrayThree = names.splice(3, 4);      // Remove Sisters
console.log(names);


// Delete Entries and Add to it
// From Array index 3, delete 0 entries after, and add three entries.
const removeAndAddOne = names.splice(3, 0, 'Alva', 'Tisch', 'Anna-Maj');
console.log(names);

// From Array index 3, delete 1 entries after, and add one entry.
const removeAndAddTwo = names.splice(3, 1, 'Pain');
console.log(names);

// From Array Index 1, delete the next 5 entries and Add a bunch of dogs.
const removeAndAddThree = names.splice(1, 5, 'Ronja', 'Amigo', 'San', 'King', 'Mozart', 'Cindy', 'Yatzy', 'Lady', 'etc. etc. etc.');
console.log(names);