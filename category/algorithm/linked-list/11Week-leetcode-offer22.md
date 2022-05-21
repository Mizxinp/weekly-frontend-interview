### 第11周（5.16-5.22）

#### 题目（简单）

- [LeetCode #剑指offer22 链表中倒数第k个节点](https://leetcode.cn/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)

#### 思路

- 使用双指针法，定义pre和cur两个指针
- 先将cur指针向前走k-1步
- 然后两个指针一起向前走
- 当cur指针走到末尾时，这时pre指针恰好处于倒数第k个数位置中

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
 * @param {number} k
 * @return {ListNode}
 */
 var getKthFromEnd = function(head, k) {
  if (!head) return head;

  let pre = head;
  let cur = head;

  // 向前走k-1步
  while (--k) {
    cur = cur.next;
  }

  // 两指针一起向前
  while (cur.next) {
    pre = pre.next;
    cur = cur.next;
  }

  return pre;
};
```

