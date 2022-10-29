import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSlack,
    faGithub
  } from '@fortawesome/free-brands-svg-icons';

const SocialMedia = props => {
    const {
        alt,
        logo,
        logo2
    } = props 
   
    const myStyles = ({
        gitIcon: {
            color: 'black',
            paddingTop: '24px'
        }, 

        slackIcon: {
            fill: 'linear-gradient(-120DEG, #3EB991, #6ECADC, #E9A820, #E01563)',
            paddingTop: '24px'
        },
        
        socialContainer: {
            display: 'flex',
            flexDirection: 'row', 
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px',
            gap: '24px', 
            width: '1152px',
            height: '24px',
            flex: 'none',
            order: '0',
            flexGrow: '1'
        }
        
    })

    return (
        < div style={myStyles.socialContainer} className='social-container' >
            < a style={myStyles.slackIcon} href='test.com' alt={alt} src={logo}> <FontAwesomeIcon icon={faSlack} size='3x'/></a>
            < a style={myStyles.gitIcon} href='wtest.com' alt={alt} src={logo2}> <FontAwesomeIcon icon={faGithub} size='3x' /></a>
        </div>
    )
}

export default SocialMedia