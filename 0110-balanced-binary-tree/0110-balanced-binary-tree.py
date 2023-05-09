# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        self.found = 0
        self.res=True
        py = "global variables"
    
        def helper(node):
            
            
            if(node==None):  return 0
        
            a, b =helper(node.left), helper(node.right)
        
            if(self.found): 
                return 
        
        
            if(abs(a-b)>=2):
                self.res=0
                self.found=1
                return 
        
       
            return max(a,b)+1
   
        helper(root)
        return self.res