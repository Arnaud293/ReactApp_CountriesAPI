import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to='/' end className={(nav) => (nav.isActive ? "nav-active" : '')}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to='/about' end className={(nav) => (nav.isActive ? "nav-active" : '')}>
                    <li>A propos</li>
                </NavLink>
                <NavLink to='/blog' end className={(nav) => (nav.isActive ? "nav-active" : '')}>
                    <li>blog</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Nav;