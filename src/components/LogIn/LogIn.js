import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../Firebase/Firebase.init';
import Navigation from '../Navigation/Navigation';
import './LogIn.css'

const auth = getAuth(app);

const LogIn = () => {
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error('error :', error)
        })

    }

    const GitHubProvider = new GithubAuthProvider()

    const handleGitHubSignIn = () =>{
        signInWithPopup(auth, GitHubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error('error :', error)
        })

    }
 
    const [success, setSuccess] = useState(true);
    const handleSignIn = (event) =>{
        event.preventDefault();
        setSuccess(true);
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            
            console.log(user);
        }) 
        
        .catch(error =>{
            setSuccess(false);
            console.error('error', error)
        })

        
     }

    
   
    return(
        <div>
            <Navigation></Navigation>
            <div className='LogIn'>
                <div className='in'>

                    <form onSubmit={handleSignIn}>
                        <input type="email" name="email" placeholder="Email" className='input'></input>
                        <input type="password" name="password" placeholder='Password' className='input'></input>
                        <button type="submit">Log In</button>
                    </form>
                    {!success && <p>Email or Password doen't match</p>} 
                    <button onClick={handleGoogleSignIn}>Google Log In</button>
                    <button onClick={handleGitHubSignIn}>GitHub Log In</button>

                    <br/>
                    <Link to="/signin">Sign In</Link>

                </div>
            </div>  
        </div>
     );
};

export default LogIn;