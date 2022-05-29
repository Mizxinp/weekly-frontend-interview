### 第12周 链表（5.23-5.29）

#### 题目（简单）

- [LeetCode #面试题02.03 删除中间节点](https://leetcode.cn/problems/delete-middle-node-lcci/)

#### 思路

单向链表是不能删除自身的，所以可以将待删除的节点的值改为它的下一个节点的值即可

代码

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

```

