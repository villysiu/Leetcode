/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode()
    let sum = 0, carry = 0
    let p=res
    
    while(l1!==null || l2!==null) {
        let val1=0,val2=0
        if(l1){
            val1=l1.val
            l1 = l1.next
        }
        if(l2){
            val2=l2.val
            l2 = l2.next
        }
        sum = val1 + val2 + carry
        carry =  parseInt(sum/10)
        res.next = new ListNode(sum%10)
        res = res.next
    }
    if(carry)
        res.next = new ListNode(carry)
    return p.next
};