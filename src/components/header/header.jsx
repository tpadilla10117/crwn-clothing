import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { connect } from 'react-redux'; //higher-order component
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
/* Syntax for importing SVG - we tell create react app that we want a react component that renders an SVG, rather than its filename*/
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import './header.scss';

const Header = ( { currentUser, hidden} ) => (
    <Fragment>
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="nav-links-container">
                <Link className='nav-link' to='/shop'>SHOP</Link>
                <Link className="nav-link" to='/shop'>CONTACT</Link>
                {
                    currentUser ? <div className="nav-link" onClick={ () => auth.signOut() }>SIGN OUT</div> : <Link className="nav-link" to='/signin'>SIGN IN</Link>

                }
                <CartIcon/>
            </div>
            {hidden ? null : <CartDropdown />}
        
        </div>
        <Outlet />
    </Fragment>
);

//Use this to gain access to properties from our redux reducers:
const mapStateToProps = createStructuredSelector( {
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

//connect() is higher-order component that gets access to 1 of 2 functions:
export default connect(mapStateToProps)(Header);