import React, { useState } from 'react';
import Logo from '../images/bread.png'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordMatch, setPasswordMatch] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [error, setError] = useState('')
    const history = useHistory();

    const register = e => {
        e.preventDefault();

        if (password !== passwordMatch) {
            setError('Pasword does not match!')
        }
        // do some fancy firebase register
        else {
            auth.createUserWithEmailAndPassword(email, password)
                // successfully created user
                .then((auth) => {
                    auth.user.updateProfile({
                        displayName: displayName // some displayName,
                    })
                    if (auth) {
                        history.push('/')
                    }
                })
                .catch(error => setError('Please fill out the fields'))
        }
    }
    return (
        <div className="signup">
            <Link to="/"><img className="logo" src={Logo} alt="logo" /></Link>
            <div className="signup__container">
                <form>
                    <input type="text" id="name" name="name" placeholder="Full Name" value={displayName} onChange={e => setDisplayName(e.target.value)} />
                    <input type="text" id="email" name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="password" id="passwordMatch" name="passwordMatch" placeholder="Confirm Password" value={passwordMatch} onChange={e => setPasswordMatch(e.target.value)} />
                    {error}
                    {<button onClick={register} >Create account</button>}
                </form>
            </div>
            <Link to="/login">Already have an account? Login</Link>
        </div>
    );
};

export default Signup;