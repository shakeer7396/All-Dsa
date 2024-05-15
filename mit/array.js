/**
 * [1,2,3,4,5,1,4] [1,4,5]
 */
var arr1=[1,2,3,4,5,1,4];
var arr2=[1,4,5];
var bag=[];
for(var i=0;i<arr1.length;i++){
    for(var j=0;j<arr2.length;j++){
        if(arr1[i]==arr2[j]){
            bag.push(arr1[i])
        }
    }
}
// console.log(bag);
let res=new Set(bag)
console.log(res) 
//OUTPUT--Set(3) { 1, 4, 5 }


// var arr1 = [1, 2, 3, 4, 5, 1, 4];
// var arr2 = [1, 4, 5];
// var bag = [];

// for (var i = 0; i < arr1.length; i++) {
//     for (var j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j] && !bag.includes(arr1[i])) {
//             bag.push(arr1[i]);
//         }
//     }
// }

// console.log(bag);
//OUTPUT--[ 1, 4, 5 ]

