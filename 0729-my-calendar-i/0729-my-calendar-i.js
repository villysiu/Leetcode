
var MyCalendar = function() {
    this.calendar = []
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    
    // if(this.calendar.length === 0){
    //     this.calendar.push([start, end])
    //     return true;
    // }
    for(let [s, e] of this.calendar){

//         console.log(e<= start)
//         console.log(end<=s)
        
       if(!(e<= start || end<=s))
           return false
    }
    this.calendar.push([start, end])
    return true
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */