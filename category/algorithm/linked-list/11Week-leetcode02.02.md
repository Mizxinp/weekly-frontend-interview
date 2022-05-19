### 第11周（5.16-5.22）

#### 题目（简单）

- [LeetCode #面试题02.02 返回倒数第k个节点](https://leetcode.cn/problems/kth-node-from-end-of-list-lcci/)

#### 思路

- 先反转链表（可以去查看之前306链表反转的题解）
- 再定义个count， 遍历链表，count自增
- k与count相等时即可

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
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function (head, k) {
  if (!head) return head;
  let pre = null;
  let cur = head;
  let count = 0;

  // 反转链表
  while (cur !== null) {
    [cur.next, pre, cur] = [pre, cur, cur.next];
  }

  while (pre.next && count !== k) {
    count += 1;
    if (count !== k) {
      pre = pre.next;
    }
  }
  return pre.val;
};

```

