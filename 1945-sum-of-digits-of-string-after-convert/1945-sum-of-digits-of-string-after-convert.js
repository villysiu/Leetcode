/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let str=""
    for(let i=0;i<s.length; i++){
        str += s.charCodeAt(i)-96; 
    }
    // console.log(str)
    
    let res =0
    for(let i=0;i<k; i++){
        res = 0
        for(let j=0; j< str.length; j++){
            res += parseInt(str[j])
        }
        str = res.toString()
        // console.log(res)
    }
    
    return res
};