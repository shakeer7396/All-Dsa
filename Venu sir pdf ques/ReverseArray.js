// Brute Force Approach

 var arr=[1,4,2,6,1,9];
// var arr1=[];
// for(var i=arr.length-1;i>=0;i--){
//     arr1.push(arr[i])
// }
// console.log(arr1)


//time complexity:-o(n)
//space complexity:-o(n)
// ----------------------------------------
// var bag="";
// for(var i =arr.length-1;i>=0;i--){
//     bag+=arr[i]+" ";
// }
// console.log(bag);
// tc-0(n)
// sc-0(n)

// ------------------------------------------------------------------------
//Sorting method
// for(var i=0;i<arr.length;i++){
//     for(var j=i+1;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             var temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
// console.log(arr)
// t-O(n2)
// s-o(1)
// ---------------------------------------------------
// 2pointer
// let left=0;
// let right=arr.length-1;
// while(left<right){
//     let temp=arr[left];
//     arr[left]=arr[right];
//     arr[right]=temp
//     left++;
//     right--;
// }
// console.log(arr);

// tc-o(n);
// sc-o(1)

