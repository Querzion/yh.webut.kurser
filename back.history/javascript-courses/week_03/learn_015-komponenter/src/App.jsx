// Man kan returnera ett element såhär
// function App() {

//   return <h1>Hello World</h1>
// }

// eller såhär
// function App() {

//   return (
//      <h1>Hello World</h1>   
//   )
// }

// men inte mer än så. Detta fungerar inte.
// function App() {

//   return (
//      <h1>Hello World</h1>
//      <p>Hello React</p>
//   )
// }  

// I sådana fall behöver man göra såhär.
// Då hamnar de båda i en div i DOM trädet.
// function App() {

//     return (
//         <div>
            // <h1>Hello World</h1>
            // <p>Hello React</p>
//         </div>
//     )
// }  

// Man kan även göra såhär, detta kallas för 'fragment'.
// Det man gör är att skapar öppna och stängda tags utan att specificera.
// När man nu kollar på DOM trädet (html syntax trädet) så istället för att hamna i en div, 
// läggs de som att de skulle skrivits som i den metoden två versioner upp i den här filen. 
// function App() {

//     return (
//         <>
//             <h1>Hello World</h1>
//             <p>Hello React</p>
//         </>
//     )
// }  

// det spelar ingen roll hur du skriver funktionen, bara att den returnerar rätt.
// const App = () => {

//     return (
//         <>
//             <h1>Hello World</h1>
//             <p>Hello React</p>
//         </>
//     )
// }  

// export default App;

// ES7 React extension (rfc = reactFunctionalComponent)
// rfc
// import React from 'react'

// export default function App() {
//   return (
//     <div>
//       asdf videos
//     </div>
//   )
// }

// rfce
// import React from 'react'

// function App() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App

// rafc
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       miffo
//     </div>
//   )
// }

// export default App

// rafce
// import React from 'react'

// const App = () => {
//   return (
//     <div>
    
//     </div>
//   )

// }

// export default App

// Om man nu ska lägga till en klass, så kommer det dyka upp felmeddelanden på console i webbläsaren, 
// för att react är javascript baserat, och därmed är också class något helt annat, för att lösa detta, 
// så ändrar man class till className. Så ALLA class blir className! VIKTIGT!
// import React from 'react'

// const App = () => {
//   return (
//     <div className="bg-primary-subtle">
//       App
//     </div>
//   )

// }

// export default App


import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
        <Navbar />

        <main>
            <Hero />
        </main>

        <Footer />
    </>
  )
}

export default App
