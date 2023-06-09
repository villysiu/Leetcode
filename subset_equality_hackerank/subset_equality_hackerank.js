function subset_equality(str){
    let map=new Map()
    let sum=0
    for(let i=0;i<str.length;i++){
        sum+=parseInt(str[i])
        map.set(sum, i)
    }
    
    let results = []
    
    for(let i=1;i<=sum;i++){
        
        if(sum%i!==0) continue;
        let divisor=sum/i  
        
        let ptr=0
        let res=""
        for(let j=divisor; j<=sum; j=j+divisor){
            if(!map.has(j)) {
                res=""
                break;
            }
            if(j===sum)
                res+=str.slice(ptr)
            else{
                res+=str.slice(ptr, map.get(j)+1)+"_"
                ptr=map.get(j)+1
            }
        }
        
        if(res.length>0)
            results.unshift(res)

        
    }
    // console.log(results)
    return results


}
console.log(subset_equality('1111'))
console.log(subset_equality('1741380'))