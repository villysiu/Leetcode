/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const helper = (a, b, op)=>{
        let num1=parseInt(a), num2=parseInt(b)
        if(op==="+")
            return num1+num2
        else if(op==="-")
            return num1-num2
        else if(op==="*")
            return num1*num2
        else if(op==="/")
            return parseInt(num1/num2)
    }
    const numbers = new Set(['0','1','2','3','4','5','6','7','8','9'])
    const addminus_ops = new Set(['+', '-'])
    const multiplydivide_ops = new Set(['*', '/'])

    let stack = ['']
    for(let i=0;i<s.length;i++){
        if(s[i]===' ') continue;
        // console.log(s[i])
        if(numbers.has(s[i])){
            stack[stack.length-1] += s[i]
        }
        else if(addminus_ops.has(s[i])){
            while(stack.length>=3){
                let b=stack.pop()
                let op = stack.pop()
                let a=stack.pop()
                stack.push(helper(a, b, op))
            }
            
            stack.push(s[i])
            stack.push('')
        }
        else{ //if(multiplydivide_ops.has(s[i])){
            while(stack.length>=3 && multiplydivide_ops.has(stack[stack.length-2])){
                let b=stack.pop()
                let op = stack.pop()
                let a=stack.pop()
                stack.push(helper(a, b, op))
            }
            stack.push(s[i])
            stack.push('')
        }
        // console.log(stack)
    }
    while(stack.length>=3){
        let b=stack.pop()
        let op = stack.pop()
        let a=stack.pop()
        stack.push(helper(a, b, op))
    }
    return stack[0]
};