### 第12周 链表（5.23-5.29）

#### 题目（中等）

- [LeetCode #143 重排链表](https://leetcode.cn/problems/reorder-list/)

#### 思路

- 找到链表的中点，将其分为left和right两个链表， 如原始链表为 1 -> 2 -> 3 -> 4 -> 5，则变为left：1 -> 2 -> 3，right：4 -> 5
- 翻转right链表，则变为：5 -> 4
- 构造新链表：依次从left链表的左侧和翻转后right的左侧各取一个值进行拼接
  - 第一次拼接：left取出1，right取出5，变为1 -> 5
  - 第二次：left取出2，right取出4: 变为 1 -> 5 -> 2 -> 4
  - 最后一次为3，则最终链表为 1 -> 5 -> 2 -> 4 -> 3

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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  const hair = new ListNode(-1, head);
  let left = hair;
  let right = hair;

  // 找到链表中点
  while (right && right.next) {
    right = right.next.next;
    left = left.next;
  }
  // 分为两个链表
  right = left.next;
  left.next = null;
  left = head;
  // 翻转右链表
  right = reverse(right);

  // 构造新链表
  while (left && right) {
    let lNext = left.next;
    let rNext = right.next;
    right.next = left.next;
    left.next = right;
    left = lNext;
    right = rNext;
  }

  return hair.next;
};

function reverse(head) {
  let temp = new ListNode(-1);
  while (head) {
    let next = head.next;
    head.next = temp.next;
    temp.next = head;
    head = next;
  }
  return temp.next;
}

```