import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; //redux component that gives access to a redux store object
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import  { Elements } from '@stripe/react-stripe-js';
/* import { UserProvider } from './contexts/user.context'; */
/* import { CategoriesProvider } from './contexts/categories.context'; */
/* import { CartProvider } from './contexts/cart.context'; */

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <BrowserRouter>
        {/* <UserProvider> */}
          {/* <CategoriesProvider> */}
            {/* <CartProvider> */}
            <Elements>
              <App />
            </Elements>
            {/* </CartProvider> */}
          {/* </CategoriesProvider> */}
        {/* </UserProvider> */}
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

