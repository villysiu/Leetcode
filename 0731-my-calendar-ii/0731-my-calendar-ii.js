
var MyCalendarTwo = function() {
    this.list = []
    this.overlap = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
    const findOverlap = (s1,e1, s2,e2)=>{
        return [Math.max(s1,s2), Math.min(e1, e2)]
    }
    let temp = []
    for(let [s,e] of this.list){
        
        if(end<=s || e<=start)
            continue;
        
        for(let [os, oe] of this.overlap){
           
            if(end<=os || oe<=start)
                continue;
            return false
        }   
        
        temp.push(findOverlap(s,e, start, end))
        
        
    }
    this.list.push([start, end])
    this.overlap = [...this.overlap, ...temp]
    // console.log(this.list)
    // console.log(this.overlap)
    return true
    
    
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */