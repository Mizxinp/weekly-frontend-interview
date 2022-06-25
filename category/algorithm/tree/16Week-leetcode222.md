### 第 16 周 二叉树（6.20-6.19）

#### 题目

- [LeetCode #222 完全二叉树的节点个数(中等)](https://leetcode.cn/problems/count-complete-tree-nodes/)

#### 思路

- 可以自底向上计数，先找叶子节点
- 每经过一个节点就加1
- 到顶层后再加上整个树的节点个数即可

代码：
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
 * @return {number}
 */
 var countNodes = function(root) {
   if (!root) return 0
   return countNodes(root.left) + countNodes(root.right) + 1
};
```

