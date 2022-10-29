import React from 'react'

const SocialMedia = props => {
    const {
        alt,
        logo,
        logo2,
        logo3
    } = props 

    const myStyles = ({
        footer: {
            size: '24px'
        },
        footer2: {
            size: '24px'
            
        },
        footer3: {
            size: '24px'
            
        }
    })
    return (
        <div>
            <img style={myStyles.footer} alt={alt}>{logo}</img>
            <img style={myStyles.footer2} alt={alt}>{logo2}</img>
            <img style={myStyles.footer3} alt={alt}>{logo3}</img>
        </div>
    )
}

export default SocialMedia