import React from 'react'
import Contact from './Contact'

const ContactList = () => {

    const contact = {
        name: "Therese Lidbom",
        email: "therese@domain.com",
    }

  return (
    <div className="contact-list">
        
        <Contact name="Hans Mattin-Lassei" email="hans@domain.com" />
        <Contact name="Tommy Mattin-Lassei" email="tommy@domain.com" />
        <Contact name="Therese Lidbom" email="therese@domain.com" />
        <Contact name={contact.name} email={contact.email} />


        
        {/* <div className="contact">
            <p className="name">Hans Mattin-Lassei</p>
            <p className="email">hans@domain.com</p>
        </div>
        <div className="contact">
            <p className="name">Tommy Mattin-Lassei</p>
            <p className="email">tommy@domain.com</p>
        </div>
        <div className="contact">
            <p className="name">Therese Lidbom</p>
            <p className="email">therese@domain.com</p>
        </div> */}
    
        

    </div>
  )
}

export default ContactList
