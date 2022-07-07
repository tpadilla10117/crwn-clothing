import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepages/homepage.js';
import ShopPage from './pages/shop/shop.js';
import CheckoutPage from './pages/checkout/checkout.component.js';
import Header from './components/header/header.jsx';
import Authentication from './pages/authentication/authentication';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector.js';
import { createStructuredSelector } from 'reselect';


const App = () => {

  return (
    <div>
    
      <Routes>

        <Route path='/' element={<Header/> } >
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage/>} />
          <Route path='checkout' element={<CheckoutPage/>} />
          <Route path='authentication' element={<Authentication/>} />
        </Route> 

      </Routes>
    </div>
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