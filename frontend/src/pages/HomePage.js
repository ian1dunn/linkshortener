import React, {useContext, useEffect, useState} from 'react'
import AuthContext from "../context/AuthContext";
import Login from "../components/Login";
import Header from "../components/Header";
import {Button, Container, Modal} from "react-bootstrap";
import CreateLink from "../components/CreateLink";
import {createLink, getUserLinks} from "../services/links";
import Links from "../components/Links";

const HomePage = () => {
    const { authTokens, user } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    let [links, setLinks] = useState([])
    const [ error, setError ] = useState("")

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getLinks = async() => {
        let data = await getUserLinks(user.user_id);
        if (data)
            setLinks(data)
    }

    // Run on component mount
    useEffect(() => {
        if (user)
            getLinks()
    // eslint-disable-next-line
    }, []);

    const onCreateFormSubmit = async (data) => {
        try {
            await createLink(authTokens.access, data.short_url, data.url)
        } catch (e) {
            setError(e.message);
        }

        handleClose();
        await getLinks();
    }

    return user ? <div>
        <Header />

        <Container id="error" className="justify-content-center align-items-center text-center">
            {error !== "" && <p className="text-danger">{error}</p>}
        </Container>

        <Container>
            <br/>
            <Links links={links} update={getLinks}/>
            <div className="d-flex justify-content-center">
                <Button variant="success" onClick={handleShow}>Shorten New Link</Button>
            </div>
        </Container>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Shorten New Link</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreateLink onSubmit={onCreateFormSubmit}/>
            </Modal.Body>
        </Modal>
    </div> : <Login />;
}

export default HomePage