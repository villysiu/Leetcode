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
        sum = (l1 ? l1.val: 0) + (l2 ? l2.val: 0) + carry
        carry =  parseInt(sum/10)
        res.next = new ListNode(sum%10)
        l1 = l1  ? l1.next : null
        l2 = l2 ? l2.next : null
        res = res.next
    }
    if(carry)
        res.next = new ListNode(carry)
    return p.next
};