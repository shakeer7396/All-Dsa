// Smallest and Largest of all Ended
// Description

// Given an array,arrwhich hasNintegers.

// You need to print the smallest and largest element present in the array each on new lines.


// Input
// Input Format

// The first line contains an integerN.

// The second line containsNspace separated integers, which are integers of arrayarr.

// Constraints

// 1 <= N <= 100


// Output
// Output Format

// One first line, print minimum of all elements.

// On the second line, print the maximum of all elements.


// Sample Input 1 

// 4
// -2 0 8 4
// Sample Output 1

// -2
// 8
// Hint

// Integers in array are:-[-2, 0, 8, 4]

// Minimum integer in array[-2, 0, 8, 4]is-2

// Maximum integer in array[-2, 0, 8, 4]is-8
var arr=[-2,0,8,4];

    var min=Infinity;
    for(var i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i]
        }
    }

    var max=-Infinity;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    console.log(min);
console.log(max)


//var arr=[10,4,8,2,32,54,9];
// var min=Infinity;
// var max=-Infinity;
// for(var i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
//     else if(arr[i]<min){
//         min=arr[i]
//     }
// }
// console.log(max,min);

// tc-o(n)
// sc-o(1)

// var arr=[10,4,8,2,32,54,9];

// var min=Infinity;
// var max=-Infinity;
// for(var i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
//     else if(arr[i]<min){
//         min=arr[i]
//     }
// }
// console.log(min,max);
