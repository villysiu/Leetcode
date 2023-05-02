/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let res=1
    for(let n of nums){
        // console.log(n)
        if(n===0)
            return 0
        if(n<0)
            res*=-1
        
    }
    return res
};