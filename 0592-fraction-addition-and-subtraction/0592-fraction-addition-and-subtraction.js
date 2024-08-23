/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
    const gcdHelper = (a,b)=>{
        while(b!==0){
            let temp = b
            b = a % b
            a = temp
        }
        return a
    }
    let numerator = 0, denominator = 1
    
    const regex = /([+-]?\d+)\/(\d+)/g;
    let match = regex.exec(expression)

    while(match){
        // console.log(match)
        let n = parseInt(match[1])
        let d = parseInt(match[2])
        numerator = n*denominator + numerator * d
        denominator *= d
        // console.log(numerator, denominator)
       
        let gcd = gcdHelper(Math.abs(numerator), denominator)
        numerator /= gcd
        denominator /= gcd
        match = regex.exec(expression)
        
    }
    return numerator.toString() + "/" + denominator.toString()
    
};