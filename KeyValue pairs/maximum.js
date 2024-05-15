// Maximum Occurring Element Ended
// Description

// Given an array A of N integers. Your task is to print that integer which presents maximum number of times in the given array.

// If there are two elements present the maximum number of times, print the one which comes first in the array.


// Input
// Input Format

// First line contains N

// The second line contains N integers separated by spaces.

// Constraints

// N < 100

// The array contains integers only


// Output
// Print one integer, the one which is present the maximum number of times.


// Sample Input 1 

// 5
// 0 2 0 6 9
// Sample Output 1

// 0
// Hint

// Sample 1 Explanation

// Since 0 is present the maximum number of times (2 times) => The answer is 0

// function runProgram(input){
//   input=input.trim().split("\n")
//   var n=+input[0];
//   var arr=input[1].trim().split(" ").map(Number);
//   // console.log(n,arr);
//   maximumoccuring(arr,n)
// }
// function maximumoccuring(arr,n){

//   var obj={};
//   for(let i=0;i<n;i++){
//     if(obj[arr[i]]==undefined){
//       obj[arr[i]]=1
//     }
//     else{
//       obj[arr[i]]+=1;
//     }
//   }
  
//   var max=-Infinity;
//   let a;
//   for(let key in obj){
//     if(obj[key]>max){
//       max=obj[key];
//       a=key;
//     }
//   }
//   console.log(a);
// }


// if (process.env.USERNAME === "shake") {
//   runProgram(`5
//   0 2 0  6 9`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

var arr=[1,2,3,4,5,3,3,3,3,2,2];
var obj={};
  for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]==undefined){
      obj[arr[i]]=1
    }
    else{
      obj[arr[i]]+=1;
    }
  }
  
  var max=-Infinity;
  let a;
  for(let key in obj){
    if(obj[key]>max){
      max=obj[key];
      a=key;
    }
  }
  console.log("Repeated Number is "+ a,"Count is "+max);