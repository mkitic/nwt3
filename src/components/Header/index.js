import React from 'react';

import { useHistory } from "react-router-dom";

export default function Header () {
    let history = useHistory();

    return (
        <header style={{display: "flex", alignItems: 'center', justifyContent: 'center'}} className="App-header mt-20">
            <h3 className="font-bold text-left text-purple-300 text-5xl mx-auto cursor-pointer" onClick={() => history.push('/login')}> Login </h3>
            <h1 className="font-bold text-center text-purple-500 text-5xl mx-auto">Mesumi </h1>
            <h3 className="font-bold text-right text-purple-300 text-5xl mx-auto cursor-pointer" onClick={() => history.push('/profile')}> Profile </h3>
        </header>
    )
}