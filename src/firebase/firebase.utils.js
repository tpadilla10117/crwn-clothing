/* importing firebase utility library */
import { initializeApp } from 'firebase/app';

/* import authentication and the db */
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'; //the db

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';

/* The configuration object: */
const config = {
    
    apiKey: "AIzaSyCg9vBG10p7l45Fnj0oLwyba-zUdzVSrCU",
    authDomain: "crwn-db-89f52.firebaseapp.com",
    projectId: "crwn-db-89f52",
    storageBucket: "crwn-db-89f52.appspot.com",
    messagingSenderId: "994106881534",
    appId: "1:994106881534:web:a3af7bdee3f84a919abcaf",
    measurementId: "G-SBSTPEF2R2"
      
}



/* Let's us initialize firebase */
const firebaseApp = initializeApp(config);

/* Need to export the auth and the db to use them:*/
export const auth = getAuth(); 

/* Set up Google authentication utility */
/* Let's us trigger google pop-up for sign in */
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters( { prompt: 'select_account'});

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore(); //instantiate firestore

export const createUserDocumentFromAuth = async (userAuthenticationObject, additionalInformation = {} ) => {
    if(!userAuthenticationObject) return;

    //Check first for a firestore reference
    const userDocRef = doc(db, 'users', userAuthenticationObject.uid);

    //get the data for the user from the snapshot object:
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists() ) {
        const { displayName, email } = userAuthenticationObject;
        
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log('error creating a user', error.message);
        }
    }

    //if user data exists


    return userDocRef;
};

export const createAuthenticatedUser = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthenticatedUser = async (email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};
