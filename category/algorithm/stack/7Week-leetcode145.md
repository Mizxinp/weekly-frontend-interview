### 第7周：算法-递归与栈（4.4-4.10）

#### 题目（简单）

- [LeetCode #145 二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)

#### 思路

1.使用递归方式：递归调用方法，不断访问当前节点的左子节点，知道没有左子节点。然后再递归访问当前节点的右子节点，直到没有右节点，最后输出即可

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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const res = [];
  return recursion(root, res);
};

function recursion(node, res) {
  if (node) {
    // 递归左节点
    recursion(node.left, res);
    // 递归右节点
    recursion(node.right, res);
    res.push(node.val);
  }
  return res;
}

```
