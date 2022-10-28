import React from 'react'

const Footer = props => {
    const {
        logo
    } = props

    return (
        <img id='profile_img' style={{'maxHeight':'275','borderradius': '200'}} src={logo} />
    )
}

export default Footer