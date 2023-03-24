import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // signIn with google

    const googleProvider = new GoogleAuthProvider();
    const googleSignin = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    // create account with email and password

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // update user

    const updateUser = (useInfo) => {
        return updateProfile(auth.currentUser,useInfo)
    }
    // Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("CurrentUser observing", currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        googleSignin,
        updateUser,
        logOut,
        signIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;