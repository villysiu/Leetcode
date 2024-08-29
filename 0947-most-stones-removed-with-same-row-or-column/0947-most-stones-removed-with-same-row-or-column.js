/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    let count = 0
    let len = stones.length
    
    while(stones.length > 0){
        
        let queue = [stones.shift()]

            
        for(let [qr, qc] of queue){
            for(let i=stones.length-1; i>=0; i--){
                
                let [sr, sc] = stones[i]
                
                if( qr===sr || qc==sc){
                    queue.push(stones[i])
                    stones.splice(i,1)
                    
                }
            }
        }
        count++;
    }
    return len - count
};