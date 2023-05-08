/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let freq=new Array(26).fill(0)
    for(let c of tasks){
        let idx=c.charCodeAt(0)-65
        freq[idx]+=1
    }
    freq.sort((a,b)=>a-b)
    
    let maxFreq=freq[25]-1
    let idleSlots=maxFreq*n
    
    for(let i=24;i>=0;i--){
        idleSlots -= Math.min(maxFreq, freq[i])
    }
    return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
};