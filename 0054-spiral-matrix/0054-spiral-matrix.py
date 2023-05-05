class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        res=[]
        def helper(x1,y1,x2,y2):
            # print(x1,y1,x2,y2)
            if(x1==x2):
                for c in range(y1, y2+1):
                    res.append(matrix[x1][c])

            elif(y1==y2):
                for r in range(x1, x2+1):
                    res.append(matrix[r][y1])

            else:
                for c in range(y1, y2):
                    res.append(matrix[x1][c])
                for r in range(x1, x2):
                    res.append(matrix[r][y2])
                for c in range(y2, y1, -1):
                    res.append(matrix[x2][c])
                for r in range(x2, x1, -1):
                    res.append(matrix[r][y1])

            # print(res)
    
        x1=0
        y1=0
        x2=len(matrix)-1
        y2=len(matrix[0])-1

        while x1<=x2 and y1<=y2 :
            helper(x1,y1,x2,y2)
            x1+=1
            y1+=1
            x2-=1
            y2-=1

        return res