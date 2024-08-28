/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
    let m = grid1.length, n=grid1[0].length
   
    
    let dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    let res
    const isSubisland = (r, c, grid) => {
        // console.log(r,c, res)
        grid[r][c]="X"
        for(let [R, C] of dirs){
            
            if(r+R<0 || r+R >= m || c+C <0 || c+ C>=n || grid[r+R][c+C]===0 || grid[r+R][c+C]==="X")
                continue;
            if(grid[r+R][c+C]===1){
                res = 0
                
            }
            
            isSubisland(r+R, c+C, grid, res)
        }
        return res
    }

    for(let r=0; r<m; r++){
        for(let c=0; c<n; c++){
            if(grid1[r][c] === 1 && grid2[r][c] === 1){
                grid2[r][c] = 2
            }
            
        }
    }
    // console.log(grid2)
    let ans = 0
    for(let r=0; r<m; r++){
        for(let c=0; c<n; c++){
            if(grid2[r][c]===2){
                
                res = 1
                ans += isSubisland(r, c, grid2)
                
            }
        }
    }

    // console.log(grid2)
    return ans
    
};