/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let rarr=new Set(), darr=new Set()
    let ptr=0, next=senate.length
    for(let i=0;i<senate.length;i++){
        senate[i]==="R" ?  rarr.add(i) : darr.add(i)
    }
    // console.log(rarr, darr)
   
    while(rarr.size>0 && darr.size>0){
        
        let r=[...rarr][0], d=[...darr][0]
        if(r<d){
            rarr.delete(r)
            rarr.add(next++)
            // next++;
            darr.delete(d)
            
        }else{
            darr.delete(d)
            darr.add(next++)
            // next++
            rarr.delete(r)
        }
    }
    return rarr.size===0 ? "Dire" : "Radiant"
};