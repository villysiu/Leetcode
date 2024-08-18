/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let list = [1]
    let twos =[] 
    let threes = [] 
    let fives = [] 
    
    

    while(list.length<n){
         
        twos.push(list[list.length-1]*2)
        threes.push(list[list.length-1]*3)
        fives.push(list[list.length-1]*5)
        // console.log(list)
        // console.log(twos)
        // console.log(threes)
        // console.log(fives)
        while(twos[0]<=list[list.length-1]){
            twos.shift()
        }
        while(threes[0]<=list[list.length-1]){
            threes.shift()
        }
        while(fives[0]<=list[list.length-1]){
            fives.shift()
        }
        // console.log(twos[0], threes[0], fives[0])
        if(twos[0]<=threes[0] && twos[0]<=fives[0]){
            list.push(twos[0])
            
        }
        else if(threes[0]<=twos[0] && threes[0]<=fives[0]){
            list.push(threes[0])
            
        }
        else if(fives[0]<=twos[0] && fives[0]<=threes[0]){
            list.push(fives[0])
           
        }
        
    }
    return list[list.length-1]
};