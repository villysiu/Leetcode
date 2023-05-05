class Solution:
    def isHappy(self, n: int) -> bool:

        existed=set()
        def helper(n, sum):
            while(n>=10):
                sum+=(n%10)**2
                n=n//10
                
                # print(n, sum)
                
            sum+=n**2
            # print(sum)
            
            if(sum in existed):
                return 0
            if(sum==1):
                return 1
            existed.add(sum)
            return helper(sum, 0)
        
        return helper(n, 0)
    
            