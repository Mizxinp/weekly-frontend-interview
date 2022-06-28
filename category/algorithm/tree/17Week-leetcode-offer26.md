### 第 17 周 二叉树（6.27-7.3）

#### 题目

- [LeetCode #剑指offer 26 树的子结构(中等)](https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/)

#### 思路

- 判断A是否包含B，先从A中找到B树的根节点
- 找到后再去判断B树根节点下面的字节点是否和A树中的子节点相等
- 直到整个B树在A树中找到，或者节点不同

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
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (!B || !A) return false;
  return loop(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

function loop(A, B) {
  if (B === null) return true;
  if (A === null || A.val !== B.val) return false;
  return loop(A.left, B.left) && loop(A.right, B.right);
}

```
