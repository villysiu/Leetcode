/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    let map=new Map()
    let count=0
    for(let w of words){
        if(map.has(w[1]+w[0])){
            let v=map.get(w[1]+w[0])-1
            count+=4
            if(v===0)
                map.delete(w[1]+w[0])
            else
                map.set(w[1]+w[0], v)
        }else{
            let v = map.has(w[0]+w[1]) ? map.get(w[0]+w[1])+1 : 1
            map.set(w[0]+w[1], v)
        }
        // console.log(map)
    }
   
    for(let w of map.keys()){
        if(w[0]===w[1]){
            return count+2
        }
    }
    return count
};