class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
       
        def helper(left, right, row):
        # print(left, right, row)
            while left<=right:
                mid=floor((left+right)/2)
                if row[mid]>=0:
                    left=mid+1
                else:
                    right=mid-1
  
            return left

        idx=len(grid[0])
        count=0
        for row in range(0, len(grid)):

            idx=helper(0,idx-1, grid[row])
            count+=(len(grid[0])-idx)

        
        return count