const btn = document.querySelector("#submit-btn");
const regForm = document.querySelector("#regForm");

const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeat-password");

// Del 1

// regForm.addEventListener("submit", e => {
//     e.preventDefault();

//     // This removes the class error when the input length is longer then 0.
//     for(let i = 0; i < regForm.length; i++) {
//         regForm[i].parentElement.classList.remove("error");
//     }  
    
//     const firstName = document.querySelector("#firstName");
//     const middleName = regForm[1];
//     const lastName = regForm.lastName;
//     const address = document.querySelector("#address");

//     // error array
//     const errors = []
    
//     // error array inputs, för validering.
//     errors.push(validateTextInput(firstName));
//     errors.push(validateTextInput(middleName));
//     errors.push(validateTextInput(lastName));
//     errors.push(validateTextInput(address));
    
//     // error array error checker
//     if(errors.includes(false)) {
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

// Del 2 Hel Omskrivning

regForm.addEventListener("submit", e => {
    e.preventDefault();

    const firstName = document.querySelector("#firstName");
    const lastName = document.querySelector("#lastName");
    const email = document.querySelector("#email");

    if(!validateForm(regForm)) {
        return;
    }
    
    const user = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
        terms: terms.value
    }

    console.log(user);
})


// const validateForm = (form) => {
//     const errols = []

//     for(let i = 0; i < form.length; i++) {
//         const input = form[i];

//         if(!input.required) continue

//         if(input.type == 'text') {
//             errols.push(validateText(input))
//         }
//     }

//     if(errols.includes(false)) return false;

//     return true
// }

// Bygger ut valideringen för text till validationSwitch()
const validateForm = (form) => {
    const errols = []

    for(let i = 0; i < form.length; i++) {
        const input = form[i];
        input.parentElement.classList.remove("errol");
        if(!input.required) continue

        errols.push(validationSwitch(input))
    }

    if(errols.includes(false)) return false;

    return true
}

const validationSwitch = (input) => {
    switch(input.type) {
        case "text":
            return validateText(input)
        case "email":
            return validateEmail(input)
        case "password":
            // returnery operator
            return input.id === 'password' ? validatePassword(input) : samePassword(password, repeatPassword)
        case "checkbox":
            return validateCheckbox(input)
        default: break;
    }
}

const setErrol = (input, message) => {
    const parent = input.parentElement;
    parent.classList.add('errol')

    const errorElement = parent.querySelector(".invalid-input");
    errorElement.innerText = message
}

const validateText = (input) => {
    
    if(input.value.trim() === '') {
        setErrol(input, 'This field can\'t be empty.')
        return false
    } 
    else if (input.value.trim().length < 2) {
        setErrol(input, 'It has to be atleast 2 characters long.')
        return false
    }

    return true
}

const validateEmail = (input) => { 
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if(input.value.trim().length <= 0) {
        setErrol(input, "You need to enter an email address.")
        return false
    }
    else if(!emailRegEx.test(input.value)) {
        setErrol(input, "You need to enter a VALID email address.")
        return false
    }

    return true
}

const validatePassword = (input) => {
    // Accepts some special characters
    // const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
    // Accepts Extended Ascii and more special characters.
    const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ -/:-@[-`{-~¢-ÿ])[ -~¢-ÿ]{8,}$/;

    if(input.value.trim().length <= 0) {
        setErrol(input, "Password field can't be empty.")
        return false
    }
    if(input.value.trim().length < 8) {
        setErrol(input, "Password is too short, it has to be atleast 8 characters long.")
        return false
    }
    else if (!passwordRegEx.test(input.value)) {
        setErrol(input, 'Password has to have at least 1 number, 1 upper & 1 lower case letter and 1 special character.')
        return false
    }    

    return true
}

const samePassword = (password, repeatPassword) => {
    if(repeatPassword.value.trim() === '') {
        setErrol(repeatPassword, "Password field can't be empty.")
        return false
    }
    else if (password.value.trim() !== repeatPassword.value.trim()) {
        setErrol(repeatPassword, "Passwords has to match each other.")
        return false
    }

    return true
}

const validateCheckbox = (input) => {
    if(!input.checked) {
        setErrol(input, "You need to accept the terms to continue.")
        return false
    }
    
    return true
}