/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if(target==="z") return letters[0]
    letters=[...new Set(letters)]
    
    let l=0
    let r=letters.length-1
    while(l<=r){
        let m=parseInt((l+r)/2)
        if(letters[m]===target)
            return m==letters.length-1 ? letters[0] : letters[m+1]
        
        if(letters[m]>target){
            r=m-1
        } else {
            l=l+1
        }
    }
    return l>=letters.length ? letters[0] : letters[l]
};