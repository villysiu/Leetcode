/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    let n=nums1.length

    //sort num2 array and display in index 
    let sortedIndex=[...nums2.keys()].sort((a,b)=>nums2[b]-nums2[a])
    // console.log(sortedIndex) 
    let mpq = new MinPriorityQueue();
    let sum=0
    let multiplier=1
    
    for(let i=0;i<k;i++){
        let idx=sortedIndex[i]
        mpq.enqueue(nums1[idx])
        sum+=nums1[idx]
        multiplier=nums2[idx]
    }
    let res=sum*multiplier

    for(let i=k;i<n;i++){
        let idx=sortedIndex[i]
        if(mpq.front().element<nums1[idx]){
            sum-=mpq.dequeue().element
           
            mpq.enqueue(nums1[idx])
            sum+=nums1[idx]
            multiplier=nums2[idx]
            
            res=Math.max(res, sum*multiplier)
        }
    }
    return res
    
    


};