/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    const count = rows * cols
    const dirs = [[0,1], [1,0], [0,-1], [-1,0]]
    let res = [[rStart, cStart]]
    let step = 0
    while(res.length < count){
        
        for(let i=0; i<dirs.length; i++){
            if(i === 2 || i===0) step++
            for(let s = 0; s < step; s++){
                
                let newR = rStart + dirs[i][0]
                let newC = cStart + dirs[i][1]
                
                rStart = newR
                cStart = newC
                if(newR < 0 || newR >= rows || newC < 0 || newC >= cols)
                    continue;

                res.push([newR, newC])
                
            }
            
            
        }
    }
    
    return res
};