var str='addcfcckaas'

var obj={};

for(var i=0;i<str.length;i++){
    if(obj[str[i]]==undefined){
        obj[str[i]]=1;
    }
    else{
        obj[str[i]]+=1;
    }
}
// console.log(obj)
let bag="";
for(var key in obj){
    if(obj[key]<=1){
        bag+=key
    }
}
console.log(bag)
