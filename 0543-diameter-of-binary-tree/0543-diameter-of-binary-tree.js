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
var diameterOfBinaryTree = function(root) {
    let res=0
    function helper(node){
        if(node===null) return 0
        let a=helper(node.left)
        let b=helper(node.right)
        
        res=Math.max(res, a+b)
        // console.log(node.val, a, b, res)
        return Math.max(a, b)+1
    }
    let p=helper(root.left) + helper(root.right)

    return Math.max(res,p)
};