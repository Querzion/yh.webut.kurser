import React from 'react'

const AddContactForm = () => {
  return (
    <form className="flex">
        <input type="text" className="border border-sky-800 flex-1 px-2 py-1 rounded-l-lg" />
        <button className="bg-sky-800 text-white font-semibold px-5 rounded-r-lg hover:bg-sky-900 transition-colors">Add Contact</button>
    </form>
  )
}

export default AddContactForm
