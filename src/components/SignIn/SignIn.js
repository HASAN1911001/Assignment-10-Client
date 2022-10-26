import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import app from '../../Firebase/Firebase.init';

const auth = getAuth(app);

const SignIn = () => {
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
        })
        .catch(error => {
            console.log('error :', error)
        })

    }
    
   
    return(
        <div>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>  
     );
};

export default SignIn;