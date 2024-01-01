# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        carry = 0
        res = ListNode(0)
        p = res
        while l1!=None or l2!=None:
            sum = carry
            
            if l1:
                sum += l1.val
                l1 = l1.next

            if l2: 
                sum += l2.val
                l2 = l2.next

 
            print(sum)
            res.next = ListNode(sum%10)
            carry = int(sum/10)
            print(carry)
            res = res.next
        if carry:
            res.next = ListNode(carry)

        return p.next
        