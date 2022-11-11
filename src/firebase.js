import { initializeApp } from 'firebase/compat/app';
import { GoogleAuthProvider,getAuth, signInWithPopup} from 'firebase/auth';
import {getFirestore,query,getDocs,collection, where, addDoc, firestore,} from 'firebase/compat/firestore';

//  import { GoogleAuthProvider, getAuth } from 'firebase/compat/auth';

//  import {firestore, getFirestore} from 'firebase/firestore';
//  import { initializeApp } from "firebase/app";
  import {getStorage} from 'firebase/storage';

 import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB2xkOE1Yu7taAnT-7QRupFCMG2sGrxrJk",
  authDomain: "docman-6d42f.firebaseapp.com",
  projectId: "docman-6d42f",
  storageBucket: "docman-6d42f.appspot.com",
  messagingSenderId: "359340189608",
  appId: "1:359340189608:web:8e1a95e34dbaecee2e1f9d"
};
// const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
const store = getStorage(app);
const auth = getAuth(app);


const provider = new GoogleAuthProvider();
// const store = firebase.firestore.getFirestore;
const db = firebase.firestore();


export {auth,provider,db,store,app}

// second
// import {getStorage} from 'firebase/storage';

// import firebase from 'firebase/compat/app';
// import { initializeApp } from 'firebase/compat/app';
// import { GoogleAuthProvider,getAuth, signInWithPopup,signInWithEmailAndPassword, createUserWithEmailAndPassword,sendPasswordResetEmail,signOut, } from 'firebase/compat/auth';
// import {getFirestore,query,getDocs,collection, where, addDoc, firestore,} from 'firebase/compat/firestore';

// const googleProvider = new GoogleAuthProvider();
// const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(auth, googleProvider);
//     const user = res.user;
//     const q = query(collection(db, "users"), where("uid", "==", user.uid));
//     const docs = await getDocs(q);
//     if (docs.docs.length === 0) {
//       await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const logInWithEmailAndPassword = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const registerWithEmailAndPassword = async (name, email, password) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     await addDoc(collection(db, "users"), {
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const sendPasswordReset = async (email) => {
//   try {
//     await sendPasswordResetEmail(auth, email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const logout = () => {
//   signOut(auth);
//
// };