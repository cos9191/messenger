import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCP3ewNIO-NA1iazoMX-IfK0Lw6OsQObyk",
    authDomain: "messenger-9194e.firebaseapp.com",
    projectId: "messenger-9194e",
    storageBucket: "messenger-9194e.appspot.com",
    messagingSenderId: "394189290855",
    appId: "1:394189290855:web:60101ab8179f52920d03c2",
    measurementId: "G-4REBW898KS"
};

firebase.initializeApp(firebaseConfig);
export const Context = createContext<{
    firebase: typeof firebase;
    auth: firebase.auth.Auth;
    firestore: firebase.firestore.Firestore;
} | null>(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{
      firebase,
      auth,
      firestore
  }}>
    <App />
  </Context.Provider>
);
