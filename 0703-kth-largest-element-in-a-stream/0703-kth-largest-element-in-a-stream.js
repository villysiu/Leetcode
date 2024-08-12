/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    // 8, 5,4,2  [3], [5], [10], [9], [4]
    // 10, 9 8, 5,5 4 3 ,2
    this.sortedArr = nums.sort((a,b)=>b-a).slice(0,k)
    this.k = k
    
    
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    // this.sortedArr = [...this.sortedArr, val].sort((a,b)=>b-a)

    if(val < this.sortedArr[this.k-1])
        return this.sortedArr[this.k-1]
    
    let l = 0, r=this.k-1
    while(l<=r){
        
        let mid = parseInt((l+r)/2)
        // console.log(l, r, mid)
        if(val === this.sortedArr[mid]){
            this.sortedArr.splice(mid, 0, val)
            // this.sortedArr = [...this.sortedArr.slice(0,mid), val, ...this.sortedArr.slice(mid, this.k-1)]
            break;
        }else if(val < this.sortedArr[mid]){
            l=mid+1
            
            
        }else{
            r=mid-1
        
        }
    }
    // 0 1 2 3 4 5 6 7
    // 8 5 4
    
    // 0 2 1
    // 2 2 2
    // 3 2
    // 
    
    if(l>r){
        // console.log(this.sortedArr.slice(0,l))
        // console.log(this.sortedArr.slice(l, this.k-1))
        this.sortedArr.splice(l, 0, val)
        // this.sortedArr = [...this.sortedArr.slice(0,l), val, ...this.sortedArr.slice(l, this.k-1)]
    }
    // console.log("end")
    // console.log(this.sortedArr)
    
    
    return this.sortedArr[this.k-1]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */