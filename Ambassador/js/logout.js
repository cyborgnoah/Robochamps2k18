function logout()
{
  firebase.auth().signOut().then(function()
  {  
  window.location='index.html';
  }, function(error)
  {
  console.error('Sign Out Error', error);
  });
}
