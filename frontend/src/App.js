import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header'
import PrivateRoute from "./utils/PrivateRoute";

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;