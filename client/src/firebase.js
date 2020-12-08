import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAxha5URmgTCxb_2FzKgl4ErM_XO7YQtxg",
    authDomain: "meme-post-dev.firebaseapp.com",
    databaseURL: "https://meme-post-dev-default-rtdb.firebaseio.com",
    projectId: "meme-post-dev",
    storageBucket: "meme-post-dev.appspot.com",
    messagingSenderId: "937027276683",
    appId: "1:937027276683:web:dcef14bb0690e45a09298e"
}) 


export const auth = app.auth()
export default app
