/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    let arr=Array.from({length: length}, (_,idx)=>[idx, 0])
    this.temp=new Map(arr)
    this.snaps=Array.from({length: length}, ()=>new Map())
    
    this.snapCount=-1
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.temp.set(index, val)
    
    
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.snapCount+=1
    for(const [idx, val] of this.temp){
        this.snaps[idx].set(this.snapCount, val)
    }
    this.temp=new Map()
    return this.snapCount
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    // console.log(index, this.snaps[index])
    function helper(keys, target){
        let l=0, r=keys.length-1
        
        while(l<=r){
            let m=parseInt((l+r)/2)
            if(target===keys[m])
                return m
            if(keys[m]<target)
                l=m+1
            else
                r=m-1
        }
        return r
    }
    if(this.snaps[index].has(snap_id)) 
        return this.snaps[index].get(snap_id)
    
    let keys=[...this.snaps[index].keys()]
    // console.log(snap_id>keys[keys.length-1])
    if(snap_id<keys[0]) 
        return 0
    
    if(snap_id>keys[keys.length-1]) 
        return this.snaps[index].get(keys[keys.length-1])
    
    let k = helper(keys, snap_id)
    return this.snaps[index].get(keys[k])
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */