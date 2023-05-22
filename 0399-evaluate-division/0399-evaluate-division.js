/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let n=equations.length
    function createMap(eqs, vals){
        let map=new Map()
        for(let i=0;i<n;i++){
            let [A,B]=eqs[i]
            if(!map.get(A))  map.set(A, [])
            if(!map.get(B))  map.set(B, [])
            map.get(A).push([A,B, vals[i]])
            map.get(B).push([A,B, vals[i]])
        }
        return map
    }
    
    
    function createLinkedDict(ch, dict, visited){
        visited.add(ch)
        for(let [A,B,val] of map.get(ch)){
            if(visited.has(`${A}~${B}`)) continue;
            if(!dict[A] && !dict[B]){
                dict[A]=val, dict[B]=1 
                createLinkedDict(A, dict, visited)
                createLinkedDict(B, dict, visited)
            }
            else if(!dict[A]){
                dict[A]=val*dict[B]
                createLinkedDict(A, dict, visited)
            }
            else if(!dict[B]){
                dict[B]=dict[A]/val
                createLinkedDict(B, dict, visited)
            }
            visited.add(`${A}~${B}`)  
        }
        return dict
    }
    
    // console.log(dicts)
    let map=createMap(equations, values)
    
    let dicts=[], visited=new Set()
    for(let ch of map.keys()){
        if(!visited.has(ch)){
            dicts.push(createLinkedDict(ch, {}, visited))
        }     
    }
    
    let res=[]
    for(let [C,D] of queries){
        let found=-1
        for(let dict of dicts){
            if(dict[C] && dict[D]){
                found=dict[C]/dict[D]
                break;
            }
        }
        res.push(found)
        
        
    }
    return res

};