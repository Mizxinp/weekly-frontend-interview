### 第7周：算法-递归与栈（4.4-4.10）

#### 题目（中等）

- [LeetCode #331 验证二叉树的前序遍历](https://leetcode-cn.com/problems/verify-preorder-serialization-of-a-binary-tree/)

#### 思路

创建一个栈，在栈中记录一个数字，代表当前节点可能有几个节点，首先存入1代表只有一个根节点。遍历字符串，遇到#表示空节点，将栈顶元素减1。如果遇到数字，表示当前节点不为空，将栈顶数据减1，表示找到一个子节点，并且不为空的节点可能有两个子节点，再向栈中压入2，最后判断栈中是否有元素即可。

比如，preorder为："9,3,4,#,#,1,#,#,2,#,6,#,#"， 初始stack为[1]，遍历preorder

- 第一遍历元素是9，将栈顶减1，不为空再压入2，此时stack=[2]
- 遍历到3，同样减1压2，此时stack=[1,2]
- 遍历到4，同样减1压2，此时stack=[1,1,2]
- 遍历到#，减1，此时stack=[1,1,1]
- 遍历到#，减1，此时stack=[1,1]
- 遍历到1，同样减1压2，此时stack=[1,2]
- 遍历到#，减1，此时stack=[1,1]
- 遍历到#，减1，此时stack=[1]
- 遍历到2，同样减1压2，此时stack=[2]
- 遍历到#，减1，此时stack=[1]
- 遍历到6，同样减1压2，此时stack=[2]
- 遍历到#，减1，此时stack=[1]
- 遍历到#，减1，此时stack=[0]，符合要求

代码：

```javascript
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const stack = [1];
  let i = 0;
  const length = preorder.length;
  while (i < length) {
    if (!stack.length) return false;
    // 逗号则跳过
    if (preorder[i] === ",") {
      i++;
    } else if (preorder[i] === "#") {
      // 减1
      stack[stack.length - 1]--;
      // 如果等于0需要弹栈
      if (stack[stack.length - 1] === 0) {
        stack.pop();
      }
      i++;
    } else {
      // 处理多个数字
      while (i < length && preorder[i] !== ",") {
        i++;
      }
      // 栈顶减1
      stack[stack.length - 1]--;
      // 如果等于0需要弹栈
      if (stack[stack.length - 1] === 0) {
        stack.pop();
      }
      // 压入2
      stack.push(2);
    }
  }
  return stack.length === 0;
};

```
