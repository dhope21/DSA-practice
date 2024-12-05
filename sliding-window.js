// actual approach
const findAvgOfSubArr = (nums, k) => {
  var window_sum = 0;
  var start = 0;
  const result = [];
  let max_value = -Infinity;
  for (end = 0; end < nums.length; end++) {
    window_sum += nums[end];
    if (end >= k - 1) {
      console.log(start, end, window_sum);
      result.push(window_sum / k);
      max_value = Math.max(max_value,window_sum / k );
      window_sum -= nums[start];
      start++;
    }
  }
  console.log(result, max_value);
};

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

const example_array = [0, 4, 0, 3, 2];
// const example_array = [1,12,-5,-6,50,3];

findAvgOfSubArr(example_array, 1);
