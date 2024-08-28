import React, {useContext, useEffect, useState} from 'react'
import AuthContext from "../context/AuthContext";
import {Button, Container, Navbar} from "react-bootstrap";
import {getUserByID} from "../services/users";

const Header = () => {
    let { user, logoutUser, authTokens } = useContext(AuthContext)
    let [userData, setUserData] = useState([])

    useEffect(() => {
        const getUser = async() => {
            let data = await getUserByID(user.user_id)

            if(data){
                setUserData(data)
            } else {
                logoutUser()
            }
        }

        getUser()
    }, [authTokens, user, logoutUser])

    return (
        <Navbar expand="md" className="navbar-dark bg-dark">
            <Container>
                <Navbar.Brand>Link Shortener</Navbar.Brand>
                <Navbar.Toggle />
                { user &&
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className="pe-2">
                            Signed in as: {userData.username}
                        </Navbar.Text>
                        <Button variant="outline-light" onClick={logoutUser}>Logout</Button>
                    </Navbar.Collapse>
                }
            </Container>
        </Navbar>
    )
}

export default Header