/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let p=new ListNode()
    p.next = head
    let q = p
    const set = new Set(nums)
    
    while(p && p.next){
        // console.log(p.next.val)
        while(p.next && set.has(p.next.val)){
            if(p.next.next)
                p.next = p.next.next 
            else 
                p.next = null
        }    
       
        p = p.next
    }

    return q.next
};