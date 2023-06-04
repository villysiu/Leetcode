/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    let visited=new Set(),count=0
    function helper(idx){
        visited.add(idx)
        for(let i=0;i<isConnected[idx].length;i++){
            if(i===idx || isConnected[idx][i]===0 || visited.has(i)) continue;
            
            helper(i)
        }
    }
    for(let i=0;i<isConnected.length;i++){
        if(visited.has(i)) continue;
        count++
        helper(i)
        
    }
    return count
};