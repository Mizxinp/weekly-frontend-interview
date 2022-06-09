### 第 14 周 链表（6.6-6.12）

#### 题目（中等）

- [LeetCode #面试题 02.04 分割链表](https://leetcode.cn/problems/partition-list-lcci/)

#### 思路

- 维护两个链表，left 和 right
- 遍历原链表，遇到比 x 大的就加到 right 链表中，遇到比 x 小的就加到 left 中
- 最后将两个链表拼接即可

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  // 创建left和right链表
  let left = new ListNode(0);
  const leftHead = left;
  let right = new ListNode(0);
  const rightHead = right;

  // 遍历原链表
  while (head) {
    if (head.val >= x) {
      right.next = head;
      right = right.next;
    } else {
      left.next = head;
      left = left.next;
    }
    head = head.next;
  }

  // 连接left和right
  right.next = null;
  left.next = rightHead.next;
  return leftHead.next;
};
```
