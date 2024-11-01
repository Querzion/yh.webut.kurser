import React, {useState} from 'react'
// import fakeApi from "../api/ContactForm.json"

const ContactForm = () => {
    const [formData, setFormData] = useState({fullName: '', email: '', specialist: ''})
    const [Submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const {fullName, value} = e.target
        setFormData({...formData, [fullName]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch ('https://win24-assignment.azurewebsites.net/swagger/v1/swagger.json', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })

        if (res.ok) {
            setSubmitted(true)
            // setFormData({fullName: '', email: '', specialist: ''})
        }

        // alert("Form was submitted.")
    }

    if (Submitted) {
        return (
            <div className="informationbox">
                <h1>Tack för ditt meddelande!</h1>
                <p>Vi återkommer till dig så snart vi kan.</p>
                <button className="btn-green">OK</button>
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
                <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Name" />
                <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                <textarea required name="specialist" value={formData.specialist} onChange={handleChange} placeholder="Message"></textarea>

                <button type="submit">SUBMIT</button>
            </div>
        </form>
    )
}



export default ContactForm