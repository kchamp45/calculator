var answer = parseInt(prompt("What is the temperature in C?"));
var tempF = function(answer) {return answer * (9 / 5) + 32};
alert("The temperature is " + tempF(answer) + ".");

var answer2 = parseInt(prompt("What is the temperature in F?"));
var tempC = function(answer2) {return (answer2 - 32) * ( 5 / 9)};
alert("The temperature is " + tempC(answer2) + ".");
