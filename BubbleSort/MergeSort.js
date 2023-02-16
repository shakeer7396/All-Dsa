// var arr1=[5,6,7,2,12,15,24]
// var arr2=[6,8,5,2,4,7,12,13]

// var box=[];


// for(var i=0;i<arr1.length;i++){
//     for(var j=0;j<arr2.length;j++){
//         if(arr1[i]>arr2[j]){
       
//             box.push(arr1[i])
//         }
//     }
// }
// console.log(box)

var arr1=[1,3,4,5,7,3,4,9,6,4];
var arr2=[45,25,65,89,25,1,74,2];

var box=[];

for(var i=0;i<arr1.length;i++){
    for(var j=0;j<arr2.length;j++){
        if(arr1[i]>arr2[j]){
            box.push(arr1[i])
        }
    }
}
console.log(box)