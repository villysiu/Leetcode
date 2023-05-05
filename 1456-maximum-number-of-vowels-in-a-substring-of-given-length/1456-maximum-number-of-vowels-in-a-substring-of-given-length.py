class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        def isVowel(c):
            return 1 if c in {"a","e","i","o","u"} else 0
            
            
        idx=0
        count=0
        res=0
        
        while idx+k<=len(s):
            if(idx==0):
                for i in range(0, k):
                    count+= isVowel(s[i])
                        
                res=count
            
            else: 
                count-=isVowel(s[idx-1])
                count+=isVowel(s[idx+k-1])
                
            
            res=max(res, count)
            idx+=1
            # print("count: "+count)
        
    
        return res
        