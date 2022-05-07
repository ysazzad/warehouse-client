import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorText
    if (error) {
        errorText = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate("/home")
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='w-50 bg-dark'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='w-50 bg-dark'></div>
            </div>

            {errorText}

            <div >
                <button onClick={() => signInWithGoogle()} className='btn btn-dark w-50 d-block mx-auto my-2'>
                    <img style={{ width: "30px" }} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                    <span className='px-2'> Google Sign In </span>
                </button>


            </div>

        </div>
    );
};

export default SocialLogin;