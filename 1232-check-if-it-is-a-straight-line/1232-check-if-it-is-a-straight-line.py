class Solution:
    def checkStraightLine(self, coordinates: List[List[int]]) -> bool:
        if len(coordinates)==2:
            return True
        n = len(coordinates) 
        point1=coordinates[0]
        point2=coordinates[1]
        def checkAllEqual(pos, val):
            for i in range(2, n):
                if coordinates[i][pos] != val:
                    return False
            return True
        
        def checkRatio(px,py, ratio):
            for i in range(2, n):
                
                qx,qy= coordinates[i] 
                print(px, py, qx,qy)
                if py-qy==0:
                    return False
                if (px-qx)/(py-qy) != ratio:
                    return False
            return True
        # veritcal line
        if point1[0] == point2[0]: 
            return checkAllEqual(0, point1[0])
        
        # horizontal line
        if point1[1] == point2[1]:
            return checkAllEqual(1, point1[1])
        

        slope = (point1[0]-point2[0])/(point1[1]-point2[1])
        return checkRatio(point1[0], point1[1], slope) 