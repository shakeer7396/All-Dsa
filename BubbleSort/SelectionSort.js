var arr=[9,8,3,2,1,10,12,15,3];
for(var i=0;i<arr.length;i++){
    var index=i;
    for(var j=0;j<arr.length;j++){
        if(arr[j]>arr[index]){
            index=j;  
        }
        var temp=arr[i];
            arr[i]=arr[index]
            arr[index]=temp;
        

    }
}
console.log(arr)

// tc-0(n2)
// sc-0(1)

