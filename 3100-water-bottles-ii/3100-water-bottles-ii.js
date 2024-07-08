/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    if(numBottles < numExchange)
        return numBottles
    if(numBottles === numExchange)
        return numBottles+1
    
    let res = numBottles
    while(numBottles >= numExchange){
        // let empty = numBottles - numExchange
        numBottles = numBottles - numExchange + 1
        res++
        numExchange++
        
    }
    return res
};