import React, {useState} from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form"

const ContactForm = () => {
    const [Submitted, setSubmitted] = useState(false)
    const {register, handleSubmit, formState: {errors}, reset} = useForm()


    const handleOk = () => {
        setSubmitted(false)
        reset()
    }

    const onSubmit = async (data) => {
        // const res = await axios.post("insert link here", data, {
        //     headers: {
        //         "Content-Type": "application/json",
        //     }
        // })

        const res = await axios.post("insert link here", data)

        if (res.status === 200) {
            setSubmitted(true)
            reset()
        }
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
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="headline ta">
                <h1>SEND US A MESSAGE</h1>
                <p>Fill out this form to get in touch with us.</p>
            </div>
            <div className="body">
                <div className="formGroup">
                    <input type="text" placeholder="Name" {...register('name', { required: 'The name is required.'})} />
                    <span>{errors.name && errors.name.message}</span>
                </div>

                <div className="formGroup">
                    <input type="email" placeholder="Email" {...register('email', { required: 'The email is required.'})} />
                    <span>{errors.email && errors.email.message}</span>
                </div>
                
                <div className="formGroup">
                    <textarea placeholder="Message" {...register('message', { required: 'A message is required.'})}></textarea>
                    <span>{errors.message && errors.message.message}</span>
                </div>

                <button type="submit">SUBMIT</button>
            </div>
        </form>
    )
}

export default ContactForm