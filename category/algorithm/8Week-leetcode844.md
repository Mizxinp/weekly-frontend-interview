### 第7周：算法-递归与栈（4.4-4.10）

#### 题目（简单）

- [LeetCode #844 比较含退格的字符串](https://leetcode-cn.com/problems/backspace-string-compare/)

#### 思路

使用栈方法，碰到'#'就弹栈，否则压栈

代码：

```javascript
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  return getText(S) === getText(T);
};

function getText(string) {
  const stack = [];
  for (const s of string) {
    if (s === "#") {
      stack.pop();
    } else {
      stack.push(s);
    }
  }
  return stack.join("");
}

```
