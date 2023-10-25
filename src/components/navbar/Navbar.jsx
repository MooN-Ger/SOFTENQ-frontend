import React from 'react';
import './navbar.less'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__header">MY APP</div>
                <div className="navbar__login"><NavLink to="/login">Войти</NavLink></div>
                <div className="navbar__registration"><NavLink to="/registration">Регистрация</NavLink></div>
            </div>
        </div>
    );
};

export default Navbar;