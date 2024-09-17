/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    s = "x" + s
    const n = s.length
    const vowelsObj = {a: 0, e: 1, i: 2, o: 3, u: 4}
    
    let prefixObj = {}
    let str = "00000"
    let max =0
    
    for(let i=0; i<n; i++){
        let letter = s[i]
            
        if(vowelsObj[letter]!==undefined){      
            let pos = vowelsObj[letter]
            str = str.slice(0,pos) + (str[pos] === "1"? "0" : "1") + str.slice(pos+1)
        }
        
        if(prefixObj[str] !== undefined){
            max = Math.max(max, i-prefixObj[str])
        }
        else{
            prefixObj[str] = i
        }

        
    }
    // console.log(prefixObj)
    // console.log(max)
    return max
};