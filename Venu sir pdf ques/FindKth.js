var arr=[7,10,4,3,20,15];
var k=3;
//OBJECT ALWAYS GIVEN SORTED ARRAY OUTPUT RESULT

// var obj={};
// for(let i=0;i<arr.length;i++){
//     if(obj[arr[i]]==null){
//         obj[arr[i]]=1;
//     }
//     else{
//         obj[arr[i]]+=1;
//     }
// }
// // console.log(obj);
// let ans;
// let sum=0;
// for(let key in obj){
// sum+=obj[key];
// if(sum==k){
//     ans=key;
// }
// }
// console.log(ans)

// tc-o(n)
// sc-o(n)

// -------------------------------------------------------------------------
// optimazation
// arr.sort((a,b)=>a-b);
// var x;
// for(var i=0;i<arr.length;i++){
//     x=arr[k-1];
// }
// console.log(x);

// tc-nlogn
// sc-0(1)

// --------------------------------------------------------------------------
var arr=[7,10,4,3,20,15];
var k=3;
arr=arr.sort(function(a,b){
    return a-b
});
var ans;
for(var i=0;i<arr.length;i++){
if(i+1==k){
    ans=arr[i];
}
}
console.log(ans)

// tc-0(nlogn)
// sc-0(n)
