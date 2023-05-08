/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let left=head
    let res
    let exit=false
    function helper(right){
        if(right===null) {
            return false
        }
       
        if(helper(right.next)){
            return true
        }
        if(right.val!==left.val){
            res=false
            return true
        }
        if(right.next===left || left===right){
            res=true
            return true
        }
        
        left=left.next

    }
    helper(head)
    return res
    
    
};