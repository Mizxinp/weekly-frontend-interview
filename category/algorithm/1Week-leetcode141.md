### 第一周：算法-链表篇（2.21-2.27）

#### 题目(简单)

- [LeetCode #141环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)

#### 思路1: 使用快慢指针

思路：

想象一下你在跑步，要确认是否是在绕圈跑，你可以找个跑步很快的体育生，两个人一起跑，最终体育生和你再次相遇时就说明是在绕圈跑。

1. 定义两个指针，一个快指针，一个慢指针。快慢指针同时指向head节点
2. 快指针每次向前移动两步，慢指针每次向前移动一步，开始遍历链表
3. 如果链表有环，则快慢指针一定会相遇，指向同一个节点
4. 当指向同一个节点时，遍历结束

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
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false;
  // 相同起点
  let pre = head;
  let cur = head;
  while (cur && cur.next) {
    // 慢指针走一步
    pre = pre.next;
    // 快指针走两步
    cur = cur.next.next;
    // 相等则有环
    if (pre === cur) {
      return true
    }
  }
  return false
};
```

#### 思路2: 添加标志位

思路：

同样还是你在跑步，如何证明你是在绕圈跑的，还有一种方法是你在起跑的地方插个旗子，当你再次回到旗子处，说明是在绕圈。链表也是如此，立个flag，只要能再次回到这个flag，说明就是在遍历一个环形链表

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
 * @return {boolean}
 */
var hasCycle = function(head) {
  while (head) {
    // 有flag，说明是环
    if (head.flag) {
      return true
    } else {
      // 没立过flag，就立一个
      head.flag = true;
      // 接着下一步
      head = head.next;
    }
  }
  return false;
};
```

