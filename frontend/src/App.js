import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import {AuthProvider} from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import React from "react";
import Redirect from "./utils/Redirect";

function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/:short_url" element={<Redirect />}/>
                        <Route path="*" element={<Redirect page='/' />}/>
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;