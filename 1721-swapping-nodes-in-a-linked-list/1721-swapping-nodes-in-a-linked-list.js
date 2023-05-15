/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let p=head
    
    function helper(node){
        if(node===null) return 0;
        
        count=1+helper(node.next)
        
        if(count===k){
            // console.log(node.val)
            // console.log(p.val)
            let temp=node.val
            node.val=p.val
            p.val=temp
            
        }
        p=p.next
        return count
    }
    helper(head)
    return head
};