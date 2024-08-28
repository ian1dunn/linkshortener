import {useNavigate, useParams} from 'react-router-dom'
import {getLink, incrementLinkClicks} from "../services/links";
import {useEffect} from "react";

const Redirect = ({ page }) => {
    const { short_url } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getUrl = async () => {
            if (page)
                return navigate(page);

            const link = await getLink(short_url.split('/')[0]); // First component of shortened url
            if (link) {
                await incrementLinkClicks(short_url)
                window.location.href = link.url;
            }
            else navigate('/');
        }

        getUrl();
    }, [short_url, navigate, page]);

    return (<div><></></div>); // TODO occasionally throws Warning: Invalid DOM property `class`. Did you mean `className` in console
}

export default Redirect;