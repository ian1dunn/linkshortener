import React, {useContext} from 'react'
import AuthContext from "../context/AuthContext";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Header from "../components/Header";

const HomePage = () => {
    const { user } = useContext(AuthContext);

    return user ? <Dashboard /> : <Login />;
}

export default HomePage