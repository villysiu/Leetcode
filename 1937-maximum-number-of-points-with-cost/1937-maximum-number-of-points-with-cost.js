/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let m = points.length
    let n = points[0].length
    
    for(let r=1; r<m; r++){
        
        let temp = new Array(n)
        for(let c=0, max = 0; c<n; c++){
            max = Math.max(max-1, points[r-1][c])
            temp[c] = max 
            
        }
        // console.log(temp)
        for(let c=n-1, max=0; c>=0; c--){
            max = Math.max(max-1, temp[c], points[r-1][c])
            points[r][c] += max
        }
    }
    // console.log(points)
    return Math.max(...points[m-1])
};