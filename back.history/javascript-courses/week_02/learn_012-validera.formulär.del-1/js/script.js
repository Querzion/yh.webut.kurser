// Del 1 Submit

const btn = document.querySelector("#submit-btn");
const regForm = document.querySelector("#regForm");

// Här är för att få knappen att fungera, för att skicka ett värde.
// btn.addEventListener("click", e => {
//     e.preventDefault();

//     console.log(e);
// })

// Men det är inte knappen utan formuläret som ska skickas,
// och då kan man göra det såhär istället och det kommer fungera på samma sätt.
// regForm.addEventListener("submit", e => {
//     e.preventDefault();

//     console.log(e);
// })

// Del 2 hämta information

// så utvecklar vi det här så att information tas och sedan skickas.
// regForm.addEventListener("submit", e => {
//     e.preventDefault();
    
//     const firstName = document.querySelector("#firstName");

//     const user = {
//         firstName: firstName.value
//     }

//     console.log(user);
// })

// man kan även göra detsamma på det här sättet.
// regForm.addEventListener("submit", e => {
//     e.preventDefault();
    
//     const firstNameValue = document.querySelector("#firstName").value;

//     const user = {
//         firstName: firstNameValue
//     }

//     console.log(user);
// })

// Här gås igenom ett annat sätt för att plocka ut data ur formuläret, 
// med samma resultat men då för middle name.
// regForm.addEventListener("submit", e => {
//     e.preventDefault();
    
//     const firstNameValue = document.querySelector("#firstName").value;

//     // från regForm formulärets innehåll, sett med start från första input som 0.
//     const middleNameValue = regForm[1].value;

//     const user = {
//         firstName: firstNameValue
//     }

//     // utskriften blir variabeln och inputen.
//     console.log(user);
//     // utskriften blir inputen som variabel värde.
//     console.log(middleNameValue);
// })

// Så utvecklar vi utskriften ytterligare.
// regForm.addEventListener("submit", e => {
//     e.preventDefault();
    
//     const firstNameValue = document.querySelector("#firstName").value;

//     // från regForm formulärets innehåll, sett med start från första input som 0.
//     const middleNameValue = regForm[1].value;

//     // for loop för att automatisera utskriften utav innehållet, med value och indirekt.
//     for (let i = 0; i < regForm.length; i++) {
//         console.log(regForm[i].value);
//         console.log(regForm[i]);
//     }

//     const user = {
//         firstName: firstNameValue
//     }

//     // utskriften blir variabeln och inputen.
//     console.log(user);
//     // utskriften blir inputen som variabel värde.
//     console.log(middleNameValue);
// })

// Del 2.2 färdigställd bas för att hämta information från just detta formulär.

// regForm.addEventListener("submit", e => {
//     e.preventDefault();
    
//     const firstNameValue = document.querySelector("#firstName").value;

//     // från regForm formulärets innehåll, sett med start från första input som 0.
//     const middleNameValue = regForm[1].value;

//     // från regForm formulärets innehåll, med specifikation till input id:et.
//     const lastNameValue = regForm.lastName.value;

//     const addressValue = document.querySelector("#address").value;


//     const user = {
//         firstName: firstNameValue,
//         middleName: middleNameValue,
//         lastName: lastNameValue,
//         address: addressValue,
//     }

//     // utskriften blir variabeln och inputen.
//     console.log(user);
//     // utskriften blir inputen som variabel värde.
//     console.log(middleNameValue);
// })

// regForm.addEventListener("submit", e => {
//     e.preventDefault();
    
//     const firstName = document.querySelector("#firstName").value;

//     // från regForm formulärets innehåll, sett med start från första input som 0.
//     const middleName = regForm[1].value;

//     // från regForm formulärets innehåll, med specifikation till input id:et.
//     const lastName = regForm.lastName.value;

//     const address = document.querySelector("#address").value;

//     // detta fungerar endast om variabel namnet och objekt id överensstämmer med varandra.
//     const user = {
//         firstName,
//         middleName,
//         lastName,
//         address
//     }

//     // utskriften blir variabeln och inputen.
//     console.log(user);

//     // detta är steget efter att man validerat informationen om man validerar det.
//     // fetch("mittapi", {
//     //     method: "POST",
//     // })
// })

// Del 3 Validering

// regForm.addEventListener("submit", e => {
//     e.preventDefault();
    
//     const firstName = document.querySelector("#firstName");

//     // local validation visual error response
//     // if (firstName.value === "") {
//         //     firstName.classList.add("error");
//         //     console.log("firstName is required");
//         //     return
//         // }
        
//     // extern validation visual error response
//     validateFirstName(firstName);

//     // från regForm formulärets innehåll, sett med start från första input som 0.
//     const middleName = regForm[1];

//     // från regForm formulärets innehåll, med specifikation till input id:et.
//     const lastName = regForm.lastName;

//     const address = document.querySelector("#address");

