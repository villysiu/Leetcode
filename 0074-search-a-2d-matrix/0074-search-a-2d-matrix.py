import numpy
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        r=len(matrix)
        c=len(matrix[0])
        def helper(a,b, arr, target):
            while(a<=b):
                m=floor((a+b)/2)
                #  print("a: "+a+", b: "+b+", m: "+m)
                if(arr[m]==target):
                    return m
            
                if(target<arr[m]):
                    b=m-1
                else:
                    a=m+1
        
            return a
        
        rotated=numpy.rot90(matrix)
        # print(rotated[0])
        
        row=helper(0, r-1, rotated[0], target)
       
        if(row>=r or row<0):
            return False
        
        col=helper(0,c-1, matrix[row], target)
        if(col>=c or col<0):
            return False  
        
        if(matrix[row][col]==target):
            return True 
        else:
            return False