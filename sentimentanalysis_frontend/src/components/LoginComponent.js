import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Login logic
        console.log('username:', username);
        // console.log('Password:', password);

        // Perform actual login logic here, for example, by making an API call

        // Assuming login is successful, set the isLoggedIn state to true
        setIsLoggedIn(true);

        // Redirect the user to the desired page after successful login
        navigate('/home');

        setUsername('');
        setPassword('');
        setError('');
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="offset-5 mt-5">Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-4">
                            <label htmlFor="username" className="form-label fs-5">
                                Username:<span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={handleUsernameChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label fs-5">
                                Password:<span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn bttn">
                            Login
                        </button>
                    </form>
                    <p className='mt-3'>Don't have an account? <Link to='/signup'>Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
