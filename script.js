function calculateSum() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var result = num1 + num2;
  document.getElementById("result").innerHTML = "O resultado da soma é: " + result;
}
