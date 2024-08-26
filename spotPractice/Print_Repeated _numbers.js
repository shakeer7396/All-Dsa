//Print repeated numbers and Non Repeated numbers in the array
var arr= [1,2,2,2,3,4,5,5,5,5,6,7,7,7,9];
var obj={};
for(var i=0;i<arr.length;i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1
    }
    else{
        obj[arr[i]]+=1
    }
}
// console.log(obj);
var bag=[];
var bag2=[];
for(let key in obj){
    if(obj[key]==1){
        bag.push(key)
    }
    else if(obj[key]>1){
        bag2.push(key);
    }
}
console.log("Repeated number's are "+ bag2);
console.log("Non Repeated number's are "+ bag);

//Repeated number's are 2,5,7
//Non Repeated number's are 1,3,4,6,9
