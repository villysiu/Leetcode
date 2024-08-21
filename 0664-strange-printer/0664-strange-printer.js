/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    let short = ""
    for(let c of s){
        if(short.length===0 || c!==short[short.length-1])
            short+=c
        
    }
    // console.log(short)
    let n = short.length
    let dp = Array.from({length: n}, ()=>new Array(n).fill(0))
    
    for(let r=n-1; r>=0; r--){
        for(let c=r; c<n; c++){
            if(r===c){
                dp[r][c] = 1
            }
            else if(short[r] === short[c]){
                dp[r][c] = dp[r][c-1]
            }
            else{ 
                let min = Infinity;
                for(let k=r; k<c; k++){
                    min = Math.min(min, dp[r][k]+dp[k+1][c])
                }
                dp[r][c] = min    
                    
            }
        }
    }
    // console.log(dp)
    return dp[0][n-1]
};