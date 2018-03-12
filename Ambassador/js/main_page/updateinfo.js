firebase.auth().onAuthStateChanged(firebaseUser =>{
  if(firebaseUser)
  {
    var database = firebase.database().ref().child("Ambassador_Data").child(firebaseUser.uid);

      var name;
      var email;
      var contact;
      var college;
      database.on('value', function(snapshot)
      {
        name=snapshot.val().Name;
        email=snapshot.val().Email;
        contact=snapshot.val().Contact;
        college=snapshot.val().College;
        document.getElementById("name").innerHTML = name;
        document.getElementById("email").innerHTML = email;
        document.getElementById("contact").innerHTML = contact;
        document.getElementById("college").innerHTML = college;
        document.getElementById("refer_code").innerHTML = firebaseUser.uid;
      });
  }
  else
  {
    window.location = 'index.html';
  }
});
