var arr=[10,4,8,2,32,54,9];
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

var min=Infinity;
var max=-Infinity;
for(var i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
    else if(arr[i]<min){
        min=arr[i]
    }
}
console.log(min,max);