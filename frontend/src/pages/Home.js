import React, {useContext, useEffect, useState} from 'react'
import AuthContext from "../context/AuthContext";
import {getUserLinks} from "../services/links";
import {getUserByID} from "../services/users";

const HomePage = () => {
    const { authTokens, user, logoutUser } = useContext(AuthContext);
    let [links, setLinks] = useState([])
    let [userData, setUserData] = useState([])

    useEffect(() => {
        getLinks()
        getUser()
    }, [])

    const getLinks = async() => {
        let data = await getUserLinks(authTokens.access, user.user_id)

        if(data){
            setLinks(data)
        } else {
            logoutUser()
        }
    }

    const getUser = async() => {
        let data = await getUserByID(authTokens.access, user.user_id)

        if(data){
            setUserData(data)
        } else {
            logoutUser()
        }
    }

    const linkItems = links.map((link) =>
        <li key={link.id}>
            SHORT URL: {link.short_url}<br/>
            URL: {link.url}<br/>
            CLICKS: {link.clicks}<br/>
            OWNER: {link.owner}
        </li>
    );

    return (
        <div>
            <p>You are logged in to the homepage!</p>
            <ul>
                <li>
                    FIRST NAME: {userData.first_name}<br/>
                    LAST NAME: {userData.last_name}<br/>
                    USERNAME: {userData.username}<br/>
                    EMAIL: {userData.email}<br/>
                    DATE JOINED: {userData.date_joined}<br/>
                    LAST_LOGIN: {userData.last_login}<br/>
                </li>
                {linkItems}
            </ul>
        </div>
    )
}

export default HomePage