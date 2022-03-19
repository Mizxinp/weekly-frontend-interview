### 第4周：算法-链表/队列篇（3.14-3.20）

#### 题目（中等）

- [LeetCode #622 设计循环队列(中等)](https://leetcode-cn.com/problems/design-circular-queue/)

#### 思路

循环队列需要注意的其实就是到队尾后再进行入队操作，应该是向队首进行入队，使用取模方式的方式就可以解决这个问题，另外可以维护一个count，当入队和出对分别对count进行加1和减1，这样判队队满和对空就十分方便了

代码
```javascript
/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
   this.queue = new Array(k)
   // 记录数组元素个数
   this.count = 0
   this.front = 0
   this.rear = 0
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) return false
  this.queue[this.rear] = value
  this.count += 1
  this.rear = (this.rear + 1) % this.queue.length
  return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false
  this.front = (this.front + 1) % this.queue.length
  this.count -= 1
  return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) return -1
  return this.queue[this.front]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) return -1
  // 此时尾元素的下标应该是this.rear - 1, 在加上队列长度是为了this.rear等于0的情况
  return this.queue[(this.rear - 1 + this.queue.length) % this.queue.length]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.count === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.queue.length === this.count
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */


```