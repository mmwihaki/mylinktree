import React from 'react'

const ProfilePic = props => {
    const {
        picture
    } = props

    return (
        <img id='profile_img' style={{'maxHeight':'275','borderradius': '200'}} src={picture} />
    )
}

export default ProfilePic