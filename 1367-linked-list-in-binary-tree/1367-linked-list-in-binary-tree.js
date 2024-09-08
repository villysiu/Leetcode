/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function(head, root) {
    
    function match(node, list){
        if(!list) return true
        if(!node || node.val!==list.val) return false
        return (match(node.left, list.next) || match(node.right, list.next))
    }
    function helper(node, list=head){
        if(!node) return false
        if(match(node, list)) return true
        return (helper(node.left) || helper(node.right))
    }
    return helper(root)
};