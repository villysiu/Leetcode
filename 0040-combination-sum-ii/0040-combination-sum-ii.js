/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let map = new Array(51).fill(0)

    for(let num of candidates){
        map[num]++
    }
    
    let results = []
    let set = new Set(candidates)
    //     14 13 10 9 6 5 2 1 1 1 1
    
    // console.log([...set].sort((a,b)=>b-a))
    const helper = (sum, arr) =>{
        // console.log(sum, arr)
        
        if(sum === target){
            results.push(arr)
            return
        }
        for(let i=target-sum; i>=1; i--){
           if(map[i]===0) 
                continue;
            if(i>arr[arr.length-1]) continue;
            map[i]--
            
           helper(sum+i, [...arr, i])
            map[i]++
       }
        return
    }
    
   for(let n of [...set].sort((a,b)=>b-a)){
       if(n>target) 
           continue;
       
       map[n]--
       helper( n, [n])
       map[n]++
       
       
   }
    return results

};