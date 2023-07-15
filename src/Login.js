import React from 'react';
import './Login.css';
import { Button } from '@mui/material';
import { auth, provider } from './firebase';

function Login() {
    const signIn = () => {
        //google login here
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };

  return (
    <div className="login">

      <div className="login__logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcRDaOSj1l8P00HCKZ7Tl5NA5Z6E2cvG62qQ&usqp=CAU" />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
