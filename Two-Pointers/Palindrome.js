function runProgram(input){
    input=input.trim().split("\n")
    var str=input[0];
    // console.log(str);
    console.log(palindrome(str))
}
function palindrome(str){
    var start=0;
    var end=str.length-1;
    while(start<end){
        if(str[start]!==str[end]){
            return false
        }
        start++;
        end--;

    }
    return true;
    
}


if (process.env.USERNAME === "shake") {
    runProgram(`racecar`);
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