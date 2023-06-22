class Solution:
    def maxProfit(self, prices: List[int], fee: int) -> int:
        n = len(prices)
        buy = [float('-inf') for i in range(n)]
        buy[0]=-prices[0]
        sell = [0 for i in range(n)]

        for i in range(1, n):
            buy[i] = max(buy[i-1], sell[i-1]-prices[i])
            sell[i] = max(sell[i-1], prices[i]+buy[i-1]-fee)
            
        # print(buy)
        # print(sell)
        
        return sell[n-1]