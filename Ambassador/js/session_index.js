firebase.auth().onAuthStateChanged(firebaseUser =>{
  if(firebaseUser)
  {
    window.location = 'MainPage.html';
  }
  else {
    //window.location = 'index.html';
  }
});
