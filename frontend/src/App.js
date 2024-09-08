import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import {AuthProvider} from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import React from "react";
import Redirect from "./utils/Redirect";
import SignupPage from "./pages/SignupPage";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/:short_url" element={<Redirect />}/>
                        <Route path="*" element={<Redirect page='/' />}/>
                    </Routes>
                </AuthProvider>
                <Footer />
            </Router>
        </div>
    );
}

export default App;