var arr=[1,3,4,4,2,2,3,3,2];


// For only 2times repeating numbers output came

// var bag="";
// for(var i=0;i<arr.length;i++){
//     for(var j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             bag+=arr[j]
//         }
//     }
// }
// console.log(bag);
// t-0(n2)
// s-0(1)
// -------------------------------------------------------------------------------

// var obj={};
// for(var i=0;i<arr.length;i++){
//     if(obj[arr[i]]==null){
//         obj[arr[i]]=1;
//     }
//     else{
//         obj[arr[i]]+=1;

//     }
// }
// // console.log(obj)
// var arr1=[];
// for(let k in obj){
//     if(obj[k]>1){
//         arr1.push(k);
//     }
// }
// console.log(arr1.join(" "))

// tc-0(n)
// sc-0(n)
// ----------------------------------------------------------------------------------
// for arr of number result only double numbers
// var arr1=[];
// for(var i=0;i<arr.length;i++){
//     if(arr1[arr[i]]==undefined){
//         arr1[arr[i]]=arr[i]
//     }
//     else{
//         console.log(arr[i]);
//     }

// }
// ----------------------------------------------------------------------------------

var arr1=[];
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            if(arr1.includes(arr[i])){
                break;
            }
            else{
                arr1.push(arr[j]);
            }
        }
    }
}
console.log(arr1)
// --------------------------------------------------------------------------
