const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log("Welcome to the password validator tool!");

reader.question("Please enter a password to validate:", function(input)
{
   // tokens = input.split(' ');
	
	
    if(input.length >= 10){
        console.log("Success!");
        }
    else{
        console.log("Password too short, must be at least 10 characters long");
        }
}



)

console.log("\n" + "\n");
console.log("\n" +
"| |   (_) \n" +
"| |_ \n" +
"| '_ \ | | \n" +
"| | | | | \n" +
"|_| |_|_| "

);