import React, {useContext} from 'react'
import AuthContext from "../context/AuthContext";
import Login from "../components/Login";
import Header from "../components/Header";
import Links from "../components/Links";

const HomePage = () => {
    const { user } = useContext(AuthContext);

    return user ? <div>
        <Header />
        <Links/>
    </div> : <Login />;
}

export default HomePage