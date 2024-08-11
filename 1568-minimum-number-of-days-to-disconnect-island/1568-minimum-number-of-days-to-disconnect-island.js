/**
 * @param {number[][]} grid
 * @return {number}
 */
var minDays = function(grid) {
    
    const countIsland = () =>{
        let dirs = [[0,1], [1,0], [0,-1], [-1,0]]
        let count = 0
        let mod = []
        const helper = (r,c) =>{

            grid[r][c] = "x"
            mod.push([r,c])
            for(let [x, y] of dirs){
                if(x+r<0 || x+r>=grid.length || y+c<0 || y+c>=grid[0].length || grid[x+r][y+c]!==1)
                    continue;
                helper(x+r, y+c)
            }
            return 
        }
        
        for(let r=0; r<grid.length; r++){
            for(let c=0; c<grid[0].length; c++){
                
                
                if(grid[r][c]!==1)
                    continue;
                 helper(r, c)
                
                count++
                
            }
        }
        
        for(let [rr,cc] of mod)
            grid[rr][cc] = 1
            
        return count
    }

    if(countIsland() !== 1) {
        return 0
    }
    for(let r=0; r<grid.length; r++){
        for(let c=0; c<grid[0].length; c++){
            if(grid[r][c]===0)
                continue;
            grid[r][c] = 0
            if(countIsland()!==1)
                return 1
            grid[r][c] = 1
            
        }
    }
    return 2
};