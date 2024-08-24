import {createContext, useCallback, useEffect, useState} from 'react'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import {login, update} from "../services/auth";

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    let [user, setUser] = useState(() => (localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null))
    let [authTokens, setAuthTokens] = useState(() => (localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null))

    const navigate = useNavigate()

    let loginUser = async (e) => {
        e.preventDefault()

        let data = await login(e.target.username.value, e.target.password.value);

        if(data){
            localStorage.setItem('authTokens', JSON.stringify(data));
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            navigate('/')
        } else {
            alert('Something went wrong while logging in the user!')
        }
    }

    let logoutUser = useCallback((e) => {
        if (e) e.preventDefault()

        localStorage.removeItem('authTokens')
        setAuthTokens(null)
        setUser(null)
        navigate('/')
    }, [navigate])

    const updateToken = useCallback(async () => {
        let data = await update(authTokens?.refresh)

        if (data) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            logoutUser()
        }

    }, [authTokens?.refresh, logoutUser])

    let contextData = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
    }

    // Refresh the token on interval from the backend
    useEffect(()=>{

        const REFRESH_INTERVAL = 1000 * 60 * 4 // 4 minutes
        let interval = setInterval(()=>{
            if(authTokens) {
                updateToken()
            }
        }, REFRESH_INTERVAL)
        return () => clearInterval(interval)

    },[authTokens, updateToken])

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}