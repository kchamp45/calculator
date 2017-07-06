var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;};

var divide = function(number1, number2) {
    return number1 / number2;};

$(document).ready(function() {
  $("form#add").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var resultAdd = add(number1, number2);
  $("#outputAdd").text(resultAdd);
  });

  $("form#subtract").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#sub1").val());
  var number2 = parseInt($("#sub2").val());
  var resultSub = subtract(number1, number2);
  $("#outputSub").text(resultSub);
  });

  $("form#multiply").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#mult1").val());
  var number2 = parseInt($("#mult2").val());
  var resultMult = multiply(number1, number2);
  $("#outputMult").text(resultMult);
  });

  $("form#divide").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#div1").val());
  var number2 = parseInt($("#div2").val());
  var resultDiv = divide(number1, number2);
  $("#outputDiv").text(resultDiv);
  });

});
