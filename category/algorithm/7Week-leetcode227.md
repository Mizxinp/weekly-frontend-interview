### 第7周：算法-递归与栈（4.4-4.10）

#### 题目（中等）

- [LeetCode #227 基本计数器II](https://leetcode-cn.com/problems/basic-calculator-ii/)

#### 思路

创建一个栈，对于加减号后的数字，直接压栈，对于乘除号后的数字，直接与栈顶元素计算后替换栈顶元素为计算后的结果

代码：

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const str = s.trim();
  let operator = "+";
  const length = str.length;
  const stack = [];
  let num = 0;

  for (let i = 0; i < length; i++) {
    if (!isNaN(Number(str[i])) && str[i] !== ' ') {
      num = num * 10 + Number(str[i]);
    }
    if (isNaN(Number(str[i])) || i === length - 1) {
      switch (operator) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        case "/":
          stack.push(stack.pop() / num | 0);
          break;
        default:
          new Error("error");
      }
      operator = str[i];
      num = 0;
    }
  }
  let result = stack.reduce((acc, cur) =>acc + cur, 0)
  return result
};

```
