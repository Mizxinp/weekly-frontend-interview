### 第14周 链表（6.6-6.12）

#### 题目（简单）

- [LeetCode #剑指offer18 删除链表的节点(简单)](https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/)

#### 思路

- 遍历链表，当遍历到的节点与val相等时，修改当前节点的next指向val的next
- 考虑特殊情况，删除表头时

代码：

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  // 需要删除的是表头
  if (head.val === val) return head.next;

  let p = head;
  let q = p.next;

  while (q) {
    if (q.val === val) {
      p.next = q.next;
    }
    p = q;
    q = q.next;
  }
  return head;
};

```

