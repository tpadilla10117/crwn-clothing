import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepages/homepage.js';
import ShopPage from './pages/shop/shop.js';
import Header from './components/header/header.js';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.js';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  /* Setting the user on state & get user persistence: */
    componentDidMount() {
      /* method from auth library in firebase */
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async user => {
        createUserProfileDocument(user);
        /* this.setState( { currentUser: user}); */
        console.log("This is my logged in user:", user);
      })
    }

  /* Closing the subscription and handling auth changes with firebase */
    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }


  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
  }
}

export default App;