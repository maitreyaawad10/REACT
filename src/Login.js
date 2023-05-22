import React from 'react';
import './Login.css';
import { Button } from '@mui/material';
import { auth, provider } from './firebase';


function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch((error) => { alert(error.message) });
    };

    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://logowik.com/content/uploads/images/discord8706.jpg" alt="" />
            </div>

            <Button onClick={ signIn }>
                Sign In
            </Button>
        </div>
    )
}

export default Login