
var AllOne = function() {
    this.keyCount = new Map()
    this.countKeys = new Map()
    
    this.helper = (from, to, key) =>{

        if(to >= 1){
            if(!this.countKeys.has(to)){
                this.countKeys.set(to, new Set())
            }
            this.countKeys.get(to).add(key)
        }
        
        if(from >= 1){
            this.countKeys.get(from).delete(key)
            if(this.countKeys.get(from).size === 0)
                this.countKeys.delete(from)
        }
        
    }
};

/** 
 * @param {string} key
 * @return {void}
 */

AllOne.prototype.inc = function(key) {
    let count = (!this.keyCount.has(key)) ? 1 : this.keyCount.get(key)+1
    
    this.keyCount.set(key, count)
    this.helper(count-1, count, key)
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    let count = this.keyCount.get(key)
    
    if(count===1){
        this.keyCount.delete(key)
    }
    else{
        this.keyCount.set(key, count-1)
    }
    this.helper(count, count-1, key)
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    // console.log(this.countKeys)
    if(this.countKeys.size === 0)
        return ""
    let max = Math.max(...this.countKeys.keys())
    return [...this.countKeys.get(max)][0]
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    // console.log(this.countKeys)
    if(this.countKeys.size === 0)
        return ""
    let min = Math.min(...this.countKeys.keys())
    return [...this.countKeys.get(min)][0]
};

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */