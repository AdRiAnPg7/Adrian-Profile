import React from 'react';
// React FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
// Styles
import '../styles/Navbar.css';
// Logo
import logo from '../assets/amm_logo1.png';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img className="logo" src={logo} alt='amm' />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon className="navbar-menu" icon={faBars}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Home 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About Me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                How Work
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contacts
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
