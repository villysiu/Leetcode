/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let idx=0
    let count=0
    let max=0
    let vowels=new Set(["a","e","i","o","u"])
    while(idx+k<=s.length){
        if(idx===0){
            for(let i=0;i<k;i++)
                if(vowels.has(s[i]))
                    count++;
            max=count
        }
        else{
//             console.log(idx, idx+k)
            
//             console.log("to be removed: " + s[idx-1])
//             console.log("to be added: " + s[idx+k-1])
//             console.log(s.slice(idx,idx+k))
            if(vowels.has(s[idx-1])) 
                count--
            if(vowels.has(s[idx+k-1]))
                count++
            
            max=Math.max(max, count)
        }
        
        // console.log("count: "+count)
        idx++
    }
    return max
};