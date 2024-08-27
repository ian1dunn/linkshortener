import React, {useEffect, useState} from 'react'
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

const Links = ({ links }) => {
    const [ linkProp, setLinkProp ] = useState(links);

    useEffect(() => {
        setLinkProp(links)
        console.log("links updated")
    }, [links]);

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
                            <td><Button variant="outline-danger" className="fit">Delete</Button></td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}

export default Links