import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
/* import HomePage from './pages/homepages/homepage.js'; */
/* import ShopPage from './pages/shop/shop.js'; */
/* import CheckoutPage from './pages/checkout/checkoutpage'; */
import Spinner from './components/spinner/spinner';
/* import Header from './components/header/header.jsx'; */
/* import Authentication from './pages/authentication/authentication'; */
import { connect, useDispatch } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector.js';
import { createStructuredSelector } from 'reselect';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth
} from './firebase/firebase.utils.js';

/* Code Splitting my routes & reducing bundle.js: */
const HomePage = lazy( () => import('./pages/homepages/homepage.js'));
const Authentication = lazy( () => import('./pages/authentication/authentication'));
const Header = lazy( () => import('./components/header/header.jsx'));
const ShopPage = lazy( () => import('./pages/shop/shop.js'));
const CheckoutPage = lazy( () => import('./pages/checkout/checkoutpage'));

const App = () => {

  const dispatch = useDispatch();

  useEffect( () => {
    const unsubscribe = onAuthStateChangedListener( (user) => {
        if(user) {
            createUserDocumentFromAuth(user);
        };
        dispatch(setCurrentUser(user) );
        console.log('from onAuthStateChangedListener:', user);
    })

    return unsubscribe;

  }, [dispatch]);

  return (
      <Suspense fallback={<Spinner />}>
        <Routes>

          <Route path='/' element={<Header/> } >
            <Route index element={<HomePage />} />
            <Route path="shop/*" element={<ShopPage/>} />
            <Route path='checkout' element={<CheckoutPage/>} />
            <Route path='authentication' element={<Authentication/>} />
          </Route> 

        </Routes>
      </Suspense>
  );
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ( {
  //dispatch takes in an input(object) that passes it as an action object to every reducer:
  setCurrentUser: user => dispatch( setCurrentUser(user) )
})

export default connect( mapStateToProps, mapDispatchToProps)(App);