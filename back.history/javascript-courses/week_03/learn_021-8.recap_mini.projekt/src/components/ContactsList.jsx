import React from 'react'
import ContactListItem from './ContactListItem'

const ContactsList = () => {
  return (
    <div>
        <div className="flex justify-between items-center mb-6">
            <p className="font-bold text-xl">Name</p>
            <p className="font-bold text-xl">Email</p>
            <p></p>
        </div>
        <ul className="space-y-4">
            <ContactListItem />
            <ContactListItem />
            <ContactListItem />
            <ContactListItem />
        </ul>
    </div>
  )
}

export default ContactsList
