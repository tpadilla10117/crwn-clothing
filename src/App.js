import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepages/homepage.js';
import ShopPage from './pages/shop/shop.js';
import Header from './components/header/header.js';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.js';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {
  /* constructor() {
    super();

    this.state = {
      currentUser: null
    }
  } */

  unsubscribeFromAuth = null;

  /* Setting the user on state & get user persistence: */
    componentDidMount() {
      const {setCurrentUser} = this.props;
      /* method from auth library in firebase */
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
        /* if a user actually signs in... */
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          /* On the snapShot object is where we get the data related to the user we stored if new, or if is already stored in db*/
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              /* currentUser: { */
                id: snapShot.id,
                /* the rest of the data on the object */
                ...snapShot.data()
              /* } */
            
            }, () => {
              /* console.log("Did we get the data?:", this.state) */
            })
          });
          
        } else {
          /* Equailvalent to setting currentUser to null */
            /* this.setState( {currentUser: userAuth}); */
          setCurrentUser(userAuth);
        }
      })
    }

  /* Closing the subscription and handling auth changes with firebase */
    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }


  render() {
  return (
    <div>
      <Header /* currentUser={this.state.currentUser} */ />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
  }
}

const mapDispatchToProps = dispatch => ( {
  //dispatch takes in an input(object) that passes it as an action object to every reducer:
  setCurrentUser: user => dispatch( setCurrentUser(user) )
})

export default connect( null, mapDispatchToProps)(App);