/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function(n, edgeList, queries) {
    edgeList=edgeList.sort((a,b)=>a[2]-b[2])
    let keys=Array.from({length: queries.length}, (_, i)=>i)
    keys.sort((a,b)=>queries[a][2]-queries[b][2])
    
  
    let graph=Array.from({length: n}, (_, i)=>i)
    
    function find(node){
        if(graph[node] !== node) 
            return find(graph[node])
        
        return node
    }
    function union(node1, node2){
        let parent=find(node1)
        let child=find(node2)
        graph[child]=parent
        
    }
    let i=0
    let res=new Array(queries.length)
    for(let key of keys){
        let [u,v, limit]=queries[key]
        
        while(i<edgeList.length && edgeList[i][2]<limit){
            union(edgeList[i][0], edgeList[i][1])
            i++
        }

        res[key]=(find(u)===find(v))
    }       
    
    return res
};
