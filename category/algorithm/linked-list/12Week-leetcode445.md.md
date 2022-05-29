### 第12周 链表（5.23-5.29）

#### 题目（中等）

- [LeetCode #445 两数相加](https://leetcode.cn/problems/add-two-numbers-ii/)

#### 思路

一次将l1、l2压入两个栈中，再出栈进行相加操作

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const stackL1 = [];
  const stackL2 = [];

  while (l1) {
    stackL1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stackL2.push(l2.val);
    l2 = l2.next;
  }

  const hair = new ListNode(-1)

  let ten = 0
  while (stackL1.length || stackL2.length || ten) {
    const val = (stackL1.pop() || 0) + (stackL2.pop() || 0) + ten
    ten = val / 10 | 0
    let node = new ListNode(val % 10, hair.next)
    hair.next = node
  }

  return hair.next

};
```