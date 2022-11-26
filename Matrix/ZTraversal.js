// Z Traversal Ended
// Description

// Given a square matrix of size N x N. Print the Z traversal of the matrix. Refer the figure given below for better understanding.

// Image

// Note : You don't have to take the input
// Just complete the function, and print the required output


// Input
// The first line of the input contains T, the number of test cases. The first line of each test case contains N, the dimension of the square matrix.

// Next N lines contains N space separated integers, denoting the values of the matrix.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 500

// 1 <= A[i][j] <= 1000


// Output
// For each test case, print the elements that occur in the Z traversal of the matrix, on a new line.


// Sample Input 1 

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 1 2 3 5 7 8 9 

function runProgram(input){
  //console.log(input);  
    input=input.trim().split("\n")
    var tc=+input[0];
    var line=1;
    for(var i=0;i<tc;i++){
      var n=+input[line++];
      var mat=[];
      for(var j=1;j<=n;j++){
        mat.push(input[line++].trim().split(" ").map(Number));
      } 
      //console.log(mat,n) 
      ZTraversal(mat,n)
    }
}

 

if (process.env.USERNAME === "shake") {
  runProgram(`1
  3
  1 2 3
  4 5 6
  7 8 9`);
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