[[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15],[16,17,18]]
[[1,2,3,4,5,6,7,8],[9,10,11,12,13,14,15,16],[17,18,19,20,21,22,23,24],[25,26,27,28,29,30,31,32]]
​
[[1,2,3],[4,5,6],[7,8,9],[10,11,12],[13,14,15]]
​
​
solution for cisco
alternative spot counter clockwise
ArrayList<Integer> res = new ArrayList<>();
int count=0;
int top=0, bottom=matrix.length-1, left=0, right=matrix[0].length-1;
while(top<=bottom && left<=right){
// console.log(top, bottom, left, right)
for(int r=top;r<=bottom ;r++){
if(count%2==0){
res.add(matrix[r][left]);
}
count++;
}
for(int c=left+1; c<=right ;c++){
if(count%2==0){
res.add(matrix[bottom][c]);
}
count++;
}
for(int r=bottom-1;r>=top && left<right;r--){
if(count%2==0){
res.add(matrix[r][right]);
}
count++;
}
for(int c=right-1;c>left && top<bottom;c--){
if(count%2==0){
res.add(matrix[top][c]);
}
count++;
}
top++;
bottom--;
left++;
right--;
​
}
System.out.println(res.size());
System.out.println(res.get(res.size()-1));
return res;