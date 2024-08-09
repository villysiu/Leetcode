/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let rows = grid.length
    let cols = grid[0].length
    
    if(rows <3 || cols<3) return 0
    let rowSum = new Array(rows)
    let colSum = new Array(rows)
   
    for(let r=0; r<rows; r++){
        rowSum[r] = [grid[r][0]]
        colSum[r] = []
        for(let c=0; c<cols; c++){
            
            if(r===0){
                colSum[r].push(grid[0][c])
            }
            else{
                colSum[r].push(grid[r][c]+colSum[r-1][c])
            }
            
            if(c > 0)
                rowSum[r].push(rowSum[r][c-1] + grid[r][c])
            
            
        }
    }
    // console.log(rowSum)
    // console.log(colSum)
    
    const check= (r1, c1) =>{
        let set = new Set()
        for(let r=r1; r<r1+3; r++){
            for(let c=c1; c<c1+3; c++){
                if(set.has(grid[r][c]) || 
                  grid[r][c]>9 || grid[r][c] <=0  ) 
                return 0
            else
                set.add(grid[r][c])
            }
        }
        
        
        let sum = rowSum[r1][c1+2] - (c1===0 ? 0 : rowSum[r1][c1-1] )

        for(let row = r1+1; row<r1+3; row++){
            if(rowSum[row][c1+2] - (c1===0 ? 0: rowSum[row][c1-1]) !== sum)
                return 0
        }
        
        for(let col=c1; col<c1+3; col++){
            if(colSum[r1+2][col] - (r1===0 ? 0 : colSum[r1-1][col]) !== sum)
                return 0
        }
        if(grid[r1][c1] + grid[r1+1][c1+1] + grid[r1+2][c1+2] !== sum)
            return 0
        
        if(grid[r1][c1+2] + grid[r1+1][c1+1] + grid[r1+2][c1] !== sum)
            return 0    
        
        return 1
       
    }
    let res = 0
    for(let r=0; r<=rows-3; r++){
        for(let c=0; c<=cols-3; c++){
             res += check(r,c)
        }
    }
    return res
};