import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //higher-order component
import { auth } from '../../firebase/firebase.utils';

/* Syntax for importing SVG - we tell create react app that we want a react component that renders an SVG, rather than its filename*/
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';

const Header = ( { currentUser} ) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className="option" to='/shop'>CONTACT</Link>
            {
                currentUser ? <div className="option" onClick={ () => auth.signOut() }>SIGN OUT</div> : <Link className="option" to='/signin'>SIGN IN</Link>

            }
        </div>
    </div>
);

//Use this to gain access to properties from our redux reducers:
const mapStateToProps = state => ( {
    currentUser: state.user.currentUser
})

//connect() is higher-order component that gets access to 1 of 2 functions:
export default connect(mapStateToProps)(Header);