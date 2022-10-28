import React from 'react'

const TextBanner = props => {

    const {
        title
    } = props

    const myStyles = ({
        title: {
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontSize: '20px',
            lineHeight: '28px'
        },
        
        box: {
            marginBottom: "35px",

        }
    })

    return (
        <div style={myStyles.box}>
            <h1 style={myStyles.title}>{title}</h1>
        </div>
    )
}

export default TextBanner