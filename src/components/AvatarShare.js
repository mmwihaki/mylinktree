import React from 'react'
const AvatarShare = props => {
    const {
        shareIcon, 
        alt
    } = props

    const myStyles = ({
        shareIcon: {
            position: 'absolute',
            left: '12.5%',
            right: '11.53%',
            top: '14.95%',
            bottom: '14.95%',

            /* Gray/400 */

            border: '1.66667px solid #98A2B3',
        }
    })


    return (
        <div className='shareButton'>
            <div className='shareContent'>
                <div className='shareBox'>
                    <img style={myStyles.shareIcon} src={shareIcon} alt={alt} sizes='4x' />
                </div>
            </div>
        </div>
    )
}

export default AvatarShare