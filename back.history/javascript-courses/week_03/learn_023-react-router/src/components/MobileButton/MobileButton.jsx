import React from 'react'
import "./MobileButton.scss"

const MobileButton = () => {
  return (
    <div className="relative">
        <button className="btn btn-primary absolute">
            <i className="fa-solid fa-bars"></i>
        </button>
    </div>
  )
}

export default MobileButton