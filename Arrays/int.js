// var arr=[5,15,25,78,59,46];
//  var arr=[1,3,3,2,11,6];
// var bag=[]
// for(var i=0;i<arr.length;i++){

//     if(arr[i]>18 && arr[i]<60){
//         bag.push(arr[i])
//     }
    
// }
// if(bag.length==0){
//     console.log("NA");
// }
// else{
//     console.log(bag.join(","));
// }

var num=37.45
var ans=num.toString().split('.')
//console.log(ans)
var max=0;
for(var i=0;i<ans.length;i++){
     if(ans[i]>max){
        max=ans[i]
     }
}
console.log(max)

