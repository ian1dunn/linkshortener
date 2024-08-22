import { Navigate } from 'react-router-dom'
import { useState } from 'react'

const PrivateRoute = ({children, ...rest}) => {
    /*
        This component checks if the user is authenticated, and if not redirects them to the login page. Otherwise it
        continues to its child.
     */
    let [user, setUser] = useState(null)

    return !user ? <Navigate to='/login'/> : children;
}

export default PrivateRoute;