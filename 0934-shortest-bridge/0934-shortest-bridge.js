/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
    let n=grid.length
    function findFirst(){
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                if(grid[i][j]===1)
                    return [i,j]
            }
        }
        return [null, null]
    }

    let dirs=[[0,1],[1,0],[-1,0],[0,-1]]
    let queue=[]
    function markIsland(r,c){
        for(let d of dirs){
            let R=d[0]+r, C=d[1]+c
            if(R<0 || C<0 || R===n || C===n) continue
            if(grid[R][C]===1){
                grid[R][C]=2
                queue.unshift([R,C])
                markIsland(R,C)
            }
        }
    }
    let [r,c] = findFirst()
    queue=[[r,c]]
    grid[r][c]=2
    markIsland(r,c)
    
    // console.log(queue)
    // console.log(grid)
    // let visited=new Set()
    let found=0
    
    function expand(){
        while(queue.length>0){
            let [r,c]=queue.shift()
            // visited.add(`${r}~${c}`)
            
            for(let d of dirs){
                let R=d[0]+r, C=d[1]+c
                if(R<0 || C<0 || R===n || C===n || grid[R][C]==="#") continue;
                if(grid[R][C]===1){    
                    return grid[r][c]
                }
                if(grid[R][C]<grid[r][c]){
                    grid[R][C]=grid[r][c]+1
                    queue.push([R,C])
                }
            }
            grid[r][c]="#"
        }
        return 0
    }
    return expand()-2
};