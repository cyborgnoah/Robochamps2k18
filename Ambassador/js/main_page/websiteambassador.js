var database = firebase.database().ref();
function website_ambassador()
{
  var name=document.getElementById('wb_name').value;
  var email=document.getElementById('wb_email').value;
  var contact=document.getElementById('wb_contact').value;
  var subject=document.getElementById('wb_subject').value;
  var message=document.getElementById('wb_message').value;
  database.child("Webiste_Ambassador").push().set({Name: name,Email: email,Contact: contact,Subject: subject,Message: message});
  alert("Message recieved we will conact you soon.")
  window.location = 'index.html';
}
