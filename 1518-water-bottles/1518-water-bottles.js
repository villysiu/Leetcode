/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    if (numBottles < numExchange) return numBottles;
    let res = numBottles
    while(numBottles>=numExchange){
        let ex = parseInt(numBottles/numExchange)
        res+=ex
        
        let em = numBottles%numExchange
        numBottles = ex+em
    }
    return res
};