### 第9周：算法-递归与栈（5.2-5.8）

#### 题目（简单）

- [LeetCode #面试题03.04 化栈为队](https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/)


#### 思路

- 定义一个栈pushStack用于进行push操作，一个栈popStack进行pop操作
- 进行push操作时，直接将元素压入pushStack中
- 当进行pop操作时，先判断popStack是否为空，为空则将pushStack的元素全部压入popStack中，不为空则直接将popStack进行弹栈操作

```javascript
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.pushStack = [];
  this.popStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.pushStack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  this.popStack = transform(this.pushStack, this.popStack);
  return this.popStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  this.popStack = transform(this.pushStack, this.popStack);
  const result = this.popStack.pop();
  this.popStack.push(result);
  return result;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.pushStack.length === 0 && this.popStack.length === 0;
};

function transform(pushStack, popStack) {
  if (popStack.length === 0) {
    while (pushStack.length !== 0) {
      popStack.push(pushStack.pop());
    }
  }
  return popStack;
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

```