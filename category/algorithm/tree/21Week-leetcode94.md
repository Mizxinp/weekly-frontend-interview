### 第 21 周 【树】-二叉树（9.12-9.18）

#### 题目

- [LeetCode #94 二叉树的中序遍历(简单)](https://leetcode.cn/problems/binary-tree-inorder-traversal/)

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
var inorderTraversal = function (root) {
  if (!root) return [];
  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right),
  ];
};
```

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
var inorderTraversal = function (root) {
  if (!root) return null;
  const res = [];
  const stack = [];
  const cur = root;

  while (cur || stack.length) {
    // 这个while作用是把寻找最左叶子结点的过程中，记录途经的所有结点
    while (cur) {
      stack.push(cur.val);
      cur = cur.left;
    }
    cur = stack.pop();
    res.push(cur.val);
    // 读取cur结点的右孩子
    cur = cur.right;
  }
  return res;
};
```
