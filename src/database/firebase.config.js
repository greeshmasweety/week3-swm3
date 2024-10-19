import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDEbc4nAvTa1a-yT0vK5cbCSMaFg8LOC1s",
    authDomain: "chat-app-3c251.firebaseapp.com",
    projectId: "chat-app-3c251",
    storageBucket: "chat-app-3c251.appspot.com",
    messagingSenderId: "146164237690",
    appId: "1:146164237690:web:0bd7643e50457ed4a042c3",
    measurementId: "G-HGKG16W40G"
};


const app = initializeApp(firebaseConfig);



 const auth = getAuth(app);
 const db = getFirestore(app);

export{auth,db}