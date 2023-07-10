import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavBar,
    
}from "react-router-dom"

import Header from '../src/components/Header'
function App() {
    return (
        <>
        <NavBar/>
            <div>
                <Header/>
                
            </div>

        </>
    )
}

export default App