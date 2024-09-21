/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let arr = []
    for(let i=1; i<=n; i++){
        arr.push(i.toString())
    }
    // console.log(arr)
    return arr.sort().map(n=>parseInt(n))
    
     
};