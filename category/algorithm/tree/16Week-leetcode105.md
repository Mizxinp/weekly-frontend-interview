### 第 16 周 二叉树（6.20-6.19）

#### 题目

- [LeetCode #105 从前序与中序遍历序列构造二叉树(中等)](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

#### 思路

- 根据前序遍历可以获取到根节点， 根据中序遍历，可以获取到右节点
- 先构建根节点，然后判断左右子树，获取左右子树的根节点
- 递归只执行即可构建整棵树

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const map = inorder.reduce(
    (acc, cur, index) => acc.set(cur, index),
    new Map()
  );

  function loop(preStartIndex, preEndIndex, iStartIndex, iEndIndex) {
    if (preStartIndex > preEndIndex) return null;
    const rootVal = preorder[preStartIndex];
    let root = new TreeNode(rootVal);
    const midIndex = map.get(rootVal);
    const leftNum = midIndex - iStartIndex;
    root.left = loop(preStartIndex + 1, preStartIndex + leftNum, iStartIndex, midIndex - 1);
    root.right = loop(preStartIndex + leftNum + 1, preEndIndex, midIndex + 1, iEndIndex);
    return root;
  }

  return loop(0, preorder.length - 1, 0, inorder.length - 1);
};

```