// let n=-2;
// var createCounter = function(n) {
    
//     return function() {
//             n=n+1   
//             return n;            
//     };
// };

let n=0;
var createCounter = function(n) {
    for(let i=0;i<5;i++){
    console.log(n=n+1)
    }
}
createCounter(n);