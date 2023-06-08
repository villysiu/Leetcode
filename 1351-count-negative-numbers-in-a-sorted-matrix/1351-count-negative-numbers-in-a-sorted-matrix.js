/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let m=grid.length
    let n=grid[0].length
    function helper(left, right, row){
        // console.log(left, right, row)
        while(left<=right){
            let mid=parseInt((left+right)/2)
            if(row[mid]>=0)
                left=mid+1
            else
                right=mid-1
        }
        return left
    }
    let idx=n
    let count=0
    for(let row=0;row<m;row++){
        
        idx=helper(0,idx-1, grid[row])
        count+=(n-idx)
        
    }
    return count
};