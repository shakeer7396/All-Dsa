var arr=[9,8,3,2,1,10,12];

for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            var temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr)

// t-0(n2)
// sp-0(1)



