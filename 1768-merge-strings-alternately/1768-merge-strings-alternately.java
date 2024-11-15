class Solution {
    public String mergeAlternately(String word1, String word2) {
        
        if(word1.length() == 0){
            return word2;
        }else if(word2.length() == 0){
            return word1;
        }

        StringBuilder finalWord = new StringBuilder();
        int len1 = word1.length();
        int len2 = word2.length();

        if(len1 > len2){
            for(int i = 0 ,  j = 0 ; i < len2 ; i++ , j++){
                finalWord.append(word1.charAt(i));
                finalWord.append(word2.charAt(j));
            }
            finalWord.append(word1.substring(len2));
        }else 
        {
            for(int i = 0 ,  j = 0 ; i < len1 ; i++ , j++){
                finalWord.append(word1.charAt(i));
                finalWord.append(word2.charAt(j));
            }
            finalWord.append(word2.substring(len1));
        }

        return finalWord.toString();
    }
}