### 第4周：算法-队列篇（3.21-3.27）

#### 题目（中等）

- [LeetCode #1670 设计前中后队列(中等)](https://leetcode-cn.com/problems/design-front-middle-back-queue/)

#### 思路

题目的意思是在队列的前中后位置都可以进行新增和删除操作，我们可以使用两个队列进行增删操作，定义最中间的位置在右队列的第一个，然后每次操作后调整对列，始终保持又队列比左队列多一个或者相等

代码：

```javascript
var FrontMiddleBackQueue = function () {
  this.leftArr = [];
  this.rightArr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.leftArr.unshift(val);
  // 如果左边多了，需要将左边多最后一个放到右边的第一个位置
  if (this.leftArr.length > this.rightArr.length) {
    const leftLast = this.leftArr.pop();
    this.rightArr.unshift(leftLast);
  }
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  // 左右相等，则右首添加，否则左尾部添加
  if (this.leftArr.length === this.rightArr.length) {
    this.rightArr.unshift(val);
  } else {
    this.leftArr.push(val);
  }
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.rightArr.push(val);
  // 始终保持右边和左边或者比左边多一个
  if (this.rightArr.length > this.leftArr.length + 1) {
    const rightFirst = this.rightArr.shift();
    this.leftArr.push(rightFirst);
  }
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  if (!this.rightArr.length) return -1;
  if (!this.leftArr.length) return this.rightArr.shift();
  const leftFirst = this.leftArr.shift();
  // 始终保持右边和左边或者比左边多一个
  if (this.rightArr.length > this.leftArr.length + 1) {
    const rightFirst = this.rightArr.shift();
    this.leftArr.push(rightFirst);
  }
  return leftFirst;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  if (!this.rightArr.length) return -1;
  // 相等则左尾删除，否则右首删除
  if (this.leftArr.length === this.rightArr.length) {
    return this.leftArr.pop();
  }
  return this.rightArr.shift();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  if (!this.rightArr.length) return -1;
  let rightLast = this.rightArr.pop();
  // 始终保持右边和左边或者比左边多一个
  if (this.leftArr.length > this.rightArr.length) {
    const leftLast = this.leftArr.pop();
    this.rightArr.unshift(leftLast);
  }
  return rightLast;
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */

```