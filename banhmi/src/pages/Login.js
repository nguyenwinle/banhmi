import React, { useState } from 'react';
import Logo from '../images/hotbread.png'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();

    const signIn = e => {
        e.preventDefault();

        // some fancy firebase login
        auth.signInWithEmailAndPassword(email, password)
            .then(auth =>
                history.push('/')
            )
            .catch(error => alert(error.message))
    }

    // const register = e => {
    //     e.preventDefault();

    //     // do some fancy firebase register
    //     auth.createUserWithEmailAndPassword(email, password)
    //         // successfully created user
    //         .then((auth) => {
    //             if (auth) {
    //                 history.push('/')
    //             }
    //         })
    //         .catch(error => alert(error.message))
    // }

    return (
        <div className="login">
            <Link to="/"><img className="logo" src={Logo} alt="logo" /></Link>
            <div className="login__container">
                <form>
                    <input type="text" id="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" id="lname" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit" onClick={signIn} >Sign In</button>
                </form>
            </div>
            <Link to="/signup">Create account</Link>
        </div>
    );
};

export default Login;