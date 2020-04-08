for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}
//print > Prints:
0, 0
0, 1
0, 2
1, 0
1, 1
1, 2
2, 0
2, 1
2, 2
3, 0
3, 1
3, 2
4, 0
4, 1
4, 2

//while_loops to for loops

var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}
//code for loops
for (var x=9; x>1; x=x-1;) {
       console.log("hello "+ x);
}

//Here is a for loop that's supposed to print the numbers 5 through 9. Fix the error!
for (x < 10; x++) {
  console.log(x);
}
//code
for (var x=5; x < 10; x++) {
      console.log(x);
}


//Write a for (note: not a function) loop that prints out the factorial of the number 12
//code factorial
var solution = 1;
for(var x = 12; x > 0; x--){
    solution *=x;

}
console.log(solution);

#nested for loops
#qiuz/ Theater seats often display a row and seat number to help theatergoers find their seats. If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, write a nested for loop to print out all of the different seat combinations in the theater.
var row;
var seat;
for (row = 0; row <= 25; row++) {
for (seat = 0; seat <= 99; seat++) {
console.log(row + "-" + seat);
}
}
