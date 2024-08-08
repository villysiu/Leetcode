/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {
   
    let count = rows * cols
    let matrix = Array.from({length:rows}, ()=>[])
    
    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++)
            matrix[r].push([r,c])
    }
    
    let width = Math.max(rStart, rows-1-rStart, cStart, cols-1-cStart)
    let newRStart = rStart
    let newCStart = cStart
    
    if(rows-1-rStart < width){
        for(let i=0; i<width-(rows-1-rStart); i++){
            let newRow = new Array(cols).fill(0)
            matrix.push(newRow)
        }
    }

    
    if(rStart < width){
        for(let i=0; i<width-rStart; i++){
            let newRow = new Array(cols).fill(0)
            matrix.unshift(newRow)
            newRStart++
        }
    }
    if(cols-1-cStart < width){
        for(let r=0; r<matrix.length; r++){
            matrix[r] = [...matrix[r], ...new Array(width-(cols-1-cStart) ).fill(0)]
        }
    }
    
    if(cStart < width){
        newCStart+=(width-cStart)
        for(let r=0; r<matrix.length; r++){
            matrix[r] = [...new Array(width-cStart).fill(0), ...matrix[r], ]
            
        }
    }
    // console.log(matrix)
    // console.log(newRStart, newCStart)
    let res = [[rStart, cStart]]

    let right =1, down=1, left=2, up = 2

    while(res.length<count){
        
        for(let c=newCStart+1;c<=newCStart+right && c<matrix[0].length; c++){
            // if(c >=matrix[0].length) break;
            if(matrix[newRStart][c]!==0)
                res.push(matrix[newRStart][c])
        }
        newCStart +=right
        if(newCStart >= matrix[0].length) break;
        
        for(let r=newRStart+1; r<=newRStart+down && r<matrix.length; r++){
            if(matrix[r][newCStart]!==0)
                res.push(matrix[r][newCStart])
        }
        newRStart += down
        if(newRStart >= matrix.length) break;
        
        for(let c=newCStart-1;c>=newCStart-left && c>=-1; c--){
            if(matrix[newRStart][c] !==0)
                res.push(matrix[newRStart][c])
        }
        newCStart -= left 
        if(newCStart < 0) break;
        
        for(let r=newRStart-1; r>=newRStart-up && r>=-1; r--){
            if(matrix[r][newCStart] !==0)
                res.push(matrix[r][newCStart])
        }
        newRStart -= up
        if(newRStart < 0) break;
        
        right+=2
        down+=2
        left+=2
        up+=2
        // console.log(newRStart, newCStart)
   
    }
    return res
    
};