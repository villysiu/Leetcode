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
    const isMatch = (tNode, lNode) =>{
        if(!lNode)
            return true
        if(!tNode)
            return false
        
        if(tNode.val === lNode.val){
            // console.log(tNode.val, lNode.val)
            return (isMatch(tNode.left, lNode.next) || isMatch(tNode.right, lNode.next))
        }
        return false
    }
    const helper = tree =>{
        if(!tree) 
            return false
      
        if(isMatch(tree, head) )
            return true
        
        return helper(tree.left) || helper(tree.right)
        
    }
    return helper(root)
};