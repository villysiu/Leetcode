/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1=new Set(nums1)
    let set2=new Set(nums2)
   
    for(let n of set1){
        if(set2.has(n)){
            set1.delete(n)
            set2.delete(n)
        }
    }
    return [[...set1], [...set2]]
    
};