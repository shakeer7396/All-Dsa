var arr=[9,8,3,2,1,10,12];

function swap(arr,i,j){
            var temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
}

for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            swap(arr,i,j)
        }
    }
}
console.log(arr.join(" "))

// t-0(n2)
// sp-0(1)



