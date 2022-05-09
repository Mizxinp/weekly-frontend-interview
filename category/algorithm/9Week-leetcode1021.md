### 第9周：算法-递归与栈（5.2-5.8）

#### 题目（简单）

- [LeetCode #1021 删除最外层的括号](https://leetcode-cn.com/problems/remove-outermost-parentheses/)

#### 思路

使用计数法，遍历 S，当遇到左括号并且 count 大于 0，则为有效的左括号，当遇到又括号并且 count 大于 1，则为有效的右括号

```Javascript
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let result = "";
  let count = 0;

  for (ch of S) {
    if (ch === "(" && count++ > 0) result += ch;
    if (ch === ")" && count-- > 1) result += ch;
  }

  return result;
};
```
