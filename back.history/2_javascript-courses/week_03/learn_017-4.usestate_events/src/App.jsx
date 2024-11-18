import React, { useState } from 'react'

// function App() {

//   // let counter = 0;

//   // useState(false)
//   // useState('932930')
//   // useState('uhesanthu')
//   // useState('uhe43')
//   // useState(0)

//   // const [state, setState] = useState(0)
//   const [counter, setCounter] = useState(0)

//   const handleClick = () => {
//     // counter++;

//     setCounter(prev => prev + 1)

//     // asyncad aktion
//     // console.log(counter);
//   }
//   // console.log(counter);

//   return (
//     <div className="container">
//       <h1>{ counter }</h1>
//       <button onClick={handleClick}>Increment</button>
//     </div>
//   )
// }

// function App() {

//   // let counter = 0;

//   // useState(false)
//   // useState('932930')
//   // useState('uhesanthu')
//   // useState('uhe43')
//   // useState(0)

//   // const [state, setState] = useState(0)
//   const [counter, setCounter] = useState(0)

//   const handleClick = (amount) => {
//     // counter++;

//     setCounter(prev => prev + amount)

//     // asyncad aktion
//     // console.log(counter);
//   }
//   // console.log(counter);

//   return (
//     <div className="container">
//       <h1>{ counter }</h1>
//       <div className="grid2">
//         <button className="btn" onClick={() => handleClick(1)}>Increment by 1</button>
//         <button className="btn" onClick={() => handleClick(-1)}>Subtract by 1</button>
//         <button className="btn" onClick={() => handleClick(10)}>Increment by 10</button>
//         <button className="btn" onClick={() => handleClick(-10)}>Subtract by 10</button>
//         <button className="btn" onClick={() => handleClick(100)}>Increment by 100</button>
//         <button className="btn" onClick={() => handleClick(-100)}>Subtract by 100</button>
//         <button className="btn" onClick={() => handleClick(1000)}>Increment by 1000</button>
//         <button className="btn" onClick={() => handleClick(-1000)}>Subtract by 1000</button>
//       </div>
//     </div>
//   )
// }


function App() {

  const [counter, setCounter] = useState(0)

  const handleClick = (amount) => {
    setCounter(prev => {
      return prev + amount
    })
  }

  const [firstName, setFirstName] = useState("Slisk")
  const [lastName, setLastName] = useState("Lindqvist")
  
  // This doesn't update changes and is locked to the prior information before changes.
  // const [fullName, setFullName] = useState(firstName + ' ' + lastName)
  // So this is a better solution if you want fullName to also change with the button press.
  // Derrived states
  const fullName = firstName + ' ' + lastName

  return (
    <div className="container">
      <h1>{ counter }</h1>
      <div className="grid2">
        <button className="btn" onClick={() => handleClick(1)}>Increment by 1</button>
        <button className="btn" onClick={() => handleClick(-1)}>Subtract by 1</button>
        <button className="btn" onClick={() => handleClick(10)}>Increment by 10</button>
        <button className="btn" onClick={() => handleClick(-10)}>Subtract by 10</button>
        <button className="btn" onClick={() => handleClick(100)}>Increment by 100</button>
        <button className="btn" onClick={() => handleClick(-100)}>Subtract by 100</button>
        <button className="btn" onClick={() => handleClick(1000)}>Increment by 1000</button>
        <button className="btn" onClick={() => handleClick(-1000)}>Subtract by 1000</button>
      </div>

      <div>
        <p>{firstName} {lastName}</p>
        <p>{fullName}</p>

        <button className="btn" onClick={() => {
          setLastName('Birkeland')
        }}>Change Name</button>
      </div>
    </div>
  )
}

export default App
