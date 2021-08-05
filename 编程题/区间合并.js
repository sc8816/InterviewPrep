// 给出一个区间的集合，请合并所有重叠的区间。
//
// 示例 1:
//
// 输入: [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
//     示例 2:
//
// 输入: [[1,4],[4,5]]
// 输出: [[1,5]]
// 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。


var merge = function(intervals) {
    const {length} = intervals
    if(length===0) return intervals
    intervals.sort((a,b)=>a[0]-b[0])
    let i = 0, res=[]
    while(i<length){
        let r = intervals[i][1]
        let l = intervals[i][0]
        while(i<length-1 && intervals[i+1][0]<=r){
            i++
            r = Math.max(intervals[i][1], r)
        }
        res.push([l, r])
        i++
    }
    return res
};