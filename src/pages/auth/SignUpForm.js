import styles from '../../styles/SignUpForm.module.css';
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";
import axios from "axios";
import Home from '../../assets/signin.jpg';


const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username :"",
        password1 :"",
        password2 :"",
    });

    const {username, password1, password2} = signUpData;
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/dj-rest-auth/registration/', signUpData);
            history.push('/login');
            
        } catch (err) {
            setErrors(err.response?.data);
            
        }
    };

    return (
        <div>
            <Row>
                <img className={styles.imagesize} src={Home} alt='Home Page'></img>
            </Row>
            <Row className={styles.Row}> 
                <Col>
                    <h1 className={styles.SignupHeader}>Sign Up</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username">
                            <Form.Label className="d-none">Username</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Username" 
                                name="username"
                                value={username}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.username?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>{message}</Alert>
                        ))}

                        <Form.Group controlId="password1">
                            <Form.Label className="d-none">Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                name="password1"
                                value={password1}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password1?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>{message}</Alert>
                        ))}

                        <Form.Group controlId="password2">
                            <Form.Label className="d-none">Confirm password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm password"
                                name="password2"
                                value={password2}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        {errors.password2?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>{message}</Alert>
                        ))}
                        <Button onClick={handleSubmit} variant="primary" type="Signup">
                            Signup
                        </Button>
                        {errors.non_field_errors?.map((message, idx) => (
                        <Alert key={idx} variant="warning" className="mt-3">{message}</Alert>
                        ))}
                    </Form>
                    <p>Already have an account? Then <Link className={styles.TextLink} to="/login">Login</Link></p>
                </Col>
            </Row>
        </div>
    )
}

export default SignUpForm