import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAC4wAzpYZeitakkr-Zl3WL2ELl2lp3TAc",
    authDomain: "fir-recipebook-c7ea6.firebaseapp.com",
    projectId: "fir-recipebook-c7ea6",
    storageBucket: "fir-recipebook-c7ea6.appspot.com",
    messagingSenderId: "391966899827",
    appId: "1:391966899827:web:1cbcdc0be4bc3a5afef406",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const db = app.firestore();
export default app;
