/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    
    rotated = grid[0].map((val, index) => grid.map(row => row[row.length-1-index]));
    // console.log(rotated)
    let res=0
    let map=new Map()
    for(let r of grid){
        let str = JSON.stringify(r)
        if(!map.has(str)){
            map.set(str, 0)
        }
        map.set(str, map.get(str)+1)

    }
    for(let r of rotated){
        let str = JSON.stringify(r)
        if(map.has(str))
            res+=map.get(str)
            
    }
    return res
};