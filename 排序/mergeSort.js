function mergeSort(arr) {
    if(arr.length>1){
        const {length} = arr
        let mid = Math.floor(length/2)
        const left = mergeSort(arr.slice(0,mid))
        const right = mergeSort(arr.slice(mid,length))
        console.log('left'+left, 'right'+right);
        return merge(left,right)
    }
    return arr
}
function merge(left,right) {
    let i = 0;
    let j = 0;
    let res = []
    while (i<left.length && j<right.length){
        if(left[i]<right[j]){
            res.push(left[i])
            i++
        }else{
            res.push(right[j])
            j++
        }
    }
    //最后可能存在某个数组没遍历完
    return res.concat(left.slice(i),right.slice(j))
}

let array = [8, 7, 0, 7, 5, 2, 5, 3, 1];
console.log(mergeSort(array))
