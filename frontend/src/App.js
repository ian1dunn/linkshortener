import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import Header from './components/Header'

function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;