/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if(original.length !== m*n)
        return []
    
    let res = []
    for(let c=0; c<m*n; c+=n){
        res.push(original.slice(c,c+n))
    }
    return res
};