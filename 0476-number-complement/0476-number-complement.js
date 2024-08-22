/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binaryNum = (num >>> 0).toString(2)
    // console.log(typeof binaryNum)
    let s=""
    for(let c of binaryNum){
        s += c==="1" ? "0" : "1"
    }
    // console.log(s)
    
    return parseInt(s, 2)
};