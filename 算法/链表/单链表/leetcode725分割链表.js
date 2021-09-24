/*

给你一个头结点为 head 的单链表和一个整数 k ，请你设计一个算法将链表分隔为 k 个连续的部分。

每部分的长度应该尽可能的相等：任意两部分的长度差距不能超过 1 。这可能会导致有些部分为 null 。

这 k 个部分应该按照在链表中出现的顺序排列，并且排在前面的部分的长度应该大于或等于排在后面的长度。

返回一个由上述 k 部分组成的数组。

*/

var splitListToParts = function (head, k) {
  let len = 0;
  let node = head;
  while (node) {
    len++;
    node = node.next;
  }
  let ava = Math.floor(len / k);
  let more = len % k;
  let res = new Array(k).fill(null);
  let i = 0;
  while (head) {
    node = new ListNode();
    let pre = node;
    for (let i = 0; i < ava; i++) {
      node.val = head.val;
      node.next = i !== ava - 1 || more ? new ListNode(null) : null;
      node = node.next;
      head = head.next;
    }
    if (more > 0) {
      node.val = head.val;
      head = head.next;
      more--;
    }
    res[i] = pre;
    i++;
  }

  return res;
};
