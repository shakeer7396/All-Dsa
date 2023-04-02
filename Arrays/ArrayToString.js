// Array to String Ended
// Description

// You are given an array A of n elements. Write a programme that processes the elements of the array and generates a string from the elements present in the array.

// For instance: If elements of the array are 3 5 0 9 8 => the output string should be "35098" (without quotes). But in case of elements are negative (lesser than 0), your string should contain 0 instead of that number.

// Suppose elements of the array are 2 -4 6 8 -9, the string generated should be 20680 because -4 and -9 are negative elements, so your string contains 0 instead of that number.

// Note : You have to take the input yourself

// Input
// Input Format

// First line of input contains an integer n, which is the number of integers present in the array.

// Second line contains n space separated integers which are integers of array.

// Constraints

// n < 100




// Output
// Output string generated from the array.


// Sample Input 1 

// 5
// 2 -4 6 8 -9
// Sample Output 1

// 20680


function runProgram(input){
   input=input.trim().split("\n");
   var n=+input[0];
   var arr=input[1].trim().split(" ").map(Number)
  //  console.log(arr,n);
arrstring(arr,n)

}

// function arrstring(arr,n){
//   var bag="";
//   for(var i=0;i<n;i++){
//     if(arr[i]<0){
//       bag+=arr[i]=0;
//     }
//     else{
//       bag+=arr[i]
//     }
//   }
//   console.log(bag)
// }
function arrstring(arr,n){
  var bag="";
  for(var i=0;i<arr.length;i++){
    if(arr[i]<1){
      bag+=arr[i]=0
    }
    else{
      bag+=arr[i]
    }
  }
  console.log(bag)
}
if (process.env.USERNAME === "shake") {
  runProgram(`5
  2 -4 6 8 -9`);
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

