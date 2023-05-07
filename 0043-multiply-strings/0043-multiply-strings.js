/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1.length == 0 || num2.length == 0 || num1==="0" || num2==="0") {
        return "0";
    }
    if (num1==="1") {
        return num2;
    }
    if (num2==="1") {
        return num1;
    }

    let arr=new Array(num1.length+num2.length).fill(0)
    
    function helper(a,b){
        // console.log(num1[a] + " * "+ num2[b])
        prod=(num1[a].charAt(0)-'0') * (num2[b].charAt(0)-'0')
        let idx=a+b+1
        
        while(prod>0){
            prod+=arr[idx]
            arr[idx]=prod%10
            
            prod=parseInt(prod/10)
            idx--
        }
        // console.log(arr)
    }
    for(let i=num1.length-1;i>=0;i--){
        for(let j=num2.length-1;j>=0;j--){
            helper(i, j)
        }
    }
    
    let res=arr.join("")

    return res.replace(/^0*/, '')
};