//indexes arr[0],[1], [2],  [3]  

var arr= [[1,3],[2,6],[8,10],[15,18]]

arr.sort((a,b)=>a[0]-b[0]);
let res=[arr[0]];

for(let curr of arr){
    prev=res[res.length-1]
    if(prev[1]>=curr[0]){

    }
}



//tc->nlogn
//sc-->0(n)