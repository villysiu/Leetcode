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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let found=false, res=true
    
    function helper(node){
        if(node===null)
            return 0
        
        let a=helper(node.left)
        let b=helper(node.right)
        
        if(found){
            return 
        }
        
        if(Math.abs(a-b)>=2){ 
            res=false
            found=true
            return
        
        }
        return Math.max(a,b)+1
    }
    helper(root)
    return res
};