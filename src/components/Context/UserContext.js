import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateCurrentUser } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState({displayName: 'Aakash'});
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);

    }

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const GitHubProvider = new GithubAuthProvider()
    const signInWithGitHub = () => {
        return signInWithPopup(auth, GitHubProvider)
    }


    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('auth state changed', currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {user, createUser, signInPassword, signInWithGoogle, signInWithGitHub}
   
    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
     );
};

export default UserContext;