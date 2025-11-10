import React from 'react';
import './Navbar.scss'
import {Link, NavLink} from "react-router-dom";
import classNames from "classnames";


export const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/'><img className="logo" src="./SideImage/Logo.png" alt="Logo"/></Link>
            <ul className="navigation">
                <li className="navigation__text"><NavLink
                    className={({isActive}) => classNames("link", {"is-active": isActive})}
                    to='/'>Головна</NavLink></li>
                <li className="navigation__text"><NavLink
                    className={({isActive}) => classNames("link", {"is-active": isActive})}
                    to='/schedule'>Розклад</NavLink></li>
                <li className="navigation__text"><NavLink
                    className={({isActive}) => classNames("link", {"is-active": isActive})}
                    to='/cinema'>Кінотеатри</NavLink></li>
                <li className="navigation__text"><NavLink
                    className={({isActive}) => classNames("link", {"is-active": isActive})}
                    to='/contacts'>Контакти</NavLink></li>
            </ul>
        </nav>
    )
}
