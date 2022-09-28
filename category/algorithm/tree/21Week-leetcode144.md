### 第 21 周 【树】-二叉树（9.26-10.2）

#### 题目

- [LeetCode #144 二叉树的前序遍历(简单)](https://leetcode.cn/problems/binary-tree-preorder-traversal/)

#### 思路

递归思路:

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

var preorderTraversal = function (root) {
  return preOrder(root, []);
};

function preOrder(root, result) {
  if (!root) return [];
  result.push(root.val);
  preOrder(root.left, result);
  preOrder(root.right, result);
  return result;
}
```

迭代思路:

构造一个栈，合理安排入栈和出栈的时机: 按照右 => 左 => 根的顺序入栈即可

- 将根节点入栈
- 取出栈顶结点，将节点push进结果数组
-  若栈顶结点有右孩子，则将右孩子入栈
-  若栈顶结点有左孩子，则将左孩子入栈

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

var preorderTraversal = function (root) {
  if (!root) return [];
  const result = [];
  const stack = [root];
  while (stack.length) {
    const cur = stack.pop();

    result.push(cur.val);

    if (cur.right) {
      stack.push(cur.right);
    }

    if (cur.left) {
      stack.push(cur.left);
    }
  }

  return result;
};
```
