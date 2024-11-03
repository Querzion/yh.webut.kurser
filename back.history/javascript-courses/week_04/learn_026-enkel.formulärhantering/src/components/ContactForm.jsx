import React, {useState} from 'react'
// import fakeApi from "../api/ContactForm.json"

const ContactForm = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''})
    const [errols, setErrols] = useState({})
    const [Submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})

        if (value.trim() === "") {
            setErrols(prevErrors => ({...prevErrors, [name]: `The ${name} field is required.`}))   
        } else {
            setErrols(prevErrors => ({...prevErrors, [name]: ""}))
        }
    }

    const handleOk = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrols = {}
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === "") {
                newErrols[field] = `The ${field} field is required.`
            }
        })

        if (Object.keys(newErrols).length > 0) {
            setErrols(newErrols)
            return
        }

        const res = await fetch ('link-here', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })

        if (res.ok) {
            setSubmitted(true)
            setFormData({name: '', email: '', message: ''})
        }

        // alert("Form was submitted.")
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