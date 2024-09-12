/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const set = new Set(allowed)
    // console.log(set.size)
    let count = 0
    
    const isSubset = (word, set) =>{
        for(const elem of word) {
            if (!set.has(elem)) {
              return false;
            }
          }
          return true;
    }
    for(let word of words){
        count += isSubset(word, set) 
    }
    return count;
};