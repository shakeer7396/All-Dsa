
// Missing Integer Ended
// Description

// You are given an array of N-1 integers and integers are in the range of 1 to N. There are no duplicates in the array. One of the integers is missing in the array. Find the missing integer

// Note : You have to take the input yourself


// Input
// Input Format

// The first and only line contains N-1 integers

// Constraints

// N<100


// Output
// Print the one number belonging from 1 to N which is not present in the array


// Sample Input 1 

// 4 5 1 3
// Sample Output 1

// 2

// function runProgram(input){
//     input=input.trim().split(" ").map(Number);
// var count=0;
// for(var i=0;i<input.length;i++){
//     count+=input[i]
// } 
// var n=input.length+1;
// a=Math.floor(n*((n+1)/2)) 
// console.log(a-count);
// }

function runProgram(input){

    input=input.trim().split(" ").map(Number);
    var sum=0;
    var n=input.length+1;
    var add=(n*((n+1)/2))
    for(var i=0;i<input.length;i++){
        sum+=input[i];
    }

    var res=add-sum;
    console.log(res);
}

if (process.env.USERNAME === "shake") {
  runProgram(`4 5 1 3`);
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

// var arr= [1,2,3,4,5,6,7,9];
// var sum = 0;
// var count=arr.length+1;
// //console.log(count); //=9
// var add = (count*((count+1)/2));
// //console.log(add); //=(9*((9+1)/2))=45
// for(var i=0;i<arr.length;i++){
//     sum+=arr[i];
//     //console.log(sum); //adding above array =1 3 6 10 15 21 28 37 
// }
// var result = add-sum 
// console.log(result); // 45-37 = 8 is missing you check with any number
