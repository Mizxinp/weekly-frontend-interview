### 第2周：算法-链表篇（2.28-3.6）

#### 题目（困难）

- [LeetCode #25 K个一组翻转链表](https://leetcode-cn.com/problems/reverse-nodes-in-k-group/)

#### 思路

- 创建一个虚拟头节点dummy，并将虚拟头节点指向链表的头节点
- 定义指针pre，指向虚拟头节点
- 定义一个tail指针，指向head节点
- 移动tail，找到k个节点
- 反转从head到tail节点之间的链表，可参照之前[翻转链表](https://github.com/Mizxinp/weekly-frontend-interview/blob/main/category/algorithm/2Week-leetcode206.md)，返回翻转后的链表

- 将pre指针指向tail指针所指节点
- pre指针移动到head指针位置（相当于新一轮的虚拟头节点），head指针移动到pre的下一个节点，
- tail指针再次指向pre指针所指节点
- tail节点再移动k步，如果tail为空，则证明后米不足k个节点，返回链表

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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let dummy = new ListNode(-1, head);
  let pre = dummy;

  // do {
  //   pre.next = reverse(pre.next, k);

  //   for (let i = 0; i < k && pre; i++) {
  //     pre = pre.next
  //   }

  //   if (!pre) break
  // } while (1);

  while (1) {
    pre.next = reverse(pre.next, k);

    for (let i = 0; i < k && pre; i++) {
      pre = pre.next;
    }

    if (!pre) break;
  }

  return dummy.next;
};

function reverse(head, k) {
  let pre = head;
  let count = k;

  // 判断够不够k个节点
  while (--k && pre) {
    pre = pre.next;
  }
  // 不足k个直接返回head
  if (!pre) return head;

  return reverseN(head, count);
}

function reverseN(head, n) {
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

