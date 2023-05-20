import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)
    const [toys, setToys] = useState([])
    const googleProvider = new GoogleAuthProvider();

    const registerWithGooglePopUp = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const registerUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUserWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserAccountInfo = (name, image) => {
        return updateProfile(auth.currentUser, { name, image })
    }
    const userSignOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggetUser => {
            setUser(loggetUser);
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    useEffect(() => {
        fetch("http://localhost:3500/products")
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    // context Providing here
    const provideContext = {
        registerWithGooglePopUp,
        registerUserWithEmail,
        loginUserWithEmail,
        updateUserAccountInfo,
        userSignOut,
        user,
        loading,
        toys,
    }

    return (
        <AuthContext.Provider value={provideContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;