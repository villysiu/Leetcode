/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    // ababbaaxy
    // axy
    let stack=[]
    let sorted_score=[[x, "ab"],[y,"ba"]].sort((a,b)=>b[0]-a[0])
    let points = 0
    
    for(let [score, str] of sorted_score){
        for(let ch of s){
            // console.log(ch)
            if(stack.length === 0)
                stack.push(ch)
            else if(ch === str[1] && stack[stack.length-1]===str[0]){
                stack.pop()
                points+=score
                // console.log(points)
                // console.log(stack)
            }
            else
                stack.push(ch)
        }
        s=stack.join('')
        stack=[]
    }
    return points
        
};