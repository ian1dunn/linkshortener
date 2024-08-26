import React, {useContext, useEffect, useState} from 'react'
import AuthContext from "../context/AuthContext";
import {getUserLinks} from "../services/links";
import {Button, Container, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const Links = () => {
    const { authTokens, user, logoutUser } = useContext(AuthContext);
    let [links, setLinks] = useState([])

    useEffect(() => {
        if (user) {
            getLinks()
        }
    }, [])

    const getLinks = async() => {
        let data = await getUserLinks(authTokens.access, user.user_id)

        if(data){
            setLinks(data)
        } else {
            logoutUser()
        }
    }

    return (
        <Container>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Short URL</th>
                        <th>URL</th>
                        <th>Clicks</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        links.map((link) =>
                            <tr key={link.id}>
                                <td><Link to={link.short_url} target="_blank">{link.short_url}</Link></td>
                                <td><a href={link.url} target="_blank">{link.url}</a></td>
                                <td>{link.clicks}</td>
                                <td><Button variant="outline-danger">x</Button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <Button variant="success">Create Link</Button>
        </Container>

)
}

export default Links