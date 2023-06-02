/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function(bombs) {
    
    function intersect(x1,y1,r1,x2,y2,r2){
        let x=Math.abs(x1-x2)
        let y=Math.abs(y1-y2)
        let i=Math.sqrt(x*x+y*y)
        
        return r1 >= i 
    }
    let graph=Array.from({length: bombs.length}, ()=>[])
    
    for(let i=0;i<bombs.length;i++){
        let [x1,y1,r1]=bombs[i]
        for(let j=0;j<bombs.length;j++){
            if(i===j) continue;
            let [x2,y2,r2]=bombs[j]
            
            if(intersect(x1,y1,r1,x2,y2,r2))
                graph[i].push(j)
        }
    }
    // console.log(graph)
     
   
   let res=1
   
    function helper(queue){    
        // console.log("new")
        // console.log(queue)
        // let count=1
        for(let idx of queue){
            for(let n of graph[idx])
                queue.add(n)
            // console.log(queue)
        }
        return queue.size
    }
    //[ [ 1, 2 ], [], [ 1, 3 ], [ 1, 2, 4 ], [ 2, 3 ] ]
    for(let i=0;i<graph.length;i++){
        if(graph[i].length===0) 
            continue;
        res=Math.max(res, helper(new Set([i])))

            
    }
    return res
    
    
};