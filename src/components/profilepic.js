import React from 'react'

const ProfilePic = props => {
    const {
        alt,
        picture
    } = props

    const myStyles = ({
        title: {
            color: 'black'
        },
        pic: {
            maxHeight: '88px',
            borderRadius: '200px',
            margin: '15px'
        }
    })

    return (
        <img style={myStyles.pic} id='profile_img' alt={alt}  src={picture} />
    )
}

export default ProfilePic