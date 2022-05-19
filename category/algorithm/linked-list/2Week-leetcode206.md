### 第一周：算法-链表篇（2.21-2.27）

#### 题目（简单）

- [LeetCode #206 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

#### 思路

1. 定义三个指针，pre指向空，cur指向头节点，next指向cur节点所指向节点的下一个节点
2. 将cur指向的节点指向pre指向的节点，然后移动pre指针到cur位置，将cur移动到next位置
3. 移动pre到cur位置，移动cur到next位置，此时已经反转了第一个节点
4. 将next指向cur指针指向节点的下一个节点，重复上面的步骤
5. 当cur为null时，反转结束

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
var reverseList = function (head) {
  if (!head) return null;
  let pre = null;
  let cur = head;

  while (cur !== null) {
    // 记录next节点
    let next = cur.next;
    // 反转指针
    cur.next = pre;
    // pre 往前
    pre = cur;
    // cur 往前
    cur = next;
  }

  return pre;
};
```

while中的语句可以使用es6的语法

```javascript
[cur.next, pre, cur] = [pre, cur, cur.next]
```



