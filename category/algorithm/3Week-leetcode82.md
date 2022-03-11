### 第3周：算法-链表篇(链表删除)（3.7-3.13）

#### 题目（中等）

- [LeetCode #82 删除排序链表中的重复元素 II](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/)

#### 思路

- 创建一个虚拟头节点，因为删除重复元素可能需要删除第一个
- 定义一个pre指针指向虚拟头节点，cur指针指向head节点
- 遍历链表
- 如果cur和cur.next值相同，那么cur继续向前移动，pre不动
- 等到不同时，将pre.next指向cur.next，这样就能一次跳过多个重复的数了
- 如果值不等，pre和cur一起向前移动


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
  let dummy = new ListNode(null, head);
  let pre = dummy;
  let cur = head;

  while (cur && cur.next) {
    if (cur.next.val === pre.next.val) {
      // 如果cur和cur.next值相同，那么cur继续向前移动，pre不动
      while (cur && cur.next && cur.val === cur.next.val) {
        cur = cur.next;
      }
      // 不同时，将pre.next指向cur.next，这样就能一次跳过多个重复的数了
      pre.next = cur.next;
      cur = cur.next;
    } else {
      // 如果值不等，pre和cur一起向前移动
      cur = cur.next;
      pre = pre.next;
    }
  }

  return dummy.next;
};

```

