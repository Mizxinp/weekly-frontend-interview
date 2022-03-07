### 第3周：算法-链表篇(链表删除)（3.7-3.13）

#### 题目（中等）

- [LeetCode #19 删除链表的倒数第 N 个结点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

#### 思路

![removeNthFromEnd](../../assets/images/removeNthFromEnd.jpg)

如上图链表，当n=2时，4节点为待删除节点，我们只需要找到待删除节点的上一个节点3，将3的next指向5即可。通过观察可以得出p点和q点刚好存在2个节点

- 定义虚拟头节点dummy，将pre指向dummy，将cur指向head节点
- 将cur向前走n步
- 然后pre和cur一起向前走，直到cur为空
- 此时的pre节点就是待删除节点的前一个节点
- 将pre.next指向pre.next.next
- 返回dummy.next即可

代码：

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
   if (!head) return null;
   let dummy = new ListNode(null, head);
   let pre = dummy;
   let cur = head;
   // 让cur走n步
   while (n--) {
     cur = cur.next;
   }

   if (!cur) return head.next;
   // cur和pre同时往前走，当cur指向null时，pre和cur刚好相隔n个节点,pre为待删除节点的前一个节点
   while (cur) {
     cur = cur.next;
     pre = pre.next;
   }
   // 删除pre的下一个节点
   pre.next = pre.next.next;
   return dummy.next
};
```

