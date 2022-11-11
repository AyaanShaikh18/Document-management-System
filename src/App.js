import './App.css';

import Header from './components/header'
import Sidebar from './components/sidebar'
import FilesView from './components/filesView/FilesView'
import SideIcons from './components/sideIcons'
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import Logo from './media/logo.png'

import { auth, provider } from "./firebase";

import { useState } from 'react';
function App() {
  
  
  const [user, setUser] = useState("");

  const signInWithGoogle = () => {
    if (!user){signInWithPopup(auth,provider)
    .then((result)=>{
      setUser(result.user)
        console.log(result.user)
        const profilepic=result.user.photoURL;
        localStorage.setItem("profilepic",profilepic);
    })
    .catch((error)=>{
      alert(error.message);
    });
  }else if (user) {
    auth.signOut().then(() => {
      setUser(null)
    }).catch((err) => alert(err.message))
  }
  };

  // const handleLogin = () => {
  //   if (!user) {
  //     signInWithPopup(auth, provider)
  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // })
  //   }
  // }

  return (
    <div className="app">
      {
        user ? (
          <>
            <Header userPhoto={localStorage.getItem("profilepic")} />
            <div className="app__main">
              <Sidebar />
              <FilesView />
              <SideIcons />
            </div>
          </>
      ) : (
          <div className='app__login'>
            <img src={Logo} alt="DocMan" />
            <button onClick={signInWithGoogle}>Log in to DocMan</button>
          </div>
        )
      }
    </div>
  );
}
export default App;
