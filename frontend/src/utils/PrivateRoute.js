import { Navigate } from 'react-router-dom'
import {useContext, useState} from 'react'
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({children, ...rest}) => {
    /*
        This component checks if the user is authenticated, and if not redirects them to the login page. Otherwise it
        continues to its child.
     */
    let { user } = useContext(AuthContext)

    return !user ? <Navigate to='/login'/> : children;
}

export default PrivateRoute;