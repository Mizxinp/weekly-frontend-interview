### 第2周：算法-链表篇(链表反转)（2.28-3.6）

#### 题目（中等）

- [LeetCode #92 反转链表 II](https://leetcode-cn.com/problems/reverse-linked-list-ii/)

#### 思路

1. 定义虚拟头节点dummy，指向真实头节点
2. 定义pre指针指向dummy，定义count为翻转区间的节点个数
3. 循环依次将pre = pre.next，将pre指向待翻转区间的前一个节点
4. 在区间内进行翻转链表
5. 将pre.next指向翻转完成后的链表的头节点
6. 返回dummy.next，结束

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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (!head) return null
  // 创建虚拟头节点
  let dummy = new ListNode(-1, head);
  let pre = dummy;
  // 翻转链表的个数
  let count = right - left + 1;
  // 将pre指向待翻转区间头节点的前一个节点
  while (--left) {
    pre = pre.next;
  }
  // 将pre.next指向翻转后的链表头节点
  pre.next = reverse(pre.next, count);
  return dummy.next;
};

// 区间内翻转链表
function reverse(head, n) {
  let pre = null;
  let cur = head;

  while (n--) {
    [cur.next, pre, cur] = [pre, cur, cur.next];
  }
  // 这里的head是翻转前的头节点，需要指向翻转后尾部的下一个节点
  head.next = cur;
  return pre;
}
```
