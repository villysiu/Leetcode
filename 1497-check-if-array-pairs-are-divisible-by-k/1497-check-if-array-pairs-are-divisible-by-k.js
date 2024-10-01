/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function(arr, k) {
    let n = arr.length


    let map = new Map()
    for(let i=0; i<k; i++){
        map.set(i, 0)
    }
    
    for(let i=0; i<n; i++){
        let f = ((arr[i] % k) +k) % k
        let d = (k-f) % k

        if(map.get(d)>0){
            map.set(d, map.get(d) - 1)
        }
        else{ //0
            map.set(f, map.get(f) + 1)  
        }
    }
    console.log(map)
    return [...map.values()].every(n=>n===0)
};