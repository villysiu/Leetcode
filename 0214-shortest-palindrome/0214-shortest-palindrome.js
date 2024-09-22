/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    let pi = new Array(s.length).fill(0)
    let rev = s.split('').reverse().join("")
    let len = s.length
   
    // 0 1 2 3 4 5 6 7 
    // a a c e c a a a
    // a a a c e c a a
    for(let i=0; i<s.length; i++){
        // console.log(s.slice(0,len-i))
        // console.log(rev.slice(i,len))
        if(s.slice(0,len-i) === rev.slice(i,len)){
            // console.log(rev.slice(0,i))
            // console.log(rev.slice(0,i) + s)
            return rev.slice(0,i) + s
            
        }
            
    }
    return s
    
};