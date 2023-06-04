class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        visited=set()
        count=0
        def helper(idx):
            visited.add(idx)
            for i in range(len(isConnected[idx])):
                if i==idx or isConnected[idx][i]==0 or i in visited:
                    continue;

                helper(i)
      
        for i in range(len(isConnected)):
            if i in visited:
                continue;
            count+=1
            helper(i)

        return count