import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../../../firebase/firabase.config';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);
    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //google login
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }
    //logout user
    const logoutUser = () => {
        return signOut(auth)
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                setUsers(user)
                // ...
            } else {
                // User is signed out
                setUsers(null)
                // ...
            }
        });
    }, [auth])


    const authInfo = { users, createUser, loading, loginUser, logoutUser, googleLogin }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;