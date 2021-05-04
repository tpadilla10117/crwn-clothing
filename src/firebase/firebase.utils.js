/* importing firebase utility library */
import firebase from 'firebase/app';

/* import authentication and the db */
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
    apiKey: "AIzaSyCg9vBG10p7l45Fnj0oLwyba-zUdzVSrCU",
    authDomain: "crwn-db-89f52.firebaseapp.com",
    projectId: "crwn-db-89f52",
    storageBucket: "crwn-db-89f52.appspot.com",
    messagingSenderId: "994106881534",
    appId: "1:994106881534:web:a3af7bdee3f84a919abcaf",
    measurementId: "G-SBSTPEF2R2"
      
}

/* Let's us take the userAuth obj from the authentication library and store it in our DB.  It's an API request */
    export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
        
        const userRef = firestore.doc(`users/${userAuth.uid}`)

        const snapShot = await userRef.get();
        console.log("This is the snapShot:", snapShot);

    /* If the snapshot doesn't exist, we create data in its place */
        if(!snapShot.exists) {
            const { displayName, email } = userAuth;

            /* When we invoked the item */
            const createdAt = new Date();

            try {
                await userRef.set( {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch (error) {
                console.log('error creating user:', error.message);
            }
        }

        return userRef;

        /* console.log(firestore.doc('users/123232shadu')); */


        /* query in firestore to see if exists */

    }




/* Let's us initialize firebase */
firebase.initializeApp(config);

/* export the auth and the db */
export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* Set up Google authentication utility */
/* Let's us trigger google pop-up for sign in */
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;