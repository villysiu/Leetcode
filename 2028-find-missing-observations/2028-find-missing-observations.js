/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    let sum = 0
    for(let r of rolls){
        sum+=r
    }
    let m = rolls.length
    let diff = mean * (n + m) - sum
    if(diff > n * 6 || diff <n* 1)
        return []
    // console.log(diff)
    let remainder = diff % n
    let quotient = parseInt(diff / n)
    let res = []
    
    for(let i=0;i<n;i++){
        res.push(quotient)
    }
    for(let i=0, r=remainder; r>0; i++, r--){
        res[i]+=1
    }
    
    return res
};