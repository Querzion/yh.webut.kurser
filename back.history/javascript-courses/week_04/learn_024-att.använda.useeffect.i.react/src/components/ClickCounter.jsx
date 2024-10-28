import React, { useState, useEffect } from 'react'


const ClickCounter = () => {
    const [click, setClick] = useState(0)

    useEffect(() => {
        console.log(`antal klick: ${click}`)

        return () => {
            console.log("uppstädning")
        }

    }, [click])

    return (
        <section>
        <p>Antal Klick: {click}</p>

        <button onClick={() => setClick(click + 1)}>Klicka här</button>
        </section>
    )
}

export default ClickCounter