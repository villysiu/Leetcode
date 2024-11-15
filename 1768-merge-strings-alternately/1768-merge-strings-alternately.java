class Solution {
    public String mergeAlternately(String word1, String word2) {
        
        int commonLen = (word1.length() < word2.length()) ? word1.length() : word2.length();
        String res = "";
        for(int i=0; i<commonLen; i++){
            res = res + word1.charAt(i) + word2.charAt(i);
        }
        res += word1.substring(commonLen) + word2.substring(commonLen);
        return res;
    }
}