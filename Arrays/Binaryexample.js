// let a = [1, 2, 3, 4, 5, 6];
// var left = 0, right = 5;
// var found = false;
// var target = 5;
// while(left <= right) {
//    var mid = Math.floor((left + right) / 2);
//    if(a[mid] == target) {
//        found = true;
//        break;
//    }
//    else if(a[mid] < target) {
//        left = mid + 1;
//    }
//    else {
//        right = mid - 1;
//    }
// }
// if(found) {
//    console.log("YES");
// }
// else {
//    console.log("NO");
// }

//calculate the floor of the square root of a number

let n = 24;
let l = 0, 
r = 100, 
ans = n;
while(l <= r) {
   let mid = Math.floor((l + r) / 2);
   if(mid * mid <= n) {
       ans = mid;
       l = mid + 1;
   }
   else {
       r = mid - 1;
   }
}
console.log(ans);