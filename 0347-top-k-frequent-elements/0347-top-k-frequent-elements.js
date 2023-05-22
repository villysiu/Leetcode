/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map={}
    for(let n of nums){
        if(!map[n])
            map[n]=0
        map[n]+=1
    }
    let arr= Object.entries(map).sort((a,b)=>b[1]-a[1])
    // console.log(arr)
    res=[]
    for(let i=0;i<k;i++){
        res.push(parseInt(arr[i]))
    }
    return res
};