/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {

    nums.sort((t1, t2)=>{
        if((t1+""+t2) > (t2+""+t1))
            return -1
        else 
            return 1
            
    })
    // console.log(nums)
    return nums[0]===0 ? "0" : nums.join("")
};