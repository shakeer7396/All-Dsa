function runProgram(input){
  input=input.trim().split("\n")
  var n=+input[0];
  var arr=input[1].trim().split(" ").map(Number);
  // console.log(n,arr);
  maximumoccuring(arr,n)
}
function maximumoccuring(arr,n){
  var obj={};
  for(let i=0;i<n;i++){
    if(obj[arr[i]]==undefined){
      obj[arr[i]]=1
    }
    else{
      obj[arr[i]]+=1;
    }
  }
  var max=-Infinity;
  let a=-1;
  for(let key in obj){
    if(obj[key]>max){
      max=obj[key];
      a=key;
    }
  }
  console.log(a);
}


if (process.env.USERNAME === "shake") {
  runProgram(`5
  0 2 0  6 9`);
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