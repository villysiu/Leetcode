class Solution:
    def longestArithSeqLength(self, nums: List[int]) -> int:
        n = len(nums)
        arr = [{} for i in range(n)]
        res = 0
        for i in range(n-2, -1, -1):
            for j in range(n-1, i, -1):
                diff = nums[i]-nums[j]
                count = arr[j][diff]+1 if diff in arr[j] else 2
                arr[i][diff] = count
                res = max(res, count)
            
        
        # print(arr)
        return res