function preOrderTravel(root) {
    let res = []
    if(!root) return res
    let stack = [root]
    while(stack.length){
        root = stack.pop()
        res.push(root.val)
        root.right && stack.push(root.right)
        root.left && stack.push(root.left)
    }
    return res
}