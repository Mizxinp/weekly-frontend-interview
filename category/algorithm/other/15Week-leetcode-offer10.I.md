### 第 15 周（6.6-6.12）

#### 题目（简单）

- [LeetCode #剑指offer 10.I 斐波那契数列](https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof/)

#### 代码

```javascript
/**
 * @param {number} n
 * @return {number}
 */

var fib = function (n) {
  let initialState = [1n, 0n, 0n, 0n];
  let transformation = [1n, 1n, 1n, 0n];
  let buffer = [0n, 0n, 0n, 0n];
  matrixPower(transformation, n, buffer);
  let finalState = [0n, 0n, 0n, 0n];
  matrixMultiply(buffer, initialState, finalState);
  return finalState[2];
};

var matrixPower = function (base, exponent, result) {
  let temp = [1n, 0n, 0n, 1n];
  matrixCopy(result, temp);
  let currentBase = [0n, 0n, 0n, 0n];
  matrixCopy(currentBase, base);
  let buffer = [0n, 0n, 0n, 0n];
  while (exponent) {
    if (exponent % 2) {
      matrixMultiply(currentBase, result, buffer);
      matrixCopy(result, buffer);
    }
    matrixMultiply(base, base, currentBase);
    matrixCopy(base, currentBase);
    exponent = (exponent / 2) | 0;
  }
};

var matrixCopy = function (destination, source) {
  for (let i = 0; i < 4; i++) {
    destination[i] = source[i];
  }
};

var matrixMultiply = function (a, b, c) {
  let mod = 1000000007n;
  c[0] = (a[0] * b[0] + a[1] * b[2]) % mod;
  c[1] = (a[0] * b[1] + a[1] * b[3]) % mod;
  c[2] = (a[2] * b[0] + a[3] * b[2]) % mod;
  c[3] = (a[2] * b[1] + a[3] * b[3]) % mod;
};
```