//     // detta fungerar endast om variabel namnet och objekt id överensstämmer med varandra.
//     const user = {
//         firstName: firstName.value,
//         middleName: middleName.value,
//         lastName: lastName.value,
//         address: address.value,
//     }

//     // utskriften blir variabeln och inputen.
//     console.log(user);
// })

// extern validering med visuellt respons för felaktigt användande.
// med denna method så blir det fortfarande att informationen från firstName
// inte hämtas upp och kan inte returneras rätt.
// const validateFirstName = (firstName) => {
//     if (firstName.value === "") {
        
//         const parent = firstName.parentElement;

//         parent.classList.add("error");
        
//         return
//     }
// }

// Del 3.2

// regForm.addEventListener("submit", e => {
//     e.preventDefault();
    
//     const firstName = document.querySelector("#firstName");
        
//     // extern validation visual error response
//     if(!validateFirstName(firstName)) return

//     // från regForm formulärets innehåll, sett med start från första input som 0.
//     const middleName = regForm[1];

//     // från regForm formulärets innehåll, med specifikation till input id:et.
//     const lastName = regForm.lastName;

//     const address = document.querySelector("#address");

//     // detta fungerar endast om variabel namnet och objekt id överensstämmer med varandra.
//     const user = {
//         firstName: firstName.value,
//         middleName: middleName.value,
//         lastName: lastName.value,
//         address: address.value,
//     }

//     // utskriften blir variabeln och inputen.
//     console.log(user);
// })

// const validateFirstName = (firstName) => {
//     if (firstName.value === "") {
        
//         const parent = firstName.parentElement;

//         parent.classList.add("error");
        
//         return false
//     }

//     return true
// }

// Del 3.3 onödiga versionen

// regForm.addEventListener("submit", e => {
//     e.preventDefault();
    
//     const firstName = document.querySelector("#firstName");
//     const middleName = regForm[1];
//     const lastName = regForm.lastName;
//     const address = document.querySelector("#address");

//     if(validateFirstName(firstName) == false) {
//         return
//     }
//     if(validateMiddleName(middleName) == false) {
//         return
//     }

//     const user = {
//         firstName: firstName.value,
//         middleName: middleName.value,
//         lastName: lastName.value,
//         address: address.value,
//     }

//     console.log(user);
// })

// const validateFirstName = (firstName) => {
//     if (firstName.value === "") {
        
//         const parent = firstName.parentElement;
//         parent.classList.add("error");
        
//         return false
//     }

//     return true
// }

// const validateMiddleName = (middleName) => {
//     if (middleName.value === "") {
        
//         const parent = middleName.parentElement;
//         parent.classList.add("error");
        
//         return false
//     }

//     return true
// }

// Del 3.4
// regForm.addEventListener("submit", e => {
//     e.preventDefault();
    
//     const firstName = document.querySelector("#firstName");
//     const middleName = regForm[1];
//     const lastName = regForm.lastName;
//     const address = document.querySelector("#address");

//     if(validateTextInput(firstName) == false) {
//         return
//     }
//     if(validateTextInput(middleName) == false) {
//         return
//     }
//     if(validateTextInput(lastName) == false) {
//         return
//     }
//     if(validateTextInput(address) == false) {
//         return
//     }

//     const user = {
//         firstName: firstName.value,
//         middleName: middleName.value,
//         lastName: lastName.value,
//         address: address.value,
//     }

//     console.log(user);
// })

// const validateTextInput = (input) => {
//     if (input.value === "") {
        
//         const parent = input.parentElement;
//         parent.classList.add("error");
        
//         return false
//     }

//     return true
// }

// Del 3.5 Remove the class 'error' after inputs are made.

regForm.addEventListener("submit", e => {
    e.preventDefault();

    // This removes the class error when the input length is longer then 0.
    for(let i = 0; i < regForm.length; i++) {
        regForm[i].parentElement.classList.remove("error");
    }  
    
    const firstName = document.querySelector("#firstName");
    const middleName = regForm[1];
    const lastName = regForm.lastName;
    const address = document.querySelector("#address");

    // This sets all empty fields to red if empty
    validateTextInput(firstName);
    validateTextInput(middleName);
    validateTextInput(lastName);
    validateTextInput(address);

    // This sets separate fields to red if they are empty.
    // if(validateTextInput(firstName) == false) {
    //     return
    // }
    // if(validateTextInput(middleName) == false) {
    //     return
    // }
    // if(validateTextInput(lastName) == false) {
    //     return
    // }
    // if(validateTextInput(address) == false) {
    //     return
    // }

    const user = {
        firstName: firstName.value,
        middleName: middleName.value,
        lastName: lastName.value,
        address: address.value,
    }

    console.log(user);
})

const validateTextInput = (input) => {
    if (input.value === "") {
        
        const parent = input.parentElement;
        parent.classList.add("error");
        
        return false
    }

    return true
}