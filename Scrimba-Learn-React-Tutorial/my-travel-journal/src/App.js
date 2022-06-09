import React from "react"
import Header from "./Header"
import Destination from "./Destination"
import travelData from "./travelData"
import "./index.css"

export default function App() {
    console.log(travelData);
    const travelElements = travelData.map(destination => {
        return <Destination 
            image={destination.imageUrl}
            location={destination.location}
            map={destination.googleMapsUrl}
            title={destination.title}
            startDate={destination.startDate}
            endDate={destination.endDate}
            description={destination.description}
        />
    })
    return (
        <div>
            <Header />            
            {travelElements} 
        </div>
    )
}