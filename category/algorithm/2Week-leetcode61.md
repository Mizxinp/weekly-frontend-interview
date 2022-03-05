### 第2周：算法-链表篇（2.28-3.6）

#### 题目（中等）

- [LeetCode #61 旋转链表](https://leetcode-cn.com/problems/rotate-list/)

#### 思路

- 遍历链表，得到链表的长度length和尾节点
- 将尾节点指向头节点，使其变为环
- 计算新链表头节点的前一个节点，通过往前走 length - k - 1步得到
- 通过头节点的前一个节点获取头节点，并且断开前节点和头节点的指向，得到结果
- 这里要考虑k很大时，k和链表差很多的情况，其实不许旋转这么多次，只需要k对lenght取余即可

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
var rotateRight = function (head, k) {
  if (!head) return null;
  let pre = head;
  let length = 1;
  // 找到链表尾节点和链表长度
  while (pre.next) {
    pre = pre.next;
    length += 1;
  }
  // 将尾节点指向head，使其变为环
  pre.next = head;
  // 取模，k很大的情况
  const n = k % length;
  // 走几步
  const m = length - n - 1;
  // head向前走m步
  for (let i = 0; i < m; i++) {
    head = head.next;
  }
  // 将pre 指向head下个节点，再断掉head的指向
  pre = head.next;
  head.next = null;
  // 返回pre即可
  return pre;
};

```

