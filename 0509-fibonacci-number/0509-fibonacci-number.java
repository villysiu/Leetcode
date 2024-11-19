class Solution {
    public int fib(int n) {
        ArrayList<Integer> nums = new ArrayList<Integer>();  
        nums.add(0);
        nums.add(1);
        if(n <= 1)
            return nums.get(n);
        
        for(int i=2; i<=n; i++){
            nums.add(nums.get(i-1) + nums.get(i-2));
        }
        return nums.get(n);
    }
}