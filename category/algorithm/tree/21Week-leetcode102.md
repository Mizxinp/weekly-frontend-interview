### 第 21 周 【树】-二叉树（9.26-10.2）

#### 题目

- [LeetCode #102 二叉树的层序遍历(中等)](https://leetcode.cn/problems/binary-tree-level-order-traversal/)

#### 思路

- 运用BFS + 队列
- 对二叉树层序遍历时，每次while循环其实对应着二叉树的每一层，只要在while循环刚开始时记录这一层的结点个数
- 将这个数量范围内的元素push到一个数组即可


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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const result = []
  if (!root) return result
  const queue = []
  queue.push(root)

  while (queue.length) {
    // 保存每一层的值
    const layerNodes = []
    
    const length = queue.length

    for (let i = 0; i < length; i++) {
      const top = queue.shift()
      layerNodes.push(top.val)

      if (top.left) {
        queue.push(top.left)
      }
      if (top.right) {
        queue.push(top.right)
      }
    }

    result.push(layerNodes)
  }

  return result
};
```
