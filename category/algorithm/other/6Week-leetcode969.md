### 第6周：算法（3.28-4.3）

#### 题目（中等）

- [LeetCode #969 煎饼排序(中等)](https://leetcode-cn.com/problems/pancake-sorting/)

#### 思路

遍历数组，每次将数组中最到的一个放大最后，最后数组就有序了。先找到数组中的最大一个数的下标记为maxIndex，然后将0到maxIndex的区间数组进行一次翻转，这样最大的数就在第一位了，再将数组进行一次翻转，最大的一个数就在最后了，重复以上步骤一次将剩余数组放大最后一位即可。比如[3,2,4,1]

- 第一次将最大值翻转到最前面：[4,2,3,1]
- 再进行一次翻转，将最大值放到最后：[1,3,2,4]
- 因为最后一位已经有序，我们再剩余的数组中找最大值为3，将3翻转到最前面: [3,1,2,4]
- 翻转到最后: [2,1,3,4]
- 接着翻转[2,1]即可: [1,2,3,4] 

代码：

```javascript
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
  let result = [];
  let maxIndex = 0;
  while (arr.length > 1) {
    maxIndex = getMaxIndex(arr);
    reverse(arr, maxIndex)
    if (maxIndex > 0) {
      result.push(maxIndex + 1);
    }
    reverse(arr, arr.length - 1);
    result.push(arr.length);
    arr.pop();
  }
  return result;
};

function getMaxIndex(arr) {
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

function reverse(arr, k) {
  if (k < 1) return;
  let i = 0;
  let j = k;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}

```
