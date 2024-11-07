import React, {useState} from 'react'

const CallbackForm = () => {
    const [options, setOptions] = useState([{ id: 1, text: "Financial consulting" }, 
                                            { id: 2, text: "Risk management" }, 
                                            { id: 3, text: "Bonds & Commodities" },
                                            { id: 4, text: "Something"}])
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", category: options[0].id, })
    const [errors, setErrors] = useState({})


    // / = start och slut på regular expression
    // ^ = start på aktiv sträng
    // $ = slutet på aktiv sträng
    // [] = boundaries för vilka tecken
    // {} = boundaries för mängden tecken minst, max
    // \s = wide spaces (mellanslag)
    // \- = tillåt bindesträck
    // + = det som är innan kan användas flera gånger slisk.lindqvist
    // @ = @ som i 'at', efter det blir det domänet
    // \. = krav på punkt mellan domän och ändelse i detta fall
    // | = Eller
    // () = singular statement
    // \+46|0 = can start with +46 or 0
    // * = valfritt antal utav föregående grupp 0|flera gånger
    // \d = digits
    // \D = non digits
    
    // Det är satt så att nummer inte går förbi valideringen.
    const regularExpressionName = /^[A-Öa-ö\s\-]{2,}$/;
    const regularExpressionEmail = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/;
    const regularExpressionPhone = /^(\+46|0)[\s-]*\d{2,3}[\s-]*\d{2,3}[\s-]*\d{2,3}[\s-]*\d{0,3}$/;

    // Real-time validation function
    const validateField = (name, value) => {
        let error = '';

        if (name === 'name' && !regularExpressionName.test(value)) {
            error = "Your name must be at least 2 characters long, no numbers.";
        } else if (name === 'email' && !regularExpressionEmail.test(value)) {
            error = "It has to be a valid email address. (eg. username@example.com)";
        } else if (name === 'phone' && !regularExpressionPhone.test(value)) {
            error = "Has to be a valid Swedish phone-number.";
        }

        // Update errors state
        setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
    };


    // påstånds validering
    const validateForm = () => {
        const newErrors = {}

        
        if(!regularExpressionName.test(formData.name)) {
            newErrors.name = "Your name must be at least 2 characters long, no numbers."
        }

        if(!regularExpressionEmail.test(formData.email)) {
            newErrors.email = "It has to be a valid email address. (eg. username@example.com)"
        }
                
        if(!regularExpressionPhone.test(formData.phone)) {
            newErrors.phone = "Has to be a valid Swedish phone-number."
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

        validateField(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (validateForm()) {
            console.log("form valid")
            // fetch ('https://api.domain.com/api/forms/callback', { method: 'post', headers: { 'content-type': 'application/json' }, body: JSON.stringify(formData) })
        } else {
            console.log("form invalid")
        }
    }

    return (
        <form className="callback-request-form" onSubmit={handleSubmit} noValidate>
            <div className="header">
                <h2>Request a call back</h2>
            </div>
            <div className="body">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis tempora suscipit deserunt minima dignissimos id!</p>
                
                <div className="form-group">
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
                    {errors.name && <span className="validation-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                    <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleInputChange} required />
                    {errors.email && <span className="validation-error">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                    <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} required />
                    {errors.phone && <span className="validation-error">{errors.phone}</span>}
                </div>

                <div className="form-group">
                    <select name="category" id="customSelect" value={formData.category} onChange={handleInputChange} required>
                        { options.map(option => (<option key={option.id} value={option.id}>{option.text}</option>))}
                    </select>
                </div>

                <button type="submit" className="btn btn-accent btn-wide">Submit</button>
            </div>
        </form>
    )
}

export default CallbackForm