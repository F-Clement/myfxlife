import React, {useState } from 'react'
import { Form, Row, Button, Col, Alert } from 'react-bootstrap'
import styles from '../../styles/SignUpForm.module.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useSetCurrentUser } from '../../contexts/CurrentUserContext';

function SignInForm() {

    const setCurrentUser = useSetCurrentUser();


    const [signInData, setSignInData] = useState({
        username: "",
        password: ""
    })

    const { username, password } = signInData;
    const history = useHistory();
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data} = await axios.post("/dj-rest-auth/login/", signInData);
            setCurrentUser(data.user)
            history.push("/");
        } catch (err) {
            setErrors(err.response?.data);
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
                    {errors.username?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>{message}</Alert>
                    ))}

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
                    {errors.password?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>{message}</Alert>
                    ))}
                    <Button type="submit">
                        Submit
                    </Button>
                    {errors.non_field_errors?.map((message, idx) => (
                        <Alert key={idx} variant="warning" className="mt-3">
                            {message}
                        </Alert>
                    ))}
                    <p>New user? then <Link className={styles.TextLink} to="/signup">signup</Link></p>
                </Form>
            </Col>
        </Row>
    )
}

export default SignInForm