// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
var config = {
  apiKey: "AIzaSyAefPhDvyG-PNsP5uxhNi9QnCxLf7NlC3c",
  authDomain: "chatapp-1e069.firebaseapp.com",
  databaseURL: "https://chatapp-1e069.firebaseio.com",
  projectId: "chatapp-1e069",
  storageBucket: "chatapp-1e069.appspot.com",
  messagingSenderId: "648930623293",
  appId: "1:648930623293:web:d564bb6037febeeb1a8f54"
};

firebase.initializeApp(config);

window.firebase=firebase;

/* eslint-disable no-new */
firebase.auth().onAuthStateChanged((user)=>{
  if(!app){
    app= new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    });
  }
});

