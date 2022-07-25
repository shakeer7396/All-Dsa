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
    console.log(ba);
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