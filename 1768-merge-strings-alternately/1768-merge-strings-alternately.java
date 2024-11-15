class Solution {
    public String mergeAlternately(String word1, String word2) {
        if(word1.length() == 0)
            return word2;
        if(word2.length() == 0)
            return word1;
            
        StringBuilder res = new StringBuilder();
        if(word1.length() < word2.length()){
            for(int i = 0; i<word1.length(); i++){
                res.append(word1.charAt(i));
                res.append(word2.charAt(i));
            }
            
            res.append(word2.substring(word1.length()));
        }
        else {
             for(int i = 0; i<word2.length(); i++){
                res.append(word1.charAt(i));
                res.append(word2.charAt(i));
            }
            
            res.append(word1.substring(word2.length()));
        }
        return res.toString();
    }
}