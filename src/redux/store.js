/* This is the redux store: */
    import { createStore, applyMiddleware } from 'redux';
    import logger from 'redux-logger';

    import rootReducer from './root-reducer';

    //We setup our middleware:
    const middlewares = [logger];

    //createStore gets the rootReducer, and return value of all the middlewares (we get the values as individual arguments):
    const store = createStore( rootReducer, applyMiddleware(...middlewares) );

    export default store;