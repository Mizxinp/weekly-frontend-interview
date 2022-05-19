### 第4周：算法-队列篇（3.21-3.27）

#### 题目（中等）

- [LeetCode #933 最近的请求次数(简单)](https://leetcode-cn.com/problems/number-of-recent-calls/)

#### 思路

使用队列存储ping的记录，每次将t入队，然后判断最先的数据是否在t-3000这个范围内，不在则移出

代码：

```javascript
var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);
  while (t - 3000 > this.queue[0]) {
    this.queue.shift();
  }
  return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

```
