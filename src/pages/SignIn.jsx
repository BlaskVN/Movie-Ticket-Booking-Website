import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import React from "react";
import './Signin.css'
    const SignIn = () => {
        return (
            <div className="signin">
            <div className="wrapper">
                <form action="">
                    <h1>Sign In</h1>
                    </form>
                    <div className="inputbox">
                        <input type="text" placeholder="Username"required/>
                        <FaUser className="icon"/>
                    </div>
                    <div className="inputbox">
                        <input type="password" placeholder="Password"required/>
                        <FaLock className="icon"/>
                    </div>
                    <button type="submit">Sign In</button>
                    <div className="register">
                        <p>Don't have an account ? <a href="#"> SignUp </a> </p>
                    </div>

            </div>
            </div>

        );
    };
export default SignIn;