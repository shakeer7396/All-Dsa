// Spiral Traversal VI Ended
// Description

// You are given a square matrix of size N x N.

// You have to print the spiral traversal of the matrix.

// Refer the figure given below for better understanding.

// Screenshot (114).png

// Note : You don't have to take the input
// Just complete the function, and print the required output


// Input
// The first line of the input contains T, the number of test cases.

// The first line of each test case contains N, the size of the matrix.

// The next N lines contain N integers each denoting the values of the matrix.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 500

// 1 <= A[i][j] <= 500


// Output
// For each test case, print the spiral traversal of the matrix, as shown in the problem description, on a single line, on a new line.


// Sample Input 1 

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 1 4 7 8 9 6 3 2 5 
// Hint

// The spiral traversal for a given matrix is shown in the image in the problem description.

function runProgram(input){
    input=input.trim().split("\n")
    var tc=+input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var n=+input[line++];
    var mat=[];
    for(var j=0;j<n;j++){
        mat.push(input[line++].trim().split(" ").map(Number));
    }  
    // console.log(mat,n)
    spiral(mat,n)
    }   
  }
  function spiral(mat,n){
    var left=0;
    var right=n-1;
    var top=0;
    var bottom=n-1;
    var bag="";
    var count=0;
    while(count<(n*n)){
    for(var i=top;i<=bottom;i++){
        bag=bag+mat[i][left]+" ";
        count++;
    }
    left++;
    for(var i=left;i<=right;i++){
        bag=bag+mat[bottom][i]+" ";
        count++;
    }
    bottom--;
    for(var i=bottom;i>=top;i--){
        bag=bag+mat[i][right]+" ";
        count++;
    }
    right--;
    for(var i=right;i>=left;i--){
        bag=bag+mat[top][i]+" ";
        count++;
    }
    top++;
};
    console.log(bag);
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