  firebase.auth().onAuthStateChanged(firebaseUser =>{
  if(firebaseUser)
  {
    if(firebaseUser.uid=="aCtLsIQB1iPtuSDVZISPPHMkNMl2")
    {
    window.location = 'admin_leaderboard.html';
  }
  }
  else
  {
  }
});
