import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-purple-400">
                    <div className="card-body">
                        <h1 className="text-2xl font-bold text-orange-500 text-center">Places Login !</h1>
                        <form >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder=" Enter your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" />
                            </div>
                            <div className="form-control w-full mx-auto mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center my-4'>New to Kindle Teddy ?<Link className='text-red-500 font-semibold'
                            to="/register"> Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;