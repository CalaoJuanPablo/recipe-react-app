import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

firebase.initializeApp({
  apiKey: "AIzaSyCYUEmu5vOXUeiUUpueCYzb1jxJOqUIXdg",
  authDomain: "recipeapp-5741e.firebaseapp.com",
  databaseURL: "https://recipeapp-5741e.firebaseio.com",
  projectId: "recipeapp-5741e",
  storageBucket: "",
  messagingSenderId: "895322652070"
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
