import React, {useContext, useEffect, useState} from 'react'
import AuthContext from "../context/AuthContext";
import Login from "../components/Login";
import Header from "../components/Header";
import {Button, Container, Modal} from "react-bootstrap";
import CreateLink from "../components/CreateLink";
import {getUserLinks} from "../services/links";
import Links from "../components/Links";

const HomePage = () => {
    const { authTokens, user, logoutUser } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    let [links, setLinks] = useState([])

    const getLinks = async() => {
        let data = await getUserLinks(authTokens.access, user.user_id);

        if(data){
            setLinks(data)
        } else {
            logoutUser()
        }
    }

    useEffect(() => {
        getLinks()
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {
        handleClose();
        getLinks();
        console.log("submitted")
    }

    return user ? <div>
        <Header />
        <Container>
            <br/>
            <Links links={links} />
            <div className="d-flex justify-content-center">
                <Button variant="success" onClick={handleShow}>Shorten New Link</Button>
            </div>
        </Container>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Shorten New Link</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreateLink onClick={handleSubmit}/>
            </Modal.Body>
          </Modal>
    </div> : <Login />;
}

export default HomePage