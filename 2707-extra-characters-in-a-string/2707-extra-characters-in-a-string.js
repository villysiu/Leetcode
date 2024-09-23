/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    let dictSet = new Set(dictionary)
    let dp=new Array(s.length+1).fill(Infinity)
    dp[0]=0
    s = "X"+s
    for(let r=1; r<s.length; r++){
        for(let l=1; l<=r; l++){
            if(dictSet.has(s.slice(l,r+1))){
               dp[r]=Math.min(dp[r],dp[l-1], dp[r-1]+1)
                
                
            }
        }
        if(dp[r]===Infinity)
            dp[r] =dp[r-1]+1
    }
    // console.log(dp)
    return dp[dp.length-1]
};