import React from "react";
import Playboard from "./Playboard";
import Header from "./Header";
import "./App.css"
import "./Header.css"

export default function App() {
    return (
        <main className="main--playArea">
            <Header />
            <Playboard />
        </main>
    )
}