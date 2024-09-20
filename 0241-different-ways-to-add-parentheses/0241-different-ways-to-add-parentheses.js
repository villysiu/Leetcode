/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    let temp = {}
    const helper = (exp) => {
       if(temp[exp]) 
           return temp[exp]
        let res = []
        
        for(let i=0; i<exp.length; i++){
        
            if(exp[i]==="+" || exp[i]==="-" || exp[i]==="*"){
                let op = exp[i]
                let leftArr = helper(exp.slice(0, i)) 
                let rightArr = helper(exp.slice(i+1))
                // console.log(leftArr, rightArr)
                
                for(let m of leftArr){
                    for(let n of rightArr){
                        if(op === "+")
                            res.push(m+n)
                        else if(op === "-")
                            res.push(m-n)
                        else 
                            res.push(m*n)
                    }
                }
            }
            
        }
        // console.log(res)
        if(res.length===0)
            res.push(parseInt(exp))
        
        temp[exp] = res 
        return res
    }
    
    return helper(expression)
    
    
};