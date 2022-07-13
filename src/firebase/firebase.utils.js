/* importing firebase utility library */
import { initializeApp } from 'firebase/app';

/* import authentication and the db */
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore'; //the db

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
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

//Collection method -> creates a collection ref. to create a new collection:
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);

    //use writeBatch to carry out a transaction in the database:
    const batch = writeBatch(db);

    //Objects are my categories in the collection:
    objectsToAdd.forEach( (object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
};

//Retrieve data from firestore:
//helpers functions isolate the areas that our app interfaces with
// *Commented out portion is Context API code:
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(docSnapshot => docSnapshot.data() );

    /* const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap; */

};

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

export const signOutUser = async () => await signOut(auth);


// Observers: can hook into a stream of events and trigger based on changes
// takes two parameters: auth, and some callback everytime the auth state changes
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);