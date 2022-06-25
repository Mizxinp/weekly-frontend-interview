### 第 16 周 二叉树（6.20-6.19）

#### 题目

- [LeetCode #112 路径总和(简单)](https://leetcode.cn/problems/path-sum/)

#### 思路

- 从根节点出发，没经过一个节点就让targetSum减去当前节点的值
- 再将targetSum传递给当前节点的左右节点，如果到某个叶子结点时targetSum值为0，则返回true

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === targetSum;
  targetSum -= root.val;
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

```


