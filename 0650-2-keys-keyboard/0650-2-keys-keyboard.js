/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    let dp=[0,0]
    let primes = []
    let i=2
    for(let i=2; i<=n; i++){
        for(let p of primes){
            // console.log("i: "+i+", p: "+p)

            if(i%p===0){
                dp.push(dp[i/p]+p)
                break;
            }
            
        }
       
        if(dp[i]===undefined){
            dp.push(i)
            primes.push(i)
        }
        // console.log(dp)
        
    }
    return dp[n]
    
};