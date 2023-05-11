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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let count=0
    function helper(node){
        if(node===null){
            return []
        }
        let arr=[]
    
        for(let n of [...helper(node.left), ...helper(node.right)]){
            if((n+node.val)===targetSum)
                count++;
            arr.push(n+node.val)
        }
        
        if(node.val===targetSum) 
            count++;
        arr.push(node.val)
        
        return arr
    }
    
    
    helper(root)
    return count
};