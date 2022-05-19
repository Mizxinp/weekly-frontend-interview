### 第4周：算法-队列篇（3.21-3.27）

#### 题目（中等）

- [LeetCode #面试题 17.09 第k个数(中等)](https://leetcode-cn.com/problems/get-kth-magic-number-lcci/)

####  思路

这题的关键是如何得到这些数，因为基础因子是3，5，7，所以后续的数可以通过3、5、7做乘法而得到。

- 定义index3，index5, index7三个数组下标，起始位置都为0，初始化一个数组arr，将1添加到数组中
- 分别将3、5、7各自在数组中取得的数乘以自身，然后取三者最小值，比如第一次就是3 * arr[0]、5 * arr[0]、7 * arr[0]，所以得到的最小数字就是3，
- 将得到最小数字的那个数组下标指向下一个，比如第一次就是 index3 ++
- 重复执行，知道数组个数大于k

代码：

```javascript
/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
  const arr = [1];
  let index3 = 0;
  let index5 = 0;
  let index7 = 0;

  while (arr.length < k) {
    let res = 3 * arr[index3];
    res = Math.min(res, 5 * arr[index5]);
    res = Math.min(res, 7 * arr[index7]);

    if (3 * arr[index3] === res) index3++;
    if (5 * arr[index5] === res) index5++;
    if (7 * arr[index7] === res) index7++;

    arr.push(res)
  }

  return arr[k - 1];
};

console.log(getKthMagicNumber(3))

```