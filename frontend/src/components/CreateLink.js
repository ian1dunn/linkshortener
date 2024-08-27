import React, {useContext} from 'react'
import {Button, Container, Form} from "react-bootstrap";
import { useForm } from "react-hook-form";
import AuthContext from "../context/AuthContext";
import {createLink} from "../services/links";

const CreateLink = (props) => {
    const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/
    const { authTokens } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [ loginError, setLoginError ] = useState(false)

    const onSubmit = async (data) => {
        props.onClick()
        await createLink(authTokens.access, data.short_url, data.url)
    }

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center text-center">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Control
                    type="text"
                    name="short_url"
                    placeholder="Enter Short URL"
                    {...register("short_url", { required: true, min: 3, max: 20 })}
                />
                {errors.short_url && <p className="text-danger">Invalid short URL.</p>}
                <Form.Control
                    type="text"
                    name="url"
                    placeholder="Enter URL"
                    {...register("url", { required: true, pattern: URL_REGEX })}
                />
                {errors.url && <p className="text-danger">Invalid URL. (Include http/https)</p>}
                <Button class="btn btn-success" type="submit">Create Link</Button>
                {/*{loginError && <p className="text-danger">Invalid credentials.</p>}*/}
            </Form>
        </Container>
    )
}

export default CreateLink