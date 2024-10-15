const btn = document.querySelector("#submit-btn");
const regForm = document.querySelector("#regForm");

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

    // This sets separate fields to red if they are empty. (Redundancy)
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