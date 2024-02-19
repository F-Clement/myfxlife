import React, { useState } from 'react'
import { Form, Row, Button, Col } from 'react-bootstrap'
import styles from '../../styles/SignUpForm.module.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function SignInForm() {
    const [signInData, setSignInData] = useState({
        username: "",
        password: ""
    })

    const { username, password } = signInData;
    const history = useHistory();

    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post("/dj-rest-auth/login/", signInData);
          history.push("/");
        } catch (err) {
        }
      };


    return (
        <Row className={styles.Row}>
            <Col>
                <h1 className={styles.SignupHeader}>Sign In</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label className="hidden">Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="username"
                            name='username'
                            value={username}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label className="hidden">Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name='password'
                            value={password}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button type="submit">
                        Submit
                    </Button>
                    <p>New user? then <Link className={styles.TextLink} to="/signup">signup</Link></p>
                </Form>
            </Col>
        </Row>
    )
}

export default SignInForm