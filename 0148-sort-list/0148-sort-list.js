/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    let arr=[]
    let node=new ListNode()
    let p=node
    while(head!==null){
        arr.push(head.val)
        head=head.next
    }
    arr.sort((a,b)=>a-b)
    // console.log(arr)
    for(let num of arr){
        node.next=new ListNode(num)
        node = node.next
    }
    return p.next
};