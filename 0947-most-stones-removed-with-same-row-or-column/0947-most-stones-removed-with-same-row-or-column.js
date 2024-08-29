/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    let rowHash = {}
    let colHash = {}
    for(let [r,c] of stones){
        if(!rowHash[r])
            rowHash[r] = []
        if(!colHash[c])
            colHash[c] = []
        rowHash[r].push(c)
        colHash[c].push(r)
        
    }

    
    let visited = new Set()
    let res = 0
    const helper = (row, col) =>{
        
    
        const colHelper = col => {
            for(let r of colHash[col]){
                if(visited.has(`${r}~${col}`))
                    continue;
                visited.add(`${r}~${col}`)
                
                rowHelper(r)
            }
        }
        
        const rowHelper= (row) =>{
            for(let c of rowHash[row]){
                if(visited.has(`${row}~${c}`))
                    continue;
                visited.add(`${row}~${c}`)
                
                colHelper(c)
            }
        }
        rowHelper(row)
        colHelper(col)
        
        
    }
    for(let [r,c] of stones){
        if(visited.has(`${r}~${c}`))
            continue;
        
         helper(r,c)
        res+=1
    }
    return stones.length - res
};