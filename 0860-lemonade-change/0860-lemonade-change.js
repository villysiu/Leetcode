/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let billArr = new Array(3).fill(0) 
    // $5  $10. $20 
    // [0,  0,  0. ]
    
    for(let p of bills){
        if(p===5){
            billArr[0]++;
        }
        else if(p===10){
            if(billArr[0]>0){
                billArr[0]--
                billArr[1]++
            }
            else{
                return false
            }
        
        }
        else { // p===20
            if(billArr[0]>0 && billArr[1]>0){
                billArr[0]--
                billArr[1]--
                billArr[2]++
            }
            else if(billArr[0]>=3){
                billArr[0]-=3
                billArr[2]++
            }
            else
                return false
        }
    }
    return true
};