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
            fontFamily: "Monaco",
            margin: "10px",
            fontSize: "15px",
            color: "white",
            // textShadow: "1px 1px 4px #000000"
        },
        btn: {
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 15px 20px 0 rgba(0, 0, 0, 0.1)",
            fontFamily: "Monaco",
            width: '1152px',
            // height: '76px',
        },

    })

    return (
        <div style={myStyles.myMargin}>
            <h3 style={myStyles.btnText}>{title}</h3>
            <Button style={myStyles.btn} color='danger' class='btn btn-outline-danger' outline href={link}>{name}</Button>
        </div>
    )
}

export default LinkButton