### 第6周：算法（3.28-4.3）

#### 题目（简单）

- [LeetCode #860 柠檬水找零(简单)](https://leetcode-cn.com/problems/lemonade-change/)

#### 思路

有以下几种情况

- 5美元：不需要找零
- 10美元：需找零5美元，没有5美元则无法找零
- 20美元：
  - 一种是一张10美元和一张五美元，另一种是3张5美元的，如果两种组合都没有，无法找零
  - 能正确找零时，优先使用第一种找零方式

所以我们可以维护两个变量来记录手中拥有5美元和10美元的数量

代码:

```javascript
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let fiveCount = 0;
  let tenCount = 0;

  for (const bill of bills) {
    if (bill === 5) fiveCount++;
    if (bill === 10) {
      fiveCount--;
      tenCount++;
    }
    if (bill === 20) {
      if (tenCount && fiveCount) {
        fiveCount--;
        tenCount--;
      } else if (fiveCount >= 3) {
        fiveCount -= 3;
      } else {
        return false;
      }
    }
    if (fiveCount < 0 || tenCount < 0) return false;
  }
  return true;
};
```
