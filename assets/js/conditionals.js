//Conditionals
/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

// change the value of `number` to test your if...else statement
var number = 12345;

if (number%2==0) {
    console.log("Even");
    
} else {
    console.log("Odd");
}


/*
 * Programming Quiz: Musical Groups (3-3)
Prints "not a group" if musicians is less than or equal to 0
Prints "solo" if musicians is equal to 1
Prints "duet" if musicians is equal to 2
Prints "trio" if musicians is equal to 3
Prints "quartet" if musicians is equal to 4
Prints "this is a large group" if musicians is greater than 4
 */

// change the value of `musicians` to test your conditional statements
var musicians = 20;

if (musicians<=0) {
    console.log("Not a group");
    
} else if (musicians==1) {
    console.log("Solo");
}

 else if (musicians==2) {
    console.log("Duet");
}

 else if (musicians==3) {
    console.log("Trio");
}

 else if (musicians==4) {
    console.log("Quartet");
}

else {
    console.log("This is a large Group");
}

/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (weapon=="poison" & room=="ballroom") {
    suspect="Mr. Kalehoff";
} else if (weapon=="trophy" & room=="gallery") {
    suspect="Ms. Van Cleve";
} else if (weapon=="pool stick" & room=="billiards room") {
    suspect="Mrs. Sparr";
} else {
    room 
    
}

if (solved) {
	console.log(/* your message goes here*/);
}


/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 0;
var checkBalance = true;
var isActive = true;
var showStatement = "Your balance is $"+balance+".";

if (checkBalance) {
    if (isActive&&balance>0) {
        console.log(showStatement);
    } else {
        if (!isActive) {
            console.log("Your account is nolonger active");
        } else {
            if (balance==0) {
                console.log("Your account is empty");
            } else {
                console.log("Your balance is negative");
            }
        }
        
    }
    
} else {
    console.log("Thank you have a nice day");
}

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "chocolate";
var vessel = "cone";
var toppings = "peanuts";

if ((flavor=="vanilla")||(flavor=="chocolate")&&(vessel=="cone")||(vessel=="bowl")&&(toppings=="sprinkles")||(toppings=="peanuts")) {
    console.log("I'd like two scoops of "+flavor+" ice cream in a "+vessel+" with "+toppings+".");
} else {
    console.log("sorry we dont have");
}



/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = true;
var eatsAnimals = false;

var category = eatsPlants && !eatsAnimals ? "herbivore" : "carnivore";

console.log(category);


/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

// change the value of `education` to test your code
var education = 'a Bachelor\'s degree';

// set the value of this based on a person's education
var salary = 0;

switch (education) {
    case 'no high school diploma':
        salary=25;
        break;

    case 'a high school diploma':
        salary=35;
        break;

    case 'an Associate\'s degree':
        salary=45;
        break;

    case 'a Bachelor\'s degree':
        salary=55;
        break;

    case 'a Master\'s degree':
        salary=65;
        break;

    case 'a Professional degree':
        salary=75;
        break;

    case 'a Doctrate degree':
        salary=85;
        break;

    default:
        salary=null;
        break;
}

console.log("In 2015, a person with "+education+" earned an average of "+salary+"K/year.");