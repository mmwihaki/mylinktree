import React from 'react'
import {Button} from 'reactstrap'

const LinkButton = props => {
    const {
        name,
        title, 
        link
    } = props

    const myStyles = ({
        myMargin: {
            marginBottom: "20px",

        },

        btnText: {
            color: 'red'
        }

    })

    return (
        <div style={myStyles.myMargin}>
            <h3 style={myStyles.btnText}>{title}</h3>
            <Button href={link}>{name}</Button>
        </div>
    )
}

export default LinkButton