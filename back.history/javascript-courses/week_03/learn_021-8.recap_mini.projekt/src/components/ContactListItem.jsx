import React from 'react'

const ContactListItem = () => {
  return (
    <li className="flex justify-between items-center">
        <p className="font-semibold text-lg">Hans Mattin-Lassei</p>
        <p>hans@domain.com</p>
        <button className="bg-red-800 text-white px-5 py-1 rounded-lg hover:bg-red-900 transition-colors">Remove Contact</button>
    </li>
  )
}

export default ContactListItem
