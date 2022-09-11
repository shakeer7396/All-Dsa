// Rototate me last indexvalue first aana

var arr=[9,2,3,4,1,8,3]
var arr1=[];
for(var i=arr.length-1;i>arr.length-2;i--){
    arr1.push(arr[i])
}
for(var i=0;i<arr.length-1;i++){
    arr1.push(arr[i])
}
console.log(arr1)