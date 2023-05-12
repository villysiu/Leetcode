/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
    function findRow(a,b,d,target){  
        while(a<=b){
            let m=parseInt((a+b)/2)
            // console.log("a: "+a+", b: "+b+", m: "+m)
            if(matrix[m][d]===target) return m
            
            target<matrix[m][d] ? b=m-1 : a=m+1
        }
        return a
    } 
    function findCol(a,b,d,target){  
        while(a<=b){
            let m=parseInt((a+b)/2)
            // console.log("a: "+a+", b: "+b+", m: "+m)
            if(matrix[d][m]===target) return m
            
            target<matrix[d][m] ? b=m-1 : a=m+1
        }
        return a
    } 
    
    let row=findRow(0, matrix.length-1,matrix[0].length-1,target)
    if(row>=matrix.length || row<0) 
        return false
    
    let col=findCol(0,matrix[0].length-1, row, target)
    if(col>=matrix[0].length || col<0) 
        return false
    
    return matrix[row][col]===target
    
};