import React, {useContext, useState} from 'react'
import AuthContext from "../context/AuthContext";
import {Button, Container, Form} from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = () => {
    let {loginUser} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ loginError, setLoginError ] = useState(false)

    const onSubmit = async (data) => {
        let result = await loginUser(data.username, data.password);
        setLoginError(!result)
    }

    return (
        <Container className="d-flex flex-column min-vh-100 justify-content-center align-items-center text-center">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    {...register("username", { required: true })}
                />
                {errors.username && <p className="text-danger">Username is required.</p>}
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    {...register("password", { required: true })}
                />
                {errors.password && <p className="text-danger">Password is required.</p>}
                <Button class="btn btn-primary" type="submit">Login</Button>
                {loginError && <p className="text-danger">Invalid credentials.</p>}
            </Form>
        </Container>
    )
}

export default Login