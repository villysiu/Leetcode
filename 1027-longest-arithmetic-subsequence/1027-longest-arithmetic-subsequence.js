/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    const n = nums.length;
    if(n<=2) return n;

    let longest = 2;
    dp = Array(n).fill().map(() => new Map()) 

    for(let i=0; i<n; ++i) {
        for(let j=0; j<i; ++j) {
            const diff = nums[i] - nums[j];
            dp[i].set(diff, (dp[j].get(diff) || 1) + 1);

            
            longest = Math.max(longest, dp[i].get(diff));
        }
    }
    // console.log(dp)
    return longest;
};