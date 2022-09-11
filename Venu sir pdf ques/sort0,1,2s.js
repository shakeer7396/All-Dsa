// function runProgram(input){
//     input=input.trim().split("\n")
//     let N=+input[0].trim()
//     let arr=input[1].trim().split(" ").map(Number)
//     SortTheNum(N,arr)
// }
// //tc-0(n)
// //sc-0(1)
// function SortTheNum(N,a){
//     let left=0
//     let right=N-1
//     let mid=0
//     let temp=0
//     while(left<=right){
//         if(a[mid] == 0)
//         {
//             left++; 
//             mid++; 
//         }
//         else if(a[mid] == 1)
//         {
//             mid++; 
//         }
//         else
//         {
//             temp = a[mid]; 
//             a[mid] = a[right]; 
//             a[right] = temp; 
//             right--;
//         }
//     }

//     console.log(a.join(" "))
// }
// if (process.env.USERNAME === "shaik") {
//   runProgram(`5
//   0 2 1 2 0`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

// ---------------------------------------------------------------------
// without using mid value 2pointer
// var arr=[0,2,0,1,2,0];

// var left=0;
// var right=arr.length-1;
// while(left<=right){
//     if(arr[left]==0){
//         left++;
//     }
//     else if(arr[left]==1){
//         left++;
//     }
//     else{
//         var temp=arr[left];
//         arr[left]=arr[right];
//         arr[right]=temp
//         right--;
//     }
// }
// console.log(arr)

// // tc-0(n)
// // sc-0(1)
// // -------------------------------------------------------------------------

