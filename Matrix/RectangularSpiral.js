// Spiral Traversal (Rectangular Matrix) Ended
// Description

// You are given a matrix of size N x M.

// Print the spiral traversal of the matrix.

// Refer the image given below, for better understanding.

// Screenshot (116).png


// Input
// The first line of the input contains T, the number of test cases.

// The first line of each test case contains N and M, the number of rows and columns in the given matrix.

// The next N lines contain M values each denoting the elements of the matrix.

// Constraints

// 1 <= T <= 10

// 1 <= N, M <= 200

// 1 <= A[i][j] <= 200


// Output
// For each test case, print the spiral traversal of the matrix, on a single line, on a new line.


// Sample Input 1 

// 2
// 3 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 4 3
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12
// Sample Output 1

// 1 5 9 10 11 12 8 4 3 2 6 7 
// 1 4 7 10 11 12 9 6 3 2 5 8 
// Sample Input 2 

// 1
// 4 3
// 1 10 9
// 2 11 8
// 3 12 7
// 4 5 6 
// Sample Output 2

// 1 2 3 4 5 6 7 8 9 10 11 12 
// Hint

// The spiral traversal of the elements given in the matrix, is printed in the sample output.

function runProgram(input){
   input=input.trim().split("\n")
   var tc=+input[0];
   var line=1;
   for(var i=0;i<tc;i++){
    var [r,c]=input[line++].trim().split(" ").map(Number);
    var mat=[];
    for(var j=0;j<r;j++){
        mat.push(input[line++].trim().split(" ").map(Number));
    }
    // console.log(mat,n,m)
    RectangularMatrix(mat,r,c)
   }
    
}
function RectangularMatrix(mat,r,c){
    var top=0;
    var bottom=r-1;
    var left=0;
    var right=c-1;
    var bag="";
    var count=0;
    while(count<(r*c)){
        for(let i=top;i<bottom &&count<(r*c);i++){
            bag+=mat[i][left]+" ";
            count++;
        }
        left++;
        for(let i=left;i<right &&count<(r*c);i++){
            bag+=mat[bottom][i]+" ";
            count++;
        }
        bottom--;
        for(let i=bottom;i>=top &&count<(r*c);i--){
            bag+=mat[i][right]+" ";
            count++;
        }
        right--;
        for(let i=right;i>=left &&count<(r*c);i--){
            bag+=mat[top][i]+" ";
            count++;
        }
        top++

    }
    console.log(bag);
}


 

if (process.env.USERNAME === "shake") {
  runProgram(`2
  3 4
  1 2 3 4
  5 6 7 8
  9 10 11 12
  4 3
  1 2 3
  4 5 6
  7 8 9
  10 11 12`);
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