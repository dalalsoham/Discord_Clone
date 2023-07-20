import React, { useState } from 'react';//UPDATE
import './Login.css';
import { Button } from '@mui/material';
// import { auth, provider } from './firebase';
import { auth,provider } from './config';//UPDATE
import {signInWithPopup} from "firebase/auth";//UPDATE

function Login() {
    const signIn = () => {
      //UPDATE CODE START
        //google login here
        const [value,setvalue] = useState('')
        // auth.signInWithPopup(provider).catch((error) => alert(error.message));
        signInWithPopup(auth,provider).then((data) =>{
          setvalue(data.user.email);
          localStorage.setItem("email", data.user.email);

        })
        //UPDATE CODE END
    };
//UPDATE CODE
    useState(() => {
      setvalue(localStorage.getItem('email'));
    })
    //UPDATE CODE END

  return (
    <div className="login">

      <div className="login__logo">
        <img src="https://1000logos.net/wp-content/uploads/2021/06/Discord-logo.png" />
      </div>

      {/* {value?} */}
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
