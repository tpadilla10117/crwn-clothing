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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* Set up Google authentication utility */

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { propmt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;