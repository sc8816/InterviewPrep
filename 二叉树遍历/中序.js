function InOrderTravel(root) {
    let res = []
    if(root==null) return res
    let stack=[]
    while (stack.length||root){
        while(root){
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        res.push(root.val)
        root = root.right
    }
}