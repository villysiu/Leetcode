
var AllOne = function() {
    this.keyCount = new Map()
    this.countKeys = new Map()
};

/** 
 * @param {string} key
 * @return {void}
 */

AllOne.prototype.inc = function(key) {
    let count = (!this.keyCount.has(key)) ? 1 : this.keyCount.get(key)+1
    
    this.keyCount.set(key, count)
    
    if(!this.countKeys.has(count)){
        this.countKeys.set(count, new Set())
        
    }
    this.countKeys.get(count).add(key)
    if(count > 1){
        this.countKeys.get(count-1).delete(key)
        if(this.countKeys.get(count-1).size === 0){
            this.countKeys.delete(count-1)
        }
    }
        
    

};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    let count = this.keyCount.get(key)
    if(count===1){
        this.keyCount.delete(key)
        this.countKeys.get(1).delete(key)
        if(this.countKeys.get(1).size===0)
            this.countKeys.delete(1)
    }
    else{
        this.keyCount.set(key, count-1)
        this.countKeys.get(count).delete(key)
        if(this.countKeys.get(count).size === 0)
            this.countKeys.delete(count)
        if(!this.countKeys.has(count-1))
            this.countKeys.set(count-1, new Set())
        this.countKeys.get(count-1).add(key)
    }
        
    
    
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    // console.log(this.countKeys)
    if(this.countKeys.size === 0)
        return ""
    let max = Math.max(...this.countKeys.keys())
    // console.log(max)
    // console.log([...this.countKeys.get(max)])
    return [...this.countKeys.get(max)][0]
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    if(this.countKeys.size === 0)
        return ""
    let min = Math.min(...this.countKeys.keys())
    // console.log(min)
    // console.log([...this.countKeys.get(min)])
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