#checking balance
var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary:function  printAccountSummary() {
        return "Welcome!\n"+ "Your balance is currently $"  + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent +"%."
    }
};

console.log(savingsAccount.printAccountSummary());

#ice cream

var flavor = "chocolate";
var vessel = "bowl";
var toppings = "peanuts";

if (
  (flavor === "chocolate" || flavor === "vanilla") &&
  (vessel === "cone" || vessel === "bowl") &&
  (toppings === "peanuts" || toppings === "sprinkles")
) {
  console.log("I'd like two scoops of " +
    flavor + " ice cream in a " +
    vessel + " with " +
    toppings + " .");
}

#finding right t-shirt
var shirtWidth = 17;
var shirtLength = 27;
var shirtSleeve = 8.41;

if (shirtWidth >=18 && shirtWidth <20 && shirtLength >=28 && shirtLength <29 && shirtSleeve >= 8.13 && shirtSleeve < 8.38) {
    console.log("S");
}
else if (shirtWidth >=20 && shirtWidth <22 && shirtLength >=29 && shirtLength <30 && shirtSleeve >= 8.38 && shirtSleeve < 8.63) {
    console.log("M");
}
else if (shirtWidth >=22 && shirtWidth <24 && shirtLength >=30 && shirtLength <31 && shirtSleeve >= 8.63 && shirtSleeve < 8.88) {
    console.log("L");
}
else if (shirtWidth >=24 && shirtWidth <26 && shirtLength >=31 && shirtLength <33 && shirtSleeve >= 8.88 && shirtSleeve < 9.63) {
    console.log("XL");
}
else if (shirtWidth >=26 && shirtWidth <28 && shirtLength >=33 && shirtLength <34 && shirtSleeve >= 9.63 && shirtSleeve < 10.13) {
    console.log("2XL");
}
else if ((shirtWidth === 28) && (shirtLength === 34) && (shirtSleeve === 10.13)) {
    console.log("3XL");
}
else {
    console.log("N/A");
}
