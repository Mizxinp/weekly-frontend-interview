### 第4周：算法-队列篇（3.21-3.27）

#### 题目（简单）

- [LeetCode #859 亲密字符串(简单)](https://leetcode-cn.com/problems/buddy-strings/)

#### 思路

满足一下几种条件就是亲密字符串

- s和goal相等，并且s和goal中存在重复的字符，比如aabc和aabc
- s和goal只有两处不同，比如abcd和adcb，只有bd两处不同

代码：

```javascript
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;
  // s和goal相等且s和goal中存在重复字符
  if (s === goal) {
    return s.length > new Set(goal).size;
  }
  let m = "";
  let n = "";
  for (let i = 0; i < s.length; i++) {
    // 遍历得到不同的字符
    if (s[i] !== goal[i]) {
      m = s[i] + m;
      n += goal[i];
    }
  }

// 只有两处不同，并且交换位置相等则为亲密数
  return m.length === 2 && m === n;
};

````