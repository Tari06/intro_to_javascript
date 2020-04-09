var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function() {
        if(umbrella.isOpen === false) {
            return "The umbrella is already closed!";
        } else {
            umbrella.isOpen = false;
            return "Julia closed the umbrella";
        }
    }
};

//object-literal notation
var sister = {
  name: "Sarah",
  age: 23,                      //t56he "key" (representing a property or method name) and its "value" are separated from each other by a colon
  parents: [ "alice", "andy" ], //The key: value pairs are separated from each other by commas
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true
}; //The entire object is wrapped inside curly braces { }.

//menu breakfast
var breakfast = {
    name:"The Lumberjack",
    price: "$9.95",
    ingredients: ["eggs","sausage","toast","hashbrowns","pancakes"]
}

//add a printAccountSummary() method that returns the following account message:
//Welcome!
//Your balance is currently $1000 and your interest rate is 1%.

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

//facebookProfile
var facebookProfile = {
    name: "tari",
    friends: 333,
    messages: [],
    postMessage: function(message) {
        return facebookProfile.messages.push(message);
    },
    deleteMessage: function(index) {
        return facebookProfile.messages.splice(index,1);
    },
    addFriend: function() {
        return facebookProfile.friends+= 1;
    },
    removeFriend: function() {
        return facebookProfile.friends-= 1;
    }
};

// Donuts Revisited
var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(elem){
    console.log(elem.type + " donuts cost $"+elem.cost+" each");

})
