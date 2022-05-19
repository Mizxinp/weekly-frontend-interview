### 第10周：算法-递归与栈（5.9-5.15）

#### 题目（中等）

- [LeetCode #1124 表现良好的最长时间段](https://leetcode-cn.com/problems/longest-well-performing-interval/)

#### 思路

用例：[9, 9, 6, 0, 6, 6, 9]

- 遍历hours，我们将时间超过8的计做1，小于8的记做-1， 则：[1,1,-1,-1,-1,-1,1]
- 算出前缀和preSum，则：[1，2，1，0，-1，-2，-1]
- 遍历前缀和，算出单调栈stack，则stack为：[0,5,6]
- 倒序遍历前缀和，算出最大值

代码：

```javascript
/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  const preSum = new Array(hours.length + 1).fill(0);

  // 算前缀和
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] > 8) {
      preSum[i + 1] = preSum[i] + 1;
    } else {
      preSum[i + 1] = preSum[i] - 1;
    }
  }

  // 算出单调栈stack
  const stack = [];
  stack.push(0);
  for (let i = 1; i < preSum.length; i++) {
    if (preSum[stack[stack.length - 1]] > preSum[i]) {
      stack.push(i);
    }
  }
  // 算出max
  let max = 0;
  for (let i = preSum.length - 1; i > max; i--) {
    while (preSum[stack[stack.length - 1]] < preSum[i] && stack.length) {
      max = Math.max(max, i - stack.pop());
    }
  }

  return max;
};

longestWPI([9, 9, 6, 0, 6, 6, 9]);

```
