/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function(grid) {
    let res=[]
    let map=new Map()
    for(let col=0;col<grid[0].length;col++){
        let r=0;
        let c=col;
        let path=new Set()
        
        
        while(r<grid.length){
            // console.log(r, c)
            if(map.has(JSON.stringify([r,c]))){
                res.push(map.get(JSON.stringify([r,c])))
            }    
            if(grid[r][c]===1 && (c+1)<grid[r].length && grid[r][c+1]===1){
                
                r++;
                c++;
                // path.add(grid[r][c])
            }
            else if(grid[r][c]===-1 && (c-1)>=0 && grid[r][c-1]===-1){
                r++;
                c--;
                // path.add(grid[r][c])
            }
            
            else{ //grid[r][c+1]===-1
                res.push(-1)
                for([i,j] of path)
                    map.set(JSON.stringify([i,j]), -1)
                break;
            }
 
        }      
        // console.log("bootom: "+r+"  "+c)
        if(r===grid.length){ 
            res.push(c)
            for([i,j] of path)
                map.set(JSON.stringify([i,j]), c)
        }
        
    }
    return res
    
};