import React from 'react';
import './App.css';
import Intro from './Component/Intro/Intro';
import Navbar from './Component/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
        </div>
    );
}

export default App;
