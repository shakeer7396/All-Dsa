var a=[1,2,3,-2,5];
var max=-Infinity;
for(var i =0;i<a.length;i++){
    var sum=0;
    for(var j=i;j<a.length;j++){
        sum+=a[j]
        if(sum>max){
            max=sum;
        }
    }
// console.log(sum)

}
console.log(max)
