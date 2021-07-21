const person = {
firstName : "Rufaro",
lastName : "Haruperi",
age : 33,
eyeColor: "brown"
};

console.log(person.firstName);

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
    if (this.isOpen === true) {
        this.isOpen = false;
      return "The umblrela has closed";
    } else {
      return "Umprela is already closec";
    }
   } 
};

console.log(umbrella.close());

var breakfast = {
    name : "Lumberjack",
    price : 9.95,
    ingredients : ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};

console.log(breakfast.ingredients[2]);


/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

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
    printAccountSummary : function () {
        return "Your balance is currently $1000 and your interest rate is 1%.";
        
    }
};

console.log(savingsAccount.printAccountSummary());

/*
 * Programming Quiz: Facebook Friends (7-5)
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
 */

var facebookProfile = {
name : "Rufaro",
friends : 2500,
messages : ["hello friends", "lorem ipsum bla bla bla", "this is good bla  bla bla"],
postMessage : function (message) {
   return this.messages.push(message);
},
deleteMessage : function (index) {
    return this.messages.splice(index,1);
},
addFriend : function () {
    return this.friends+=5;
},
removeFriend : function () {
    return this.friends-=10;
}


};

console.log(facebookProfile.name);
console.log(facebookProfile.friends);
console.log(facebookProfile.messages);
console.log(facebookProfile.postMessage("I love this game"));
console.log(facebookProfile.messages);
console.log(facebookProfile.deleteMessage(1));
console.log(facebookProfile.messages);
console.log(facebookProfile.addFriend());
console.log(facebookProfile.removeFriend());
console.log(facebookProfile.friends);



