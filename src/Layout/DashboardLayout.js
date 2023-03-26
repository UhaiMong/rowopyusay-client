import React, { useContext } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import useAdmin from '../Hooks/useAdmin';
import Navbar from '../Pages/Navbar/Navbar';

const DashboardLayout = () => {
    const user = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-menu" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-menu" className="drawer-overlay"></label>
                    <ul className="menu p-4 bg-base-100 text-base-content">

                        {
                            isAdmin &&
                            <>
                                <li>
                                    <Link to='/dashboard'>Sellers</Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/buyers'>Buyers</Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;