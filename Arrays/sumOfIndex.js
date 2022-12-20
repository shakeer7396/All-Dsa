function ArraysSum(){
    var arr1=[1,0,2,3,4];
    var arr2=[3,5,6,7];
    var bag="";
    var sum=0;
    var i=0;

    while(sum<arr1.length && sum<arr2.length){
        bag+=arr1[sum]+arr2[sum]+" ";
        sum++;
    }
//    console.log(sum);
    if(sum==arr2.length){
        for(var i=sum;i<arr1.length;i++){
            bag+=arr1[i]+" ";
        }
    }
    else{
        for(var i=0;i<arr2.length;i++){
            bag+=arr2[i]+" ";
        }
    }
    console.log(bag)
 }
ArraysSum()

