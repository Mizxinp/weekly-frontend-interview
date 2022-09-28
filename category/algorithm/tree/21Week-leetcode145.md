### 第 21 周 【树】-二叉树（9.26-10.2）

#### 题目

- [LeetCode #145 二叉树的后序遍历(简单)](https://leetcode.cn/problems/binary-tree-postorder-traversal/)

#### 思路

递归思路

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  return recursion(root, []);
};

function recursion(root, result) {
  if (!root) return [];
  recursion(root.left, result);
  recursion(root.right, result);
  result.push(root.val);
  return result;
}
```

迭代思路

构造一个栈，合理安排入栈和出栈的时机

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return [];
  const result = [];
  const stack = [root];

  while (stack.length) {
    const cur = stack.pop();

    result.unshift(cur.val);

    if (cur.left) {
      stack.push(cur.left);
    }

    if (cur.right) [stack.push(cur.right)];
  }

  return result;
};
```
