/* This is the redux store: */
    import { createStore, applyMiddleware, compose } from 'redux';
    import logger from 'redux-logger';

    import rootReducer from './root-reducer';

    //We setup our middleware; our logger shows us our action and how it looks after dispatched:
    //Generate with compose -> passes every middleware into applyMiddleware
    const middlewares = [logger];
    const composedEnhancers = compose(applyMiddleware(...middlewares));

    //createStore gets the rootReducer, and return value of all the middlewares (we get the values as individual arguments):
    //3 arguments: your rootReducer, any additional default states (undefined), middlewares
    const store = createStore( rootReducer, undefined, composedEnhancers );

    export default store;