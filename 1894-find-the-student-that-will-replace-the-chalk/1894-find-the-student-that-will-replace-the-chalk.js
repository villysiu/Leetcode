/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    let total = 0
    for(let c of chalk){
        total += c
    }
    console.log(total)
    
    
    let diff = k % total
    console.log(diff)
    if (diff === 0)
        return 0
    
    
    let i = 0
    while(diff >= 0){
        diff -= chalk[i++]
    }
    return i-1
};