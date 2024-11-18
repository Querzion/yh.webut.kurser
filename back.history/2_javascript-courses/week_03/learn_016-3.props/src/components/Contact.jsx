import React from 'react'

// const Contact = () => {

//     return (
//         <div className="contact">
//             <p className="name">Slisk Lindqvist</p>
//             <p className="email">slisk.lindqvist@querzion.com</p>
//         </div>
//     )
// }

// Detta är props för enkelhetens skull.
// const Contact = (props) => {

//     return (
//         <div className="contact">
//             <p className="name">{props.name}</p>
//             <p className="email">{props.email}</p>
//         </div>
//     )
// }

// och fungerar såhär, så vi kör en deconstruct
// const Contact = (props) => {

//     const test = {
//         name: "Slisk",
//         email: "slis.lindqvist@querzion.com"
//     }
    
//     // destructureing 
//     const {name, email} = test


//     return (
//         <div className="contact">
//             <p className="name">{props.name}</p>
//             <p className="email">{props.email}</p>
//         </div>
//     )
// }

// och slutresultatet blir detta.
const Contact = ({ name, email }) => {

    return (
        <div className="contact">
            <p className="name">{name}</p>
            <p className="email">{email}</p>
        </div>
    )
}

export default Contact
