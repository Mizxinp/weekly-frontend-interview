### 第14周 链表（6.6-6.12）

#### 题目（中等）

- [LeetCode #725 分隔链表](https://leetcode.cn/problems/split-linked-list-in-parts/)

#### 思路

- 遍历链表算出总长度length
- 再通过 length / k 算出每一项的长度
- length % k 的余数表示每项需要加1，比如[1,2,3,4,5,6,7,8,9,10]， k为3， 则余数为1，那么分为三段时，第一段就需要额外加一项，即[[1,2,3,4],[5,6,7],[8,9,10]]

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
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let length = 0;
  let node = head;
  // 计算总长度
  while (node) {
    node = node.next;
    length++;
  }

  // 每一段的长度
  const itemLength = Math.floor(length / k);
  // 即前reminder项需要多一个元素
  const reminder = length % k;
  // 计数
  let count = 0;
  const result = [];
  let dummy = new ListNode(-1);
  dummy.next = head;

  for (let i = 0; i < k; i++) {
    node = dummy;
    let j = 0;
    while (j < itemLength) {
      node = node ? node.next : null;
      j++;
    }

    if (count < reminder) {
      node = node ? node.next : null;
      count++;
    }

    result.push(dummy.next || null);
    let next = node.next || null;
    if (node) node.next = null;
    dummy.next = next;
  }

  return result;
};

```