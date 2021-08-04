
//优先把左节点统一放入栈中，根据栈后进先出，最先出栈的是最左的节点，然后判断当前出栈的节点有没有右孩子，
// 有右孩子再执行一遍中序操作
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
        if(root.right){
            root = root.right
        }
    }
}