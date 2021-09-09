/**
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 请你找出并返回这两个正序数组的 中位数 。
 */

var findMedianSortedArrays = function (nums1, nums2) {
  let l1 = nums1.length;
  let l2 = nums2.length;
  let totalLen = l1 + l2;
  // 查找第k小的数字
  let findK = (nums1, nums2, k) => {
    let index1 = 0;
    let index2 = 0;
    let l1 = nums1.length;
    let l2 = nums2.length;
    while (true) {
      if (index1 === l1) return nums2[index2 + k - 1];
      if (l2 === index2) return nums1[index1 + k - 1];
      if (k === 1) return Math.min(nums1[index1], nums2[index2]);
      let half = k >> 1;
      let newIndex1 = Math.min(index1 + half, l1) - 1; //因为我们取值时候索引需要减一
      let newIndex2 = Math.min(index2 + half, l2) - 1;
      if (nums1[newIndex1] <= nums2[newIndex2]) {
        k -= newIndex1 - index1 + 1;
        index1 = newIndex1 + 1;
      } else {
        k -= newIndex2 - index2 + 1;
        index2 = newIndex2 + 1;
      }
    }
  };
  if (totalLen % 2 === 1) {
    return findK(nums1, nums2, (totalLen >> 1) + 1);
  } else {
    return (
      (findK(nums1, nums2, totalLen >> 1) +
        findK(nums1, nums2, (totalLen >> 1) + 1)) >>
      1
    );
  }
};
