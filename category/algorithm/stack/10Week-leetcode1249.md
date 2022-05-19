### 第10周：算法-递归与栈（5.9-5.15）

#### 题目（中等）

- [LeetCode #1249 移除无效的括号](https://leetcode-cn.com/problems/minimum-remove-to-make-valid-parentheses/)

#### 思路

遍历s，维护一个栈结构stack用来保存无效括号的位置和值

- 当遇到 '(' 时进栈
- 当遇到 ')' 时，判断栈顶是否是'(', 是则出栈，否则进栈
- 遍历s，删除无效的括号

代码

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let arr = s.split("");
  const stack = [];
  let result = "";

  // 获取那些括号是无效的
  for (let i = 0; i < s.length; i++) {
    const ele = s[i];
    switch (ele) {
      case "(":
        stack.push({ idx: i, value: ele });
        break;
      case ")":
        if (stack.length && stack[stack.length - 1].value === "(") {
          stack.pop();
        } else {
          stack.push({ idx: i, value: ele });
        }
      default:
        break;
    }
  }
  const deleteIds = stack.map((ele) => ele.idx);
  // 删除无效括号
  arr.forEach((item, idx) => {
    if (!deleteIds.includes(idx)) {
      result += item;
    }
  });

  return result;
};

minRemoveToMakeValid("lee(t(c)o)de)");
minRemoveToMakeValid("a)b(c)d");
minRemoveToMakeValid("))((");

```
