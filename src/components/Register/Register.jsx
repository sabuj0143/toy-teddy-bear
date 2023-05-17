import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {

    return (
        <>
            <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-purple-400">
                        <div className="card-body">
                            <h1 className="text-2xl font-bold text-orange-800 text-center">Places Sign Up !</h1>
                            <form>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Enter Your email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Enter Your password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className='text-center my-4'>Already have an account ? <Link className='text-red-800 font-semibold' to="/login"> Login</Link></p>
                            <div className="divider">OR</div>
                            
                                <button className='btn btn-outline btn-primary flex items-center space-x-2'> <FaGoogle /> <span> Google</span> </button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;