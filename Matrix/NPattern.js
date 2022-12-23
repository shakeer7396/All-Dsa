// N traversal Ended
// Description

// You are given a matrix of size n x n. Find theNtraversal of the matrix. Refer the following figure for better understanding.

// Image


// Input
// The first line contains T, the number of test cases. The first line of each test case contains N, the size of the square matrix.

// Next N lines contain N space separated integers, denoting the values of the matrix.



// Constraints

// 1 <= T <= 10

// 1 <= N <= 500

// 1 <= A[i][j] <= 1000


// Output
// For each test case, print the N traversal of the matrix on a single line, on a new line.


// Sample Input 1 

// 1
// 3
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 7 4 1 5 9 6 3 


function runProgram(input){
    //   console.log(input) 
    input=input.trim().split("\n")
    var tc=+input[0];
    var line=1
    for(var i=0;i<tc;i++){
        var n=+input[line++];
        var mat=[];
        for(var j=1;j<=n;j++){
        mat.push(input[line++].trim().split(" ").map(Number))
        }
        //console.log(mat);
        Npattern(mat)
    }
    }

    function Npattern(mat){
        var bag="";
        for(var i=mat.length-1;i>=0;i--){
            bag+=mat[i][0]+" ";
        }
        for(var i=1;i<mat.length;i++){
            bag+=mat[i][i]+" ";
        }
        for(var i=mat.length-2;i>=0;i--){
            bag+=mat[i][mat.length-1]+" ";
        }
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