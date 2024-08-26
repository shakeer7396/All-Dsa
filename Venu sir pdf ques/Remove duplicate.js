
// var arr=[1,2,2,4,3,3,5,6,6]
// var uniqArr=arr.filter((item,index)=>arr.indexOf(item)===index);
// console.log(uniqArr);

// var arr=[1,2,2,4,3,3,5,6,6]
// var unarr=Array.from(new Set(arr));
// console.log(unarr)


var arr = [1, 2, 2, 2, 3, 4, 5, 5, 5, 5, 6, 7, 9];
var uniqueObj = {};
var uniqueArr = [];

// Loop through the array
for (var i = 0; i < arr.length; i++) {
    // If the element is not already a key in the object, add it
    if (!uniqueObj[arr[i]]) {
        uniqueObj[arr[i]] = true;
        uniqueArr.push(arr[i]);
    }
}

console.log(uniqueArr);


// var arr = [1, 2, 2, 2, 3, 4, 5, 5, 5, 5, 6, 7, 9];
// var uniqueArr = [...new Set(arr)];

// console.log(uniqueArr);
