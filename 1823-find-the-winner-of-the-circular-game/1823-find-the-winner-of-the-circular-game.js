/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    
    // 20
    // 6
    // [ 9, 13, 16, 20, 1 ]
    // 9 13 16 20 1 
    // 9 13 16 20 1 
    // 13 16 20 1
    // 20 1 13 
    // 20 1 
    // 20
    
    //3
    // 1
    // [1,2,3]
    // 1 2 3
    // 2 3
    // 3
    if(k===1) return n
    
    let arr = []
    for(let i=1;i<=n;i++)
        arr.push(i)
    
    while(arr.length >= k ){
        arr=[...arr.slice(k), ...arr.slice(0,k-1)]
        
    }
    
    while(arr.length>1){
        let d = k%arr.length
        
        if(d===0)
            arr = arr.slice(0,-1)
        else
            arr=[...arr.slice(d), ...arr.slice(0,d-1)]
        
    }
    // console.log(arr)
    return arr[0]
};