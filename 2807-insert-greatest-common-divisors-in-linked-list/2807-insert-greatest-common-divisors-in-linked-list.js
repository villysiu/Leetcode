/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    
    const GCD = (a,b)=>{
        if(a % b === 0) 
            return b;
        
        return GCD(b, a % b)
        
    }
   // console.log(GCD(6,10))
    let p = head
    while(p.next){
        // console.log(p.val, p.next.val)
        let node = new ListNode(GCD(p.val, p.next.val), p.next)
        
        p.next = node
        p=p.next.next
        
    }
    return head
    
};