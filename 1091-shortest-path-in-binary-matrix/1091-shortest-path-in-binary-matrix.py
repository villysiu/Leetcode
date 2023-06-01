class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        n=len(grid)
        if grid[0][0]==1 or grid[n-1][n-1]==1:
            return -1
        
        
    
        dirs=[(-1,0),(-1,1),(0,1),(1,1),(1,0),(1,-1),(0,-1),(-1,-1)]
        grid[0][0]=1
        queue=[(0,0)]
        while len(queue)>0:
            
            r,c=queue.pop()
            for dir in dirs :
                
                R=r+dir[0]
                C=c+dir[1]
                
                if R<0 or R==n or C<0 or C==n or grid[R][C]!=0: 
                    continue;
                grid[R][C]=grid[r][c]+1
                queue.insert(0,(R,C))
                
                
        return grid[n-1][n-1] if grid[n-1][n-1] != 0 else -1
            
            