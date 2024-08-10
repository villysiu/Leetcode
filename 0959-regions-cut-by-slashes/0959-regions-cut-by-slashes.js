/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
    let n = grid.length
    let map = Array.from({length: n*3}, ()=>new Array(n * 3).fill(0))
    
    for(let r=0;r<n; r++){
        for(let c=0;c<n;c++){
            if(grid[r][c]===" ")
                continue;
            if(grid[r][c]==="/"){
                
                map[r*3][c*3+2] = 1
                map[r*3+1][c*3+1] = 1
                map[r*3+2][c*3] = 1
            }
            else{ // grid[r][c] === "\\"
                map[r*3][c*3] = 1
                map[r*3+1][c*3+1] = 1
                map[r*3+2][c*3+2] = 1
            }  
        }
    }
    // console.log(map)
    let dirs = [[0,1], [1,0], [0,-1], [-1,0]]
    const helper = (r,c) =>{

        map[r][c] = "x"
        for(let [x, y] of dirs){
            // console.log(r,c, x,y)
            if(x+r<0 || x+r>=map.length || y+c<0 || y+c>=map.length || map[x+r][y+c]!==0)
                continue;
            helper(x+r, y+c)
        }
        return
    }
    let count = 0
    for(let r=0; r<map.length; r++){
        for(let c=0; c<map.length; c++){
            if(map[r][c]!==0)
                continue;
            count++
            helper(r,c)
        }
    }
    return count
                         
                         
};