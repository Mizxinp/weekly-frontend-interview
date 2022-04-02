### 第6周：算法（3.28-4.3）

#### 题目（中等）

- [LeetCode #621 任务调度(中等)](https://leetcode-cn.com/problems/task-scheduler/)

#### 思路

代码：

```javascript
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let taskMap = new Map();
  tasks.forEach((task) => {
    if (taskMap.has(task)) {
      const count = taskMap.get(task) + 1;
      taskMap.set(task, count);
    } else {
      taskMap.set(task, 1);
    }
  });
  // 出现最多次数的任务
  const maxTime = Math.max(...taskMap.values());
  // 重复最多次数的任务种类数
  let count = 0;
  taskMap.forEach(v => {
    if (v === maxTime) {
      count++
    }
  })
  return Math.max((maxTime - 1) * (n + 1) + count, tasks.length);
};

```
