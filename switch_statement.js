var option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}
#output > you selected option 3

#falling-through behavior#
var tier = "nsfw deck";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);
 #output > Prints: You’ll receive one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and one copy of the Exploding Kittens card game.

#back-to school
var education = "no high school diploma";

// set the value of this based on a person's education
var salary;


switch  (education) {
    case "no high school diploma":
        salary="$25,636/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
    case "a high school diploma":
        salary="$35,256/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
    case "an Associate's degree":
        salary="$41,496/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
    case "a Bachelor's degree":
        salary="$59,124/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
    case "a Master's degree":
        salary="$69,732/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
    case "a Professional degree":
        salary="$89,960/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
    case "a Doctoral degree":
        salary="$84,396/year";
        console.log("In 2015, a person with " +  education + " earned an average of " + salary.toLocaleString("en-US") + ".");
        break;
    default:
        console.log ("nothing");
        break;
}