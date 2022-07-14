
<!-- 1) npm i firebase -->

<!-- 2) Create a folder called 'firebase' to -->
<!-- 3) In the firebase folder, create a firebase.utils.js file -->

<!-- 4) Import the 'initializeApp' configuration from 'firebase/app' that allows you to create an instance of firebase and attach it to an instance online in your firebase console -->

<!-- 5) Add Firebase to your web app => it generates a package, a 'const firebaseConfig' variable that you paste into your firebase.utils.js -->

<!-- 6) import 'firebase/auth'; -->
<!-- 7) import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';  -->


<!-- 8) Initialize a 'provider' variable to make a new GoogleAuthProvider() instance -->


<!-- 9) Use setCustomParameters to tell your provider how to behave.  E.g. we want to force someone to select an account:

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account'});

 -->

 <!-- 10) Need to export your autehntication
 
 e.g. export const auth = firebase.auth(); 

 OR

 export const auth = getAuth();
 
  -->

  <!-- 11) Export your popup:
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  OR

  export const signInWithGoogle = () => signInInWithPopup(auth, provider);
  
  -->


  <!-- 12) Go Back to your application on the Firebase side -> Authentication -> Sign-In -> enable the signin and choose a project support email
  
  - save
  
   -->


   <!-- Netlify CLI (Command Line Interface) -->
   <!-- Takes the place of our dev server -->
   <!-- Can control Netlify platform through the command line -->
<!-- npm i -g -->
<!-- netlify dev  - started a dev server--> 