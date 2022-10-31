
// Binary Matrix Ended
// Description

// You are given a binary matrix of size N x M. A binary matrix is one which consists of only 1's and 0's. You have to flip the matrix. Flipping the matrix means converting all 1's to 0's and all 0's to 1's.


// Input
// The first line of the input contains N and M, the dimensions of the matrix.

// The next N lines contain M space separated integers denoting the values of the matrix.

// Constraints

// 1 <= N , M <= 100

// 0 <= A[i][j] <= 1


// Output
// Print the matrix after flipping it, as shown in the sample test case.


// Sample Input 1 

// 3 2
// 1 0
// 0 1
// 1 1
// Sample Output 1

// 0 1 
// 1 0 
// 0 0 
// Hint

// In the sample test case, we are given a 3 x 2 matrix. In the first row, the row is -> {1,0}. Flipping the 0's to 1's and 1's to 0's, the row becomes {0,1}. Similarly, the second row after flipping becomes

// {1,0}, and the third row after flipping becomes {0,0}.

function runProgram(input){
  // console.log(input); 
   input=input.trim().split("\n");
   var [r,c]=input[0].trim().split(" ").map(Number);
   var mat=[];
   for(var i=1;i<=r;i++){
    mat.push(input[i].trim().split(" ").map(Number))
   } 
  //  console.log(mat)
  binaryChange(mat,r,c)
  
}
 function binaryChange(mat,r,c){
    for(var i=0;i<r;i++){
      var bag="";
      for(var j=0;j<c;j++){
        if(mat[i][j]==0){
          bag+=1+" ";
        }
        else if(mat[i][j]==1){
          bag+=0+" ";
        }
      }
      console.log(bag);
    }
//   for(let i=0;i<r;i++){
//     bag="";
//     for(let j=0;j<c;j++){
//       if(mat[i][j]==0){
//         bag+=1+" ";
//       }
//       else if(mat[i][j]==1){
//         bag+=0+" ";
//      }
//     }
//   console.log(bag);
//   }
 }



if (process.env.USERNAME === "shake") {
  runProgram(`3 2
  1 0
  0 1
  1 1`);
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