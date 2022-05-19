### 第7周：算法-递归与栈（4.4-4.10）

#### 题目（中等）

- [LeetCode #636 函数的独占时间](https://leetcode-cn.com/problems/exclusive-time-of-functions/)


#### 思路

当碰到start时，需要停止执行，并将新函数如栈
当碰到end时，此时栈顶的一定就是当前函数，弹栈记录执行时常，并且恢复原函数的执行

代码

```javascript
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  const result = new Array(n).fill(0);
  const stack = [];

  for (const i of logs) {
    const [id, status, time] = i.split(":");
    if (status === "start") {
      if (stack.length) {
        result[stack[stack.length - 1][0]] +=
          Number(time) - stack[stack.length - 1][1];
      }
      stack.push([Number(id), Number(time)]);
    } else {
      const [pid, ptime] = stack.pop();
      result[pid] += (Number(time) - ptime + 1);
      if (stack.length) {
        stack[stack.length - 1][1] = Number(time) + 1;
      }
    }
  }
  return result;
};

```