import React from 'react'

const ProfilePic = props => {
    const {
        alt,
        picture
    } = props

    const myStyles = ({
        title: {
            fontFamily: "Monaco",
            fontWeight: "bold",
            marginTop: "45px",
            fontSize: "25px",
            color: "white",
            // textShadow: "2px 3px 2px #000000"
        },
        pic: {
            maxHeight: "88px",
            borderRadius: "200px",
            margin: "15px"
        }
    })

    return (
        <img style={myStyles.pic} id='profile_img' alt={alt}  src={picture} />
    )
}

export default ProfilePic