import React from "react"

export default function Body(props) {
    return (
        <>
            <p>{props.description}</p>
            <p className="body--flex"><span>{props.line}</span><span>Price: {props.price}</span></p>
        </>
    )
}