### 第 15 周（6.6-6.12）

#### 题目（中等）

- [LeetCode #779 第k个语法符号(中等)](https://leetcode.cn/problems/k-th-symbol-in-grammar/)

#### 思路

- 找规律
- 如果k是偶数，那就是上一行的k/2个
- k为奇数，就是上一行的k/2+1个

代码：

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  if (n === 1) return 0;
  if (k % 2 === 0) {
    return kthGrammar(n - 1, k / 2) === 0 ? 1 : 0;
  } else {
    return kthGrammar(n - 1, Math.floor(k / 2) + 1);
  }
};

```