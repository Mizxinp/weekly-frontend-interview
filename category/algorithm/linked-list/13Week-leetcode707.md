### 第12周 链表（5.23-5.29）

#### 题目（中等）

- [LeetCode #707 设计链表](https://leetcode.cn/problems/design-linked-list/)

#### 代码

```javascript
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var MyLinkedList = function () {
  this.head = null;
  this.rear = null;
  this.length = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index > this.length - 1) return -1;
  let node = this.head;
  while (index-- > 0) {
    if (node.next === null) return -1;
    node = node.next;
  }
  return node.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new ListNode(val);
  if (this.head === null) {
    this.rear = node;
  } else {
    node.next = this.head;
  }
  this.head = node;
  this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new ListNode(val);
  if (this.head === null) {
    this.head = node;
  } else {
    this.rear.next = node;
  }
  this.rear = node;
  this.length++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (this.length < index) return;
  if (index <= 0) return this.addAtHead(val);
  if (index === this.length) return this.addAtTail(val);

  let node = this.head;
  while (index-- > 1) {
    node = node.next;
  }

  let newNode = new ListNode(val);
  newNode.next = node.next;
  node.next = newNode;
  this.length++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (this.length === 0 || index < 0 || index > this.length - 1) return;
  if (index === 0) {
    this.head = this.head.next;
    this.length--;
    return;
  }

  let node = this.head;
  let curIndex = index;
  while (index-- > 1) {
    node = node.next;
  }
  if (curIndex === this.length - 1) {
    this.rear = node;
  }
  node.next = node.next.next;
  this.length--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
```

