import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    /**
     * Here we're using the useState hook to create
     * three pieces of state. One for the email input's
     * value and the second one for the password input's 
     * value and the third one for the error message we
     * will display if the user enters the wrong email or password
     */

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    /**
     * We're using the useNavigate hook to get access to the navigate function
     * which we can use to navigate the user to a different page
     * 
     */

    const navigate = useNavigate();

    const onLoginClicked = async () => {
        // Send the user's email and password to the server
        // in a Login request
        alert('Login functionality not implemented yet');
    }

    return (
        <div className="content-container">
            <h1>Log In</h1>
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

            <hr />

            <button
                disabled={!email || !password}
                onClick={onLoginClicked}
            >
                Log In
            </button>

            <button onClick={() => navigate('/signup')}>
                Sign Up
            </button>

            <button onClick={() => navigate('/forgot-password')}>
                Forgot Password
            </button>
        </div>
    );
}

     
    