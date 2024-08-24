import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from "../context/AuthContext";
import {Button, Container, Navbar} from "react-bootstrap";

const Header = () => {
    let { user, logoutUser } = useContext(AuthContext)

    return (
        <Navbar expand="md" className="navbar-dark bg-dark">
            <Container>
                <Navbar.Brand>Link Shortener</Navbar.Brand>
                <Navbar.Toggle />
                { user &&
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: {user.user_id}
                        </Navbar.Text>
                        <Button variant="outline-light" onClick={logoutUser}>Logout</Button>
                    </Navbar.Collapse>
                }
            </Container>
        </Navbar>
    )
}

export default Header