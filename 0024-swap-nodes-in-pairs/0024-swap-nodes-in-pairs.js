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
var swapPairs = function(head) {
    if(head===null || head.next===null) return head
    let p
    let m=head
    function helper(node, pos){
        if(node===null){
            p = (pos%2===0) ? pos-4 : pos-3
            return
        }
        helper(node.next, pos+1)
        if(pos!==p) return
        
        let temp=node.next
        
        node.next=node.next.next
        temp.next=node.next.next
        node.next.next=temp
        // console.log(m)
        
        p=p-2
        
        return
    }
    helper(head.next, 2)
    let q=head.next
    head.next=q.next
    q.next=head
    // console.log(q)
    return q
};