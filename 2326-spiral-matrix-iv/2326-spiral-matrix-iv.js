/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
    let arr = Array.from({length: m}, ()=>new Array(n).fill(-1))
    
    // const dirs = [[0,1], [1,0],[0,-1], [-1, 0]]
    let [r1, c1] = [0,0]
    let [r2, c2] = [m-1, n-1]
    while(head){    
        // console.log(r1,c1, r2,c2)
        for(let c=c1; c<=c2 && head; c++){
            arr[r1][c] = head.val
            head = head.next
        }
        for(let r=r1+1; r<=r2 && head; r++){
            arr[r][c2] = head.val
            head = head.next
        }
        for(let c=c2-1; c>=c1 && head; c--){
            arr[r2][c] = head.val
            head = head.next
        }
        for(let r=r2-1; r>=r1+1 && head; r--){
            arr[r][c1] = head.val
            head = head.next
        }
        
        r1++, c1++, r2--, c2--
        
    }
    // console.log(arr)
    // 
    return arr
};