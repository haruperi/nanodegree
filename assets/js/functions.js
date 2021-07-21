/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

function laugh()
{
    return "hahahahahahahaha";
}

console.log(laugh());


/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(length){
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += makeLine(j);
    }
    return line;
}


// test your code by uncommenting the following line
console.log(buildTriangle(10));