/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num == 0) 
        return "Zero";
    
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
    const thousands = ["", "Thousand", "Million", "Billion"]

    const helper = num => {
        let str=""
        if(num === 0) 
            return ""
        let d =0
        if(num>99){
            str += ones[parseInt(num/100)] + " Hundred "
            num %= 100
        }
        
        if(num < 20){
            str += ones[num] +" "
        }
        else{
            str += tens[parseInt(num/10)] + " "
            num %= 10
            
            str += ones[num] + " "
        }
        
        return str
    }
    
    

        
    
        let words = ""

        let i = 0;
        while (num > 0) {
            if (num % 1000 != 0) {
                words = helper(num % 1000) + thousands[i] + " " + words;
            }
            num = parseInt(num/1000)
            i++;
        }

  
        words = words.replaceAll("  ", " ")
        return words.trim().trimStart()
        
        
};