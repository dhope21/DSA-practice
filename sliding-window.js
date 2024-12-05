


// actual approach 
const findAvgOfSubArr =  (nums, k) => {
    var window_sum = 0;
    var start = 0;
    const result = [];
    for(end = 0 ; end < nums.length ; end++){
        window_sum += nums[end];
        if(end >= k-1){
            console.log(start, end, window_sum)
            result.push(window_sum/k);
            window_sum -= nums[start];
            start ++;
        }
    }
    console.log(result)
}

// first approach
// function findAvgOfSubArr(nums, k) {
//     var first, last, k_sum = 0;
//     const result = []
//     for(i =0; i < nums.length - k + 1; i++){
//         first = nums[i-1];
//         last = nums[i+k-1];
//         if(k_sum){
//             // console.log(k_sum, first, last);
//             k_sum= k_sum-first+last
//         } else {
//             for (let j = 0; j < k; j++) {
//                 const element = nums[j];
//                 // console.log(i, k_sum, element);
//                  k_sum = k_sum+element;
//             }
//         }
//         result.push(k_sum/k);
//         // console.log(i, k_sum);
//     }
//     console.log(result)
// }

const example_array = [1, 3, 2, 6, -1, 4, 1, 8, 2];

findAvgOfSubArr(example_array, 5);