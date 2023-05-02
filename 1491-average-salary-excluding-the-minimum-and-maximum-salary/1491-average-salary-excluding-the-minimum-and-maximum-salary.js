/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a,b)=>a-b)
    let count = salary.length
    let sum=0
    for(let i=1;i<count-1;i++){
        sum+=salary[i]
    }
    return sum/(count-2)
};