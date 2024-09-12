/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const set = new Set(allowed)
    let count = words.length;
    for(let word of words){
        for(let i=0; i<word.length; i++){
            if(!set.has(word[i])){
                count--;
                break;
            }
        }
        
    }
    return count;
};