// Masai Airline Ended
// Description

// You are working for Masai Airline. There are **n** passengers with 2 bags each (one check-in and other hand bag). The limitation for check-in bag is 15kgs and that for hand bag is 7kgs. You are given 2 arrays: First array contains weight of check-in bag of ith passenger. Similarly, second array contains weights of hand bag of ith passenger. Print "Boarding" (without quotes) if the passenger clears both luggage weight limits of Masai Airline, else print "Stop" (without quotes).

// Please note that 15 kgs and 7 kgs are inclusive.

// Note : You have to take the input yourself


// Input
// Input Format :

// First line contains **n** (number of passengers)

// Second line contains **n** positive integers which are the weights of check-in bag of ith passenger.

// Third line contains **n** positive integers which are the weights of hand bag of ith passenger.



// Constraints :

// n<1000




// Output
// Output "Boarding" (without quotes) or "Stop" (without quotes) of the passenger meets criteria of Masai Airlines.


// Sample Input 1 

// 4
// 12 14 15 6
// 8 5 7 4
// Sample Output 1

// Stop
// Boarding
// Boarding
// Boarding
// Hint

// Output Explanation :

// Since, the hand bag of first person is 8kgs (greater than 7kgs), therefore stopped.


function runProgram(input){
  input=input.trim().split("\n")
  var n=+input[0];
  var lbag=input[1].trim().split(" ").map(Number);
  var hbag=input[2].trim().split(" ").map(Number);
 //  console.log(lbag,hbag,n);
  masaiairline(lbag,hbag,n)
   
}
function masaiairline(lbag,hbag,n){
 for(var i=0;i<n;i++){
   if(lbag[i]<=15 && hbag[i]<=7){
     console.log("Boarding")
   }
   else{
     console.log("stop");
   }
 }
}


if (process.env.USERNAME === "shake") {
  runProgram(`4
  12 14 15 6
  8 5 7 4`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}