//定义单个链表节点
class LinkNode {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.length = 0
        this.head = null
    }

    // 向链表中添加节点
    append(element) {
        let node = new LinkNode(element)
        if (this.head == null) this.head = node
        let lastNode = this.getElementAt(this.length - 1)
        lastNode.next = node
        this.length++
    }

    // 在链表的指定位置插入节点
    insert(position, element) {
        if (position < 0 || position > this.length) return false
        let node = new LinkNode(element)

        if (position === 0) {
            node.next = this.head
            this.head = node
        } else {
            let pre = this.getElementAt(position - 1)
            node.next = pre.next
            pre.next = node
        }
        this.length++
        return true
    }

    // 删除链表中指定位置的元素，并返回这个元素的值
    removeAt(position) {
        if (position < 0 || position >= this.length) return null;
        let cur = this.head
        if (position === 0) {
            this.head = cur.next
        } else {
            let pre = this.getElementAt(position - 1)
            cur = pre.next
            pre.next = cur.next
        }
        this.length--
        return cur.element
    }

    // 删除链表中对应的元素
    remove(element) {
        let idx = this.indexOf(element)
        return this.removeAt(idx)
    }

    // 在链表中查找给定元素的索引
    indexOf(element) {
        let cur = this.head
        for(let i = 0; i<this.length; i++) {
            if(cur.element === element) return i
            cur = cur.next
        }

        return -1
    }

    // 返回链表中索引所对应的元素
    getElementAt(position) {
        if (position < 0 || position > this.length) return null
        let cur = this.head
        while (position--) {
            cur = cur.next;
        }

        return cur
    }

    // 判断链表是否为空
    isEmpty() {
        return this.length === 0
    }


    // 返回链表的长度
    size() {
        return this.length
    }

    // 返回链表的头元素
    getHead() {
        return this.head
    }

    // 清空链表
    clear() {
        this.head = null
        this.length = 0
    }

    // 辅助方法，按指定格式输出链表中的所有元素，方便测试验证结果
    toString() {
        let cur = this.head
        let str = ''

        while (cur) {
            let next = cur.next;
            next = next ? next.element : 'null';
            str += `[element: ${cur.element}, next: ${next}]`
            cur = cur.next
        }

        return str
    }
}
