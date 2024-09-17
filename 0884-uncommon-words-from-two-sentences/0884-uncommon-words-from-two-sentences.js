/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let hash = {}
    for(let word of [...s1.split(" "),...s2.split(" ")]){
        if(!hash[word])
            hash[word] = 0
        hash[word] += 1
    }
    // console.log(hash)
    let res = []
    for (const [k,v] of Object.entries(hash)) {
        if(v===1)
            res.push(k)
    }
    return res
    
};