import React, {useState} from 'react'

const CreateT2doForm = ({ newT2do }) => {

    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(title.trim() === '') return

        newT2do(title)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit} id="t2do-form" className="t2do-form">
            <input type="text" className="t2do-input" value={title} onChange={e => setTitle(e.target.value)} placeholder="WRITE NEW TODO HERE" />
            <button className="btn">Create TO:DO</button>
        </form>
    )
}

export default CreateT2doForm