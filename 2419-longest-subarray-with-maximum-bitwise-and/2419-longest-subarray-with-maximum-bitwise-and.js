/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    const max = Math.max(...nums)
    let maxCount = 0, count = 0
    for(let n of nums){
        if(n===max){
            count++;
            maxCount = Math.max(maxCount, count)
        }
        else{
            count = 0;    
        }
    }
    return maxCount
};