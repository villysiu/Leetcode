class Solution:
    def findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:
    
        arr = list(range(0,n))
        print (arr)
        
        def helper(n):
            if(n==arr[n]):
                return n
            return helper(arr[n])
            
        for i, j in edges:
            arr[j]=helper(i)
        # print (arr)
            
        # print (arr)
        res=[]
        for idx, x in enumerate(arr):
            if(x==idx):
                res.append(x)
                
        return res