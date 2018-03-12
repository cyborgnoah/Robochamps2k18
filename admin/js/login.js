function login()
{
  var password=document.getElementById('password').value;  
  const promise=firebase.auth().signInWithEmailAndPassword("admin@miet.ac.in", password);
  promise.catch(e => console.log(e.message));
}
