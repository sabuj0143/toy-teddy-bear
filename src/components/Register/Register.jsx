import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { TabTitle } from '../../Utiles/FunctionTitle';

const Register = () => {

    TabTitle('KindleTeddy-Register')

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { createUser, signInWithGoogle } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

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

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                updateName(loggedUser, name, photo)
                setSuccess('User has Create successFully');
                form.reset();
            })
            .catch(error => {
                setError(error.massage)
            })
    };

    const updateName = (user, name, profile) => {
        updateProfile(user, {
            displayName: name,
            photoURL: profile
        })
            .then(() => {
                console.log('Photo and name ');
            })
            .catch(error => {
                console.log(error.message);
            })


    };


    const handleSignInGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-purple-400">
                        <div className="card-body">
                            <h1 className="text-2xl font-bold text-orange-800 text-center">Places Register !</h1>
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="Enter Your Photo URL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Enter Your email" className="input input-bordered" required />
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
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Register" />
                                </div>
                            </form>
                            <p className='text-center my-4'>Already have an account ? <Link className='text-red-800 font-semibold' to="/login"> Login</Link></p>
                            <div className="divider">OR</div>

                            <button onClick={handleSignInGoogle} className='btn btn-outline btn-primary flex items-center space-x-2'> <FaGoogle /> <span> Google</span> </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;