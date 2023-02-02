function StringChallenge(sen) { 

  
    // code goes here  
  
    var arr=sen.match(/[a-z]+/gi);
    var sorted=arr.sort(function(a,b){
      return b.length-a.length;
    })
    let tok="gq4tpl290a:";
    let bag= sorted[0]; 
  
    var out=bag.split("").reverse().join("");
    var res=tok.split("").reverse().join("");
  
  return out+res;
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));