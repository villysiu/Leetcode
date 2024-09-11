/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
//     console.log(start.toString(2))
//     console.log(goal.toString(2))
//     console.log(goal.toString(2).padStart(4, '0'));
    
    let startStr = start.toString(2)
    let goalStr = goal.toString(2)
    let len = startStr.length > goalStr.length ? startStr.length : goalStr.length
    
    startStr = startStr.padStart(len, "0")
    goalStr = goalStr.padStart(len, "0")
    
    let count = 0
    
    for(let i=0; i<len; i++){
        count += startStr[i] !== goalStr[i]
    }
    return count
    
};