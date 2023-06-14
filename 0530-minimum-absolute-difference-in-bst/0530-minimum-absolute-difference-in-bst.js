/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let diff=Infinity
    let prev=Infinity
    function helper(node){
        if(!node) return
        helper(node.left)
        diff=Math.min(diff, Math.abs(prev-node.val))
        // console.log(node.val, prev, diff)
        prev = node.val
        helper(node.right)
        
        
        
    }
    helper(root)
    return diff
};