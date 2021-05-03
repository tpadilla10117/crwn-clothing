import React from 'react';
import { Link } from 'react-router-dom';
/* Syntax for importing SVG */
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo classNAme="logo" />
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className="option" to='/shop'>CONTACT</Link>
        </div>
    </div>
)

export default Header;