/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if(coordinates.length===2) return true
    let point1=coordinates.shift()
    let point2=coordinates.shift()
    function checkAllEqual(pos, val){
        for(let c of coordinates){
            if(c[pos]!==val)
                return false
        }
        return true
    }
    function checkRatio(px,py, ratio){
        for(let [qx,qy] of coordinates){
            if((px-qx)/(py-qy)!==ratio)
                return false
        }
        return true
    }
    if(point1[0]===point2[0]){ //veritcal line
        return checkAllEqual(0, point1[0])
    }
    if(point1[1]===point2[1]){ //horizontal line
        return checkAllEqual(1, point1[1])
    }
   
    let ratio=(point1[0]-point2[0])/(point1[1]-point2[1])
    return checkRatio(...point1, ratio) 
    
};