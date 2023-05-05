class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        idx=0
        count=0
        res=0
        vowels={"a","e","i","o","u"}
        while idx+k<=len(s):
            if(idx==0):
                for i in range(0, k):
                    if s[i] in vowels:
                        count+=1
                res=count
            
            else: 
#                 print(idx, idx+k)
            
#                 print("to be removed: " + s[idx-1])
#                 print("to be added: " + s[idx+k-1])
#                 print(s.slice(idx,idx+k))
                if s[idx-1] in vowels:
                    count-=1
                if s[idx+k-1] in vowels:
                    count+=1
            
            res=max(res, count)
            idx+=1
            # print("count: "+count)
        
    
        return res
        