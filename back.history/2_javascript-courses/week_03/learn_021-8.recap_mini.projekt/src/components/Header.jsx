import React from 'react'

const Header = ({title}) => {
  return (
    <div className="bg-sky-800 text-white text-center py-10">
      <h1 className="text-4xl font-semibold">{title}</h1>
    </div>
  )
}

export default Header
