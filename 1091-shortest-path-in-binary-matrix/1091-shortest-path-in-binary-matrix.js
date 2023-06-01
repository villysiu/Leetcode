/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let n=grid.length
    if(grid[0][0]==1 || grid[n-1][n-1]==1) 
        return -1;
        
    let dirs=[[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]]
    
    grid[0][0]=1
    let queue=[[0,0]]
    while(queue.length>0){

        let [r,c]=queue.shift()
        for(let dir of dirs){
            R=r+dir[0]
            C=c+dir[1]

            if(R<0 || R===n || C<0 || C===n || grid[R][C]!==0) continue;
            grid[R][C]=grid[r][c]+1
            queue.push([R,C])
       }         
    }            
    return grid[n-1][n-1] == 0 ? -1 : grid[n-1][n-1] 
            
};