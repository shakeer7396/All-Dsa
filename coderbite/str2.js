function StringChallenge(str) { 

  
    // code goes here  
    var bag="";
    var x=str[0];
    var count=0;
    for(var i=0;i<str.length;i++){
      if(str[i]==x){
        count++
      }
      else{
        bag+=count+x;
        x=str[i];
        count=1;
      }
    }
    var tok="gq4tpl290a:";
    bag+=count+x;
  
    var out=bag.split("").reverse().join("");
    var res=tok.split("").reverse().join("");
    // console.log(bag)
  
    return out+res; 
  
  }
     
  // keep this function call here 
  console.log(StringChallenge(readline()));