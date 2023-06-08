import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
     */

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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
    
        alert('SignUp functionality not implemented yet');
    }

    return (
        <div className="content-container">
            <h1>Sign Up</h1>
            {errorMessage && <div className="fail">{errorMessage}</div>}

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
            />

            <hr />

            <button
                disabled={!email || !password || password !== confirmPassword}
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

     
    