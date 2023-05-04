/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let rarr=[], darr=[]
    let next=senate.length
    for(let i=0;i<senate.length;i++){
        senate[i]==="R" ?  rarr.push(i) : darr.push(i)
    }
    // console.log(rarr, darr)
   
    while(rarr.length>0 && darr.length>0){
        // console.log(rarr, darr)
        let r=rarr[0], d=darr[0]
        if(r<d){
            rarr.shift()
            rarr.push(next++)
            // next++;
            darr.shift()
            
        }else{
            darr.shift()
            darr.push(next++)
            // next++
            rarr.shift()
        }
    }
    // console.log(rarr, darr)
    return rarr.length===0 ? "Dire" : "Radiant"
};