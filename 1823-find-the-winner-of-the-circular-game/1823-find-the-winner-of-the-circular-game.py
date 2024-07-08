class Solution:
    def findTheWinner(self, n: int, k: int) -> int:
        if k==1:
            return n
    
        arr = []

        for x in range(n):
            arr.append(x+1)
    
        while len(arr) >= k:
            arr = arr[k:] + arr[:k-1]
        # print(arr)
            
        while len(arr) > 1:
            d = k % len(arr)

            if d==0:
                arr = arr[:-1]
            else:
                arr = arr[d:] + arr[:d-1]

        

        return arr[0]