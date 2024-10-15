// del 1

// Syncron Code
console.log(1)
console.log(2)
console.log(3)

// Javascripten följer flödet och utför arbetet ett statement i taget.
for(let i = 0; i < 3; i++) {
    console.log('in the loop, blocking, ' + i)
}

console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)


// del 2

// aSyncron Code
console.log(1)
console.log(2)
console.log(3)

// Den här kodbiten har en delay på 2000 ms sekunder, 
// och därmed blir det så att koden går i bakgrunden,
// där resten utav koden fortsätter läsas upp till dess att 
// delayen gått ut och meddelandet kan sändas till konsolen. 
setTimeout(() => {
    console.log("timer klar")
}, 2000)

console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)


// del 3

// Promises
// Dessa funktioner arbetar i bakgrunden och väntar in data vid ett senare tillfälle.
// const doSomething = (value) => {
//     return new Promise(() => {})
// }

// del 5
// json = javascript object notation
// const json = {
    
// }
// json variablar blir något som man kan använda till att skriva ut data-dumpar genom text.
const user = {
    firstName: 'Slisk',
    email: 'slisk.lindqvist@querzion.com',
    active: true,
    age: 38
}

// stringify lägger ut datan från js i ett enda text stycke.
const jsonUser = JSON.stringify(user)
// textstycken som skrivs ut i JSON format blir strings inom quotation, medan värden skrivs ut 'rent'.
console.log(jsonUser)
console.log(user)

// del 6 (Denna Promise!)

const getData = (data) => {
    return new Promise ((resolve, reject) => {
        // Hämtar data från en 'databas'
        if(data) {
            resolve(data)
        } else {
           reject({ status: 500, message: 'Errol'}) 
        }
    })
}

function json(json) {
    return new Promise((resolve, reject) => {
        try {
            const parsed = JSON.parse(json)
            resolve(parsed)
        } catch (error) {
            reject(error)
        }
    })
}

// getData(jsonUser)
//     .then(data => {
    //         json(data)
    //             .then(bbj => {
        //                 console.log(obj)
        //             })
        //             .catch(err => console.log(err))
//     })
//     .catch()

// Returnera ett Promise (Förenklar syntax utseendet så att det är lättare att läsa.
// än den som är ovanför.) 
getData(jsonUser)
    .then(data => {
        return json(data)
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })


// del 7

// hämta data 
// fetch('url')
//     .then(res => {
//         return res.json()
//     })
//     .then(data => {

//     })

// nedkortad version utav getData mer eller mindre.
fetch('url')
    .then(res => res.json())
    .then(data => {

    })

// fetch är den nedkortade versionen utav en promise så för att förstå vad den gör, så kolla promise delen.










// del 4

// // Här adderas värden för att avlösa processen vid potentiella fel.
// const doSomething = (value) => {
//     return new Promise((resolve, reject) => {
//         if(value === true) {
//             setTimeout(() => {
//                 resolve('Sucess Data')
//             }, 1000)
//         }
//         else{
//             setTimeout(() => {
//                 reject('"Error Message"')
//             }, 1000)
//         }
//     })
// }

// // const test = doSomething('Tjabba!')
// // Det här sättet är för begränsat för att det ska fungera,
// // så det blir att använda en helt annan kod.
// // const test = doSomething(true)

// // console.log(test)


// console.log(1)
// console.log(2)
// console.log(3)

// // beroende på den boolean man skickar med doSomething, 
// // så får man olika svar, 
// // doSomething(true)
// doSomething(false)
//     // resolve
//     .then((data) => {
//         console.log(data)
//     })
//     // reject
//     .catch(err => {
//         console.log(err)
//     })
//     // oavsett svar
//     .finally(() => {
//         console.log('Fääärdig!')
//     })

// console.log(4)
// console.log(5)
// console.log(6)

// del 5 ^