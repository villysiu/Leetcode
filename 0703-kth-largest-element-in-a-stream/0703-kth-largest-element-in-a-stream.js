/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.arr=nums.sort((a,b)=>a-b)
    this.k=k
    
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    function insert_value(arr){
        let l=0, r=arr.length-1
        while(l<=r){
            let m=parseInt((l+r)/2)
            if(arr[m]===val){
                return m

            }else if(arr[m]>val){
                r=m-1
            }else{
                l=m+1
            }

        }
        return l
    }
    pos = insert_value(this.arr)
    this.arr.splice(pos, 0, val)
    // console.log(this.arr)
    return this.arr[this.arr.length-this.k]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */