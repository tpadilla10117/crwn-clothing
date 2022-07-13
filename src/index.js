import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; //redux component that gives access to a redux store object
import store from './redux/store';
/* import { UserProvider } from './contexts/user.context'; */
/* import { CategoriesProvider } from './contexts/categories.context'; */
/* import { CartProvider } from './contexts/cart.context'; */

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <UserProvider> */}
        {/* <CategoriesProvider> */}
          {/* <CartProvider> */}
            <App />
          {/* </CartProvider> */}
        {/* </CategoriesProvider> */}
      {/* </UserProvider> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

