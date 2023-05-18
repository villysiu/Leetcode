/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let arr=Array.from({length: n}, (_,i)=>i)
    // edges.sort((a,b)=>b[1]-a[1])
    function helper(n){
        if(n===arr[n])
            return n
        return helper(arr[n])
        
    }
    for(let [i, j] of edges){
        arr[j]=helper(i)
    }
    // console.log(arr)
    let res=[]
    for(let i=0;i<n;i++){
        if(arr[i]===i)
            res.push(i)
    }
    return res
};