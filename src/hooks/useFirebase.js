import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Components/Login/Firebase/Firebase.init';





initializeAuthentication()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState("");
    const [isloading, setIsloading] = useState(true)
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsloading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

            .catch(error => {
                setUser(error.message)
            })
            .finally(() => setIsloading(false))
    }


    const logOut = () => {

        signOut(auth)
            .then(() => { })
            .finally(() => setIsloading(false))
            .catch((error) => {
            });

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsloading(false)
        });
        return () => unsubscribed;
    }, [])

    // register with email and password 
    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setError("");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError("");
            })
            .catch((error) => {
                // const errorMessage = error.message;
            });
    };

    return {
        auth,
        user,
        isloading,
        setError,
        error,
        setUser,
        signInUsingGoogle,
        handleUserRegister,
        handleUserLogin,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        logOut

    }

}
export default useFirebase;