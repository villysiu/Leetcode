/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function(n, k, maxPts) {
    if (k === 0 || n >= (k + maxPts)) {
        return 1.0;
    }
    let dp=new Array(n + 1);
    let currSum = 1;
    let ans = 0;

    dp[0] = 1;

    for (let i = 1; i < n+1; i++) {

        dp[i] = currSum / maxPts;

        if (i < k) 
            currSum += dp[i];

         else 
            ans += dp[i];

        if (i - maxPts >= 0) 
            currSum -= dp[i - maxPts];

    }

    return ans;
    
};