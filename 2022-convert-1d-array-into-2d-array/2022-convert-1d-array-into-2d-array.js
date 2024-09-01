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
    for(let r =0, c=0; r<m; r++, c+=n){
        res.push(original.slice(c,c+n))
    }
    return res
};