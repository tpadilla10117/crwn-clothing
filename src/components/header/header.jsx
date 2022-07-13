import React, { Fragment, /* useContext */ } from 'react';
/* import { UserContext } from '../../contexts/user.context'; */
/* import { CartContext } from '../../contexts/cart.context'; */
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectIsCartOpen } from '../../redux/cart/cart.selectors';
import { Link, Outlet } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

/* Syntax for importing SVG - we tell create react app that we want a react component that renders an SVG, rather than its filename*/
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { signOutUser } from '../../firebase/firebase.utils';

import './header.scss';

const Header = ( ) => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);

//Context API code:
    /* const { currentUser } = useContext(UserContext); */
    /* const { isCartOpen } = useContext(CartContext); */

    return (
        <Fragment>
            <div className="header">
                <Link className="logo-container" to="/">
                    <Logo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    <Link className="nav-link" to='/shop'>CONTACT</Link>

                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                        )

                        : <Link className="nav-link" to='/authentication'>SIGN IN</Link>
                    }

                    <CartIcon/>
                </div>
            {/* Short Circuit Operator to eval truthiness: */}
                {isCartOpen && <CartDropdown />}
            
            </div>
            <Outlet />
        </Fragment>
    )
};

export default Header;