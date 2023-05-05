/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
        let existed=new Set()
        function helper(n, sum){
            while(n>=10){
                sum+=Math.pow((n%10),2)
                n=Math.floor(n/10)
                
                // console.log(n, sum)
            }    
            sum+=Math.pow(n, 2)
            // console.log(sum)
            
            if(existed.has(sum)) return 0
            if(sum===1) return 1
            
            existed.add(sum)
            return helper(sum, 0)
        }
        return helper(n, 0)
    
            
};