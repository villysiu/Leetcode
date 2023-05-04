class Solution:
    def predictPartyVictory(self, senate: str) -> str:
        rarr=[]
        darr=[]
        next=len(senate)
        for i in range(0, len(senate)):
            rarr.append(i) if senate[i]=="R" else darr.append(i)
    
        # console.log(rarr, darr)
   
        while len(rarr)>0 and len(darr)>0:
        
            r=rarr[0]
            d=darr[0]
            rarr.pop(0)
            darr.pop(0)
            if r<d:         
                rarr.append(next)
            else:
                darr.append(next)
                
            
            next+=1
           
        if len(rarr)==0:
            return "Dire"
        else:
            return "Radiant"