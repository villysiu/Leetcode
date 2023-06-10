/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
var maxValue = function(n, index, maxSum) {
    function findSum(start, len){
        let sum=0
        if(len>=start)
            sum=start*(start+1)/2+(len-start)
        else{
            // sum=start*(start+1)/2-(start-len)*(start-len+1)/2
            //simplified to avoid number to big and cut off
            sum=(2*start*len+len-Math.pow(len,2))/2
            
        }
        return sum
    }
    let left=1, right=maxSum
    
    let leftArrLen=index, rightArrLen=n-index-1
   
    while(left<=right){
        
        let mid=parseInt((left+right)/2)
    
        let leftSum=findSum(mid-1, leftArrLen)
        let rightSum=findSum(mid-1, rightArrLen)
    
        let sum=leftSum+mid+rightSum
    //    console.log("sum: "+sum)
       if(sum===maxSum) return mid
        
        if(sum<=maxSum){
           left=mid+1
        }else
           right=mid-1
        
        // console.log(left, right)
    }
    return left-1
};