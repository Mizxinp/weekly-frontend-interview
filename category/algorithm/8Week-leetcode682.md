### 第7周：算法-递归与栈（4.4-4.10）

#### 题目（简单）

- [LeetCode #682 棒球比赛](https://leetcode-cn.com/problems/baseball-game/)


#### 思路

使用栈记录每一次的操作结果，最后累加即可

代码

```javascript
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const stack = [];
  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case "C":
        stack.pop();
        continue;
      case "D":
        stack.push(stack.slice(-1)[0] * 2)
        continue;
      case "+":
        stack.push(stack.slice(-1)[0] + stack.slice(-2)[0])
        continue;
      default:
        stack.push(Number(ops[i]));
    }
  }
  return stack.reduce((acc, cur) => acc + cur, 0);
};

```