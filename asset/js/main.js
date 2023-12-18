function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


function singIn() {
  var name = 'Sufiyan';
  var pass = 123456;
  let userName = document.querySelector("#userName").value;
  let password = document.querySelector("#myInput").value;
  // Checking if the username and password are correct or not
  if (userName == name && password == pass) {
    document.getElementById('prev').style.display = 'none'
    document.getElementById('next').style.display = 'block'
  } else {
    alert('Wrong Username or Password, Please try again')
  }
}
// inquery
function balnce() {
  document.getElementById('next').style.display = 'none'
  document.getElementById('balnce').style.display = 'block'
  document.getElementById('depo').style.display = 'none'
}
// widrl
function widrl() {
 var ac_number = 123456789
 var pass = 123456789
}
// deposit
function dep() {
  document.getElementById('next').style.display = 'none'
  document.getElementById('balnce').style.display = 'none'
  document.getElementById('prev').style.display = 'none'
  document.getElementById('depo').style.display = 'block'
}
// exit
function exit() {
  document.getElementById('next').style.display = 'none'
  document.getElementById('balnce').style.display = 'none'
  document.getElementById('prev').style.display = 'block'
  document.getElementById('check').style.display = 'none'
}

function check(){
  document.getElementById('check').style.display = 'block'
}