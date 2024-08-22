import React, {useContext, useEffect, useState} from 'react'
import AuthContext from "../context/AuthContext";

const HomePage = () => {
    const { authTokens, logoutUser } = useContext(AuthContext);
    let [links, setLinks] = useState([])

    useEffect(() => {
        getLinks()
    })

    const getLinks = async() => {
        let response = await fetch('http://127.0.0.1:8000/api/links/', {
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
            'Authorization':'Bearer ' + String(authTokens.access)
        }
        })
        let data = await response.json()
        console.log(data)
        if(response.status === 200){
            setLinks(data)
        } else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
    }

    return (
        <div>
            <p>You are logged in to the homepage!</p>
            <p>{links.toString()}</p>
        </div>
    )
}

export default HomePage