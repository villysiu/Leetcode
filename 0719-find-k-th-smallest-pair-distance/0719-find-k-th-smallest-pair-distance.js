/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
  //  [1,1,1,3,5,8,11]
  // 1   0 0 2 4 7 10
  // 1     0 2 4 7 10
  // 1       2 4 7 10
  // 3.        2 5 8
  // 5           3 6
  // 8.            3
    let n = nums.length

    let res = new Array(Math.max(...nums)+1).fill(0)
    let map = new Array(Math.pow(10,6)+1).fill(0)
    
    let set = new Set()
    for(let num of nums){
        map[num]+=1
        set.add(num)
        
    }
    // console.log(map)
    let sorted = [...set]


    
    for(let r=0;r<sorted.length;r++){
        for(let c=r; c<sorted.length; c++){
            let count = 0, diff = 0
            
            if(sorted[r]===sorted[c]){
                count = (map[sorted[r]] * (map[sorted[r]]-1)) / 2
            }
            else{
                diff = Math.abs(sorted[r]-sorted[c])
                count = map[sorted[r]] * map[sorted[c]]
            }
      

            res[diff] += count
            
        }
    }
    
    // console.log(res)
    
    for(let key in res){
        if(res[key] === 0) continue;
        if(res[key] < k)
            k -= res[key]
        else
            return key
    }
    
                
};