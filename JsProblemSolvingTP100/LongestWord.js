//Longest word in a string

//Write a function find longest word that takes a string as input and return the longest word in the string. If the multiple longest word return first one encountered.

//Constrains 
// The input string may contains alphanumeric characters, digits, spaces and punctuations.
// The input string is non-empty.
// The input string contains multiple words seperated by spaces.

//Notes:
// If input string is empty are contains only whitespaces, the function should a return an false.
// The function should ignore leading and trailing whitespaces when determining the longest word.

const findLongestWord = (str)=>{
    //Checking Whitespaces and return empty
    if(str.trim().length ===0){
        return false
    }

    //String convert to array
  // let strArr = str.split(" ");
   // console.log(strArr);
//    strArr.sort((a,b)=>b.length-a.length);     //Sort is based on Unicode values (Capitals are comes firsr is less value)  above one is decending sort
//    console.log(strArr);
//    return strArr[0];


  // return strArr.at(-1); //output is Languages
  //if you sort ascending then you want to target last word use strArr.at(-1);
  
  
  //Another method with reduce method  //Returning single value then use reduce
  //let strArr = str.split(" ");
// return strArr.reduce(
//     (acc,curWord)=>(curWord.length > acc.length ? curWord : acc), ""
// );

//Forloop
let strArr = str.split(" ");
let max = strArr[0];
for(let i=0;i<strArr.length;i++){
    if(max.length<strArr[i].length){
        max=strArr[i]
    }
}
//console.log(max); // without using return print using console 
return max;  // below in function call arrounded with console
}

console.log(
findLongestWord("India is a Multi Languages country in the world")
);
