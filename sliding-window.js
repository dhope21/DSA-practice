
// Longest Subarray with Ones after Replacement (hard)

longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2);

function longestOnes(nums, k) {
    let window_start = 0;
    let max_length = 0;
    let int_count = {0:0, 1:0};
    let max_one = 0;
    for (let window_end= 0; window_end < nums.length; window_end++){
        const end_int = nums[window_end];
        int_count[end_int]++
        max_one = Math.max(max_one, int_count[1]);
        if (window_end-window_start+1 > max_one + k){
            const start_int = nums[window_start];
            int_count[start_int]--
            window_start++
        }
        max_length = Math.max(max_length, window_end-window_start+1)
    }
    console.log(max_length)

};


// Longest Substring with Same Letters after Replacement (hard)

// characterReplacement("ABAB", 2)

// function characterReplacement(s, k) {
//     let window_start = 0;
//     let max_length = 0;
//     let char_counter = {}
//     let max_count = 0;
//     for (let window_end = 0; window_end < s.length; window_end++){
//         const char_end = s[window_end];
//         if(!(char_end in char_counter)){
//             char_counter[char_end] = 0
//         }
//         char_counter[char_end]++
//         max_count = Math.max(max_count, char_counter[char_end])
//         if (window_end-window_start+1 > k + max_count){
//             const char_start = s[window_start]
//             char_counter[char_start]--
//             window_start++
//         }
//         max_length = Math.max(max_length, window_end-window_start+1)
//     }
//     console.log(max_length)
// };


// No-repeat Substring (hard)

// lengthOfLongestSubstring("abba");

// function lengthOfLongestSubstring(s) {
//   let window_start = 0;
//   let window_max = 0;
//   let char_map = {};
//   for (let window_end = 0; window_end < s.length; window_end++) {
//     let cur_char = s[window_end];
//     if (cur_char in char_map) {
//       window_start = Math.max(window_start, char_map[cur_char]+1);

//     }
//     window_max = Math.max(window_max, window_end - window_start + 1);
//     char_map[cur_char] = window_end;
//     console.log(char_map, window_max, window_start, window_end);
//   }
// }

// Fruit Into Baskets
// totalFruit([3,3,3,1,2,1,1,2,3,3,4]);

// // map approach
// function totalFruit(fruits) {
//     let window_start = 0;
//     let max_fruits = 0;
//     let fruit_map = new Map();
//     for (let window_end = 0; window_end < fruits.length; window_end++){
//         let fruit_end = fruits[window_end];
//         fruit_map.set(fruit_end, fruit_map.get(fruit_end) +1 || 1 )
//         while (fruit_map.size >2 ){
//             let fruit_start = fruits[window_start];
//             fruit_map.set(fruit_start, fruit_map.get(fruit_start)-1 )
//             if(fruit_map.get(fruit_start) == 0){
//                 fruit_map.delete(fruit_start)
//             }
//             window_start++
//         }
//         max_fruits = Math.max(max_fruits, window_end-window_start+1)
//     }
//     console.log(max_fruits)
// }

// object approach
// function totalFruit(fruits) {
//   let window_start = 0;
//   let max_fruits = 0;
//   let fruit_basket = {};
//   for (let window_end = 0; window_end < fruits.length; window_end++) {
//     if (fruit_basket[fruits[window_end]]) {
//       fruit_basket[fruits[window_end]] += 1;
//     } else {
//       fruit_basket[fruits[window_end]] = 1;
//     }
//     console.log(window_start, window_end, fruit_basket);
//     while (Object.keys(fruit_basket).length > 2) {
//       if (fruit_basket[fruits[window_start]] > 1) {
//         fruit_basket[fruits[window_start]] -= 1;
//       } else {
//         delete fruit_basket[fruits[window_start]];
//       }
//       window_start++;
//       console.log(window_start, window_end, fruit_basket);
//     }
//     max_fruits = Math.max(max_fruits, window_end - window_start + 1);
//   }
//   console.log("max_fruits", max_fruits);
// }

// Longest Substring with K Distinct Characters (medium)

// longestSubstringWithKdistinct("araaci", 2); //4, The longest substring with no more than '2' distinct characters is "araa".
// // longestSubstringWithKdistinct("araaci", 1)//2, The longest substring with no more than '1' distinct characters is "aa".
// // longestSubstringWithKdistinct("cbbebi", 3)//5, The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".

// function longestSubstringWithKdistinct(str, k) {
//   let window_start = 0;
//   let max_length = 0;
//   let char_counter = {};
//   // console.log(Object.keys(char_counter).length)
//   for (window_end = 0; window_end < str.length; window_end++) {
//     if (char_counter[str[window_end]]) {
//       char_counter[str[window_end]] += 1;
//     } else {
//       char_counter[str[window_end]] = 1;
//     }
//     console.log(window_start, window_end, char_counter);
//     while (Object.keys(char_counter).length > k) {
//       if (char_counter[str[window_start]] > 1) {
//         char_counter[str[window_start]] -= 1;
//       } else {
//         delete char_counter[str[window_start]];
//       }
//       window_start++
//     }
//     max_length = Math.max(max_length, window_end - window_start + 1);
//   }
//   console.log("max_length", max_length)
// }

// Smallest Subarray with a given sum (easy)

// var minSubArrayLen = function (nums, target) {
//     let window_start = 0;
//     let sum_subarray = 0;
//     let min_subarray = Infinity;
//     for (let window_end = 0; window_end < nums.length; window_end ++ ){
//         sum_subarray += nums[window_end];
//         while (sum_subarray >= target){
//             min_subarray = Math.min(min_subarray, window_end - window_start);
//             sum_subarray -= nums[window_start]
//             window_start++
//         }
//     }
//     console.log(min_subarray)
// }

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

// minSubArrayLen([2, 1, 5, 2, 3, 2], 7)
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
