var height = parseFloat(prompt("How tall are you in inches?"));
var weight = parseFloat(prompt("how much do you weigh in pounds?"));
var bmi = function(height, weight) {
var height2 = parseFloat(height * .025);
var weight2 = parseFloat(weight * .45);
var height3 = parseFloat(height2 * height2);
return weight2 / height3;
};
alert(bmi(height, weight)); 
