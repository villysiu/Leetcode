/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    let n = nums.length
    let arr = Array.from({length: n}, ()=>new Map())
    let res=0
    for(let i=n-2;i>=0;i--){
        for(let j=n-1;j>i;j--){
            let diff = nums[i]-nums[j]
            let count = arr[j].has(diff) ? arr[j].get(diff)+1 : 2
            arr[i].set(diff, count)
            res=Math.max(res, count)
        }
    }
    // console.log(arr)
    return res
};