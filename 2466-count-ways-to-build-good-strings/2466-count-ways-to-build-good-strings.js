/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
    let dp=new Array(high+1).fill(0)
    dp[0]=1
    let mod=Math.pow(10,9)+7
    let count=0
    for(let i=1;i<=high;i++){
        if(i>=zero){
            dp[i]=(dp[i]+dp[i-zero])%mod
        }
        if(i>=one){
            dp[i]=(dp[i]+dp[i-one])%mod
        }
        if(i>=low && i<=high)
            count=(count+dp[i])%mod
    }
    return count
};