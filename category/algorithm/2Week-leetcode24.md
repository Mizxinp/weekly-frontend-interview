### 第2周：算法-链表篇（2.28-3.6）

#### 题目（中等）

- [LeetCode #24两两交换链表中的节点(中等)](https://leetcode-cn.com/problems/swap-nodes-in-pairs/)

#### 思路1

直接将[K个翻转链表](https://github.com/Mizxinp/weekly-frontend-interview/blob/main/category/algorithm/2Week-leetcode25.md)中的K改为2即可

#### 思路2

![链表](../../assets/images/swapPairs.jpeg)

如上图：

- 定义一个虚拟头节点dummy，将1指向3，2指向1，dummy指向2，
- 重复这个过程即可

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
 * @return {ListNode}
 */
 var swapPairs = function(head) {
   let dummy = new ListNode(-1, head);

   let hail = dummy;

   while (hail.next && hail.next.next) {
     let pre = hail.next;
     let cur = hail.next.next;

     [pre.next, cur.next, hail.next] = [cur.next, pre, cur]

     // 交换之后此时pre相当于下一轮的hail
     hail = pre;
   }

   return dummy.next
};
```



