// import React, { useState } from 'react';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         //login logic
//         if (!email.includes('@')) {
//             setError('Invalid email format');
//             return;
//         }
//         console.log('Email:', email);
//         console.log('Password:', password);

//         setEmail('');
//         setPassword('');
//         setError('');
//     };

//     return (
//         <div className="container">
//             <div className="row justify-content-center">
//                 <div className="col-md-6">
//                     <h1 className='offset-5 mt-5 '>Login</h1>
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-3 mt-4">
//                             <label htmlFor="email" className="form-label fs-5">Email:<span style={{ color: 'red' }}>*</span></label>
//                             <input
//                                 type="email"
//                                 className="form-control"
//                                 id="email"
//                                 value={email}
//                                 onChange={handleEmailChange}
//                                 required
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label htmlFor="password" className="form-label fs-5">Password:<span style={{ color: 'red' }}>*</span></label>
//                             <input
//                                 type="password"
//                                 className="form-control"
//                                 id="password"
//                                 value={password}
//                                 onChange={handlePasswordChange}
//                                 required
//                             />
//                         </div>
//                         <button type="submit" className="btn btn-primary">Login</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Login logic
        if (!email.includes('@')) {
            setError('Invalid email format');
            return;
        }
        console.log('Email:', email);
        console.log('Password:', password);

        // Perform actual login logic here, for example, by making an API call

        // Assuming login is successful, set the isLoggedIn state to true
        setIsLoggedIn(true);

        // Redirect the user to the desired page after successful login
        navigate('/home');

        setEmail('');
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
                            <label htmlFor="email" className="form-label fs-5">
                                Email:<span style={{ color: 'red' }}>*</span>
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
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
                </div>
            </div>
        </div>
    );
}

export default Login;
