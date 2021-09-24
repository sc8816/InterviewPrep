//双向链表+hashmap

class Node {
  constructor({ key, pre = null, next = null, val }) {
    Object.assign(this, { key, pre, next, val });
  }
}

class LRUCache {
  map = new Map();
  head = new Node();
  tail = new Node();
  // 缓存最大容量，我们假设最大容量大于 1，
  size = 1;

  constructor(size) {
    this.size = size;
  }

  put(key, val) {
    if (this.head == null) {
      this.head = new Node({ key, val });
      this.tail = this.head;
      this.map.set(key, this.head);
    }
    let node = this.map.get(key);
    if (node !== null) {
      node.val = val;
      this.removeAndInsert(node);
    } else {
      let tmp = new Node({ key, val });
      if (this.map.size >= this.size) {
        //删除尾部元素
        this.map.delete(this.tail.key);
        this.tail = this.tail.pre;
        this.tail.next = null;
      }
      this.map.set(key, tmp);
      tem.next = this.head;
      this.head.pre = tmp;
      this.head = tmp;
    }
  }

  get(key) {
    let node = this.map.get(key);
    if (node !== null) {
      this.removeAndInsert(node);
      return node.val;
    }

    return null;
  }

  //将当前节点删除同时插入头部
  removeAndInsert(node) {
    //删除
    if (node === this.head) return;
    else if (node === this.tail) {
      this.tail = this.tail.pre;
      this.tail.next = null;
    } else {
      node.next.pre = node.pre;
      node.pre.next = node.next;
    }

    //插入

    node.next = this.head;
    node.pre = null;
    this.head.pre = node;
    this.head = node;
  }
}
