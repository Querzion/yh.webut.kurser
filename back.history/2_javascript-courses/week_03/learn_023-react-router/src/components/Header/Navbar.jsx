import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div>
      <nav className="flex colors">
        <Link to={`/`}>Home</Link>
        <Link to={`/About`}>About</Link>
        <Link to={`/Projects`}>Projects</Link>
        <Link to={`/Services`}>Services</Link>
      </nav>
        <hr />
    </div>
  )
}

export default Navbar