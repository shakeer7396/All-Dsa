var arr=[1,1,1,0,2,0,1];

// var obj={};

// for(var i=0;i<arr.length;i++){
//     if(obj[arr[i]]==undefined){
//         obj[arr[i]]=1;
//     }
//     else{
//         obj[arr[i]]+=1;
//     }

// }
// var max=-Infinity;
// var x="";
// for(var key in obj){
//     if(obj[key]>max){
//         max=obj[key];
//         x=key;
//     }
    
// }
// console.log(x+"-"+max)

var obj={};
  for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]==undefined){
      obj[arr[i]]=1
    }
    else{
      obj[arr[i]]+=1;
    }
  }
  var max=-Infinity;
  let a;
  let b;
  for(let key in obj){
    if(obj[key]>max){
      max=obj[key];
      a=obj[key];
        b=key
    }
  }
  console.log(b,a);