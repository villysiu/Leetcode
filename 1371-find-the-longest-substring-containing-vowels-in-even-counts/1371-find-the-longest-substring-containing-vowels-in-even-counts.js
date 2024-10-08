/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
    const n = s.length
    const kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];
    const vowelsMap = new Map([["a", 0], ["e", 1], ["i", 2], ["o", 3],["u", 4]])
    let prefixMap = new Map()
    
    let str = "00000"
    prefixMap.set(str, -1)
    let max =0
   
    for(let i=0; i<n; i++){
        let letter = s[i]
            
        if(vowelsMap.has(letter)){      
            let pos = vowelsMap.get(letter)
            str = str.slice(0,pos) + (str[pos] === "1"? "0" : "1") + str.slice(pos+1)

            }
        
        if(prefixMap.has(str)){
            max = Math.max(max, i-prefixMap.get(str))
        }
        else{
            prefixMap.set(str, i)
        }

        
    }
    // console.log(prefixObj)
    // console.log(max)
    return max
};