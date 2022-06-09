import React from "react"
import Image from "./Image"
import Header from "./Header"
import Body from "./Body"

export default function Card() {
    return (
        <div className="card">
            <Header 
                title="Megatron Nerf gun INCOMPLETE"
            />
            <Image 
                picture={require("./pictures/megatron-nerf-gun.jpg")}
                alt="Transformers Classics Megatron in Nerf gun mode"
            />
            <Body
                description="I am selling a Transformers Classics Megatron, the one that looks like a Nerf gun. 
                            It is missing the scope/arm cannon but is otherwise complete."
                line="Transformers Classics"
                price="$20.00"
            />
        </div>
    )
}
