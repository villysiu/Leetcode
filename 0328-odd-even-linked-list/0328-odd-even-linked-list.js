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
var oddEvenList = function(head) {
    if(head===null)
        return null
    let p=head, pp=p
    let q=new ListNode(), qq=q
    
    while(p.next!==null && p.next.next!==null){
        q.next=p.next
        p.next=p.next.next
        p=p.next
        q=q.next
    }
    if(p.next!==null){
        q.next=p.next
        p.next=null
    }else{
        q.next=null
    }
//     while(pp!=null){
//         console.log(pp.val)
//         pp=pp.next
        
//     }
//     while(qq!=null){
//         console.log(qq.val)
//         qq=qq.next
        
//     }
    p.next=qq.next
    return pp
};