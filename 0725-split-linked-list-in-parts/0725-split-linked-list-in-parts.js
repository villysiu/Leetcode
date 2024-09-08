/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let p = head
    let count = 0
    while(p){
        p = p.next;
        count++
    }
    // console.log(count)
    let cap = parseInt(count / k)
    let rem = count % k
    let res = []
    
    let x = head
    let y = x
    
    for(let i=0; i<k; i++, rem--){
        if(!x) {
            res.push(x)
            continue;
        }

        for(let i=0; i<cap + (rem>0? 1:0)-1 ; i++){
            x = x.next
        }
        let temp = x.next
        
        x.next = null
        res.push(y)
        x = temp
        y = x

    }
    return res
};