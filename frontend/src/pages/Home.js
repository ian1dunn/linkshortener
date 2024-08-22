import React, {useContext, useEffect, useState} from 'react'
import AuthContext from "../context/AuthContext";
import {getAllLinks} from "../services/links";

const HomePage = () => {
    const { authTokens, user, logoutUser } = useContext(AuthContext);
    let [links, setLinks] = useState([])

    useEffect(() => {
        getLinks()
    }, [])

    const getLinks = async() => {
        let data = await getAllLinks(authTokens.access)

        console.log(data)
        console.log(user)

        if(data){
            setLinks(data)
        } else {
            logoutUser()
        }
    }

    const linkItems = links.map((link) =>
        <li>
            SHORT URL: {link.short_url}<br/>
            URL: {link.url}<br/>
            CLICKS: {link.clicks}<br/>
            OWNER: {link.owner}
        </li>
    );

    return (
        <div>
            <p>You are logged in to the homepage!</p>
            <ul>{linkItems}</ul>
        </div>
    )
}

export default HomePage