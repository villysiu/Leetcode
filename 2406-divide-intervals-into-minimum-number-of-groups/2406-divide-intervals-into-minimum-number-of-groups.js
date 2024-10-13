/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
    
    let start = [], end = []
    for (let [l, r] of intervals){
        start.push(l)
        end.push(r)
        
    }
    start.sort((a,b)=>a-b)
    end.sort((a,b)=>a-b)
    // console.log(start)
    // console.log(end)
    let endPtr = 0, group = 0
    for(let s of start){
        if(s > end[endPtr])
            endPtr++
        else 
            group += 1
    }
    return group
    
};