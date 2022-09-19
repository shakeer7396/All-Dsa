function runProgram(input){
    input=input.trim().split("\n")
    var [n,k]=input[0].trim().split(" ").map(Number);
    var arr=input[1].trim().split(" ").map(Number);
    // console.log(arr,n);
     console.log(palindrome(arr,n,k))
     
}
function palindrome(arr,n,k){
   var s=0;
   var e=n-1;
   while(s<e){
    if(arr[s]+arr[e]==k){
        return true
    }
    else if(arr[s]+arr[e]<k){
        s++;
    }
    else{
        e--;
    }

   } 
        return -1
    
}


if (process.env.USERNAME === "shake") {
    runProgram(`5 10
    1 2 3 5 5`);
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