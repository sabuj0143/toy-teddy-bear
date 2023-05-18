import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/logo.avif'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <>
            <div className="navbar w-full mx-auto px-4 py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/allToys">All Toys</Link></li>

                            {
                                user && <li><Link to="/myToys">My Toys</Link></li>
                            }
                            {
                                user && <li><Link to="/addToys">Add Toys</Link></li>
                            }

                            <li><Link to="/blogs">Blogs</Link></li>
                        </ul>
                    </div>
                    <img className='w-[40px] h-[40px]' src={logo} alt="" />
                    <a className="ml-2 text-xl">KINDLE.<span className='text-orange-500'>teddy</span> </a>
                </div>
                <div className="navbar-center items-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/allToys">All Toys</Link></li>

                        {
                            user && <>
                                <li><Link to="/myToys">My Toys</Link></li>
                                <li><Link to="/addToys">Add Toys</Link></li>
                            </>
                        }

                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <div className='flex items-center md:gap-3'>
                        <div className="tooltip mt-2" data-tip={user?.displayName}>
                            {/* <span>{user?.email}</span> */}
                            <img className='w-[50px] h-[50px] rounded-full' src={user?.photoURL} alt="" />
                        </div>
                        <Link onClick={handleLogOut} className="btn">Log Out</Link>
                    </div> :
                        <Link to="/login" className="btn">Login</Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Header;