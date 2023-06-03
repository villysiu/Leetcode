/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    function helper(idx){
        if(manager[idx]!==-1){
            informTime[idx]+=helper(manager[idx])
            manager[idx]=-1
        }
        return informTime[idx]
    }
    for(let i=0;i<manager.length;i++){
        helper(i)
    }
    return Math.max(...informTime)
};