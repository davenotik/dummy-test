import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

var config = {
  apiKey: "AIzaSyDkAiaQ0MgL9DCoDySbNaasAXUZacxpB7M",
  authDomain: "woven-react.firebaseapp.com",
  databaseURL: "https://woven-react.firebaseio.com",
  projectId: "woven-react",
  storageBucket: "woven-react.appspot.com",
  messagingSenderId: "354329064407"
};

var app = firebase.initializeApp(config);
var db = app.database();

var hellodata = db.ref('/helloworld');
hellodata.set('Hello world')
  .then(function() {
    console.log('Set hello world data');
    hellodata.on('value', function(data) {
      console.log(data.val());
    });
  });