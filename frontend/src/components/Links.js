import React, {useContext, useEffect, useState} from 'react'
import AuthContext from "../context/AuthContext";
import {getUserLinks} from "../services/links";
import {Button, Container, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const Links = () => {
    const { authTokens, user, logoutUser } = useContext(AuthContext);
    let [links, setLinks] = useState([])

    useEffect(() => {
        const getLinks = async() => {
            let data = await getUserLinks(authTokens.access, user.user_id)

            if(data){
                setLinks(data)
            } else {
                logoutUser()
            }
        }

        getLinks()
    }, [authTokens.access, user, logoutUser])

    return (
        <Container>
            <br/>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Short URL</th>
                        <th>URL</th>
                        <th>Clicks</th>
                        <th className="fit"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        links.map((link) =>
                            <tr key={link.id}>
                                <td><Link to={link.short_url} target="_blank">{link.short_url}</Link></td>
                                <td><a href={link.url} target="_blank" rel="noreferrer">{link.url}</a></td>
                                <td>{link.clicks}</td>
                                <td><Button variant="outline-danger" className="fit">Delete</Button></td>
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