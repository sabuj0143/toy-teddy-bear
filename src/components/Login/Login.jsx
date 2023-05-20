import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { TabTitle } from '../../Utiles/FunctionTitle';

const Login = () => {

    TabTitle ('KindleTeddy - Login')

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [user, setUser] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { signInWithGoogle, signIn } = useContext(AuthContext);


    const handleUserLogin = event => {
        event.preventDefault();
        setSuccess('')

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');
        // validate if elseif using to password condition.
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('places One Uppercase add him.');
            return;
        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setError('Assert a string has at least one special character');
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('Assert a string has at least one number');
            return;
        }

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                setUser(loggedUser);
                setSuccess('User has Create successFully');
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.massage)
            })
    };

    const handleSignInGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-purple-400">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold text-orange-800 text-center">Places Login !</h1>
                        <form onSubmit={handleUserLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder=" Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="********" className="input input-bordered" required />
                            </div>
                            <div className='mt-2'>
                                <p className='text-red-800'>{error}</p>
                                <p className='text-green-900'>{success}</p>
                            </div>
                            <div className="form-control w-full mx-auto mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center my-4'>New to Kindle Teddy ?<Link className='text-red-800 font-semibold'
                            to="/register"> Register</Link></p>
                        <div className="divider">OR</div>

                        <button onClick={handleSignInGoogle} className='btn btn-outline btn-primary flex items-center space-x-2'> <FaGoogle /> <span> Google</span> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;