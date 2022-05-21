### 第11周（5.16-5.22）

#### 题目（中等）

- [LeetCode #剑指offer35 复杂链表的复制](https://leetcode.cn/problems/fu-za-lian-biao-de-fu-zhi-lcof/)


#### 思路

主要分为三步（假设需要复制到链表为：A -> B -> C -> D)

- 第一步(复制节点)： 复制每个节点并且拼接到原节点的后面，这一步操作完之后链表就变为了: A -> A' -> B -> B' -> C -> C' -> D -> D'
- 第二步(修正random): 经过第一步之后，复制出来的节点random指向是不正确的，比如原先A的random指向B，现在A'的random也指向了B，而正确的应该是A'的random指向B', 这里只需要将 A'.random = A'.random.random 操作即可修正random指向不正确的问题
- 最后一步(拆分链表)：经过前面两步之后random的指向都已经正确，只需要将链表拆为两个链表，最后返回复制的链表即可, 即将 A -> A' -> B -> B' -> C -> C' -> D -> D' 拆为 A -> B -> C -> D 和 A' -> B' -> C' -> D'

代码:

```javascript
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return head;

  let p = head;
  let q;

  // 复制链表
  while (p) {
    q = new ListNode(p.val);
    q.next = p.next;
    q.random = p.random;
    p.next = q;
    p = q.next;
  }

  //  修正random指向
  p = head.next;
  while (p) {
    if (p.random) {
      p.random = p.random.next;
    }

    (p = p.next) && (p = p.next);
  }

  // 将链表拆开
  p = head.next;
  q = head.next;
  while (q.next) {
    head.next = head.next.next;
    q.next = q.next.next;
    head = head.next;
    q = q.next;
  }
  head.next = null;
  return p;
};

```