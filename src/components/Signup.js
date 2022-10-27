import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import app from '../Firebase/Firebase.init';
import { AuthContext } from './Context/UserContext';
import Navigation from './Navigation/Navigation';

const auth = getAuth(app);




// const handleSignIn = (event) =>{
//     event.preventDefault();
//     const name = event.target.name.value;
//     const email = event.target.email.value;
//     const url = event.target.url.value;
//     const password = event.target.password.value;

//     createUserWithEmailAndPassword(auth, email, password)
//     .then(result => {
//         const user = result.user;
//         console.log(user);
//     }) 
//     .catch(error =>{
//         console.error('error', error);
//     })

    
//     updateProfile(auth.currentUser, {
//         displayName: name, photoURL: url
//       }).then((result) => {
//         const user = result.user;
//         console.log(user);

//       }).catch((error) => {
//         console.error('error', error);
//       });
// }

const Signup = () => {
    const {createUser} = useContext(AuthContext);
    console.log('createUser: ', createUser)

    const handleSignup = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const url = event.target.url.value;
        const password = event.target.password.value;

    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user);
    }) 
    .catch(error =>{
        console.error('error', error);
    })

    updateProfile(auth.currentUser, {
                displayName: name, photoURL: url
              }).then((result) => {
                const user = result.user;
                console.log(user);
        
              }).catch((error) => {
                console.error('error', error);
              });
}

       

        
   
    return(
        <div>
            <Navigation></Navigation>
            <div className='LogIn'>
                <div className='in'>

                    <form onSubmit={handleSignup}>
                        <input type="text" name = "name" placeholder="Full Name" className='input'></input>
                        <input type="email" name = "email" placeholder="Email" className='input'></input>
                        <input type="url" name = "url" placeholder="Image URL"className='input'></input>
                        <input type="password" name = "password" placeholder='Password' className='input'></input>
                        <button type="submit">Submit</button>
                    </form>
                    <br/>
                    <Link to="/login">Log In</Link>

                </div>
            </div>  
        </div> 
     );
};

export default Signup;