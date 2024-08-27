import React, {useContext, useEffect, useState} from 'react'
import AuthContext from "../context/AuthContext";
import {getUserByID} from "../services/users";
import {Container} from "react-bootstrap";
import Links from "./Links";

const Dashboard = () => {
    const { authTokens, user, logoutUser } = useContext(AuthContext);
    let [userData, setUserData] = useState([])

    useEffect(() => {
        const getUser = async() => {
            let data = await getUserByID(authTokens.access, user.user_id)

            if(data){
                setUserData(data)
            } else {
                logoutUser()
            }
        }

        getUser()
    }, [user, authTokens.access, logoutUser])

    return (
        <Container>
            <ul>
                <li>
                    FIRST NAME: {userData.first_name}<br/>
                    LAST NAME: {userData.last_name}<br/>
                    USERNAME: {userData.username}<br/>
                    EMAIL: {userData.email}<br/>
                    DATE JOINED: {userData.date_joined}<br/>
                    LAST_LOGIN: {userData.last_login}<br/>
                </li>
                <Links/>
            </ul>
        </Container>

)
}

export default Dashboard