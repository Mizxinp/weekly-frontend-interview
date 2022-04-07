### 第7周：算法-递归与栈（4.4-4.10）

#### 题目（简单）

- [LeetCode #20 有效的括号(简单)](https://leetcode-cn.com/problems/valid-parentheses/)

#### 思路

代码：

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ]);

  for (ch of s) {
    if (map.has(ch)) {
      stack.push(map.get(ch));
    } else {
      if (!stack.length || ch !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
```