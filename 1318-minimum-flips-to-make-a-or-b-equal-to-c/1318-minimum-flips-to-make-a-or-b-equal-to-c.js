/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    a=a.toString(2)
    b=b.toString(2)
    c=c.toString(2).padStart(4, '0')
    let len=Math.max(a.length, b.length, c.length)
    a=a.padStart(len, '0')
    b=b.padStart(len, '0')
    c=c.padStart(len, '0')
    // console.log(a,b,c)
    let count=0
    for(let i=0;i<len;i++){
        if(c[i]==="0"){
            count+=(a[i]==="1")
            count+=(b[i]==="1")

        } else { //c[i]==="1"
            count+=((a[i]==="0" && b[i]==="0"))
        }
    }
    return count
};