 <!-- /* Custom Middleware:

        - 'currying' a function is a function that returns you back another function
        - e.g. Creating our own logger middleware:

        const loggerMiddleware = (store) => (next) => (action) => {
            if(!action.type) {
                return next(action);
            }

            console.log('type', action.type);
            console.log('payload', action.payload);
            console.log('currentState', store.getState() );


            next(action);


            console.log('next state': store.getState() );
        }
    
    */ -->