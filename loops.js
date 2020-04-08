 
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */
 var num = 99;

while (num >=0) {
       if  (num > 2) {
           sub=num - 1;
           console.log(num +" bottles of juice on the wall! " + num+ " bottles of juice! Take one down, pass it around... "+ sub + " bottles of juice on the wall!");
       }
        else if (num == 2){
            sub=num - 1;
           console.log(num +" bottles of juice on the wall! " + num+ " bottles of juice! Take one down, pass it around... "+ sub + " bottle of juice on the wall!");
        }
        else if (num === 1) {
            sub=num - 1;
           console.log(num +" bottle of juice on the wall! " + num+ " bottle of juice! Take one down, pass it around... "+ sub + " bottles of juice on the wall!");
        }
           num = num - 1;
    }

    #blastoff_countdown
    ar countDown = 60;

var msg50 = "Orbiter transfers from ground to internal power";
var msg31 = "Ground launch sequencer is go for auto sequence start";
var msg16 = "Activate launch pad sound suppression system";
var msg10 = "Activate main engine hydrogen burnoff system";
var msg6 = "Main engine start";
var msg0 = "Solid rocket booster ignition and liftoff!";

while (countDown >= 0) {
  (countDown === 50) ? console.log(`${msg50}`) :
    (countDown === 31) ? console.log(`${msg31}`) :
      (countDown === 16) ? console.log(`${msg16}`) :
        (countDown === 10) ? console.log(`${msg10}`) :
          (countDown === 6) ? console.log(`${msg6}`) :
            (countDown === 0) ? console.log(`${msg0}`) :
              console.log(`T-${countDown} seconds`);

  countDown = countDown - 1;
}