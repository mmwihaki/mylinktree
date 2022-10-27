import React from 'react'

const TextBanner = 0 => {

    const {
        title, 
        text
    } = props

    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default TextBanner