function myFahrenheit() {
  document.getElementById("celsius").disabled = false;
  let num = document.getElementById("text-field").value;
  let numtwo = parseInt(num);
  numtwo = (numtwo - 32) * 0.5556;
  document.getElementById("answer").innerHTML = numtwo +" C";
  document.getElementById("fahrenheit").disabled = true;
}

function myCelsius() {
  document.getElementById("fahrenheit").disabled = false;
  let num = document.getElementById("text-field").value;
  let numtwo = parseInt(num);
  numtwo = numtwo * 1.8 + 32;
  document.getElementById("answer").innerHTML = numtwo +" F";
  document.getElementById("celsius").disabled = true;
}

function myReset(){
  window.location.reload();
}