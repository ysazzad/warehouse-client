import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);


    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate("/login")
    }

    if (loading || updating) {
        <Loading></Loading>

    }

    const handleRegister = async (event) => {
        event.preventDefault()
        const name = event.target.formBasicName.value
        const email = event.target.formBasicEmail.value
        const password = event.target.formBasicPassword.value

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate("/home")

        // createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='w-50 mx-auto' >
            <h2 className='text-center'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">

                    <Form.Control type="name" placeholder="Enter Your Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Accept term and conditions" className={agree ? 'text-dark' : 'text-danger'} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!agree}>
                    Register
                </Button>
            </Form>
            <p>Already have an account ? <Link to="/login" className="pe-auto text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;