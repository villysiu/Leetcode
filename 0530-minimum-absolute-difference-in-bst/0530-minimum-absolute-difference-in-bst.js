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
    let arr=[]
    function helper(node){
        if(node===null)
            return 
        helper(node.left)
        helper(node.right)
        arr.push(node.val)
    }
    helper(root)
    
    let min=Infinity
    arr.sort((a,b)=>a-b)
    for(let i=1;i<arr.length;i++){
        min=Math.min(min, arr[i]-arr[i-1])
    }
    return min
    
   
};