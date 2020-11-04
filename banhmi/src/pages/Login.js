import React from 'react';
import Logo from '../images/bread.png'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login">
            <Link to="/"><img className="logo" src={Logo} alt="logo" /></Link>
            <div className="login__container">
                <form>
                    <input type="text" id="email" name="email" placeholder="Email" />
                    <input type="password" id="lname" name="password" placeholder="Password" />
                    <button type="submit">Sign In</button>
                </form>
                <button>Create account</button>
            </div>

        </div>
    );
};

export default Login;