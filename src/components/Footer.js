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
            width: '187.59px',
            flex: 'none',
            order: '0',
            flexGrow: '0'
        },
        footer3: {
            width: '132.13px',
            flex: 'none',
            order: '2',
            flexGrow: '0',
            paddingLeft: '1083.87px',
            
        },

        // footerContainer:{
        //     display: 'flex',
        //     margin: '10px',
        //     padding: '20px',
        //     alignItems: 'justify'
        // },
 
        footer2: {
            fontFamily: 'Inter', 
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: '16px',
            textAlign: 'center',
            color: '#667085',
            flex: 'none',
            order: '1',
            flexGrow: '1'
        }
    })
    return (
        <div style={myStyles.footerContainer} >
            <img style={myStyles.footer} src={ZuriLogo} alt={alt} />
            <p style={myStyles.footer2}>{text}</p>
            <img style={myStyles.footer3} src={IFGLogo} alt={alt} />
        </div>
    )
}

export default Footer