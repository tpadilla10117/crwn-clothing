/* This is the redux store: */
    import { createStore, applyMiddleware, compose } from 'redux';
    import { persistStore, persistReducer } from 'redux-persist';
    import storage from 'redux-persist/lib/storage';
    import logger from 'redux-logger';

    import rootReducer from './root-reducer';

    //We setup our middleware; our logger shows us our action and how it looks after dispatched:
    //Generate with compose -> passes every middleware into applyMiddleware
    //process.env.Node_ENV === 'development' will show the logger middleware if in development mode

    const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);
    const composedEnhancers = compose(applyMiddleware(...middlewares));

    const persistConfig = {
        key: 'root',
        storage,
        blacklist: ['user']
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    //createStore gets the rootReducer, and return value of all the middlewares (we get the values as individual arguments):
    //3 arguments: your rootReducer, any additional default states (undefined), middlewares
    export const store = createStore( persistedReducer, undefined, composedEnhancers );

    export const persistor = persistStore(store);
