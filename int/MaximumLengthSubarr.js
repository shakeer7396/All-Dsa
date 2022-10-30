function maxSubarrayLength(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if ((arr[i] & arr[j]) === 0) {
          max = Math.max(max, j - i);
        }
      }
    }
    return max;
  }

  maxSubarrayLength([1,2,3,4,5])