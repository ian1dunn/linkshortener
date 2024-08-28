import React, {useState} from 'react'
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {createUser} from "../services/users";
import {useNavigate} from "react-router-dom";
const SignupPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ signUpError, setSignUpError ] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await createUser(data.first_name, data.last_name, data.email, data.username, data.password);
            navigate('/')
        } catch (e) {
            setSignUpError(e.message);
        }
    }

    return (
        <Container className="d-flex flex-column min-vh-100 justify-content-center align-items-center text-center">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col>
                        <Form.Control
                            type="text"
                            name="first_name"
                            placeholder="Enter First Name"
                            {...register("first_name", {required: true})}
                        />
                        {errors.username && <p className="text-danger">First name is required.</p>}
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            name="last_name"
                            placeholder="Enter Last Name"
                            {...register("last_name", {required: true})}
                        />
                        {errors.username && <p className="text-danger">Last name is required.</p>}
                    </Col>
                </Row>
                <Form.Control
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    {...register("email", {required: true})}
                />
                {errors.email && <p className="text-danger">Email is required.</p>}
                <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    {...register("username", {required: true})}
                />
                {errors.username && <p className="text-danger">Username is required.</p>}
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    {...register("password", {required: true})}
                />
                {errors.password && <p className="text-danger">Password is required.</p>}
                <Button class="btn btn-primary" type="submit">Create Account</Button>
                {signUpError && <p className="text-danger">Error creating account.</p>}
            </Form>
        </Container>
    );
}

export default SignupPage