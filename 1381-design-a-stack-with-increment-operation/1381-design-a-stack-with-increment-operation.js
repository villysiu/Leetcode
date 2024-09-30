/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.stack = []
    this.maxSize = maxSize
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    // console.log(this.stack.length < this.maxSize){
    if(this.stack.length < this.maxSize){
        this.stack.push(x)
    }
    // console.log(this.stack)
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    // console.log(this.stack)
    if(this.stack.length === 0)
        return -1
    return this.stack.pop()
    
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    let count = this.stack.length < k ? this.stack.length : k
    for(let i = 0; i<count; i++){
        this.stack[i]+=val
    }
    
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */