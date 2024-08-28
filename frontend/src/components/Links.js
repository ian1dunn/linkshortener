import React, {useContext, useEffect, useState} from 'react'
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {deleteLink} from "../services/links";
import AuthContext from "../context/AuthContext";

const Links = ({ links, update }) => {
    const { authTokens } = useContext(AuthContext);
    const [ linkProp, setLinkProp ] = useState(links);

    useEffect(() => {
        setLinkProp(links)
    }, [links]);

    const removeLink = async (id) => {
        await deleteLink(authTokens.access, id);
        update();
    }

    // TODO link clicks require refresh

    return (
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
                    linkProp.map((link) =>
                        <tr>
                            <td><Link to={link.short_url} target="_blank">{link.short_url}</Link></td>
                            <td><a href={link.url} target="_blank" rel="noreferrer">{link.url}</a></td>
                            <td>{link.clicks}</td>
                            <td><Button variant="outline-danger" className="fit" onClick={() => removeLink(link.id)}>Delete</Button></td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}

export default Links