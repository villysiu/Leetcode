
var UndergroundSystem = function() {
    this.checkedIn=new Map();
    this.stationData=new Map();
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkedIn.set(id, [stationName, t])
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let [startStation, checkedInTime]=this.checkedIn.get(id)
    let travelTime=t-checkedInTime
    let stations=`${startStation}~${stationName}`
    
    if(this.stationData.has(stations)){
        let arr=this.stationData.get(stations)
        arr.push(travelTime)
    }
    else
        this.stationData.set(stations, [travelTime])
    
    this.checkedIn.delete(id)
    
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    let stations=`${startStation}~${endStation}`
    let arr=this.stationData.get(stations)
    let sum=arr.reduce((total, i)=>total+i,0)
    return sum/arr.length
    
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */