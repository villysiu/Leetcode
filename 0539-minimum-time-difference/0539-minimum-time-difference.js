/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let regexp = /\d{2}/g
    const [start, end] = [0, 1440]
    let mins = []
    for(let tp of timePoints){
        
        let [hr, min] = tp.match(regexp)
        
        let tpMins = parseInt(hr) * 60 + parseInt(min)
        mins.push(tpMins)
    }

    mins.sort((a,b)=>a-b)
    // console.log(mins)
    let res = Infinity
    for(let i=1; i<mins.length; i++){
        res = Math.min(res, Math.abs(mins[i]-mins[i-1]))
    }
    
    return Math.min(res, mins[0]+1440 - mins[mins.length-1])
};