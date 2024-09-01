/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr=[]
    for(let i=0; i<nums.length; i++){
        arr.push([nums[i], i])
    }
    arr.sort((a, b)=>{
        return a[0]-b[0]
    })
    // console.log(arr)
    
    for(let i=0; i<arr.length; i++){
        let [val, orid_idx] = arr[i]
        let diff = target - val
        
        let l = i+1, r = arr.length-1
        while(l<=r){
            let m = parseInt((l+r)/2)
            if(arr[m][0] === diff){
                return [arr[i][1], arr[m][1]]
            }
            else if(arr[m][0] > diff){
                r = m - 1
            }
            else
                l = m + 1
        }
    }
};