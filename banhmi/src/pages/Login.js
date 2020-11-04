import React from 'react';
import Logo from '../images/bread.png'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login">
            <Link to="/"><img className="logo" src={Logo} alt="logo" /></Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" />
                    <label for="password">Password:</label>
                    <input type="password" id="lname" name="password" />
                    <button type="submit">Sign In</button>
                </form>
                <button>Create account</button>
            </div>

        </div>
    );
};

export default Login;