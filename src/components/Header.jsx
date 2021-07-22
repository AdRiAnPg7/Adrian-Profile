import React from 'react';
// React Typed
import Typed from 'react-typed';
// Styles
import '../styles/Header.css';
export default function Header() {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web development and websites promotions</h1>
                <Typed 
                    className="typed-text"
                    strings={['Web Design', 'Web Development', 'Automation', 'UI/UX']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main">Contact Me</a>
            </div>
        </div>
    )
}
