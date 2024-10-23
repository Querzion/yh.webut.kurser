import React from 'react'

import {useState} from "react"
import {ToggleButton} from "./components/ToggleButton"


function App() {

  const [numbers, setNumbers] = useState([0])

  const add = () => {
    const nextNumber = numbers.length
    setNumbers(prevNumbers => [nextNumber, ...prevNumbers])
  }

  return (
    <div className="container">
      <button className="btn btn-add" onClick={add}>Lägg till</button>
    
      {
        numbers.map((number, index) => (
          <ToggleButton number={number} key={number}/>
        ))
      }
    </div>
  )
}

export default App
