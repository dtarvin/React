import React from "react"

export default function Destination(props) {
    console.log(props)
    return (
        <div className="destination--container">
            <div>
                <img src={`${props.image}`}/>
            </div>
            <div className="destination--info">
                <span className="destination--country">{props.location}</span>
                <a href={`${props.map}`}>View on Google Maps</a>
                <div className="destination--title">{props.title}</div>
                <div className="destination--dates">{props.startDate} - {props.endDate}</div>
                <div className="destination--description">{props.description}</div>
            </div>
        </div>
    )
}