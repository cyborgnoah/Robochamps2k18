function signup()
{
  var database = firebase.database().ref();
  if(validater()==true)
  {
  var name=document.getElementById('Name').value;
  var email=document.getElementById('Email').value;
  var contact=document.getElementById('Contact').value;
  var college=document.getElementById('College').value;
  var password=document.getElementById('password1').value;
  const promise=firebase.auth().createUserWithEmailAndPassword(email, password);
  promise.catch(e=>console.log(e.message));
  firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser)
    {
      database.child("Ambassador_Data").child(firebaseUser.uid).set({Name: name,Email: email,Contact: contact,College: college,Uid:firebaseUser.uid,});
    }
    else
    {
    }
  });

  }
}
function validater()
{
  var name=document.getElementById('Name').value;
  var email=document.getElementById('Email').value;
  var contact=document.getElementById('Contact').value;
  var college=document.getElementById('College').value;
  var password1=document.getElementById('password1').value;
  var password2=document.getElementById('password2').value;
  if(name=="")
  {return false;}
  if(email=="")
  {return false;}
  if(contact=="")
  {return false;}
  if(college=="")
  {return false;}
  if(password1=="")
  {return false;}
  if(password2=="")
  {return false;}
  if(password1!=password2)
  {return false;}
  return true;
}
