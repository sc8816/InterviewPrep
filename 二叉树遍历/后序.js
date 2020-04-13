function postOrderTravel(root) {
    let stack = [root]
    let res = []
    if(root==null) return res
    while(stack.length){
        let cur = stack.pop()
        res.unshift(cur.val)
        cur.left && stack.push(cur.left)
        cur.right && stack.push(cur.right)
    }
}