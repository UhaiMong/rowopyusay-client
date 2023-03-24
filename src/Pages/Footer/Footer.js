import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icon/logo.png'

const Footer = () => {
    return (
        <div className='p-10 bg-base-100m'>
            <footer className="footer text-base-content">
                <div>
                    <img className='w-24 h-24' src={logo} alt="LOGO" />
                    <p>Smart resale stall<br />We are selling used headphone</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>

                    <Link to='*' className="link link-hover">Sales products</Link>
                    <Link to='*' className="link link-hover">Buy products</Link>
                    <Link to='*' className="link link-hover">Delivery</Link>
                    <Link to='*' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Brand</span>
                    <Link to='*' className="link link-hover">Sennheiser</Link>
                    <Link to='*' className="link link-hover">Bose</Link>
                    <Link to='*' className="link link-hover">Sony</Link>
                    <Link to='*' className="link link-hover">AKG</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='*' className="link link-hover">Terms of use</Link>
                    <Link to='*' className="link link-hover">Privacy policy</Link>
                    <Link to='*' className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <div className='text-center mt-5'>
                <p>Copyright © 2022 - All right reserved by <strong className='hover:underline'>Smart resale stall</strong></p>
            </div>
        </div>
    );
};

export default Footer;