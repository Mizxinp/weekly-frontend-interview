### 第4周：算法-链表/队列篇（3.14-3.20）

#### 题目（中等）

- [LeetCode #86 分隔链表(中等)](https://leetcode-cn.com/problems/partition-list/)

#### 思路

维护两个链表，一个存放比x小的元素，一个存放比x大的元素，然后遍历链表，依次与原链表的头节点进行比较，并连接到对应的链表上，然后往后移动，遍历结束后将两个链接链接起来即可

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) return null;
  // 创建两个链表
  const bigger = new ListNode();
  const smaller = new ListNode();
  // 分别定义两个指针指向创建的两个链表
  let big = bigger;
  let small = smaller;

  let cur = head;
  let next;

  while (cur) {
    next = cur.next
    cur.next = null
    // 比x小，则将存放小链表的next指向cur，然后移动链表
    if (cur.val < x) {
      [small.next, small] = [cur, cur]
    } else {
      [big.next, big] = [cur, cur]
    }
    cur = next
  }
  // 循环结束将两个链表链接起来
  small.next = bigger.next;

  return smaller.next;
};

```
