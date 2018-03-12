// Initialize Firebase after validation

var app;
 var config = {
    apiKey: "AIzaSyDKg1Qc-HUj758DYHbYoX_Y4owt4_q6ZuY",
    authDomain: "robochamps18-1520494152180.firebaseapp.com",
    databaseURL: "https://robochamps18-1520494152180.firebaseio.com",
    projectId: "robochamps18-1520494152180",
    storageBucket: "",
    messagingSenderId: "904560147990"
  };

if (!firebase.apps.length) {
    app=firebase.initializeApp(config);
}
