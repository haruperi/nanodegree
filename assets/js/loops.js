//While loops
var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}


/*
 * Programming Quiz: JuliaJames (4-1)
Write a while loop that:

Loop through the numbers 1 to 20
If the number is divisible by 3, print "Julia"
If the number is divisible by 5, print "James"
If the number is divisible by 3 and 5, print "JuliaJames"
If the number is not divisible by 3 or 5, print the number
 */

var x = 1;
var divisable = false;

while (x<=20) {
    if (x%3==0&&x%5!=0)
    {
        divisable = true;
        console.log("Julia");
    }
    if (x%5==0&&x%3!=0) {
        divisable=true;
        console.log("James");
    } 
    if (x%5==0&&x%3==0) {
        divisable=true;
        console.log("JuliaJames");
    }
    if (!divisable) {
        console.log(x);
    }

    x+=1;
    divisable=false;
}


/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * 99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
...
2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!
 * 
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
var oneLess;

while (num>=0) {
    oneLess=num-1;

    if (num==1) {
        console.log(num+" bottle of juice on the wall! "+num+" bottle of juice! Take one down, pass it around... "+oneLess+" bottles of juice on the wall!");
        break;
    } else {
        console.log(num+" bottles of juice on the wall! "+num+" bottles of juice! Take one down, pass it around... "+oneLess+" bottles of juice on the wall!");
    }
    num=num-1;
}


/*
 * Programming Quiz: Factorials (4-7)
 */
var num = 5;
var factorial =1;
for (let x = 1; x <= num; x++) {
    factorial*=x;
    
}

console.log(factorial);