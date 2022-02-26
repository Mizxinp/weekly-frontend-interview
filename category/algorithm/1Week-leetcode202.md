### 第一周：算法-链表篇（2.21-2.27）

#### 题目

- [LeetCode #202 快乐数](https://leetcode-cn.com/problems/happy-number/)

#### 思路: 转换为判断链表是否有环

- 值为19时，即19 --> 82 --> 68 --> 100 --> 1
- 转换为判断链表是否有环，当遍历的节点为1时，说明没有环，就是快乐数。当遍历到有重复节点值的时候，说明链表有环，就不是快乐数

代码

```javascript
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let pre = n, cur = getNextNum(n);

  while (pre !== cur && cur !== 1) {
    pre = getNextNum(pre);
    cur = getNextNum(getNextNum(cur));
  }
  return cur === 1;
};

function getNextNum(num) {
  let next = 0;
  while (num) {
    next += Math.pow(num % 10, 2);
    num = Math.floor(num / 10)
  }
  return next
}
```



