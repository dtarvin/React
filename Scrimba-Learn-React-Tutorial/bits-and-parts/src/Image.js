import React from "react"

export default function Image(props) {
    console.log(props)
    return (
        <img src={props.picture} alt={props.alt}/>
    )
}