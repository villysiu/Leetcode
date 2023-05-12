/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    let n = questions.length
    let dp=new Array(n).fill(0)
    let res=0

    for(let i=n-1;i>=0;i--){
        let [point, bp]=questions[i]
        if(i===n-1){
            dp[i]=point
            
        }
        else{
            dp[i]=Math.max(res, i+bp+1<n ? point+dp[i+bp+1] : 0, point)   
            
                
        }
        res=dp[i]
    }
    // console.log(dp)
    return res
};