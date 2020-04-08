//Declare a function called laugh() that returns "hahahahahahahahahaha!".
//Print the value returned from the laugh() function to the console.
//code:
function laugh() {
    var laugh = "hahahahahahahahahaha!"
    return laugh;
}
console.log(laugh());

//Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.
//code:
function laugh(num) {
    var ha='';
    for (var i= 0; i<num; i=i+1) {
        ha+= "ha";
        string=ha+"!";

    }
    return string;
}

console.log(laugh(3));


//create function call buildTriangle
//code:
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(num){
    var buildtriangle="";
    for (var i=1;i<=num;i++){
        var make=makeLine(i);
        buildtriangle += make;
    }
    return buildtriangle;
}
console.log(buildTriangle(10));

 // an anonymous function expression
var laugh = function(numb) {
    var smile = '';
    for (var i = 0; i <numb; i++) {
        smile += 'ha';
    }
    return smile + '!';
}


console.log(laugh(3));


console.log(laugh(10));

//a named function expression
var cry = function crying(){
    return "boohoo!";
}

console.log(cry())

//quiz inline
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function(num){
      var howFunny = "";
    for(var i = 1; i <= num; i++){
      howFunny += "ha";
    }
    return howFunny + "!";
 }
);