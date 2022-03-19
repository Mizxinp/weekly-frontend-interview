### 第4周：算法-链表/队列篇（3.14-3.20）

#### 题目（中等）

- [LeetCode #138 复制带随机指针的链表(中等)](https://leetcode-cn.com/problems/copy-list-with-random-pointer/)

#### 思路

![链表](../../assets/images/copyRandomList.jpg)

如上图，虚线表示a的random指向（为了演示只画了一条random线）

我们可以对链表进行三次便利

- 第一次遍历：复制节点，复制完之后，会发现a和a1的random都指向了c，所以这时候就需要尽心第二次遍历
- 第二次遍历：更改random指向，将a的random指向c，a1的random指向c1
- 第三次遍历：将链表拆成两个链表，及a->b->c-d和a1->b1->c1->d1。这样就完成了链表的复制

代码：

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
  if (!head) return null;

  let p = head;
  let q;

  // 第一轮遍历：两两复制节点
  while (p) {
    // 创建新节点，并复制random
    q = new Node(p.val);
    q.random = p.random;
    // 改变链表指向
    q.next = p.next;
    p.next = q;
    p = q.next;
  }

  // 第二轮遍历：修正复制节点的random指向
  p = head.next;
  while (p) {
    // 即将a的random指向c，a1的random指向c1
    if (p.random) {
      p.random = p.random.next;
    }
    p = p.next;
    if (p) {
      p = p.next;
    }
  }

  // 第三轮遍历：拆成两个链表
  let newHead = head.next;
  p = head;
  while (p) {
    q = p.next;
    p.next = q.next;
    if (p.next) {
      q.next = p.next.next;
    }
    p = p.next;
  }
  return newHead;
};

```

