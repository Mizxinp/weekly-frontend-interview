### 第4周：算法-链表/队列篇（3.14-3.20）

#### 题目（中等）

- [LeetCode #641 设计循环双端队列(中等)](https://leetcode-cn.com/problems/design-circular-deque/)

#### 思路

双端队列对意思是头部和尾部都可以入队和出队。需要注意的还是循环队列中向队尾队首添加删除元素时需要考虑已经处于队尾或队首位置的情况，利用取模来解决

- 定义变量max表示队列的最大容量，front表示队首的索引值，rear表示队尾的索引值，指向下一个从队尾入队元素的位置，count表示当前队列的长度
- 队首添加元素：front向前移动一位，再添加元素，count++
- 队尾添加元素：先添加元素，rear向后移动一位，count++
- 队首删除元素：front向后移动一位，count--
- 队尾删除元素：rear向前移动一位，count--
- count为0表示队列为空，count等于max表示队满

代码：
```javascript
/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.queue = new Array(k);
  this.front = 0;
  this.rear = 0;
  this.count = 0;
  this.max = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) return false;
  // 先向前移动一步再添加元素
  this.front = (this.front - 1 + this.max) % this.max;
  this.queue[this.front] = value;
  this.count += 1;
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) return false;
  // 先添加再后移动一步
  this.queue[this.rear] = value;
  this.rear = (this.rear + 1) % this.max;
  this.count += 1;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) return false;
  this.front = (this.front + 1) % this.max;
  this.count -= 1;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) return false;
    // 此时尾元素的下标应该是this.rear - 1, 在加上队列长度是为了this.rear等于0的情况
  this.rear = (this.rear - 1 + this.max) % this.max;
  this.count -= 1;
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) return -1;
  return this.queue[this.front];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) return -1;
  return this.queue[(this.rear - 1 + this.max) % this.max];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.count === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.count == this.max;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

```