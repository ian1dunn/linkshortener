import {Navigate, useNavigate, useParams} from 'react-router-dom'
import {getLink} from "../services/links";
import {useEffect, useState} from "react";

const Redirect = () => {
    const { short_url } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getUrl = async () => {
            const link = await getLink(short_url);
            if (link) window.location.href = link.url;
            else navigate('/');
        }

        getUrl();
    }, [short_url]);

    return (<div><></></div>); // TODO occasionally throws Warning: Invalid DOM property `class`. Did you mean `className` in console
}

export default Redirect;