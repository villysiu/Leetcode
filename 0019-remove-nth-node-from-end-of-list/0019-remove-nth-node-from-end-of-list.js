/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let count=0, found=false
    function helper(node){
        if(node===null){
            count+=1
            return node
        }
        node.next = helper(node.next)
        if(found) 
            return node
        // console.log(node.val, count)
        if(count===n){
            found=true
            return node.next
        }
        count++;    
        return node
       
        
    }
    return helper(head)
};