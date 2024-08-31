/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {
    let dist = new Array(n).fill(0)
    dist[start_node] = 1
    
    for(let i=0; i<n; i++){
        let updated = false
        for(let j = 0; j<edges.length; j++){
            let [u, v] = edges[j]
            let prob = succProb[j]
            if(dist[u] * prob > dist[v]){
                dist[v] = dist[u] * prob
                updated = true
            }
            if(dist[v] * prob > dist[u]){
                dist[u] = dist[v] * prob
                updated = true
            }
        }
        if(!updated)
            break;
        
    }
    return dist[end_node]
};