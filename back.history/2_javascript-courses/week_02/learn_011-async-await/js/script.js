// Del 1

async function test() {
    return 'Tjipp Tjipp'
}

const hello = test()
console.log(hello)

// Del 2

// Arrowfunction async
const getData = async () => {
    return 'Tjabba Tjena Hallå'
}

const test2 = getData()
console.log(test2)

// Del 3
// dold för att visa output flödet på async/await delen.
// fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })

// Await fungerar på samma sätt som ovanstående fetch funktion, 
// men går inte att använda separat 
// const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')

// utan måste appliceras ihop med async som på detta vis, 
// här är postlimiten höjd för att urskilja fetch och await responserna.
// aSyncen blir en promise med vänte tid, så innehållet postas senare.
// console outputs är satta för att visa informations flödet. 
console.log(1)
const getData2 = async () => {
    console.log(2)
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    console.log(res)
    console.log(3)
    const data = await res.json()
    console.log(4)
    console.log(data)
    console.log(5)
}
console.log(6)
getData2()
console.log(7)
