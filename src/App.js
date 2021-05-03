import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepages/homepage.js';
import ShopPage from './pages/shop/shop.js';
import Header from './components/header/header.js';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.js';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)
function App() {
  return (
    <div>
      <Header />
      <Switch>
        {/* <HomePage/> */}
        <Route exact path='/' component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        {/* <Route path='/hats' component={HatsPage} />  */}
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;