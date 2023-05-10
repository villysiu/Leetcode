# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.res=0
        def helper(node):
            if(node==None):
                return 0
            a=helper(node.left)
            b=helper(node.right)

            self.res=max(self.res, a+b)

            return max(a, b)+1
        
        p=helper(root.left) + helper(root.right)

        return max(self.res,p)