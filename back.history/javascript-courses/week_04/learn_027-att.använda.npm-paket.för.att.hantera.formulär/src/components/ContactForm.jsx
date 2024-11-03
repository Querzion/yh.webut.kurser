import React, {useState} from 'react'
import axios from 'axios'
// import fakeApi from "../api/ContactForm.json"

const ContactForm = () => {
    const [Submitted, setSubmitted] = useState(false)


    const handleOk = () => {
        setSubmitted(false)
    }

    if (Submitted) {
        return (
            <div className="informationbox">
                <h1>Tack för ditt meddelande!</h1>
                <p>Vi återkommer till dig så snart vi kan.</p>
                <button className="btn-green" onChange={handleOk}>OK</button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className="headline ta">
                <h1>SEND US A MESSAGE</h1>
                <p>Fill out this form to get in touch with us.</p>
            </div>
            <div className="body">
                <div className="formGroup">
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                    <span>{errols.name && errols.name}</span>
                </div>

                <div className="formGroup">
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                    <span>{errols.email && errols.email}</span>
                </div>
                
                <div className="formGroup">
                    <textarea required name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
                    <span>{errols.message && errols.message}</span>
                </div>

                <button type="submit">SUBMIT</button>
            </div>
        </form>
    )
}

export default ContactForm