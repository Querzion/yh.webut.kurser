import React, { useState } from 'react'

// Conditional Rendering innebär att man kan skapa och dölja objekt baserat på krav som man ställer in,
// istället för att allt renderas samtidigt så fördelar man arbetet byggt på behovet av att vara där.

function App() {

  const [name, setName] = useState("Slisk")
  // const [name, setName] = useState("")
  // const [showName, setShowName] = useState(true)
  const [showName, setShowName] = useState(false)

  const [isActive, setIsActive] = useState(false)

  const [isLoaded, setIsLoaded] = useState(true)

  // toggle true false på showName
  const toggleName = () => {
    setShowName(value => !value)
  }


  if(!isLoaded) {
    return (
      <div>Loading ...</div>
    )
  }

  return (
    <div className="container">
      <h1>Conditional Rendering</h1>

      {/* True false statement, that if true show otherwise not */}
      {/* { showName ? <p>{name}</p> : <p>Inget namn</p> } */}
      {/* { showName && <p>{name}</p> } */}

      {/* True false statement, that if not empty show otherwise not */}
      {/* Detta är ett trusy / falsy värde som det utgår ifrån. */}
      {/* { name && <p>{name}</p> } */}

      {/* <button onClick={toggleName}>Show Name</button> */}
      <button className="btn" onClick={toggleName}>{showName ? 'Hide Name' : 'Show Name'}</button>

      {showName && <p>Name: {name}</p>}

      <button className="btn" onClick={() => {
        setIsActive(prev => !prev)
      }}>Click me</button>

      {/* if it's true, then active will be added, if it's not, then it's removed. */}
      {/* <div className={`square ${isActive && 'active'}`}> */}
      {/* <div className={`square ${isActive === true &&  'active'}`}> */}
      <div className={`square ${isActive ? 'active' : ''}`}>

      </div>
    </div>
  )
}

export default App
