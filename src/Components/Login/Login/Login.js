import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';

import useAuth from './../../../hooks/useAuth';


const Login = () => {

    const { signInUsingGoogle, setUser, error, setError, handleUserRegister,
        handleUserLogin, } = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [isLogin, setIsLogin] = useState(false);



    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'
    // google login
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                setError("");
                setUser(result.user)
                history.push(redirect_url)
            })
    }


    const toggleLogin = (e) => {
        setIsLogin(e.target.checked);
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleEmailRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password must be 6 characters long.");
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError("Password must contain 2 upper case");
            return;
        }

        isLogin ? processLogin(email, password) : registerUser(email, password);
    };
    const processLogin = (email, password) => {
        handleUserLogin(email, password)
        history.push(redirect_url)
    };
    const registerUser = (email, password) => {
        handleUserRegister(email, password)
        history.push(redirect_url)
    };




    return (
        <div className="mx-5">
            <form  onSubmit={handleEmailRegistration}>
                <h3 className="text-primary m-5">
                    Please {isLogin ? "Login" : "Register"}
                </h3>
                {!isLogin && (
                    <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">
                            Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                onBlur={handleNameChange}
                                className="form-control"
                                id="inputName"
                                required
                            />
                        </div>
                    </div>
                )}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="email"
                            onBlur={handleEmailChange}
                            className="form-control"
                            id="inputEmail3"
                            required
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                        Password
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="password"
                            onBlur={handlePasswordChange}
                            className="form-control"
                            id="inputPassword3"
                            required
                        />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input
                                onChange={toggleLogin}
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck1"
                            />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already registered
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">
                    {isLogin ? "Login" : "Register"}
                </button>
                <br />

            </form>

            <div>----------------------------</div>
            <br />
            <br />
            <br />
            <button onClick={handleGoogleSignIn}>Google sign in</button>
        </div>
    );
};

export default Login;