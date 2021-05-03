import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepages/homepage.js';
import ShopPage from './pages/shop/shop.js';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
        {/* <HomePage/> */}
        <Route exact path='/' component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        {/* <Route path='/hats' component={HatsPage} />  */}
      </Switch>
    </div>
  );
}

export default App;