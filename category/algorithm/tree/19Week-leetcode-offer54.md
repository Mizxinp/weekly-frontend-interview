### 第 19 周 二叉树（8.22-8.28）

#### 题目

- [LeetCode #剑指offer 54 二叉搜索树的第k大节点(简单)](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/)

代码：

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  if (!root) return null;
  let max = 0;
  function dfs(node) {
    if (!node) return null;
    dfs(node.right);
    if (!--k) {
      max = node.val;
      return;
    }
    dfs(node.left);
  }
  dfs(root);
  return max;
};

```

