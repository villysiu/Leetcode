/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    let res = 0
    let hash = new Set
    
    for(let num of arr1){
        while(num>=1){
            hash.add(num)
            num = parseInt(num/10)
        }
    }
    // console.log(hash)
    for(let n2 of arr2){
        let len = n2.toString().length
        while(n2>=1){
            if(hash.has(n2))
                res=Math.max(res, len)
            n2 = parseInt(n2/10)
            len--
        }
    }
    return res
};