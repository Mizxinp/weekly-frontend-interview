### 第3周：算法-链表篇(链表删除)（3.7-3.13）

#### 题目（简单）

- [LeetCode #83 删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)

#### 思路

遍历链表，依次和下一个节点做对比，当值相等时将当前节点的next指向next的next，不等则等于next即可

代码

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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return null;
  let cur = head;
  while (cur.next && cur) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return head;
};

```


