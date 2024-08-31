/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {}
    for(let i=0; i<nums.length; i++){
        
        let n = nums[i]
        
        if(!hash[n])
            hash[n] = []
        hash[n].push(i)
    }
    for(let i=0; i<nums.length; i++){
        let n = nums[i]
        if(target-n === n){
            if(hash[target - n].length===1)
                continue;
            
            return [i, hash[target - n][1]]
           
                
        }
        else if(hash[target - n])
            return [i, hash[target - n][0]]
    }
};