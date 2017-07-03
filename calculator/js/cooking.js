var input = parseInt(prompt("how many pints?"));
var quart = function(input) {return parseInt(input * 2);
};
var tsp = function(quart) {return parseInt(quart(input) * 192);
};

alert("You have " + quart(input) + " quart.");

alert("You have " + tsp(quart) + " tsp.");
