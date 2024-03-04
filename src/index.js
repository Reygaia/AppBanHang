import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
      apiKey: "AIzaSyCx_KlKCjNyv2N7kntybiKXugBEe9xQxcA",
      authDomain: "members-database-e470f.firebaseapp.com",
      databaseURL:
            "https://members-database-e470f-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "members-database-e470f",
      storageBucket: "members-database-e470f.appspot.com",
      messagingSenderId: "132348807344",
      appId: "1:132348807344:web:1c93883240cb18b7da9375",
      measurementId: "G-54DDCGNH73",
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

//detect auth state

onAuthStateChanged(auth, (user) => {
      if (user != null) {
            console.log("Logged in");
      } else {
            console.log("No user");
      }
});
