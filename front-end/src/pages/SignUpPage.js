import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';

export const SignUpPage = () => {
    /**
     * 
     * Here we're using the useState hook to create
     * four pieces of state. One for the email input's
     * value and the second one for the password input's 
     * value and the third one for the error message we
     * will display if the user enters the wrong email or password
     * and the fourth one for the confirm password input's value
     * 
     * The fifth one uses useToken hook to create a piece of state
     * and it is for the token we will get back from the server
     * after the user successfully signs up
     *
     */

    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [token, setToken] = useToken();

    /**
     * 
     * We're using the useNavigate hook to get access to the navigate function
     * which we can use to navigate the user to a different page
     * 
     */

    const navigate = useNavigate();

    const onSignUpClicked = async () => {
        /**
         * 
         * Send the user's email and password to the server
         * in a SignUp request
         * 
         */
    
        const response = await axios.post('/api/signup', {
            email: emailVal,
            password: passwordVal,
        });

        const { token } = response.data;
        setToken(token);
        navigate('/');

    }

    return (
        <div className="content-container">
            <h1>Sign Up</h1>
            {errorMessage && <div className="fail">{errorMessage}</div>}

            <input
                type="email"
                placeholder="Email"
                value={emailVal}
                onChange={e => setEmailVal(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={passwordVal}
                onChange={e => setPasswordVal(e.target.value)}
            />

            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
            />

            <hr />

            <button
                disabled={!emailVal || !passwordVal || passwordVal !== confirmPassword}
                onClick={onSignUpClicked}
            >
                Sign Up
            </button>

            <button onClick={() => navigate('/login')}>
                Already have an account? Log In
            </button>

        </div>
    );
}

     
    