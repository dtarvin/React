import React from "react"
import boxes from "./boxes"
import Box from "./Box"
import "./Box.css"

export default function Playboard() {
    const [squares, setSquares] = React.useState(boxes)
    
    function randomize() {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return Math.random() < 0.5 ? {...square, on: true} : {...square, on: false}
            })
        })
    }

    function toggle(id, row, column) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
        if(row > 1) {
            setSquares(prevSquares => {
                return prevSquares.map((square) => {
                    return square.id === (id-5) ? {...square, on: !square.on} : square
                })
            })
        }
        if(row < 5) {
            setSquares(prevSquares => {
                return prevSquares.map((square) => {
                    return square.id === (id+5) ? {...square, on: !square.on} : square
                })
            })
        }
        if(column > 1) {
            setSquares(prevSquares => {
                return prevSquares.map((square) => {
                    return square.id === (id-1) ? {...square, on: !square.on} : square
                })
            })
        }
        if(column < 5) {
            setSquares(prevSquares => {
                return prevSquares.map((square) => {
                    return square.id === (id+1) ? {...square, on: !square.on} : square
                })
            })
        }
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            row={square.row}
            column={square.column}
            on={square.on} 
            toggle={toggle}
        />
    ))
    
    return (
        <div>  
            {squareElements}
            <button className="main--button" onClick={randomize}>Randomize</button>
        </div>
    )
}
