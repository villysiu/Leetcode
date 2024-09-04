/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let hash_x = {} //all obstacles on x
    let hash_y = {} //all obstacles on y
    
    for(let [ob_x, ob_y] of obstacles){
        if(!hash_x[ob_x])
            hash_x[ob_x] = []
        hash_x[ob_x].push(ob_y)
        
        if(!hash_y[ob_y])
            hash_y[ob_y] = []
        hash_y[ob_y].push(ob_x)
    }
    let [x, y] = [0, 0]
    const dirs = [[0,1], [1,0], [0,-1],[-1,0]] 
    let i = 0
    let res = 0
    for(let c of commands){
        if(c === -1){
            i = i===3 ? 0 : i+1
        }
        else if(c===-2){
            i = i===0 ? 3 : i-1
        }
        else{
            // console.log(x, y , dirs[i],c)
            let temp_x = x + dirs[i][0] * c
            let temp_y = y + dirs[i][1] * c
            // console.log(temp_x, temp_y)
            if(i===0 && hash_x[temp_x]){ //go N 
                
                for(let r of hash_x[temp_x]){
                    if(r<y || r>temp_y) 
                        continue;
                    if(r<=temp_y && y!==r)
                        temp_y = r-1
                        
                        
                }
            }
            else if(i === 1 && hash_y[temp_y]){ //east
                for(let r of hash_y[temp_y]){
                    if(r<x || r>temp_x) 
                        continue;
                    if(r<=temp_x && x!==r)
                        temp_x = r-1
                }
            }
            else if(i===2 && hash_x[temp_x]){ //south
                for(let r of hash_x[temp_x]){
                    if(r>y || r<temp_y) 
                        continue;
                    if(r>=temp_y && y!==r)
                        temp_y = r+1
                        
                        
                }
            }
            else if(i===3 && hash_y[temp_y]){ //i===3 west
               
                for(let r of hash_y[temp_y]){
                
                    if(r>x ||r<temp_x) 
                        continue;
                   
                    if(r >= temp_x && x!==r)
                        temp_x = r+1
                    
                }
            }
            
            
            
            [x, y] = [temp_x, temp_y]

            res = Math.max(res, (x*x + y*y))
            // console.log([x,y])
        }
    }
    return res
};