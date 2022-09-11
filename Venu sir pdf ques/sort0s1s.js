var arr=[2,1,0,1,2,0];

// output:[0,0,1,1,2,2]
//Bubble sort
for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        if(arr[i]>arr[j+1]){
            let temp=arr[i];
            arr[i]=arr[j+1];
            arr[j+1]=temp;

        }
    }
}
console.log(arr);
// tc-0(n2)
// sc-0(1)

 