var arr=[20,10,-2,-3,-5,24,23,-6,-7];

// arr.sort(function(a,b){
//     return(a-b)
// })
// console.log(arr)
// tc-nlogn;
// sc-0(1)
// ----------------------------------------------------------------

var j=0;
for(var i=0;i<arr.length;i++){
    if(arr[i]<0){
        if(i!=j){
            let temp=arr[i];
            arr[i]=arr[j]
            arr[j]=temp
        }
        j++;
    }
}
console.log(arr)

// tc-0(n)
// sc-0(n)