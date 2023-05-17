/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let s=head
    let res=0
    let found=false
    function helper(node){
        if(node===null)
            return
        helper(node.next)
        if(found) return;
        if(node.next===s) {
            found=true
            return
        }
        // console.log(node.val)
        res=Math.max(res, node.val+s.val)
        
        s=s.next
    }
    helper(head)
    return res
};