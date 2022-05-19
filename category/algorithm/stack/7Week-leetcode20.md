### 第7周：算法-递归与栈（4.4-4.10）

#### 题目（简单）

- [LeetCode #20 有效的括号(简单)](https://leetcode-cn.com/problems/valid-parentheses/)

#### 思路

维护一个map集合，key为左括号，值为相应的右括号，再创建一个栈存放左括号，遍历字符串，遇到左括号就将其压栈，遇到右括号就比较栈顶左括号对应的右括号是否与当前字符相等，不相等则返回false。最后判断栈是否为空即可

代码：

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  for (ch of s) {
    if (map.has(ch)) {
      stack.push(ch);
    } else {
      if (!stack.length || ch !== map.get(stack.pop())) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
```