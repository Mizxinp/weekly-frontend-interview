### 第18周 【树】-堆与优先队列（9.5-9.11）

#### 题目

- [LeetCode #面试题 17.20 连续中值(中等)](https://leetcode.cn/problems/continuous-median-lcci/)

#### 思路

方法1: 常规方式，判断奇偶数进行响应操作即可

代码：

```javascript
/**
 * initialize your data structure here.
 */
 var MedianFinder = function() {
  this.data = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  this.data.push(num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  this.data.sort((a,b) => a-b)
  if (this.data.length % 2 === 0) {
    return (this.data[this.data.length / 2] +this.data[this.data.length / 2 -1]) / 2
  }
  return this.data[(this.data.length -1) / 2]
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
```

