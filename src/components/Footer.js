import React from 'react'

const Footer = props => {
    const {
        alt,
        ZuriLogo,
        IFGLogo,
        text
    } = props 

    const myStyles = ({
        footer: {
            size: '24px'
        },
        footer2: {
            size: '24px'
            
        },
        footer3: {
            width: '832.28px',
            height: '24px',
            fontFamily: 'Inter', 
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '24px',   
            textAlign: 'center',
            color: '#667085',
            flex: 'none',
            order: '1',
            flexGrow: '1'
        }
    })
    return (
        <div>
            < a href='test.com' alt={alt} src={ZuriLogo}></a>

            <a style={myStyles.footer} alt={alt} src={ZuriLogo} />
            <p style={myStyles.footer3}>{text}</p>
            <a style={myStyles.footer2} alt={alt} src={IFGLogo}/>
        </div>
    )
}

export default Footer