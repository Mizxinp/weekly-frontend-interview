### 第7周：算法-递归与栈（4.4-4.10）

#### 题目（中等）

- [LeetCode #946 验证栈序列](https://leetcode-cn.com/problems/validate-stack-sequences/)

#### 思路

维护一个栈，遍历pushed，当栈顶元素与popped的第一个元素相等时，将栈顶元素出栈，并且删除popped的第一个元素，最后判断栈是否为空就可，为空表示正确

代码

```javascript
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

var validateStackSequences = function (pushed, popped) {
  const stack = [];
  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);
    while (stack[stack.length - 1] === popped[0] && stack.length > 0) {
      stack.pop();
      popped.shift();
    }
  }

  return !stack.length;
};

```
