import React, {useContext} from 'react'
import AuthContext from "../context/AuthContext";
import {Button, Container, Form} from "react-bootstrap";

const Login = () => {
    let {loginUser} = useContext(AuthContext)

    return (
        <Container className="d-flex flex-column min-vh-100 justify-content-center align-items-center text-center">
            <Form onSubmit={loginUser}>
                <Form.Control type="text" name="username" placeholder="Enter Username"/>
                <Form.Control type="password" name="password" placeholder="Enter Password"/>
                <Button class="btn btn-primary" type="submit">Login</Button>
            </Form>
        </Container>
)
}

export default Login