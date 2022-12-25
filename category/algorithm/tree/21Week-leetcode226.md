### 第 21 周 【树】-二叉树（9.26-10.2）

#### 题目

- [LeetCode #226 翻转二叉树(简单)](https://leetcode.cn/problems/invert-binary-tree/)

#### 思路

- 递归遍历树中的每个结点，并将每个结点的左右孩子交换位置

代码

```javascript
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;
  // 递归交换右孩子的子结点
  const right = invertTree(root.right);
  // 递归交换左孩子的子结点
  const left = invertTree(root.left);
  // 交换当前节点的左右两个结点
  root.left = right;
  root.right = left;
  return root;
};
```
