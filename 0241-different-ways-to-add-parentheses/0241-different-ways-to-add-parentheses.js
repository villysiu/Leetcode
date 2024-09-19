/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    const regexp = /(\d{1,2})|([\+\-\*])/g
    const arr = expression.match(regexp);
    
    // console.log(arr); 
// "2-1-1*6+1"
    const helper = (arr) => {
        
        if(arr.length===1)
            return [parseInt(arr[0])]
        let res = []
        for(let i=0; i<arr.length; i++){
            
            if(arr[i]==="+" || arr[i]==="-" || arr[i]==="*"){
                let leftArr = helper(arr.slice(0, i)) 
                let rightArr = helper(arr.slice(i+1))
                // console.log(leftArr, rightArr)
                
                for(let m of leftArr){
                    for(let n of rightArr){
                        if(arr[i] === "+")
                            res.push(m+n)
                        else if(arr[i] === "-")
                            res.push(m-n)
                        else 
                            res.push(m*n)
                    }
                }
            }
            
        }
        // console.log(res)
        return res
    }
    
    return helper(arr)
    
    
};