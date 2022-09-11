var arr=[1,5,8,10]
var k=2;

let diff=arr[arr.length-1]-arr[0];
// console.log(diff);
var min;
var max;
for(var i=0;i<arr.length;i++){
    if(arr[i]-k<0){
        continue;

    }
    max=Math.max(arr[i-1]+k,arr[arr.length-1]-k)
    min=Math.min(arr[i]-k,arr[0]+k)
    diff=Math.min(diff,max-min)
}
console.log(diff);

// t-0(n);
// sp-0(1)