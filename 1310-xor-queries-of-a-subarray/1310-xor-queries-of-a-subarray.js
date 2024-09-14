/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    
    const helper = (num1, num2) =>{
        // let str1 = num1.toString(2)
        // let str2 = num2.toString(2)
//         let len = Math.max(str1.length, str2.length)
//         let s1 = str1.padStart(len, "0")
//         let s2 = str2.padStart(len, "0")
        
//         let str = ""
//         for(let i=0; i< len; i++)
//             str += s1[i] !== s2[i] ? "1" : "0"
          
//         // console.log(str)
//         return parseInt(str, 2)
        // console.log(str1 ^ str2)
        return num1^num2
    }
    let prev = 0
    let prefixSum = []
    for(let n of arr){
        let xorNum = helper(prev, n)
        prefixSum.push(xorNum)
        prev = xorNum
        
    }
    console.log(prefixSum)
    let res = []
    for(let [l, r] of queries){
        if(l===0)
            res.push(prefixSum[r])
        else
            res.push(helper(prefixSum[l-1], prefixSum[r]))
    }
    return res

};