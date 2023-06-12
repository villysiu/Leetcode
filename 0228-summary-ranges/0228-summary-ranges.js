/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    nums.push(Infinity)
    let res=[]
    let prev=nums[0]
    for(let i=1;i<nums.length;i++){
        if(nums[i]-nums[i-1]===1){
            continue;
        }
        if(prev===nums[i-1])
            res.push(`${prev}`)
        else{
            res.push(`${prev}->${nums[i-1]}`)
            
        }
        prev=nums[i]
    }
    return res
};