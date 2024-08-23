/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
    const gcdHelper = (a, b) => {
        while(b !== 0){
            let temp = b
            b = a % b
            a = temp
        }
        return a
    }
    const lcmHelper = (a, b) => {
        return a * b / gcdHelper(a, b)
    }
    
    let numerator=""
    let denominator = ""
    let lcm = 1
    let dem = false
    let obj = {}
    
    for(let x of expression+"+"){
        
        if(x==="+" || x==="-"){
            if(denominator.length>0 && numerator.length>0 ){
               
                let n = parseInt(numerator)
                let d = parseInt(denominator)
                
                
                if(!obj[d])
                    obj[d] = 0
                obj[d] += n
                lcm = lcmHelper(lcm, d)
            }
            numerator = x==="-" ? "-" : ""
            denominator = ""
            dem = false

        }
        else if(x === "/"){
            dem = true
        }
        else{
 
            if(dem){
                denominator += x
            }
            else{
                numerator += x
            }
        }
        
    }
    // console.log(lcm)
    // console.log(obj)
    let sum = 0
    for(let [k, v] of Object.entries(obj)){
        sum+=(v * lcm / k)
    }
    // console.log(sum)
    
    let gg = gcdHelper(Math.abs(sum), lcm)
    
    let nn = (sum / gg).toString()
    let dd = (lcm / gg).toString()
    // console.log(nn, dd)
    return nn + "/" + dd
    
};


// 1000/25 + 3/266
// 40 + 3/266
// 10640/266 + 3/266

// (1000 * 266)/ (25*266) + (3*25)/(25*266)
// 266075 / 6650

