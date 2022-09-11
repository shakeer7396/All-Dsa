var arr1=[85,35,1,32,54,6];
var arr2=[85,2];

var obj={};
for(var i=0;i<arr1.length;i++){
    obj[arr1[i]]=arr1[i];

}
for(var i=0;i<arr2.length;i++){
    obj[arr2[i]]= arr2[i];
}
// console.log(obj);
var res=[];
for(var k in obj){
    res.push(obj[k])
}
console.log(res)

// tc-0(n)
// sc-0(n)