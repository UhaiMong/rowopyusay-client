import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icon/logo.png'
import { AuthContext } from '../../Context/Authprovider';
import { ImCart } from 'react-icons/im';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const url = `http://localhost:8000/users`;
    const { data: users } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    });
    // console.log(allUser);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const menulist = <>
        {
            user?.uid &&
            <p>Welcome<small>{user.displayName}</small></p>
        }
        <Link to='/'>Home</Link>
        <Link to='/advertisement'>Advertisement</Link>
        <Link to='/addProduct'>Add Products</Link>
        <Link to='/myProducts'>My Products</Link>
        <Link to='/history'>History</Link>
        <button>
            <Link to="/orderedProduct"><ImCart /></Link>
        </button>
        {
            user?.uid ?
                <>
                    <Link onClick={handleLogout}>Logout</Link>
                </>
                :
                <Link to='/login'>Login</Link>
        }
        <Link to='/dashboard'>Dashboard</Link>
    </>


    return (
        <div className="navbar h-14 bg-base-100 text-white font-semibold z-50 shadow-xl sticky top-0 justify-between mb-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-4 p-2 shadow-xl rounded-md w-52  bg-[#a2d2ff] text-[#264653] font-semibold z-50">
                        <li>{menulist}</li>
                    </ul>
                </div>

                <div>
                    <Link className="btn btn-ghost" to='/'><img className='w-16 h-16' src={logo} alt="Logo" /></Link>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>{menulist}</li>
                </ul>
            </div>
            <label htmlFor='dashboard-menu' tabIndex={3} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </label>
        </div>
    );
};

export default Navbar;