/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    let mod=Math.pow(10,9)+7
    nums.sort((a,b)=>a-b)
    let res=0
    let power=[], val

    let i=0, j=nums.length-1
    while(i<=j){
       if((nums[i] + nums[j]) > target){
           j--
       }else{
           if(power.length===0){
                power=[1]
                for(let idx=1;idx<=j-i;idx++){
                  
                    power.push(power[idx-1]*2%mod)
                }
           }
           res = (res + power[j-i])%mod
           i++
       }
   }
    
    return res
};