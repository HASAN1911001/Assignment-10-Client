import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import app from '../Firebase/Firebase.init';

const auth = getAuth(app);

const LogIn = () => {
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        console.log('google mama comming soon')
    }
    
   
    return(
        <div>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>  
     );
};

export default LogIn;