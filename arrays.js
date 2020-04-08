//Create an array called udaciFamily and add "Julia", "James", and your name to the array.
//Then, print the udaciFamily to the console using console.log.
var udaciFamily = ["Julia", "James", "Tari" ];

console.log(udaciFamily);

//Create an array called crew to organize the Serenity’s crew and set it equal to the variables below .
 var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew=[captain,second,pilot,companion,mercenary,mechanic];
console.log(crew);
// to add more crew
//code:
var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push(doctor,sister,shepherd);
console.log(crew);

//Starting with this array of prices, change the prices of the 1st, 3rd, and 7th elements in the array
var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

 prices[0]= 3.45;
 prices[3]=7.60;
 prices[7]=50.90;

 console.log(prices);

 // creating an array with the colors of the rainbow, and if forgot some colors
 var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(2,1,"Yellow","Green");
rainbow.splice(5,0,"Purple")
console.log(rainbow);

//Create a function called hasEnoughPlayers() that takes the team array as an argument and returns true or false
//depending on if the array has at least seven players.
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

function hasEnoughPlayers(t) {
    if (t.length >= 7) {
        return true;
    }
    else {
        return false;

    }}

console.log(hasEnoughPlayers(team));

//map()
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});

//map() i got bills (Qiuz)
var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90,
29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

var totals= bills.map(function(number,index,array) {
                number+= number*0.15;
               return Number((number.toFixed(2)));
            });

console.log(totals);

//nested number
var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for(var r=0;r < numbers.length; r ++){
    for (var c=0; c< numbers[r].length;c++){
        if (numbers[r][c] % 2 === 0) {
            numbers[r][c]="even";
            console.log(numbers[r][c]);
        }
        else {
            numbers[r][c]="odd";
            console.log(numbers[r][c]);
        }
        }
    }
console.log(numbers);