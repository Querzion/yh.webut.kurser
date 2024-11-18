import React, {useState} from 'react'
import axios from "axios"

// Skicka data + olika sätt att få error meddelanden på.

const AboutUS = () => {

    const [formData, setFormData] = useState({ name: "", email: "", phone: "", category: 'Financial consulting', })

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // FETCH VERSION

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const res = await fetch("https://onatrix-api.asurewebsites.net/forms/callbackrequest", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(formData)
    //     })

    //     // if (res.ok) {
    //     //     console.log('allt lyckades')
    //     //     alert("allt lyckades")
    //     // } else {
    //     //     console.log('någonting gick fel')
    //     //     alert("någonting gick fel")
    //     // }

    //     if (!res.ok) {  
    //         throw new Error("Något gick fel")
    //     }
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const res = await fetch("https://onatrix-api.asurewebsites.net/forms/callbackrequest", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(formData)
    //         })
    //     }
    //     catch (e) {
    //         console.error(e)
    //     }
    // };
    

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const res = await fetch("https://onatrix-api.asurewebsites.net/forms/callbackrequest", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(formData)
    //     })
        
    //     const data = await res.json()   

    //     console.log(res.status)
    //     console.log(data)
    // };
    
    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const res = await fetch("https://onatrix-api.asurewebsites.net/forms/callbackrequest", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(formData)
    //     })
        
        
    //     console.log(res.status)
    //     try {
    //         const data = await res.json()   
    //         console.log(data)
    //     }
    //     catch {
    //         const data = await res.text()   
    //         console.log(data)
    //     }
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const res = await fetch("https://onatrix-api.asurewebsites.net/forms/callbackrequest", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(formData)
    //     })
        
    //     console.log(res.status)
    
    //     if (!res.ok) {
    //         const data = await res.json()   
    //         console.log(data)
    //     }

    // };
    
    // AXIOS VERSION
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post("https://onatrix-api.asurewebsites.net/forms/callbackrequest", formData)
        
        if (res.status !== 200) {
            console.log(res.data)
        }

    };

    return (
        <section>
            <div className="form-container">
                <form className="callback-request-form" onSubmit={handleSubmit} noValidate>
                    <div className="header">
                        <h2>Request a call back</h2>
                    </div>
                    <div className="body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum necessitatibus asperiores aliquam? Nobis, explicabo?</p>
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
                        <input type="text" name="email" placeholder="Email address" value={formData.email} onChange={handleInputChange} required />
                        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} required />
                        <select name="category" id="customSelect" value={formData.category} onChange={handleInputChange}>
                            <option>Financial consulting</option>
                            <option>Risk management</option>
                            <option>Bonds & Commodities</option>
                            <option>Assurance & Audits</option>
                        </select>
                        <button type="submit" className="btn btn-accent btn-wide">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AboutUS