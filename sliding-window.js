// Smallest Subarray with a given sum (easy)

var minSubArrayLen = function (nums, target) { 
    let window_start = 0;
    let sum_subarray = 0;
    let min_subarray = Infinity;
    for (let window_end = 0; window_end < nums.length; window_end ++ ){
        sum_subarray += nums[window_end];
        while (sum_subarray >= target){
            min_subarray = Math.min(min_subarray, window_end - window_start);
            sum_subarray -= nums[window_start]
            window_start++
        }
    }
    console.log(min_subarray) 
}


// first most obvious answer, it does not work in some cases.
// var minSubArrayLen = function (nums, target) {
//   let window_sum = 0;
//   let window_first = 0;
//   let min_length = Infinity;
//   for (let window_last = 0; window_last < nums.length; window_last++) {
//     const element = nums[window_last];
//     if (window_sum < target) {
//       window_sum += element;
//       console.log("1", element, window_sum, window_last, window_first);
//     } else {
//       min_length = Math.min(min_length, window_last - window_first);
//       window_sum -= nums[window_first];
//       window_first++;
//       window_last--;
//       console.log("2", element, window_sum, window_last, window_first);
//     }
//     while (window_last == nums.length - 1 && window_sum > target) {
//       min_length = Math.min(min_length, window_last - window_first);
//       window_sum -= nums[window_first];
//       window_first++;
//       console.log("3", element, window_sum, window_last, window_first);
//     }
//   }
//   if (min_length == Infinity) {
//     min_length = 0;
//   }
//   console.log(window_sum, min_length);
// };

minSubArrayLen([2, 1, 5, 2, 3, 2], 7)
// minSubArrayLen([1,1,1,1,1,1,1,1], 11)
// minSubArrayLen([1,2,3,4,5], 11);




// const example_array = [0, 4, 0, 3, 2];
// const example_array = [1,12,-5,-6,50,3];

// findAvgOfSubArr(example_array, 2);

// Maximum Sum Subarray of Size K (easy)
// actual approach
// const findAvgOfSubArr = (nums, k) => {
//   var window_sum = 0;
//   var start = 0;
//   const result = [];
//   let max_value = -Infinity;
//   for (end = 0; end < nums.length; end++) {
//     window_sum += nums[end];
//     if (end >= k - 1) {
//       console.log(start, end, window_sum);
//       result.push(window_sum / k);
//       max_value = Math.max(max_value,window_sum / k );
//       window_sum -= nums[start];
//       start++;
//     }
//   }
//   console.log(result, max_value);
// };

// Find Averages of Sub Arrays
// first most obvious approach
// function findAvgOfSubArr(nums, k) {
//     let first, last = 0;
//     let result, k_sum = null;
//     for(i =0; i < nums.length - k + 1; i++){
//         first = nums[i-1];
//         last = nums[i+k-1];
//         if(k_sum !== null){
//             k_sum= k_sum-first+last
//         } else {
//             for (let j = 0; j < k; j++) {
//                 const element = nums[j];
//                 k_sum = k_sum+element;
//             }
//         }
//         if (result=== undefined){
//             result= k_sum/k
//         } else {
//             if(k_sum/k > result){
//                 result = (k_sum/k);
//             }
//         }

//     }
//     console.log(result)
// }
