import React from "react"

export default function Box(props) {
    const styles = {
        backgroundImage: props.on ?
        "linear-gradient(to bottom, #e04024, #fa8773)" : 
        "linear-gradient(to bottom, #A3A2A6, #DCDCE0)"
    }
    
    return (
        <div 
            style={styles} 
            className="box"
            onClick={()=>props.toggle(props.id, props.row, props.column)}
        >
        </div>
    )
}