class Solution {
    public double average(int[] salary) {
        
        Arrays.sort(salary);
        int count = salary.length;
        int sum=0;
        for(int i=1;i<count-1;i++){
            sum+=salary[i];
        }
  
        return (double) sum/(count-2);
    }
}