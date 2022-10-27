import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import app from '../../Firebase/Firebase.init';
import { AuthContext } from '../Context/UserContext';
import Navigation from '../Navigation/Navigation';
import './LogIn.css'

const auth = getAuth(app);

const LogIn = () => {

    const {signInPassword, signInWithGoogle, signInWithGitHub} = useContext(AuthContext);

    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            const user = result.user;
            setUser(user);
        })
        .catch(error => {
            console.error('error :', error)
        })

    }

    const GitHubProvider = new GithubAuthProvider()

    const handleGitHubSignIn = () =>{
        signInWithGitHub()
        .then(result => {
            const user = result.user;
            setUser(user);
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
        signInPassword(email, password)
        .then(result => {
            const user = result.user;
            setUser(user);
            
             console.log(user);
        }) 
        
        .catch(error =>{
            setSuccess(false);
            console.error('error', error)
        })


     }
    //  console.log(user);
   
   
    return(
        <div>
            <Navigation
            user={user}></Navigation>
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
                    <Link to="/signup">Sign Up</Link>

                </div>
            </div>  
        </div>
     );
};

export default LogIn;