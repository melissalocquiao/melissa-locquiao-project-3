//Import firebase module
import firebase from 'firebase/app';

//Import database info from firebase module
import 'firebase/database';

//Initialize firebase
const firebaseConfig = {
  apiKey: "AIzaSyBp3yH0dDKg7RHTmXX7Ub4-oqoSJmd7_lw",
  authDomain: "ecommerce-shop-project-3.firebaseapp.com",
  databaseURL: "https://ecommerce-shop-project-3-default-rtdb.firebaseio.com",
  projectId: "ecommerce-shop-project-3",
  storageBucket: "ecommerce-shop-project-3.appspot.com",
  messagingSenderId: "584447362760",
  appId: "1:584447362760:web:03e091de2aa9ae996d87fd"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
