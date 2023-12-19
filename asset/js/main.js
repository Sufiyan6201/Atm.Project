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
  document.getElementById('balnce').style.display = 'block'
  document.getElementById('depo').style.display = 'none'
  document.getElementById('widrl').style.display = 'none'

}


// widrl
function widrle() {
  document.getElementById('widrl').style.display = 'block'
  document.getElementById('balnce').style.display = 'none'
  document.getElementById('depo').style.display = 'none'
  document.getElementById('show1').value = blance;
}


function sub() {
  var amount1 = document.getElementById('amount1').value
  if (amount1 < blance && amount1 > 0) {
    blance -= parseInt(amount1)
    document.getElementById('show1').value = blance
    alert('Withdrawal Succesfully Thank You For Using Our ATM')
  } else {
    alert('Pleas enter Valid Amount...')
  }
}
// deposit
function dep() {
  document.getElementById('depo').style.display = 'block'
  document.getElementById('balnce').style.display = 'none'
  document.getElementById('widrl').style.display = 'none'
  document.getElementById('show').value = blance;
}


function add() {
  var amount = document.getElementById('amount').value
  if (amount > 0) {
    blance += parseInt(amount)
    document.getElementById('show').value = blance;
    alert('Deposit Succesfully Thank You For Using Our ATM')
  } else {
    alert('please enter valide amount')
  }
}
var blance = 20000





// exit
function exit() {
  document.getElementById('next').style.display = 'none'
  document.getElementById('balnce').style.display = 'none'
  document.getElementById('prev').style.display = 'block'
  document.getElementById('check').style.display = 'none'
}

function check() {
  document.getElementById('check').innerHTML = '<span style="color:white;" >your balance:</span>&nbsp;&nbsp' + blance
  return
}