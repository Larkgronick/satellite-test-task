import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from './App.module.scss';
import Navigation from "./components/Navigation";
import Home from './components/Home';
import Result from './components/Result';

function App() {
    return (
        <BrowserRouter>
            <div className={styles["page-container"]}>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/result" element={<Result/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
