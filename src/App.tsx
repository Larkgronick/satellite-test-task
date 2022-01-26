import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Navigation from "./components/Navigation";
import Home from './components/Home';
import Result from './components/Result';

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/result" element={<Result/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
