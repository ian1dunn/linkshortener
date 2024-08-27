import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import {AuthProvider} from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import React from "react";

function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        {/*<Route path="/login" element={<Login/>}/>*/}
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;