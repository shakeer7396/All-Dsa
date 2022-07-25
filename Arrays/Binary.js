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
  for(let i=0;i<r;i++){
    bag="";
    for(let j=0;j<c;j++){
      if(mat[i][j]==0){
        bag+=1+" ";
      }
      else if(mat[i][j]==1){
        bag+=0+" ";

    }
    }
  console.log(bag);

  }
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