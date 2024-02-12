import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import styles from '../../styles/SignUpForm.module.css';


const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username :"",
        password1 :"",
        password2 :"",
    });

    const {username, password1, password2} = signUpData;

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
    }

    return (
        <Row className={styles.Row}> 
            <Col>
                <h1 className={styles.SignupHeader}>Sign Up</h1>
                <Form>
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
                    <Button onClick={handleSubmit} variant="primary" type="Signup">
                        Submit
                    </Button>
                </Form>
                <p>Click Login if you already have an account</p>
            </Col>
        </Row>
    )
}

export default SignUpForm