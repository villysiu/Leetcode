/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    // console.log(root.children)
    // console.log(root.children[1].children)
    // console.log(root)
    let res = []
    if(!root)
        return res
    
    const helper = node => {
        
        if(node.children.length === 0){
            return;
        }
        
        for(let c of node.children){
            helper(c)  
            res.push(c.val)
        }
        
    }
    helper(root)
    res.push(root.val)
    return res
};